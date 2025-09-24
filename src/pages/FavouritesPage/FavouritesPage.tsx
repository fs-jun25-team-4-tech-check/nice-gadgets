import { ListItems } from '../../components/organisms/ListItems/ListItems';
import FavouritesLayout from '../../components/templates/FavouritesLayout/FavouritesLayout';
import { useProductsById } from '../../hooks';
import { useFavs } from '../../hooks/useFavs';
import styles from './FavouritesPage.module.scss';

const FavouritesPage = () => {
  const { favs, count: favsCount } = useFavs();
  const { data, isLoading } = useProductsById(favs);

  return (
    <FavouritesLayout
      favouritesListSection={
        <ListItems
          isLoading={isLoading}
          products={data}
          itemsCount={favsCount}
          className={styles.favouritesList}
        />
      }
    />
  );
};

export default FavouritesPage;
