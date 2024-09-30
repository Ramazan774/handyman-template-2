"use client";
import React, { useState, useEffect } from "react";

const Testimonials = () => {
    const reviews = [
        {
            text: "Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip.",
            author: "Judith Black"
        },
        {
            text: "Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.",
            author: "John Doe"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            author: "Jane Smith"
        }
    ];

    const [currentReview, setCurrentReview] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 5000); 

        return () => clearInterval(timer);
    }, [reviews.length]);

    return (
        <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl">
                <p className="sr-only">5 out of 5 stars</p>
                <div className="flex gap-x-1 text-blue-500 justify-center">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                        </svg>
                    ))}
                </div>
                <div className="mt-10 relative h-48 overflow-hidden">
                    {reviews.map((review, index) => (
                        <figure 
                            key={index} 
                            className={`absolute w-full transition-all duration-500 ease-in-out ${
                                index === currentReview
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-full opacity-0'
                            }`}
                        >
                            <blockquote className="text-xl font-medium leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
                                <p>{review.text}</p>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center justify-center">
                                <div className="text-sm leading-6">
                                    <div className="font-semibold text-gray-900">{review.author}</div>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials;