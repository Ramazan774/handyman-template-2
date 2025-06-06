import CTASection from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";

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
          About Us
        </h1>
      </div>
      <div className="absolute -bottom-1 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-20">
          <path fill="#FFFFFF" fillOpacity="1" d="M0,32L80,58.7C160,85,320,139,480,149.3C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );

  const MainSection = () => (
    <div className="relative z-10 bg-white py-20 sm:py-24 xl:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-x-8 gap-y-16 lg:gap-y-0">
          <div className="w-full lg:w-1/2 lg:pr-16 lg:pt-8">
            <div className="relative isolate">
              <div className="arima text-lg font-medium leading-8 text-gray-900 sm:text-xl sm:leading-9">
                <p>{`Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.`}</p>
                <p className="mt-4">{`Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.`}</p>
                <p className="mt-4">{`Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.`}</p>
              </div>
              <div className="mt-8 text-base">
                <Link href="/contact" className="arima inline-block px-6 py-2 border border-blue-800 text-white bg-blue-500 hover:bg-blue-400 rounded-2xl transition duration-300 text-center">
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[2/1] relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
              <Image
                className="object-cover shadow-2xl"
                src="/assets/image7.webp"
                alt="Testimonial image 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  const MissionVisionSection = () => (
    <div className="bg-gray-100 py-16 sm:py-24 mb-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-16">
          <div>
            <h2 className="arima text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Mission</h2>
            <p className="arima mt-4 text-lg text-gray-600">
              {`Our mission is to provide top-quality handyman services that exceed our customers' expectations. We strive to deliver reliable, efficient, and professional solutions for all your home improvement needs.`}
            </p>
          </div>
          <div>
            <h2 className="arima text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Vision</h2>
            <p className="arima mt-4 text-lg text-gray-600">
              {`We envision being the go-to handyman service in our community, known for our expertise, integrity, and commitment to customer satisfaction. We aim to build lasting relationships with our clients through trust and excellence in every job we undertake.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

const AboutPage = () => {
    return (
        <div className="bg-white oswald">
            <CoverPhoto />
            <MainSection />
            <MissionVisionSection />
            <CTASection />
        </div>
    )
}

export default AboutPage