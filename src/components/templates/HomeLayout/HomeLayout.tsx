import type React from 'react';
import type { CategoryBanner } from '../../../types/Category';
import { ShopByCategory } from '../../organisms/ShopByCategory';
import styles from './HomeLayout.module.scss';

type Props = {
  shopByCategoryBanners: CategoryBanner[];
};

const HomeLayout: React.FC<Props> = ({ shopByCategoryBanners }) => {
  return (
    <>
      <h1 className={styles.homeTitleExample}>Home Page</h1>

      <h2>Shop by category</h2>
      <ShopByCategory categories={shopByCategoryBanners} />
    </>
  );
};

export default HomeLayout;
