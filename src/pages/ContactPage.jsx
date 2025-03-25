import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Contact | Attohfield</title>
        <meta name="description" content="Contact us, we are here to help!" />
      </Helmet>
      <ScrollRestoration />
      <Navbar />
      <div className="lg:mt-[10%] sm:[15%]">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
