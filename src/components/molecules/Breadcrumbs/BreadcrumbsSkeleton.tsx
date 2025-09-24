import styles from './BreadcrumbsSkeleton.module.scss';

const BreadcrumbsSkeleton = () => (
  <nav className={styles.breadcrumbsSkeleton}>
    <ul>
      <li>
        <div className={styles.homeIconSkeleton}></div>
        <div className={styles.separatorSkeleton}></div>
      </li>
      <li>
        <div className={styles.breadcrumbTextSkeleton}></div>
        <div className={styles.separatorSkeleton}></div>
      </li>
      <li>
        <div className={styles.breadcrumbTextSkeleton}></div>
      </li>
    </ul>
  </nav>
);

export default BreadcrumbsSkeleton;
