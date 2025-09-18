import { staticGallerySlides } from '../../services/staticGallerySlides';
import { HomeLayout } from '../../components/templates';
import { staticCategoryData } from '../../data';
import { useProducts } from '../../hooks/useProducts';
import type { CategoryBanner } from '../../types/Category';

const HomePage = () => {
  const { data: brandNewSlides } = useProducts(7);

  const { data: hotPriceSlides } = useProducts(2);

  const mockModelsCount = [100, 95, 100];

  const shopByCategoryBanners: CategoryBanner[] = staticCategoryData.map(
    (category, i) => ({
      ...category,
      productCount: mockModelsCount[i],
    }),
  );
  if (!brandNewSlides && !hotPriceSlides) {
    return <div>Problem</div>;
  }
  return (
    <HomeLayout
      shopByCategoryBanners={shopByCategoryBanners}
      brandNewSlides={brandNewSlides?.data}
      hotPriceSlides={hotPriceSlides?.data}
      staticGallerySlides={staticGallerySlides}
    />
  );
};

export default HomePage;
