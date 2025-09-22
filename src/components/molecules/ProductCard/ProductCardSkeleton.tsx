import cardStyles from '../ProductCard/ProductCard.module.scss';
import skeletonStyles from './ProductCardSkeleton.module.scss';

interface ProductCardSkeletonProps {
  className?: string;
}

const ProductCardSkeleton: React.FC<ProductCardSkeletonProps> = ({
  className = '',
}) => {
  return (
    <div className={`${cardStyles.card} ${className}`}>
      <div className={cardStyles.imageWrapper}>
        <div className={skeletonStyles.image} />
      </div>

      <div className={skeletonStyles.title} />

      <div className={cardStyles.priceBlock}>
        <div className={skeletonStyles.price} />
      </div>

      <ul className={cardStyles.specs}>
        <li>
          <div className={skeletonStyles.spec} />
        </li>
        <li>
          <div className={skeletonStyles.spec} />
        </li>
        <li>
          <div className={skeletonStyles.spec} />
        </li>
      </ul>

      <div className={cardStyles.buttonGroup}>
        <div className={skeletonStyles.button} />
        <div className={skeletonStyles.actionButton} />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
