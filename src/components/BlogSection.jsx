import React from 'react';
import styles from './css/BlogSection.module.css';
import { ArrowRight } from 'lucide-react';

function BlogSection() {
  const blogs = [
    {
      title: '5 Signs Your Pet Needs A Vet Visit',
      image: '/images/vet-visit.jpg',
      time: '5 mins read'
    },
    {
      title: 'Top 5 DIY Pet Treat Recipes',
      image: '/images/pet-treat.jpg',
      time: '3 mins read'
    },
    {
      title: '8 Huge Trending Pet Products',
      image: '/images/trending-products.jpg',
      time: '4 mins read'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.blogGrid}>
        {blogs.map((blog, index) => (
          <div key={index} className={styles.blogCard}>
            <div className={styles.imageContainer}>
              <img src={blog.image} alt={blog.title} />
              <div className={styles.readTime}>{blog.time}</div>
            </div>
            <div className={styles.blogContent}>
              <h3>{blog.title}</h3>
              <button className={styles.readMoreButton}>
                Read More 
                <ArrowRight className={styles.icon} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
