import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { GoMail } from "react-icons/go";
import { MdPhoneInTalk } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { motion } from "framer-motion";

const MobileHeader = () => {
  const primaryColor = "#11cbd7";
  const [showMobileNav, setShowMobileNav] = useState("false");
  let showMobileHeader = () => {
    setShowMobileNav((current) => !current);
  };

  return (
    <>
      {showMobileNav && (
        <motion.div className="smd:flex w-full items-center lg:hidden xs:px-12 sm:px-8 py-4 justify-between">
          <header className="items-center">
            <img
              className="h-12"
              src={require("../images/global-probes-logo.png")}
              alt="Logo"
            />
          </header>
          <TbGridDots onClick={showMobileHeader} size={32} />
        </motion.div>
      )}
      {!showMobileNav && (
        <div className="fixed z-50 w-full">
          <motion.div className="bg-transparent h-100vh">
            <div className="smd:flex items-center lg:hidden xs:px-12 sm:px-8 py-4 justify-between">
              <header className="flex items-center flex-row space-x-7">
                <img
                  className="h-12"
                  src={require("../images/global-probes-logo.png")}
                  alt="Logo"
                />
              </header>
              <ImCancelCircle
                onClick={showMobileHeader}
                color="white"
                size={32}
              />
            </div>
            <nav>
              <ul className="block items-center text-center text-2xl space-y-16">
                <li>
                  <NavLink
                    to="/"
                    className="hover:text-primaryColor tracking-wider font-semibold hover:font-semibold text-gray-500"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className="hover:text-primaryColor tracking-wider font-semibold hover:font-semibold text-gray-500"
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="about"
                    className="hover:text-primaryColor tracking-wider font-semibold hover:font-semibold text-gray-500"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="contact"
                    className="hover:text-primaryColor tracking-wider font-semibold hover:font-semibold text-gray-500"
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="blogs"
                    className="hover:text-primaryColor tracking-wider font-semibold hover:font-semibold text-gray-500"
                  >
                    Blogs
                  </NavLink>
                </li>
                <div className="flex items-center justify-center pb-12 px-2">
                  <div className="flex items-center space-x-2 border-r-2 pr-8">
                    <GoMail color={primaryColor} size={20} />
                    <h2 className="text-gray-500 md:text-xs">SEND MESSAGE</h2>
                  </div>

                  <div className="flex items-center space-x-2 pl-7">
                    <MdPhoneInTalk color={primaryColor} size={20} />
                    <h2 className="text-gray-500 md:text-xs">
                      +(12) 3456 7890
                    </h2>
                  </div>
                </div>
              </ul>
            </nav>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
