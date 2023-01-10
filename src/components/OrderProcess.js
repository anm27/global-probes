import React from "react";
import { GiNotebook, GiReceiveMoney } from "react-icons/gi";
import { TbCloudComputing } from "react-icons/tb";

const OrderProcess = () => {
  const primaryColor = "#0279d0";
  return (
    <div className="relative">
      <div className="bg-fixed-image w-full med:h-80vh xs:h-96 bg-cover bg-center pt-20">
        <h2 className="med:text-5xl xs:text-3xl text-headingColor font-bold text-center tracking-wide">
          Simple Order Process
        </h2>
      </div>
      <div className="absolute med:-bottom-24 xs:top-72 pb-10">
        <div className="med:flex med:mx-36 med:px-16 med:py-12 xs:mx-5 xs:px-5 xs:py-12 xs:grid gap-9 bg-white rounded-md shadow-sm">
          <div className="block px-8 bg-white relative text-start tracking-wider">
            <h3 className="absolute med:-top-22 med:right-10 xs:top-1 xs:right-4 xs:text-2xl med:text-7xl font-semibold text-headingColor">
              01
            </h3>
            <GiNotebook className="mb-4" color={primaryColor} size={50} />
            <h2 className="font-semibold text-xl mb-4 text-headingColor">
              Request a Quote
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
            </p>
          </div>
          <div className="block px-8 bg-white relative text-start tracking-wider">
            <h3 className="absolute med:-top-22 med:right-10 xs:top-1 xs:right-4 xs:text-2xl med:text-7xl font-semibold text-headingColor">
              02
            </h3>
            <TbCloudComputing className="mb-4" color={primaryColor} size={50} />
            <h2 className="font-semibold text-xl mb-4 text-headingColor">
              Select Services
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
            </p>
          </div>
          <div className="block px-8 bg-white relative text-start tracking-wider">
            <h3 className="absolute med:-top-22 med:right-10 xs:top-1 xs:right-4 xs:text-2xl med:text-7xl font-semibold text-headingColor">
              03
            </h3>
            <GiReceiveMoney className="mb-4" color={primaryColor} size={50} />
            <h2 className="font-semibold text-xl mb-4 text-headingColor">
              Receive Your Order
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProcess;
