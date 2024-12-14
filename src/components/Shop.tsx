import React from "react";
import { BsSliders, BsViewList } from "react-icons/bs";
import { PiCirclesFourFill } from "react-icons/pi";
import Link from "next/link";
const Shop = () => {
  return (
    <div className="w-full bg-gray-100 py-4 px-6 flex flex-wrap items-center justify-between rounded-md shadow-md">
      {/* Filter Text */}
      <p className="flex items-center text-gray-700 font-semibold text-lg space-x-2 ">
        <BsSliders />
        <span>Filter</span>
        <PiCirclesFourFill />
        <BsViewList />
      </p>

      {/* Showing Results */}
      <p className="text-gray-500 text-sm mt-2 md:mt-0">
        Showing{" "}
        <span className="font-semibold text-gray-700">1–16</span> of{" "}
        <span className="font-semibold text-gray-700">32</span> results
      </p>

      {/* Controls */}
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        {/* Show Items */}
        <div className="flex items-center">
          <label htmlFor="items" className="mr-2 text-gray-700 font-medium">
            Show:
          </label>
          <input
            id="items"
            type="number"
            value="16"
            className="w-16 text-center bg-gray-50 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 py-1"
          />
        </div>

        {/* Sort By */}
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-gray-700 font-medium">
            Sort by:
          </label>
          <select
            id="sort"
            className="bg-gray-50 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 py-1 px-2"
          >
            <option value="default">Default</option>
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Shop;
