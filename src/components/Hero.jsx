import { FaArrowAltCircleRight } from "react-icons/fa";
import hero from "../assets/Images/hero.jpeg"

const Hero = () => {

  return (
    <div className="relative w-full h-screen">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40  to-black/55 z-10"></div>
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="absolute inset-0 bg-cover bg-center"
      ></div>
      {/* Overlay Text */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full text-white px-4 text-center">
        <p className="text-xl md:text-2xl lg:text-3xl mb-4">
          Pure & Organic Pork
        </p>
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
          We deliver Fresh Pork!
        </h1>

        <button className="flex items-center justify-center gap-5 bg-[#3A703F] hover:bg-[#83CA13] focus:outline-none focus:ring border-1 px-4 py-2 w-[250px] h-[70px] rounded-lg text-white font-bold text-3xl shadow-2xl">
          Discover
          <span className="mt-2"> 
            <FaArrowAltCircleRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
