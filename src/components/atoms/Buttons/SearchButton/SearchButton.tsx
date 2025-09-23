import React from 'react';
import styles from './SearchButton.module.scss';
import { FiSearch } from 'react-icons/fi';

interface SearchButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick, className }) => {
  return (
    <button
      type="submit"
      className={`${styles.searchButton} ${className}`}
      onClick={onClick}
    >
      <FiSearch className={styles.icon} />
    </button>
  );
};

export default SearchButton;
