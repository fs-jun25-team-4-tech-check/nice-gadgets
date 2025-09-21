import React from 'react';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import type { Product } from '../../../types/api.types';
import styles from './ListItems.module.scss';
import Loader from '../../atoms/Loader/Loader';

interface ListItemsProps {
  products: Product[] | undefined;
  className?: string;
  isLoading?: boolean;
}

export const ListItems: React.FC<ListItemsProps> = ({
  products,
  className = '',
  isLoading = false,
}) => {
  return (
    <div className={`${styles.listContainer} ${className}`}>
      {isLoading && <Loader size={52} />}
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
