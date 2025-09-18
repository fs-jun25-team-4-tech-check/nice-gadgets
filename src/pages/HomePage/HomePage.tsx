import { ShopByCategory } from '../../components/organisms/ShopByCategory';
import { HomeLayout } from '../../components/templates';

const HomePage = () => {
  return <HomeLayout shopByCategorySection={<ShopByCategory />} />;
};

export default HomePage;
