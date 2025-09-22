import React from 'react';
import styles from './CatalogLayout.module.scss';
import type { ReactNode } from 'react';

type Props = {
  controlsBarSection: ReactNode;
  productCountSection: ReactNode;
  productListSection: ReactNode;
  paginationSection: ReactNode;
};

const CatalogLayout: React.FC<Props> = ({
  controlsBarSection,
  productCountSection,
  productListSection,
  paginationSection,
}) => {
  return (
    <div className={styles.catalogLayout}>
      <div className={styles.headerSection}>
        <h1>Category Page</h1>
        {productCountSection}
      </div>

      <div className={styles.controlsSection}>{controlsBarSection}</div>

      <div className={styles.productsSection}>{productListSection}</div>

      <div className={styles.paginationSection}>{paginationSection}</div>
    </div>
  );
};

export default CatalogLayout;
