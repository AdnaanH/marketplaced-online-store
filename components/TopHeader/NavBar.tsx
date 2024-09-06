"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdShoppingBag } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { GrDeliver } from "react-icons/gr";
import Search from "../Search/Search";
import { bitter, nunito } from "../fonts";
import { getCategory } from "@/lib/apis";

const NavBar = () => {
  const [priceRangeFilter, setPriceRangeFilter] = useState<string>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const result = await getCategory();
      setCategories(result);
    }
    fetchCategories();
  }, []);

  return (
    <nav className="top-0 w-full lg:flex hidden justify-between bg-primary items-center 2xl:px-16 px-2 h-16">
      <Link href="/">
        <h1 className={`${bitter.className} text-2xl text-cta uppercase font-extrabold flex items-center space-x-2`}>
          <MdShoppingBag className="text-neutral xl:text-3xl text-xl" />
          Marketplaced
        </h1>
      </Link>

      <Search
        priceRangeFilter={priceRangeFilter}
        categoryFilter={categoryFilter}
        searchQuery={searchQuery}
        setPriceRangeFilter={setPriceRangeFilter}
        setCategoryFilter={setCategoryFilter}
        setSearchQuery={setSearchQuery}
        categories={categories}
      />

      <div className="flex space-x-4 items-center">
            <div className="flex space-x-2 items-center">
                <BiSupport className="text-secondary text-4xl" />
                <div className={`${nunito.className} flex flex-col justify-center text-center items-center text-sm font-extrabold text-neutral`}>
                    <span className="text-cta">24/7 Support</span>
                    <span>+254 711 887 763</span>
                </div>
            </div>
            <div className="flex space-x-2 items-center">
                <GrDeliver className="text-secondary text-4xl" />
                <div className={`${nunito.className} flex flex-col justify-center text-center items-center text-sm font-extrabold text-neutral`}>
                    <span className="text-cta">Free Same Day Delivery</span>
                    <span>within Nairobi</span>
                </div>
            </div>
      </div>
    </nav>
  );
};

export default NavBar;
