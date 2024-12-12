
import { useState } from "react";
import attohFeild from "../assets/Images/attohField.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Top Navbar */}
      <div className="flex flex-wrap justify-between items-center px-2 py-2 bg-[#3A703F]">
        {/* Logo and Company Name */}
        <div className="flex items-center gap-2">
          <img
            src={attohFeild}
            alt="attohField Logo"
            className="h-10 w-10 border-1 rounded-full"
          />
          {/* <div className="text-sm font-extrabold text-white">AttohField</div> */}
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
            href="https://twitter.com/i/flow/login?lang=en"
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
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-[#83CA13] text-white shadow-lg">
        <div className="flex justify-between items-center px-4 py-2 md:px-6">
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none md:hidden"
          >
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-4 list-none font-extrabold justify-center w-full text-sm md:text-md lg:text-lg">
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

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-[#83CA13] text-white flex flex-col items-start justify-start px-4 pt-6 transform transition-transform duration-300 md:hidden ${
            menuActive ? "translate-x-0" : "translate-x-full"
          }`}
        >
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

