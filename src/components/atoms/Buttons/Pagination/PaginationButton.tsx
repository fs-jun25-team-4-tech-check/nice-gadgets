import type React from 'react';
import styles from './PaginationButton.module.scss';
import cn from 'classnames';
import SearchLink from '../../Links/SearchLink';
import type { LinkButtonProps as Props } from '../../../../types/ButtonPropsTypes';

export const PaginationButton: React.FC<Props> = ({
  children,
  isSelected = false,
  params,
  className = '',
}) => {
  return (
    <SearchLink
      params={params}
      className={cn(styles.paginationButton, className, {
        [styles.isSelected]: isSelected,
      })}
    >
      {children}
    </SearchLink>
  );
};
