import type React from 'react';
import type { CategoryBanner } from '../../../types/Category';
import { ShopByCategory } from '../../organisms/ShopByCategory';
import type { Slide } from '../../../types/Slide';
import { MainSlider } from '../../organisms/MainSlider/MainSlider';
import { CardsSlider } from '../../organisms/CardsSlider/CardsSlider';
import styles from './HomeLayout.module.scss';

type Props = {
  shopByCategoryBanners: CategoryBanner[];
  brandNewSlides: Slide[];
  hotPriceSlides: Slide[];
};

const HomeLayout: React.FC<Props> = ({
  shopByCategoryBanners,
  brandNewSlides,
  hotPriceSlides,
}) => {
  return (
    <>
      <h1 className={styles.homeTitleExample}>Home Page</h1>
      <MainSlider />
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
