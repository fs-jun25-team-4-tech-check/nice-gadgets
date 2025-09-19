import React from 'react';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import type { Product } from '../../../types/api.types';
import styles from './ListItems.module.scss';

interface ListItemsProps {
  products: Product[] | undefined;
}

export const ListItems: React.FC<ListItemsProps> = ({ products }) => {
  return (
    <div className={styles.listContainer}>
      {products?.map((product) => (
        <ProductCard
          key={product.itemId}
          product={product}
          className={styles.listItem}
        />
      ))}
    </div>
  );
};
