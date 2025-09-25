import { createClient } from '@supabase/supabase-js';
import type {
  Accessory,
  Phone,
  Product,
  ProductDetails,
  Tablet,
} from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

interface DatabaseProduct {
  id: number;
  category: 'phones' | 'tablets' | 'accessories';
  item_id: string;
  name: string;
  full_price: number;
  price: number;
  screen: string | null;
  capacity: string | null;
  color: string | null;
  ram: string | null;
  year: number | null;
  image: string | null;
  created_at: string;
  updated_at: string;
}

interface DatabaseProductDetails {
  id: string;
  namespace_id: string;
  category: 'phones' | 'tablets' | 'accessories';
  name: string;
  capacity_available: string[];
  capacity: string;
  price_regular: number;
  price_discount: number;
  colors_available: string[];
  color: string;
  images: string[];
  description: Array<{
    title: string;
    text: string[];
  }>;
  screen: string | null;
  resolution: string | null;
  processor: string | null;
  ram: string | null;
  camera: string | null;
  zoom: string | null;
  cell: string[];
  created_at: string;
  updated_at: string;
}

export const mapProductDetails = (
  dbData: DatabaseProductDetails,
): ProductDetails => {
  const baseProduct = {
    id: dbData.id,
    namespaceId: dbData.namespace_id,
    name: dbData.name,
    capacityAvailable: dbData.capacity_available || [],
    capacity: dbData.capacity,
    priceRegular: Number(dbData.price_regular),
    priceDiscount: Number(dbData.price_discount),
    colorsAvailable: dbData.colors_available || [],
    color: dbData.color,
    images: dbData.images || [],
    description: dbData.description || [],
    screen: dbData.screen || '',
    resolution: dbData.resolution || '',
    processor: dbData.processor || '',
    ram: dbData.ram || '',
    cell: dbData.cell || [],
  };

  switch (dbData.category) {
    case 'phones':
      return {
        ...baseProduct,
        category: 'phones',
        camera: dbData.camera || '',
        zoom: dbData.zoom || '',
      } as Phone;
    case 'tablets':
      return {
        ...baseProduct,
        category: 'tablets',
        camera: dbData.camera || '',
        zoom: dbData.zoom || '',
      } as Tablet;
    case 'accessories':
      return {
        ...baseProduct,
        category: 'accessories',
      } as Accessory;
    default:
      throw new Error(`Unknown category: ${dbData.category}`);
  }
};

export const mapProduct = (dbData: DatabaseProduct): Product => ({
  id: dbData.id,
  category: dbData.category,
  itemId: dbData.item_id,
  name: dbData.name,
  fullPrice: Number(dbData.full_price),
  price: Number(dbData.price),
  screen: dbData.screen || '',
  capacity: dbData.capacity || '',
  color: dbData.color || '',
  ram: dbData.ram || '',
  year: dbData.year || 0,
  image: dbData.image || '',
});

export default supabase;
