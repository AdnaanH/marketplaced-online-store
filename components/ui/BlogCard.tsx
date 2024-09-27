"use client"
import Image from "next/image";
import { useState } from "react";
import { nunito } from "../fonts";

const BlogCard = () => {
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
                <div className="relative w-full h-56 p-3 rounded-md">
                    <Image
                        src="/iphone-2.png"
                        alt="iPhone"
                        fill
                    />
                </div>
            </div>
            <div className={`${nunito.className} flex flex-col bg-neutral px-2 py-2 pb-2 z-50`}>
                <h2 className="flex gap-2 items-center font-bold text-primary text-xl">Why Apple is the future?</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quia quae omnis quasi ab magnam fugiat incidunt...</p>
                <button className="flex-1 py-2 bg-secondary text-base text-neutral rounded-md">VIEW FULL</button>                 
            </div>
        </div>
     );
}
 
export default BlogCard;