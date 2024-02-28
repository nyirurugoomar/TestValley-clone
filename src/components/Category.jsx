"use client";
import React from "react";
import Image from "next/image";
import categories from "../data/Categories.json";

function Category() {
  return (
    <div>
      <div className="flex justify-around mt-10 px-40">
        {categories.map((category) => (
          <div key={category.id}>
            <Image
              src={category.url} // Assuming the URL is for the image
              alt={category.name}
              width={62}
              height={62}
            />
            <h1 className="text-[13px] text-center mt-2 font-thin">
              {category.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
