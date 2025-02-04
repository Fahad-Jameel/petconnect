import React from 'react';

function ShopByPet() {
  const pets = [
    { name: 'Dog', image: '/images/dog-icon.png' },
    { name: 'Hamster', image: '/images/hamster-icon.png' },
    { name: 'Cat', image: '/images/cat-icon.png' },
    { name: 'Parrot', image: '/images/parrot-icon.png' },
    { name: 'Rabbit', image: '/images/rabbit-icon.png' },
    { name: 'Turtle', image: '/images/turtle-icon.png' },
  ];

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6">Shop by pet</h2>
      
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {pets.map((pet, index) => (
          <div key={index} className="flex flex-col items-center cursor-pointer group">
            <div className="w-24 h-24 rounded-full bg-cyan-50 flex items-center justify-center mb-2 group-hover:bg-cyan-100 transition-colors">
              <img
                src={pet.image}
                alt={pet.name}
                className="w-16 h-16 object-contain"
              />
            </div>
            <span className="text-sm font-medium">{pet.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopByPet;