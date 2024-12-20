
import React from 'react'
import About from '../components/About';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[15%] bg-[#A8DA58] ">
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;