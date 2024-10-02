"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const isActive = (href) => pathname === href ? 'text-gray-800' : 'text-white hover:text-gray-800';
  const isMobileActive = (href) => pathname === href ? 'text-blue-500' : 'text-black';

  return (
    <nav className="bg-blue-500 shadow-lg fixed top-[120px] left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 sm:h-16">
          <div className="hidden lg:flex justify-center flex-1 items-center">
            <div className="oswald flex space-x-4 lg:space-x-8">
              <Link href="/" className={`${isActive('/')} font-medium px-2 py-1 text-sm lg:text-lg`}>
                Home
              </Link>
              <Link href="/about" className={`${isActive('/about')} font-medium px-2 py-1 text-sm lg:text-lg`}>
                About Us
              </Link>
              <div className="relative group">
                <button
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => setIsServicesHovered(false)}
                  className={`${pathname.startsWith('/services') ? 'text-white' : 'text-white hover:text-black'} font-medium px-2 py-1 text-sm lg:text-lg focus:outline-none flex items-center`}
                >
                  Services
                  <svg
                    className={`ml-1 h-4 w-4 lg:h-5 lg:w-5 transform transition-transform duration-300 ease-in-out ${isServicesHovered ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-blue-500 ring-1 ring-black ring-opacity-5 z-50 focus:outline-none invisible group-hover:visible transition-all duration-300 ease-in-out">
                  <div className="py-1">
                    <Link href="/services/appliance-installation" className={`block px-4 py-2 text-sm ${isActive('/services/appliance-installation')} hover:bg-gray-100`}>Appliance Installation</Link>
                    <Link href="/services/bulb-installation" className={`block px-4 py-2 text-sm ${isActive('/services/bulb-installation')} hover:bg-gray-100`}>Bulb Installation</Link>
                    <Link href="/services/tv-mounting" className={`block px-4 py-2 text-sm ${isActive('/services/tv-mounting')} hover:bg-gray-100`}>TV Mounting</Link>
                    <Link href="/services/furniture-assembly" className={`block px-4 py-2 text-sm ${isActive('/services/furniture-assembly')} hover:bg-gray-100`}>Furniture Assembly</Link>
                    <Link href="/services/drywall-repair" className={`block px-4 py-2 text-sm ${isActive('/services/drywall-repair')} hover:bg-gray-100`}>Drywall Repair</Link>
                    <Link href="/services/hvac-repair" className={`block px-4 py-2 text-sm ${isActive('/services/hvac-repair')} hover:bg-gray-100`}>HVAC Repair</Link>
                  </div>
                </div>
              </div>
              <Link href="/gallery" className={`${isActive('/gallery')} font-medium px-2 py-1 text-sm lg:text-lg`}>
                Gallery
              </Link>
              <Link href="/contact" className={`${isActive('/contact')} font-medium px-2 py-1 text-sm lg:text-lg`}>
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-800"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '120px' }}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} className="text-gray-500 hover:text-gray-700">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-4">
          <Link href="/" className={`block font-medium px-3 py-4 text-2xl ${isMobileActive('/')}`} onClick={closeMenu}>Home</Link>
          <Link href="/about" className={`block font-medium px-3 py-4 text-2xl ${isMobileActive('/about')}`} onClick={closeMenu}>About Us</Link>
          <button
            onClick={toggleServices}
            className={`w-full text-left font-medium px-3 py-4 text-2xl focus:outline-none flex items-center justify-between ${pathname.startsWith('/services') ? 'text-blue-500' : 'text-black'}`}
          >
            Services
            <svg
              className={`ml-2 h-6 w-6 transform transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          {servicesOpen && (
            <div className="pl-6 space-y-2 bg-white shadow-md rounded-md">
              <Link href="/services/appliance-installation" className={`block px-3 py-2 text-lg ${isMobileActive('/services/appliance-installation')}`} onClick={closeMenu}>Appliance Installation</Link>
              <Link href="/services/bulb-installation" className={`block px-3 py-2 text-lg ${isMobileActive('/services/bulb-installation')}`} onClick={closeMenu}>Bulb Installation</Link>
              <Link href="/services/tv-mounting" className={`block px-3 py-2 text-lg ${isMobileActive('/services/tv-mounting')}`} onClick={closeMenu}>TV Mounting</Link>
              <Link href="/services/furniture-assembly" className={`block px-3 py-2 text-lg ${isMobileActive('/services/furniture-assembly')}`} onClick={closeMenu}>Furniture Assembly</Link>
              <Link href="/services/drywall-repair" className={`block px-3 py-2 text-lg ${isMobileActive('/services/drywall-repair')}`} onClick={closeMenu}>Drywall Repair</Link>
              <Link href="/services/hvac-repair" className={`block px-3 py-2 text-lg ${isMobileActive('/services/hvac-repair')}`} onClick={closeMenu}>HVAC Repair</Link>
            </div>
          )}
          <Link href="/gallery" className={`block font-medium px-3 py-4 text-2xl ${isMobileActive('/gallery')}`} onClick={closeMenu}>Gallery</Link>
          <Link href="/contact" className={`block font-medium px-3 py-4 text-2xl ${isMobileActive('/contact')}`} onClick={closeMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;