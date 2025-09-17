import { VscHeart } from 'react-icons/vsc';
import { FiShoppingBag } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import styles from './HeaderButton.module.scss';

type Props = {
  variant: 'cart' | 'favourites' | 'burger';
  onClick?: () => void;
  notifCount?: number;
};

export const HeaderButton: React.FC<Props> = ({
  variant,
  onClick = () => {},
}) => {
  return (
    <>
      {variant === 'cart' && (
        <NavLink
          to="/cart"
          className={`${styles.iconLink} ${styles.desktopIcons}`}
        >
          <FiShoppingBag className={styles.icon} />
        </NavLink>
      )}
      {variant === 'favourites' && (
        <NavLink
          to="/favorites"
          className={`${styles.iconLink} ${styles.desktopIcons}`}
        >
          <VscHeart className={styles.icon} />
        </NavLink>
      )}
      {variant === 'burger' && (
        <button
          onClick={onClick}
          className={`${styles.iconLink} ${styles.burgerButton}`}
        >
          <RxHamburgerMenu className={styles.icon} />
        </button>
      )}
    </>
  );
};
