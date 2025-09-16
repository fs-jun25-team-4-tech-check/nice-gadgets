import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import { Footer } from '../../organisms/Footer/Footer';

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.container}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
