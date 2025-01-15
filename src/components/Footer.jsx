import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { faTiktok } from "@fortawesome/free-brands-svg-icons/faTiktok";

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <footer className="bg-gray-900 p-6 pt-[5%]">
      <div className="container mx-auto justify-center flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
        {/* Quick Links */}
        <div className="flex flex-col items-start space-y-2 text-left">
          <h4 className="text-base text-white font-bold">Quick Links</h4>

          <Link
            className="text-gray-400 hover:text-[#83CA13] text-sm"
            to="/Shop-now"
          >
            Shop Now
          </Link>

          {/* Dropdown for Branches */}
          <div className="relative group">
            <button
              onClick={toggleDropdown}
              className="text-gray-400 hover:text-[#83CA13]  text-sm flex items-center gap-1"
            >
              Branches
              <span className="text-xs">▼</span>
            </button>
            <div
              className={`absolute top-full left-0 mt-1 bg-gray-700 h-[22vh] shadow-lg rounded-lg py-2 ${
                isDropdownOpen ? "block" : "hidden"
              } group-hover:block`}
            >
              <ul>
                <li>
                  <Link
                    to=""
                    className="block px-4 py-2 text-gray-400 hover:text-[#83CA13] text-sm"
                  >
                    Lartebiokorshie-+233548453002/ +233249277113
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="block px-4 py-2 text-gray-400 hover:text-[#83CA13] text-sm"
                  >
                    Spintex-+233543344036
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col items-start space-y-2 text-left">
          <h4 className="text-base text-white font-bold">Legal</h4>
          <Link
            to="/privacy-policy"
            className="text-gray-400 hover:text-[#83CA13] text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-gray-400 hover:text-[#83CA13] text-sm"
            to="/terms"
          >
            Terms of Service
          </Link>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-start space-y-2 text-left">
          <h4 className="text-base text-white font-bold">Contact Us</h4>

          <a
            href="mailto:attohfields@gmail.com"
            className="text-gray-400 hover:text-[#83CA13] text-sm"
          >
            Email: attohfields@gmail.com
          </a>
          <p className="text-gray-400 hover:text-[#83CA13] text-sm">
            Phone: +233249277113
          </p>
          <p className="text-gray-400 hover:text-[#83CA13] text-sm">
            Address: Lartebiokorshie, Accra
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 pt-6 justify-center pb-4 w-full">
        <a
          href="https://www.instagram.com/attohfield.gh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#83CA13] transition-transform duration-300 hover:scale-150"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-sm" />
        </a>
        <a
          href="https://x.com/attohfield?s=21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#83CA13] transition-transform duration-300 hover:scale-150"
        >
          <FontAwesomeIcon icon={faXTwitter} className="text-sm" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#83CA13] transition-transform duration-300 hover:scale-150"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-sm" />
        </a>
        <a
          href="https://web.facebook.com/people/Attoh-Field/61556844487316/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#83CA13] transition-transform duration-300 hover:scale-150"
        >
          <FontAwesomeIcon icon={faFacebook} className="text-sm" />
        </a>
        <a
          href="https://www.tiktok.com/@attohfield?_t=ZM-8t5Cw867Xr4&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#83CA13] transition-transform duration-300 hover:scale-150"
        >
          <FontAwesomeIcon icon={faTiktok} className="text-sm" />
        </a>
      </div>

      {/* Copyright Notice */}
      <div className="text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Attohfield. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
