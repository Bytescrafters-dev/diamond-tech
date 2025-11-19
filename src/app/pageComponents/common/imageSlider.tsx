"use client";

import { useState, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import ServiceImage1 from "@/app/assets/slider/service1.jpg";
import ServiceImage2 from "@/app/assets/slider/service2.jpg";
import ServiceImage3 from "@/app/assets/slider/service3.jpg";
import ServiceImage4 from "@/app/assets/slider/service4.jpg";

const images = [ServiceImage1, ServiceImage2, ServiceImage3, ServiceImage4];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-64 md:h-96 rounded overflow-hidden shadow-lg">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`Team member ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            className="rounded"
          />
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 px-2 py-2 rounded-full z-10 transform -translate-y-1/2 bg-black/20 text-white hover:bg-black/50"
      >
        <FiChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 px-2 py-2 rounded-full z-10 transform -translate-y-1/2 bg-black/20 text-white hover:bg-black/50"
      >
        <FiChevronRight />
      </button>
    </div>
  );
}
