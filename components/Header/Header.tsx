"use client"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <nav className="w-full flex justify-between bg-primary items-center 2xl:px-16 px-2 py-3 h-18">
            <div className="flex justify-betweeen items-center p-2 bg-neutral rounded-">
                <div
                    className="flex flex-col justify-center items-center bg-secondary rounded-full p-3 gap-[4.5px] cursor-pointer"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <div
                    className={`w-6 h-1 bg-primary rounded-sm ${
                        isOpen ? "rotate-45" : ""
                    } origin-left ease-in-out duration-500`}
                    />
                    <div
                    className={`w-6 h-1 bg-primary rounded-sm ${
                        isOpen ? "opacity-0" : ""
                    } ease-in-out duration-500`}
                    />
                    <div
                    className={`w-6 h-1 bg-primary rounded-sm ${
                        isOpen ? "-rotate-45" : ""
                    } origin-left ease-in-out duration-500`}
                    />
                </div>
            </div>            
        </nav>
     );
}
 
export default Header;
