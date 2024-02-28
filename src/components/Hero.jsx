"use client";
import React, { useState } from "react";
import imageData from "../data/images.json";

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative overflow-x-scroll flex items-center justify-center mt-4 px-4">
      <button
        onClick={goToPrevImage}
        className="absolute left-0 bg-[#33333380] text-white px-4 py-2 rounded-full"
        style={{
          left: "5rem", // Adjust as needed
          zIndex: "1",
        }}
      >
        &lt;
      </button>
      <div
        className="flex transition-transform ease-in-out duration-300 gap-4"
        style={{
          transform: `translateX(-${currentImageIndex * 650}px)`,
        }}
      >
        {imageData.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Image ${index}`}
            className=" h-full px-4 w-4/6"
          />
        ))}
      </div>
      <button
        onClick={goToNextImage}
        className="absolute bg-[#33333380] text-white px-4 py-2 rounded-full"
        style={{
          right: "5rem", // Adjust as needed
          zIndex: "1",
        }}
      >
        &gt;
      </button>
    </div>
  );
}

export default HeroSection;
