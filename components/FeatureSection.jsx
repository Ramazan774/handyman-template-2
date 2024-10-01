import React from 'react';

const CustomIcon = ({ paths }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
    {paths.map((d, index) => (
      <path key={index} strokeLinecap="round" strokeLinejoin="round" d={d} />
    ))}
  </svg>
);

const FeatureItem = ({ IconPaths, title, description }) => (
  <div className="flex flex-col items-center px-4 mb-8 lg:mb-0">
    <CustomIcon paths={IconPaths} />
    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 mt-4 text-center">{title}</h3>
    <p className="text-sm sm:text-base text-center max-w-xs">{description}</p>
  </div>
);

const FeatureSection = () => {
  const features = [
    {
      IconPaths: ["M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"],
      title: "Guaranteed Quality",
      description: "We ensure top-notch quality in every project we undertake, backed by our satisfaction guarantee."
    },
    {
      IconPaths: ["M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"],
      title: "Expert Communication",
      description: "Our team excels in clear, timely communication to keep you informed throughout your project."
    },
    {
      IconPaths: ["M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"],
      title: "Efficient Service",
      description: "We value your time and always strive to complete projects efficiently without compromising quality."
    }
  ];

  return (
    <div className="bg-blue-500 text-white py-12 sm:py-16 lg:py-20">
      <div className="roboto container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="arima text-sm sm:text-base mb-2 sm:mb-4">Our Features</h1>
        <h2 className="arima text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">Why Choose Us</h2>
        <p className="raleway text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto">
          We offer top-notch handyman services with a focus on quality, efficiency, and customer satisfaction. Our experienced team is ready to tackle any project, big or small.
        </p>
        
        <div className="raleway flex flex-col lg:flex-row justify-center lg:space-x-8 xl:space-x-16">
          {features.map((feature, index) => (
            <FeatureItem 
              key={index}
              IconPaths={feature.IconPaths}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;