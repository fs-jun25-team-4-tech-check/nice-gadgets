import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './ImageGallery.module.scss';
import { ImageGallerySkeleton } from './ImageGallerySkeleton';

interface ImageGalleryProps {
  images?: string[];
  isLoading?: boolean;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  isLoading = false,
}) => {
  const [mainEmblaRef, mainEmblaApi] = useEmblaCarousel();
  const [thumbsEmblaRef, thumbsEmblaApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainEmblaApi || !thumbsEmblaApi) return;
      mainEmblaApi.scrollTo(index);
    },
    [mainEmblaApi, thumbsEmblaApi],
  );

  const onSelect = useCallback(() => {
    if (!mainEmblaApi || !thumbsEmblaApi) return;
    const newIndex = mainEmblaApi.selectedScrollSnap();
    setSelectedIndex(newIndex);
    thumbsEmblaApi.scrollTo(newIndex);
  }, [mainEmblaApi, thumbsEmblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!mainEmblaApi) return;
    onSelect();

    mainEmblaApi.on('select', onSelect);
    mainEmblaApi.on('reInit', onSelect);

    return () => {
      mainEmblaApi.off('select', onSelect);
      mainEmblaApi.off('reInit', onSelect);
    };
  }, [mainEmblaApi, onSelect]);

  if (!images || images.length === 0) {
    return <ImageGallerySkeleton />;
  }

  return (
    <div className={`${styles.gallery} ${isLoading ? styles.disabled : ''}`}>
      <div className={styles.images}>
        <div
          className={styles.thumbs}
          ref={thumbsEmblaRef}
        >
          <div className={`${styles.thumbsContainer}`}>
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => onThumbClick(i)}
                className={`${styles.thumb} ${
                  selectedIndex === i ? styles.active : ''
                }`}
              >
                <img
                  src={img}
                  alt={`thumb-${i}`}
                />
              </button>
            ))}

            {images.length === 1 &&
              [...Array(4)].map((_, i) => (
                <div
                  key={`skeleton-${i}`}
                  className={`${styles.thumb} ${styles.skeleton}`}
                />
              ))}
          </div>
        </div>

        <div
          className={styles.main}
          ref={mainEmblaRef}
        >
          <div className={`${styles.mainContainer}`}>
            {images.map((img, i) => (
              <div
                key={i}
                className={`${styles.mainSlide}`}
              >
                <img
                  src={img}
                  alt={`main-${i}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
