import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Heart, Dog, MapPin, Calendar, user} from 'lucide-react';
import styles from './css/PetAdoption.module.css';

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
        location: 'New York',
        image: '/images/golden-retriever.jpg',
        description: 'Friendly and energetic Golden Retriever looking for an active family.',
      },
      // Add more pets here
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
    { id: 'cat', name: 'Cats', icon: Dog }, // Using Dog icon as placeholder
    { id: 'bird', name: 'Birds', icon: Dog }, // Using Dog icon as placeholder
    { id: 'rabbit', name: 'Rabbits', icon: Dog }, // Using Dog icon as placeholder
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
          <Filter className={styles.filterIcon} />
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
                  {pet.gender === 'male' ? 
                    <user className={styles.genderIcon} /> : 
                    <user className={styles.genderIcon} />
                  }
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





