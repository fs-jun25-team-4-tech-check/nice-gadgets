import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { CategoryBanner } from '../../../types/Category';
import styles from './ShopByCategory.module.scss';

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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    const p = v.play();
    if (p && typeof p.then === 'function') p.catch(() => {});
  };

  const handleLeave = () => {
    setHovered(false);
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <div className={styles.categories_card}>
      <Link to={`${baseCategoryUrl}/${category.categorySlug}`}>
        <div
          className={styles.categories_imageWrapper}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onFocus={handleEnter}
          onBlur={handleLeave}
        >
          <div
            className={styles.categories_bg}
            style={{ backgroundColor: category.backgroundColor }}
          />

          <img
            className={styles.categories_image}
            src={category.imgLink}
            alt={category.name}
          />

          {category.videoLink && (
            <video
              ref={videoRef}
              className={`${styles.categories_video} ${hovered ? styles.visible : ''}`}
              muted
              loop
              playsInline
              preload="auto"
            >
              <source
                src={category.videoLink}
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
