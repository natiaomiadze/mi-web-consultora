import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ImpactNumbers } from '@/components/ImpactNumbers';
import { Problem } from '@/components/Problem';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { PISPilot } from '@/components/PISPilot';
import { News } from '@/components/News';
import { Contact } from '@/components/Contact';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';
import { Chatbot } from '@/components/Chatbot';
import { useReveal } from '@/hooks/useReveal';

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ImpactNumbers />
        <Problem />
        <Services />
        <About />
        <PISPilot />
        <News />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
