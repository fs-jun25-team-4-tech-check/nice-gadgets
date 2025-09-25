import { BASE_URL_IMAGE } from '../constants';
import type {
  PaginatedResponse,
  Product,
  ProductCategory,
  ProductDetails,
} from '../types';
// import { API_ENDPOINTS } from '../constants';
// import { productService } from './supabase';
import supabase, { mapProduct, mapProductDetails } from '../utils/supabase';

// const endpointMap: Record<ProductCategory, string> = {
//   phones: API_ENDPOINTS.PHONES,
//   tablets: API_ENDPOINTS.TABLETS,
//   accessories: API_ENDPOINTS.ACCESSORIES,
// };

// const allCategories: ProductCategory[] = ['phones', 'tablets', 'accessories'];

// #region Utility
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
    ...(item.image && { image: `${BASE_URL_IMAGE}/${item.image}` }),
    ...(item.images && {
      images: item.images.map((imagePath) => `${BASE_URL_IMAGE}/${imagePath}`),
    }),
  });

  return Array.isArray(items) ? items.map(transform) : transform(items);
}
// #endregion

// #region Supabase API
export async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    throw new Error(error.message);
  }

  const products = data.map(mapProduct);

  return addFullImagePaths(products);
}

export async function getProductsById(itemIds: string[]): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .in('item_id', itemIds);

  if (error) {
    throw new Error(error.message);
  }

  return data.map(mapProduct);
}

export async function getProducts(
  page: number,
  perPage: number,
  query: string = '',
  sortBy: keyof Product = 'name',
  sortOrder: 'asc' | 'desc' = 'desc',
): Promise<PaginatedResponse<Product>> {
  const from = (page - 1) * perPage;
  const to = from + perPage - 1;

  let supabaseQuery = supabase.from('products').select('*', { count: 'exact' });

  if (query) {
    supabaseQuery = supabaseQuery.ilike('name', `%${query}%`);
  }

  if (sortBy) {
    const isNumericSort = ['year', 'capacity', 'price', 'fullPrice'].includes(
      sortBy,
    );

    if (isNumericSort) {
      supabaseQuery = supabaseQuery.order(sortBy, {
        ascending: sortOrder === 'asc',
      });
    } else {
      supabaseQuery = supabaseQuery.order(sortBy, {
        ascending: sortOrder === 'asc',
      });
    }
  }

  const { data, error, count } = await supabaseQuery.range(from, to);

  if (error) {
    throw new Error(error.message);
  }

  const products = data.map(mapProduct);
  const totalItems = count || 0;
  const totalPages = Math.ceil(totalItems / perPage);

  return {
    data: addFullImagePaths(products),
    totalPages,
    totalItems,
    currentPage: page,
    perPage,
  };
}

export async function getProductsByCategory(
  category: ProductCategory,
  page: number,
  perPage: number,
  query: string = '',
  sortBy: keyof Product = 'name',
  sortOrder: 'asc' | 'desc' = 'asc',
): Promise<PaginatedResponse<Product>> {
  const from = (page - 1) * perPage;
  const to = from + perPage - 1;

  let supabaseQuery = supabase
    .from('products')
    .select('*', { count: 'exact' })
    .eq('category', category);

  if (query) {
    supabaseQuery = supabaseQuery.ilike('name', `%${query}%`);
  }

  if (sortBy) {
    const isNumericSort = ['year', 'capacity', 'price', 'fullPrice'].includes(
      sortBy,
    );

    if (isNumericSort) {
      supabaseQuery = supabaseQuery.order(sortBy, {
        ascending: sortOrder === 'asc',
      });
    } else {
      supabaseQuery = supabaseQuery.order(sortBy, {
        ascending: sortOrder === 'asc',
      });
    }
  }

  const { data, error, count } = await supabaseQuery.range(from, to);

  if (error) {
    throw new Error(error.message);
  }

  const products = data.map(mapProduct);
  const totalItems = count || 0;
  const totalPages = Math.ceil(totalItems / perPage);

  return {
    data: addFullImagePaths(products),
    totalPages,
    totalItems,
    currentPage: page,
    perPage,
  };
}

export async function getProductDetails(
  itemId: string,
): Promise<ProductDetails | null> {
  const { data, error } = await supabase
    .from('product_details')
    .select('*')
    .eq('id', itemId)
    .maybeSingle();

  if (error) {
    if (error.code === 'PGRST116') {
      // PGRST116: "The result contains 0 rows"
      return null;
    }
    throw new Error(error.message);
  }

  if (!data) {
    return null;
  }

  const productDetails = mapProductDetails(data);

  return addFullImagePaths(productDetails);
}

export async function getProductCategoryCounts(): Promise<
  Record<ProductCategory, number>
> {
  const { count: phones, error: phonesError } = await supabase
    .from('products')
    .select('*', { count: 'exact', head: true })
    .eq('category', 'phones');

  if (phonesError) {
    throw new Error(phonesError.message);
  }

  const { count: tablets, error: tabletsError } = await supabase
    .from('products')
    .select('*', { count: 'exact', head: true })
    .eq('category', 'tablets');

  if (tabletsError) {
    throw new Error(tabletsError.message);
  }

  const { count: accessories, error: accessoriesError } = await supabase
    .from('products')
    .select('*', { count: 'exact', head: true })
    .eq('category', 'accessories');

  if (accessoriesError) {
    throw new Error(accessoriesError.message);
  }

  return {
    phones: phones || 0,
    tablets: tablets || 0,
    accessories: accessories || 0,
  };
}

export async function getHotDeals(limit: number): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('full_price', { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(error.message);
  }

  const products = data.map(mapProduct);

  const sortedByDiscount = products.sort((a, b) => {
    const discountA = a.fullPrice - a.price;
    const discountB = b.fullPrice - b.price;
    return discountB - discountA;
  });

  return addFullImagePaths(sortedByDiscount);
}

export async function getRecommendedProducts(
  limit: number,
): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .limit(limit * 2);

  if (error) {
    throw new Error(error.message);
  }

  const products = data.map(mapProduct);

  const shuffled = products.sort(() => 0.5 - Math.random());

  const recommended = shuffled.slice(0, limit);

  return addFullImagePaths(recommended);
}

export async function getBrandNewModels(limit: number): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('year', { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(error.message);
  }

  const products = data.map(mapProduct);

  return addFullImagePaths(products);
}
// #endregion
