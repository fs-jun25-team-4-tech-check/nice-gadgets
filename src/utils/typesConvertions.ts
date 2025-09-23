import type {
  Accessory,
  Phone,
  Product,
  ProductCategory,
  ProductDetails,
  Tablet,
} from '../types';

export function ProductToProductDetails(
  simplifiedProduct: Product,
): ProductDetails {
  const baseDetails = {
    id: simplifiedProduct.itemId,
    namespaceId: '',
    name: simplifiedProduct.name,
    capacity: simplifiedProduct.capacity,
    priceRegular: simplifiedProduct.fullPrice,
    priceDiscount: simplifiedProduct.price,
    color: simplifiedProduct.color,
    screen: simplifiedProduct.screen,
    ram: simplifiedProduct.ram,
    images: [simplifiedProduct.image],
    capacityAvailable: [simplifiedProduct.capacity],
    colorsAvailable: [simplifiedProduct.color],
    description: [],
  };

  const category = simplifiedProduct.category as ProductCategory;

  switch (category) {
    case 'phones': {
      const phoneDetails: Phone = {
        ...baseDetails,
        category: 'phones',
        resolution: '',
        processor: '',
        camera: '',
        zoom: '',
        cell: [],
      };
      return phoneDetails;
    }

    case 'tablets': {
      const tabletDetails: Tablet = {
        ...baseDetails,
        category: 'tablets',
        resolution: '',
        processor: '',
        camera: '',
        zoom: '',
        cell: [],
      };
      return tabletDetails;
    }

    case 'accessories': {
      const accessoryDetails: Accessory = {
        ...baseDetails,
        category: 'accessories',
        resolution: '',
        processor: '',
        cell: [],
      };
      return accessoryDetails;
    }
  }
}
