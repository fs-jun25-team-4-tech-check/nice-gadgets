export type ToastType = 'info' | 'error';

export type ToastItem = {
  id: string;
  title?: string;
  description: string;
  duration?: number;
  type: ToastType;
  open: boolean;
};

export interface ToastContextType {
  showToast: (
    desc: string,
    toastType: ToastType,
    customTitle?: string,
    duration?: number,
  ) => void;
  removeToast: (id: string) => void;
  toasts: ToastItem[];
}
