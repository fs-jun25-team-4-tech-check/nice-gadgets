import React, { useState } from 'react';
import { ToastContext } from '../contexts/ToastContext';
import type { ToastItem, ToastType } from '../types/toast';
import { getNewToastId } from '../utils/toastHelper';

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = (
    desc: string,
    toastType: ToastType = 'info',
    customTitle?: string,
    duration: number = 5000,
  ) => {
    const newToast = {
      id: getNewToastId(),
      title: customTitle,
      description: desc,
      duration: duration,
      type: toastType,
      open: true,
    };

    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      removeToast(newToast.id);
    }, duration);
  };
  const removeToast = (id: string) => {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, open: false } : toast,
      ),
    );

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 200);
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
