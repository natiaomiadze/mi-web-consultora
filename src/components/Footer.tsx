import { Linkedin, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, LINKEDIN_URL } from '@/data/content';

interface FooterProps {
  variant?: 'home' | 'detail';
  onHome?: (section?: string) => void;
}

export function Footer({ variant = 'home', onHome }: FooterProps) {
  const handleClick = (href: string) => {
    if (variant === 'detail' && onHome) {
      onHome(href);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-charcoal-100 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Left — identity */}
          <div>
            <button
              onClick={() => handleClick('#hero')}
              className="text-lg font-black text-charcoal-800 mb-1"
            >
              Natia Omiadze
            </button>
            <p className="text-sm text-charcoal-400">Consultora en Compras Sostenibles</p>
          </div>

          {/* Center — nav links */}
          <div className="md:text-center">
            <ul className="flex flex-wrap md:justify-center gap-x-5 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm font-medium text-charcoal-600 hover:text-forest-700 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — social */}
          <div className="flex md:justify-end gap-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-light text-charcoal-700 hover:bg-forest-700 hover:text-white transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            {['Upwork', 'Fiverr'].map((name) => (
              <a
                key={name}
                href="#"
                className="inline-flex items-center gap-1.5 px-3 h-10 rounded-lg bg-light text-charcoal-700 text-sm font-semibold hover:bg-forest-700 hover:text-white transition-all duration-200"
              >
                {name}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="pt-6 border-t border-charcoal-100 text-center">
          <p className="text-xs text-charcoal-400">
            © 2026 Natia Omiadze. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
