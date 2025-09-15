import type React from 'react';
import styles from './Primary.module.scss';
import cn from 'classnames';

type Props = {
  children: React.ReactNode;
  isSelected?: boolean;
};

export const Primary = ({ children, isSelected = false }: Props) => {
  return (
    <button
      type="button"
      className={cn(styles.primaryButton, { [styles.isSelected]: isSelected })}
    >
      {children}
    </button>
  );
};
