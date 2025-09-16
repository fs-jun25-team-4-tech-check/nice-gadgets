import { Link } from 'react-router-dom';
import type { Category } from '../../../types/Category';
import styles from './ShopByCategory.module.scss';

const categories: Category[] = [
  {
    name: 'Mobile Phones',
    imgLink: 'src/assets/images/categories/category-phones.png',
    numberOfModels: 95,
    slug: 'phones',
  },
  {
    name: 'Tablets',
    imgLink: 'src/assets/images/categories/category-tablets.png',
    numberOfModels: 24,
    slug: 'tablets',
  },
  {
    name: 'Accesories',
    imgLink: 'src/assets/images/categories/category-accessories.png',
    numberOfModels: 100,
    slug: 'accesories',
  },
];

const colors = {
  grey: '#75767f',
  spaceGrey: '#3b3e4a',
  darkRed: '#8b1d1dff',
};

export const ShopByCategory = () => {
  const backgroundColors = [colors.grey, colors.spaceGrey, colors.darkRed];
  return (
    <>
      <h2>Shop by category</h2>
      <section className={styles.categories}>
        {categories.map((category, i) => {
          return (
            <div
              key={category.name}
              className={styles.categories_card}
            >
              <div
                style={{ backgroundColor: backgroundColors[i] }}
                className={styles.categories_imageWrapper}
              >
                <img
                  className={styles.categories_image}
                  src={category.imgLink}
                  alt={category.name}
                />
              </div>
              <Link
                className={styles.categories_link}
                to={`/catalog/${category.slug}`}
              >
                {category.name}
              </Link>
              <p className={styles.categories_modelsNumber}>
                {category.numberOfModels} models
              </p>
            </div>
          );
        })}
      </section>
    </>
  );
};
