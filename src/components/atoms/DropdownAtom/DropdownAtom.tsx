//  Приклад використання у верстці:
// export const PageWithDropdown = () => {
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
import './DropdownAtom.scss';
import classNames from 'classnames';

interface DropdownAtomProps {
  label?: string;
  placeholder?: string;
  items: string[];
  onSelect?: (item: string) => void; // Callback типу handleSortSelect / handlePaginationSelect, який додамо у компоненті, що використовує DropdownAtom.
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

  const triggerClass = classNames('dropdown-trigger', {
    'dropdown-sort': variant === 'sort',
    'dropdown-pagination': variant === 'pagination',
  });

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    onSelect?.(item);
  };

  return (
    <DropdownMenu.Root
      open={open}
      onOpenChange={setOpen}
    >
      {label && <div className="dropdown-label">{label}</div>}
      <DropdownMenu.Trigger className={triggerClass}>
        <span className="dropdown-placeholder">
          {selectedItem ?? placeholder ?? ''}
        </span>
        <img
          src={open ? ChevronUp : ChevronDown}
          alt="Chevron"
          className="dropdown-icon"
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="dropdown-content">
        {items.map((item, idx) => (
          <DropdownMenu.Item
            key={idx}
            className="dropdown-item"
            onSelect={() => handleSelect(item)}
          >
            {item}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
