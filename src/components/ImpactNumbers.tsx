import { IMPACT_NUMBERS } from '@/data/content';

export function ImpactNumbers() {
  return (
    <section className="py-20 bg-white border-y border-charcoal-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-4">
          {IMPACT_NUMBERS.map((item, idx) => (
            <div
              key={idx}
              className="reveal text-center md:px-6"
              style={{ transitionDelay: `${idx * 0.12}s` }}
            >
              <p className="text-5xl sm:text-6xl lg:text-7xl font-black text-forest-700 tracking-tight leading-none mb-3">
                {item.value}
              </p>
              <p className="text-sm sm:text-base text-charcoal-400 font-medium leading-relaxed max-w-xs mx-auto">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
