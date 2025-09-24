import { CardsSlider } from '../../components/organisms/ProductCardSlider/ProductCardsSlider';
import { GallerySlider } from '../../components/organisms/GallerySlider/GallerySlider';
import { ShopByCategory } from '../../components/organisms/ShopByCategory';
import { HomeLayout } from '../../components/templates';
import gallerySlider from './../../assets/data/gallerySlider.json';

const HomePage = () => {
  return (
    <HomeLayout
      bannerSliderSection={<GallerySlider gallerySlides={gallerySlider} />}
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
