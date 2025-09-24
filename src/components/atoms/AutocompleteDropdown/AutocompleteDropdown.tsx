import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AutocompleteDropdown.module.scss';
import type { Product } from '../../../types';

type AutocompleteDropdownProps = {
  products: Product[];
};

const AutocompleteDropdown: React.FC<AutocompleteDropdownProps> = ({
  products,
}) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <div className={styles.dropdown}>
      {products.map((product) => (
        <NavLink
          key={product.id}
          to={`/catalog/search?query=${product.name}`}
          className={styles.item}
        >
          {product.name}
        </NavLink>
      ))}
    </div>
  );
};

export default AutocompleteDropdown;
