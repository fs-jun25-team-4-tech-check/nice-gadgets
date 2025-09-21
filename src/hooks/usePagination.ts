import { useMemo } from 'react';

const getPageNumbers = (
  currentPage: number,
  totalPages: number,
): (number | string)[] => {
  const pageNumbers = new Set<number | string>();
  const pagesToShowOnSide = 2;

  pageNumbers.add(1);
  pageNumbers.add(totalPages);

  for (
    let i = currentPage - pagesToShowOnSide;
    i <= currentPage + pagesToShowOnSide;
    i++
  ) {
    if (i > 1 && i < totalPages) {
      pageNumbers.add(i);
    }
  }

  const sortedPages = Array.from(pageNumbers).sort(
    (a, b) => Number(a) - Number(b),
  );
  const finalPages: (number | string)[] = [];

  sortedPages.forEach((page, index) => {
    finalPages.push(page);
    if (
      index < sortedPages.length - 1 &&
      Number(sortedPages[index + 1]) > Number(page) + 1
    ) {
      finalPages.push('...');
    }
  });

  return finalPages;
};

export const usePagination = (
  currentPage: number,
  totalPages: number,
): (number | string)[] => {
  return useMemo(
    () => getPageNumbers(currentPage, totalPages),
    [currentPage, totalPages],
  );
};
