import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { SERVICES, type Service } from '@/data/content';

interface ServicesProps {
  onNavigateService?: (slug: string) => void;
}

export function Services({ onNavigateService }: ServicesProps) {
  const [activeService, setActiveService] = useState<Service | null>(null);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCardClick = (service: Service) => {
    if (service.detailSlug && onNavigateService) {
      onNavigateService(service.detailSlug);
    } else {
      setActiveService(service);
    }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-charcoal-800 mb-4">
            Servicios
          </h2>
          <p className="text-lg sm:text-xl text-charcoal-400">
            Pincha en cada servicio para ver cómo puedo ayudarte.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="reveal group bg-white rounded-xl p-7 border border-charcoal-100 hover:border-forest-200 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
              style={{ transitionDelay: `${idx * 0.06}s` }}
              onClick={() => handleCardClick(service)}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-light text-3xl mb-5 group-hover:bg-forest-700/5 transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-charcoal-800 mb-2 group-hover:text-forest-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-charcoal-400 leading-relaxed mb-6 flex-grow">
                {service.shortDesc}
              </p>

              <div className="flex items-center gap-2 text-sm font-bold text-forest-700 group-hover:gap-3 transition-all">
                {service.detailSlug ? 'Ver servicio' : 'Ver más'}
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal — only for services without a detail page */}
      {activeService && (
        <ServiceModal
          service={activeService}
          onClose={() => setActiveService(null)}
          onContact={scrollToContact}
        />
      )}
    </section>
  );
}

function ServiceModal({
  service,
  onClose,
  onContact,
}: {
  service: Service;
  onClose: () => void;
  onContact: () => void;
}) {
  const sections = [
    { label: 'Qué es', text: service.modalContent.whatIs },
    { label: 'Qué problema resuelve', text: service.modalContent.problem },
    { label: 'Qué beneficio trae', text: service.modalContent.benefit },
    { label: 'Cómo lo hago', text: service.modalContent.how },
  ];

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-charcoal-900/50 modal-backdrop animate-fade-in"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-[61] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl animate-scale-in pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-sm px-7 sm:px-9 py-6 border-b border-charcoal-100 flex items-start justify-between gap-4 z-10">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-light text-2xl flex-shrink-0">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-charcoal-800 leading-tight">
                {service.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-10 h-10 rounded-lg text-charcoal-500 hover:bg-light transition-colors flex-shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="px-7 sm:px-9 py-6 space-y-6">
            {sections.map((section) => (
              <div key={section.label}>
                <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-forest-700 mb-2">
                  {section.label}
                </h4>
                <p className="text-base text-charcoal-700 leading-relaxed">{section.text}</p>
              </div>
            ))}

            {service.modalContent.pricing && (
              <div className="p-4 rounded-xl bg-light border border-charcoal-100">
                <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-forest-700 mb-2">
                  Precios
                </h4>
                <p className="text-sm text-charcoal-700 leading-relaxed">
                  {service.modalContent.pricing}
                </p>
              </div>
            )}

            <button
              onClick={() => {
                onClose();
                onContact();
              }}
              className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-white bg-forest-700 rounded-xl hover:bg-forest-800 transition-all duration-200 active:scale-[0.98]"
            >
              Hablemos sin compromiso
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
