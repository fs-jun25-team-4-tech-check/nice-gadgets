import styles from './Header.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import logo_dark from './../../../assets/icons/brand/logo_dark.svg';
import logo_light from './../../../assets/icons/brand/logo-light.svg';
import { HeaderButton } from '../../atoms/Buttons/HeaderButton';
import { BurgerMenu } from '../../molecules/BurgerMenu';
import ThemeSwitcher from '../../atoms/ThemeSwitcher/ThemeSwitcher';
import { useEffect, useState } from 'react';
import { useCart } from '../../../hooks/useCart';
import { useFavs } from '../../../hooks/useFavs';
import { useGlobalStore } from '../../../stores/globalStore';
import CatalogueModal from '../../molecules/CatalogueModal/CatalogueModal';
import SearchModule from '../../molecules/SearchModule/SearchModule';

const Header = () => {
  const { count } = useCart();
  const { favs } = useFavs();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const location = useLocation();

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

  const hasSearchQuery = new URLSearchParams(location.search).has('query');

  const getNavLinkClass = (isActive: boolean) => {
    return `uppercase-text ${styles.navLink} ${isActive && !hasSearchQuery ? styles.active : ''}`;
  };

  return (
    <>
      <header className={styles.header}>
        <NavLink
          onClick={() => setIsBurgerMenuOpen(false)}
          to={'/'}
          className={styles.logo}
        >
          <img
            src={currentTheme === 'light' ? logo_light : logo_dark}
            alt="Nice Gadgets Logo"
          />
        </NavLink>
        <nav>
          <ul className={styles.nav}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <CatalogueModal />
            </li>
          </ul>
        </nav>
        <div className={styles.search}>
          <SearchModule />
        </div>
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
            notifCount={count}
          />
          <HeaderButton
            variant={isBurgerMenuOpen ? 'close' : 'burger'}
            className={styles.burgerButton}
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
