import { ModuleItem, PlanItem, FaqItem } from "./types";

export const BRAND = {
  name: "RentoAI",
  domain: "rentoai.com.ar",
  company: "BALUMTech",
  architecture: "Centro de Comando Operativo",
  whatsappNumber: "5492974779978",
  whatsappDisplay: "+54 9 297 477-9978",
  location: "Sarmiento, Chubut, Argentina",
  contactEmail: "contacto@rentoai.com.ar",
};

export const METRICS = {
  responseTime: "< 4 seg",
  offHoursInquiries: "55%",
  conversionDropAfter5m: "-80%",
  toleranceMargin: "+10%",
  setupDays: "15 Días",
  dataRetained: "100%",
  metaCostRange: "USD $3 - $12/mes",
};

export const MODULES: ModuleItem[] = [
  {
    id: "ventas",
    number: "01",
    title: "Módulo Ventas",
    tagline: "Filtro comercial con criterio humano",
    description:
      "Sincroniza tu catálogo vivo cada 15 minutos con Meta Commerce Manager. Entiende la negociación inmobiliaria con tolerancia de precio (+10%), distingue entre ARS y USD Billete, e interpreta búsquedas complejas con anti-negaciones ('acepta mascotas' vs. 'no apto').",
    iconName: "TrendingUp",
    badge: "Sincronización cada 15m",
    features: [
      "Catálogo sincronizado cada 15 minutos",
      "Tolerancia inteligente de precios (+10%)",
      "Diferenciación estricta entre ARS y USD Billete",
      "Filtro semántico de características excluyentes",
    ],
    highlightMetric: "Respuesta en < 4s con stock verificado",
  },
  {
    id: "captaciones",
    number: "02",
    title: "Módulo Captaciones VIP",
    tagline: "Prioridad absoluta para quienes quieren tasar",
    description:
      "Detecta de inmediato la intención de venta o tasación de un propietario. Aplica un protocolo de máxima cortesía y despacha un ticket urgente directo al celular del corredor matriculado en segundos para que intervenga de inmediato.",
    iconName: "KeyRound",
    badge: "Prioridad Máxima",
    features: [
      "Detección semántica de intenciones de tasación",
      "Recopilación estructurada de tipología, zona y metros",
      "Despacho de alerta prioritaria por WhatsApp al martillero",
      "Cero fricción ni esperas para el propietario",
    ],
    highlightMetric: "Ticket directo al corredor en segundos",
  },
  {
    id: "match",
    number: "03",
    title: "RENTO Match",
    tagline: "Reverse Matching Activo para no perder clientes",
    description:
      "Cuando no hay propiedades que coincidan con la búsqueda, RentoAI no dice 'no tenemos'. Guarda la demanda en una Lista de Espera Inteligente. En el momento en que ingresa una nueva propiedad compatible, activa un 'Match Mágico' y notifica al cliente.",
    iconName: "Sparkles",
    badge: "Reverse Matching",
    features: [
      "Lista de espera activa por preferencias y presupuesto",
      "Algoritmo de vinculación automática ante nuevos ingresos",
      "Notificación personalizada de 'Match Mágico'",
      "Recuperación pasiva de prospectos desatendidos",
    ],
    highlightMetric: "0% de respuestas vacías ('no tenemos')",
  },
  {
    id: "soporte",
    number: "04",
    title: "Módulo Soporte & Escudo Vital",
    tagline: "Visión artificial bajo marco normativo DNU 70/2023",
    description:
      "Analiza fotografías de fallas de infraestructura enviadas por inquilinos mediante visión artificial. Si detecta fuga de gas o riesgo eléctrico activa protocolos de emergencia y evacuación. Prohíbe dar consejos caseros de reparación para blindar legalmente a la inmobiliaria.",
    iconName: "ShieldAlert",
    badge: "DNU 70/2023 Compliant",
    features: [
      "Visión artificial para diagnóstico de fotos de daños",
      "Protocolo de evacuación y corte ante emergencias vitales",
      "Blindaje legal: bloqueo de sugerencias caseras negligentes",
      "Tipificación de urgencia para cuadrillas de mantenimiento",
    ],
    highlightMetric: "Blindaje de responsabilidad civil",
  },
  {
    id: "finanzas",
    number: "05",
    title: "Módulo Finanzas & ARCA",
    tagline: "OCR inteligente y facturación oficial en 1 clic",
    description:
      "Procesa los comprobantes de transferencia y boletas mediante OCR. Notifica al administrador con un resumen listo para validar en 1 solo clic. Conexión directa mediante SDK para obtener el código CAE oficial de ARCA (ex AFIP) y enviar la factura en PDF por WhatsApp.",
    iconName: "ReceiptText",
    badge: "Sello Oficial ARCA",
    features: [
      "Lectura OCR de transferencias bancarias y recibos",
      "Validación administrativa con 1 solo clic",
      "Emisión de CAE oficial con ARCA / AFIP SDK",
      "Envío automático del PDF de factura por WhatsApp",
    ],
    highlightMetric: "Conciliación y CAE automatizados",
  },
  {
    id: "dueno",
    number: "06",
    title: "Modo Dueño & Business Intelligence",
    tagline: "Consultas de gestión en lenguaje natural blindadas",
    description:
      "Permite a los directivos consultar el estado de la inmobiliaria por WhatsApp los domingos a la noche o de viaje: '¿Cuántas tasaciones entraron esta semana?' protegido por el Triple Escudo Zero-SQL-Injection (solo lectura). Genera un reporte ejecutivo automático los lunes a las 9:00 AM.",
    iconName: "Cpu",
    badge: "Zero-SQL-Injection",
    features: [
      "Consultas en lenguaje natural conectadas a la base de datos",
      "Triple Escudo Zero-SQL-Injection en modo solo lectura",
      "Reporte ejecutivo automático los lunes a las 9:00 AM",
      "Métricas comerciales, de soporte y financieras consolidadas",
    ],
    highlightMetric: "Reporte directo los lunes 9:00 AM",
  },
  {
    id: "escudo",
    number: "07",
    title: "Escudo Financiero Meta API",
    tagline: "Control milimétrico del consumo de mensajería",
    description:
      "Meta cobra USD $0.0260 por mensaje fuera del cupo gratuito de 1.000 conversaciones. El Escudo de RentoAI filtra emojis irrelevantes, compacta respuestas extensas en una única burbuja optimizada y mantiene tu costo operativo mensual entre USD $3 y USD $12.",
    iconName: "Coins",
    badge: "Optimización de Costos",
    features: [
      "Filtro anti-spam de emojis y mensajes vacíos",
      "Compactación inteligente en una sola burbuja de respuesta",
      "Ventana de sesión de 24 hs aprovechada al máximo",
      "Costo mensual controlado entre USD $3 y USD $12",
    ],
    highlightMetric: "Ahorro del 70% en consumo Meta API",
  },
];

