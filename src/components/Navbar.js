import React, { useState } from "react";
import vneed from '../assets/images/vneed.jpg'

// --- Utility Components and Constants ---

// Placeholder URL for Vneed Pay Logo

// Inline SVGs for Icons (Replacing Heroicons)
const ChevronDown = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
  </svg>
);
const Bars3 = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);
const XMark = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Custom Dropdown Component (Replacing HeadlessUI Menu)
const Dropdown = ({ buttonContent, menuItems, flagUrl, textLabel }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full sm:w-auto mb-2 sm:mb-0">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="inline-flex items-center justify-between w-full sm:w-auto gap-x-1.5 px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-100 focus:outline-none rounded-full transition-colors"
      >
        {flagUrl && (
          <img
            src={flagUrl}
            alt={textLabel}
            className="w-6 h-6 rounded-full object-cover shadow-sm"
          />
        )}
        {/* Button content for desktop, or text label for mobile when flag is present */}
        {buttonContent || <span className="sm:hidden">{textLabel}</span>} 
        <ChevronDown
          aria-hidden="true"
          className={`-mr-1 size-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {/* Dropdown Menu - Simple Flyout */}
      {isOpen && (
        <div className="absolute right-0 sm:left-0 z-50 mt-1 w-48 origin-top-right rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {menuItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Utility component to render sub-links (used in desktop sub-nav and mobile flyout)
const SubLinks = ({ type, setMobileOpen }) => {
  const links = type === "personal" 
    ? [{ label: "Send Money", href: "/" }, { label: "Rate and Fees", href: "/loans"  }]
    : [{ label: "Make Payment", href: "/payments" }, { label: "Rate and Fees", href: "/loans"  }];
  
  return (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 px-2 sm:px-0 pt-2 sm:pt-0">
      {links.map(link => (
        <a
          key={link.label}
          href={link.href}
          className="text-gray-700 hover:text-teal-700 font-medium text-sm sm:text-base py-1"
          // Close mobile menu when a sub-link is clicked
          onClick={() => { if (setMobileOpen) setMobileOpen(false); }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

// --- Main Navbar Component ---

export default function Navbar() {
  const [active, setActive] = useState(null); // 'personal', 'business', or null (for sub-nav)
  const [mobileOpen, setMobileOpen] = useState(false); // Mobile menu visibility

  // Sample data for dropdowns
  const countryMenuItems = [
    { label: "United States", href: "/us" },
    { label: "United Kingdom", href: "/uk" },
    { label: "India", href: "/in" },
  ];
  const languageMenuItems = [
    { label: "Español", href: "/es" },
    { label: "Français", href: "/fr" },
    { label: "Hindi", href: "/hi" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center px-4 md:px-16 py-4 bg-white shadow-lg sticky top-0 z-50">
        
        {/* Logo and Personal/Business Toggles (Left Side) */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a href="/">
            <img 
              src={vneed}
              alt="Vneed Pay Logo"
              className="w-auto h-8 sm:h-10 rounded-full" 
            />
          </a>

          {/* Personal/Business Toggles - Desktop/Tablet View (sm:flex) */}
          <div className="hidden sm:flex bg-gray-100 text-black font-medium py-1 px-1 rounded-full items-center space-x-1 sm:space-x-2 text-sm sm:text-base shadow-inner">
            <span
              onClick={() => setActive("personal")}
              className={`cursor-pointer px-3 py-1 rounded-full transition-all duration-300 ${
                active === "personal"
                  ? "bg-white shadow-md font-semibold text-teal-700"
                  : "text-gray-600 hover:text-teal-700 hover:bg-gray-50"
              }`}
            >
              Personal
            </span>
            <span
              onClick={() => setActive("business")}
              className={`cursor-pointer px-3 py-1 rounded-full transition-all duration-300 ${
                active === "business"
                  ? "bg-white shadow-md font-semibold text-teal-700"
                  : "text-gray-600 hover:text-teal-700 hover:bg-gray-50"
              }`}
            >
              Business
            </span>
          </div>
        </div>

        {/* Mobile Menu Button (Hamburger/X) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden p-2 text-gray-700 hover:text-teal-700 focus:outline-none z-50 rounded-lg"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <XMark className="h-7 w-7" />
          ) : (
            <Bars3 className="h-7 w-7" />
          )}
        </button>

        {/* Main Navigation Links (Mobile Flyout & Desktop Right) */}
        {/* Added max-h-0 and max-h-[500px] for smooth mobile transition */}
        <div
          className={`flex flex-col sm:flex-row sm:flex items-center sm:space-x-4 text-lg font-medium 
            absolute sm:static bg-white sm:bg-transparent left-0 w-full sm:w-auto 
            px-4 md:px-0 pb-4 sm:pb-0 z-40 transition-all duration-300 ease-in-out origin-top
            ${mobileOpen
              ? "top-16 opacity-100 visible shadow-xl max-h-[500px]" // Visible on mobile
              : "top-[-500px] opacity-0 invisible sm:visible sm:opacity-100 sm:shadow-none sm:max-h-full" // Hidden on mobile
            }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
            
            {/* Mobile Personal/Business Toggles - Now clearly visible inside the opened menu */}
            <div className="flex sm:hidden justify-center space-x-4 py-4 mb-4 border-b border-gray-100 bg-gray-50 rounded-lg shadow-inner">
              <span
                onClick={() => setActive("personal")}
                className={`cursor-pointer px-4 py-2 rounded-full transition-colors duration-200 text-base shadow-sm ${
                  active === "personal"
                    ? "bg-teal-600 text-white font-semibold"
                    : "text-gray-700 border border-gray-300 hover:bg-gray-100"
                }`}
              >
                Personal
              </span>
              <span
                onClick={() => setActive("business")}
                className={`cursor-pointer px-4 py-2 rounded-full transition-colors duration-200 text-base shadow-sm ${
                  active === "business"
                    ? "bg-teal-600 text-white font-semibold"
                    : "text-gray-700 border border-gray-300 hover:bg-gray-100"
                }`}
              >
                Business
              </span>
            </div>

            {/* Sub-Navigation Links (FOR MOBILE) - Show nested links only if a toggle is active */}
            {active && (
              <div className="sm:hidden mb-4 pb-2 border-b border-gray-100">
                  <h3 className="text-sm font-bold text-teal-600 mb-2 pl-3">
                      {active === 'personal' ? 'Personal Services' : 'Business Services'}
                  </h3>
                  <SubLinks type={active} setMobileOpen={setMobileOpen} />
              </div>
            )}
            
            {/* Country and Language Dropdowns */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <Dropdown
                buttonContent={null}
                menuItems={countryMenuItems}
                flagUrl="https://flagcdn.com/w40/ca.png"
                textLabel="Canada"
              />
              <Dropdown
                buttonContent={null}
                menuItems={countryMenuItems} 
                flagUrl="https://flagcdn.com/w40/pk.png"
                textLabel="Pakistan"
              />
              <Dropdown
                buttonContent="English"
                menuItems={languageMenuItems}
                flagUrl={null}
                textLabel="English"
              />
            </div>
            
            {/* Action Links/Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-gray-200">
              <a
                href="/help"
                className="text-gray-700 hover:text-teal-700 font-medium py-2 sm:py-0 w-full sm:w-auto text-left sm:text-center"
                onClick={() => setMobileOpen(false)}
              >
                Help
              </a>
              <a 
                href="/login" 
                className="text-gray-700 hover:text-teal-700 font-medium py-2 sm:py-0 w-full sm:w-auto text-left sm:text-center"
                onClick={() => setMobileOpen(false)}
              >
                Log in
              </a>
              <a 
                href="/signup" 
                className="bg-teal-600 text-white px-4 py-2 mt-2 sm:mt-0 rounded-full hover:bg-teal-700 transition-colors w-full sm:w-auto text-center"
                onClick={() => setMobileOpen(false)}
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Sub-Navigation Menu (Desktop only, below main nav) */}
      <div
        className={`hidden sm:block overflow-hidden transition-all duration-500 ease-in-out ${
          active ? "max-h-32 opacity-100 shadow-lg" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex justify-start items-center bg-gray-50 py-3 sm:space-x-8 px-4 md:px-16">
          {active && <SubLinks type={active} />}
        </div>
      </div>
    </>
  );
}
