import React from "react";

const FAQ = () => {
    return (
        <div className="bg-indigo-100">
            <div className="oswald mx-auto max-w-7xl px-6 py-16 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to dive in?<br />Start your free trial today.</h2>
                <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                    <a href="/contact" className="rounded-2xl bg-blue-500 px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">Get a Quote</a>
                </div>
            </div>
        </div>
    )
}

export default FAQ;