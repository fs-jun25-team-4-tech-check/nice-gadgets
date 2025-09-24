import React from 'react';
import styles from './ImageGallery.module.scss';

export const ImageGallerySkeleton: React.FC = () => {
  return (
    <div className={styles.gallery}>
      <div className={`${styles.images}`}>
        <div className={styles.thumbs}>
          <div className={`${styles.thumbsContainer}`}>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`${styles.thumb} ${styles.skeleton}`}
              />
            ))}
          </div>
        </div>
        <div className={`${styles.main} ${styles.skeleton}`} />
      </div>
    </div>
  );
};
