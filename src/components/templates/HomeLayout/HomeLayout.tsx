import type React from 'react';

import styles from './HomeLayout.module.scss';

type Props = {
  bannerSliderSection: React.ReactNode;
  shopByCategorySection: React.ReactNode;
  brandNewModelsSection: React.ReactNode;
  hotPricesSection: React.ReactNode;
};

const HomeLayout: React.FC<Props> = ({
  bannerSliderSection,
  shopByCategorySection,
  brandNewModelsSection,
  hotPricesSection,
}) => {
  return (
    <div className={styles.homeLayout}>
      <h1 className={styles.homeTitle}>Welcome to Nice Gadgets store!</h1>

      {bannerSliderSection}

      {brandNewModelsSection}

      {shopByCategorySection}

      {hotPricesSection}
    </div>
  );
};

export default HomeLayout;
