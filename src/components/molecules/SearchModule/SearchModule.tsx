import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styles from './SearchModule.module.scss';
import SearchBar from './../../atoms/SearchBar/SearchBar';
import SearchButton from './../../atoms/Buttons/SearchButton/SearchButton';

const SEARCH_QUERY_PARAM = 'query';

const SearchModule = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialQuery = searchParams.get(SEARCH_QUERY_PARAM) || '';
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(
        `/catalog/search?${SEARCH_QUERY_PARAM}=${encodeURIComponent(query.trim())}`,
      );
    }
  };

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
        <SearchButton />
      </form>
    </div>
  );
};

export default SearchModule;
