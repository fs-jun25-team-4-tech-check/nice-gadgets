import type { Product, ProductDetails } from '../../../types';
import { BackButton } from '../../atoms';
import Breadcrumbs from '../../molecules/Breadcrumbs/Breadcrumbs';
import { ImageGallery } from '../../organisms/ImageGallery/ImageGallery';
import { AboutAndTechSpecs } from '../../organisms/AboutAndTechSpecs/AboutAndTechSpecs';
import { SelectorsSection } from '../../organisms/SelectorSection/SelectorsSection';
import Loader from '../../atoms/Loader/Loader';
import styles from './ItemCardLayout.module.scss';
import LoaderOverlay from '../../atoms/Loader/LoaderOverlay';

const ErrorComponent = ({ error }: { error: Error }) => (
  <>
    <BackButton fallbackPath="/">Back</BackButton>

    <div className={styles.detailsError}>
      <h4>Could not load product details</h4>
      <small>Error: {error.message}</small>
    </div>
  </>
);

interface ItemCardLayoutProps {
  simplifiedProduct: Product | undefined | null;
  detailedProduct: ProductDetails | undefined | null;
  isLoading?: boolean;
  isFetching?: boolean;
  hasDetails?: boolean;
  error?: Error | null;
  onColorChange?: (color: string) => void;
  onCapacityChange?: (capacity: string) => void;
  youMayAlsoLikeSection: React.ReactNode;
}

export const ItemCardLayout = ({
  simplifiedProduct,
  detailedProduct,
  isLoading,
  isFetching,
  error,
  onColorChange,
  onCapacityChange,
  youMayAlsoLikeSection,
}: ItemCardLayoutProps) => {
  if (error) {
    return <ErrorComponent error={error} />;
  }

  if (!simplifiedProduct && !detailedProduct && (isLoading || isFetching)) {
    return (
      <div className={styles.loadingPageWrapper}>
        <BackButton fallbackPath="/">Back</BackButton>
        <div className={styles.fullPageLoaderWrapper}>
          <Loader size={100} />
        </div>
      </div>
    );
  }

  const product = detailedProduct || simplifiedProduct;

  if (!product) {
    return <ErrorComponent error={new Error('Product not found')} />;
  }

  const imageSources = 'images' in product ? product.images : [product.image];

  return (
    <div className={styles.itemCard}>
      <Breadcrumbs
        categorySlug={product.category}
        productName={product.name}
      />

      <BackButton fallbackPath="/">Back</BackButton>

      <div className={styles.loaderWrapper}>
        {isLoading || (isFetching && <LoaderOverlay loaderSize={100} />)}

        <h2>{product.name}</h2>

        <div className={styles.info}>
          <ImageGallery images={imageSources} />

          <SelectorsSection
            product={product as ProductDetails}
            onColorChange={onColorChange}
            onCapacityChange={onCapacityChange}
          />
        </div>
      </div>

      <div className={styles.loaderWrapper}>
        {isLoading || (isFetching && <LoaderOverlay loaderSize={100} />)}

        <AboutAndTechSpecs product={product as ProductDetails} />
      </div>

      {youMayAlsoLikeSection}
    </div>
  );
};
