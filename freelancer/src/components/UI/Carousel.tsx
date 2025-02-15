"use client";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Carousel() {
  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0); // Array of images and text

  const carouselItems = [
    {
      src: "/img/demo-corporate.png",
      alt: "Demo Corporate",
      text: "Empresa",
    },
    {
      src: "/img/demo-dentista.png",
      alt: "Demo Dentista",
      text: "Consultório",
    },
    {
      src: "/img/demo-paisagismo.png",
      alt: "Demo Paisagismo",
      text: "Paisagismo",
    },
    {
      src: "/img/demo-restaurante.png",
      alt: "Demo Restaurante",
      text: "Restauração",
    },
  ]; // Move to the previous image

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  }; // Move to the next image

  const nextSlide = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex === carouselItems.length - 1 ? 0 : nextIndex + 1
    );
  };

  return (
    <section className="relative w-full max-w-4xl mx-auto overflow-hidden pt-10 pb-20 pl-10 pr-10">
      {/* Carousel Image */}
      <div className="relative w-full h-96">
        <Image
          src={carouselItems[currentIndex].src}
          alt={carouselItems[currentIndex].alt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          onClick={nextSlide}
        />
        {/* Text Overlay */}
        <div className="absolute bottom-8 left-10 text-white text-2xl font-semibold bg-black bg-opacity-50 p-4 rounded-md">
          {carouselItems[currentIndex].text}
        </div>{" "}
      </div>
      {/* Left and Right Arrows */}
      <div className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white cursor-pointer">
        <ChevronLeftIcon
          className="h-8 w-8 bg-black bg-opacity-50 p-2 rounded-full"
          onClick={prevSlide}
        />
      </div>
      <div className="absolute top-1/2 right-1 transform -translate-y-1/2 text-white cursor-pointer">
        <ChevronRightIcon
          className="h-8 w-8 bg-black bg-opacity-50 p-2 rounded-full"
          onClick={nextSlide}
        />
      </div>
      {/* Indicator (optional) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
