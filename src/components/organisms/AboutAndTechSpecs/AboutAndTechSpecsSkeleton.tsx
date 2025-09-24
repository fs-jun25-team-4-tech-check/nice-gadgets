import styles from './AboutAndTechSpecsSkeleton.module.scss';

const AboutAndTechSpecsSkeleton = () => (
  <section className={styles.aboutTechWrapper}>
    <div className={styles.aboutSection}>
      <div className={styles.headingSkeleton}></div>

      {[1, 2].map((blockIndex) => (
        <div
          key={blockIndex}
          className={styles.aboutBlock}
        >
          <div className={styles.blockTitleSkeleton}></div>
          {[1, 2, 3].map((pIndex) => (
            <div
              key={pIndex}
              className={styles.paragraphSkeleton}
            ></div>
          ))}
        </div>
      ))}
    </div>

    <div className={styles.techSpecsSection}>
      <div className={styles.headingSkeleton}></div>
      <div className={styles.techSpecsList}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className={styles.techSpecRow}
          >
            <div className={styles.techSpecNameSkeleton}></div>
            <div className={styles.techSpecValueSkeleton}></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutAndTechSpecsSkeleton;
