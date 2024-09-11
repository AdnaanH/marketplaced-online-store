"use client"
import Image from "next/image";
import { useState } from "react";
import { nunito } from "../fonts";
import { FaHeart } from "react-icons/fa"

const ProductCard = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseOver = (): void => {
    setIsHovered(true);
    console.log("Hovered over")
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
    console.log("Hovered out")
  };

    return ( 
        <div className={`relative h-56 ${isHovered ? 'overflow-visible rounded-none' : 'lg:overflow-hidden overflow-visible'} bg-neutral rounded-md shadow-md transition-all duration-300 ease-in-out`}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative h-56 grid gap-2 rounded-md">
                <div className="relative w-full h-48 p-3 rounded-md">
                    <Image
                        src="/iphone-2.png"
                        alt="iPhone"
                        fill
                    />
                </div>
                <h3 className={`${nunito.className} text-secondary font-bold text-base px-2 lg:text-start text-center`}>Apple iPhone 16 Pro Max</h3>
            </div>
            <div className={`${nunito.className} flex flex-col bg-neutral px-2 pb-2 z-50`}>
                <h4 className="flex gap-2 items-center font-bold text-primary text-base">Brand: <span className="font-normal text-secondary">Apple</span></h4>
                <h4 className="flex gap-2 items-center font-bold text-primary text-base">Category: <span className="font-normal text-secondary">Smartphones</span></h4>
                <h4 className="flex gap-2 items-center font-bold text-primary text-base">Price: <span className="line-through font-normal text-secondary">250,000</span></h4>
                <h4 className="flex gap-2 items-center font-bold text-primary text-base">Discount: <span className="font-normal text-secondary">234,999</span></h4>
                <div className="flex gap-2 items-center">
                    <button className="flex-1 py-2 bg-secondary text-base text-neutral rounded-md">ADD TO CART</button>
                    <FaHeart className="text-3xl text-cta cursor-pointer" />
                </div>
            </div>
        </div>
     );
}
 
export default ProductCard;