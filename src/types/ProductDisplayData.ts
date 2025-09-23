import type { Product, ProductDetails } from './api.types';

export type ProductDisplayData = {
  simplified: Product | null;
  details: ProductDetails | undefined;
};
