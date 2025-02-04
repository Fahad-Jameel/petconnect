// CategoryBrowser.jsx
import React from 'react';
import styles from './css/CategoryBrowser.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function CategoryBrowser() {
  const categories = [
    { name: 'Pet toys', image: '/images/pet-toys.jpg', products: '58 products' },
    { name: 'Pet Treat', image: '/images/pet-treat.jpg', products: '45 products' },
    { name: 'Pet Kit', image: '/images/pet-kit.jpg', products: '23 products' },
    { name: 'Wagewear', image: '/images/wagewear.jpg', products: '34 products' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Browse by category</h2>
        <div className={styles.navigationButtons}>
          <button><ChevronLeft /></button>
          <button><ChevronRight /></button>
        </div>
      </div>
      
      <div className={styles.categoryGrid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryCard}>
            <img src={category.image} alt={category.name} />
            <div className={styles.categoryInfo}>
              <h3>{category.name}</h3>
              <p>{category.products}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryBrowser;