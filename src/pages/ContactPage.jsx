import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className='lg:mt-[10%] sm:[15%]'>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;