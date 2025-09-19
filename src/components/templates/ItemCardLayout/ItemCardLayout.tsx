import type { ProductDetails } from '../../../types';
import { ImageGallery } from '../../molecules/ImageGallery/ImageGallery';
import { AboutAndTechSpecs } from '../../organisms/AboutAndTechSpecs/AboutAndTechSpecs';
import { SelectorsSection } from '../../organisms/SelectorSection/SelectorsSection';
import { SliderYouMayAlsoLike } from '../../organisms/SliderYouMayALsoLike/SliderYouMayAlsoLike';
import styles from './ItemCardLayout.module.scss';

export const ItemCardLayout = ({ items }: { items: ProductDetails[] }) => {
  return (
    <>
      {items.map((product) => (
        <div
          key={product.id}
          className={styles.itemCard}
        >
          <h2>{product.name}</h2>
          <ImageGallery images={product.images} />
          <SelectorsSection />
          <AboutAndTechSpecs
            description={product.description}
            screen={product.screen}
            resolution={product.resolution}
            processor={product.processor}
            ram={product.ram}
            camera={product.camera}
            zoom={product.zoom}
            cell={product.cell}
          />
          <SliderYouMayAlsoLike productId={product.id} />
        </div>
      ))}
    </>
  );
};
