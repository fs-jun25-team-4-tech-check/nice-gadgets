import type React from 'react';
import type { CategoryBanner } from '../../../types/Category';
import { ShopByCategory } from '../../organisms/ShopByCategory';
import type { GallerySliderItem } from '../../../types/GallerySliderItem';
import { GallerySlider } from '../../organisms/GallerySlider/GallerySlider';
import { CardsSlider } from '../../organisms/CardsSlider/CardsSlider';
import type { Product } from '../../../types';

import styles from './HomeLayout.module.scss';

type Props = {
  shopByCategoryBanners: CategoryBanner[];
  brandNewSlides: Product[] | undefined;
  hotPriceSlides: Product[] | undefined;
  staticGallerySlides: GallerySliderItem[];
};

const HomeLayout: React.FC<Props> = ({
  shopByCategoryBanners,
  brandNewSlides,
  hotPriceSlides,
  staticGallerySlides,
}) => {
  return (
    <>
      <h1 className={styles.homeTitleExample}>Home Page</h1>
      <GallerySlider gallerySlides={staticGallerySlides} />
      <CardsSlider
        id={1}
        headerText={'Brand new models'}
        slides={hotPriceSlides}
      />

      <ShopByCategory categories={shopByCategoryBanners} />
      <CardsSlider
        id={2}
        headerText={'Hot prices'}
        slides={brandNewSlides}
      />
    </>
  );
};

export default HomeLayout;
