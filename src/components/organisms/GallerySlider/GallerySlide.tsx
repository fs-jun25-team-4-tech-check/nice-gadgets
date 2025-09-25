import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './GallerySlider.module.scss';
import type { GallerySliderItem } from '../../../types/GallerySliderItem';
import { BASE_URL_IMAGE } from '../../../constants';

interface Props {
  slide: GallerySliderItem;
}

export const GallerySlide: React.FC<Props> = ({ slide }) => {
  const videoUrl = `${BASE_URL_IMAGE}/gallery/banners/${slide.videoUrl}`;
  const imgUrl = `${BASE_URL_IMAGE}/gallery/banners/${slide.imgUrl}`;

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
    <Link
      to={slide.linkUrl}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      onFocus={() => handleHover(true)}
      onBlur={() => handleHover(false)}
      className={styles.linkWrapper}
    >
      <img
        src={imgUrl}
        alt={slide.alt}
        className={styles.slideImage}
      />
      {videoUrl && (
        <video
          ref={videoRef}
          className={styles.slideVideo}
          loop
          preload="auto"
          playsInline
          muted
        >
          <source
            src={videoUrl}
            type="video/mp4"
          />
        </video>
      )}
    </Link>
  );
};
