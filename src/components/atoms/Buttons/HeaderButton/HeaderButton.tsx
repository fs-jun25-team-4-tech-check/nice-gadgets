import { VscHeart } from 'react-icons/vsc';
import { FiShoppingBag } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import styles from './HeaderButton.module.scss';
import cn from 'classnames';

type Props = {
  variant: 'cart' | 'favourites' | 'burger';
  onClick?: () => void;
  notifCount?: number;
  className?: string;
};

const getHeaderLinkClass = ({ isActive }: { isActive: boolean }) => {
  return cn(styles.iconLink, styles.desktopIcons, {
    [styles.activeLink]: isActive,
  });
};

export const HeaderButton: React.FC<Props> = ({
  variant,
  onClick = () => {},
  notifCount = 0,
}) => {
  const toShowNotifCount = notifCount > 0;
  const displayCount = notifCount > 99 ? '99' : notifCount;

  if (variant === 'cart' || variant === 'favourites') {
    const Icon = variant === 'cart' ? FiShoppingBag : VscHeart;
    const route = `/${variant}`;

    return (
      <NavLink
        to={route}
        className={getHeaderLinkClass}
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
  if (variant === 'burger') {
    return (
      <button
        onClick={onClick}
        className={`${styles.iconLink} ${styles.burgerButton}`}
      >
        <RxHamburgerMenu className={styles.icon} />
      </button>
    );
  }
};
