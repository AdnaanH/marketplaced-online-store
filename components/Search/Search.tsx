'use client';
import { FaSearch } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { ChangeEvent, FC } from 'react';
import { nunito } from "../fonts";
import Selector from "../SelectComponents/Selectors";

type Props = {
  priceRangeFilter: string;
  categoryFilter: string;
  searchQuery: string;
  setPriceRangeFilter: (value: string) => void;
  setCategoryFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
  categories: any[];
};

const Search: FC<Props> = ({
  priceRangeFilter,
  categoryFilter,
  searchQuery,
  setPriceRangeFilter,
  setCategoryFilter,
  setSearchQuery,
  categories
}) => {
  const router = useRouter();

  const handlePriceRangeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPriceRangeFilter(event.target.value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(event.target.value);
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    router.push(`/products?priceRange=${priceRangeFilter}&category=${categoryFilter}&searchQuery=${searchQuery}`);
  };

  return (
      <div className={`${nunito.className} xl:w-[600px] w-[500px] bg-neutral rounded-tl-3xl rounded-bl-3xl mx-auto flex gap-6 justify-between items-center`}>
        {/* Categories and Price Range Filters*/}
        <Selector  />

        {/* Search Query */}
        <div className='w-full md:w-2/6 lg:w-auto mb-4 md:mb-0'>
          <input
            type='search'
            id='search'
            placeholder='Search...'
            className={`${nunito.className} w-full font-bold px-4 py-3 rounded-tl-2xl rounded-bl-2xl leading-tight bg-neutral focus:outline-none placeholder:text-black`}
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>

        {/* Filter Button */}
        <button
          className='px-4'
          type='button'
          onClick={handleFilterClick}
        >
          <FaSearch />
        </button>
      </div>
  );
};

export default Search;
