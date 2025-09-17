import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import logo from './../../../assets/icons/brand/logo.svg';
import { HeaderButton } from '../../atoms/Buttons/HeaderButton';

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink
        to={'/'}
        className={styles.logo}
      >
        <img
          src={logo}
          alt="Nice Gadgets Logo"
        />
      </NavLink>

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
        <HeaderButton variant="favourites" />
        <HeaderButton variant="cart" />
        <HeaderButton variant="burger" />
      </div>
    </header>
  );
};

export default Header;
