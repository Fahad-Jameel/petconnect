import React from 'react';
import styles from './css/Hero.module.css';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1>Your Ultimate Pet Adoption and Care Hub</h1>
          <p>PawStyles is your one-stop destination for pet adoption and all your pet care needs. From finding loving homes for pets to providing the best care products.</p>
          <button>Shop Now</button>
        </div>
        <div className={styles.imageContent}>
          <img src="/images/parrot.png" alt="Flying Parrot" className={styles.parrot} />
          <div className={styles.petImages}>
            <img src="/images/dog.png" alt="Dog" className={styles.dog} />
            <img src="/images/cat.png" alt="Cat" className={styles.cat} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;