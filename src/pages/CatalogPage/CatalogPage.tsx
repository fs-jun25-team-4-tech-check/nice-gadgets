import { useSearchParams, useParams } from 'react-router-dom';
import CatalogLayout from '../../components/templates/CatalogLayout/CatalogLayout';
import { ControlsBar } from '../../components/molecules/ControlsBar/ControlsBar';
import { ListItems } from '../../components/organisms/ListItems/ListItems';
import Pagination from '../../components/molecules/Pagination/Pagination';
import Breadcrumbs from '../../components/molecules/Breadcrumbs/Breadcrumbs';
import { useProductsByCategory, useProducts } from '../../hooks/useProducts';
import type { ProductCategory } from '../../services/api';
import type {
  PaginationOption,
  SortField,
  SortDirection,
} from '../../types/ControlsBarTypes';

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { category = '' } = useParams();
  const query = searchParams.get('query') || '';

  const getPageTitle = (cat: string) => {
    switch (cat) {
      case 'phones':
        return 'Mobile phones';
      case 'tablets':
        return 'Tablets';
      case 'accessories':
        return 'Accessories';
      default:
        return 'Search results';
    }
  };

  const pageTitle = getPageTitle(category);

  const perPage = (Number(searchParams.get('perPage')) ||
    12) as PaginationOption;
  const currentPage = Number(searchParams.get('page')) || 1;

  const sortBy = (searchParams.get('sortBy') || 'year') as SortField;
  const sortOrder = (searchParams.get('sortOrder') || 'desc') as SortDirection;

  const isSearchMode = !!query;

  const categoryQueryResult = useProductsByCategory(
    category as ProductCategory,
    currentPage,
    perPage,
    '',
    sortBy,
    sortOrder,
  );

  const searchQueryResult = useProducts(
    currentPage,
    perPage,
    query,
    sortBy,
    sortOrder,
  );

  const { data, isFetching, isLoading, isError } =
    isSearchMode ? searchQueryResult : categoryQueryResult;

  const handlePerPageChange = (items: PaginationOption) => {
    setSearchParams((prev) => ({
      ...Object.fromEntries(prev.entries()),
      page: '1',
      perPage: items.toString(),
      sortBy: sortBy,
      sortOrder: sortOrder,
    }));
  };

  const handleSortByChange = (field: SortField) => {
    setSearchParams((prev) => ({
      ...Object.fromEntries(prev.entries()),
      page: '1',
      perPage: perPage.toString(),
      sortBy: field,
      sortOrder: sortOrder,
    }));
  };

  const handleSortOrderChange = (order: SortDirection) => {
    setSearchParams((prev) => ({
      ...Object.fromEntries(prev.entries()),
      page: '1',
      perPage: perPage.toString(),
      sortBy: sortBy,
      sortOrder: order,
    }));
  };

  const totalProducts = data?.totalItems || 0;
  const totalPages = data?.totalPages || 1;

  if (isError) {
    return <div>Error: loading data.</div>;
  }

  return (
    <CatalogLayout
      pageTitle={pageTitle}
      backButtonSection={<Breadcrumbs categorySlug={category} />}
      controlsBarSection={
        <ControlsBar
          sortBy={sortBy}
          onSortByChange={handleSortByChange}
          sortOrder={sortOrder}
          onSortOrderChange={handleSortOrderChange}
          perPage={perPage}
          onPerPageChange={handlePerPageChange}
        />
      }
      productCountSection={<p>{totalProducts} models</p>}
      productListSection={
        <ListItems
          products={data?.data}
          isLoading={isLoading || isFetching}
          itemsCount={perPage}
        />
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
