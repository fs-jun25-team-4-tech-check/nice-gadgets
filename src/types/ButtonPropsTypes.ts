import type { SearchParams } from '../utils';

export interface BaseButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  isSelected?: boolean;
}

export interface LinkButtonProps extends BaseButtonProps {
  params: SearchParams;
}
export interface PrimaryButtonProps extends BaseButtonProps {
  disabled?: boolean;
  color?: string;
}

export interface ActionButtonProps extends BaseButtonProps {
  direction?: 'left' | 'right' | 'up';
  disabled?: boolean;
  params?: SearchParams;
  variant: 'pagination' | 'favourites' | 'slider';
}

export interface ColorButtonProps extends BaseButtonProps {
  color?: string;
}
