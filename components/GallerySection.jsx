"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ArrowButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 ${direction === 'left' ? 'left-4' : 'right-4'} 
                bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200`}
    aria-label={direction === 'left' ? 'Previous image' : 'Next image'}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={direction === 'left' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
    </svg>
  </button>
);

const ImageModal = ({ src, alt, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="max-w-4xl w-full p-4 relative">
        <Image src={src} alt={alt} width={800} height={600} className="w-full h-auto rounded-lg" />
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ArrowButton direction="left" onClick={onPrev} />
        <ArrowButton direction="right" onClick={onNext} />
      </div>
    </div>
  );
};

const Gallery = () => {
  const images = [
    '/assets/image2.webp',
    '/assets/image5.webp',
    '/assets/image7.webp',
    '/assets/image8.webp'
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrev = useCallback(() => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg">
            <Image
              src={images[0]}
              alt="Gallery image 1"
              width={800}
              height={1000}
              className="w-full h-full object-cover cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => handleImageClick(0)}
              loading='lazy'
            />
          </div>

          <div className="grid grid-rows-2 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                <Image
                  src={images[1]}
                  alt="Gallery image 2"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover cursor-pointer transform transition-transform hover:scale-105"
                  onClick={() => handleImageClick(1)}
                  loading='lazy'
                />
              </div>
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                <Image
                  src={images[2]}
                  alt="Gallery image 3"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover cursor-pointer transform transition-transform hover:scale-105"
                  onClick={() => handleImageClick(2)}
                  loading='lazy'
                />
              </div>
            </div>
            
            <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg">
              <Image
                src={images[3]}
                alt="Gallery image 4"
                width={800}
                height={400}
                className="w-full h-full object-cover cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => handleImageClick(3)}
                loading='lazy'
              />
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link href="/gallery" className="arima inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-2xl shadow-sm text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 transition-colors duration-200">
            View Full Gallery
          </Link>
        </div>
      </div>
      {selectedImage !== null && (
        <ImageModal
          src={images[selectedImage]}
          alt={`Gallery image ${selectedImage + 1}`}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default Gallery;
