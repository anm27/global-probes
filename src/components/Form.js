import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Form = () => {
  return (
    <div>
      <form className="lg:w-10/12 p-4">
        <h1 className="text-4xl mb-4 font-semibold">Let's work together</h1>
        <p className="mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown
        </p>
        <div className="flex -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="flex -mx-3 mb-5">
          <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 mb-2 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                defaultValue="Select Services"
              >
                <option selected>Select Services</option>
                <option>Website Content</option>
                <option>SEO Content</option>
                <option>Academic Content</option>
                <option>Product Description</option>
                <option>Others</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 px-2">
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
          ></textarea>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-center text-center space-x-2 mdm:px-9 sml:px-4 sml:text-xs py-3 bg-primaryColor text-white rounded-sm">
            <button className="text-base">SEND MESSAGE</button>
            <BsArrowRight />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
