import  Navbar  from '../components/Navbar';
import React from 'react'
import ShopNow from '../components/ShopNow';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ShopNowPage = () => {
  return (
    <div>
      <Navbar />
      <ShopNow />
      <Link to="/">
        <div className=' flex justify-center items-center'>
          <button className="flex items-center justify-center mx-0 my-0 border-2 border-white bg-[#3A703F] hover:bg-[#83CA13] focus:outline-none focus:ring border-1 px-4 py-2 w-[200px] h-[35px] transition-transform duration-300 hover:scale-105 rounded-lg text-white font-bold text-xl shadow-2xl">
            Back to home
            <span className="mt-2"></span>
          </button>
        </div>
      </Link>
      <Footer />
    </div>
  );
}

export default ShopNowPage;