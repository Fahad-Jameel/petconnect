import React from 'react';
import styles from './css/Footer.module.css';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.companyInfo}>
            <img src="/logo.svg" alt="PawStyles" className={styles.logo} />
            <p>PawStyles is your one-stop destination for pet adoption and all your pet care needs. From finding loving homes for pets to providing the best care products.</p>
            <div className={styles.socialLinks}>
              <a href="#"><Facebook /></a>
              <a href="#"><Twitter /></a>
              <a href="#"><Instagram /></a>
              <a href="#"><Youtube /></a>
            </div>
          </div>

          <div className={styles.linkSection}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Discount</a></li>
              <li><a href="#">F.A.Q</a></li>
            </ul>
          </div>

          <div className={styles.linkSection}>
            <h3>Information</h3>
            <ul>
              <li><a href="#">Best prices</a></li>
              <li><a href="#">New products</a></li>
              <li><a href="#">Featured</a></li>
              <li><a href="#">Create account</a></li>
            </ul>
          </div>

          <div className={styles.linkSection}>
            <h3>Customer Service</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Order tracking</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>© 2025 PawStyles. All rights reserved.</p>
          <div className={styles.paymentMethods}>
            <img src="/images/visa.png" alt="Visa" />
            <img src="/images/mastercard.png" alt="Mastercard" />
            <img src="/images/paypal.png" alt="PayPal" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;