import type { ProductDetails } from '../../../types';
import { BackButton } from '../../atoms';

import Breadcrumbs from '../../molecules/Breadcrumbs/Breadcrumbs';
import { ImageGallery } from '../../molecules/ImageGallery/ImageGallery';
import { AboutAndTechSpecs } from '../../organisms/AboutAndTechSpecs/AboutAndTechSpecs';
import { SelectorsSection } from '../../organisms/SelectorSection/SelectorsSection';
import styles from './ItemCardLayout.module.scss';

interface ItemCardLayoutProps {
  items: ProductDetails[];
  categorySlug: string;
  onColorChange?: (color: string) => void;
  onCapacityChange?: (capacity: string) => void;
  hotPricesSection: React.ReactNode;
}

export const ItemCardLayout = ({
  items,
  categorySlug,
  onColorChange,
  onCapacityChange,
  hotPricesSection,
}: ItemCardLayoutProps) => {
  return (
    <>
      {items.map((product) => (
        <div
          key={product.id}
          className={styles.itemCard}
        >
          <Breadcrumbs
            categorySlug={categorySlug || ''}
            productName={product.name}
          />

          <BackButton params={{ to: `/catalog/${categorySlug}` }}>
            Back
          </BackButton>

          <h2>{product.name}</h2>

          <div className="info">
            <ImageGallery images={product.images} />

            <SelectorsSection
              product={product}
              onColorChange={onColorChange}
              onCapacityChange={onCapacityChange}
            />
          </div>

          <AboutAndTechSpecs product={product} />
          {hotPricesSection}
        </div>
      ))}
    </>
  );
};
