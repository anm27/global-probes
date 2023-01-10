import React from "react";
import { Disclosure } from "@headlessui/react";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

const Questions = () => {
  return (
    <div className="bg-white lg:space-x-6 xs:block md:flex md:text-start lg:flex lg:px-40 items-center justify-between py-20 tracking-widest">
      <div className="md:px-4 md:py-6">
        <div className="block space-y-6 lg:w-508 leading-loose">
          <h2 className="text-start opacity-50 text-2xl text-primaryColor tracking-wider">
            Questions
          </h2>
          <h1 className="font-bold med:text-4xl md:text-2xl text-headingColor">
            Well organize content
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar leo .
          </p>
          <div className="xs:flex smd:grid gap-4">
            <div className="flex items-center justify-center text-center space-x-2 mdm:px-9 sml:px-4 sml:text-xs py-3 bg-primaryColor text-white rounded-sm">
              <button className="text-base">OUR SERVICES</button>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="mx-auto w-full max-w-md xs:grid gap-3 rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-primaryColor px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-primaryColor focus-visible:ring-opacity-75">
                  <span className="tracking-wider">
                    Can I get sample of your works?
                  </span>
                  <FiChevronUp
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 tracking-wider">
                  Velit aliquet sagittis id consectetur purus ut faucibus. Nulla
                  malesuada pellentesque elit eget gravida cum sociis. Arcu ac
                  tortor dignissim convallis aenean et tortor at risus.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-primaryColor px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-primaryColor focus-visible:ring-opacity-75">
                  <span className="tracking-wider">
                    How long can I get my order?
                  </span>
                  <FiChevronUp
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 tracking-wider">
                  Velit aliquet sagittis id consectetur purus ut faucibus. Nulla
                  malesuada pellentesque elit eget gravida cum sociis. Arcu ac
                  tortor dignissim convallis aenean et tortor at risus.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-primaryColor px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-primaryColor focus-visible:ring-opacity-75">
                  <span className="tracking-wider">
                    Do your services pass Copyscape?
                  </span>
                  <FiChevronUp
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 tracking-wider">
                  Velit aliquet sagittis id consectetur purus ut faucibus. Nulla
                  malesuada pellentesque elit eget gravida cum sociis. Arcu ac
                  tortor dignissim convallis aenean et tortor at risus.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-primaryColor px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-primaryColor focus-visible:ring-opacity-75">
                  <span className="tracking-wider">
                    I need high quality SEO content every week.
                  </span>
                  <FiChevronUp
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 tracking-wider">
                  Velit aliquet sagittis id consectetur purus ut faucibus. Nulla
                  malesuada pellentesque elit eget gravida cum sociis. Arcu ac
                  tortor dignissim convallis aenean et tortor at risus.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-primaryColor px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-primaryColor focus-visible:ring-opacity-75">
                  <span className="tracking-wider">
                    Can I get personal writer for my projects?
                  </span>
                  <FiChevronUp
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 tracking-wider">
                  Velit aliquet sagittis id consectetur purus ut faucibus. Nulla
                  malesuada pellentesque elit eget gravida cum sociis. Arcu ac
                  tortor dignissim convallis aenean et tortor at risus.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default Questions;
