import React, { useState, useRef } from 'react';
import { ToastContext } from '../contexts/ToastContext';
import type { ToastType } from '../types/toast';

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<ToastType>('info');
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState('');
  const timeoutRef = useRef<number | null>(null);

  const showToast = (
    desc: string,
    toastType: ToastType = 'info',
    customTitle?: string,
    duration: number = 5000,
  ) => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    setDescription(desc);
    setType(toastType);
    setTitle(customTitle || (toastType === 'error' ? 'Error' : 'Info'));
    setOpen(true);

    timeoutRef.current = window.setTimeout(() => {
      setOpen(false);
      timeoutRef.current = null;
    }, duration);
  };

  return (
    <ToastContext.Provider
      value={{
        showToast,
        open,
        title,
        description,
        type,
        setOpen,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
