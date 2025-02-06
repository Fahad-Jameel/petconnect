import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PetAdoption from './pages/PetAdoption';
function App() {
  return (
    <Router>
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/petadoption" element={<PetAdoption />} />
            {/* <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} /> */}
      </Routes>      
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;