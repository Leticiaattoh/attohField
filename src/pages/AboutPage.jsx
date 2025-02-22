
// import React from 'react'
// import About from '../components/About';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';


// const AboutPage = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="pt-[15%] bg-[#A8DA58] ">
//         <About />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default AboutPage;

import React from "react";
import { Helmet } from "react-helmet";
import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ScrollRestoration } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>About Us | Attohfield</title>
        <meta
          name="description"
          content="Learn more about Attohfield, our mission, values, and team."
        />
      </Helmet>
      <ScrollRestoration />
      <Navbar />
      <div className="pt-[15%] bg-[#A8DA58] ">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
