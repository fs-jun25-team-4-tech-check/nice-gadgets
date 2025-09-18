import React, { useState } from 'react';
import { ToastContext } from '../contexts/ToastContext';

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'cart' | 'favorites'>('cart');

  const showToast = (
    msg: string,
    toastType: 'cart' | 'favorites' = 'cart',
    duration: number = 5000,
  ) => {
    setMessage(msg);
    setType(toastType);
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ showToast, open, message, type, setOpen }}>
      {children}
    </ToastContext.Provider>
  );
};
