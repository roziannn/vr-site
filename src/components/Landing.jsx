import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Workflow from "../components/Workflow";
import Price from "../components/Price";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Workflow />
      <Price />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Landing;
