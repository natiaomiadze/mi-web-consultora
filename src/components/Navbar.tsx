import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/data/content';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.replace('#', ''));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] py-3'
          : 'bg-white border-b border-charcoal-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="text-xl font-extrabold tracking-tight text-charcoal-800"
        >
          Natia Omiadze
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isActive ? 'text-forest-700' : 'text-charcoal-600 hover:text-forest-700'
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 bg-forest-700 transition-all duration-300 ${
                    isActive ? 'w-5' : 'w-0'
                  }`}
                />
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="ml-3 px-5 py-2.5 text-sm font-bold text-white bg-forest-700 rounded-lg hover:bg-forest-800 transition-all duration-200 active:scale-95"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-charcoal-800 hover:bg-light transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mt-2 bg-white rounded-2xl shadow-lg border border-charcoal-100 p-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="px-4 py-3 text-base font-semibold text-charcoal-700 hover:bg-light hover:text-forest-700 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="mt-1 px-4 py-3 text-center text-base font-bold text-white bg-forest-700 rounded-xl hover:bg-forest-800 transition-colors"
          >
            Hablemos
          </a>
        </div>
      </div>
    </nav>
  );
}
