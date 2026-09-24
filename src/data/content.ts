export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'PIS Pilot', href: '#pis' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
] as const;

export const HERO_IMAGE =
  'https://images.pexels.com/photos/7648261/pexels-photo-7648261.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800';

export const ABOUT_IMAGE =
  'https://images.pexels.com/photos/13801472/pexels-photo-13801472.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800';

export const IMPACT_NUMBERS = [
  { value: '+10', label: 'años de experiencia en compras y operaciones' },
  { value: '6', label: 'servicios especializados en ESG y proveedores' },
  { value: '2', label: 'congresos internacionales 2026' },
];

export const PROBLEM_CARDS = [
  {
    text: 'Tus datos de proveedores están en Excel, emails y carpetas. Nadie sabe cuál es la versión correcta.',
  },
  {
    text: 'Un cliente grande te ha pedido un cuestionario ESG y no sabes por dónde empezar.',
  },
  {
    text: 'La regulación europea — CSRD, CSDDD — llega en 2027 y tu empresa no está preparada.',
  },
];

export const ABOUT_CREDENTIALS = [
  { icon: '🎓', label: 'MBA', sub: 'Deusto Business School' },
  { icon: '🔬', label: 'Investigación ESG', sub: 'Revista Internacional' },
  { icon: '🎤', label: 'Ponente ACEDE 2026', sub: 'Santander' },
  { icon: '🛠️', label: 'Creadora del PIS', sub: 'Procurement Intelligence System' },
];

export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  detailSlug?: string;
  detailTitle?: string;
  detailSubtitle?: string;
  modalContent: {
    whatIs: string;
    problem: string;
    benefit: string;
    how: string;
    pricing?: string;
  };
}

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  challenge: {
    pullQuote: string;
    blocks: string[];
  };
  result: string;
  analyses: { icon: string; title: string; desc: string }[];
  steps: { title: string; desc: string }[];
  forWhom: {
    good: string[];
    bad: string[];
  };
  cta: {
    headline: string;
    subtext: string;
  };
}

