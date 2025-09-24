import type React from 'react';
import type { PrimaryButtonProps as Props } from '../../../../types/ButtonPropsTypes';

import styles from './ItemOptionSelectButton.module.scss';
import classNames from 'classnames';

const ItemOptionSelectButton: React.FC<Props> = ({
  children,
  isSelected = false,
  disabled = false,
  className = '',
  onClick = () => {},
}) => {
  return (
    <button
      className={classNames(`${className} ${styles.capacityBtn}`, {
        [styles.active]: isSelected,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ItemOptionSelectButton;
