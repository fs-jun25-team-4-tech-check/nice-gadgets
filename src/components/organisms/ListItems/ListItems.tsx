import React from 'react';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import { useProductsByCategory } from '../../../hooks/useProducts';
import type { ProductCategory } from '../../../services/api';
import styles from './ListItems.module.scss';

interface ListItemsProps {
  category: ProductCategory;
}

export const ListItems: React.FC<ListItemsProps> = ({ category }) => {
  const { data } = useProductsByCategory(category);

  return (
    <div className={styles.listContainer}>
      {data?.data.map((product) => (
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
