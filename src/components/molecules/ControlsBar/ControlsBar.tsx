// ControlsBar.tsx

import React from 'react';
import { DropdownAtom } from '../../atoms/DropdownAtom/DropdownAtom';
import styles from './ControlsBar.module.scss';

interface ControlsBarProps {
  perPage: number;
  onPerPageChange: (value: number) => void;
}

export const ControlsBar: React.FC<ControlsBarProps> = ({
  perPage,
  onPerPageChange,
}) => {
  return (
    <div className={styles.controlsBarContainer}>
      <div className={styles.controlsBar}>
        <DropdownAtom
          label="Sort by"
          items={['Newest', 'Price ↑', 'Price ↓']}
          placeholder="Select"
          onSelect={() => 0}
          variant="sort"
        />
      </div>
      <div className={styles.controlsBar}>
        <DropdownAtom
          label="Items on page"
          items={['12', '16', '24', '36']}
          value={String(perPage)}
          placeholder="Select"
          onSelect={(val) => onPerPageChange(Number(val))}
          variant="pagination"
        />
      </div>
    </div>
  );
};
