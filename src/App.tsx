import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import HomeContent from '@/components/sections/HomeContent';
import About from '@/components/sections/About';
import Leadership from '@/components/sections/Leadership';
import Services from '@/components/sections/Services';
import Approach from '@/components/sections/Approach';
import FutureBusinesses from '@/components/sections/FutureBusinesses';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Insights from '@/components/sections/Insights';
import Contact from '@/components/sections/Contact';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full origin-left bg-gradient-to-r from-brand-500 via-brand-600 to-accent-500 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-brand-600 text-white shadow-glow transition-all duration-400 hover:bg-brand-700 hover:-translate-y-1 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-12 opacity-0'
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

export default function App() {
  useScrollReveal([]);

  return (
    <div className="relative min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <HomeContent />
        <About />
        <Services />
        <Leadership />
        <Approach />
        <FutureBusinesses />
        <WhyChooseUs />
        <Insights />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}
