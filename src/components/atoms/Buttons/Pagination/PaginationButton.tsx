import type React from 'react';
import styles from './PaginationButton.module.scss';
import cn from 'classnames';

type Props = {
  children: React.ReactNode;
  isSelected?: boolean;
};

export const PaginationButton: React.FC<Props> = ({
  children,
  isSelected = false,
}) => {
  return (
    <button
      type="button"
      className={cn(styles.paginationButton, {
        [styles.isSelected]: isSelected,
      })}
    >
      {children}
    </button>
  );
};
