import { keepPreviousData, useQuery } from '@tanstack/react-query';
import {
  getAllProducts,
  getProductCategoryCounts,
  getProductDetails,
  getProducts,
  getProductsByCategory,
  getProductsById,
  type ProductCategory,
  type ProductDetails,
} from '../services';
import type { PaginatedResponse, Product } from '../types';

const staleTime = 1000 * 60 * 5;

// `enabled: !!prop` - will not run until prop is provided

export const useAllProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ['products', 'all'],
    queryFn: getAllProducts,
    staleTime,
    placeholderData: keepPreviousData,
  });
};

export const useProductsById = (itemIds: string[] = []) => {
  return useQuery<Product[], Error>({
    queryKey: ['products', [...itemIds].sort()],
    queryFn: () => getProductsById(itemIds),
    staleTime,
    enabled: itemIds.length > 0,
    placeholderData: keepPreviousData,
  });
};

export const useProducts = (
  page: number = 1,
  perPage: number = 12,
  query: string = '',
  sortBy: keyof Product = 'name',
  sortOrder: 'asc' | 'desc' = 'asc',
) => {
  return useQuery<PaginatedResponse<Product>, Error>({
    queryKey: ['products', { page, perPage, query, sortBy, sortOrder }],
    queryFn: () => getProducts(page, perPage, query, sortBy, sortOrder),
    staleTime,
    placeholderData: keepPreviousData,
  });
};

export const useProductsByCategory = (
  category: ProductCategory,
  page: number = 1,
  perPage: number = 12,
  query: string = '',
  sortBy: keyof Product = 'name',
  sortOrder: 'asc' | 'desc' = 'asc',
) => {
  return useQuery<PaginatedResponse<Product>, Error>({
    queryKey: [
      'products',
      { category, page, perPage, query, sortBy, sortOrder },
    ],
    queryFn: () =>
      getProductsByCategory(category, page, perPage, query, sortBy, sortOrder),
    staleTime,
    enabled: !!category,
    placeholderData: keepPreviousData,
  });
};

export const useProductCategoryCounts = () => {
  return useQuery<Record<ProductCategory, number>, Error>({
    queryKey: ['products', 'category', 'counts'],
    queryFn: getProductCategoryCounts,
    staleTime,
    placeholderData: keepPreviousData,
  });
};

export const useProductDetails = (
  itemId: string,
  category: ProductCategory,
) => {
  return useQuery<ProductDetails | undefined, Error>({
    queryKey: ['product', 'details', itemId, category],
    queryFn: () => getProductDetails(itemId, category),
    staleTime,
    enabled: !!itemId && !!category,
  });
};
