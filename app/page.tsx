import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import FeatureSection from '../components/FeatureSection';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import GallerySection from '../components/GallerySection';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <FeatureSection />
        <Testimonials />
        <FAQ />
        <GallerySection />
        <CTASection />
      </div>
    </main>
  )
}
