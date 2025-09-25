import React from 'react';
import { DropdownAtom } from '../../atoms/DropdownAtom/DropdownAtom';
import styles from './ControlsBar.module.scss';
import {
  type SortField,
  type SortDirection,
  type PaginationOption,
  type DropdownItem,
} from '../../../types/ControlsBarTypes';

interface ControlsBarProps {
  sortBy: SortField;
  onSortByChange: (value: SortField) => void;
  sortOrder: SortDirection;
  onSortOrderChange: (value: SortDirection) => void;

  perPage: PaginationOption;
  onPerPageChange: (value: PaginationOption) => void;
}

export const ControlsBar: React.FC<ControlsBarProps> = ({
  sortBy,
  onSortByChange,
  sortOrder,
  onSortOrderChange,
  perPage,
  onPerPageChange,
}) => {
  const sortByItems: DropdownItem[] = [
    { value: 'year', displayName: 'Release Date' },
    { value: 'name', displayName: 'Name' },
    { value: 'price', displayName: 'Price' },
    { value: 'capacity', displayName: 'Capacity' },
  ];

  const sortOrderItems: DropdownItem[] = [
    { value: 'asc', displayName: 'Ascending' },
    { value: 'desc', displayName: 'Descending' },
  ];

  const paginationItems: DropdownItem[] = [
    { value: '12', displayName: '12' },
    { value: '16', displayName: '16' },
    { value: '24', displayName: '24' },
    { value: '36', displayName: '36' },
  ];

  return (
    <div className={styles.controlsBarContainer}>
      <div className={styles.controlsBar}>
        <DropdownAtom
          label="Sort by"
          items={sortByItems}
          placeholder="Select"
          value={sortBy}
          onSelect={(val) => onSortByChange(val as SortField)}
          variant="sort"
        />
      </div>
      <div className={styles.controlsBar}>
        <DropdownAtom
          label="Sort Order"
          items={sortOrderItems}
          placeholder="Select"
          value={sortOrder}
          onSelect={(val) => onSortOrderChange(val as SortDirection)}
          variant="sort"
        />
      </div>
      <div className={styles.controlsBar}>
        <DropdownAtom
          label="Items on page"
          items={paginationItems}
          value={String(perPage)}
          placeholder="Select"
          onSelect={(val) => onPerPageChange(Number(val) as PaginationOption)}
          variant="pagination"
        />
      </div>
    </div>
  );
};
