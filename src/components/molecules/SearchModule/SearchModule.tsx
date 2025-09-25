import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styles from './SearchModule.module.scss';
import SearchBar from './../../atoms/SearchBar/SearchBar';
import SearchButton from './../../atoms/Buttons/SearchButton/SearchButton';
import AutocompleteDropdown from './../../atoms/AutocompleteDropdown/AutocompleteDropdown';
import { useProducts } from '../../../hooks/useProducts';
import { FiX } from 'react-icons/fi';

const SEARCH_QUERY_PARAM = 'query';

const SearchModule = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialQuery = searchParams.get(SEARCH_QUERY_PARAM) || '';
  const [query, setQuery] = useState(initialQuery);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

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
      setIsOverlayOpen(false); // Закриваємо оверлей після пошуку
    }
  };

  const handleInputFocus = () => setIsInputFocused(true);
  const handleInputBlur = () => {
    setTimeout(() => setIsInputFocused(false), 200);
  };

  const showDropdown = isInputFocused && query.trim() !== '';

  return (
    <div className={styles.container}>
      {/* Десктопний варіант */}
      <form
        className={styles.searchModuleDesktop}
        onSubmit={handleSearch}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      >
        <SearchBar
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        {showDropdown && (
          <AutocompleteDropdown
            products={suggestions}
            searchQuery={query}
            isFetching={isFetching}
          />
        )}
      </form>

      {/* Мобільна кнопка */}
      <div className={styles.searchMobileButton}>
        <SearchButton onClick={() => setIsOverlayOpen(true)} />
      </div>

      {/* Оверлей для мобільних */}
      {isOverlayOpen && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <button
              className={styles.closeButton}
              onClick={() => setIsOverlayOpen(false)}
            >
              <FiX size={24} />
            </button>
            <form
              onSubmit={handleSearch}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className={styles.searchForm}
            >
              <SearchBar
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
              />
            </form>
            {showDropdown && (
              <AutocompleteDropdown
                products={suggestions}
                searchQuery={query}
                isFetching={isFetching}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchModule;
