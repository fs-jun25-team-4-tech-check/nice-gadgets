import type { CategoryBannerData } from '../types/Category';
import phonesImg from '../assets/images/categories/category-phones.png';
import tabletsImg from '../assets/images/categories/category-tablets.png';
import accessoriesImg from '../assets/images/categories/category-accessories.png';

export const staticCategoryData: CategoryBannerData[] = [
  {
    categorySlug: 'phones',
    name: 'Mobile Phones',
    imgLink: phonesImg,
    backgroundColor: '#c69d76',
  },
  {
    categorySlug: 'tablets',
    name: 'Tablets',
    imgLink: tabletsImg,
    backgroundColor: '#848caf',
  },
  {
    categorySlug: 'accessories',
    name: 'Accessories',
    imgLink: accessoriesImg,
    backgroundColor: '#ce9999',
  },
];
