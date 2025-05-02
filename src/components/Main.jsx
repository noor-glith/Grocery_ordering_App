import React from "react";

import Image from "../assets/collected_from_garden-cover.jpg";

import Image1 from "../assets/seasonal_fruits-cover.jpg";
import Image2 from "../assets/special_offer_on_seafood-cover.jpg";
import Image3 from "../assets/buy_fresh_&_organic_sea_food-preview.jpg";
import { randomProduct } from "../utils/data";
const Main = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      
      {/* Hero Section */}
      <section className="text-center bg-gray-100 py-12 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to StoreKing</h1>
        <p className="text-lg text-gray-600 mt-2">
          Your one-stop shop for all your shopping needs.
        </p>
        <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
          Shop Now
        </button>
      </section>

      {/* Featured Products Section */}
      <section className="mt-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* Product Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={Image} alt="Product" className="w-full rounded-lg" />
            <h3 className="text-lg font-medium mt-2">Product 1</h3>
            <p className="text-gray-600 text-sm">High-quality product description.</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 transition">
              Buy Now
            </button>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={Image1} alt="Product" className="w-full rounded-lg" />
            <h3 className="text-lg font-medium mt-2">Product 2</h3>
            <p className="text-gray-600 text-sm">Another amazing product for you.</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 transition">
              Buy Now
            </button>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={Image2} alt="Product" className="w-full rounded-lg" />
            <h3 className="text-lg font-medium mt-2">Product 3</h3>
            <p className="text-gray-600 text-sm">Get the best deals today!</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 transition">
              Buy Now
            </button>
          </div>

        </div>
      </section>
      <div className="rounded-md py-12  ">
              <h1 className="text-4xl font-bold mb-4 mt-12 px-2 text-start">Browse By Category</h1>
              <div className="flex justify-center items-center flex-wrap gap-4">
                {randomProduct.map((item, index) => (
                  <div
                    className="my-4 border border-slate-100 p-6 rounded-md bg-gray-200 w-[19%] text-center"
                    key={index}
                  >
                    <img src={item.img} className="w-40 mx-auto" alt="" />
                    <p className="text-sm font-medium text-gray-600">{item.title}</p>
                    <p className="text-sm font-medium text-gray-600">{item.text}</p>
                    <div>
                      <span className="text-green-500 font-md">{item.price}</span>
                      <span className="ml-2 line-through font-md">{item.total}</span>
                    </div>
                  </div>
                ))}
              </div>
  <img src={Image3} className="w-full h-auto rounded-md pt-12 mt-22" alt="Special Offer" />
</div>


    </main>
  );
};


export default Main;
