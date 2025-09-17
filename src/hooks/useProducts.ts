import { keepPreviousData, useQuery } from '@tanstack/react-query';
import {
  getProducts,
  getPhones,
  getTablets,
  getAccessories,
} from '../services';

export function useProducts(page: number, limit: number) {
  return useQuery({
    queryKey: ['products', page, limit],
    queryFn: () => getProducts(page, limit),
    placeholderData: keepPreviousData,
  });
}

export function usePhones() {
  return useQuery({
    queryKey: ['phones'],
    queryFn: getPhones,
  });
}

export function useTablets() {
  return useQuery({
    queryKey: ['tablets'],
    queryFn: getTablets,
  });
}

export function useAccessories() {
  return useQuery({
    queryKey: ['accessories'],
    queryFn: getAccessories,
  });
}
