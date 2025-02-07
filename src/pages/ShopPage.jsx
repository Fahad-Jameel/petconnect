import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ShoppingCart, Star, Plus, Minus } from 'lucide-react';
import styles from './css/ShopPage.module.css';
import dogFood from '../assets/shop/dog-food.jpg';
import catToyBall from '../assets/shop/cat-toy-ball.jpg';
import birdAccessories from '../assets/shop/bird-cage.jpg';
import rabbitFeeder from '../assets/shop/rabbit-feeder.jpg';
import dogShampoo from '../assets/shop/dog-shampoo.jpg';
import catScratchingPost from '../assets/shop/cat-sctraching-post.jpg';
import birdVitamins from '../assets/shop/bird-vitamins.jpg';
import rabbitChewToy from '../assets/shop/rabbit-chew-toy.jpg';
import dogCollar from '../assets/shop/dog-collar.jpg';
import catLitterBox from '../assets/shop/cat-litter-box.jpg';

function ShopPage() {
        const [products, setProducts] = useState([]);
        const [filteredProducts, setFilteredProducts] = useState([]);
        const [searchTerm, setSearchTerm] = useState('');
        const [activeCategory, setActiveCategory] = useState('all');
        const [cart, setCart] = useState([]);
        const [isCartOpen, setIsCartOpen] = useState(false);
      
        useEffect(() => {
          const sampleProducts = [
            {
              id: 1,
              name: "Premium Dog Food",
              category: "food",
              petType: "dog",
              price: 2000,
              rating: 4.5,
              image: dogFood, 
              description: "High-quality nutrition for your dog"
            },

            {
              id: 1,
              name: "Premium Dog Food",
              category: "food",
              petType: "dog",
              price: 2000,
              rating: 4.5,
              image: dogFood,
              description: "High-quality nutrition for your dog."
            },
            {
              id: 2,
              name: "Cat Toy Ball",
              category: "toys",
              petType: "cat",
              price: 500,
              rating: 4.7,
              image: catToyBall,
              description: "Interactive toy ball for endless fun with your cat."
            },
            {
              id: 3,
              name: "Bird Cage Accessories Set",
              category: "accessories",
              petType: "bird",
              price: 1500,
              rating: 4.3,
              image: birdAccessories,
              description: "Complete set of bird cage accessories to keep your pet happy."
            },
            {
              id: 4,
              name: "Rabbit Hay Feeder",
              category: "accessories",
              petType: "rabbit",
              price: 1200,
              rating: 4.6,
              image: rabbitFeeder,
              description: "Hay feeder to keep your rabbit's food clean and organized."
            },
            {
              id: 5,
              name: "Dog Shampoo",
              category: "health",
              petType: "dog",
              price: 1000,
              rating: 4.8,
              image: dogShampoo,
              description: "Gentle and effective shampoo for a healthy coat."
            },
            {
              id: 6,
              name: "Cat Scratching Post",
              category: "toys",
              petType: "cat",
              price: 2500,
              rating: 4.4,
              image: catScratchingPost,
              description: "Durable scratching post to keep your cat entertained."
            },
            {
              id: 7,
              name: "Bird Vitamins",
              category: "health",
              petType: "bird",
              price: 800,
              rating: 4.5,
              image: birdVitamins,
              description: "Essential vitamins to boost your bird's health."
            },
            {
              id: 8,
              name: "Rabbit Chew Toy",
              category: "toys",
              petType: "rabbit",
              price: 600,
              rating: 4.2,
              image: rabbitChewToy,
              description: "Fun and safe chew toy for your rabbit's dental health."
            },
            {
              id: 9,
              name: "Dog Collar",
              category: "accessories",
              petType: "dog",
              price: 1500,
              rating: 4.9,
              image: dogCollar,
              description: "Stylish and comfortable dog collar for daily walks."
            },
            {
              id: 10,
              name: "Cat Litter Box",
              category: "health",
              petType: "cat",
              price: 3000,
              rating: 4.6,
              image: catLitterBox,
              description: "Easy-to-clean litter box for a hygienic environment."
            },
            
          ];
      
          setProducts(sampleProducts);
          setFilteredProducts(sampleProducts);
        }, []);
      
        const categories = [
          { id: 'all', name: 'All Items' },
          { id: 'food', name: 'Pet Food' },
          { id: 'toys', name: 'Toys' },
          { id: 'accessories', name: 'Accessories' },
          { id: 'health', name: 'Health & Hygiene' }
        ];
      
        const handleSearch = (e) => {
          const term = e.target.value.toLowerCase();
          setSearchTerm(term);
          filterProducts(term, activeCategory);
        };
      
        const filterProducts = (term, category) => {
          let filtered = products;
          if (category !== 'all') {
            filtered = filtered.filter(product => product.category === category);
          }
          if (term) {
            filtered = filtered.filter(product => 
              product.name.toLowerCase().includes(term) ||
              product.description.toLowerCase().includes(term)
            );
          }
          setFilteredProducts(filtered);
        };
      
        const addToCart = (product) => {
          setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
              return prev.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );
            }
            return [...prev, { ...product, quantity: 1 }];
          });
        };

        const ProductGrid = ({ products }) => (
          
          <motion.div 
            layout
            className={styles.productsGrid}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  opacity: { duration: 0.2 },
                  layout: { duration: 0.3 }
                }}
                className={styles.productCard}
              >
                <div className={styles.productImage}>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className={styles.productInfo}>
                  <div className={styles.productHeader}>
                    <h3>{product.name}</h3>
                    <div className={styles.rating}>
                      <Star className={styles.starIcon} />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  <p className={styles.productDescription}>{product.description}</p>
                  <div className={styles.productFooter}>
                    <span className={styles.price}>RS. {product.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={styles.addToCartButton}
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );

  return (
    <div className={styles.container}>
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.header}
      >
        <h1>Pet Shop</h1>
        <p>Everything your pet needs for a happy life</p>
      </motion.div>

      {/* Search and Cart */}
      <div className={styles.searchCartContainer}>
        <div className={styles.searchContainer}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search products..."
            className={styles.searchInput}
            onChange={handleSearch}
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={styles.cartButton}
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          <ShoppingCart />
          {cart.length > 0 && (
            <span className={styles.cartBadge}>
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </motion.button>
      </div>

     {/* Categories */}
     <div className={styles.categories}>
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${styles.categoryButton} ${
              activeCategory === category.id ? styles.active : ''
            }`}
            onClick={() => {
              setActiveCategory(category.id);
              filterProducts(searchTerm, category.id);
            }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Products Grid with AnimatePresence wrapper */}
      <AnimatePresence mode="wait">
        <ProductGrid products={filteredProducts} />
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className={styles.cartSidebar}
          >
            <div className={styles.cartContent}>
              <div className={styles.cartHeader}>
                <h2>Shopping Cart</h2>
                <button
                  className={styles.closeButton}
                  onClick={() => setIsCartOpen(false)}
                >
                  ×
                </button>
              </div>
              
              <div className={styles.cartItems}>
                {cart.map((item) => (
                  <div key={item.id} className={styles.cartItem}>
                    <img src={item.image} alt={item.name} />
                    <div className={styles.cartItemInfo}>
                      <h3>{item.name}</h3>
                      <p>Rs. {item.price}</p>
                    </div>
                    <div className={styles.quantityControls}>
                      <button className={styles.quantityButton}>
                        <Minus className={styles.quantityIcon} />
                      </button>
                      <span>{item.quantity}</span>
                      <button className={styles.quantityButton}>
                        <Plus className={styles.quantityIcon} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {cart.length > 0 ? (
                <div className={styles.cartFooter}>
                  <div className={styles.cartTotal}>
                    <span>Total:</span>
                    <span>
                      Rs. {cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}
                    </span>
                  </div>
                  <button className={styles.checkoutButton}>
                    Checkout
                  </button>
                </div>
              ) : (
                <div className={styles.emptyCart}>
                  Your cart is empty
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ShopPage;