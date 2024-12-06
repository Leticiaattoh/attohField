import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-6 pt-[5%]">
      <div className="container mx-auto  justify-center flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
        {/* Quick Links */}
        <div className="flex flex-col items-start  space-y-2 text-left">
          <h4 className="text-base text-white font-bold">Quick Links</h4>

          <Link
            className="text-gray-400 hover:text-[#83CA13]  text-sm"
            to="/ShopNow"
          >
            Shop Now
          </Link>
          <Link
            className="text-gray-400 hover:text-[#83CA13]  text-sm"
            to="/Branches"
          >
            Branches
          </Link>
          <Link
            className="text-gray-400 hover:text-[#83CA13]  text-sm"
            to="Feedback"
          >
            Feedback
          </Link>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col items-start space-y-2 text-left">
          <h4 className="text-base text-white font-bold">
            Subscribe to our Newsletter
          </h4>
          <input
            type="email"
            placeholder="Your email"
            className="p-1 rounded bg-gray-800 text-white text-sm"
          />
          <button className="bg-[#83CA13] hover:bg-[#4a9852] text-white p-1 rounded text-sm  transition-transform duration-300 hover:scale-105">
            Subscribe
          </button>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-start space-y-2 text-left">
          <h4 className="text-base text-white font-bold">Contact Us</h4>
          <p className="text-gray-400 text-sm">Email: info@attohField.com</p>
          <p className="text-gray-400 text-sm">Phone: 05543344036</p>
          <p className="text-gray-400 text-sm">
            Address: Lartebiokorshie, Accra
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 pt-6 justify-center pb-4 w-full">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#83CA13] transition-transform duration-300 hover:scale-150 "
        >
          <FontAwesomeIcon icon={faXTwitter} className="text-sm" />
        </a>
        <a
          href="https://web.facebook.com/people/Attoh-Field/61556844487316/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#83CA13]  transition-transform duration-300 hover:scale-150 "
        >
          <FontAwesomeIcon icon={faFacebook} className="text-sm" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#83CA13]  transition-transform duration-300 hover:scale-150 "
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-sm" />
        </a>
        <a
          href="https://www.instagram.com/attohfield.gh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#83CA13]  transition-transform duration-300 hover:scale-150 "
        >
          <FontAwesomeIcon icon={faInstagram} className="text-sm" />
        </a>
      </div>

      {/* Copyright Notice */}
      <div className="text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} attohField. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
