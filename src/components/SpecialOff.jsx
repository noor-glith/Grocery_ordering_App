import React from "react";
import { trendingProduct } from "../utils/data";


function Specialoff() {
  return (
    <div>

      <h1 className="text-4xl font-bold mb-4 mt-12 px-2 text-start">Trending Products</h1>
      <div className="flex justify-start items-start flex-wrap gap-5 px-4">
        {trendingProduct.map((item, index) => (
          <div
            className="group my-4 border border-slate-200 p-2 mt-2 rounded-lg bg-white flex-1 min-w-[200px] max-w-[240px] hover:shadow-xl transition-shadow duration-300 ease-in-out"
            key={index}
          >
            {/* Image with Flash Button, Heart Icon, and Add to Cart Button */}
            <div className="relative mb-3 h-56 overflow-hidden rounded-xl w-full">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-3"
              />

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
              <span className="text-green-600 font-semibold">{item.price}</span>
              <span className="ml-2 line-through text-gray-400">{item.total}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <section className="border-t pt-24 pb-24 px-6 sm:py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="w-full max-w-[236px] relative">
          <h4 className="text-base text-green-500 font-semibold capitalize mb-2">Quality & Saving</h4>
          <p className="text-sm text-gray-700">Comprehensive quality control and affordable prices</p>
        </div>
        <div className="w-full max-w-[236px] relative">
          <h4 className="text-base text-green-500 font-semibold capitalize mb-2">Fast Delivery</h4>
          <p className="text-sm text-gray-700">Fast and convenient door-to-door delivery</p>
        </div>
        <div className="w-full max-w-[236px] relative">
          <h4 className="text-base text-green-500 font-semibold capitalize mb-2">Secure Payment</h4>
          <p className="text-sm text-gray-700">Different secure payment methods</p>
        </div>
        <div className="w-full max-w-[236px] relative">
          <h4 className="text-base text-green-500 font-semibold capitalize mb-2">Professional Service</h4>
          <p className="text-sm text-gray-700">Efficient customer support from a passionate team</p>
        </div>
      </section>
    </div>
  );
}

export default Specialoff;
