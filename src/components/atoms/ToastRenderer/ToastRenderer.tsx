import * as Toast from '@radix-ui/react-toast';
import {
  PiCheckCircleBold,
  PiWarningCircleBold,
  PiXBold,
} from 'react-icons/pi';
import styles from './ToastRenderer.module.scss';
import { useToastContext } from '../../../contexts/ToastContext';

const ToastRenderer = () => {
  const { toasts, removeToast } = useToastContext();

  return (
    <Toast.Provider swipeDirection="right">
      {toasts.map((toast) => {
        const toastClass = `${styles.ToastRoot} ${toast.type === 'error' ? styles.error : styles.info}`;

        const Icon =
          toast.type === 'error' ? PiWarningCircleBold : PiCheckCircleBold;
        return (
          <Toast.Root
            key={toast.id}
            open={toast.open}
            onOpenChange={(open) => {
              if (!open) {
                removeToast(toast.id);
              }
            }}
            className={toastClass}
          >
            <div className={styles.ToastHeader}>
              <div className={styles.ToastInfo}>
                <Icon
                  size={20}
                  className={styles.Icon}
                />
                <Toast.Title className={styles.ToastTitle}>
                  {toast.title}
                </Toast.Title>
              </div>

              <Toast.Close asChild>
                <button
                  className={styles.CloseButton}
                  aria-label="Close"
                >
                  <PiXBold size={20} />
                </button>
              </Toast.Close>
            </div>

            <Toast.Description className={styles.ToastDescription}>
              {toast.description}
            </Toast.Description>
          </Toast.Root>
        );
      })}

      <Toast.Viewport className={styles.ToastViewport} />
    </Toast.Provider>
  );
};

export default ToastRenderer;
