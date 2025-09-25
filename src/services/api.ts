import type {
  PaginatedResponse,
  Product,
  ProductCategory,
  ProductDetails,
} from '../types';
import {
  getAllProducts as supabaseGetAllProducts,
  getProductsById as supabaseGetProductsById,
  getProducts as supabaseGetProducts,
  getProductsByCategory as supabaseGetProductsByCategory,
  getProductDetails as supabaseGetProductDetails,
  getProductCategoryCounts as supabaseGetProductCategoryCounts,
  getHotDeals as supabaseGetHotDeals,
  getRecommendedProducts as supabaseGetRecommendedProducts,
  getBrandNewModels as supabaseGetBrandNewModels,
} from './supabaseApi';

export async function getAllProducts(): Promise<Product[]> {
  return supabaseGetAllProducts();
}

export async function getProductsById(
  itemIds: string[] = [],
): Promise<Product[]> {
  if (itemIds.length === 0) {
    return [];
  }
  return supabaseGetProductsById(itemIds);
}

export async function getProducts(
  page: number = 1,
  perPage: number = 12,
  query: string = '',
  sortBy: keyof Product = 'name',
  sortOrder: 'asc' | 'desc' = 'asc',
): Promise<PaginatedResponse<Product>> {
  return supabaseGetProducts(page, perPage, query, sortBy, sortOrder);
}

export async function getProductsByCategory(
  category: ProductCategory,
  page: number = 1,
  perPage: number = 12,
  query: string = '',
  sortBy: keyof Product = 'name',
  sortOrder: 'asc' | 'desc' = 'asc',
): Promise<PaginatedResponse<Product>> {
  return supabaseGetProductsByCategory(
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
): Promise<ProductDetails | null> {
  return supabaseGetProductDetails(itemId);
}

export async function getProductCategoryCounts(): Promise<
  Record<ProductCategory, number>
> {
  return supabaseGetProductCategoryCounts();
}

export async function getHotDeals(limit: number): Promise<Product[]> {
  return supabaseGetHotDeals(limit);
}

export async function getRecommendedProducts(
  limit: number,
): Promise<Product[]> {
  return supabaseGetRecommendedProducts(limit);
}

export async function getBrandNewModels(limit: number): Promise<Product[]> {
  return supabaseGetBrandNewModels(limit);
}

/* Mock API calls
import {
  mockGetAllProducts,
  mockGetBrandNewModels,
  mockGetHotDeals,
  mockGetProductCategoryCounts,
  mockGetProductDetails,
  mockGetProducts,
  mockGetProductsByCategory,
  mockGetProductsById,
  mockGetRecommendedProducts,
} from './mockApi';

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

export async function getHotDeals(limit: number): Promise<Product[]> {
  return mockGetHotDeals(limit);
}

export async function getRecommendedProducts(
  limit: number,
): Promise<Product[]> {
  return mockGetRecommendedProducts(limit);
}

export async function getBrandNewModels(limit: number): Promise<Product[]> {
  return mockGetBrandNewModels(limit);
}
*/

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
