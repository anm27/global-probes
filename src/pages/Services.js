import React from "react";
import Header from "../components/Header";
import { CgWebsite } from "react-icons/cg";
import { FaTshirt, FaRegHandPointRight } from "react-icons/fa";
import { GiMagnifyingGlass } from "react-icons/gi";
import { MdSocialDistance } from "react-icons/md";
import Footer from "../components/Footer";

const Services = () => {
  const primaryColor = "#253334";
  return (
    <div>
      <Header />
      <div className="bg-sectionBgColor lg:space-x-6 md:flex md:flex-col-reverse md:text-start lg:flex lg:px-32 lg:py-14 items-center justify-between lg:h-650 tracking-widest">
        <div className="md:px-4 md:pb-6">
          <div className="block space-y-6 lg:w-508 leading-loose">
            <h2 className="text-xl">What we do</h2>
            <div className="w-full bg-text-bg bg-cover bg-center">
              <h1
                className="font-bold med:text-2xl md:text-xl md:p-10 med:p-10 text-headingColor"
                style={{ lineHeight: 2 }}
              >
                Write better content creation
              </h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </div>
        </div>
        <div className="relative lg:w-656 m-5">
          <img
            className="w-full lg:h-96 ml-auto mr-auto mb-12 object-cover"
            src={require("../images/services-banner.jpg")}
            alt="Hero Banner"
          />
          <div className="absolute med:-bottom-6 med:right-10 md:bottom-2 md:right-2 shadow-md p-5 bg-white rounded-md w-64 items-center justify-center">
            <div className="flex items-center space-x-2">
              <FaRegHandPointRight size={64} color="gold" />
              <div className="block space-y-2">
                <h2 className="font-bold text-4xl">99%</h2>
                <h2>Pass Copyscape</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sectionBgColor items-center justify-between tracking-widest lg:py-12 md:py-7">
        <h2 className="text-center pb-6 text-2xl text-gray-500 tracking-wider">
          Categories
        </h2>
        <div className="text-center w-full bg-text-bg bg-cover bg-center">
          <h2 className="font-bold med:text-2xl md:text-xl md:p-4 med:p-4 text-headingColor">
            Content Writing Services
          </h2>
        </div>
        <p className="md:p-4 med:p-10 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="lg:flex md:grid gap-10 my-10 justify-center">
          <div className="bg-white px-10 py-10 rounded-sm shadow-sm mx-4 space-y-4">
            <div className="flex items-center space-x-6">
              <CgWebsite size={52} color={primaryColor} />
              <h2 className="font-semibold text-2xl">Website Content</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
          </div>
          <div className="bg-white px-10 py-10 rounded-sm shadow-sm mx-4 space-y-4">
            <div className="flex items-center space-x-6">
              <GiMagnifyingGlass size={52} color={primaryColor} />
              <h2 className="font-semibold text-2xl">SEO Content</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
          </div>
        </div>

        <div className="lg:flex md:grid gap-10 my-10 justify-center">
          <div className="bg-white px-10 py-10 rounded-sm shadow-sm mx-4 space-y-4">
            <div className="flex items-center space-x-6">
              <FaTshirt size={52} color={primaryColor} />
              <h2 className="font-semibold text-2xl">Product Description</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
          </div>
          <div className="bg-white px-10 py-10 rounded-sm shadow-sm mx-4 space-y-4">
            <div className="flex items-center space-x-6">
              <MdSocialDistance size={52} color={primaryColor} />
              <h2 className="font-semibold text-2xl">Social Media Content</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
          </div>
        </div>

        <div className="lg:flex md:grid gap-10 my-10 justify-center">
          <div className="bg-white px-10 py-10 rounded-sm shadow-sm mx-4 space-y-4">
            <div className="flex items-center space-x-6">
              <FaTshirt size={52} color={primaryColor} />
              <h2 className="font-semibold text-2xl">Blog Content</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
          </div>
          <div className="bg-white px-10 py-10 rounded-sm shadow-sm mx-4 space-y-4">
            <div className="flex items-center space-x-6">
              <MdSocialDistance size={52} color={primaryColor} />
              <h2 className="font-semibold text-2xl">eCommerce Solution</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
