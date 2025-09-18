import { useToastContext } from '../contexts/ToastContext';

export const useToast = () => {
  const { showToast } = useToastContext();
  return showToast;
};
