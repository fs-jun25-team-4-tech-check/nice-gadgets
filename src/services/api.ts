import {
  mockGetAllProducts,
  mockGetProductCategoryCounts,
  mockGetProductDetails,
  mockGetProducts,
  mockGetProductsByCategory,
  mockGetProductsById,
} from './mockApi';
import type {
  PaginatedResponse,
  Product,
  ProductCategory,
  ProductDetails,
} from '../types';

export async function getAllProducts(): Promise<Product[]> {
  return mockGetAllProducts();
}

export async function getProductsById(
  itemIds: string[] = [],
): Promise<Product[]> {
  if (itemIds.length === 0) {
    return [];
  }
  return mockGetProductsById(itemIds);
}

export async function getProducts(
  page: number = 1,
  perPage: number = 12,
  query: string = '',
  sortBy: keyof Product = 'name',
  sortOrder: 'asc' | 'desc' = 'asc',
): Promise<PaginatedResponse<Product>> {
  return mockGetProducts(page, perPage, query, sortBy, sortOrder);
}

export async function getProductsByCategory(
  category: ProductCategory,
  page: number = 1,
  perPage: number = 12,
  query: string = '',
  sortBy: keyof Product = 'name',
  sortOrder: 'asc' | 'desc' = 'asc',
): Promise<PaginatedResponse<Product>> {
  return mockGetProductsByCategory(
    category,
    page,
    perPage,
    query,
    sortBy,
    sortOrder,
  );
}

export async function getProductDetails(
  itemId: string,
): Promise<ProductDetails | undefined> {
  return mockGetProductDetails(itemId);
}

export async function getProductCategoryCounts(): Promise<
  Record<ProductCategory, number>
> {
  return mockGetProductCategoryCounts();
}

// This function will be used when switching to real API
/*
async function fetchData<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}/${endpoint}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
*/

// And convert all other functions to have fetch
// `return fetchData<PaginatedResponse<Product>>(`/products?category=${category}&page=${page}...`);`

export type { ProductCategory, ProductDetails };
