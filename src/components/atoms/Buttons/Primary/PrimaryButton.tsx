import type React from 'react';
import styles from './PrimaryButton.module.scss';
import cn from 'classnames';
import type { PrimaryButtonProps as Props } from '../../../../types/ButtonPropsTypes';

const PrimaryButton: React.FC<Props> = ({
  children,
  isSelected = false,
  onClick = () => {},
  className = '',
  disabled,
}: Props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(styles.primaryButton, className, {
        [styles.isSelected]: isSelected,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
