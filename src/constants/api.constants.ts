// export const BASE_URL =
//   'https://fs-jun25-team-4-tech-check.github.io/nice-gadgets';

export const BASE_URL = import.meta.env.VITE_SUPABASE_URL;
export const BASE_URL_IMAGE = `${BASE_URL}/storage/v1/object/public/product-images/`;

export const API_ENDPOINTS = {
  ACCESSORIES: 'api/accessories.json',
  PHONES: 'api/phones.json',
  PRODUCTS: 'api/products.json',
  TABLETS: 'api/tablets.json',
} as const;
