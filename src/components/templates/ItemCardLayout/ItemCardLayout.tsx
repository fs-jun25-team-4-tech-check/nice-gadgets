import type { ProductDetails } from '../../../types';
import { ImageGallery } from '../../molecules/ImageGallery/ImageGallery';
import { AboutAndTechSpecs } from '../../organisms/AboutAndTechSpecs/AboutAndTechSpecs';
import { SelectorsSection } from '../../organisms/SelectorSection/SelectorsSection';
import { SliderYouMayAlsoLike } from '../../organisms/SliderYouMayALsoLike/SliderYouMayAlsoLike';
import styles from './ItemCardLayout.module.scss';

export const ItemCardLayout = ({ items }: { items: ProductDetails[] }) => {
  const handleColorChange = (productId: string, color: string) => {
    console.log(`Product ${productId}: Color changed to ${color}`);
  };

  const handleCapacityChange = (productId: string, capacity: string) => {
    console.log(`Product ${productId}: Capacity changed to ${capacity}`);
  };

  return (
    <>
      {items.map((product) => (
        <div
          key={product.id}
          className={styles.itemCard}
        >
          <h2>{product.name}</h2>
          <ImageGallery images={product.images} />
          <SelectorsSection
            colorsAvailable={product.colorsAvailable}
            capacityAvailable={product.capacityAvailable}
            priceRegular={product.priceRegular}
            priceDiscount={product.priceDiscount}
            screen={product.screen}
            resolution={product.resolution}
            processor={product.processor}
            ram={product.ram}
            onColorChange={(color) => handleColorChange(product.id, color)}
            onCapacityChange={(capacity) =>
              handleCapacityChange(product.id, capacity)
            }
          />
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
