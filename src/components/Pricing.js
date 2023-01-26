import React from "react";
import { GoRocket } from "react-icons/go";
import { MdBusinessCenter, MdOutlineBusinessCenter } from "react-icons/md";

const Pricing = () => {
  return (
    <>
      <div className="bg-white items-center justify-between tracking-widest lg:pt-52 md:pt-108 md:py-7">
        <h2 className="text-center text-2xl text-gray-500 pb-6 tracking-wider">
          Pricing
        </h2>
        <div className="flex items-center justify-center">
          <h2 className="font-bold med:text-2xl md:text-xl md:py-8 med:py-8 pl-12 pr-12 text-headingColor text-center bg-text-bg bg-cover bg-center">
            Content Writing Plan
          </h2>
        </div>
        <p className="md:p-4 med:p-10 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="lg:flex md:grid md:space-y-4 items-center justify-center mb-6 tracking-wider leading-10">
        <div className="border-gray-700 p-10 bg-lightColorPricing grid text-center items-center">
          <MdBusinessCenter size={85} className="m-auto" />
          <h2 className="text-2xl m-4 font-bold">Starter</h2>
          <button className="mx-14 my-4 py-3 uppercase text-base font-semibold bg-white rounded-sm">
            Purchase
          </button>
          <h3 className="text-base font-semibold m-2">Unique Content</h3>
          <h3 className="text-base font-semibold m-2">Copyscape Pass</h3>
          <h3 className="text-base font-semibold m-2">500 Words</h3>
          <div className="flex items-baseline justify-center m-2">
            <h2 className="font-bold text-5xl">
              <span className="text-2xl">₹</span> 999 /
            </h2>

            <h2 className="font-bold text-2xl">Month</h2>
          </div>
        </div>

        <div className="border-gray-700 p-14 bg-headingColor grid text-center items-center">
          <MdOutlineBusinessCenter size={85} className="m-auto" />
          <h2 className="text-2xl m-4 font-bold">Business</h2>
          <button className="mx-14 my-4 py-3 uppercase text-base font-semibold bg-white rounded-sm">
            Purchase
          </button>
          <h3 className="text-base font-semibold m-2">Unique Content</h3>
          <h3 className="text-base font-semibold m-2">Copyscape Pass</h3>
          <h3 className="text-base font-semibold m-2">1000 Words</h3>
          <h3 className="text-base font-semibold m-2">Free photo stock</h3>
          <h3 className="text-base font-semibold m-2">Deep Research</h3>
          <h3 className="text-base font-semibold m-2">Certified Writer</h3>
          <div className="flex items-baseline justify-center m-2">
            <h2 className="font-bold text-5xl">
              <span className="text-2xl">₹</span> 1999 /
            </h2>

            <h2 className="font-bold text-2xl">Month</h2>
          </div>
        </div>

        <div className="border-gray-700 p-10 bg-lightColorPricing grid text-center items-center">
          <GoRocket size={85} className="m-auto" />
          <h2 className="text-2xl m-4 font-bold">Advance</h2>
          <button className="mx-14 my-4 py-3 uppercase text-base font-semibold bg-white rounded-sm">
            Purchase
          </button>
          <h3 className="text-base font-semibold m-2">All Business Features</h3>
          <h3 className="text-base font-semibold m-2">2000 Words</h3>
          <h3 className="text-base font-semibold m-2">Professional Writer</h3>
          <div className="flex items-baseline justify-center m-2">
            <h2 className="font-bold text-5xl">
              <span className="text-2xl">₹</span> 2999 /
            </h2>

            <h2 className="font-bold text-2xl">Month</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
