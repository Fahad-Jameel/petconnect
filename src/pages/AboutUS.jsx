import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Heart, 
  Award, 
  Shield, 
  CheckCircle, 
  Instagram, 
  Facebook, 
  Twitter,
  Mail
} from 'lucide-react';
import styles from './css/AboutUs.module.css';

function AboutUs() {
  const stats = [
    { number: '5000+', label: 'Pets Adopted', icon: Heart },
    { number: '10+', label: 'Years Experience', icon: Award },
    { number: '100%', label: 'Satisfaction', icon: CheckCircle },
    { number: '24/7', label: 'Support', icon: Shield },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: '/team/sarah.jpg',
      bio: 'Passionate about connecting pets with loving homes.',
      social: {
        twitter: '#',
        instagram: '#',
        facebook: '#',
      }
    },
    // Add more team members here
  ];

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
          Connecting Hearts, 
          <span className={styles.gradient}>Creating Families</span>
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We're on a mission to create lasting bonds between pets and their forever homes
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
          <h2>Our Story</h2>
          <p>
            Founded in 2013, PawStyles began with a simple idea: every pet deserves 
            a loving home. What started as a small local initiative has grown into 
            a nationwide movement, connecting thousands of pets with their perfect 
            families.
          </p>
          <motion.button 
            className={styles.storyButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Our Journey
          </motion.button>
        </motion.div>
        
        <motion.div 
          className={styles.storyImage}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.imageWrapper} />
        </motion.div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className={styles.team}
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeInUp}>Meet Our Team</motion.h2>
        <motion.p variants={fadeInUp} className={styles.teamIntro}>
          Dedicated professionals working together to make a difference
        </motion.p>
        
        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <motion.div
              key={index}
              className={styles.teamCard}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className={styles.memberImage}>
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.bio}>{member.bio}</p>
              <div className={styles.socialLinks}>
                <motion.a href={member.social.twitter} whileHover={{ scale: 1.2 }}>
                  <Twitter size={20} />
                </motion.a>
                <motion.a href={member.social.instagram} whileHover={{ scale: 1.2 }}>
                  <Instagram size={20} />
                </motion.a>
                <motion.a href={member.social.facebook} whileHover={{ scale: 1.2 }}>
                  <Facebook size={20} />
                </motion.a>
              </div>
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
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you. Reach out to us for any questions or concerns.</p>
          <motion.button 
            className={styles.contactButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className={styles.mailIcon} />
            Contact Us
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default AboutUs;