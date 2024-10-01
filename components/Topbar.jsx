import React from 'react';
import { Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Topbar = () => {
  return (
    <div id="topbar" className="bg-white py-2 sm:py-6 md:py-8 fixed top-0 left-0 right-0 z-50" style={{ height: '120px' }}>
      <div className="container mx-auto px-2 sm:px-4 flex flex-row sm:flex-col md:flex-row justify-between items-center text-sm">
        <div className='hidden roboto md:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4 mb-4 md:mb-0 w-full md:w-auto'>
          <button className="flex items-center justify-center border shadow-lg rounded-xl bg-red-500 hover:bg-red-700 transition duration-300 space-x-2 py-2 px-4 w-full sm:w-auto">
            <Phone size={20} className="text-white" />
            <span><a href="tel:+1234567890" className="text-white text-base sm:text-lg">Call Us Now</a></span>
          </button>
          <button className="flex items-center justify-center border shadow-lg rounded-xl bg-red-500 hover:bg-red-700 transition duration-300 space-x-2 py-2 px-4 w-full sm:w-auto">
            <Mail size={20} className="text-white" />
            <span><a href="mailto:info@example.com" className="text-white text-base sm:text-lg">Email Us</a></span>
          </button>
        </div>
        
        <div className="flex justify-start sm:justify-center sm:mb-4 md:mb-0">
          <Link href="/">
            <Image 
              src="/assets/logo.webp"
              alt="handyman company logo"
              width={150}
              height={150}
              className="w-24 h-auto sm:w-40 md:w-48"
            />
          </Link>
        </div>
        
        <div className='roboto flex justify-end sm:justify-center w-auto sm:w-full md:w-auto'>
          <a 
            href="/contact"
            className="bg-white text-red-600 py-2 px-4 border-red-400 border-2 rounded-xl shadow-lg hover:bg-gray-100 transition duration-300 text-center"
            style={{ minWidth: '120px', minHeight: '40px', fontSize: '14px' }} 
          >
            Free Estimate 
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;