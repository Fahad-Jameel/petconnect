import React from 'react';
import styles from './css/SmartShop.module.css';

function SmartShop() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageSection}>
          <img
            src="/images/pet-owner.jpg"
            alt="Pet owner"
          />
        </div>
        <div className={styles.textSection}>
          <p className={styles.label}>Pet Shop</p>
          <h2>The smarter way to shop for your pet</h2>
          <p className={styles.description}>
            PawStyles is the smarter way to care for your pet, offering everything from supplies to veterinary services - all in one convenient location.
          </p>
          <button className={styles.learnMoreButton}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default SmartShop;