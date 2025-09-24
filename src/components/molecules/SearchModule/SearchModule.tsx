import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styles from './SearchModule.module.scss';
import SearchBar from './../../atoms/SearchBar/SearchBar';
import SearchButton from './../../atoms/Buttons/SearchButton/SearchButton';
import AutocompleteDropdown from './../../atoms/AutocompleteDropdown/AutocompleteDropdown';
import { useProducts } from '../../../hooks/useProducts';

const SEARCH_QUERY_PARAM = 'query';

const SearchModule = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialQuery = searchParams.get(SEARCH_QUERY_PARAM) || '';
  const [query, setQuery] = useState(initialQuery);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const { data, isFetching } = useProducts(1, 5, query);

  const suggestions = data?.data || [];

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

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setIsInputFocused(false);
    }, 200);
  };

  const showDropdown = isInputFocused && query.trim() !== '';

  return (
    <div className={styles.container}>
      <form
        className={styles.searchModule}
        onSubmit={handleSearch}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      >
        <SearchBar
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <SearchButton />
      </form>
      {showDropdown && (
        <AutocompleteDropdown
          products={suggestions}
          searchQuery={query}
          isFetching={isFetching}
        />
      )}
    </div>
  );
};

export default SearchModule;
