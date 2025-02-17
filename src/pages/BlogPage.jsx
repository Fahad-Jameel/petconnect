


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  Heart, 
  Share2, 
  BookmarkPlus, 
  ChevronRight,
  Search,
  Filter,
  X,
  Facebook,
  Twitter,
  Link as LinkIcon
} from 'lucide-react';
import styles from './css/BlogPage.module.css';

function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "Fur-tastic Grooming: Keep Your Pet Looking Fresh and Fabulous!",
      excerpt: "Your pet deserves to be looking fly 24/7! Whether it's a dog, cat, or any fur baby, grooming is essential for keeping them healthy and stylish.",
      category: "Grooming",
      readTime: "8 min read",
      image: "/images/grooming.jpg",
      likes: 245,
      content: {
        "title": "Fur-tastic Grooming: Keep Your Pet Looking Fresh and Fabulous!",
        "introduction": "Your pet deserves to be looking fly 24/7! Whether it's a dog, cat, or any fur baby, grooming is essential for keeping them healthy and stylish. This guide spills the tea on everything from setting up your grooming station to choosing the right pet grooming supplies that are totally on fleek.",
        "steps": [
          {
            "step_title": "Set Up Your Grooming Station",
            "content": "Before you start, create a chill space for your pet. Make sure it's well-lit and stocked with all the essential grooming tools.",
            "tip": "Search for 'pet grooming supplies online' to snag the best deals on clippers, brushes, and shampoos."
          },
          {
            "step_title": "Clean and Brush Regularly",
            "content": "Regular brushing removes loose hair and prevents matting. A quick bath keeps your pet smelling fresh and feeling great!",
            "tip": "For stubborn mats, try a detangling spray that works wonders without harming your pet's fur."
          },
          {
            "step_title": "Trim and Style",
            "content": "Not every pet needs a full haircut, but a trim can do wonders. Focus on areas like paws, ears, and around the eyes for that on-point look.",
            "tip": "Use pet-friendly scissors and take your time for a smooth, precise trim."
          },
          {
            "step_title": "Reward and Bond",
            "content": "Grooming isn't just about looking good—it's about bonding. Reward your pet with treats and lots of praise to make it a fun, stress-free session.",
            "tip": "A happy pet is a well-groomed pet. Keep the vibe chill and positive!"
          }
        ],
        "bonus": {
          "title": "Bonus: Must-Have Grooming Accessories",
          "content": "Upgrade your grooming game with these extra cool accessories:",
          "must_have_accessories": [
            "High-quality pet clippers for a smooth trim",
            "Detangling sprays and conditioners",
            "Soft, absorbent towels for a quick dry",
            "Interactive grooming tools that keep your pet engaged"
          ]
        },
        "final_thoughts": {
          "content": "A well-groomed pet isn't just a beauty icon—it's a happy, healthy companion. Follow these tips to keep your pet looking fresh and feeling fabulous every day.",
          "closing": "When your pet looks good, you both feel amazing! 🐾✨"
        }
      }
    },
    { id: 2,
      title: "Pawesome Training Tips: Build a Bond with Your Pet",
      excerpt: "Training your pet is more than just teaching tricks—it's about creating an epic bond and making memories that last.",
      category: "Training",
      readTime: "10 min read",
      image: "/images/training.jpg",
      likes: 189,
      content: {
        "title": "Pawesome Training Tips: Build a Bond with Your Pet and Level Up Your Pet Parenting Game!",
        "introduction": "Training your pet is more than just teaching tricks—it's about creating an epic bond and making memories that last. Whether you're a newbie or a seasoned pet parent, our guide is here to help you train your fur baby in a fun, engaging, and totally lit way.",
        "steps": [
          {
            "step_title": "Start with the Basics",
            "content": "Every pet needs a solid foundation. Kick off with simple commands like 'sit', 'stay', and 'come' to set the stage for more advanced tricks.",
            "tip": "Keep commands short and clear. Use lots of praise to make the sessions super effective."
          },
          {
            "step_title": "Use Positive Reinforcement",
            "content": "Rewards are the ultimate game-changer! Whether it's treats, high-fives, or a fun play session, positive vibes go a long way in reinforcing good behavior.",
            "tip": "Opt for tasty, low-calorie treats to keep your pet motivated without overindulging."
          },
          {
            "step_title": "Socialize and Play",
            "content": "Expose your pet to different environments and other furry friends. This boosts their confidence and makes training a lot more exciting.",
            "tip": "Join local pet groups or enroll in a training class to give your pet a chance to mingle and learn."
          },
          {
            "step_title": "Keep It Fun and Engaging",
            "content": "Training should never be a drag. Mix up routines with games, challenges, and interactive sessions to keep your pet on their toes.",
            "tip": "Switch up activities and try new tricks to keep both you and your pet hyped about learning."
          }
        ],
        "bonus": {
          "title": "Bonus: Must-Have Training Gear",
          "content": "Elevate your training sessions with these essential gear picks:",
          "must_have_accessories": [
            "Tasty, low-calorie treats for effective rewards",
            "A durable clicker for precision training",
            "Interactive toys that double as training tools",
            "Portable water bottle for those long sessions on the go"
          ],
          "note": "Discover the best pet training accessories in our store to make every session a success."
        },
        "final_thoughts": {
          "content": "Training is a journey that strengthens the bond between you and your pet. With these tips, you'll see progress in no time and have a blast along the way.",
          "cta": "Ready to become the ultimate pet trainer? Check out our training accessories and start your journey today!",
          "closing": "Turn training time into quality time and watch your pet shine! 🐾🔥"
        }
      }
      
    },
    {
      id: 3,
      title: "Pawsome Life Hacks: How to Adopt a Pet & Be the Coolest Pet Parent Ever!",
      excerpt: "Adopting a pet is not just about bringing home a cute furball—it's about finding a loyal companion who'll love you unconditionally.",
      category: "Adoption",
      readTime: "12 min read",
      image: "/images/adoption.jpg",
      likes: 321,
      content: {
        
            "title": "Pawsome Life Hacks: How to Adopt a Pet & Be the Coolest Pet Parent Ever!",
            "introduction": "Adopting a pet is not just about bringing home a cute furball—it’s about finding a loyal companion who’ll love you unconditionally. Whether you're looking for puppies for adoption, kittens for adoption, or rescue pets, this guide will help you navigate the process like a pro. Plus, we’ll spill the tea on how to pick the best pet accessories to keep your new bestie happy and stylish!",
            "steps": [
              {
                "step_title": "Choose the Right Pet for Your Lifestyle",
                "content": "Before searching for pets for adoption near me, ask yourself: What kind of pet fits your daily routine?",
                "pet_options": {
                  "dogs": "Perfect for active individuals who love walks, playtime, and endless loyalty. Looking for a new pup? Check out dog adoption centers or rescue shelters in your area.",
                  "cats": "Independent, low-maintenance, and ideal for small spaces. If you’re looking for a kitten for adoption, many animal shelters have adorable felines waiting for homes.",
                  "small_pets": "Bunnies, guinea pigs, and hamsters are great options if you prefer smaller, easy-to-care-for pets."
                },
                "tip": "Search for 'pet adoption near me' or visit your local animal rescue center to find your ideal furry friend."
              },
              {
                "step_title": "Prepare Your Home for Your New Pet",
                "content": "Bringing home a pet means getting your space pet-proofed. Here’s what you’ll need:",
                "checklist": [
                  "Pet food & water bowls – Choose high-quality, non-toxic materials.",
                  "A comfy pet bed – Essential for their comfort and security.",
                  "Pet grooming supplies – Brushes, nail clippers, and shampoos to keep them fresh.",
                  "Toys & scratching posts – Because bored pets = troublemakers!"
                ],
                "note": "If you’re wondering where to get the best pet supplies in Pakistan, check out our online store for high-quality pet accessories and pet food at great prices."
              },
              {
                "step_title": "Adoption Day – The First Meeting!",
                "content": "When you visit a pet shelter or browse online pet adoption sites, keep an eye on how a pet interacts with you:",
                "pet_behavior": {
                  "excited_tail_wags": "They already love you.",
                  "curious_sniffing": "They’re checking you out (in a good way).",
                  "cautious_but_calm": "Give them time—they’ve been through a lot."
                },
                "tip": "If you’re adopting a rescue pet, remember that patience is key. These pets may take a little longer to trust, but once they do, their love is unmatched."
              },
              {
                "step_title": "Settling Your Pet Into Their New Home",
                "content": "The first few days are crucial. Your pet is adjusting, so make the transition smooth with these tips:",
                "tips": [
                  "Stick to a feeding schedule with high-quality pet food brands.",
                  "Give them their own space with a cozy pet bed.",
                  "Use positive reinforcement (treats = instant friendship).",
                  "Take them for a vet checkup ASAP to ensure they’re healthy."
                ],
                "note": "Looking for premium dog food, cat food, or pet health products? Check out our store for top-rated pet care essentials in Pakistan."
              },
              {
                "step_title": "Be the Best Pet Parent Ever!",
                "content": "Owning a pet is a lifelong commitment, so be ready to provide them with the best care:",
                "care_tips": [
                  "Regular Vet Visits – Keep their vaccinations up to date.",
                  "Proper Nutrition – Choose the best pet food for their breed and size.",
                  "Exercise & Playtime – A tired pet is a happy pet!",
                  "Training & Socialization – Teach them commands and expose them to new experiences."
                ]
              }
            ],
            "bonus": {
              "title": "Drip Your Pet Out with the Best Accessories!",
              "content": "Who says pets can’t be stylish? Whether it’s a trendy collar, a cozy sweater, or a fun toy, the right accessories can make your pet’s life even better.",
              "must_have_accessories": [
                "Trendy pet collars & leashes – Keep them safe & stylish.",
                "Personalized name tags – Because your pet is a VIP.",
                "Comfy pet beds & blankets – Aesthetic and cozy.",
                "Fun interactive toys – Keep them entertained and active."
              ],
              "note": "Looking for the best pet accessories in Pakistan? Check out our store for the cutest, most durable products for your furry friend!"
            },
            "final_thoughts": {
              "content": "Adopting a pet is a life-changing experience filled with love, laughter, and unforgettable moments. Whether you're looking for a dog for adoption, a cat for adoption, or other rescue animals, now is the perfect time to give a fur baby a forever home.",
              "cta": "If you're ready to start your adoption journey, explore our Pet Adoption Listings Here and find your perfect match today!",
              "closing": "Your future best friend is waiting. 🐾❤️"
            }
          }
          
      
      }
    

  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleOpenArticle = (post) => {
    setSelectedBlog(post);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseArticle = () => {
    setSelectedBlog(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <motion.header 
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Pet Care Blog</h1>
        <p>Tips, tricks, and tales for pet parents</p>
      </motion.header>

      {/* Search and Filter Section */}
      <motion.div 
        className={styles.searchSection}
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <div className={styles.searchBar}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Filter className={styles.filterIcon} />
        </div>
        
        <div className={styles.categories}>
          {['All', 'Grooming', 'Training', 'Adoption', 'Health', 'Nutrition'].map((category, index) => (
            <motion.button
              key={category}
              className={styles.categoryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Featured Article */}
      <motion.div 
        className={styles.featuredArticle}
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        onClick={() => handleOpenArticle(blogPosts[0])}
      >
        <div className={styles.featuredContent}>
          <span className={styles.featuredTag}>Featured</span>
          <h2>{blogPosts[0].title}</h2>
          <p>{blogPosts[0].excerpt}</p>
          <div className={styles.articleMeta}>
            <span><Clock size={16} /> {blogPosts[0].readTime}</span>
            <span><Heart size={16} /> {blogPosts[0].likes}</span>
          </div>
          <motion.button 
            className={styles.readMoreBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More <ChevronRight size={16} />
          </motion.button>
        </div>
        <div className={styles.featuredImage} />
      </motion.div>

      {/* Blog Grid */}
      <motion.div 
        className={styles.blogGrid}
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
        {blogPosts.map((post) => (
          <motion.article
            key={post.id}
            className={styles.blogCard}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -10 }}
            onClick={() => handleOpenArticle(post)}
          >
            <div className={styles.cardImage} />
            <div className={styles.cardContent}>
              <span className={styles.category}>{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              
              <div className={styles.cardMeta}>
                <div className={styles.metaLeft}>
                  <span><Clock size={14} /> {post.readTime}</span>
                  <span><Heart size={14} /> {post.likes}</span>
                </div>
                <div className={styles.metaRight}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <BookmarkPlus size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Share2 size={16} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Newsletter Section */}
      <motion.section 
        className={styles.newsletter}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest pet care tips and tricks!</p>
        <div className={styles.subscribeForm}>
          <input type="email" placeholder="Enter your email" />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </div>
      </motion.section>

      {/* Full Article View */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            className={styles.articleOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.fullArticle}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
            >
              <button 
                className={styles.articleClose}
                onClick={handleCloseArticle}
              >
                <X size={24} />
              </button>

              <header className={styles.articleHeader}>
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedBlog.content.title}
                </motion.h2>
              </header>

              <div className={styles.articleContent}>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedBlog.content.introduction}
                </motion.p>

                {selectedBlog.content.steps.map((step, index) => (
                  <motion.div
                    key={step.step_title}
                    className={styles.articleStep}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <h3>{step.step_title}</h3>
                    <p>{step.content}</p>
                    <div className={styles.articleTip}>
                      <strong>Pro Tip:</strong> {step.tip}
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  className={styles.bonusSection}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <h3>{selectedBlog.content.bonus.title}</h3>
                  <p>{selectedBlog.content.bonus.content}</p>
                  <ul>
                    {selectedBlog.content.bonus.must_have_accessories.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className={styles.finalThoughts}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <p>{selectedBlog.content.final_thoughts.content}</p>
                  <p>{selectedBlog.content.final_thoughts.closing}</p>
                </motion.div>

                <motion.div
                  className={styles.sharebar}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.button
                    className={styles.shareButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Facebook size={16} /> Share
                  </motion.button>
                  <motion.button
                    className={styles.shareButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Twitter size={16} /> Tweet
                  </motion.button>
                  <motion.button
                    className={styles.shareButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <LinkIcon size={16} /> Copy Link
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BlogPage;