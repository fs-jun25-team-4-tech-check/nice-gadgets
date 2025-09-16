import { VscHeart as HeartIcon } from 'react-icons/vsc';
import { VscHeartFilled as FilledHeartIcon } from 'react-icons/vsc';
import styles from './ToFavorites.module.scss';
import cn from 'classnames';
import type { BaseButtonProps as Props } from '../../../../types/ButtonPropsTypes';

export const ToFavoritesButton: React.FC<Props> = ({
  isSelected = false,
  onClick = () => {},
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(styles.toFavoritesButton, className, {
        [styles.toFavoritesButtonSelected]: isSelected,
      })}
    >
      {isSelected ?
        <FilledHeartIcon className={styles.toFavoritesSelectedIcon} />
      : <HeartIcon className={styles.toFavoritesIcon} />}
    </button>
  );
};
