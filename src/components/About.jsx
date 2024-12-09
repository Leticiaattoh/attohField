import { FaArrowAltCircleRight } from "react-icons/fa";
import pigfarm2 from "../assets/Images/pigfarm2.jpg";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

// Initialize AOS
AOS.init();

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full p-8 relative z-10 bg-[#84ca13b4]">
      {/* Image Section */}
      <div
        className="w-full md:w-1/3 flex justify-center md:justify-end p-4"
        data-aos="fade-in" // Scroll-triggered fade-in animation
        data-aos-duration="1000"
      >
        <img
          src={pigfarm2}
          alt="aboutImage"
          className="fade-in rounded-lg max-w-full h-[100%] shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div
        className="w-[90%] md:w-1/2 text-white md:pl-8 p-4"
        data-aos="slide-up" // Slide-up animation on scroll
        data-aos-duration="1000"
        data-aos-offset="100"
      >
        <p className="text-lg leading-relaxed">
          <span className="font-extrabold text-3xl">
            We have been doing this since 2020
          </span>
          <br />
          At AttohField, we are passionate about raising healthy, happy pigs in
          a sustainable environment. Our farm is committed to providing
          high-quality pork, ensuring that every product we offer is fresh,
          flavorful, and ethically sourced. With a focus on animal welfare and
          eco-friendly practices, we deliver farm-to-table products you can
          trust. From our family to yours, we take pride in the care we put into
          every step of our process, making sure you enjoy the finest pork for
          your meals.
        </p>

        {/* Read More Button */}
        <button className="flex items-center justify-center gap-2 border-2 border-white bg-[#3A703F] hover:bg-[#83CA13] focus:outline-none focus:ring border-1 px-4 py-2 mt-2 w-[200px] h-[50px] rounded-lg text-white font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105">
          Read More
          <FaArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};

export default About;
