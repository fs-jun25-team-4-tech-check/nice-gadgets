import type { Product, ProductDetails } from '../../../types';
import { BackButton } from '../../atoms';
import Breadcrumbs from '../../molecules/Breadcrumbs/Breadcrumbs';
import { ImageGallery } from '../../organisms/ImageGallery/ImageGallery';
import { AboutAndTechSpecs } from '../../organisms/AboutAndTechSpecs/AboutAndTechSpecs';
import { SelectorsSection } from '../../organisms/SelectorSection/SelectorsSection';
import Loader from '../../atoms/Loader/Loader';
import styles from './ItemCardLayout.module.scss';

const ErrorComponent = ({
  errorName = 'Unknown Error',
  errorMessage = 'Unknown Message',
}) => (
  <div>
    <BackButton fallbackPath="/">Back</BackButton>
    <p>Product not found</p>
    <p>
      {errorName} - {errorMessage}
    </p>
  </div>
);

interface ItemCardLayoutProps {
  product: (Product | ProductDetails) | undefined | null;
  isLoading?: boolean;
  isPlaceholderData?: boolean;
  hasDetails?: boolean;
  error?: Error | null;
  onColorChange?: (color: string) => void;
  onCapacityChange?: (capacity: string) => void;
  youMayAlsoLikeSection: React.ReactNode;
}

export const ItemCardLayout = ({
  product,
  isLoading,
  isPlaceholderData = false,
  hasDetails = false,
  error,
  onColorChange,
  onCapacityChange,
  youMayAlsoLikeSection,
}: ItemCardLayoutProps) => {
  if (error) {
    return (
      <ErrorComponent
        errorName={error.name}
        errorMessage={error.message}
      />
    );
  }

  if (isLoading && !product) {
    return <Loader />;
  }

  if (!product) {
    return <div>Product not found</div>;
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
        <div style={{ position: 'relative' }}>
          <ImageGallery images={imageSources} />
          {isPlaceholderData && (
            <div className="loading-overlay">Loading full images...</div>
          )}
        </div>

        <div style={{ position: 'relative' }}>
          {/* Render selectors only when we have detailed data (or a placeholder with the right shape) */}
          {(hasDetails || isPlaceholderData) && (
            <SelectorsSection
              product={product as ProductDetails}
              onColorChange={onColorChange}
              onCapacityChange={onCapacityChange}
            />
          )}
          {isPlaceholderData && (
            <div className="loading-overlay">Loading options...</div>
          )}
        </div>
      </div>

      {/* Show full specs only when details have loaded, otherwise show a loader */}
      {hasDetails ?
        <AboutAndTechSpecs product={product as ProductDetails} />
      : <div style={{ position: 'relative' }}>
          <Loader />
          <div className="partial-data-notice">
            Loading complete product specifications...
          </div>
        </div>
      }

      {youMayAlsoLikeSection}
    </div>
  );
};
