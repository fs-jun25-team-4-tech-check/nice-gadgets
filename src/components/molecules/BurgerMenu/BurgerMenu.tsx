import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';
import { HeaderButton } from '../../atoms/Buttons/HeaderButton';
import { useCart } from '../../../hooks/useCart';
import { useFavs } from '../../../hooks/useFavs';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const BurgerMenu: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const { count: cartCount } = useCart();
  const { count: favsCount } = useFavs();
  return (
    <div className={`${styles.burgerMenu} ${isOpen && styles.open}`}>
      <ul className={styles.menuList}>
        <li className={styles.listItem}>
          <NavLink
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${styles.menuLink} ${isActive && styles.isActive}`
            }
            to={'/'}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${styles.menuLink} ${isActive && styles.isActive}`
            }
            to={'/catalog/phones'}
          >
            Phones
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${styles.menuLink} ${isActive && styles.isActive}`
            }
            to={'/catalog/tablets'}
          >
            Tablets
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${styles.menuLink} ${isActive && styles.isActive}`
            }
            to={'/catalog/accessories'}
          >
            Accessories
          </NavLink>
        </li>
      </ul>

      <div className={styles.menuButtons}>
        <HeaderButton
          variant="favourites"
          onClick={() => setIsOpen(false)}
          className={styles.button}
          notifCount={favsCount}
        />
        <HeaderButton
          variant="cart"
          onClick={() => setIsOpen(false)}
          className={styles.button}
          notifCount={cartCount}
        />
      </div>
    </div>
  );
};
