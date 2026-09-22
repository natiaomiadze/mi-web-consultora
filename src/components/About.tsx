import { ABOUT_IMAGE, ABOUT_CREDENTIALS } from '@/data/content';

export function About() {
  return (
    <section id="about" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — photo */}
          <div className="reveal relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
                <img
                  src={ABOUT_IMAGE}
                  alt="Natia Omiadze"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Green accent corner */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 border-r-4 border-b-4 border-forest-700 rounded-br-2xl -z-10" />
            </div>
          </div>

          {/* Right — text */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-forest-700" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-forest-700">
                Sobre mí
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-charcoal-800 mb-6">
              Hola, soy Natia
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-charcoal-500 leading-relaxed">
              <p>
                Llevo más de 10 años trabajando en el cruce entre negocio, operaciones y
                sostenibilidad — desde coordinadora de compras en empresas industriales hasta
                consultora independiente ayudando a emprendedores a construir sus negocios
                desde cero.
              </p>
              <p>
                Hoy me dedico a algo muy concreto: ayudar a empresas medianas a saber con quién
                trabajan, si sus proveedores cumplen con los nuevos requisitos ESG, y cómo
                tomar mejores decisiones de compra.
              </p>
              <p>
                Tengo experiencia real en compras y operaciones industriales. Sé lo que pasa
                dentro de un departamento de compras cuando llega un cuestionario ESG de un
                cliente grande y nadie sabe por dónde empezar.
              </p>
              <p>
                Soy MBA por Deusto Business School. Tengo investigación publicándose en revista
                científica internacional sobre ESG y procurement en movilidad eléctrica. He
                participado en congresos internacionales — ACEDE 2026 Santander y próximamente
                Smart Green Mobility octubre 2026. He creado el PIS — Procurement Intelligence
                System. Trabajo directamente yo — sin equipo, sin intermediarios.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {ABOUT_CREDENTIALS.map((cred) => (
                <div
                  key={cred.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-charcoal-100 hover:border-forest-200 transition-colors duration-300"
                >
                  <span className="text-2xl flex-shrink-0">{cred.icon}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-charcoal-800 leading-tight">
                      {cred.label}
                    </p>
                    <p className="text-xs text-charcoal-400 mt-0.5">{cred.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
