import { PROBLEM_CARDS } from '@/data/content';

export function Problem() {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-charcoal-800 mb-4">
            El problema que nadie quiere ver
          </h2>
          <p className="text-lg sm:text-xl text-charcoal-400">
            ¿Te suena alguna de estas situaciones?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {PROBLEM_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="reveal bg-white rounded-xl p-7 shadow-sm border-l-4 border-forest-700 hover:shadow-md transition-shadow duration-300"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-medium">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal text-center">
          <p className="text-xl sm:text-2xl font-bold text-charcoal-800">
            Si has dicho sí a alguna de estas —{' '}
            <span className="text-forest-700">estás en el lugar correcto.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
