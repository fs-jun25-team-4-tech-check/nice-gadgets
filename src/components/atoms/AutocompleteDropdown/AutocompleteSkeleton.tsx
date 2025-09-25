import styles from './AutocompleteSkeleton.module.scss';

const AutocompleteSkeleton = () => (
  <div className={styles.skeletonItem}>
    <div className={styles.skeletonImage} />
    <div className={styles.skeletonText} />
  </div>
);

export default AutocompleteSkeleton;
