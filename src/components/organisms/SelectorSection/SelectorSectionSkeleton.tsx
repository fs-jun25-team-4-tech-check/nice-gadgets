import styles from './SelectorsSectionSkeleton.module.scss';

const SelectorsSectionSkeleton = () => (
  <section className={styles.skeletonSection}>
    <div className={styles.selectorGroup}>
      <div className={styles.labelSkeleton}></div>
      <div className={styles.colorOptions}>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={styles.colorButtonSkeleton}
          ></div>
        ))}
      </div>
    </div>

    <div className={styles.selectorGroup}>
      <div className={styles.labelSkeleton}></div>
      <div className={styles.capacityOptions}>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={styles.capacityBtnSkeleton}
          ></div>
        ))}
      </div>
    </div>

    <div className={styles.priceBlock}>
      <div className={styles.newPriceSkeleton}></div>
      <div className={styles.oldPriceSkeleton}></div>
    </div>

    <div className={styles.buttonGroup}>
      <div className={styles.primaryButtonSkeleton}></div>
      <div className={styles.actionButtonSkeleton}></div>
    </div>

    <div className={styles.specs}>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={styles.specRow}
        >
          <div className={styles.specNameSkeleton}></div>
          <div className={styles.specValueSkeleton}></div>
        </div>
      ))}
    </div>
  </section>
);

export default SelectorsSectionSkeleton;
