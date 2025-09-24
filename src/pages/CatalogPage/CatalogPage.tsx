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
  SortOption,
} from '../../types/ControlsBarTypes';

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { category = '' } = useParams();
  const query = searchParams.get('query') || '';

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
    }));
  };

  const handleSortChange = (option: SortOption) => {
    setSearchParams((prev) => ({
      ...Object.fromEntries(prev.entries()),
      page: '1',
      sort: option,
    }));
  };

  const totalProducts = data?.totalItems || 0;
  const totalPages = data?.totalPages || 1;

  if (isError) {
    return <div>Error: loading data.</div>;
  }

  const getPageTitle = (cat: string) => {
    switch (cat) {
      case 'phones':
        return 'Mobile phones';
      case 'tablets':
        return 'Tablets';
      case 'accessories':
        return 'Accessories';
      default:
        return 'Products';
    }
  };

  const pageTitle = isSearchMode ? 'Search results' : getPageTitle(category);
  const countText =
    isSearchMode ? `${totalProducts} results found` : `${totalProducts} models`;

  return (
    <CatalogLayout
      pageTitle={pageTitle}
      backButtonSection={<Breadcrumbs categorySlug={category} />}
      controlsBarSection={
        <ControlsBar
          sortOption={sortOption}
          onSortChange={handleSortChange}
          perPage={perPage}
          onPerPageChange={handlePerPageChange}
        />
      }
      productCountSection={<p>{countText}</p>}
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
