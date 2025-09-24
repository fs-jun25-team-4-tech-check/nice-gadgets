import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AutocompleteDropdown.module.scss';
import type { Product } from '../../../types';

type AutocompleteDropdownProps = {
  products: Product[];
  searchQuery: string;
};

const AutocompleteDropdown: React.FC<AutocompleteDropdownProps> = ({
  products,
  searchQuery,
}) => {
  if (products.length === 0 || searchQuery.trim() === '') {
    return null;
  }

  return (
    <div className={styles.dropdown}>
      {products.map((product) => (
        <NavLink
          key={product.id}
          to={`/item/${product.itemId}`}
          className={styles.item}
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
