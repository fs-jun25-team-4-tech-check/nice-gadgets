import type { SearchParams } from '../utils';

export interface BaseButtonProps {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  isSelected?: boolean;
  disabled?: boolean;
}

export interface LinkButtonProps extends BaseButtonProps {
  params: SearchParams;
}
export interface PrimaryButtonProps extends BaseButtonProps {
  color?: string;
}

export interface ActionButtonProps extends BaseButtonProps {
  direction?: 'left' | 'right' | 'up';
  params?: SearchParams;
  variant: 'pagination' | 'favourites' | 'slider' | 'quantity';
}

export interface ColorButtonProps extends BaseButtonProps {
  color?: string;
}
