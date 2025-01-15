import Navbar from "../components/Navbar";
import React from "react";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const PrivacyPage = () => {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy | Attohfield</title>
        <meta name="description" content="We are here to protect you!" />
      </Helmet>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default PrivacyPage;
