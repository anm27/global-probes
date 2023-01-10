import React from "react";
import { CgWebsite } from "react-icons/cg";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import { MdSocialDistance } from "react-icons/md";

const Services = () => {
  const primaryColor = "#11cbd7";
  return (
    <div className="bg-sectionBgColor items-center justify-between tracking-widest lg:py-12 md:py-7">
      <h2 className="text-center pb-6 text-2xl text-gray-500 tracking-wider">
        Categories
      </h2>
      <div className="text-center space-y-10">
        <h2 className="font-bold med:text-6xl md:text-3xl text-headingColor">
          Content Writing Services
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

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
    </div>
  );
};

export default Services;
