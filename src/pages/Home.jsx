import React from 'react';

import Hero from '../components/Hero';
import CategoryBrowser from '../components/CategoryBrowser';
import FeaturedProducts from '../components/FeaturedProducts';
import SmartShop from '../components/SmartShop';
import ShopByPet from '../components/ShopByPet';



function App() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <CategoryBrowser />
        <FeaturedProducts />
        <SmartShop />
       
        <ShopByPet />
        
      </main>
    </div>
  );
}

export default App;