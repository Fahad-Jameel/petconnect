import React from 'react';
import styles from './css/ShopByPet.module.css';

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
    <div className={styles.container}>
      <h2>Shop by pet</h2>
      
      <div className={styles.petGrid}>
        {pets.map((pet, index) => (
          <div key={index} className={styles.petCard}>
            <div className={styles.iconContainer}>
              <img src={pet.image} alt={pet.name} />
            </div>
            <span>{pet.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopByPet;