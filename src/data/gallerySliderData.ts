import type { GallerySliderItem } from '../types/GallerySliderItem';
import accessoriesImg from '../assets/images/banners/banner-accessories.png';
import phonesImg from '../assets/images/banners/banner-phones.png';
import tabletsImg from '../assets/images/banners/banner-tablets.png';
import accessoriesVideo from '../assets/videos/banners/banner-accessories.mp4';
import phonesVideo from '../assets/videos/banners/banner-phones.mp4';
import tabletsVideo from '../assets/videos/banners/banner-tablets.mp4';

export const staticGallerySliderData: GallerySliderItem[] = [
  {
    imgUrl: phonesImg,
    linkUrl: '/catalog/phones',
    alt: 'Banner Slider Image - Phones',
    videoUrl: phonesVideo,
  },
  {
    imgUrl: accessoriesImg,
    linkUrl: '/catalog/accessories',
    alt: 'Banner Slider Image - Accessories',
    videoUrl: accessoriesVideo,
  },
  {
    imgUrl: tabletsImg,
    linkUrl: '/catalog/tablets',
    alt: 'Banner Slider Image - Tablets',
    videoUrl: tabletsVideo,
  },
];
