import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../../../hooks/useProducts';
import styles from './SearchModule.module.scss';
import SearchBar from './../../atoms/SearchBar/SearchBar';
import SearchButton from './../../atoms/Buttons/SearchButton/SearchButton';
import { ListItems } from './../../organisms/ListItems/ListItems';

const SEARCH_QUERY_PARAM = 'query';

const SearchModule = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get(SEARCH_QUERY_PARAM) || '';
  const [query, setQuery] = useState(initialQuery);

  const { data, isLoading, isError } = useProducts(
    1,
    12,
    initialQuery,
    'name',
    'asc',
  );

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newSearchParams = new URLSearchParams(searchParams);
    if (query.trim()) {
      newSearchParams.set(SEARCH_QUERY_PARAM, query.trim());
    } else {
      newSearchParams.delete(SEARCH_QUERY_PARAM);
    }
    setSearchParams(newSearchParams);
  };

  const products = data?.data;

  return (
    <div className={styles.container}>
      <form
        className={styles.searchModule}
        onSubmit={handleSearch}
      >
        <SearchBar
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <SearchButton className={styles.searchButton} />
      </form>
      <div className={styles.resultsContainer}>
        {isError && <p className={styles.error}>Error loading products.</p>}
        {!isError && (
          <ListItems
            products={products}
            isLoading={isLoading}
          />
        )}
        {!isError && !isLoading && products?.length === 0 && (
          <p className={styles.noResults}>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchModule;
