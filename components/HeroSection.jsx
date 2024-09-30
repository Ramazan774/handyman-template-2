import React from "react";

const Hero = () => {
    return (
        <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/assets/image1.webp')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-44 lg:py-64">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
                    <div className="lg:col-span-6 xl:col-span-5 mt-20">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Handyman Service Experts</h1>
                        <p className="mt-6 text-xl text-gray-300">{`Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.`}</p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a href="/drywall-repair" className="rounded-xl bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">Our Services</a>
                            <a href="/about" className="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0 lg:col-span-6 xl:col-span-7 lg:pl-8">
                        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                            <h2 className="text-3xl font-medium text-gray-900 text-center mb-6">Get a Quote</h2>
                            <form className="space-y-4" data-netlify="true">
                                <div>
                                    <label htmlFor="fullName" className="block text-lg font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="fullName" name="fullName" placeholder="Enter Your Name" className="mt-1 block w-full rounded-md border-gray-400 border-2 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber" className="block text-lg font-medium text-gray-700">Phone Number</label>
                                    <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter Your Phone Number" className="mt-1 block w-full rounded-md border-gray-400 border-2 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="email" name="email" placeholder="Enter Your Email" className="mt-1 block w-full rounded-md border-gray-400 border-2 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                                    <textarea id="message" name="message" rows={4} placeholder="Enter Your Message" className="mt-1 block w-full rounded-md border-gray-400 border-2 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-blue-500 px-4 py-2 text-lg font-medium rounded-xl text-white shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;