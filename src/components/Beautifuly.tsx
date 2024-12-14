import React from "react";

const Beautifuly = () => {
  return (
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
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Shop
        </h1>

       
        <div className="text-sm md:text-base text-gray-300">
          <span className="hover:text-white cursor-pointer">Home</span>{" "}
          <span className="mx-2">&gt;</span>{" "}
          <span className="hover:text-white cursor-pointer">Shop</span>
        </div>
      </div>
    </section>
  );
};

export default Beautifuly;
