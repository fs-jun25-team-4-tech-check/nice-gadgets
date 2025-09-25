import type {
  PaginatedResponse,
  Product,
  ProductCategory,
  ProductDetails,
} from '../types';
import { API_ENDPOINTS, BASE_URL } from '../constants';

const mockNetworkDelay = 1000;

const endpointMap: Record<ProductCategory, string> = {
  phones: API_ENDPOINTS.PHONES,
  tablets: API_ENDPOINTS.TABLETS,
  accessories: API_ENDPOINTS.ACCESSORIES,
};

const allCategories: ProductCategory[] = ['phones', 'tablets', 'accessories'];

// #region Utility
function waitDelay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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

function sortProducts(
  products: Product[],
  sortBy: keyof Product,
  sortOrder: 'asc' | 'desc',
): Product[] {
  const sortedProducts = [...products];

  const getNumericValue = (value: unknown): number | null => {
    if (typeof value === 'number') return value;
    if (typeof value === 'string') {
      const match = value.match(/^(\d+)/);
      return match ? parseFloat(match[1]) : null;
    }
    return null;
  };

  sortedProducts.sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (
      sortBy === 'year' ||
      sortBy === 'capacity' ||
      sortBy === 'price' ||
      sortBy === 'fullPrice'
    ) {
      const aNum = getNumericValue(aValue);
      const bNum = getNumericValue(bValue);

      if (aNum !== null && bNum !== null) {
        const comparison = aNum - bNum;
        return sortOrder === 'asc' ? comparison : -comparison;
      }
    }

    const aStr = String(aValue).toLowerCase();
    const bStr = String(bValue).toLowerCase();

    if (aStr < bStr) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (aStr > bStr) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return sortedProducts;
}

async function fetchJson<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}/${endpoint}`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${endpoint}: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}
// #endregion

// #region Mock API
export async function mockGetAllProducts(): Promise<Product[]> {
  await waitDelay(mockNetworkDelay);
  const products = await fetchJson<Product[]>(API_ENDPOINTS.PRODUCTS);

  return addFullImagePaths(products);
}

export async function mockGetProductsById(
  itemIds: string[],
): Promise<Product[]> {
  await waitDelay(mockNetworkDelay);
  const products = await fetchJson<Product[]>(API_ENDPOINTS.PRODUCTS);

  const filteredProducts = products.filter((product) =>
    itemIds.includes(product.itemId),
  );

  return filteredProducts;
}

export async function mockGetProducts(
  page: number,
  perPage: number,
  query: string = '',
  sortBy: keyof Product = 'name',
  sortOrder: 'asc' | 'desc' = 'desc',
): Promise<PaginatedResponse<Product>> {
  await waitDelay(mockNetworkDelay);

  let allProducts = await fetchJson<Product[]>(API_ENDPOINTS.PRODUCTS);

  if (query) {
    allProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()),
    );
  }

  const sortedProducts = sortProducts(allProducts, sortBy, sortOrder);

  const paginatedProducts = paginateData(sortedProducts, page, perPage);

  paginatedProducts.data = addFullImagePaths(paginatedProducts.data);

  return paginatedProducts;
}

export async function mockGetProductsByCategory(
  category: ProductCategory,
  page: number,
  perPage: number,
  query: string = '',
  sortBy: keyof Product = 'name',
  sortOrder: 'asc' | 'desc' = 'asc',
): Promise<PaginatedResponse<Product>> {
  await waitDelay(mockNetworkDelay);

  const allProducts = await fetchJson<Product[]>(API_ENDPOINTS.PRODUCTS);

  let filteredProducts = allProducts.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase(),
  );

  if (query) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()),
    );
  }

  const sortedProducts = sortProducts(filteredProducts, sortBy, sortOrder);

  const paginatedProducts = paginateData(sortedProducts, page, perPage);

  paginatedProducts.data = addFullImagePaths(paginatedProducts.data);

  return paginatedProducts;
}

export async function mockGetProductDetails(
  itemId: string,
): Promise<ProductDetails | undefined> {
  await waitDelay(mockNetworkDelay);

  for (const category of allCategories) {
    const endpoint = endpointMap[category];

    if (!endpoint) {
      continue;
    }

    const products = await fetchJson<ProductDetails[]>(endpoint);
    const foundProduct = products.find((p) => p.id === itemId);

    if (foundProduct) {
      const productWithCategory = {
        ...addFullImagePaths(foundProduct),
        category: category,
      };

      return productWithCategory as ProductDetails;
    }
  }

  return undefined;
}

export async function mockGetProductCategoryCounts(): Promise<
  Record<ProductCategory, number>
> {
  await waitDelay(mockNetworkDelay);

  const allProducts = await fetchJson<Product[]>(API_ENDPOINTS.PRODUCTS);

  const counts = allProducts.reduce(
    (acc, product) => {
      const category = product.category.toLowerCase() as ProductCategory;
      if (acc[category] !== undefined) {
        acc[category]++;
      }
      return acc;
    },
    { phones: 0, tablets: 0, accessories: 0 } as Record<
      ProductCategory,
      number
    >,
  );

  return counts;
}

export async function mockGetHotDeals(limit: number): Promise<Product[]> {
  await waitDelay(mockNetworkDelay);

  const allProducts = await fetchJson<Product[]>(API_ENDPOINTS.PRODUCTS);

  const sortedByDiscount = allProducts.sort((a, b) => {
    const discountA = a.fullPrice - a.price;
    const discountB = b.fullPrice - b.price;
    return discountB - discountA;
  });

  const hotDeals = sortedByDiscount.slice(0, limit);

  return addFullImagePaths(hotDeals);
}

export async function mockGetRecommendedProducts(
  limit: number,
): Promise<Product[]> {
  await waitDelay(mockNetworkDelay);

  const allProducts = await fetchJson<Product[]>(API_ENDPOINTS.PRODUCTS);

  const shuffled = allProducts.sort(() => 0.5 - Math.random());
  const recommended = shuffled.slice(0, limit);

  return addFullImagePaths(recommended);
}

export async function mockGetBrandNewModels(limit: number): Promise<Product[]> {
  await waitDelay(mockNetworkDelay);

  const allProducts = await fetchJson<Product[]>(API_ENDPOINTS.PRODUCTS);

  const sortedByYear = allProducts.sort((a, b) => b.year - a.year);

  const brandNewModels = sortedByYear.slice(0, limit);

  return addFullImagePaths(brandNewModels);
}
// #endregion
