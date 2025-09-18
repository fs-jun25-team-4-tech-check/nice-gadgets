export interface ToastContextType {
  showToast: (
    message: string,
    type?: 'cart' | 'favorites',
    duration?: number,
  ) => void;
  open: boolean;
  message: string;
  type: 'cart' | 'favorites';
  setOpen: (value: boolean) => void;
}
