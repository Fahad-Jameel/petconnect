import React from "react";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import styles from "./HomePage.module.css";
import imaggg from '../assets/dogandcat.jpg';

const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* Navbar */}
      
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <p className={styles.category}>Pet Shop</p>
          <h1 className={styles.heroTitle}>Your Ultimate Pet Adoption and Care Hub</h1>
          <p className={styles.heroDescription}>
            Pawtopia is your one-stop destination for pet adoption and all your pet care needs. From finding loving homes for pets to offering a wide range of supplies and services.
          </p>
          <button className={styles.shopButton}>Shop Now</button>
        </div>
        <div className={styles.heroImages}>
          <img src="/parrot.png" alt="Parrot" className={styles.parrotImage} />
          <img src={imaggg} alt="Dog and Cat" className={styles.petImage} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
