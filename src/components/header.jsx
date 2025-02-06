// Header.jsx
import React, { useState } from 'react';
import styles from './css/Header.module.css';
import { Menu, Search, Heart, ShoppingCart } from 'lucide-react';
import Logo from '../assets/logo.png';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <img src={Logo} alt="PawStyles" />
          </div>

          <nav className={styles.desktopNav}>
            <a href="/" className={styles.navLink}>Home</a>
            <a href="/shop" className={styles.navLink}>Shop</a>
            <a href="/petadoption" className={styles.navLink}>Adopt</a>
            <a href="/about" className={styles.navLink}>About Us</a>
            <a href="/contact" className={styles.navLink}>Contact Us</a>
          </nav>

          <div className={styles.headerActions}>
            <div className={styles.searchBar}>
              <input type="text" placeholder="Search products..." />
              <Search className={styles.searchIcon} />
            </div>
            <Heart className={styles.actionIcon} />
            <ShoppingCart className={styles.actionIcon} />
            <button className={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <a href="/" className={styles.mobileNavLink}>Home</a>
            <a href="/shop" className={styles.mobileNavLink}>Shop</a>
            <a href="/adopt" className={styles.mobileNavLink}>Adopt</a>
            <a href="/about" className={styles.mobileNavLink}>About Us</a>
            <a href="/contact" className={styles.mobileNavLink}>Contact Us</a>
            <div className={styles.mobileSearch}>
              <input type="text" placeholder="Search products..." />
              <Search className={styles.searchIcon} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;