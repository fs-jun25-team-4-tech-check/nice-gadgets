import styles from './HomeLayout.module.scss';
import { GallerySlider } from '../../organisms/GallerySlider/GallerySlider';
import { mockGallerySlides } from '../../../services/mockGallerySlides';

const HomeLayout = () => {
  return (
    <>
      <h1 className={styles.homeTitleExample}>Home Page</h1>
      <GallerySlider slides={mockGallerySlides} />
    </>
  );
};

export default HomeLayout;
