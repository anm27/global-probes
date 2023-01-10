import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Services />
    </div>
  );
};

export default HomePage;
