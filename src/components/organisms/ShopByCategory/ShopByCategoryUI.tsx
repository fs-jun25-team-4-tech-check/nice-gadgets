import React from 'react';
import type { CategoryBanner } from '../../../types/Category';
import styles from './ShopByCategory.module.scss';
import { CategoryCard } from './CategoryCard';
import categoryData from '../../../assets/data/categories.json';

type Props = {
  banners: CategoryBanner[];
  isLoading: boolean;
};

export const ShopByCategoryUI: React.FC<Props> = ({
  banners = categoryData as Omit<CategoryBanner, 'productCount'>[],
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
