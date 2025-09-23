import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import ActionButton from './../../atoms/Buttons/ActionButton/ActionButton';
import { usePagination } from '../../../hooks/usePagination';
import styles from './Pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagesToShowOnSide, setPagesToShowOnSide] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setPagesToShowOnSide(0);
      } else {
        setPagesToShowOnSide(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const pageNumbers = usePagination(currentPage, totalPages, pagesToShowOnSide);

  const handlePageChange = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', page.toString());
    setSearchParams(newSearchParams);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <nav className={styles.paginationContainer}>
      {
        <ActionButton
          variant="slider"
          direction="left"
          onClick={handlePrevClick}
          disabled={currentPage === 1}
        />
      }

      {pageNumbers.map((page, index) => {
        if (page === '...') {
          return (
            <span
              key={`ellipsis-${index}`}
              className={styles.ellipsis}
            >
              ...
            </span>
          );
        }

        const isSelected = Number(page) === currentPage;

        return (
          <ActionButton
            key={page}
            variant="pagination"
            isSelected={isSelected}
            params={{
              ...Object.fromEntries(searchParams.entries()),
              page: page.toString(),
            }}
            className={cn({ [styles.selected]: isSelected })}
          >
            {page}
          </ActionButton>
        );
      })}

      {
        <ActionButton
          variant="slider"
          direction="right"
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
        />
      }
    </nav>
  );
};

export default Pagination;
