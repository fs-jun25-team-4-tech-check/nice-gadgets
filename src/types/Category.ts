export type CategorySlug = 'phones' | 'accessories' | 'tablets';

export interface CategoryBannerData {
  name: string;
  categorySlug: CategorySlug;
  imgLink: string;
  backgroundColor: string;
}

export interface CategoryBanner extends CategoryBannerData {
  productCount: number;
}
