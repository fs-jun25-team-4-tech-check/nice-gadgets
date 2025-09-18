import * as Toast from '@radix-ui/react-toast';
import { PiXBold } from 'react-icons/pi';
import styles from './ToastRenderer.module.scss';
import { useToastContext } from '../../../contexts/ToastContext';

export const ToastRenderer = () => {
  const { open, message, type, setOpen } = useToastContext();

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        className={styles.ToastRoot}
      >
        <Toast.Close asChild>
          <button
            className={styles.CloseButton}
            aria-label="Close"
          >
            <PiXBold size={20} />
          </button>
        </Toast.Close>

        <Toast.Title className={styles.ToastTitle}>
          {type === 'cart' ? 'Added to cart' : 'Added to favorites'}
        </Toast.Title>

        <Toast.Description className={styles.ToastDescription}>
          {message}
        </Toast.Description>
      </Toast.Root>

      <Toast.Viewport className={styles.ToastViewport} />
    </Toast.Provider>
  );
};
