// Приклад використання
// const HomeLayout = () => {
//   const [selectedSort, setSelectedSort] = useState('Newest');
//   const [selectedPageSize, setSelectedPageSize] = useState('16');
//   return (
//     <div>
//       <DropdownAtom
//         label="Sort by"
//         placeholder={selectedSort}
//         items={['Newest', 'Oldest', 'Popular']}
//         onSelect={(item) => setSelectedSort(item)}
//         variant="sort"
//       />

//       <DropdownAtom
//         label="Items on page"
//         placeholder={selectedPageSize}
//         items={['8', '16', '32']}
//         onSelect={(item) => setSelectedPageSize(item)}
//         variant="pagination"
//       />
//     </div>
//   );
// };

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import ChevronDown from '../../../assets/icons/navigation/chevron-arrow-down.svg';
import ChevronUp from '../../../assets/icons/navigation/chevron-arrow-up.svg';
import { useState } from 'react';
import styles from './DropdownAtom.module.scss';
import classNames from 'classnames';

interface DropdownAtomProps {
  label?: string;
  placeholder?: string;
  items: string[];
  onSelect?: (item: string) => void;
  variant?: 'sort' | 'pagination';
}

export const DropdownAtom = ({
  label,
  items,
  placeholder,
  onSelect,
  variant = 'sort',
}: DropdownAtomProps) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | undefined>(
    placeholder,
  );

  const variantClass = {
    [styles.dropdownSort]: variant === 'sort',
    [styles.dropdownPagination]: variant === 'pagination',
  };

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    onSelect?.(item);
  };

  return (
    <DropdownMenu.Root
      open={open}
      onOpenChange={setOpen}
    >
      {label && <div className={styles.dropdownLabel}>{label}</div>}
      <DropdownMenu.Trigger
        className={classNames(styles.dropdownTrigger, variantClass)}
      >
        <span className={styles.dropdownPlaceholder}>
          {selectedItem ?? placeholder ?? ''}
        </span>
        <img
          src={open ? ChevronUp : ChevronDown}
          alt="Chevron"
          className={styles.dropdownIcon}
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className={classNames(styles.dropdownContent, variantClass)}
      >
        {items.map((item) => (
          <DropdownMenu.Item
            key={item}
            className={styles.dropdownItem}
            onSelect={() => handleSelect(item)}
          >
            {item}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
