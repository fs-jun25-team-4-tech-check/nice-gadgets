import React from 'react';
import cn from 'classnames';
import ActionButton from './../../atoms/Buttons/ActionButton/ActionButton';
import styles from './Pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
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
          onClick={() => onPageChange(page)}
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
