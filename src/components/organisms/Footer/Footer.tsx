import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { ActionButton } from '../../atoms';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img
              src="src/assets/icons/brand/logo.svg"
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
