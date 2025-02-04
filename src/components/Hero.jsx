import React from 'react';
import styles from './css/Hero.module.css';
import dog from '../assets/dog1.png';
import cat from '../assets/cat.png';
import parot from '../assets/parrot.png';
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.backgroundCircles}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        {/* <div className={styles.circle3}></div> */}
      </div>
      
      <div className={styles.content}>
        <div className={styles.textContent}>
          <p className={styles.category}>Pet Shop</p>
          <h1 className={styles.title}>
            Your Ultimate Pet<br />
            Adoption and Care Hub
          </h1>
          <p className={styles.description}>
            PetConnect is your one-stop destination for pet adoption and all 
            your pet care needs. From finding loving homes for pets to 
            offering a wide range of supplies and services.
          </p>
          <button className={styles.button}>Shop Now</button>
        </div>

        <div className={styles.imageContent}>
          <img 
            src= {parot}
            alt="Colorful parrot" 
            className={styles.parrot}
          />
          <img 
            src={dog}
            alt="Australian Shepherd" 
            className={styles.dog}
          />
          <img 
            src={cat}
            alt="Orange cat" 
            className={styles.cat}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;