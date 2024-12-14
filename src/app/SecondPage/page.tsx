import React from 'react';

const Page = () => {
  const products = [
    { img: "m1.png", title: "Trenton modular sofa_3", price: "Rs. 25,000.00" },
    { img: "daining.png", title: "Granite dining table with dining chair", price: "Rs. 25,000.00" },
    { img: "mac.png", title: "Outdoor bar table and stool", price: "Rs. 25,000.00" },
    { img: "reco.png", title: "Plain console with teak mirror", price: "Rs. 25,000.00" },
    { img: "m5.png", title: "Grain coffee table", price: "Rs. 15,000.00" },
    { img: "Mask group (6).png", title: "Kent coffee table", price: "Rs. 225,000.00" },
    { img: "M7.png", title: "Round coffee table_color 2", price: "Rs. 251,000.00" },
    { img: "M8.png", title: "Reclaimed teak coffee table", price: "Rs. 25,200.00" },
    { img: "Mask group (9).png", title: "Plain console_", price: "Rs. 258,200.00" },
    { img: "cupborf.png", title: "Reclaimed teak Sideboard", price: "Rs. 20,000.00" },
    { img: "Mask group (11).png", title: "SJP_0825", price: "Rs. 200,000.00" },
    { img: "124.png", title: "Bella chair and table", price: "Rs. 100,000.00" },
    { img: "Mask group (3).png", title: "Granite square side table", price: "Rs. 258,800.00" },
    { img: "asg.png", title: "Asgaard sofa", price: "Rs. 250,000.00" },
    { img: "sofa.png", title: "Maya sofa three seater", price: "Rs. 115,000.00" },
    { img: "m16.png", title: "Outdoor sofa set", price: "Rs. 244,000.00" },
  ];

  return (
    <div>
      {/* Banner Sec */}
      <section className="relative bg-gray-800 text-white">
        {/* Background Image */}
        <div className="relative w-full h-[60vh] md:h-[80vh]">
          <img
            src="/bg.jpeg" // Background image
            alt="Banner"
            className="object-cover w-full h-full filter blur-sm"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
          {/* Logo */}
          <img
            src="Meubel House_Logos-05.png" // Logo image
            alt="Logo"
            className="h-16 md:h-24 mb-4"
          />

          {/* Welcome Message */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Shop</h1>

          <div className="text-sm md:text-base text-gray-300">
            <span className="hover:text-white cursor-pointer">Home</span>{" "}
            <span className="mx-2">&gt;</span>{" "}
            <span className="hover:text-white cursor-pointer">Shop</span>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a href="#" className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={product.title}
                    className="object-cover object-center w-full h-full block hover:bg-yellow-100"
                    src={product.img}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.title}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.price}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Buttons */}
          <div className="flex justify-center space-x-4 mt-10">
            <button className="px-6 py-3 bg-[#FBEBB5] hover:bg-yellow-400 text-gray-700 font-bold rounded shadow">
              1
            </button>
            <button className="px-6 py-3 bg-[#FFF9E5] hover:bg-yellow-400 text-gray-700 font-bold rounded shadow">
              2
            </button>
            <button className="px-6 py-3 bg-[#FFF9E5] hover:bg-yellow-400 text-gray-700 font-bold rounded shadow">
              3
            </button>
            <button className="px-6 py-3 bg-[#FFF9E5] hover:bg-yellow-400 text-gray-700 font-bold rounded shadow">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#FAF4F4] body-font">
        <div className="container mx-auto px-5 py-24">
          <div className="flex flex-wrap -mx-4 text-center">
            {/* Feature 1 */}
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <h2 className="text-xl font-medium text-gray-900 mb-2 hover:underline hover:text-gray-700 transition duration-300">
                Free Delivery
              </h2>
              <p className="leading-relaxed text-base">
                For all orders over $50, consectetur adipiscing elit.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <h2 className="text-xl font-medium text-gray-900 mb-2 hover:underline hover:text-gray-700 transition duration-300">
                90 Days Return
              </h2>
              <p className="leading-relaxed text-base">
                If goods have problems, consectetur adipiscing elit.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="w-full md:w-1/3 px-4">
              <h2 className="text-xl font-medium text-gray-900 mb-2 hover:underline hover:text-gray-700 transition duration-300">
                Secure Payment
              </h2>
              <p className="leading-relaxed text-base">
                100% secure payment, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
