"use client";
import HamMenu from './HamMenu';
import { nunito } from "../fonts";
import { useState } from 'react';
import SideBar from '../SideBar/SideBar';

const CatMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex w-fit items-center p-1 bg-neutral rounded-3xl">
        <HamMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}  />
      <h6 className={`${nunito.className} text-primary font-bold mx-2 text- lg:block hidden`}>All Categories</h6>
      {isMenuOpen && <SideBar setIsMenuOpen={setIsMenuOpen} />}
    </div>
  );
};

export default CatMenu;