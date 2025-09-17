import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import Header from '../../organisms/Header/Header';

const MainLayout = () => {
  return (
    <>
      <Header />

      <main className={styles.container}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
