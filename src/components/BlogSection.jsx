import React from 'react';
import { ArrowRight } from 'lucide-react';

function BlogSection() {
  const blogs = [
    {
      title: '5 Signs Your Pet Needs A Vet Visit',
      image: '/images/vet-visit.jpg',
      time: '5 mins read'
    },
    {
      title: 'Top 5 DIY Pet Treat Recipes',
      image: '/images/pet-treat.jpg',
      time: '3 mins read'
    },
    {
      title: '8 Huge Trending Pet Products',
      image: '/images/trending-products.jpg',
      time: '4 mins read'
    }
  ];

  return (
    <div className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                {blog.time}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                {blog.title}
              </h3>
              <button className="mt-2 text-sm text-gray-600 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                Read More 
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;