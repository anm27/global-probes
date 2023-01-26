import React from "react";
import { MdOutlineClose } from "react-icons/md";

const FormModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="z-50 relative">
      <div className="fixed inset-0 bg-opacity-75 backdrop-blur-sm flex items-center justify-center">
        <form className="p-5 pb-10 pt-10 w-full max-w-lg border-gray-600 shadow-lg bg-gray-600 bg-opacity-75 m-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-extrabold text-gray-900">
              Request Quote
            </h1>

            <MdOutlineClose
              className="mt-2"
              size={35}
              onClick={() => onClose()}
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Full Name
              </label>
              <input
                type="text"
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Email
              </label>
              <input
                type="email"
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Contact Number
              </label>
              <input
                type="number"
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Enter your contact number"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                City
              </label>
              <input
                type="text"
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Enter your city"
              />
            </div>
          </div>

          <div className="relative mb-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Select Service
            </label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              defaultValue="Select Services"
            >
              <option>Website Content</option>
              <option>SEO Content</option>
              <option>Academic Content</option>
              <option>Product Description</option>
              <option>Others</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 mt-5">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-2 md:mb-0">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="file"
                type="file"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Country
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
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
          <button className="w-full border-gray-200 bg-headingColor py-2 px-3 pr-8">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
