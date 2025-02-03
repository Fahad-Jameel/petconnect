import React from "react";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import styles from "./HEader.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="Pawtopia" className={styles.logo} />
          <span className={styles.brand}>PAWTOPIA</span>
        </div>
        <ul className={styles.navLinks}>
          <li className={styles.activeLink}>Home</li>
          <li>Shop</li>
          <li>Adopt</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <div className={styles.navIcons}>
          <div className={styles.searchContainer}>
            <input type="text" placeholder="Search products..." className={styles.searchInput} />
            <FaSearch className={styles.icon} />
          </div>
          <FaHeart className={styles.icon} />
          <FaShoppingCart className={styles.icon} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
