import { useEffect } from 'react';
import { ChevronRight, ArrowRight, Check, X, Mail, MapPin } from 'lucide-react';
import { SERVICE_DETAILS, SERVICES } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

interface Props {
  slug: string;
  onNavigateHome: (section?: string) => void;
  onNavigateService: (slug: string) => void;
}

export function ServiceDetailPage({ slug, onNavigateHome, onNavigateService }: Props) {
  useReveal();

  const detail = SERVICE_DETAILS[slug];

  useEffect(() => {
    if (detail) {
      document.title = `${detail.title} — Natia Omiadze`;
    }
    return () => {
      document.title = 'Natia Omiadze — Sustainable Procurement & ESG Consulting';
    };
  }, [detail]);

  if (!detail) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-2xl font-black text-charcoal-800 mb-4">Página no encontrada</p>
          <button
            onClick={() => onNavigateHome()}
            className="px-6 py-3 font-bold text-white bg-forest-700 rounded-xl hover:bg-forest-800 transition-colors"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const otherServices = SERVICES.filter((s) => s.detailSlug !== slug);

  const scrollToContact = () => {
    onNavigateHome('#contact');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[60vh] bg-charcoal-800 flex items-center pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-[60%_40%] gap-8 items-center">
            {/* Left */}
            <div>
              <p className="text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-forest-300 mb-4">
                Servicio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] tracking-tight text-white mb-5">
                {detail.title}
              </h1>
              <p className="text-lg sm:text-xl text-charcoal-200 leading-relaxed mb-8 max-w-xl">
                {detail.subtitle}
              </p>
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-2 px-7 py-4 text-base font-bold text-white bg-forest-700 rounded-xl hover:bg-forest-600 transition-all duration-200 active:scale-95"
              >
                Solicitar consulta gratuita
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right — CSS geometric pattern */}
            <div className="hidden lg:block relative h-72">
              <div className="absolute inset-0 dot-grid" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 border-2 border-forest-500/30 rounded-full" />
                <div className="absolute w-56 h-56 border border-forest-700/20 rounded-full" />
                <div className="absolute w-72 h-72 border border-forest-700/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-charcoal-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <button
              onClick={() => onNavigateHome()}
              className="text-charcoal-500 hover:text-forest-700 font-medium transition-colors"
            >
              Inicio
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-charcoal-300" />
            <button
              onClick={() => onNavigateHome('#services')}
              className="text-charcoal-500 hover:text-forest-700 font-medium transition-colors"
            >
              Servicios
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-charcoal-300" />
            <span className="text-charcoal-800 font-semibold">{detail.title}</span>
          </nav>
        </div>
      </div>

      {/* SECTION 2 — THE CHALLENGE */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-[40%_60%] gap-12 lg:gap-16">
            {/* Left — sticky pull quote */}
            <div className="lg:sticky lg:top-28 lg:self-start reveal">
              <div className="border-l-4 border-forest-700 pl-6">
                <p className="text-xl sm:text-2xl lg:text-[1.75rem] italic font-medium text-forest-700 leading-snug">
                  "{detail.challenge.pullQuote}"
                </p>
              </div>
            </div>

            {/* Right — text blocks */}
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="space-y-6">
                {detail.challenge.blocks.map((block, idx) => (
                  <div key={idx}>
                    <p className="text-base sm:text-lg text-charcoal-500 leading-relaxed">
                      {block}
                    </p>
                    {idx < detail.challenge.blocks.length - 1 && (
                      <div className="mt-6 h-px bg-charcoal-100" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — RESULT */}
      <section className="py-20 bg-light">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center reveal">
          <div className="text-5xl mb-6">🎯</div>
          <h2 className="text-3xl sm:text-4xl font-black text-forest-700 mb-5">Resultado</h2>
          <p className="text-lg sm:text-xl text-charcoal-700 leading-relaxed">
            {detail.result}
          </p>
        </div>
      </section>

      {/* SECTION 4 — WHAT WE ANALYZE */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="reveal mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-charcoal-800 mb-3">
              Qué analizamos
            </h2>
            <p className="text-lg text-charcoal-400">
              Cada proveedor evaluado desde seis dimensiones clave
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {detail.analyses.map((card, idx) => (
              <div
                key={idx}
                className="reveal bg-white rounded-xl p-7 border-t-4 border-forest-700 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ transitionDelay: `${idx * 0.06}s` }}
              >
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold text-charcoal-800 mb-2">{card.title}</h3>
                <p className="text-sm text-charcoal-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW IT WORKS */}
      <section className="py-24 bg-charcoal-800">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="reveal mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">Cómo trabajamos</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {detail.steps.map((step, idx) => (
              <div
                key={idx}
                className="reveal"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-forest-700 text-white font-black text-lg mb-5">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-charcoal-200 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FOR WHOM */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="reveal mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-charcoal-800">
              Para quién es este servicio
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Good */}
            <div className="reveal">
              <h3 className="text-sm font-bold uppercase tracking-wide text-forest-700 mb-5">
                Es para ti si…
              </h3>
              <ul className="space-y-4">
                {detail.forWhom.good.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-forest-50 flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-forest-700" strokeWidth={3} />
                    </span>
                    <span className="text-base text-charcoal-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bad */}
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <h3 className="text-sm font-bold uppercase tracking-wide text-red-500 mb-5">
                No es para ti si…
              </h3>
              <ul className="space-y-4">
                {detail.forWhom.bad.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-50 flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-red-500" strokeWidth={3} />
                    </span>
                    <span className="text-base text-charcoal-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA FINAL */}
      <section className="py-24 bg-forest-700">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 text-balance">
            {detail.cta.headline}
          </h2>
          <p className="text-lg sm:text-xl text-forest-100 leading-relaxed mb-10 max-w-2xl mx-auto">
            {detail.cta.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-7 py-4 text-base font-bold text-forest-700 bg-white rounded-xl hover:bg-forest-50 transition-all duration-200 active:scale-95"
            >
              Solicitar consulta gratuita
            </button>
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-7 py-4 text-base font-bold text-white border-2 border-white rounded-xl hover:bg-white/10 transition-all duration-200 active:scale-95"
            >
              Reservar una cita
            </button>
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-7 py-4 text-base font-bold text-white border-2 border-white rounded-xl hover:bg-white/10 transition-all duration-200 active:scale-95"
            >
              Pedir más información
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-forest-100">
            <a href="mailto:natia.omiadze@opendeusto.es" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              natia.omiadze@opendeusto.es
            </a>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Bilbao, España
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 8 — OTHER SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="reveal mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-charcoal-800 mb-3">
              Otros servicios
            </h2>
            <p className="text-lg text-charcoal-400">
              Explora cómo puedo ayudarte en otras áreas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {otherServices.map((service, idx) => (
              <button
                key={service.id}
                onClick={() => service.detailSlug && onNavigateService(service.detailSlug)}
                className="reveal group bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 hover:shadow-lg transition-all duration-300 text-left flex flex-col"
                style={{ transitionDelay: `${idx * 0.06}s` }}
              >
                <div className="text-2xl mb-3">{service.icon}</div>
                <h3 className="text-sm font-bold text-charcoal-800 mb-2 group-hover:text-forest-700 transition-colors">
                  {service.detailTitle}
                </h3>
                <p className="text-xs text-charcoal-400 leading-relaxed mb-4 flex-grow">
                  {service.shortDesc}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-bold text-forest-700 group-hover:gap-2.5 transition-all">
                  Ver servicio
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Inline styles for the dot grid pattern */}
      <style>{`
        .dot-grid {
          background-image: radial-gradient(circle, rgba(46, 108, 79, 0.3) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
        }
      `}</style>
    </div>
  );
}
