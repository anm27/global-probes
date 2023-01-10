import React, { useState } from "react";
import { GoMail } from "react-icons/go";
import { MdPhoneInTalk } from "react-icons/md";
import { NavLink } from "react-router-dom";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [showMobileNav] = useState("false");

  const primaryColor = "#11cbd7";
  //   const primaryColorDark = "#02c5d1";

  return (
    <>
      {/* Mobile, Tablet Header */}
      {showMobileNav && <MobileHeader />}

      {/* Header Large Screens */}
      <div className="smd:hidden lg:flex justify-between items-center lg:px-32 sm:px-4 py-4 tracking-widest">
        <header className="flex items-center flex-row space-x-7">
          <img
            className="h-12"
            src={require("../images/global-probes-logo.png")}
            alt="Logo"
          />

          <div className="flex ">
            <div className="flex items-center space-x-2 border-r-2 border-gray-200 pr-8">
              <GoMail color={primaryColor} size={20} />
              <h2 className="text-gray-500">SEND MESSAGE</h2>
            </div>

            <div className="flex items-center space-x-2 pl-7">
              <MdPhoneInTalk color={primaryColor} size={20} />
              <h2 className="text-gray-500">+(12) 3456 7890</h2>
            </div>
          </div>
        </header>
        <nav>
          <ul className="flex space-x-6">
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
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
