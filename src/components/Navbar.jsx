import { useState } from "react";
import attohField2 from '../assets/Images/attohField2.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons/faTiktok";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-2 py-2 bg-[#3A703F]">
        {/* Logo and Company Name */}
        <div className="flex items-center gap-2">
          <img
            src={attohField2}
            alt="AttohField Logo"
            className="h-14 w-14 border-1 rounded-full"
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/attohfield.gh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-white hover:text-[#83CA13] transition-transform duration-300 hover:scale-150"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://x.com/attohfield?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-white hover:text-[#83CA13] transition-transform duration-300 hover:scale-150"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-white hover:text-[#83CA13] transition-transform duration-300 hover:scale-150"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://web.facebook.com/people/Attoh-Field/61556844487316/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-white hover:text-[#83CA13] transition-transform duration-300 hover:scale-150"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.tiktok.com/@attohfield?_t=ZM-8t5Cw867Xr4&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-white hover:text-[#83CA13] transition-transform duration-300 hover:scale-150"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-[#83CA13] text-white shadow-lg">
        <div className="flex justify-between items-center px-4 py-2 md:px-6">
          {/* Welcome Text for Mobile */}
          <div className="text-sm font-extrabold text-white md:hidden">
            Welcome to Attohfield!
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex gap-4 list-none font-extrabold justify-between w-full text-sm md:text-md lg:text-lg">
            {/* Welcome Text on the Left */}
            <div className="text-sm font-extrabold text-white">
              Welcome to Attohfield!
            </div>

            {/* Navigation Links */}
            <div className="flex gap-4">
              <Link
                to="/"
                className="no-underline hover:underline transition-transform duration-300 hover:scale-105"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="no-underline hover:underline transition-transform duration-300 hover:scale-105"
              >
                About
              </Link>
              <Link
                to="/shop-now"
                className="no-underline hover:underline transition-transform duration-300 hover:scale-105"
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="no-underline hover:underline transition-transform duration-300 hover:scale-105"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Hamburger Menu Button (Right) */}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none md:hidden"
          >
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>

        {/* Mobile Menu (Opens from the Right) */}
        <div
          className={`fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-[#83CA13] text-white flex flex-col items-start justify-start px-4 pt-6 transform transition-transform duration-300 md:hidden ${
            menuActive ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setMenuActive(false)}
            className="self-end text-2xl text-white mb-4 focus:outline-none"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <Link
            to="/"
            onClick={() => setMenuActive(false)}
            className="block py-2 no-underline hover:underline font-extrabold transition-transform duration-300 hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuActive(false)}
            className="block py-2 no-underline hover:underline font-extrabold transition-transform duration-300 hover:scale-105"
          >
            About
          </Link>
          <Link
            to="/shop-now"
            onClick={() => setMenuActive(false)}
            className="block py-2 no-underline hover:underline font-extrabold transition-transform duration-300 hover:scale-105"
          >
            Products
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuActive(false)}
            className="block py-2 no-underline hover:underline font-extrabold transition-transform duration-300 hover:scale-105"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
