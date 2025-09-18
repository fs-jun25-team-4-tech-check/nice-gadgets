import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import logo from './../../../assets/icons/brand/logo.svg';
import { HeaderButton } from '../../atoms/Buttons/HeaderButton';
import { BurgerMenu } from '../../molecules/BurgerMenu';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  useEffect(() => {
    if (isBurgerMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isBurgerMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 744) {
        setIsBurgerMenuOpen(false);
      }
    };

    addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <NavLink
          onClick={() => setIsBurgerMenuOpen(false)}
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
            to="/catalog/phones"
            className={({ isActive }) =>
              `uppercase-text ${styles.navLink} ${isActive ? styles.active : ''}`
            }
          >
            Phones
          </NavLink>
          <NavLink
            to="/catalog/tablets"
            className={({ isActive }) =>
              `uppercase-text ${styles.navLink} ${isActive ? styles.active : ''}`
            }
          >
            Tablets
          </NavLink>
          <NavLink
            to="/catalog/accesories"
            className={({ isActive }) =>
              `uppercase-text ${styles.navLink} ${isActive ? styles.active : ''}`
            }
          >
            Accessories
          </NavLink>
        </nav>

        <div className={styles.icons}>
          <HeaderButton
            variant="favourites"
            className={styles.desktopIcons}
          />
          <HeaderButton
            variant="cart"
            className={styles.desktopIcons}
          />
          <HeaderButton
            variant={isBurgerMenuOpen ? 'close' : 'burger'}
            onClick={() => {
              setIsBurgerMenuOpen(!isBurgerMenuOpen);
            }}
          />
        </div>
      </header>
      <BurgerMenu
        isOpen={isBurgerMenuOpen}
        setIsOpen={setIsBurgerMenuOpen}
      />
    </>
  );
};

export default Header;
