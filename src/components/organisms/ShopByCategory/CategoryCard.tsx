import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import type { CategoryBanner } from '../../../types/Category';
import styles from './ShopByCategory.module.scss';
import { BASE_URL_IMAGE } from '../../../constants';

type Props = {
  category: CategoryBanner;
  baseCategoryUrl: string;
  isLoading: boolean;
};

export const CategoryCard: React.FC<Props> = ({
  category,
  baseCategoryUrl,
  isLoading,
}) => {
  const imageUrl = `${BASE_URL_IMAGE}/gallery/categories/${category.imgLink}`;
  const videoUrl = `${BASE_URL_IMAGE}/gallery/categories/${category.videoLink}`;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleHover = (enter: boolean) => {
    const v = videoRef.current;
    if (!v) return;
    if (enter) {
      v.muted = true;
      v.playsInline = true;
      v.play().catch(() => {});
      v.style.opacity = '1';
    } else {
      v.pause();
      v.currentTime = 0;
      v.style.opacity = '0';
    }
  };

  return (
    <div className={styles.categories_card}>
      <Link to={`${baseCategoryUrl}/${category.categorySlug}`}>
        <div
          className={styles.categories_imageWrapper}
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
          onFocus={() => handleHover(true)}
          onBlur={() => handleHover(false)}
        >
          <div
            className={styles.categories_bg}
            style={{ backgroundColor: category.backgroundColor }}
          />

          <img
            className={styles.categories_image}
            src={imageUrl}
            alt={category.name}
          />

          {category.videoLink && (
            <video
              ref={videoRef}
              className={styles.categories_video}
              muted
              loop
              playsInline
              preload="auto"
            >
              <source
                src={videoUrl}
                type="video/mp4"
              />
            </video>
          )}
        </div>
      </Link>

      <Link
        className={styles.categories_link}
        to={`${baseCategoryUrl}/${category.categorySlug}`}
      >
        {category.name}
      </Link>

      <p className={styles.categories_modelsNumber}>
        {isLoading ? 'Loading...' : `${category.productCount} models`}
      </p>
    </div>
  );
};
