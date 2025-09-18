import styles from './HomeLayout.module.scss';
import { GallerySlider } from '../../organisms/GallerySlider/GallerySlider';
import { staticGallerySlides } from '../../../services/staticGallerySlides';

const HomeLayout = () => {
  return (
    <>
      <h1 className={styles.homeTitleExample}>Home Page</h1>
      <GallerySlider slides={staticGallerySlides} />
    </>
  );
};

export default HomeLayout;
