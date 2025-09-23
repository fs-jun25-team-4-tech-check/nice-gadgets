import React from 'react';
import styles from './Footer.module.scss';
import logo_dark from './../../../assets/icons/brand/logo_dark.svg';
import logo_light from './../../../assets/icons/brand/logo-light.svg';
import { Link } from 'react-router-dom';
import { ActionButton } from '../../atoms';
import { useGlobalStore } from '../../../stores/globalStore';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const theme = useGlobalStore((state) => state.theme);

  const currentTheme =
    theme === 'auto' ?
      window.matchMedia('(prefers-color-scheme: dark)').matches ?
        'dark'
      : 'light'
    : theme;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img
              src={currentTheme === 'light' ? logo_light : logo_dark}
              alt="Nice Gadgets logo"
            />
          </Link>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase-text"
                href="https://github.com/fs-jun25-team-4-tech-check/nice-gadgets"
              >
                Github
              </a>
            </li>
            <li>
              <Link
                to="/contacts"
                className="uppercase-text"
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                to="/rights"
                className="uppercase-text"
              >
                Rights
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.backToTop}>
          <small onClick={scrollToTop}>Back to top</small>
          <ActionButton
            variant="slider"
            onClick={scrollToTop}
            direction="up"
          ></ActionButton>
        </div>
      </div>
    </footer>
  );
};
