import SearchLink from '../../Links/SearchLink';
import cn from 'classnames';
import paginationStyles from './PaginationButton.module.scss';
import toFavoriteStyles from './ToFavorites.module.scss';
import sliderStyles from './SliderButton.module.scss';
import {
  VscHeart as HeartIcon,
  VscHeartFilled as FilledHeartIcon,
} from 'react-icons/vsc';

import {
  PiCaretLeft as LeftArrow,
  PiCaretRight as RightArrow,
  PiCaretUpBold as UpArrow,
  PiPlusLight as PlusIcon,
  PiMinus as MinusIcon,
} from 'react-icons/pi';

import type { ActionButtonProps as Props } from '../../../../types/ButtonPropsTypes';

const ActionButton: React.FC<Props> = ({
  variant,
  children,
  params = {},
  className = '',
  isSelected = false,
  onClick = () => {},
  direction = 'right',
  disabled = false,
}) => {
  switch (variant) {
    case 'pagination': {
      return (
        <SearchLink
          params={params}
          className={cn(paginationStyles.paginationButton, className, {
            [paginationStyles.isSelected]: isSelected,
          })}
        >
          {children}
        </SearchLink>
      );
    }
    case 'favourites': {
      return (
        <button
          onClick={onClick}
          className={cn(toFavoriteStyles.toFavoritesButton, className, {
            [toFavoriteStyles.toFavoritesButtonSelected]: isSelected,
          })}
          disabled={disabled}
        >
          {isSelected ?
            <FilledHeartIcon
              className={toFavoriteStyles.toFavoritesSelectedIcon}
            />
          : <HeartIcon className={toFavoriteStyles.toFavoritesIcon} />}
        </button>
      );
    }
    case 'slider': {
      const ArrowIcon =
        direction === 'left' ? LeftArrow
        : direction === 'up' ? UpArrow
        : RightArrow;
      return (
        <button
          onClick={onClick}
          className={cn(sliderStyles.sliderButton, className)}
          type="button"
          disabled={disabled}
        >
          <ArrowIcon />
        </button>
      );
    }
    case 'quantity': {
      const QuantityIcon = direction === 'left' ? MinusIcon : PlusIcon;
      return (
        <button
          onClick={onClick}
          className={cn(sliderStyles.sliderButton, className)}
          type="button"
          disabled={disabled}
        >
          <QuantityIcon />
        </button>
      );
    }
  }
};

export default ActionButton;
