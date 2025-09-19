import { CardsSlider } from '../../components/organisms/CardsSlider/CardsSlider';
// import { GallerySlider } from '../../components/organisms/GallerySlider/GallerySlider';
// import { ShopByCategory } from '../../components/organisms/ShopByCategory';
import { HomeLayout } from '../../components/templates';
// import { staticGallerySliderData } from '../../data/gallerySliderData';

const HomePage = () => {
  // const gallerySlides = staticGallerySliderData;

  // <GallerySlider gallerySlides={gallerySlides} />

  // <ShopByCategory />

  return (
    <HomeLayout
      bannerSliderSection={<></>}
      brandNewModelsSection={
        <CardsSlider
          id="brandNewModelsSlider"
          type="newestModels"
          headerText="Brand new models"
        />
      }
      shopByCategorySection={<></>}
      hotPricesSection={
        <CardsSlider
          id="hotPricesSlider"
          type="hotPrices"
          headerText="Hot prices"
        />
      }
    />
  );
};

export default HomePage;
