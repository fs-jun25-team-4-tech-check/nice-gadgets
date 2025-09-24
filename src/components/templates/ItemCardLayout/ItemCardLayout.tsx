import type { Product, ProductDetails } from '../../../types';
import { BackButton } from '../../atoms';
import Breadcrumbs from '../../molecules/Breadcrumbs/Breadcrumbs';
import { ImageGallery } from '../../organisms/ImageGallery/ImageGallery';
import { AboutAndTechSpecs } from '../../organisms/AboutAndTechSpecs/AboutAndTechSpecs';
import { SelectorsSection } from '../../organisms/SelectorSection/SelectorsSection';
import styles from './ItemCardLayout.module.scss';
import { FaExclamationTriangle } from 'react-icons/fa';
import ItemCardLayoutSkeleton from './ItemCardLayoutSkeleton';
import AboutAndTechSpecsSkeleton from '../../organisms/AboutAndTechSpecs/AboutAndTechSpecsSkeleton';

const ErrorComponent = ({ error }: { error: Error }) => (
  <div className={styles.errorContainer}>
    <BackButton fallbackPath="/">Back</BackButton>

    <div className={styles.detailsError}>
      <div className={styles.errorIcon}>
        <FaExclamationTriangle />
      </div>
      <h4>Oops! We couldn&apos;t fetch the product details.</h4>
      <small>Error: {error.message}</small>
    </div>
  </div>
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
    return <ItemCardLayoutSkeleton />;
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

      <h2>{product.name}</h2>

      <div className={styles.info}>
        <ImageGallery
          images={imageSources}
          isLoading={isLoading || isFetching}
        />

        <SelectorsSection
          product={product}
          isFetching={isFetching}
          isLoading={isLoading}
          onColorChange={onColorChange}
          onCapacityChange={onCapacityChange}
        />
      </div>

      {isLoading ?
        <AboutAndTechSpecsSkeleton />
      : detailedProduct && (
          <AboutAndTechSpecs
            product={detailedProduct}
            disabled={isFetching}
          />
        )
      }

      {youMayAlsoLikeSection}
    </div>
  );
};
