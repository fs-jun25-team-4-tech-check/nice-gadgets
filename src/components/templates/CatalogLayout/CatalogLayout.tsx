import React from 'react';
import styles from './CatalogLayout.module.scss';
import type { ReactNode } from 'react';

type Props = {
  pageTitle: string;
  backButtonSection: ReactNode;
  controlsBarSection: ReactNode;
  productCountSection: ReactNode;
  productListSection: ReactNode;
  paginationSection: ReactNode;
};

const CatalogLayout: React.FC<Props> = ({
  pageTitle,
  backButtonSection,
  controlsBarSection,
  productCountSection,
  productListSection,
  paginationSection,
}) => {
  return (
    <div className={styles.catalogLayout}>
      <div className={styles.headerSection}>
        {backButtonSection}
        <h1>{pageTitle}</h1>
        <div className={styles.countSection}>{productCountSection}</div>
      </div>

      <div className={styles.controlsSection}>{controlsBarSection}</div>

      <div className={styles.productsSection}>{productListSection}</div>

      <div className={styles.paginationSection}>{paginationSection}</div>
    </div>
  );
};

export default CatalogLayout;
