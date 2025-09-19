import * as Toast from '@radix-ui/react-toast';
import {
  PiCheckCircleBold,
  PiWarningCircleBold,
  PiXBold,
} from 'react-icons/pi';
import styles from './ToastRenderer.module.scss';
import { useToastContext } from '../../../contexts/ToastContext';

const ToastRenderer = () => {
  const { open, title, description, type, setOpen } = useToastContext();

  const toastClass = `${styles.ToastRoot} ${type === 'error' ? styles.error : styles.info}`;

  const Icon = type === 'error' ? PiWarningCircleBold : PiCheckCircleBold;

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        className={toastClass}
      >
        <div className={styles.ToastHeader}>
          <div className={styles.ToastInfo}>
            <Icon
              size={20}
              className={styles.Icon}
            />
            <Toast.Title className={styles.ToastTitle}>{title}</Toast.Title>
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
          {description}
        </Toast.Description>
      </Toast.Root>

      <Toast.Viewport className={styles.ToastViewport} />
    </Toast.Provider>
  );
};

export default ToastRenderer;
