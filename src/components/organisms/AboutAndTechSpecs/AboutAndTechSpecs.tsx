import type { ProductDetails } from '../../../types';

interface AboutAndTechSpecsProps {
  product: ProductDetails;
}

export const AboutAndTechSpecs: React.FC<AboutAndTechSpecsProps> = ({
  product,
}) => {
  switch (product.category) {
    case 'phones':
      // TypeScript knows 'product' is of type 'Phone' here
      return (
        <div>
          <p>Camera: {product.camera}</p>
          <p>Zoom: {product.zoom}</p>
        </div>
      );

    case 'tablets':
      // TypeScript knows 'product' is of type 'Tablet' here
      return (
        <div>
          <p>Camera: {product.camera}</p>
          <p>Zoom: {product.zoom}</p>
        </div>
      );

    case 'accessories':
      // No specific properties to render for Accessory
      return null;
  }
};
