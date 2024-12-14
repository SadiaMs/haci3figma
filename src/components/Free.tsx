import React from "react";

const Free = () => {
  return (
    <section className="bg-[#FAF4F4] body-font">
      <div className="container mx-auto px-5 py-24">
        <div className="flex flex-wrap -mx-4 text-center">
          {/* Column 1 */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-medium text-gray-900 mb-2 hover:underline hover:text-gray-700 transition duration-300">
              Free Delivery
            </h2>
            <p className="leading-relaxed text-base">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-medium text-gray-900 mb-2 hover:underline hover:text-gray-700 transition duration-300">
              90 Days Return
            </h2>
            <p className="leading-relaxed text-base">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>

          {/* Column 3 */}
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
  );
};

export default Free;
