import type React from 'react';

type Props = {
  shopByCategorySection: React.ReactNode;
};

const HomeLayout: React.FC<Props> = ({ shopByCategorySection }) => {
  return (
    <>
      <h1>Home Page</h1>

      <h2>Shop by category</h2>
      {shopByCategorySection}
    </>
  );
};

export default HomeLayout;
