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
          key={product.id}
          image={product.image}
          title={product.name}
          price={product.price}
          oldPrice={product.fullPrice}
          screen={product.screen}
          capacity={product.capacity}
          ram={product.ram}
          isInCart={false}
          isFavorite={false}
        />
      ))}
    </div>
  );
};
