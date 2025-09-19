import React, { useState } from 'react';
import styles from './ImageGallery.module.scss';

interface ImageGalleryProps {
  images: string[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.gallery}>
      <div className={styles.images}>
        <div className={styles.thumbs}>
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`${styles.thumb} ${
                activeIndex === i ? styles.active : ''
              }`}
            >
              <img
                src={img}
                alt={`thumb-${i}`}
              />
            </button>
          ))}
        </div>

        <div className={styles.main}>
          <img
            src={images[activeIndex]}
            alt={`main-${activeIndex}`}
          />
        </div>
      </div>
    </div>
  );
};
