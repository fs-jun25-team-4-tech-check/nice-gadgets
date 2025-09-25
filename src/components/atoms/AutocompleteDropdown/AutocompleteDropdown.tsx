import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AutocompleteDropdown.module.scss';
import type { Product } from '../../../types';
import AutocompleteSkeleton from '../AutocompleteDropdown/AutocompleteSkeleton';

type AutocompleteDropdownProps = {
  products: Product[];
  searchQuery: string;
  isFetching?: boolean;
  onProductClick: () => void;
};

const AutocompleteDropdown: React.FC<AutocompleteDropdownProps> = ({
  products,
  searchQuery,
  isFetching,
  onProductClick,
}) => {
  if (searchQuery.trim() === '') {
    return null;
  }

  if (isFetching) {
    return (
      <div className={styles.dropdown}>
        {[...Array(5)].map((_, index) => (
          <AutocompleteSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={styles.dropdown}>
        <div className={styles.noResultsItem}>No products found</div>
      </div>
    );
  }

  return (
    <div className={styles.dropdown}>
      {products.map((product) => (
        <NavLink
          key={product.id}
          to={`/item/${product.itemId}`}
          className={styles.item}
          onClick={onProductClick}
        >
          <img
            src={product.image}
            alt={product.name}
            className={styles.itemImage}
          />
          <span className={styles.itemName}>{product.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default AutocompleteDropdown;
