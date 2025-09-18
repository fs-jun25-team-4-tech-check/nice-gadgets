import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';
import { HeaderButton } from '../../atoms/Buttons/HeaderButton';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const BurgerMenu: React.FC<Props> = ({ isOpen, setIsOpen }) => {
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
            to={'/catalog/accesories'}
          >
            Accesories
          </NavLink>
        </li>
      </ul>

      <div className={styles.menuButtons}>
        <HeaderButton
          variant="favourites"
          onClick={() => setIsOpen(false)}
          className={styles.button}
        />
        <HeaderButton
          variant="cart"
          onClick={() => setIsOpen(false)}
          className={styles.button}
        />
      </div>
    </div>
  );
};
