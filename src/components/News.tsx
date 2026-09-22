import { ArrowRight, Linkedin } from 'lucide-react';
import { NEWS_ARTICLES, LINKEDIN_URL } from '@/data/content';

export function News() {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-charcoal-800 mb-4">
            Noticias y artículos
          </h2>
          <p className="text-lg sm:text-xl text-charcoal-400">
            Reflexiones sobre compras sostenibles, ESG y gestión de proveedores
          </p>
        </div>

        {/* Article cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {NEWS_ARTICLES.map((article, idx) => (
            <article
              key={article.title}
              className="reveal group bg-white rounded-xl overflow-hidden border border-charcoal-100 hover:shadow-lg transition-all duration-300 flex flex-col"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-light">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white bg-forest-700 rounded">
                  {article.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs font-medium text-charcoal-400 mb-3">{article.date}</p>
                <h3 className="text-lg font-bold text-charcoal-800 mb-3 leading-snug group-hover:text-forest-700 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-charcoal-400 leading-relaxed mb-5 flex-grow line-clamp-2">
                  {article.excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-bold text-forest-700 group-hover:gap-3 transition-all w-fit">
                  Leer más
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* LinkedIn link */}
        <div className="reveal mt-12 text-center">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base font-bold text-charcoal-800 hover:text-forest-700 transition-colors"
          >
            También en LinkedIn
            <Linkedin className="w-5 h-5" />
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
