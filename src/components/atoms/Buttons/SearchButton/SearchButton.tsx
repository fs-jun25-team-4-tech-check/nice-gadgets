import React from 'react';
import styles from './SearchButton.module.scss';

interface SearchButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Зроблено необов'язковим
  className?: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick, className }) => {
  return (
    <button
      type="submit"
      className={`${styles.searchButton} ${className}`}
      onClick={onClick}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19ZM21 21L16.65 16.65"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default SearchButton;
