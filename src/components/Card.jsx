import React from "react";
import { popularProduct } from "../utils/data";

function Card() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4 mt-12 px-2 text-start">Most Popular</h1>
      <div className="flex justify-start items-start flex-wrap gap-6 px-4">
        {popularProduct.map((item, index) => (
          <div
            className="group my-4 border border-slate-200 p-2 mt-2 rounded-lg bg-white flex-1 min-w-[200px] max-w-[240px] hover:shadow-xl transition-shadow duration-300 ease-in-out"
            key={index}
          >
            {/* Image with Flash Button, Heart Icon, and Add to Cart Button */}
            <div className="relative mb-3 h-56 overflow-hidden rounded-xl w-full">
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-3"
              />
              {/* Flash Button */}
              <button className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-2xl">
                Flash
              </button>
              {/* Heart Icon with background and rounded corners */}
              <i className="fa-regular fa-heart absolute top-2 right-2 bg-white border-2 text-black text-md p-1 rounded-full cursor-pointer hover:bg-green-400 transition-all duration-300"></i>
              {/* Add to Cart Button with shopping bag icon */}
              <button className="absolute bottom-2 right-2 bg-green-500 text-white text-xs px-3 py-2 rounded-full flex items-center space-x-1 hover:bg-green-600 transition-all duration-300">
                <i className="fa-solid fa-shopping-bag text-md"></i>
                <span>Add</span>
              </button>
            </div>

            <p className="text-sm pt-2 font-medium text-gray-700">{item.title}</p>
            <p className="text-sm font-medium text-gray-500 mb-2">{item.text}</p>

            <div>
              <span className="text-green-600 font-semibold mt-6">{item.price}</span>
              <span className="ml-2 line-through text-gray-400">{item.total}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
