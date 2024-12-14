import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";

const Page = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-100 p-6">
      {/* Top Left Section: Images */}
      <div
        className="absolute flex flex-col space-y-4 w-[76px] h-[416px] top-[50px] left-[50px]"
      >
        <img
          src="m16.png"
          alt="Image 1"
          className="bg-[#FFF9E5] w-[76px] h-[80px] rounded object-cover"
        />
        <img
          src="Outdoor sofa set_2 1.png"
          alt="Image 2"
          className="bg-[#FFF9E5] w-[76px] h-[80px] rounded object-cover"
        />
        <img
          src="Stuart sofa 1.png"
          alt="Image 3"
          className="w-[76px] h-[80px] rounded object-cover"
        />
        <img
          src="Maya sofa three seater (1) 1.png"
          alt="Image 4"
          className="bg-[#FFF9E5] w-[76px] h-[80px] rounded object-cover"
        />
      </div>

      {/* Main Section */}
      <section className="text-gray-600 body-font mt-16">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center gap-8">
          {/* Product Image */}
          <div className="bg-[#FFF9E5] lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="Asgaard Sofa"
              src="asg.png"
            />
          </div>

          {/* Product Details */}
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-4xl mb-4 font-medium text-gray-900">Asgaard Sofa</h1>
            <h3 className="text-2xl text-gray-800 font-semibold mb-4">Rs. 250,000.00</h3>

            {/* Size Buttons */}
            <div className="flex space-x-4 mb-6">
              <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none hover:bg-gray-200">
                L
              </button>
              <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none hover:bg-gray-200">
                XL
              </button>
              <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none hover:bg-gray-200">
                XS
              </button>
            </div>

            {/* Available Colors */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-gray-200"></div>
              <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-200"></div>
              <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-gray-200"></div>
            </div>

            {/* Customer Review and Description */}
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-yellow-500 text-xl">⭐⭐⭐⭐</span>
              <span className="text-sm text-gray-600">4.5 Customer Reviews</span>
            </div>
            <p className="mb-8 leading-relaxed">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
              stout-hearted hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound.
            </p>

            {/* Quantity and Add to Cart */}
            <div className="flex justify-center gap-4">
              <div className="inline-flex items-center border border-black rounded bg-transparent py-2 px-4">
                <button className="px-2 py-1 hover:text-red-500">-</button>
                <span className="mx-2 text-lg font-semibold">1</span>
                <button className="px-2 py-1 hover:text-red-500">+</button>
              </div>
              <button className="flex items-center text-gray-700 bg-transparent border border-black py-2 px-6 rounded hover:bg-gray-100">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="my-8">
          <hr className="border-gray-300" />
        </div>

        {/* Additional Details */}
        <ul className="space-y-4 text-gray-800 px-6">
          <li>
            <strong>SKU:</strong> SS001
          </li>
          <li>
            <strong>Category:</strong> Sofas
          </li>
          <li>
            <strong>Tags:</strong> Sofa, Chair, Home, Shop
          </li>
          <li>
            <strong>Share:</strong>
            <div className="flex space-x-4 mt-2">
              <FaFacebook className="text-blue-600 text-xl cursor-pointer" />
              <IoLogoLinkedin className="text-blue-500 text-xl cursor-pointer" />
              <AiFillTwitterCircle className="text-blue-400 text-xl cursor-pointer" />
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Page;
