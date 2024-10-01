import React from "react";

const CTASection = () => {
    return (
        <section className="relative container mx-auto bg-center bg-cover py-24 mb-6" style={{ backgroundImage: "url('/assets/ctaimage.webp')" }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="oswald relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0 px-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Need a helping hand? Our expert handymen are ready.
                        </h2>
                        <a 
                            href="/contact" 
                            className="inline-block bg-blue-500 text-white font-medium py-3 px-6 rounded-2xl hover:bg-blue-400 transition duration-300"
                        >
                            Get Free Estimate
                        </a>
                    </div>
                    <div className="md:w-1/2 text-white lg:text-center px-4">
                        <h3 className="text-3xl font-semibold mb-4">Available Hours</h3>
                        <p className="mb-2">Everyday: 9AM - 7PM</p>
                        <p className="text-sm">
                            Serving Madison, Verona, Fitchburg, Middleton, Sun Prairie, DeForest, McFarland, Dane County
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection;