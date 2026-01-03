import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PersonalStory from '@/components/PersonalStory';
import Services from '@/components/Services';
import Differentiation from '@/components/Differentiation';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Preloader from '@/components/Preloader';
import VideoBackground from '@/components/VideoBackground';

const Index = () => {
  return (
    <main className="min-h-screen grainy relative">
      <VideoBackground />
      <div className="grain-overlay" />
      <div className="relative z-10">
        <Preloader />
        <Header />
        <Hero />
        <About />
        <PersonalStory />
        <Services />
        <Differentiation />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <FloatingCTA />
      </div>
    </main>
  );
};

export default Index;
