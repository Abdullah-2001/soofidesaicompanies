import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import VisionMission from '@/components/VisionMission';
import CoreValues from '@/components/CoreValues';
import Leadership from '@/components/Leadership';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import Future from '@/components/Future';
import WhyChooseUs from '@/components/WhyChooseUs';
import Insights from '@/components/Insights';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';

function App() {
  // useReveal();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <CoreValues />
        <Leadership />
        <Services />
        <Approach />
        <Future />
        <WhyChooseUs />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
