import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styles from './SearchModule.module.scss';
import SearchBar from './../../atoms/SearchBar/SearchBar';
import SearchButton from './../../atoms/Buttons/SearchButton/SearchButton';
import AutocompleteDropdown from './../../atoms/AutocompleteDropdown/AutocompleteDropdown';
import { useProducts } from '../../../hooks/useProducts';
import { TfiClose as CloseIcon } from 'react-icons/tfi';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const SEARCH_QUERY_PARAM = 'query';
const DEBOUNCE_TIMER = 500;

const SearchModule = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialQuery = searchParams.get(SEARCH_QUERY_PARAM) || '';
  const [query, setQuery] = useState(initialQuery);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const debouncedQuery = useDebounce(query, DEBOUNCE_TIMER);

  const { data, isFetching } = useProducts(1, 5, debouncedQuery);
  const suggestions = data?.data || [];

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOverlayOpen &&
        overlayRef.current &&
        !overlayRef.current.contains(event.target as Node)
      ) {
        setIsOverlayOpen(false);
      }
    };

    if (isOverlayOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOverlayOpen]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(
        `/catalog/search?${SEARCH_QUERY_PARAM}=${encodeURIComponent(
          query.trim(),
        )}`,
      );
      setIsOverlayOpen(false);
      setIsInputFocused(false);
    }
  };

  const handleInputFocus = () => setIsInputFocused(true);
  const handleInputBlur = () => {
    setTimeout(() => setIsInputFocused(false), 200);
  };

  const handleAutocompleteClick = () => {
    setIsOverlayOpen(false);
  };

  const showDropdown = isInputFocused && debouncedQuery.trim() !== '';

  return (
    <div className={styles.container}>
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
            searchQuery={debouncedQuery}
            isFetching={isFetching}
            onProductClick={handleAutocompleteClick}
          />
        )}
      </form>

      <div className={styles.searchMobileButton}>
        <SearchButton onClick={() => setIsOverlayOpen(true)} />
      </div>

      {isOverlayOpen && (
        <div className={styles.overlay}>
          <div
            ref={overlayRef}
            className={styles.overlayContent}
          >
            <button
              className={styles.closeButton}
              onClick={() => setIsOverlayOpen(false)}
            >
              <CloseIcon size={24} />
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
                searchQuery={debouncedQuery}
                isFetching={isFetching}
                onProductClick={handleAutocompleteClick}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchModule;
