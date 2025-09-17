import type {
  // Product,
  Phone,
  Tablet,
  Accessory,
  PaginatedProducts,
} from '../types';
import { BASE_URL, API_ENDPOINTS } from '../constants';

// type CategoryPaginationProps = {
//   page: number;
//   perPage: number | 'all';
// };

async function fetchData<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}/${endpoint}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }
  return res.json();
}

export async function getProducts(
  page: number,
  perPage: number | 'all',
): Promise<PaginatedProducts> {
  const urlParams = new URLSearchParams();
  urlParams.append('page', String(page));

  if (perPage !== 'all') {
    urlParams.append('perPage', String(perPage));
  }

  const url = `${API_ENDPOINTS.PRODUCTS}?${urlParams.toString()}`;

  const data = await fetchData<PaginatedProducts>(url);

  const productsWithFullImagePaths = data.products.map((product) => ({
    ...product,
    image: `${BASE_URL}/${product.image}`,
  }));

  return {
    ...data,
    products: productsWithFullImagePaths,
  };
}

export async function getPhones(): Promise<Phone[]> {
  const phones = await fetchData<Phone>(API_ENDPOINTS.PHONES);

  return phones.map((phone) => ({
    ...phone,
    images: phone.images.map((imagePath) => `${BASE_URL}/${imagePath}`),
  }));
}

export async function getTablets(): Promise<Tablet[]> {
  const tablets = await fetchData<Tablet>(API_ENDPOINTS.TABLETS);

  return tablets.map((tablet) => ({
    ...tablet,
    images: tablet.images.map((imagePath) => `${BASE_URL}/${imagePath}`),
  }));
}

export async function getAccessories(): Promise<Accessory[]> {
  const accesories = await fetchData<Accessory>(API_ENDPOINTS.ACCESSORIES);

  return accesories.map((accessory) => ({
    ...accessory,
    images: accessory.images.map((imagePath) => `${BASE_URL}/${imagePath}`),
  }));
}
