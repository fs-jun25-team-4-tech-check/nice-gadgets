import { useMemo } from 'react';

const getPageNumbers = (
  currentPage: number,
  totalPages: number,
  pagesToShowOnSide: number,
): (number | string)[] => {
  if (totalPages <= 1) {
    return [1];
  }

  const finalPages: (number | string)[] = [];

  finalPages.push(1);

  const start = Math.max(2, currentPage - pagesToShowOnSide);
  const end = Math.min(totalPages - 1, currentPage + pagesToShowOnSide);

  if (start > 2) {
    finalPages.push('...');
  }

  for (let i = start; i <= end; i++) {
    finalPages.push(i);
  }

  if (end < totalPages - 1) {
    finalPages.push('...');
  }

  if (totalPages > 1) {
    if (finalPages[finalPages.length - 1] !== totalPages) {
      finalPages.push(totalPages);
    }
  }

  return finalPages;
};

export const usePagination = (
  currentPage: number,
  totalPages: number,
  pagesToShowOnSide: number = 2,
): (number | string)[] => {
  return useMemo(
    () => getPageNumbers(currentPage, totalPages, pagesToShowOnSide),
    [currentPage, totalPages, pagesToShowOnSide],
  );
};
