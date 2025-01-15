import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import ShopNow from '../components/ShopNow';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet";

const LandingPage = () => {
  return (
    <div>
      <Helmet>
        <title> Home | Attohfield</title>
        <meta
          name="description"
          content="Welcome to the Attohfield family!"
        />
      </Helmet>
      <Navbar />
      <Hero />
      <div className="mt-[10%]">
        <About />
      </div>
      <div className="mt-[10%]">
        <Products />
      </div>
      <div className="mt-[10%]">
        <ShopNow />
      </div>
      <div className="mt-[10%]">
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;