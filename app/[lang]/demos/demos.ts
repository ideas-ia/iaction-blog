// Cada demo se publica en su subdominio: <slug>.iaction.cl (ver proxy.ts).
export const demos = {
  extractor: {
    title: "Extractor de datos de documentos",
    description:
      "Pega el texto de una factura, orden de compra o cotización y obtén una tabla con RUT, montos, fechas e ítems.",
    message:
      "Hola, quiero solicitar una demo (o unirme a la lista de espera) del Extractor de datos de documentos. Me interesa extraer RUT, montos, fechas e ítems de facturas, órdenes de compra o cotizaciones.",
  },
  reuniones: {
    title: "Resumidor de reuniones",
    description:
      "Pega la transcripción de una reunión y recibe los acuerdos, responsables y fechas comprometidas.",
    message:
      "Hola, quiero solicitar una demo (o unirme a la lista de espera) del Resumidor de reuniones. Me interesa obtener acuerdos, responsables y fechas a partir de transcripciones.",
  },
  speech: {
    title: "Speech analytics en vivo",
    description:
      "Transcripción en vivo, local en tu navegador, con análisis de IA generativa usando un micro modelo.",
    message:
      "Hola, quiero solicitar una demo (o unirme a la lista de espera) de Speech analytics en vivo. Me interesa la transcripción local en tiempo real con análisis de IA generativa.",
  },
} as const;

export type DemoSlug = keyof typeof demos;
