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
};

const getHeaderLinkClass = ({ isActive }: { isActive: boolean }) => {
  return cn(`${styles.iconLink} ${styles.desktopIcons}`, {
    [styles.activeLink]: isActive,
  });
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
          className={getHeaderLinkClass}
        >
          <FiShoppingBag className={styles.icon} />
        </NavLink>
      )}
      {variant === 'favourites' && (
        <NavLink
          to="/favorites"
          className={getHeaderLinkClass}
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
