import type { ProductCategory } from './api.types';

export interface CategoryBannerData {
  name: string;
  categorySlug: ProductCategory;
  imgLink: string;
  backgroundColor: string;
  videoLink: string;
}

export interface CategoryBanner extends CategoryBannerData {
  productCount?: number;
}
