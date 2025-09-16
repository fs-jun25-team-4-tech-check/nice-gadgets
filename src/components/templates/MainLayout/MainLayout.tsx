import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <>
      <main className={styles.container}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
