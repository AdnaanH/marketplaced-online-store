"use client";
import { useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import image1 from "@/public/slider-1.png";
import image2 from "@/public/slider-2.png";
import image3 from "@/public/slider-3.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { nunito, zillaSlab } from "../fonts";
import Button from "../ui/Button";

type ImageData = {
  src: StaticImageData;
  title: string;
  buttonText: string;
};

const images: ImageData[] = [
  {
    src: image1,
    title: "Smartphones",
    buttonText: "Learn More",
  },
  {
    src: image2,
    title: "Gaming",
    buttonText: "Learn More",
  },
  {
    src: image3,
    title: "Laptops",
    buttonText: "Learn More",
  },
];

export default function ImageSlider(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full rounded-md bg-neutral py-6 row-span-2">
      <div
        className={`relative h-[460px] lg:mx-12 mx-4 group transition-all  duration-500 ease-in-out  rounded-md ${isHovered ? 'bg-opacity-50' : ''}`}
        style={{
          backgroundImage: `url(${images[currentIndex].src.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && (
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 rounded-md bg-transparent uppercase">
            <div className="flex flex-col justify-center items-center">
              <h1
                className={`${zillaSlab.className} lg:text-7xl md:text-5xl text-3xl text-center font-bold mb-2 text-primary drop-shadow-xl`}
              >
                {images[currentIndex].title}
              </h1>
              <Button>
                {images[currentIndex].buttonText}
              </Button>
            </div>
          </div>
        )}
      </div>

      <button
        className="absolute left-0 top-1/2 transform rounded-full hover:bg-secondary mx-1 -mt-[10px] -translate-y-1/2 bg-secondary text-neutral p-2 group"
        onClick={prevSlide}
      >
        <FaChevronLeft className="text-neutral group-hover:text-white" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform rounded-full hover:bg-secondary mx-1 -mt-[10px] -translate-y-1/2 bg-secondary text-neutral p-2 group"
        onClick={nextSlide}
      >
        <FaChevronRight className="text-neutral group-hover:text-white" />
      </button>
      <div className="flex justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-8 mx-1 ${index === currentIndex ? "bg-cta rounded-xl" : "bg-primary rounded-xl"} transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}
