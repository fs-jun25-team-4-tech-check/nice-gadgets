import type { CategoryBanner } from '../../../types/Category';
import type React from 'react';
import { useProductCategoryCounts } from '../../../hooks';
import { staticCategoryData } from '../../../data';
import { ShopByCategoryUI } from './ShopByCategoryUI';

export const ShopByCategory: React.FC = () => {
  const { data: counts, isLoading } = useProductCategoryCounts();

  const shopByCategoryBanners: CategoryBanner[] = staticCategoryData.map(
    (category) => ({
      ...category,
      productCount: counts?.[category.categorySlug] || 0,
    }),
  );

  return (
    <ShopByCategoryUI
      banners={shopByCategoryBanners}
      isLoading={isLoading}
    />
  );
};
