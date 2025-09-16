import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import logo from './../../../assets/icons/brand/logo.svg';
import cartIcon from './../../../assets/icons/ecommerce/shopping-cart.svg';
import favoritesIcon from './../../../assets/icons/ecommerce/heart.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src={logo}
          alt="Nice Gadgets Logo"
        />
      </div>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `uppercase-text ${styles.navLink} ${isActive ? styles.active : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/phones"
          className={({ isActive }) =>
            `uppercase-text ${styles.navLink} ${isActive ? styles.active : ''}`
          }
        >
          Phones
        </NavLink>
        <NavLink
          to="/tablets"
          className={({ isActive }) =>
            `uppercase-text ${styles.navLink} ${isActive ? styles.active : ''}`
          }
        >
          Tablets
        </NavLink>
        <NavLink
          to="/accessories"
          className={({ isActive }) =>
            `uppercase-text ${styles.navLink} ${isActive ? styles.active : ''}`
          }
        >
          Accessories
        </NavLink>
      </nav>

      <div className={styles.icons}>
        <NavLink
          to="/favorites"
          className={styles.iconLink}
        >
          <img
            src={favoritesIcon}
            alt="Favorites"
          />
        </NavLink>
        <NavLink
          to="/cart"
          className={styles.iconLink}
        >
          <img
            src={cartIcon}
            alt="Cart"
          />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
