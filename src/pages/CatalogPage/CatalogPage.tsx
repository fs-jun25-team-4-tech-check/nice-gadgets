import { useSearchParams, useParams } from 'react-router-dom';
import CatalogLayout from '../../components/templates/CatalogLayout/CatalogLayout';
import { ControlsBar } from '../../components/molecules/ControlsBar/ControlsBar';
import { ListItems } from '../../components/organisms/ListItems/ListItems';
import Pagination from '../../components/molecules/Pagination/Pagination';
import { useProductsByCategory } from '../../hooks/useProducts';
import type { ProductCategory } from '../../services/api';
import type {
  PaginationOption,
  SortOption,
} from '../../types/ControlsBarTypes';

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { category = '' } = useParams();

  const perPage = (Number(searchParams.get('perPage')) ||
    12) as PaginationOption;
  const currentPage = Number(searchParams.get('page')) || 1;
  const sortOption = (searchParams.get('sort') || 'Newest') as SortOption;

  const getSortParams = (option: SortOption) => {
    switch (option) {
      case 'Newest':
        return { sortBy: 'year' as const, sortOrder: 'desc' as const };
      case 'Price_ascending':
        return { sortBy: 'price' as const, sortOrder: 'asc' as const };
      case 'Price_descending':
        return { sortBy: 'price' as const, sortOrder: 'desc' as const };
      default:
        return { sortBy: 'year' as const, sortOrder: 'desc' as const };
    }
  };

  const { sortBy, sortOrder } = getSortParams(sortOption);

  const { data, isLoading, isError } = useProductsByCategory(
    category as ProductCategory,
    currentPage,
    perPage,
    '',
    sortBy,
    sortOrder,
  );

  const handlePerPageChange = (items: PaginationOption) => {
    setSearchParams({
      page: '1',
      perPage: items.toString(),
      sort: sortOption,
    });
  };

  const handleSortChange = (option: SortOption) => {
    setSearchParams({
      page: '1',
      perPage: perPage.toString(),
      sort: option,
    });
  };

  const totalProducts = data?.totalItems || 0;
  const totalPages = data?.totalPages || 1;

  if (isError) {
    return <div>Error: loading data.</div>;
  }

  return (
    <CatalogLayout
      controlsBarSection={
        <ControlsBar
          sortOption={sortOption}
          onSortChange={handleSortChange}
          perPage={perPage}
          onPerPageChange={handlePerPageChange}
        />
      }
      productCountSection={<h2>{totalProducts} models</h2>}
      productListSection={
        isLoading ? <div>Loading...</div> : <ListItems products={data?.data} />
      }
      paginationSection={
        !isLoading &&
        totalProducts > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )
      }
    />
  );
};

export default CatalogPage;
