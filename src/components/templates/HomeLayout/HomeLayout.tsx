import styles from './HomeLayout.module.scss';
import { MainSlider } from '../../organisms/MainSlider/MainSlider';
const HomeLayout = () => {
  return (
    <>
      <h1 className={styles.homeTitleExample}>Home Page</h1>
      <MainSlider />
    </>
  );
};

export default HomeLayout;
