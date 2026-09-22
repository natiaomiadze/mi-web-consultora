import { useState } from 'react';
import { Check } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true);
    }
  };

  return (
    <section className="bg-charcoal-800 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Mantente al día en compras sostenibles y ESG
            </h2>
          </div>

          {subscribed ? (
            <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-forest-700 animate-scale-in">
              <Check className="w-5 h-5 text-white" />
              <p className="text-sm font-semibold text-white">¡Suscrito!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="px-5 py-3.5 rounded-xl bg-charcoal-700 border border-charcoal-600 text-white placeholder:text-charcoal-300 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-700/30 transition-all min-w-[240px]"
              />
              <button
                type="submit"
                className="px-6 py-3.5 font-bold text-white bg-forest-700 rounded-xl hover:bg-forest-800 transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                Suscribirme
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
