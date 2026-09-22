import { ArrowRight, Phone } from 'lucide-react';
import { HERO_IMAGE } from '@/data/content';

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-white pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
          {/* Left — text */}
          <div className="order-2 lg:order-1 flex flex-col gap-7 max-w-2xl">
            <div className="flex items-center gap-3 animate-fade-in">
              <span className="h-px w-10 bg-forest-700" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-forest-700">
                Sustainable Procurement Consultant
              </span>
            </div>

            <h1
              className="text-[2.5rem] sm:text-5xl lg:text-[4rem] font-black leading-[1.05] tracking-tight text-charcoal-800 text-balance animate-fade-in-up"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              ¿Sabes realmente con quién trabaja tu empresa?
            </h1>

            <p
              className="text-lg sm:text-xl text-charcoal-400 leading-relaxed max-w-xl animate-fade-in-up"
              style={{ animationDelay: '0.25s', opacity: 0 }}
            >
              Ayudo a empresas medianas a evaluar, controlar y transformar su cadena de
              proveedores con criterios ESG reales.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-in-up"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              <button
                onClick={() => scrollTo('#contact')}
                className="group inline-flex items-center gap-2 px-7 py-4 text-base font-bold text-white bg-forest-700 rounded-xl hover:bg-forest-800 transition-all duration-200 hover:shadow-lg active:scale-95"
              >
                Hablemos — es gratis
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo('#services')}
                className="inline-flex items-center gap-2 px-7 py-4 text-base font-bold text-charcoal-800 border-2 border-charcoal-800 rounded-xl hover:bg-charcoal-800 hover:text-white transition-all duration-200 active:scale-95"
              >
                Ver servicios
              </button>
            </div>

            <div
              className="flex items-center gap-2 text-sm text-charcoal-400 animate-fade-in-up"
              style={{ animationDelay: '0.55s', opacity: 0 }}
            >
              <Phone className="w-4 h-4 text-forest-700" />
              <span>Primera llamada de 30 minutos sin coste · Sin compromiso</span>
            </div>
          </div>

          {/* Right — photo */}
          <div
            className="order-1 lg:order-2 relative animate-fade-in"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            <div className="relative max-w-md lg:max-w-none mx-auto">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-charcoal-800/10">
                <img
                  src={HERO_IMAGE}
                  alt="Natia Omiadze — Sustainable Procurement Consultant"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              {/* Green accent corner bottom-left */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-4 border-b-4 border-forest-700 rounded-bl-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 -z-10">
                <div className="w-full h-full bg-forest-50 rounded-bl-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
