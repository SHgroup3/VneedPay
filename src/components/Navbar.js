import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuButton } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import vneed from '../assets/images/vneed.jpg'


export default function Navbar() {
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-4 md:px-16 py-4 bg-white shadow-md">
        {/* Logo and Personal/Business Toggles (Left Side) */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <img 
            src={vneed}
            alt="vneed"
            className="w-auto h-8 sm:h-10 rounded-full" // Adjusted logo size for mobile
          />

          {/* Personal/Business Toggles - Hide on mobile, show on sm and up */}
          <div className="hidden sm:flex bg-white text-black font-bold py-2 px-3 sm:py-3 sm:px-4 rounded-full items-center space-x-2 sm:space-x-4 shadow-md text-sm sm:text-base">
            <span
              onClick={() =>
                setActive(active === "personal" ? null : "personal")
              }
              className={`cursor-pointer transition-transform duration-300 ${
                active === "personal"
                  ? "scale-105 font-semibold text-teal-600" // Added color for active state
                  : "opacity-80 hover:text-teal-600"
              }`}
            >
              Personal
            </span>
            <div className="w-[1px] sm:w-[2px] h-4 sm:h-6 bg-gray-300" />
            <span
              onClick={() =>
                setActive(active === "business" ? null : "business")
              }
              className={`cursor-pointer transition-transform duration-300 ${
                active === "business"
                  ? "scale-105 font-semibold text-teal-600" // Added color for active state
                  : "opacity-80 hover:text-teal-600"
              }`}
            >
              Business
            </span>
          </div>
        </div>

        {/* Mobile Menu Button (Hamburger/X) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden p-2 text-gray-700 hover:text-teal-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>

        {/* Main Navigation Links (Right Side) */}
        <div
          className={`flex-col sm:flex-row sm:flex items-center sm:space-x-4 text-lg font-bold 
            absolute sm:static bg-white sm:bg-transparent left-0 w-full sm:w-auto 
            px-4 md:px-0 pb-4 sm:pb-0 z-40 transition-all duration-300 ease-in-out 
            ${mobileOpen
              ? "top-16 opacity-100 visible shadow-lg" // Visible on mobile
              : "top-[-500px] opacity-0 invisible sm:visible sm:opacity-100 sm:shadow-none" // Hidden on mobile
            }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
            
            {/* Mobile Personal/Business Toggles - Show on mobile, hide on sm and up */}
            <div className="flex sm:hidden justify-around py-3 mb-2 border-b border-gray-100">
              <span
                onClick={() => setActive(active === "personal" ? null : "personal")}
                className={`cursor-pointer px-4 py-2 rounded-full transition-colors duration-200 text-base ${
                  active === "personal"
                    ? "bg-teal-100 text-teal-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Personal
              </span>
              <span
                onClick={() => setActive(active === "business" ? null : "business")}
                className={`cursor-pointer px-4 py-2 rounded-full transition-colors duration-200 text-base ${
                  active === "business"
                    ? "bg-teal-100 text-teal-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Business
              </span>
            </div>

            {/* Country Dropdowns */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <Menu as="div" className="relative inline-block w-full sm:w-auto mb-2 sm:mb-0">
                <MenuButton className="inline-flex items-center justify-between w-full sm:w-auto gap-x-1.5 px-3 py-2 text-base font-semibold text-black hover:bg-gray-100 focus:outline-none rounded-full transition-colors">
                  <img
                    src="https://flagcdn.com/w40/ca.png"
                    alt="Canada"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="sm:hidden">Canada</span> {/* Text label for mobile */}
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 size-5 text-gray-400"
                  />
                </MenuButton>
                {/* MenuItems would go here */}
              </Menu>

              <Menu as="div" className="relative inline-block w-full sm:w-auto mb-2 sm:mb-0">
                <MenuButton className="inline-flex items-center justify-between w-full sm:w-auto gap-x-1.5 px-3 py-2 text-base font-semibold text-black hover:bg-gray-100 focus:outline-none rounded-full transition-colors">
                  <img
                    src="https://flagcdn.com/w40/pk.png"
                    alt="Pakistan"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="sm:hidden">Pakistan</span> {/* Text label for mobile */}
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 size-5 text-gray-400"
                  />
                </MenuButton>
                {/* MenuItems would go here */}
              </Menu>

              <Menu as="div" className="relative inline-block w-full sm:w-auto mb-2 sm:mb-0">
                <MenuButton className="inline-flex items-center justify-between w-full sm:w-auto gap-x-1.5 px-3 py-2 text-base font-semibold text-black hover:bg-gray-100 focus:outline-none rounded-full transition-colors">
                  English
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 size-5 text-gray-400"
                  />
                </MenuButton>
                {/* MenuItems would go here */}
              </Menu>
            </div>
            
            {/* Action Links/Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 sm:mt-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
              <Link
                to="/help"
                className="text-gray-700 hover:text-teal-700 font-medium py-2 sm:py-0 w-full sm:w-auto"
              >
                Help
              </Link>
              <button className="text-gray-700 hover:text-teal-700 font-medium py-2 sm:py-0 w-full sm:w-auto text-left sm:text-center">
                Log in
              </button>
              <button className="bg-teal-600 text-white px-4 py-2 mt-2 sm:mt-0 rounded-full hover:bg-teal-700 transition-colors w-full sm:w-auto">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Sub-Navigation Menu (Personal/Business Links) */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          active ? "max-h-32 opacity-100 shadow-lg" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center bg-gray-50 py-3 space-y-2 sm:space-y-0 sm:space-x-8 px-4 md:px-16">
          {active === "personal" && (
            <>
              <Link
                to="/"
                className="text-gray-700 hover:text-teal-700 font-medium text-sm sm:text-base"
              >
                Send Money
              </Link>
              <Link
                to="/loans"
                className="text-gray-700 hover:text-teal-700 font-medium text-sm sm:text-base"
              >
                Rate and Fees
              </Link>
            </>
          )}
          {active === "business" && (
            <>
              <Link
                to="/payments"
                className="text-gray-700 hover:text-teal-700 font-medium text-sm sm:text-base"
              >
                Make Payment
              </Link>
              <Link
                to="/loans"
                className="text-gray-700 hover:text-teal-700 font-medium text-sm sm:text-base"
              >
                Rate and Fees
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}