import { Link } from 'react-router-dom';
import type { CategoryBanner } from '../../../types/Category';
import styles from './ShopByCategory.module.scss';

type Props = {
  banners: CategoryBanner[];
  isLoading: boolean;
};

export const ShopByCategoryUI: React.FC<Props> = ({ banners, isLoading }) => {
  const baseCategoryUrl = '/catalog';
  return (
    <section className={styles.categories}>
      {banners.map((category) => {
        return (
          <div
            key={category.categorySlug}
            className={styles.categories_card}
          >
            <Link
              style={{ backgroundColor: category.backgroundColor }}
              className={styles.categories_imageWrapper}
              to={`${baseCategoryUrl}/${category.categorySlug}`}
            >
              <div
                style={{ backgroundColor: category.backgroundColor }}
                className={styles.categories_imageWrapper}
              >
                <img
                  className={styles.categories_image}
                  src={category.imgLink}
                  alt={category.name}
                />
              </div>
            </Link>

            <Link
              className={styles.categories_link}
              to={`${baseCategoryUrl}/${category.categorySlug}`}
            >
              {category.name}
            </Link>

            <p className={styles.categories_modelsNumber}>
              {isLoading ? 'Loading...' : `${category.productCount} models`}
            </p>
          </div>
        );
      })}
    </section>
  );
};
