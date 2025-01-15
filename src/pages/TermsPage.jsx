import React from "react";
import Navbar from "../components/Navbar";
import TermsOfService from "../components/TermsOfServices";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const TermsPage = () => {
  return (
    <div>
      <Helmet>
        <title> Terms Of Service | Attohfield</title>
        <meta
          name="description"
          content="Our terms, Our bond!"
        />
      </Helmet>
      <Navbar />
      <TermsOfService />
      <Footer />
    </div>
  );
};

export default TermsPage;
