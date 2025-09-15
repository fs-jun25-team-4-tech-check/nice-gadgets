// import styles from './HomeLayout.module.scss';

import { useState } from 'react';
import { DropdownAtom } from '../../atoms/DropdownAtom/DropdownAtom';

const HomeLayout = () => {
  const [selectedSort, setSelectedSort] = useState('Newest');
  const [selectedPageSize, setSelectedPageSize] = useState('16');
  return (
    <div>
      <DropdownAtom
        label="Sort by"
        placeholder={selectedSort}
        items={['Newest', 'Oldest', 'Popular']}
        onSelect={(item) => setSelectedSort(item)}
        variant="sort"
      />

      <DropdownAtom
        label="Items on page"
        placeholder={selectedPageSize}
        items={['8', '16', '32']}
        onSelect={(item) => setSelectedPageSize(item)}
        variant="pagination"
      />
    </div>
  );
};

export default HomeLayout;
