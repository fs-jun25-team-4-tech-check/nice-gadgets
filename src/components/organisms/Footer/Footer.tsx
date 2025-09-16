import React from 'react';
import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logo}>
          <img
            src="src\assets\icons\brand\logo.svg"
            className={styles.footer__img}
            alt="logo"
          />
        </div>

        <nav className={styles.footer__nav}>
          <a
            className="uppercase-text"
            href="https://github.com/fs-jun25-team-4-tech-check/nice-gadgets"
          >
            Github
          </a>
          <NavLink
            to="/contacts"
            className="uppercase-text"
          >
            Contacts
          </NavLink>
          <NavLink
            to="/rights"
            className="uppercase-text"
          >
            Rights
          </NavLink>
        </nav>
        <div className={styles.footer__backToTop}>
          <span className="small">Back to top</span>
          <button onClick={scrollToTop}>
            <img
              src="src\assets\icons\navigation\chevron-arrow-up.svg"
              alt="Back to top"
            ></img>
          </button>
        </div>
      </div>
    </footer>
  );
};
