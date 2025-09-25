import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  getAllProducts,
  getBrandNewModels,
  getHotDeals,
  getProductCategoryCounts,
  getProductDetails,
  getProducts,
  getProductsByCategory,
  getProductsById,
  getRecommendedProducts,
  type ProductCategory,
  type ProductDetails,
} from '../services';
import type { PaginatedResponse, Product } from '../types';
import { ProductToProductDetails } from '../utils';

const staleTime = 1000 * 60 * 5;

export type CardsSliderType = 'newestModels' | 'hotPrices' | 'recommended';

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

export const useRecommendedProducts = (limit: number) => {
  return useQuery<Product[], Error>({
    queryKey: ['products', 'recommended', { limit }],
    queryFn: () => getRecommendedProducts(limit),
    staleTime,
    enabled: !!limit,
    placeholderData: keepPreviousData,
  });
};

export const useHotDeals = (limit: number) => {
  return useQuery<Product[], Error>({
    queryKey: ['products', 'hot-deals', { limit }],
    queryFn: () => getHotDeals(limit),
    staleTime,
    enabled: !!limit,
    placeholderData: keepPreviousData,
  });
};

export const useBrandNewModels = (limit: number) => {
  return useQuery<Product[], Error>({
    queryKey: ['products', 'brand-new', { limit }],
    queryFn: () => getBrandNewModels(limit),
    staleTime,
    enabled: !!limit,
    placeholderData: keepPreviousData,
  });
};

export const useSliderProducts = (type: CardsSliderType, limit: number) => {
  const queryKeyMap = {
    newestModels: ['products', 'brand-new', { limit }],
    hotPrices: ['products', 'hot-deals', { limit }],
    recommended: ['products', 'recommended', { limit }],
  };

  const queryFnMap = {
    newestModels: () => getBrandNewModels(limit),
    hotPrices: () => getHotDeals(limit),
    recommended: () => getRecommendedProducts(limit),
  };

  return useQuery<Product[], Error>({
    queryKey: queryKeyMap[type],
    queryFn: queryFnMap[type],
    staleTime,
    enabled: !!limit,
    placeholderData: keepPreviousData,
  });
};

export const useSimplifiedProduct = (itemId: string) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['product', 'simplified', itemId],
    queryFn: async (): Promise<Product | null> => {
      const cachedData = queryClient.getQueryData<Product>([
        'product',
        'simplified',
        itemId,
      ]);

      if (cachedData) {
        return cachedData;
      }

      // Search through products lists
      const queryCache = queryClient.getQueryCache();
      const productsQueries = queryCache.findAll({
        queryKey: ['products'],
        type: 'active',
      });

      for (const query of productsQueries) {
        const response = query.state.data as
          | PaginatedResponse<Product>
          | undefined;

        if (response?.data) {
          const product = response.data.find((p) => p.itemId === itemId);
          if (product) {
            return product;
          }
        }
      }
      return null;
    },
    enabled: !!itemId,
    staleTime: staleTime,
    gcTime: staleTime,
  });
};

export const useProductDetails = (
  itemId: string,
  simplifiedProduct?: Product | null,
) => {
  return useQuery<ProductDetails | null>({
    queryKey: ['product', 'details', itemId],
    queryFn: () => getProductDetails(itemId),
    enabled: !!itemId,
    staleTime: staleTime,
    placeholderData:
      simplifiedProduct ?
        ProductToProductDetails(simplifiedProduct)
      : keepPreviousData,
  });
};

export const useProductDisplay = (
  itemId: string,
  fromCard: boolean = false,
) => {
  const { data: simplifiedData, error: simplifiedError } =
    useSimplifiedProduct(itemId);

  const placeholderProduct = fromCard ? simplifiedData : null;

  const {
    data: detailsData,
    isLoading: isDetailsLoading,
    isFetching: isDetailsFetching,
    error: detailsError,
    isPlaceholderData,
    isSuccess: isDetailsSuccess,
  } = useProductDetails(itemId, placeholderProduct);

  return {
    simplifiedData,
    detailsData,
    isDetailsLoading: isDetailsLoading && !isPlaceholderData,
    isFetching: isDetailsFetching,
    hasDetails: isDetailsSuccess && !isPlaceholderData,
    error: detailsError || simplifiedError,
  };
};

export const usePrefillSimplifiedProduct = () => {
  const queryClient = useQueryClient();

  return (product: Product) => {
    queryClient.setQueryData(
      ['product', 'simplified', product.itemId],
      product,
    );
  };
};
