import React from 'react';
import { useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import ActionButton from './../../atoms/Buttons/ActionButton/ActionButton';
import styles from './Pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const pageNumbers = [];
  const [searchParams, setSearchParams] = useSearchParams();

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePrevClick = () => {
    if (currentPage > 1) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('page', (currentPage - 1).toString());
      setSearchParams(newSearchParams);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('page', (currentPage + 1).toString());
      setSearchParams(newSearchParams);
    }
  };

  return (
    <div className={styles.paginationContainer}>
      <ActionButton
        variant="slider"
        direction="left"
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      />

      {pageNumbers.map((page) => (
        <ActionButton
          key={page}
          variant="pagination"
          isSelected={page === currentPage}
          params={{ page: page.toString() }}
          className={cn({ [styles.selected]: page === currentPage })}
        >
          {page}
        </ActionButton>
      ))}

      <ActionButton
        variant="slider"
        direction="right"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default Pagination;
