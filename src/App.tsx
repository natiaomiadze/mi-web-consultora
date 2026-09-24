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
import { ServiceDetailPage } from '@/components/ServiceDetailPage';
import { useReveal } from '@/hooks/useReveal';
import { useHashRoute } from '@/hooks/useHashRoute';

function App() {
  const [route, navigate] = useHashRoute();
  useReveal();

  const goHome = (section?: string) => {
    navigate({ name: 'home' });
    if (section) {
      setTimeout(() => {
        document.querySelector(section)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const goService = (slug: string) => {
    navigate({ name: 'service', slug });
  };

  if (route.name === 'service') {
    return (
      <div className="min-h-screen bg-white">
        <Navbar variant="detail" onHome={goHome} />
        <ServiceDetailPage
          slug={route.slug}
          onNavigateHome={goHome}
          onNavigateService={goService}
        />
        <Footer variant="detail" onHome={goHome} />
        <Chatbot />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="home" />
      <main>
        <Hero />
        <ImpactNumbers />
        <Problem />
        <Services onNavigateService={goService} />
        <About />
        <PISPilot />
        <News />
        <Contact />
        <Newsletter />
      </main>
      <Footer variant="home" />
      <Chatbot />
    </div>
  );
}

export default App;
