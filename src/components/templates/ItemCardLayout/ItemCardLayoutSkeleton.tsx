import { BackButton } from '../../atoms';
import BreadcrumbsSkeleton from '../../molecules/Breadcrumbs/BreadcrumbsSkeleton';
import AboutAndTechSpecsSkeleton from '../../organisms/AboutAndTechSpecs/AboutAndTechSpecsSkeleton';
import { ImageGallerySkeleton } from '../../organisms/ImageGallery/ImageGallerySkeleton';
import SelectorsSectionSkeleton from '../../organisms/SelectorSection/SelectorSectionSkeleton';
import styles from './ItemCardLayout.module.scss';
import skeletonStyles from './ItemCardLayoutSkeleton.module.scss';

const ItemCardLayoutSkeleton = () => (
  <div className={styles.itemCard}>
    <BreadcrumbsSkeleton />

    <BackButton fallbackPath="/">Back</BackButton>

    <div className={skeletonStyles.productNameSkeleton}></div>

    <div className={styles.info}>
      <ImageGallerySkeleton />
      <SelectorsSectionSkeleton />
    </div>

    <AboutAndTechSpecsSkeleton />
  </div>
);

export default ItemCardLayoutSkeleton;
