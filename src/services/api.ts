import type {
  Accessory,
  PaginatedResponse,
  Phone,
  Product,
  Tablet,
} from '../types';
import { BASE_URL, API_ENDPOINTS } from '../constants';

// TODO: Move somewhere else or make a better solution
export type ProductDetails = Phone | Tablet | Accessory;

// TODO: Move somewhere else or make a better solution
export type ProductCategory = 'phones' | 'tablets' | 'accessories';

let allProductsCache: Product[] | null = null;

function paginateData<T>(
  data: T[],
  page: number = 1,
  perPage: number = 10,
): PaginatedResponse<T> {
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / perPage);
  const startIndex = (page - 1) * perPage;
  const paginatedData = data.slice(startIndex, startIndex + perPage);

  return {
    data: paginatedData,
    totalPages,
    totalItems,
    currentPage: page,
    perPage,
  };
}

// TODO: see if this can see improvements
// Overload signatures
function addFullImagePaths<T extends { image?: string; images?: string[] }>(
  items: T[],
): T[];
function addFullImagePaths<T extends { image?: string; images?: string[] }>(
  items: T,
): T;

function addFullImagePaths<T extends { image?: string; images?: string[] }>(
  items: T | T[],
): T | T[] {
  const transform = (item: T) => ({
    ...item,
    ...(item.image && { image: `${BASE_URL}/${item.image}` }),
    ...(item.images && {
      images: item.images.map((imagePath) => `${BASE_URL}/${imagePath}`),
    }),
  });

  return Array.isArray(items) ? items.map(transform) : transform(items);
}

async function fetchData<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}/${endpoint}`);

  if (!res.ok) {
    throw new Error(
      `Failed to fetch ${endpoint}: ${res.status} ${res.statusText}`,
    );
  }

  return res.json();
}

export function clearProductsCache(): void {
  allProductsCache = null;
}

export async function getAllProducts(): Promise<Product[]> {
  if (allProductsCache) {
    return [...allProductsCache];
  }

  const products = await fetchData<Product[]>(API_ENDPOINTS.PRODUCTS);
  allProductsCache = addFullImagePaths(products);

  return [...allProductsCache];
}

// TODO: make better fetch? `/products?page=1&perPage=12`
export async function getProducts(
  page: number = 1,
  perPage: number = 12,
): Promise<PaginatedResponse<Product>> {
  const allProducts = await getAllProducts();

  return paginateData(allProducts, page, perPage);
}

// TODO: make better fetch? `/products?category=phones&page=1...`
export async function getProductsByCategory(
  category: ProductCategory,
  page: number = 1,
  perPage: number = 12,
): Promise<PaginatedResponse<Product>> {
  const allProducts = await getAllProducts();

  const filteredProducts = allProducts.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase(),
  );

  return paginateData(filteredProducts, page, perPage);
}

export async function getProductById(
  itemId: string,
): Promise<Product | undefined> {
  const allProducts = await getAllProducts();

  return allProducts.find((product) => product.itemId === itemId);
}

export async function getProductDetails(
  itemId: string,
  category: ProductCategory,
): Promise<ProductDetails | undefined> {
  let endpoint = '';
  const lowerCaseCategory = category.toLowerCase();

  // TODO: Make better switch?
  switch (lowerCaseCategory) {
    case 'phones':
      endpoint = API_ENDPOINTS.PHONES;
      break;
    case 'accessories':
      endpoint = API_ENDPOINTS.ACCESSORIES;
      break;
    case 'tablets':
      endpoint = API_ENDPOINTS.TABLETS;
      break;
    default:
      throw new Error(`Invalid category: ${category}`);
  }

  const products = await fetchData<ProductDetails[]>(endpoint);

  const product = products.find((p) => p.id === itemId);

  if (!product) {
    return undefined;
  }

  return addFullImagePaths(product);
}
