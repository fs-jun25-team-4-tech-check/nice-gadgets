import { useState } from 'react';
import styles from './SelectorsSection.module.scss';

interface SelectorsSectionProps {
  colorsAvailable: string[];
  capacityAvailable: string[];
  priceRegular: number;
  priceDiscount: number;
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  onColorChange?: (color: string) => void;
  onCapacityChange?: (capacity: string) => void;
}

export const SelectorsSection = ({
  colorsAvailable,
  capacityAvailable,
  priceRegular,
  priceDiscount,
  screen,
  resolution,
  processor,
  ram,
  onColorChange,
  onCapacityChange,
}: SelectorsSectionProps) => {
  const [selectedColor, setSelectedColor] = useState(colorsAvailable[0]);
  const [selectedCapacity, setSelectedCapacity] = useState(
    capacityAvailable[0],
  );

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    onColorChange?.(color);
  };

  const handleCapacitySelect = (capacity: string) => {
    setSelectedCapacity(capacity);
    onCapacityChange?.(capacity);
  };

  return (
    <section className={styles.section}>
      <div className={styles.selectorGroup}>
        <p className={styles.label}>Available colors</p>
        <div className={styles.colorOptions}>
          {colorsAvailable.map((color) => (
            <button
              key={color}
              className={`${styles.colorCircle} ${selectedColor === color ? styles.active : ''}`}
              style={{ backgroundColor: color || '#CCCCCC' }}
              onClick={() => handleColorSelect(color)}
              aria-label={`Select ${color} color`}
            />
          ))}
        </div>
      </div>

      <div className={styles.selectorGroup}>
        <p className={styles.label}>Select capacity</p>
        <div className={styles.capacityOptions}>
          {capacityAvailable.map((capacity) => (
            <button
              key={capacity}
              className={`${styles.capacityBtn} ${selectedCapacity === capacity ? styles.active : ''}`}
              onClick={() => handleCapacitySelect(capacity)}
            >
              {capacity}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.priceBlock}>
        <span className={styles.newPrice}>${priceDiscount}</span>
        <span className={styles.oldPrice}>${priceRegular}</span>
      </div>

      <div className={styles.actions}>
        <button className={styles.addToCart}>Add to cart</button>
        <button
          className={styles.favourite}
          aria-label="Add to favourites"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 14L7.175 13.25C3.4 9.8 1 7.6 1 4.95C1 2.75 2.75 1 4.95 1C6.17 1 7.34 1.62 8 2.53C8.66 1.62 9.83 1 11.05 1C13.25 1 15 2.75 15 4.95C15 7.6 12.6 9.8 8.825 13.25L8 14Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <div className={styles.specs}>
        <div className={styles.specRow}>
          <span className={styles.specName}>Screen</span>
          <span className={styles.specValue}>{screen}</span>
        </div>
        <div className={styles.specRow}>
          <span className={styles.specName}>Resolution</span>
          <span className={styles.specValue}>{resolution}</span>
        </div>
        <div className={styles.specRow}>
          <span className={styles.specName}>Processor</span>
          <span className={styles.specValue}>{processor}</span>
        </div>
        <div className={styles.specRow}>
          <span className={styles.specName}>RAM</span>
          <span className={styles.specValue}>{ram}</span>
        </div>
      </div>
    </section>
  );
};
