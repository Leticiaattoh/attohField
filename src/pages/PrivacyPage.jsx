import Navbar from "../components/Navbar";
import React from "react";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";

const PrivacyPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Privacy Policy | Attohfield</title>
        <meta name="description" content="We are here to protect you!" />
      </Helmet>
      <ScrollRestoration />
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default PrivacyPage;
