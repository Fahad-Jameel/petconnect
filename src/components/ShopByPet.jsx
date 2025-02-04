import React from 'react';
import styles from './css/ShopByPet.module.css';
import { motion } from 'framer-motion';
import dog from '../assets/husky.jpg';
import hamster from '../assets/hamster.jpg';
import cat from '../assets/cato.jpg';
import parrot from '../assets/parrot2.jpg';
import rabbit from '../assets/rabbit.jpg';
import turtle from '../assets/turtle.jpg';
function ShopByPet() {
  const pets = [
    { name: 'Dog', image: dog },
    { name: 'Hamster', image: hamster },
    { name: 'Cat', image: cat },
    { name: 'Parrot', image: parrot },
    { name: 'Rabbit', image: rabbit },
    { name: 'Turtle', image: turtle },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h2>Shop by pet</h2>
        <p>Find your perfect pet companion at PetConnect – Ready to join your family!</p>
      </motion.div>
      
      <motion.div 
        className={styles.petGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {pets.map((pet, index) => (
          <motion.div
            key={index}
            className={styles.petCard}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={styles.iconContainer}>
              <motion.div
                className={styles.iconWrapper}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img src={pet.image} alt={pet.name} />
              </motion.div>
            </div>
            <span>{pet.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ShopByPet;