import { BackButton } from '../../atoms';
import { ImageGallerySkeleton } from '../../organisms/ImageGallery/ImageGallerySkeleton';
import styles from './ItemCardLayout.module.scss';
import skeletonStyles from './ItemCardLayoutSkeleton.module.scss';

const BreadcrumbsSkeleton = () => (
  <nav className={skeletonStyles.breadcrumbsSkeleton}>
    <ul>
      <li>
        <div className={skeletonStyles.homeIconSkeleton}></div>
        <div className={skeletonStyles.separatorSkeleton}></div>
      </li>
      <li>
        <div className={skeletonStyles.breadcrumbTextSkeleton}></div>
        <div className={skeletonStyles.separatorSkeleton}></div>
      </li>
      <li>
        <div className={skeletonStyles.breadcrumbTextSkeleton}></div>
      </li>
    </ul>
  </nav>
);

const SelectorsSectionSkeleton = () => (
  <section className={styles.selectorSection}>
    <div className={skeletonStyles.skeletonSection}>
      <div className={skeletonStyles.selectorGroup}>
        <div className={skeletonStyles.labelSkeleton}></div>
        <div className={skeletonStyles.colorOptions}>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={skeletonStyles.colorButtonSkeleton}
            ></div>
          ))}
        </div>
      </div>

      <div className={skeletonStyles.selectorGroup}>
        <div className={skeletonStyles.labelSkeleton}></div>
        <div className={skeletonStyles.capacityOptions}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={skeletonStyles.capacityBtnSkeleton}
            ></div>
          ))}
        </div>
      </div>

      <div className={skeletonStyles.priceBlock}>
        <div className={skeletonStyles.newPriceSkeleton}></div>
        <div className={skeletonStyles.oldPriceSkeleton}></div>
      </div>

      <div className={skeletonStyles.buttonGroup}>
        <div className={skeletonStyles.primaryButtonSkeleton}></div>
        <div className={skeletonStyles.actionButtonSkeleton}></div>
      </div>

      <div className={skeletonStyles.specs}>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={skeletonStyles.specRow}
          >
            <div className={skeletonStyles.specNameSkeleton}></div>
            <div className={skeletonStyles.specValueSkeleton}></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutAndTechSpecsSkeleton = () => (
  <section className={skeletonStyles.aboutTechWrapper}>
    <div className={skeletonStyles.aboutSection}>
      <div className={skeletonStyles.headingSkeleton}></div>

      {[1, 2].map((blockIndex) => (
        <div
          key={blockIndex}
          className={skeletonStyles.aboutBlock}
        >
          <div className={skeletonStyles.blockTitleSkeleton}></div>
          {[1, 2, 3].map((pIndex) => (
            <div
              key={pIndex}
              className={skeletonStyles.paragraphSkeleton}
            ></div>
          ))}
        </div>
      ))}
    </div>

    <div className={skeletonStyles.techSpecsSection}>
      <div className={skeletonStyles.headingSkeleton}></div>
      <div className={skeletonStyles.techSpecsList}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className={skeletonStyles.techSpecRow}
          >
            <div className={skeletonStyles.techSpecNameSkeleton}></div>
            <div className={skeletonStyles.techSpecValueSkeleton}></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ItemCardLayoutSkeleton = () => (
  <div className={styles.itemCard}>
    <BreadcrumbsSkeleton />

    <BackButton fallbackPath="/">Back</BackButton>

    <div className={skeletonStyles.productNameSkeleton}></div>

    <div className={styles.info}>
      <ImageGallerySkeleton />
      <SelectorsSectionSkeleton />
    </div>

    <AboutAndTechSpecsSkeleton />
  </div>
);

export { AboutAndTechSpecsSkeleton, ItemCardLayoutSkeleton };
