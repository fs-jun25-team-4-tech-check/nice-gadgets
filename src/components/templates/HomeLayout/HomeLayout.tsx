import type React from 'react';

type Props = {
  bannerSliderSection: React.ReactNode;
  shopByCategorySection: React.ReactNode;
  brandNewModelsSection: React.ReactNode;
  hotPricesSection: React.ReactNode;
};

const HomeLayout: React.FC<Props> = ({
  bannerSliderSection,
  shopByCategorySection,
  brandNewModelsSection,
  hotPricesSection,
}) => {
  return (
    <>
      <h1>Home Page</h1>

      {bannerSliderSection}

      {brandNewModelsSection}

      <h2>Shop by category</h2>
      {shopByCategorySection}

      {hotPricesSection}
    </>
  );
};

export default HomeLayout;
