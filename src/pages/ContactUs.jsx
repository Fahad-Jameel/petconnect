import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import styles from './css/ContactUs.module.css';
import Dog from '../assets/pet.jpg';

function ContactUs() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const contactMethods = [
    { icon: Mail, title: 'Email Us', info: 'support@petconnect.com', delay: 0.1 },
    { icon: Phone, title: 'Call Us', info: '+92 1234567890', delay: 0.2 },
    { icon: MapPin, title: 'Visit Us', info: 'E11, Islamabad', delay: 0.3 },
    { icon: Clock, title: 'Working Hours', info: 'Mon - Fri: 9AM - 6PM', delay: 0.4 }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Drop us a line and we'll get back to you shortly.</p>
      </motion.div>

      {/* Contact Methods Grid */}
      <motion.div 
        className={styles.contactGrid}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            className={`${styles.contactCard} ${selectedMethod === index ? styles.selected : ''}`}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedMethod(index)}
          >
            <method.icon className={styles.contactIcon} />
            <h3>{method.title}</h3>
            <p>{method.info}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Form Section */}
      <div className={styles.formSection}>
        <motion.div 
          className={styles.formContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <AnimatePresence mode='wait'>
            {!isSubmitted ? (
              <motion.form
                key="form"
                className={styles.form}
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className={styles.inputGroup}>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  required
                />
                
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  placeholder="Your Message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                />
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className={styles.successMessage}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <CheckCircle size={48} />
                <h3>Message Sent!</h3>
                <p>We'll get back to you soon.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className={styles.mapContainer}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className={styles.petImageContainer}>
           
            <div className={styles.mapPlaceholder}>
              <img src={Dog} alt="" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Social Media Section */}
      <motion.div 
        className={styles.social}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3>Connect With Us</h3>
        <div className={styles.socialIcons}>
          {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Live Chat Button */}
      <motion.button
        className={styles.chatButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <MessageCircle size={24} />
        <span>Live Chat</span>
      </motion.button>
    </div>
  );
}

export default ContactUs;