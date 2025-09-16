import SearchLink from '../../Links/SearchLink';
import cn from 'classnames';
import paginationStyles from './PaginationButton.module.scss';
import toFavoriteStyles from './ToFavorites.module.scss';
import sliderStyles from './SliderButton.module.scss';
import { VscHeart as HeartIcon } from 'react-icons/vsc';
import { VscHeartFilled as FilledHeartIcon } from 'react-icons/vsc';
import { PiCaretLeft as LeftArrow } from 'react-icons/pi';
import { PiCaretRight as RightArrow } from 'react-icons/pi';
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
  return (
    <>
      {variant === 'pagination' && (
        <SearchLink
          params={params}
          className={cn(paginationStyles.paginationButton, className, {
            [paginationStyles.isSelected]: isSelected,
          })}
        >
          {children}
        </SearchLink>
      )}
      {variant === 'favourites' && (
        <button
          onClick={onClick}
          className={cn(toFavoriteStyles.toFavoritesButton, className, {
            [toFavoriteStyles.toFavoritesButtonSelected]: isSelected,
          })}
        >
          {isSelected ?
            <FilledHeartIcon
              className={toFavoriteStyles.toFavoritesSelectedIcon}
            />
          : <HeartIcon className={toFavoriteStyles.toFavoritesIcon} />}
        </button>
      )}
      {variant === 'slider' && (
        <button
          onClick={onClick}
          className={cn(sliderStyles.sliderButton, className)}
          type="button"
          disabled={disabled}
        >
          {direction === 'left' ?
            <LeftArrow />
          : <RightArrow />}
        </button>
      )}
    </>
  );
};

export default ActionButton;
