import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryBrowser from './components/CategoryBrowser';
import FeaturedProducts from './components/FeaturedProducts';
import SmartShop from './components/SmartShop';
import BrandShowcase from './components/BrandShowcase';
import BestSelling from './components/BestSelling';
import ShopByPet from './components/ShopByPet';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <CategoryBrowser />
        <FeaturedProducts />
        <SmartShop />
        <BrandShowcase />
        <BestSelling />
        <ShopByPet />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;