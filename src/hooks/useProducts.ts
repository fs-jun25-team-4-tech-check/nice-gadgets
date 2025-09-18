import { keepPreviousData, useQuery } from '@tanstack/react-query';
import {
  getAllProducts,
  getProductById,
  getProductDetails,
  getProducts,
  getProductsByCategory,
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

export const useProducts = (page: number = 1, perPage: number = 12) => {
  return useQuery<PaginatedResponse<Product>, Error>({
    queryKey: ['products', { page, perPage }],
    queryFn: () => getProducts(page, perPage),
    staleTime,
    placeholderData: keepPreviousData,
  });
};

export const useProductsByCategory = (
  category: ProductCategory,
  page: number = 1,
  perPage: number = 12,
) => {
  return useQuery<PaginatedResponse<Product>, Error>({
    queryKey: ['products', { category, page, perPage }],
    queryFn: () => getProductsByCategory(category, page, perPage),
    staleTime,
    enabled: !!category,
    placeholderData: keepPreviousData,
  });
};

export const useProductById = (itemId: string) => {
  return useQuery<Product | undefined, Error>({
    queryKey: ['product', itemId],
    queryFn: () => getProductById(itemId),
    staleTime,
    enabled: !!itemId,
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

export const useProductCountsByCategory = () => {
  return useQuery<Product[], Error, Record<ProductCategory, number>>({
    queryKey: ['products', 'all'],
    queryFn: getAllProducts,
    staleTime,
    select: (products) => {
      const counts = products.reduce(
        (acc, product) => {
          const category = product.category as ProductCategory;
          if (!acc[category]) {
            acc[category] = 0;
          }
          acc[category]++;
          return acc;
        },
        {} as Record<ProductCategory, number>,
      );
      return counts;
    },
  });
};
