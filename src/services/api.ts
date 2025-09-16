import type { Product, Phone, Tablet, Accessory } from '../types';
import { BASE_URL, API_ENDPOINTS } from '../constants';

async function fetchData<T>(endpoint: string): Promise<T[]> {
  const res = await fetch(`${BASE_URL}/${endpoint}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }
  return res.json();
}

export async function getProducts(): Promise<Product[]> {
  const products = await fetchData<Product>(API_ENDPOINTS.PRODUCTS);

  return products.map((product) => ({
    ...product,
    image: `${BASE_URL}/${product.image}`,
  }));
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