export const PLANS: PlanItem[] = [
  {
    id: "comercial",
    name: "Plan Comercial Omnicanal",
    badge: "Para Equipos de Ventas",
    description:
      "Enfocado en potenciar la comercialización de propiedades, captar tasaciones prioritarias y blindar la respuesta rápida en WhatsApp, Instagram y Facebook.",
    isPopular: false,
    features: [
      "Orquestador de 3 capas (WhatsApp, Instagram, FB)",
      "Atención agéntica 24/7 con respuesta en < 4 seg",
      "Sincronización cada 15m con Meta Commerce Manager",
      "Módulo Ventas con tolerancia de precio (+10%)",
      "Detección y cotización ARS vs. USD Billete",
      "Módulo Captaciones VIP con alerta urgente al martillero",
      "Escudo Financiero Meta API (costos mínimos)",
      "Memoria Transaccional Aislada de 72 hs",
      "Voseo rioplatense e interpretación de audios de voz",
    ],
    excludedFeatures: [
      "Módulo Alquileres y Administración continua",
      "RENTO Match (Reverse Matching con lista de espera)",
      "Visión artificial para fotos de roturas de infraestructura",
      "OCR de pagos y facturación automática CAE con ARCA",
      "Modo Dueño con reportes ejecutivos semanales",
    ],
    ctaLabel: "Consultar Plan Comercial",
  },
  {
    id: "total",
    name: "Plan Inmobiliaria Total",
    badge: "Recomendado · Suite Completa",
    description:
      "La solución integral de centro de comando para inmobiliarias consolidadas. Cubre ventas, alquileres, administración, finanzas y reportes de dirección.",
    isPopular: true,
    features: [
      "Todo lo incluido en el Plan Comercial Omnicanal",
      "Módulo Administración y Gestión Continua de Alquileres",
      "RENTO Match: Lista de espera activa y 'Match Mágico'",
      "Módulo Soporte con Visión Artificial y Escudo DNU 70/2023",
      "OCR inteligente de transferencias bancarias",
      "Facturación en 1 clic con sello oficial CAE de ARCA / AFIP",
      "Modo Dueño: Text-to-SQL blindado para directivos",
      "Reporte ejecutivo consolidado automático (lunes 9 AM)",
      "Soporte prioritario y calibración continua de agentes",
      "Setup Llave en Mano en 15 Días por BALUMTech",
    ],
    ctaLabel: "Solicitar Inmobiliaria Total",
  },
];

