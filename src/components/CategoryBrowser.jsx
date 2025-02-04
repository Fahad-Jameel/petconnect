// CategoryBrowser.jsx
import React from 'react';
import styles from './css/CategoryBrowser.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import toys from '../assets/pet-toys.jpg';
import petTreat from '../assets/pet-treats.jpg';
import petKit from '../assets/pet-kit.jpg';
import pets from '../assets/pets.jpg';
function CategoryBrowser() {
  const categories = [
    { name: 'Pets Breed', image: pets, products: '70 products' },
    { name: 'Pet toys', image: toys, products: '68 products' },
    { name: 'Pet Treat', image: petTreat, products: '45 products' },
    { name: 'Pet Kit', image: petKit, products: '60 products' },
   
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