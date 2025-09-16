import classNames from 'classnames';
import styles from './Loader.module.scss';
import { type LoaderSize } from './Loader.types';

type Props = {
  size?: LoaderSize;
  className?: string;
};

const Loader: React.FC<Props> = ({ size = 'md', className }) => {
  const loaderClasses = classNames(
    styles.loader,
    styles[`loader--${size}`],
    className,
  );

  return <div className={loaderClasses}></div>;
};

export default Loader;
