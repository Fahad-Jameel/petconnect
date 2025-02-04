import React from 'react';
import styles from './css/BestSelling.module.css';
import { Heart } from 'lucide-react';

function BestSelling() {
  const products = [
    {
      name: 'Dog Bowl',
      price: '₹ 299.00',
      image: '/images/dog-bowl.png'
    },
    {
      name: 'Cat Bowl',
      price: '₹ 249.00',
      image: '/images/cat-bowl.png'
    },
    {
      name: 'Dog Leash',
      price: '₹ 399.00',
      image: '/images/dog-leash.png'
    },
    {
      name: 'Premium Cat Food',
      price: '₹ 999.00',
      image: '/images/premium-cat-food.png'
    },
    {
      name: 'Shampoo Kit',
      price: '₹ 1299.00',
      image: '/images/shampoo-kit.png'
    },
    {
      name: 'Dog Food',
      price: '₹ 2499.00',
      image: '/images/premium-dog-food.png'
    },
    {
      name: 'Dog Bed',
      price: '₹ 899.00',
      image: '/images/dog-bed.png'
    },
    {
      name: 'Grooming Kit',
      price: '₹ 1799.00',
      image: '/images/grooming-kit.png'
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Best selling products</h2>
      
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <div key={index} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <img src={product.image} alt={product.name} />
              <button className={styles.wishlistButton}>
                <Heart className={styles.heartIcon} />
              </button>
            </div>
            <div className={styles.productInfo}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSelling;