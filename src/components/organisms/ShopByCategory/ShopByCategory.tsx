import type { CategoryBanner } from '../../../types/Category';
import type React from 'react';
import { useProductCategoryCounts } from '../../../hooks';
import { ShopByCategoryUI } from './ShopByCategoryUI';
import categoryData from './../../../assets/data/categories.json';
import type { ProductCategory } from '../../../types';

export const ShopByCategory: React.FC = () => {
  const { data: counts, isLoading } = useProductCategoryCounts();

  const shopByCategoryBanners: CategoryBanner[] = categoryData.map(
    (category) => ({
      ...category,
      categorySlug: category.categorySlug as ProductCategory,
      productCount: counts?.[category.categorySlug as ProductCategory] || 0,
    }),
  );

  return (
    <ShopByCategoryUI
      banners={shopByCategoryBanners}
      isLoading={isLoading}
    />
  );
};
