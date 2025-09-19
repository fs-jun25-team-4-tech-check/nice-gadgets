import React from 'react';
import { DropdownAtom } from '../../atoms/DropdownAtom/DropdownAtom';
import styles from './ControlsBar.module.scss';
import {
  type SortOption,
  type PaginationOption,
  type DropdownItem,
} from '../../../types/ControlsBarTypes';

interface ControlsBarProps {
  sortOption: SortOption;
  onSortChange: (value: SortOption) => void;
  perPage: PaginationOption;
  onPerPageChange: (value: PaginationOption) => void;
}

export const ControlsBar: React.FC<ControlsBarProps> = ({
  sortOption,
  onSortChange,
  perPage,
  onPerPageChange,
}) => {
  const sortItems: DropdownItem[] = [
    { value: 'Newest', displayName: 'Newest' },
    { value: 'Price_ascending', displayName: 'Price ↑' },
    { value: 'Price_descending', displayName: 'Price ↓' },
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
          items={sortItems}
          placeholder="Select"
          value={sortOption}
          onSelect={(val) => onSortChange(val as SortOption)}
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
