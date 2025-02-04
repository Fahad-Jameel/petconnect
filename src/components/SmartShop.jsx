import React from 'react';

function SmartShop() {
  return (
    <div className="my-12 bg-cyan-50 rounded-3xl overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2">
          <img
            src="/images/pet-owner.jpg"
            alt="Pet owner"
            className="w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <p className="text-blue-600 font-medium mb-2">Pet Shop</p>
          <h2 className="text-3xl font-bold mb-4">
            The smarter way to shop for your pet
          </h2>
          <p className="text-gray-600 mb-6">
            PawStyles is the smarter way to care for your pet, offering everything from supplies to veterinary services - all in one convenient location.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default SmartShop;