export const FAQS: FaqItem[] = [
  {
    category: "General",
    question: "¿Qué es exactamente RentoAI y en qué se diferencia de un chatbot tradicional?",
    answer:
      "RentoAI no es un bot con opciones fijas ('Marque 1 para ventas'). Es un Centro de Comando Agéntico que habla en lenguaje natural argentino (voseo rioplatense), entiende audios de voz, negocia con tolerancia comercial (+10%), distingue USD Billete de pesos, inspecciona fotos de roturas con visión artificial y emite facturas con ARCA. Los asesores humanos solo intervienen cuando hay un negocio concreto.",
  },
  {
    category: "Comercial",
    question: "¿Por qué el 55% de las consultas fuera de horario son tan críticas?",
    answer:
      "Las estadísticas del mercado inmobiliario demuestran que las consultas de mayor valor (tasaciones de propietarios que quieren vender y familias buscando mudarse) ingresan de 18:00 a 24:00 hs o los fines de semana. Si un prospecto no recibe respuesta dentro de los primeros 5 minutos, la probabilidad de conversión cae un 80%. RentoAI responde en menos de 4 segundos sin importar el día ni la hora.",
  },
  {
    category: "Técnico",
    question: "¿Tengo que cambiar el número de WhatsApp de mi inmobiliaria?",
    answer:
      "No. RentoAI se conecta de manera oficial a través de Meta Cloud API sobre la línea o números actuales de tu inmobiliaria. Además, al centralizar las conversaciones en la base de datos de tu empresa, si un vendedor se desvincula, la cartera de clientes queda 100% resguardada en tu agencia.",
  },
  {
    category: "Legal y Fiscal",
    question: "¿Cómo funciona el cumplimiento del DNU 70/2023 y la facturación con ARCA?",
    answer:
      "El Módulo Soporte está calibrado bajo el marco del DNU 70/2023 de alquileres. Ante un reporte de inquilinos, clasifica urgencias sin brindar diagnósticos caseros que generen responsabilidad civil a la inmobiliaria. Por otro lado, el Módulo Finanzas lee el comprobante por OCR y, con la aprobación del administrador en 1 clic, genera el CAE oficial ante ARCA (ex AFIP) despachando el comprobante por WhatsApp.",
  },
  {
    category: "Comercial",
    question: "¿Cuánto tiempo demora la puesta en marcha de RentoAI?",
    answer:
      "Ofrecemos un 'Setup Llave en Mano en 15 Días'. El equipo de ingenieros de BALUMTech se encarga de la integración con tu catálogo de propiedades, conexión de Meta API, configuración de reglas comerciales y capacitación a tu equipo para que no tengas fricción operativa.",
  },
  {
    category: "Técnico",
    question: "¿Cuáles son los costos adicionales de la API de WhatsApp de Meta?",
    answer:
      "Gracias al Escudo Financiero desarrollado por BALUMTech, RentoAI compacta respuestas, filtra mensajes vacíos y aprovecha la ventana gratuita de 24 horas de Meta. Para una inmobiliaria con volumen estándar, el costo mensual de la API oscila entre USD $3 y USD $12 al mes.",
  },
];