export const SERVICES: Service[] = [
  {
    id: 'conoce-proveedores',
    icon: '🔍',
    title: 'Conoce a tus Proveedores',
    shortDesc: 'Evaluación y análisis ESG de tu cadena de suministro',
    detailSlug: 'inteligencia-proveedores',
    detailTitle: 'Inteligencia de Proveedores',
    detailSubtitle: 'Convertir información de proveedores en inteligencia para decidir.',
    modalContent: {
      whatIs:
        'La evaluación ESG te permite saber exactamente con quién trabajas — quién cumple, quién tiene riesgo, quién puede ponerte en problemas regulatorios.',
      problem:
        'Datos de proveedores dispersos en Excel, emails y carpetas. Nadie conecta esos datos con decisiones reales.',
      benefit:
        'Decisiones basadas en datos reales. Reduces riesgo regulatorio antes de una auditoría.',
      how: 'Recojo información de tus proveedores, la analizo con el sistema PIS, entrego informe con puntuaciones, alertas y recomendaciones.',
      pricing:
        'Precios por número de proveedores: Hasta 15 / 16-50 / 51-100 / 101-300 / +301 — Consulta en todos.',
    },
  },
  {
    id: 'integra-esg',
    icon: '🌱',
    title: 'Integra ESG en tus Compras',
    shortDesc: 'Incorpora criterios de sostenibilidad en tu selección de proveedores',
    detailSlug: 'esg-procurement',
    detailTitle: 'ESG en Procurement',
    detailSubtitle: 'Incorporar criterios de sostenibilidad en el proceso de selección y homologación de proveedores.',
    modalContent: {
      whatIs:
        'Implementamos criterios ESG en tu proceso de selección y homologación de proveedores.',
      problem:
        'Las empresas reciben cuestionarios ESG de clientes grandes. Sin criterios propios, no puedes responder — y pierdes contratos.',
      benefit:
        'Accedes a clientes que exigen sostenibilidad. Cumples CSRD y CSDDD antes de que sea obligatorio.',
      how: 'Analizo tu proceso actual, diseño criterios ESG adaptados a tu sector, te acompaño en la implementación.',
    },
  },
  {
    id: 'plan-sostenibilidad',
    icon: '📋',
    title: 'Prepara tu Plan de Sostenibilidad',
    shortDesc: 'Estrategia ESG completa para tu departamento de compras',
    detailSlug: 'estrategia-sostenibilidad',
    detailTitle: 'Estrategia de Sostenibilidad',
    detailSubtitle: 'Diseñar un plan ESG real y aplicable — con acciones concretas e indicadores medibles.',
    modalContent: {
      whatIs:
        'Plan de sostenibilidad real y aplicable — hoja de ruta con acciones concretas, no un documento para el cajón.',
      problem:
        'Muchas empresas no saben por dónde empezar con ESG ni cómo medirlo.',
      benefit:
        'Estrategia clara con indicadores medibles, alineada con CSRD y requisitos de clientes exigentes.',
      how: 'Diagnóstico inicial, diseño del plan, definición de indicadores, acompañamiento en primeros pasos.',
    },
  },
  {
    id: 'transforma-compras',
    icon: '⚙️',
    title: 'Transforma tu Departamento de Compras',
    shortDesc: 'De compras tradicional a compras sostenible',
    detailSlug: 'transformacion-procurement',
    detailTitle: 'Transformación de Procurement',
    detailSubtitle: 'De compras tradicional a compras sostenible — procesos, herramientas y cultura.',
    modalContent: {
      whatIs:
        'Transformación completa — nuevos procesos, criterios, herramientas y cultura.',
      problem:
        'El departamento sigue funcionando como hace 10 años — precio, calidad, plazo. El mercado ya no funciona así.',
      benefit:
        'Tu departamento se convierte en ventaja competitiva real.',
      how: 'Auditoría del estado actual, diseño del modelo objetivo, implementación por fases.',
    },
  },
  {
    id: 'forma-equipo',
    icon: '🎓',
    title: 'Forma a tu Equipo de Compras',
    shortDesc: 'Formación práctica en compras sostenibles y ESG',
    detailSlug: 'formacion-compras',
    detailTitle: 'Formación en Compras Sostenibles',
    detailSubtitle: 'Formación práctica para tu equipo en ESG, CSRD y gestión de proveedores.',
    modalContent: {
      whatIs:
        'Formación práctica para tu equipo en sostenibilidad, ESG, CSRD y gestión de proveedores.',
      problem:
        'El equipo no sabe qué es CSRD ni cómo responder. La formación genérica no sirve.',
      benefit:
        'Tu equipo trabaja diferente desde el primer día. Solo herramientas aplicables.',
      how: 'Sesiones presenciales o en remoto adaptadas a tu sector. Formato taller, no charla.',
    },
  },
  {
    id: 'audita-plan',
    icon: '✅',
    title: 'Audita y Mantén tu Plan ESG',
    shortDesc: '¿Ya tienes un plan? Comprobamos que funciona de verdad',
    detailSlug: 'auditoria-esg',
    detailTitle: 'Auditoría ESG de Proveedores',
    detailSubtitle: 'Inspeccionar si tu plan ESG funciona — alertas, certificaciones, vencimientos y cumplimiento real.',
    modalContent: {
      whatIs:
        'Inspeccionamos si tu plan funciona — alertas, certificaciones, vencimientos, cumplimiento real.',
      problem:
        'Muchas empresas tienen un plan ESG sobre el papel que nadie revisa. Cuando llega una auditoría, los problemas aparecen tarde.',
      benefit:
        'Detectas lo que falla antes de una auditoría externa.',
      how: 'Revisión sistemática, análisis de indicadores, informe de gaps y recomendaciones.',
    },
  },
];

export const PIS_INCLUSIVES = [
  'Hasta 10 proveedores reales',
  'Evaluación ESG completa',
  'Informe final con recomendaciones',
  'Reunión de cierre incluida',
];

export const NEWS_ARTICLES = [
  {
    image:
      'https://images.pexels.com/photos/26806048/pexels-photo-26806048.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
    category: 'ESG',
    title: 'CSRD 2026: Lo que tu departamento de compras necesita saber',
    date: '15 Ene 2026',
    excerpt:
      'La Directiva de Información Corporativa en Sostenibilidad entra en vigor para muchas empresas medianas. ¿Está tu cadena preparada?',
  },
  {
    image:
      'https://images.pexels.com/photos/9034223/pexels-photo-9034223.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
    category: 'Procurement',
    title: 'Por qué los datos de proveedores en Excel ya no son suficientes',
    date: '8 Ene 2026',
    excerpt:
      'Las empresas gestionan sus proveedores en hojas de cálculo dispersas. Cuando llega un cuestionario ESG, nadie sabe dónde está la información.',
  },
  {
    image:
      'https://images.pexels.com/photos/414905/pexels-photo-414905.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
    category: 'Movilidad Eléctrica',
    title: 'ESG y procurement en movilidad eléctrica: mi investigación',
    date: '20 Dic 2025',
    excerpt:
      'Mi investigación en revista científica internacional analiza cómo los criterios ESG transforman el procurement en movilidad eléctrica.',
  },
];

