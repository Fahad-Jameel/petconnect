import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Heart, Dog, MapPin, Calendar, user, Cat, Rabbit, Bird} from 'lucide-react';
import styles from './css/PetAdoption.module.css';

import luna from '../assets/adoption/luna.jpg';
import max from '../assets/adoption/max.jpg';
import charlie from '../assets/adoption/charlie.jpg';
import bella from '../assets/adoption/bella.jpg';
import rocky from '../assets/adoption/rocky.jpg';
import milo from '../assets/adoption/milo.jpg';
import coco from '../assets/adoption/coco.jpg';
import daisy from '../assets/adoption/daisy.jpg';
import buddy from '../assets/adoption/buddy.jpg';
import lily from '../assets/adoption/lily.jpg';

function PetAdoption() {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Simulated pet data
  useEffect(() => {
    const samplePets = [
        {
            id: 1,
            name: 'Luna',
            type: 'dog',
            breed: 'Golden Retriever',
            age: '2 years',
            gender: 'female',
            location: 'Islamabad',
            image: luna,
            description: 'Friendly and energetic Golden Retriever looking for an active family.',
          },
          {
            id: 2,
            name: 'Max',
            type: 'cat',
            breed: 'Siamese',
            age: '3 years',
            gender: 'male',
            location: 'Lahore',
            image: max,
            description: 'Affectionate Siamese cat who loves cuddles and attention.',
          },
          {
            id: 3,
            name: 'Charlie',
            type: 'bird',
            breed: 'Parrot',
            age: '1 year',
            gender: 'male',
            location: 'Karachi',
            image: charlie,
            description: 'Talkative parrot that enjoys learning new words and socializing.',
          },
          {
            id: 4,
            name: 'Bella',
            type: 'rabbit',
            breed: 'Netherland Dwarf',
            age: '6 months',
            gender: 'female',
            location: 'Peshawar',
            image: bella,
            description: 'Adorable and playful Netherland Dwarf rabbit.',
          },
          {
            id: 5,
            name: 'Rocky',
            type: 'dog',
            breed: 'Bulldog',
            age: '4 years',
            gender: 'male',
            location: 'Faisalabad',
            image: rocky,
            description: 'Loyal and calm Bulldog who enjoys lounging around.',
          },
          {
            id: 6,
            name: 'Milo',
            type: 'cat',
            breed: 'Persian',
            age: '2 years',
            gender: 'male',
            location: 'Quetta',
            image: milo,
            description: 'Fluffy Persian cat who loves being brushed and pampered.',
          },
          {
            id: 7,
            name: 'Coco',
            type: 'bird',
            breed: 'Cockatiel',
            age: '1.5 years',
            gender: 'female',
            location: 'Rawalpindi',
            image: coco,
            description: 'Friendly Cockatiel with a sweet singing voice.',
          },
          {
            id: 8,
            name: 'Daisy',
            type: 'rabbit',
            breed: 'Holland Lop',
            age: '1 year',
            gender: 'female',
            location: 'Islamabad',
            image: daisy,
            description: 'Gentle Holland Lop rabbit who enjoys being around people.',
          },
          {
            id: 9,
            name: 'Buddy',
            type: 'dog',
            breed: 'Labrador Retriever',
            age: '3 years',
            gender: 'male',
            location: 'Multan',
            image: buddy,
            description: 'Energetic Labrador Retriever who loves outdoor activities.',
          },
          {
            id: 10,
            name: 'Lily',
            type: 'cat',
            breed: 'Maine Coon',
            age: '5 years',
            gender: 'female',
            location: 'Sialkot',
            image: lily,
            description: 'Gentle giant Maine Coon with a calm and loving personality.',
          },
          
    ];

    setTimeout(() => {
      setPets(samplePets);
      setFilteredPets(samplePets);
      setIsLoading(false);
    }, 1000);
  }, []);

  const categories = [
    { id: 'all', name: 'All Pets', icon: Dog },
    { id: 'dog', name: 'Dogs', icon: Dog },
    { id: 'cat', name: 'Cats', icon: Cat }, 
    { id: 'bird', name: 'Birds', icon: Bird }, 
    { id: 'rabbit', name: 'Rabbits', icon: Rabbit },
  ];

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterPets(term, activeFilter);
  };

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    filterPets(searchTerm, category);
  };

  const filterPets = (term, category) => {
    let filtered = pets;
    if (category !== 'all') {
      filtered = filtered.filter(pet => pet.type === category);
    }
    if (term) {
      filtered = filtered.filter(pet => 
        pet.name.toLowerCase().includes(term) ||
        pet.breed.toLowerCase().includes(term)
      );
    }
    setFilteredPets(filtered);
  };

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Find Your Perfect Companion</h1>
        <p>Give a forever home to a pet in need</p>
      </motion.div>

      <motion.div 
        className={styles.searchSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className={styles.searchBar}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search by name or breed..."
            value={searchTerm}
            onChange={handleSearch}
          />
          
        </div>

        <div className={styles.categories}>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`${styles.categoryButton} ${activeFilter === category.id ? styles.active : ''}`}
              onClick={() => handleFilterChange(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className={styles.categoryIcon} />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className={styles.petsGrid}
        layout
      >
        <AnimatePresence>
          {isLoading ? (
            <motion.div className={styles.loader}>
              <Dog className={styles.loaderIcon} />
            </motion.div>
          ) : filteredPets.map((pet) => (
            <motion.div
              key={pet.id}
              className={styles.petCard}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.petImageContainer}>
                <img src={pet.image} alt={pet.name} />
                <button className={styles.favoriteButton}>
                  <Heart className={styles.heartIcon} />
                </button>
              </div>
              
              <div className={styles.petInfo}>
                <div className={styles.nameRow}>
                  <h3>{pet.name}</h3>
                      <span>{pet.gender}</span>
                </div>
                
                <p className={styles.breed}>{pet.breed}</p>
                
                <div className={styles.details}>
                  <div className={styles.detail}>
                    <Calendar className={styles.detailIcon} />
                    <span>{pet.age}</span>
                  </div>
                  <div className={styles.detail}>
                    <MapPin className={styles.detailIcon} />
                    <span>{pet.location}</span>
                  </div>
                </div>

                <motion.button 
                  className={styles.adoptButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Adopt Me
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default PetAdoption;





