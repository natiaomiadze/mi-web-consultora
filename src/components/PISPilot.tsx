import { Check, ArrowRight } from 'lucide-react';
import { PIS_INCLUSIVES } from '@/data/content';

export function PISPilot() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pis" className="py-24 bg-forest-700 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forest-600/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-forest-800/40 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        <div className="reveal max-w-2xl mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-white/70">
            Programa especial
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-3 mb-4">
            Programa PIS Piloto
          </h2>
          <p className="text-lg sm:text-xl text-forest-100 font-medium mb-6">
            Prueba el sistema con tus proveedores reales — sin riesgo, sin permanencia
          </p>
          <p className="text-base text-forest-100/80 leading-relaxed">
            El <span className="font-bold text-white">PIS — Procurement Intelligence System</span>{' '}
            es mi herramienta propia para evaluar, puntuar y priorizar proveedores con criterios
            de sostenibilidad reales. En el programa piloto trabajamos juntos 6 semanas. Ves los
            resultados. Decides si seguimos.
          </p>
        </div>

        {/* 2x2 grid */}
        <div className="reveal grid sm:grid-cols-2 gap-4 mb-8" style={{ transitionDelay: '0.1s' }}>
          {PIS_INCLUSIVES.map((item, idx) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-white rounded-xl px-5 py-4"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-forest-50 flex-shrink-0">
                <Check className="w-4 h-4 text-forest-700" strokeWidth={3} />
              </span>
              <span className="text-base font-semibold text-forest-700">{item}</span>
            </div>
          ))}
        </div>

        <div className="reveal flex flex-col sm:flex-row sm:items-center gap-5">
          <p className="text-sm italic text-forest-100/70">
            Plazas limitadas — programa de lanzamiento
          </p>
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-forest-700 bg-white rounded-xl hover:bg-forest-50 transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            Quiero el piloto — hablemos
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
