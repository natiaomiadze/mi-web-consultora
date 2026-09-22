import { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, CheckCircle, ArrowUpRight } from 'lucide-react';
import { SUPPLIER_COUNT_OPTIONS, LINKEDIN_URL } from '@/data/content';

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  proveedores: string;
  reto: string;
}

export function Contact() {
  const [form, setForm] = useState<FormData>({
    nombre: '',
    empresa: '',
    email: '',
    proveedores: '',
    reto: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.nombre.trim()) e.nombre = 'Tu nombre';
    if (!form.email.trim()) e.email = 'Tu email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email válido';
    if (!form.reto.trim()) e.reto = 'Tu reto';
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSubmitted(true);
    }
  };

  const update = (field: keyof FormData, value: string) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  return (
    <section id="contact" className="py-24 bg-light">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-charcoal-800 mb-4">
            Hablemos
          </h2>
          <p className="text-lg sm:text-xl text-charcoal-400">
            Primera llamada de 30 minutos, sin coste. Sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — form card */}
          <div className="reveal">
            <div className="bg-white rounded-2xl p-7 sm:p-9 shadow-sm border border-charcoal-100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 animate-scale-in">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-forest-50 mb-5">
                    <CheckCircle className="w-9 h-9 text-forest-700" />
                  </div>
                  <h3 className="text-2xl font-black text-charcoal-800 mb-3">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-base text-charcoal-400 max-w-md">
                    Gracias, {form.nombre}. Natia se pondrá en contacto contigo en menos de 24
                    horas.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ nombre: '', empresa: '', email: '', proveedores: '', reto: '' });
                    }}
                    className="mt-6 text-sm font-bold text-forest-700 hover:text-forest-800 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField label="Nombre" required error={errors.nombre}>
                      <input
                        type="text"
                        value={form.nombre}
                        onChange={(e) => update('nombre', e.target.value)}
                        className="form-input"
                        placeholder="Tu nombre"
                      />
                    </FormField>

                    <FormField label="Empresa">
                      <input
                        type="text"
                        value={form.empresa}
                        onChange={(e) => update('empresa', e.target.value)}
                        className="form-input"
                        placeholder="Nombre de tu empresa"
                      />
                    </FormField>
                  </div>

                  <FormField label="Email" required error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="form-input"
                      placeholder="tu@email.com"
                    />
                  </FormField>

                  <FormField label="Número de proveedores">
                    <select
                      value={form.proveedores}
                      onChange={(e) => update('proveedores', e.target.value)}
                      className="form-input cursor-pointer"
                    >
                      <option value="" disabled>
                        Selecciona un rango
                      </option>
                      {SUPPLIER_COUNT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField
                    label="¿Cuál es tu mayor reto ahora mismo?"
                    required
                    error={errors.reto}
                  >
                    <textarea
                      value={form.reto}
                      onChange={(e) => update('reto', e.target.value)}
                      rows={4}
                      className="form-input resize-none"
                      placeholder="Cuéntame brevemente qué necesitas..."
                    />
                  </FormField>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-white bg-forest-700 rounded-xl hover:bg-forest-800 transition-all duration-200 active:scale-[0.98]"
                  >
                    Enviar mensaje
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right — direct contact */}
          <div className="reveal flex flex-col justify-center" style={{ transitionDelay: '0.15s' }}>
            <p className="text-lg font-bold text-charcoal-800 mb-6">
              Prefiero el contacto directo:
            </p>

            <div className="space-y-5">
              <a
                href="mailto:natia.omiadze@opendeusto.es"
                className="flex items-center gap-4 group"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-white border border-charcoal-100 flex-shrink-0 group-hover:border-forest-200 transition-colors">
                  <Mail className="w-5 h-5 text-forest-700" />
                </div>
                <span className="text-base font-medium text-charcoal-700 group-hover:text-forest-700 transition-colors">
                  natia.omiadze@opendeusto.es
                </span>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-white border border-charcoal-100 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-forest-700" />
                </div>
                <span className="text-base font-medium text-charcoal-700">
                  Bilbao, España
                </span>
              </div>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-white border border-charcoal-100 flex-shrink-0 group-hover:border-forest-200 transition-colors">
                  <Linkedin className="w-5 h-5 text-forest-700" />
                </div>
                <span className="text-base font-medium text-charcoal-700 group-hover:text-forest-700 transition-colors">
                  linkedin.com/in/natia-omiadze
                </span>
              </a>

              <div className="pt-4">
                <p className="text-xs font-bold uppercase tracking-wide text-charcoal-400 mb-3">
                  También en
                </p>
                <div className="flex gap-3">
                  {['Upwork', 'Fiverr'].map((name) => (
                    <a
                      key={name}
                      href="#"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white border border-charcoal-100 text-sm font-semibold text-charcoal-700 hover:border-forest-200 hover:text-forest-700 transition-all duration-200"
                    >
                      {name}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-charcoal-400">
                  Respuesta garantizada en menos de 24 horas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          background-color: #FFFFFF;
          border: 1.5px solid #e0e0e0;
          color: #1A1A1A;
          font-size: 0.95rem;
          font-family: inherit;
          transition: all 0.2s;
        }
        .form-input::placeholder {
          color: #9a9a9a;
        }
        .form-input:focus {
          outline: none;
          border-color: #1B4332;
          box-shadow: 0 0 0 3px rgba(27, 67, 50, 0.1);
        }
        .form-input:hover:not(:focus) {
          border-color: #c4c4c4;
        }
      `}</style>
    </section>
  );
}

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-charcoal-700 mb-2">
        {label}
        {required && <span className="text-forest-700 ml-0.5">*</span>}
      </span>
      {children}
      {error && <span className="block text-xs text-red-600 mt-1.5 font-medium">{error}</span>}
    </label>
  );
}