export const SUPPLIER_COUNT_OPTIONS = [
  'Menos de 15',
  '16-50',
  '51-100',
  '101-300',
  'Más de 300',
  'No tengo claro',
];

export const LINKEDIN_URL = 'https://www.linkedin.com/in/natia-omiadze/';

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'inteligencia-proveedores': {
    slug: 'inteligencia-proveedores',
    title: 'Inteligencia de Proveedores',
    subtitle: 'Convertir información de proveedores en inteligencia para decidir.',
    challenge: {
      pullQuote:
        'Las empresas disponen de más información sobre sus proveedores que nunca. El reto no es disponer de más datos — sino saber qué está cambiando, qué importa y dónde actuar.',
      blocks: [
        'Las empresas disponen de más información sobre sus proveedores que nunca, pero esa información suele estar fragmentada entre sistemas, documentos, personas y fuentes externas. El reto no es disponer de más datos, sino saber qué está cambiando, qué importa y dónde actuar.',
        'Integramos información interna y externa para construir una visión estructurada de cada proveedor: desempeño, situación financiera, exposición, ESG, documentación, cumplimiento y señales relevantes de cambio.',
        'Transformamos esa información en una base de inteligencia que permite a Procurement identificar prioridades, detectar señales tempranas y concentrar sus recursos donde existe mayor necesidad de atención.',
      ],
    },
    result:
      'Una visión más clara y accionable de la base de proveedores para tomar decisiones basadas en evidencia.',
    analyses: [
      { icon: '📊', title: 'Desempeño operativo', desc: 'Calidad, plazos, incidencias y evolución histórica de la relación.' },
      { icon: '💰', title: 'Situación financiera', desc: 'Estabilidad, solvencia y señales de riesgo económico.' },
      { icon: '🌱', title: 'ESG y sostenibilidad', desc: 'Criterios ambientales, sociales y de gobernanza aplicables a la cadena.' },
      { icon: '📋', title: 'Documentación y cumplimiento', desc: 'Certificaciones, vencimientos, requisitos regulatorios y gaps.' },
      { icon: '⚠️', title: 'Exposición y riesgo', desc: 'Concentración, dependencia, geopolítica y vulnerabilidades estructurales.' },
      { icon: '🔔', title: 'Señales de cambio', desc: 'Alertas externas, noticias relevantes y cambios en el entorno del proveedor.' },
    ],
    steps: [
      { title: 'Diagnóstico inicial', desc: 'Analizamos tu base de proveedores actual, las fuentes de información disponibles y las prioridades de tu área de Procurement.' },
      { title: 'Construcción de inteligencia', desc: 'Integramos información interna y externa. Aplicamos el sistema PIS para estructurar, validar y priorizar la información de cada proveedor.' },
      { title: 'Entrega y acción', desc: 'Presentamos los resultados con recomendaciones claras y priorizadas. Identificamos dónde actuar primero y con qué urgencia.' },
    ],
    forWhom: {
      good: [
        'Empresas industriales con más de 20 proveedores activos',
        'Departamentos de Procurement que toman decisiones con información incompleta',
        'Empresas que han recibido requisitos ESG de clientes grandes',
        'Organizaciones que quieren anticipar riesgos antes de que se conviertan en problemas',
        'Equipos de compras que quieren pasar de datos a decisiones',
      ],
      bad: [
        'Empresas que buscan un informe genérico sin aplicación real',
        'Organizaciones sin voluntad de cambiar cómo gestionan proveedores',
        'Proyectos donde el resultado no se va a usar para decidir',
      ],
    },
    cta: {
      headline: '¿Quieres saber qué está pasando realmente en tu cadena de proveedores?',
      subtext: 'Primera conversación sin coste. Sin compromiso. Cuéntame tu situación y vemos si tiene sentido trabajar juntos.',
    },
  },
};
