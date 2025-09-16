import type { SearchParams } from '../utils';

export interface BaseButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  isSelected?: boolean;
}

export interface SliderButtonProps extends Omit<BaseButtonProps, 'isSelected'> {
  direction: 'left' | 'right';
  disabled?: boolean;
}

export interface LinkButtonProps extends BaseButtonProps {
  params: SearchParams;
}
export interface ColorButtonProps extends BaseButtonProps {
  color?: string;
}
