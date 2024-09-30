import React from "react";
import Image from "next/image";

const StackedCard = ({ imageSrc, title, description, icon }) => (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-16">
        <div className="relative group">
            <div className="rounded-xl overflow-hidden shadow-lg">
                <div className="relative overflow-hidden">
                    <Image 
                        src={imageSrc} 
                        alt="Card background" 
                        width={240}
                        height={80}
                        className="w-full h-80 object-cover transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg sm:mb-6 p-6 absolute bottom-0 left-8 right-8 transform translate-y-1/3">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 rounded-full p-4 shadow-lg">
                        {icon}
                    </div>
                </div>
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-2 mt-6">{title}</h2>
                <p className="text-gray-600 mb-4 text-sm">
                    {description}
                </p>
                <button className="text-blue-500 text-lg font-semibold text-center hover:text-blue-400 transition duration-300">
                    Read More
                </button>
            </div>
        </div>
    </div>
);

const StackedCards = () => {
    const cardData = [
        { imageSrc: "/assets/image2.webp", title: "Appliance Installation", description: "Expert setup and connection of your new household appliances for optimal performance and safety.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
        { imageSrc: "/assets/image8.webp", title: "Bulb Installation", description: "Swift and secure replacement of all types of light bulbs, ensuring proper illumination throughout your home.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
        { imageSrc: "/assets/image4.webp", title: "TV Mounting", description: "Professional wall mounting of your television for the perfect viewing angle and clean, cable-free appearance.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg> },
        { imageSrc: "/assets/image5.webp", title: "Furniture Assembly", description: "Efficient and precise assembly of flat-pack furniture, saving you time and ensuring stability.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
        { imageSrc: "/assets/image6.webp", title: "Drywall Repair", description: "Seamless patching and refinishing of damaged walls to restore your room's pristine look.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg> },
        { imageSrc: "/assets/image7.webp", title: "HVAC Repair", description: "Comprehensive diagnosis and repair of heating, ventilation, and air conditioning systems to keep your home comfortable year-round.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-center text-sm font-semibold text-blue-800 mb-4">Our Services</h2>
            <h1 className='text-center text-4xl font-bold text-black mb-4'>Comprehensive Handyman Services</h1>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We offer a wide range of services designed to keep your home or business running smoothly. From electrical and plumbing repairs to carpentry, painting, and general maintenance, 
            our skilled team is ready to tackle any project, big or small. We take pride in delivering prompt, professional service with a focus on quality workmanship and customer satisfaction.
            </p>
            <div className="flex flex-wrap -mx-4">
                {cardData.map((card, index) => (
                    <StackedCard key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default StackedCards;