"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

type HamMenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const HamMenu: React.FC<HamMenuProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className="grid bg-secondary rounded-full p-1 gap-[4.5px] text-neutral text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FaTimes className="cursor-pointer" />
        ) : (
          <GiHamburgerMenu className="cursor-pointer" />
        )}
      </div>
    </>
  );
};

export default HamMenu;
