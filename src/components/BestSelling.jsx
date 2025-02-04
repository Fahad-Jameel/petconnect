import React from 'react';
import { Heart } from 'lucide-react';

function BestSelling() {
  const products = [
    {
      name: 'Dog Bowl',
      price: '₹ 299.00',
      image: '/images/dog-bowl.png'
    },
    {
      name: 'Cat Bowl',
      price: '₹ 249.00',
      image: '/images/cat-bowl.png'
    },
    {
      name: 'Dog Leash',
      price: '₹ 399.00',
      image: '/images/dog-leash.png'
    },
    {
      name: 'Premium Cat Food',
      price: '₹ 999.00',
      image: '/images/premium-cat-food.png'
    },
    {
      name: 'Shampoo Kit',
      price: '₹ 1299.00',
      image: '/images/shampoo-kit.png'
    },
    {
      name: 'Dog Food',
      price: '₹ 2499.00',
      image: '/images/premium-dog-food.png'
    },
    {
      name: 'Dog Bed',
      price: '₹ 899.00',
      image: '/images/dog-bed.png'
    },
    {
      name: 'Grooming Kit',
      price: '₹ 1799.00',
      image: '/images/grooming-kit.png'
    }
  ];

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6">Best selling products</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain"
              />
              <button className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50">
                <Heart className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSelling;