import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import Header from '../../organisms/Header/Header';
import { Footer } from '../../organisms/Footer/Footer';

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
