import React from 'react';
import styles from './css/BrandShowcase.module.css';

function BrandShowcase() {
  const brands = [
    { name: "Hill's", logo: '/images/hills-logo.png' },
    { name: 'Pedigree', logo: '/images/pedigree-logo.png' },
    { name: 'Felix', logo: '/images/felix-logo.png' },
    { name: 'Diamond', logo: '/images/diamond-logo.png' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.brandGrid}>
        {brands.map((brand, index) => (
          <div key={index} className={styles.brandCard}>
            <img src={brand.logo} alt={`${brand.name} logo`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandShowcase;