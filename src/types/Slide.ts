export interface Slide {
  id: number;
  image: string;
  link: string;
  title: string;
  price: number;
  oldPrice?: number;
  screen: string;
  capacity: string;
  ram: string;
  isInCart: boolean;
  isFavorite: boolean;
}
