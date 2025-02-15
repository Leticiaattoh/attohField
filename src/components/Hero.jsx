
import hero from "../assets/Images/hero.jpeg";
import pigfarm9 from "../assets/Images/pigfarm9.jpg";
import pigfarm6 from "../assets/Images/pigfarm6.jpg";
import attohfield3 from "../assets/Images/attohfield3.jpg"
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Carousel
      className="h-screen w-full mx-auto rounded-[2%] overflow-y-hidden"
      transition={{ duration: 0.5 }}
      autoplay="true"
      autoplayDelay={4000}
      loop="true"
    >
      {/* slider1 */}
      <div className="relative w-full h-[80vh] md:h-screen bg-white">
        {/* Background Image */}
        <div
          style={{ backgroundImage: `url(${attohfield3})` }}
          className="absolute inset-0 bg-cover bg-center"
        ></div>

        {/* Overlay */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-2xl font-bold md:text-5xl text-black drop-shadow-lg">
            Welcome to AttohField
          </h1>

          <p className="mt-4 px-4 py-1 text-lg font-semibold text-black bg-[#83CA13] rounded-full">
            Premium Quality Pork, Fresh from Our Farm to Your Table
          </p>

          <p className="mt-4 max-w-2xl text-gray-900 mb-[10%] text-sm md:text-base leading-relaxed">
            From juicy pork chops to tender ribs and grills, our meat is packed
            with
            <span className="hidden md:inline">
              {" "}
              <br />{" "}
            </span>
            flavor and nutrition. Whether you're a restaurant, butcher, or home
            <span className="hidden md:inline">
              {" "}
              <br />{" "}
            </span>
            cook, we guarantee pork that meets the highest standards.
          </p>
        </div>
      </div>

      {/* slider2 */}
      <div className="relative w-full h-screen">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/55 z-10"></div>
        <div
          style={{ backgroundImage: `url(${hero})` }}
          className="absolute inset-0 bg-cover bg-center"
        ></div>
        {/* Overlay Text */}
        <div className="relative z-20 flex flex-col lg:ml-10 lg:items-start md:items-center justify-center h-full text-white px-4 text-center">
          <p className="text-xl md:text-2xl  lg:ml-1 lg:text-3xl mb-4">
            Pure & Organic Pork
          </p>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
            Savor the Flavor of Quality Pork!
          </h1>
          <Link to="/shop-now">
            <button className="flex mx-auto sm:ml-[20%] items-center justify-center gap-5 border-2 border-white bg-[#3A703F] hover:bg-[#83CA13] focus:outline-none focus:ring border-1 px-4 py-2 w-[250px] h-[70px] transition-transform duration-300 hover:scale-105 rounded-lg text-white font-bold text-3xl shadow-2xl">
              Discover
              <span className="mt-2">
                <FaArrowAltCircleRight />
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* slider3 */}
      <div className="relative w-full h-screen">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/55 z-10"></div>
        <div
          style={{ backgroundImage: `url(${pigfarm9})` }}
          className="absolute inset-0 bg-cover bg-center"
        ></div>
        {/* Overlay Text */}
        <div className="relative z-20 flex flex-col  lg:ml-10 lg:items-start md:items-center justify-center h-full text-white px-4 text-center">
          <p className="text-xl md:text-2xl lg:text-3xl mb-4">
            Pure & Organic Pork
          </p>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
            Take your tastebuds on an adventure!
          </h1>
          <Link to="/shop-now">
            <button className="flex mx-auto sm:ml-[20%] items-center justify-center gap-5 border-2 border-white bg-[#3A703F] hover:bg-[#83CA13] focus:outline-none focus:ring border-1 px-4 py-2 w-[250px] h-[70px] transition-transform duration-300 hover:scale-105 rounded-lg text-white font-bold text-3xl shadow-2xl">
              Discover
              <span className="mt-2">
                <FaArrowAltCircleRight />
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* slider3 */}
      <div className="relative w-full h-screen">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/55 z-10"></div>
        <div
          style={{ backgroundImage: `url(${pigfarm6})` }}
          className="absolute inset-0 bg-cover bg-center"
        ></div>
        {/* Overlay Text */}
        <div className="relative  lg:ml-10 z-20 flex flex-col lg:items-start md:items-center justify-center h-full text-white px-4 text-center">
          <p className="text-xl md:text-2xl lg:ml-1 lg:text-3xl mb-4">
            Pure & Organic Pork
          </p>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
            Purely Pork, Perfectly Fresh!
          </h1>
          <Link to="/shop-now">
            <button className="flex mx-auto sm:ml-[20%] items-center justify-center gap-5 border-2 border-white bg-[#3A703F] hover:bg-[#83CA13] focus:outline-none focus:ring border-1 px-4 py-2 w-[250px] h-[70px] transition-transform duration-300 hover:scale-105 rounded-lg text-white font-bold text-3xl shadow-2xl">
              Discover
              <span className="mt-2">
                <FaArrowAltCircleRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
