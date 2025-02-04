import React from 'react';
import styles from './css/SmartShop.module.css';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import man from '../assets/man.jpg'
function SmartShop() {
  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.imageSection}>
          <motion.img
            src={man}
            alt="Pet owner with their pet"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <motion.div 
          className={styles.textSection}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className={styles.label}>Pet Shop</span>
          <h2>The smarter way to shop for your pet</h2>
          <p className={styles.description}>
            PawStyles is the smarter way to care for your pet, offering everything 
            from supplies to veterinary services - all in one convenient location.
          </p>
          <motion.button 
            className={styles.learnMoreButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Learn More</span>
            <ArrowRight className={styles.arrow} />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SmartShop;