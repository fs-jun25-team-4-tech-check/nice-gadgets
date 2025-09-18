export type ToastType = 'info' | 'error';

export interface ToastContextType {
  showToast: (
    description: string,
    type?: ToastType,
    title?: string,
    duration?: number,
  ) => void;
  open: boolean;
  title?: string;
  description: string;
  type: ToastType;
  setOpen: (value: boolean) => void;
}
