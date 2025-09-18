import classNames from 'classnames';
import styles from './Loader.module.scss';

type Props = {
  size?: number;
  className?: string;
};

const Loader: React.FC<Props> = ({ size = 50, className }) => {
  const loaderClasses = classNames(styles.loader, className);

  return (
    <div
      style={{ width: `${size}px`, padding: `${size / 7}px` }}
      className={loaderClasses}
    ></div>
  );
};

export default Loader;
