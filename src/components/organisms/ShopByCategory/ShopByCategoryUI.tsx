import React from 'react';
import type { CategoryBanner } from '../../../types/Category';
import styles from './ShopByCategory.module.scss';
import { CategoryCard } from './CategoryCard';
import { staticCategoryData } from '../../../assets/data/staticCategoryData';
type Props = {
  banners: CategoryBanner[];
  isLoading: boolean;
};

export const ShopByCategoryUI: React.FC<Props> = ({
  banners = staticCategoryData,
  isLoading,
}) => {
  const baseCategoryUrl = '/catalog';

  return (
    <section className={styles.container}>
      <h2>Shop by category</h2>

      <div className={styles.categories}>
        {banners.map((category) => (
          <CategoryCard
            key={category.categorySlug}
            category={category}
            baseCategoryUrl={baseCategoryUrl}
            isLoading={isLoading}
          />
        ))}
      </div>
    </section>
  );
};
