import { HomeLayout } from '../../components/templates';
import { staticCategoryData } from '../../data';
import type { CategoryBanner } from '../../types/Category';

const HomePage = () => {
  const mockModelsCount = [100, 95, 100];

  const shopByCategoryBanners: CategoryBanner[] = staticCategoryData.map(
    (category, i) => ({
      ...category,
      productCount: mockModelsCount[i],
    }),
  );

  return <HomeLayout shopByCategoryBanners={shopByCategoryBanners} />;
};

export default HomePage;
