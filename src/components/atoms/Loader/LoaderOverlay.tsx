import classNames from 'classnames';
import Loader from './Loader';
import styles from './LoaderOverlay.module.scss';

type Props = {
  loaderSize?: number;
  className?: string;
};

const LoaderOverlay: React.FC<Props> = ({ loaderSize, className }) => {
  const overlayClasses = classNames(styles.overlay, className);

  return (
    <div className={overlayClasses}>
      <Loader size={loaderSize} />
    </div>
  );
};

export default LoaderOverlay;
