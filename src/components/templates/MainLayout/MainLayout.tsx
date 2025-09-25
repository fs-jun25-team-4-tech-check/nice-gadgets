import { Outlet, ScrollRestoration } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import { Footer } from '../../organisms/Footer/Footer';
import Header from '../../organisms/Header/Header';

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.container}>
        <Outlet />
      </main>

      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
