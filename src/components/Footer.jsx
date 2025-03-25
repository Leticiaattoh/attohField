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
      {/* <div className="container mx-auto justify-center flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12"> */}

      <div className="container mx-auto justify-center grid grid-cols-1 md:grid-cols-3 gap-4 items-center space-y-12 md:space-y-0 md:space-x-8 text-center md:text-left">
        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
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
              className="text-gray-400 hover:text-[#83CA13] text-sm flex items-center gap-1"
            >
              Branches
              <span className="text-xs">▼</span>
            </button>
            <div
              className={`absolute top-full left-0 mt-1 bg-gray-700 h-[22vh] shadow-lg rounded-lg py-2 ${
                isDropdownOpen ? "block" : "hidden"
              } group-hover:block`}
            >
              <div>
                <p className="block px-4 py-2 text-gray-400 hover:text-[#83CA13] text-sm">
                  <strong>Lartebiokorshie:</strong>
                  <a href="tel:+233249277113" className="hover:underline">
                    +233249277113
                  </a>
                </p>
                <p className="block px-4 py-2 text-gray-400 hover:text-[#83CA13] text-sm">
                  <strong>Spintex:</strong>
                  <a href="tel:+233543344036" className="hover:underline">
                    +233543344036
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
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
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="text-base text-white font-bold">Contact Us</h4>

          <p>
            <a
              href="https://www.google.com/maps/place/ATTOHFIELD/@5.548546,-0.230458,13z/data=!4m6!3m5!1s0xfdf975242f8080d:0x807b9e806509472a!8m2!3d5.5485464!4d-0.2304581!16s%2Fg%2F11vx13xptf?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#6CC531] text-sm"
            >
              Address: Attohfield Main Office & Sales Point
            </a>
          </p>

          <a
            href="mailto:attohfields@gmail.com"
            className="text-gray-400 hover:text-[#83CA13] text-sm"
          >
            Email: attohfields@gmail.com
          </a>

          <p className="text-gray-400 hover:text-[#83CA13] text-sm">
            Phone:
            <a href="tel:+233249277113" className="hover:underline">
              +233249277113
            </a>
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 pt-10 justify-center pb-4 w-full">
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
