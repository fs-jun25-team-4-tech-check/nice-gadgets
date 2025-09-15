import React from 'react';
import styles from './Footer.module.scss';

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
          {/* чи можемо ми використовувати className="uppercase-text" так? */}
          <a
            className="uppercase-text"
            href="https://github.com/fs-jun25-team-4-tech-check/nice-gadgets"
          >
            Github
          </a>
          <a
            className="uppercase-text"
            href="/contacts"
          >
            Contacts
          </a>
          <a
            className="uppercase-text"
            href="/rights"
          >
            Rights
          </a>
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
