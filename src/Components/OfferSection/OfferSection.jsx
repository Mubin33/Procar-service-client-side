import React from "react";

const OfferSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 px-6 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Left side: Offer content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Special Offer Just for You!</h2>
          <p className="text-lg mb-6">
            Grab up to 50% off on your favorite products. Limited time only! Don't
            miss out on amazing deals that you won’t find anywhere else.
          </p>
          <button className="bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-all duration-300">
            Shop Now
          </button>
        </div>

        {/* Right side: Placeholder for image or graphic */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="bg-white w-full h-48 md:h-72 rounded-lg shadow-lg flex items-center justify-center text-center">
            <p className="text-2xl font-bold text-blue-500">Your Future Products!</p>
            <p className="text-lg text-gray-600">Exciting deals coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
