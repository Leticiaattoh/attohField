import attohFeild from "../assets/Images/attohField.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex flex-col md:flex-row justify-between items-center px-2 py-2 bg-[#3A703F]">
        <div className="flex gap-2">
          <div className="flex items-center mb-2 md:mb-0">
            <img
              src={attohFeild}
              alt="attohField Logo"
              className="h-10 w-10 ml-4 border-1 rounded-full"
            />

            <div className="text-sm font-extrabold text-white ml-2">
              AttohFeild
            </div>
          </div>
          {/* <button className="bg-[#4a9852] hover:bg-[#83CA13]  transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring border-1 px-2 py-1 rounded-lg text-white font-bold text-sm shadow-2xl">
            Login
          </button> */}
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 justify-end w-full ">
          <a
            href="https://www.instagram.com/attohfield.gh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-lg text-white hover:text-[#83CA13] transition-transform duration-300 hover:scale-150"
            />
          </a>
          <a
            href="https://twitter.com/i/flow/login?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-lg text-white hover:text-[#83CA13]  transition-transform duration-300 hover:scale-150"
            />
          </a>
          <a
            href="https://www.linkedin.com/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-lg text-white hover:text-[#83CA13]  transition-transform duration-300 hover:scale-150"
            />
          </a>
          <a
            href="https://web.facebook.com/people/Attoh-Field/61556844487316/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-lg text-white hover:text-[#83CA13]  transition-transform duration-300 hover:scale-150"
            />
          </a>
        </div>
      </div>

      <div className="bg-[#83CA13] text-white shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2">
          {/* <div className="flex items-center mb-2 md:mb-0">
            <img
              src={attohFeild}
              alt="attohField Logo"
              className="h-10 w-10 ml-4 border-1 rounded-full"
            />

            <div className="text-sm font-extrabold text-white ml-2">
              AttohFeild
            </div>
          </div> */}
          <div className="flex gap-4 list-none  font-extrabold justify-center w-full text-sm md:text-md lg:text-lg ">
            <Link to="/">
              <li className="no-underline  hover:underline  transition-transform duration-300 hover:scale-105">
                Home
              </li>
            </Link>
            <li className="no-underline  hover:underline transition-transform duration-300 hover:scale-105">
              About
            </li>
            <li className="no-underline  hover:underline transition-transform duration-300 hover:scale-105">
              Products
            </li>
            <li className="no-underline  hover:underline transition-transform duration-300 hover:scale-105">
              Contact
            </li>
          </div>
          {/* <div className="flex gap-2 mr-5">
            <FaSearch /> <FaShoppingCart />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
