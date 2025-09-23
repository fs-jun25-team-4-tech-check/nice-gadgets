import React from 'react';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      type="text"
      className={styles.searchBar}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default SearchBar;
