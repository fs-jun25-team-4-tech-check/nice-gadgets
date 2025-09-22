import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './SearchModule.module.scss';
import SearchBar from './../../atoms/SearchBar/SearchBar';
import SearchButton from './../../atoms/Buttons/SearchButton/SearchButton';

// Визначаємо ім'я параметра пошуку в URL
const SEARCH_QUERY_PARAM = 'query';

const SearchModule = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get(SEARCH_QUERY_PARAM) || '';
  const [query, setQuery] = useState(initialQuery);

  // Оновлюємо внутрішній стан, коли параметр URL змінюється
  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  // Виправлено: параметр 'e' тепер має ім'я 'event' та явний тип
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

  return (
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
  );
};

export default SearchModule;
