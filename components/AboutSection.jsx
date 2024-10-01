import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="bg-white overflow-hidden py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="lg:w-1/2">
            <Image
              src="/assets/image10.webp"
              alt="Handyman working on a project"
              width={2500}
              height={1000}
              className="w-full h-[300px] lg:h-[600px] object-fill rounded-2xl"
            />
          </div>
          <div className="oswald lg:w-1/2 lg:pl-8">
            <h1 className="text-sm text-blue-500 text-center font-semibold capitalize">Who We Are</h1>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">Expert Handyman Services</h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              {`Our team of skilled professionals is dedicated to providing top-notch handyman services for all your home improvement needs. From minor repairs to major renovations, we've got you covered.`}
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {`With years of experience and a commitment to quality, our handymen tackle each project with precision and care. We pride ourselves on our attention to detail and customer satisfaction.`}
            </p>
            <div className="mt-8">
              <a href="/about" className="inline-block px-6 py-3 border border-blue-800 text-white bg-blue-500 hover:bg-blue-400 rounded-2xl transition duration-300 text-center text-lg">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;