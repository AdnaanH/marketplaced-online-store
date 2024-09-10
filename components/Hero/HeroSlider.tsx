"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Slide {
  id: number;
  imageUrl: string;
  heading: string;
  description: string;
  buttonText: string;
}

const slides: Slide[] = [
  {
    id: 1,
    imageUrl: "/slider-1.png",
    heading: "Slide 1",
    description: "This is the description for slide 1",
    buttonText: "Learn More",
  },
  {
    id: 2,
    imageUrl: "/slider-2.png",
    heading: "Slide 2",
    description: "This is the description for slide 2",
    buttonText: "Discover",
  },
  {
    id: 3,
    imageUrl: "/slider-3.png",
    heading: "Slide 3",
    description: "This is the description for slide 3",
    buttonText: "Get Started",
  },
];

const HeroSlider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (!isPaused) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }
      }, 3000);
  
      return () => clearInterval(interval);
    }, [isPaused]);
  
    const handleMouseEnter = () => {
      setIsPaused(true);
    };
  
    const handleMouseLeave = () => {
      setIsPaused(false);
    };
  
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };
  
    return (
      <div className="relative overflow-hidden w-full h-500px">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full relative h-[500px]">
              {/* Ensure proper image loading with objectFit and layout */}
              <Image
                src={slide.imageUrl}
                alt={`Slide ${slide.id}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority={true} // Preload images to avoid blank moments
              />
              {/* Content on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                <h2 className="text-2xl text-primary font-bold">{slide.heading}</h2>
                <p className="mt-2 text-primary">{slide.description}</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
  
        {/* Next and Previous buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={handlePrev}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={handleNext}
        >
          &#10095;
        </button>
  
        {/* Dots for slides */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-blue-500" : "bg-gray-300"
              } cursor-pointer`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    );
  };
  