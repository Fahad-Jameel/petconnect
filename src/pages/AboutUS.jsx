import React from 'react';
import { motion } from 'framer-motion';
import { 
    Heart, 
    Award, 
    Shield, 
    CheckCircle,
    Mail,
    Star,
    Users,
    Clock
  } from 'lucide-react';
import styles from './css/AboutUs.module.css';
import Family from '../assets/family.jpg';

function AboutUs() {
  const stats = [
    { number: '5000+', label: 'Pets Adopted', icon: Heart },
    { number: '1000+', label: 'Products Available', icon: Award },
    { number: '100%', label: 'Satisfaction', icon: CheckCircle },
    { number: '24/7', label: 'Support', icon: Shield },
  ];
  const features = [
    {
      icon: Star,
      title: "Premium Pet Selection",
      description: "Find your perfect companion from our carefully curated selection of healthy, well-cared-for pets.",
      color: "#4d96ff"
    },
    {
      icon: Users,
      title: "Expert Support Team",
      description: "Our certified pet specialists are available 24/7 to guide you through your pet parenthood journey.",
      color: "#51cf66"
    },
    {
      icon: Clock,
      title: "Seamless Experience",
      description: "From adoption to aftercare, enjoy our streamlined process and comprehensive support system.",
      color: "#845ef7"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <motion.section 
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to
          <span className={styles.gradient}> PetConnect</span>
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The ultimate online platform for pet lovers!
        </motion.p>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className={styles.stats}
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            className={styles.statCard}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <stat.icon className={styles.statIcon} />
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Story Section */}
      <motion.section 
        className={styles.story}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className={styles.storyContent}
          variants={fadeInUp}
        >
          <h2>Our Mission</h2>
          <p>
            We're more than just a pet shop—we're a community dedicated to connecting pets 
            with loving homes and providing everything you need to care for them. Whether 
            you're looking to buy or adopt a pet, find premium pet accessories, or stock up 
            on nutritious pet food, PetConnect has you covered.
          </p>
          <p>
            Our mission is to make pet ownership simple, joyful, and accessible. We believe 
            every pet deserves a caring home, and every pet owner should have access to 
            trusted resources.
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.storyImage}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.imageWrapper} > 
            <img src={Family} alt="" />
          </div>
        </motion.div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        className={styles.features}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className={`${styles.gradient} ${styles.textCenter}`}>
          Why Choose PetConnect?
        </h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className={styles.featureCard}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div 
                className={styles.featureIconWrapper}
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon 
                  className={styles.featureIcon}
                  style={{ color: feature.color }}
                />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className={styles.contact}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className={styles.contactCard}
          variants={fadeInUp}
        >
          <h2>Join Our Community</h2>
          <p>
            At PetConnect, we're here to help you every step of the way on your pet journey. 
            Together, let's build a happier world for pets and their humans!
          </p>
          <motion.button 
            className={styles.contactButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
          >
            <Mail className={styles.mailIcon} />
            Get Started
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default AboutUs;