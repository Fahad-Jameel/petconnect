import React from 'react';
import styles from './css/FeaturedProducts.module.css';
import { Heart } from 'lucide-react';

function FeaturedProducts() {
  const products = [
    {
      name: 'Premium Dog Food',
      image: '/images/dog-food.png',
      price: '₹ 1,299.00'
    },
    {
      name: 'Premium Cat Food',
      image: '/images/cat-food.png',
      price: '₹ 1,599.00'
    },
    {
      name: 'Premium Bird Food',
      image: '/images/bird-food.png',
      price: '₹ 899.00'
    }
  ];

  return (
    <div className={styles.container}>
      <h2>Featured products</h2>
      
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <div key={index} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <img src={product.image} alt={product.name} />
              <button className={styles.wishlistButton}>
                <Heart />
              </button>
            </div>
            <div className={styles.productInfo}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button className={styles.addToCartButton}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
