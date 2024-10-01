"use client";
import React, { useState, useCallback, useEffect } from 'react';
import CTASection from "@/components/CTASection";
import Image from "next/image";

const ArrowButton = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 ${direction === 'left' ? 'left-4' : 'right-4'} bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200`}
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
          <Image src={src} alt={alt} width={800} height={600} className="w-full h-auto" />
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
          Our Gallery
        </h1>
      </div>
      <div className="absolute -bottom-1 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-20">
          <path fill="#FFFFFF" fillOpacity="1" d="M0,32L80,58.7C160,85,320,139,480,149.3C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );

  const Gallery = () => {
    const images = [
      '/assets/image1.webp',
      '/assets/image2.webp',
      '/assets/image3.webp',
      '/assets/image4.webp',
      '/assets/image5.webp',
      '/assets/image6.webp',
      '/assets/image7.webp',
      '/assets/image8.webp',
      '/assets/image9.webp',
      '/assets/image10.webp',
      '/assets/image11.webp',
      '/assets/image12.webp',
    ];
  
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageClick = (index) => setSelectedImage(index);
  
    const handleClose = () => setSelectedImage(null);
  
    const handlePrev = useCallback(() => {
      setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    }, [images.length]);
  
    const handleNext = useCallback(() => {
      setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, [images.length]);
  
    return (
      <div className="bg-white oswald">
        <CoverPhoto />
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {images.map((src, index) => (
                <div key={src} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover cursor-pointer transform transition-transform hover:scale-105"
                    onClick={() => handleImageClick(index)}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <CTASection />
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