import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import FormModal from "./forms/FormModal";

const HeroSection = () => {
  const primaryColor = "#253334";
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-sectionBgColor lg:space-x-6 md:flex md:flex-col-reverse md:text-start lg:flex lg:px-32 lg:py-14 items-center justify-between lg:h-650 tracking-widest">
        <div className="md:px-4 md:py-6">
          <div className="block space-y-6 lg:w-508 leading-loose">
            <div className="w-full bg-text-bg bg-cover bg-center">
              <h1
                className="font-bold med:text-2xl md:text-xl md:p-10 med:p-10 text-headingColor"
                style={{ lineHeight: 2 }}
              >
                Certified content writing service
              </h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar leo .
            </p>
            <div className="xs:flex smd:grid gap-4 ">
              <Link to="/services">
                <div className="flex items-center justify-center text-center space-x-2 mdm:px-9 sml:px-3 sml:text-base py-3 bg-primaryColor text-white rounded-sm">
                  <button className="lg:text-base">OUR SERVICES</button>
                  <BsArrowRight />
                </div>
              </Link>
              <div
                className="flex items-center justify-center space-x-2 px-4 cursor-pointer hover:bg-headingColor hover:text-white"
                onClick={() => setShowModal(true)}
              >
                <HiOutlinePencil size={24} />
                <h2 className="lg:text-base">REQUEST A QUOTE</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:w-656">
          <img
            className="w-full lg:h-96 ml-auto mr-auto mb-12 object-cover"
            src={require("../images/hero-banner.jpg")}
            alt="Hero Banner"
          />
          <div className="absolute med:-bottom-6 med:-left-10 md:bottom-2 md:left-2 shadow-md p-5 bg-white rounded-md w-64 items-center justify-center">
            <div className="flex items-center space-x-2">
              <TiTick size={24} color={primaryColor} />
              <h2>Website Content</h2>
            </div>
            <div className="flex items-center space-x-2">
              <TiTick size={24} color={primaryColor} />
              <h2>SEO Article</h2>
            </div>
            <div className="flex items-center space-x-2">
              <TiTick size={24} color={primaryColor} />
              <h2>Product Description</h2>
            </div>
          </div>
        </div>
      </div>
      <FormModal isVisible={showModal} onClose={setShowModal} />
    </>
  );
};

export default HeroSection;
