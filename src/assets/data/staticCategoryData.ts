import type { CategoryBannerData, ProductCategory } from '../../types';
import categoriesJson from './categories.json';
import phonesImg from './../images/categories/category-phones.png';
import tabletsImg from './../images/categories/category-tablets.png';
import accessoriesImg from './../images/categories/category-accessories.png';
import phonesVideo from './../videos/categories/phones.mp4';
import tabletsVideo from './../videos/categories/tablets.mp4';
import accessoriesVideo from './../videos/categories/accessories.mp4';

const filesMap: Record<ProductCategory, { img: string; video: string }> = {
  phones: { img: phonesImg, video: phonesVideo },
  tablets: { img: tabletsImg, video: tabletsVideo },
  accessories: { img: accessoriesImg, video: accessoriesVideo },
};

export const staticCategoryData: CategoryBannerData[] = categoriesJson.map(
  (c) => {
    const categorySlug = c.categorySlug as ProductCategory;
    return {
      categorySlug,
      name: c.name,
      imgLink: filesMap[categorySlug].img,
      backgroundColor: c.backgroundColor,
      videoLink: filesMap[categorySlug].video,
    };
  },
);
