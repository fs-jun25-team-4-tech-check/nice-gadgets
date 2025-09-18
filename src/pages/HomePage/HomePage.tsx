import { HomeLayout } from '../../components/templates';
import { staticCategoryData } from '../../data';
import type { CategoryBanner } from '../../types/Category';
import { useProductCountsByCategory } from '../../hooks';

const HomePage = () => {
  const { data: counts, isLoading } = useProductCountsByCategory();

  const shopByCategoryBanners: CategoryBanner[] = staticCategoryData.map(
    (category) => ({
      ...category,
      productCount: counts?.[category.categorySlug] || 0,
    }),
  );

  return (
    <HomeLayout
      isLoadingCateogriesCount={isLoading}
      shopByCategoryBanners={shopByCategoryBanners}
    />
  );
};

export default HomePage;
