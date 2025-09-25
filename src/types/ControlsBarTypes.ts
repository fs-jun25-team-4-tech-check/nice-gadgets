export type SortField = 'year' | 'name' | 'price' | 'capacity';

export type SortDirection = 'asc' | 'desc';

export type PaginationOption = 12 | 16 | 24 | 36;

export interface DropdownItem {
  value: string;
  displayName: string;
}
