import { CardsSlider } from '../../components/organisms/ProductCardSlider/ProductCardsSlider';
import { GallerySlider } from '../../components/organisms/GallerySlider/GallerySlider';
import { ShopByCategory } from '../../components/organisms/ShopByCategory';
import { HomeLayout } from '../../components/templates';
import { staticGallerySliderData } from '../../data/gallerySliderData';

const HomePage = () => {
  const gallerySlides = staticGallerySliderData;

  return (
    <HomeLayout
      bannerSliderSection={<GallerySlider gallerySlides={gallerySlides} />}
      brandNewModelsSection={
        <CardsSlider
          id="brandNewModelsSlider"
          type="newestModels"
          headerText="Brand new models"
        />
      }
      shopByCategorySection={<ShopByCategory />}
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
