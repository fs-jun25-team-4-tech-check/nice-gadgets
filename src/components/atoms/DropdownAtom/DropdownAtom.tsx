import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useId, useState } from 'react';
import styles from './DropdownAtom.module.scss';
import classNames from 'classnames';
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi';

interface DropdownItem {
  value: string;
  displayName: string;
}

interface DropdownAtomProps {
  label?: string;
  placeholder?: string;
  items: DropdownItem[];
  value?: string;
  onSelect?: (item: string) => void;
  variant?: 'sort' | 'pagination';
}

export const DropdownAtom = ({
  label,
  items,
  placeholder,
  onSelect,
  value,
  variant = 'sort',
}: DropdownAtomProps) => {
  const [open, setOpen] = useState(false);

  const variantClass = {
    [styles.dropdownSort]: variant === 'sort',
    [styles.dropdownPagination]: variant === 'pagination',
  };

  const selectedItem = items.find((item) => item.value === value);

  const triggerId = useId();

  const handleSelect = (item: string) => {
    onSelect?.(item);
  };

  return (
    <DropdownMenu.Root
      open={open}
      onOpenChange={setOpen}
    >
      {label && (
        <label
          htmlFor={triggerId}
          className={styles.dropdownLabel}
        >
          {label}
        </label>
      )}
      <DropdownMenu.Trigger
        id={triggerId}
        className={classNames(styles.dropdownTrigger, variantClass)}
      >
        <span className={styles.dropdownPlaceholder}>
          {selectedItem?.displayName ?? placeholder ?? ''}
        </span>

        <span className={styles.dropdownIconWrapper}>
          {open ?
            <PiCaretUpBold />
          : <PiCaretDownBold />}
        </span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className={classNames(styles.dropdownContent, variantClass)}
      >
        {items.map((item) => (
          <DropdownMenu.Item
            key={item.value}
            className={styles.dropdownItem}
            onSelect={() => handleSelect(item.value)}
          >
            {item.displayName}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
