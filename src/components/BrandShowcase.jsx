import React from 'react';

function BrandShowcase() {
  const brands = [
    { name: "Hill's", logo: '/images/hills-logo.png' },
    { name: 'Pedigree', logo: '/images/pedigree-logo.png' },
    { name: 'Felix', logo: '/images/felix-logo.png' },
    { name: 'Diamond', logo: '/images/diamond-logo.png' },
  ];

  return (
    <div className="my-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="h-12 object-contain grayscale hover:grayscale-0 transition-all cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandShowcase;