import type { ProductDetails } from '../../../types';
import { BackButton } from '../../atoms';
import Breadcrumbs from '../../molecules/Breadcrumbs/Breadcrumbs';
import { ImageGallery } from '../../organisms/ImageGallery/ImageGallery';
import { AboutAndTechSpecs } from '../../organisms/AboutAndTechSpecs/AboutAndTechSpecs';
import { SelectorsSection } from '../../organisms/SelectorSection/SelectorsSection';
import Loader from '../../atoms/Loader/Loader';
import styles from './ItemCardLayout.module.scss';

interface ItemCardLayoutProps {
  items: ProductDetails[];
  isLoading?: boolean;
  isError?: boolean;
  onColorChange?: (color: string) => void;
  onCapacityChange?: (capacity: string) => void;
  youMayAlsoLikeSection: React.ReactNode;
}

export const ItemCardLayout = ({
  items,
  isLoading,
  onColorChange,
  onCapacityChange,
  youMayAlsoLikeSection,
}: ItemCardLayoutProps) => {
  return (
    <>
      {items.map((product) => (
        <div
          key={product.id}
          className={styles.itemCard}
        >
          <Breadcrumbs
            categorySlug={product.category}
            productName={product.name}
          />

          <BackButton fallbackPath="/">Back</BackButton>

          <h2>{product.name}</h2>

          <div className={styles.info}>
            {isLoading ?
              <Loader />
            : <ImageGallery images={product.images} />}

            {isLoading ?
              <Loader />
            : <SelectorsSection
                product={product}
                onColorChange={onColorChange}
                onCapacityChange={onCapacityChange}
              />
            }
          </div>

          {isLoading ?
            <Loader />
          : <AboutAndTechSpecs product={product} />}

          {youMayAlsoLikeSection}
        </div>
      ))}
    </>
  );
};
