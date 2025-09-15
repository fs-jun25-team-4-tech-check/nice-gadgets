import type { Product, Phone, Tablet, Accessory } from '../types';
import { API_BASE_URL, API_ENDPOINTS } from '../constants';

async function fetchData<T>(endpoint: string): Promise<T[]> {
  const res = await fetch(`${API_BASE_URL}/${endpoint}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }
  return res.json();
}

export function getProducts(): Promise<Product[]> {
  return fetchData<Product>(API_ENDPOINTS.PRODUCTS);
}

export function getPhones(): Promise<Phone[]> {
  return fetchData<Phone>(API_ENDPOINTS.PHONES);
}

export function getTablets(): Promise<Tablet[]> {
  return fetchData<Tablet>(API_ENDPOINTS.TABLETS);
}

export function getAccessories(): Promise<Accessory[]> {
  return fetchData<Accessory>(API_ENDPOINTS.ACCESSORIES);
}
