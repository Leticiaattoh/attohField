import React from "react";
import Navbar from "../components/Navbar";
import TermsOfService from "../components/TermsOfServices";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";

const TermsPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title> Terms Of Service | Attohfield</title>
        <meta name="description" content="Our terms, Our bond!" />
      </Helmet>
      <ScrollRestoration />
      <Navbar />
      <TermsOfService />
      <Footer />
    </div>
  );
};

export default TermsPage;
