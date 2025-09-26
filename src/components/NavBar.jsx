import React, { useState } from 'react';
import {Link as ScrollLink} from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () =>setIsOpen(!isOpen)

  return (
    <nav className="bg-black shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-white">
            Portfolio.
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-medium">
            <ScrollLink className="text-white hover:text-blue-600 cursor-pointer" to="/" smooth={true} duration={500}>
              Home
            </ScrollLink>
            <ScrollLink className="text-white hover:text-blue-600 cursor-pointer" to="/about"  smooth={true} duration={500}>
              About
            </ScrollLink>
            <ScrollLink className="text-white hover:text-blue-600 cursor-pointer" to="/education"  smooth={true} duration={500}>
              Education
            </ScrollLink>
            <ScrollLink className="text-white hover:text-blue-600 cursor-pointer" to="/project"  smooth={true} duration={500}>
              Projects
            </ScrollLink>
            <ScrollLink className="text-white hover:text-blue-600 cursor-pointer" to="/certificates"  smooth={true} duration={500}>
              Certifications
            </ScrollLink>
            <ScrollLink className="text-white hover:text-blue-600 cursor-pointer" to="/contact"  smooth={true} duration={500}>
              Contact
            </ScrollLink>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden space-y-2 bg-black flex flex-col items-center shadow">
          <ScrollLink className="text-white hover:text-blue-600 cursor-pointer" to="/" smooth={true} duration={500}>
              Home
            </ScrollLink>
            <ScrollLink className="text-white hover:text-blue-600 cursor-pointer" to="/about"  smooth={true} duration={500}>
              About
            </ScrollLink>
            <ScrollLink className="text-white hover:text-blue-600 cursor-pointer" to="/education"  smooth={true} duration={500}>
              Education
            </ScrollLink>
            <ScrollLink className="text-white hover:text-blue-600 cursor-pointer" to="/project"  smooth={true} duration={500}>
              Projects
            </ScrollLink>
            
            <ScrollLink className="text-white hover:text-blue-600 cursor-pointer" to="/contact"  smooth={true} duration={500}>
              Contact
            </ScrollLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
