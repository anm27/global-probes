import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import OrderProcess from "../components/OrderProcess";
import Pricing from "../components/Pricing";
import Questions from "../components/Questions";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Questions />
      <OrderProcess />
      <Pricing />
      <Footer />
    </div>
  );
};

export default HomePage;
