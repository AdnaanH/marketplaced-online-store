import React, { useEffect, useState } from 'react';
import { getCategoriesGroupedByParent } from '@/lib/apis';
import CategorySelector from './CategorySelector';
import PriceSelector from './PriceSelector';

type Item = {
  value: string;
  label: string;
};

type Category = {
  value: string; 
  label: string;
  items: Item[];
};

const Selector: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const groupedCategories: Category[] = await getCategoriesGroupedByParent();
        setCategories(groupedCategories);
      } catch (error) {
        console.error('Failed to fetch categories', error);
      }
    }

    fetchCategories();
  }, []);

  const prices = [
    { value: '0-2499', label: 'KES 0 - KES 2,499' },
    { value: '2500-4999', label: 'KES 2,500 - KES 4,999' },
    { value: '5000-9999', label: 'KES 5,000 - KES 9,999' },
    { value: '10000-24999', label: 'KES 10,000 - KES 24,999' },
    { value: '25,000-49999', label: 'KES 25,000 - KES 49,999' },
    { value: '50,000+', label: '50,000+' },
  ];

  return (
    <div className='flex'>
      <CategorySelector categories={categories} />
      <PriceSelector prices={prices} />
    </div>
  );
};

export default Selector;
