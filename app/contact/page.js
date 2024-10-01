import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const CoverPhoto = () => (
    <div className="relative h-80 lg:h-96 mt-8 lg:mt-16">
      <Image
        src="/assets/image11.webp"
        alt="Cover photo"
        layout="fill"
        objectFit="cover"
        className="opacity-80"
      />
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl lg:text-7xl font-bold text-white text-center z-10 drop-shadow-lg">
          {`Let's Connect`}
        </h1>
      </div>
      <div className="absolute -bottom-1 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-20">
          <path fill="#FFFFFF" fillOpacity="1" d="M0,32L80,58.7C160,85,320,139,480,149.3C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );

  const ContactForm = () => (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <form className="space-y-4" data-netlify="true">
            <div>
              <label htmlFor="fullName" className="block raleway text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="fullName" name="fullName" placeholder="Enter Your Name" className="mt-1 block w-full rounded-md border-gray-300 border-2 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block raleway text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter Your Phone Number" className="mt-1 block w-full rounded-md border-gray-300 border-2 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block raleway text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Enter Your Email" className="mt-1 block w-full rounded-md border-gray-300 border-2 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block raleway text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Enter Your Message" className="mt-1 block w-full rounded-md border-gray-300 border-2 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
            </div>
            <div>
              <button type="submit" className="arima w-full bg-blue-500 px-4 py-2 text-sm font-medium rounded-md text-white shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Send
              </button>
            </div>
          </form>
        </div>
        
        <div className="bg-black rounded-lg p-8 shadow-lg text-white flex flex-col justify-between">
        <div className="aspect-w-16 aspect-h-9 mb-6">
          {/* Placeholder for Google Maps */}
          <div className="w-full h-full bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Google Maps Placeholder</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="arima text-lg font-semibold mb-2">Phone</h3>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-blue-400 mr-2" />
              <a href="tel:+1234567890" className="raleway text-sm">{`(123) 456-7890`}</a>
            </div>
          </div>
          <div>
            <h3 className="arima text-lg font-semibold mb-2">Email</h3>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-blue-400 mr-2" />
              <a href="mailto:contact@handyman.com" className="raleway text-sm">info@example.com</a>
            </div>
          </div>
          <div>
            <h3 className="arima text-lg font-semibold mb-2">Location</h3>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-400 mr-2" />
              <span className="raleway text-sm">{`Madison, WI`}</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => {
    return (
        <div className="bg-white oswald">
            <CoverPhoto />
            <ContactForm />
        </div>
    )
  }

  export default ContactPage;