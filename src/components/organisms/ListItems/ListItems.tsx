import React from 'react';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import type { Product } from '../../../types/api.types';
import styles from './ListItems.module.scss';
import ProductCardSkeleton from '../../molecules/ProductCard/ProductCardSkeleton';

interface ListItemsProps {
  products: Product[] | undefined;
  isLoading?: boolean;
  itemsCount?: number;
  className?: string;
}

export const ListItems: React.FC<ListItemsProps> = ({
  products,
  isLoading = false,
  itemsCount = 12,
  className = '',
}) => {
  return (
    <div className={`${styles.listContainer} ${className}`}>
      {isLoading ?
        Array.from({ length: itemsCount }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))
      : products?.map((product) => (
          <ProductCard
            key={product.itemId}
            product={product}
            className={styles.listItem}
          />
        ))
      }
    </div>
  );
};
