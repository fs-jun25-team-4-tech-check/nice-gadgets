import type React from 'react';
import styles from './PrimaryButton.module.scss';
import cn from 'classnames';
import type { BaseButtonProps as Props } from '../../../../types/ButtonPropsTypes';

export const PrimaryButton: React.FC<Props> = ({
  children,
  isSelected = false,
  onClick = () => {},
  className = '',
}: Props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(styles.primaryButton, className, {
        [styles.isSelected]: isSelected,
      })}
    >
      {children}
    </button>
  );
};
