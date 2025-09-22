import React from 'react';
import styles from './AboutAndTechSpecs.module.scss';
import type { ProductDetails } from '../../../types';

interface AboutAndTechSpecsProps {
  product: ProductDetails;
}

export const AboutAndTechSpecs: React.FC<AboutAndTechSpecsProps> = ({
  product,
}) => {
  if (!product) return null;

  return (
    <section className={styles.wrapper}>
      <div className={styles.about}>
        <h3 className={styles.heading}>About</h3>

        {product.description.map((block, i) => (
          <div
            key={i}
            className={styles.block}
          >
            <h4>{block.title}</h4>
            {block.text.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.specs}>
        <h3 className={styles.headingSpecs}>Tech specs</h3>
        <ul>
          <li>
            <span>Screen</span>
            <span>{product.screen}</span>
          </li>
          <li>
            <span>Resolution</span>
            <span>{product.resolution}</span>
          </li>
          <li>
            <span>Processor</span>
            <span>{product.processor}</span>
          </li>
          <li>
            <span>RAM</span>
            <span>{product.ram}</span>
          </li>

          {'camera' in product && product.camera && (
            <li>
              <span>Camera</span>
              <span>{product.camera}</span>
            </li>
          )}
          {'zoom' in product && product.zoom && (
            <li>
              <span>Zoom</span>
              <span>{product.zoom}</span>
            </li>
          )}
          {'cell' in product && product.cell?.length > 0 && (
            <li>
              <span>Cell</span>
              <span>{product.cell.join(', ')}</span>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};
