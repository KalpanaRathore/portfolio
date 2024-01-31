import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Services />
      <ServicesSection/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
