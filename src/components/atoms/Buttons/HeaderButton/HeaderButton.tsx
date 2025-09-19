import { VscHeart } from 'react-icons/vsc';
import { FiShoppingBag } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import { TfiClose as CloseIcon } from 'react-icons/tfi';
import styles from './HeaderButton.module.scss';
import cn from 'classnames';

type Props = {
  variant: 'cart' | 'favourites' | 'burger' | 'close';
  onClick?: () => void;
  notifCount?: number;
  className?: string;
};

export const HeaderButton: React.FC<Props> = ({
  variant,
  onClick = () => {},
  notifCount = 0,
  className = '',
}) => {
  const toShowNotifCount = notifCount > 0;
  const displayCount = notifCount > 99 ? '99' : notifCount;

  if (variant === 'cart' || variant === 'favourites') {
    const Icon = variant === 'cart' ? FiShoppingBag : VscHeart;
    const route = `/${variant}`;

    return (
      <NavLink
        onClick={onClick}
        to={route}
        className={({ isActive }) =>
          cn(styles.iconLink, className, {
            [styles.activeLink]: isActive,
          })
        }
      >
        <div className={styles.iconWrapper}>
          <Icon className={styles.icon} />
          {toShowNotifCount && (
            <span className={styles.notifCount}>{displayCount}</span>
          )}
        </div>
      </NavLink>
    );
  }
  if (variant === 'burger' || variant === 'close') {
    const Icon = variant === 'burger' ? RxHamburgerMenu : CloseIcon;

    return (
      <button
        onClick={onClick}
        className={`${styles.iconLink} ${styles.burgerButton} ${className}`}
      >
        <Icon className={styles.icon} />
      </button>
    );
  }
};
