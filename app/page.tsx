import HeroSection from '@/components/home/HeroSection';
import OurStory from '@/components/home/OurStory';
import ProductHighlights from '@/components/home/ProductHighlights';
import Testimonials from '@/components/home/Testimonials';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OurStory />
      <ProductHighlights />
      <Testimonials />
    </>
  );
}
