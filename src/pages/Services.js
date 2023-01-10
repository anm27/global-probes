import { Disclosure } from "@headlessui/react";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Header from "../components/Header";

const Services = () => {
  return (
    <div>
      <Header />
      <Disclosure
        as="div"
        key="service"
        className="border-t border-gray-200 px-4 py-6"
      >
        {({ open }) => (
          <>
            <h3 className="-mx-2 -my-3 flow-root">
              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                <span className="font-medium text-gray-900">Name</span>
                <span className="ml-6 flex items-center">
                  {open ? (
                    <AiOutlineMinus className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <AiOutlinePlus className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
              </Disclosure.Button>
            </h3>
            <Disclosure.Panel className="pt-6">
              <div className="space-y-6">
                <div key="something" className="flex items-center">
                  <input
                    defaultValue="Hi"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="You"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Hey You
                  </label>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Services;
