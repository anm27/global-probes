import React from "react";
import { AiFillStar } from "react-icons/ai";

const About = () => {
  //   const primaryColor = "#11cbd7";

  return (
    <>
      <div className="lg:space-x-10 flex md:block md:text-start lg:px-32 lg:py-28 tracking-widest">
        <h2 className="text-start py-6 px-4 text-2xl med:hidden text-primaryColor tracking-wider">
          About
        </h2>
        <div className="relative lg:w-656">
          <img
            className="w-full lg:h-96 object-cover ml-auto mr-auto mt-4 mb-12 object-center"
            src={require("../images/about-banner.jpg")}
            alt="Hero Banner"
          />
          <div className="absolute med:-bottom-6 med:right-32 md:-bottom-10 md:left-2 shadow-md p-5 bg-white rounded-md w-64 items-center justify-center">
            <div className="flex items-center space-x-6">
              <AiFillStar size={64} color="gold" />
              <div className="block space-y-2">
                <h2 className="font-bold text-4xl">4.95</h2>
                <h2>Client Reviews</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="block space-y-6 lg:w-600 leading-loose">
            <h2 className="text-start pl-1 text-2xl md:hidden text-primaryColor tracking-wider">
              About
            </h2>
            <h1 className="font-bold med:text-6xl md:text-3xl text-headingColor">
              Experienced writer service company
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
