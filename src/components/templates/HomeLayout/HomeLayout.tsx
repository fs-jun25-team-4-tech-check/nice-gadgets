import type React from 'react';
import styles from './HomeLayout.module.scss';

type Props = {
  shopByCategorySection: React.ReactNode;
};

const HomeLayout: React.FC<Props> = ({ shopByCategorySection }) => {
  return (
    <>
      <h1 className={styles.homeTitleExample}>Home Page</h1>
      <h2>Shop by category</h2>
      {shopByCategorySection}
    </>
  );
};

export default HomeLayout;
