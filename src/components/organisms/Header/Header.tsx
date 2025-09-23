import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import logo_dark from './../../../assets/icons/brand/logo_dark.svg';
import logo_light from './../../../assets/icons/brand/logo-light.svg';
import { HeaderButton } from '../../atoms/Buttons/HeaderButton';
import { BurgerMenu } from '../../molecules/BurgerMenu';
import ThemeSwitcher from '../../atoms/ThemeSwitcher/ThemeSwitcher';
import { useEffect, useState } from 'react';
import { useCart } from '../../../hooks/useCart';
import { useFavs } from '../../../hooks/useFavs';
import { useGlobalStore } from '../../../stores/globalStore';

const Header = () => {
  const { cart } = useCart();
  const { favs } = useFavs();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const theme = useGlobalStore((state) => state.theme);
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

  const currentTheme =
    theme === 'auto' ?
      window.matchMedia('(prefers-color-scheme: dark)').matches ?
        'dark'
      : 'light'
    : theme;

  return (
    <>
      <header className={styles.header}>
        {' '}
        <NavLink
          onClick={() => setIsBurgerMenuOpen(false)}
          to={'/'}
          className={styles.logo}
        >
          {' '}
          <img
            src={currentTheme === 'light' ? logo_light : logo_dark}
            alt="Nice Gadgets Logo"
          />{' '}
        </NavLink>
        <nav>
          <ul className={styles.nav}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `uppercase-text ${styles.navLink} ${isActive ? styles.active : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog/phones"
                className={({ isActive }) =>
                  `uppercase-text ${styles.navLink} ${isActive ? styles.active : ''}`
                }
              >
                Phones
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog/tablets"
                className={({ isActive }) =>
                  `uppercase-text ${styles.navLink} ${isActive ? styles.active : ''}`
                }
              >
                Tablets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog/accessories"
                className={({ isActive }) =>
                  `uppercase-text ${styles.navLink} ${isActive ? styles.active : ''}`
                }
              >
                Accessories
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.icons}>
          <ThemeSwitcher />
          <HeaderButton
            variant="favourites"
            className={styles.desktopIcons}
            notifCount={favs.length}
          />
          <HeaderButton
            variant="cart"
            className={styles.desktopIcons}
            notifCount={cart.length}
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
