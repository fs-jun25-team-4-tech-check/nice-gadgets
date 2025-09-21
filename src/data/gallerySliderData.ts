import type { GallerySliderItem } from '../types/GallerySliderItem';
import accessoriesImg from '../assets/images/banners/banner-accessories.png';
import phonesImg from '../assets/images/banners/banner-phones.png';
import tabletsImg from '../assets/images/banners/banner-tablets.png';

export const staticGallerySliderData: GallerySliderItem[] = [
  {
    imgUrl: accessoriesImg,
    linkUrl: '/catalog/accessories',
    alt: 'Banner Slider Image - Accessories',
  },
  {
    imgUrl: phonesImg,
    linkUrl: '/catalog/phones',
    alt: 'Banner Slider Image - Phones',
  },
  {
    imgUrl: tabletsImg,
    linkUrl: '/catalog/tablets',
    alt: 'Banner Slider Image - Tablets',
  },
];
