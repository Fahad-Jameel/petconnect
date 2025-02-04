import React from 'react';
import styles from './css/FeaturedProducts.module.css';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

import persianCat from '../assets/persian-cat.jpg';
import parrot from '../assets/parrot1.jpg';
import shihTzu from '../assets/shih-tzu.jpg';

function FeaturedProducts() {
  const products = [
    {
      name: 'Persian Cat',
      image: persianCat,
      price: '3,399 RS'
    },
    {
      name: 'Parrot',
      image: parrot,
      price: '2,990 RS'
    },
    {
      name: 'Shih Tzu',
      image: shihTzu,
      price: '6,989 RS'
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Featured products</h2>
      
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <motion.div
            key={index}
            className={styles.productCard}
            whileHover={{ y: -5 }}
            transition={{ type: "tween" }}
          >
            <div className={styles.imageContainer}>
              <img 
                src={product.image} 
                alt={product.name}
                className={styles.productImage}
              />
              <button className={styles.wishlistButton}>
                <Heart className={styles.heartIcon} />
              </button>
            </div>
            
            <div className={styles.productInfo}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <motion.button
                className={styles.addToCartButton}
                whileHover="hover"
              >
                <motion.div
                  className={styles.buttonGradient}
                  initial={{ x: "-100%" }}
                  variants={{
                    hover: {
                      x: 0,
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }
                  }}
                />
                <span className={styles.buttonText}>Add to cart</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;