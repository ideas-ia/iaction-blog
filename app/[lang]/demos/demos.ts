// Cada demo se publica en su subdominio: <slug>.iaction.cl (ver proxy.ts).
export const demos = {
  extractor: {
    es: {
      title: "Extractor de datos de documentos",
      description:
        "Pega el texto de una factura, orden de compra o cotización y obtén una tabla con RUT, montos, fechas e ítems.",
      message:
        "Hola, quiero solicitar una demo (o unirme a la lista de espera) del Extractor de datos de documentos. Me interesa extraer RUT, montos, fechas e ítems de facturas, órdenes de compra o cotizaciones.",
    },
    en: {
      title: "Document data extractor",
      description:
        "Paste the text of an invoice, purchase order or quote and get a table with tax IDs, amounts, dates and line items.",
      message:
        "Hi, I'd like to request a demo (or join the waitlist) of the Document data extractor. I'm interested in extracting tax IDs, amounts, dates and line items from invoices, purchase orders or quotes.",
    },
  },
  reuniones: {
    es: {
      title: "Resumidor de reuniones",
      description:
        "Pega la transcripción de una reunión y recibe los acuerdos, responsables y fechas comprometidas.",
      message:
        "Hola, quiero solicitar una demo (o unirme a la lista de espera) del Resumidor de reuniones. Me interesa obtener acuerdos, responsables y fechas a partir de transcripciones.",
    },
    en: {
      title: "Meeting summarizer",
      description: "Paste a meeting transcript and get the agreements, owners and committed dates.",
      message:
        "Hi, I'd like to request a demo (or join the waitlist) of the Meeting summarizer. I'm interested in getting agreements, owners and dates from transcripts.",
    },
  },
  speech: {
    es: {
      title: "Speech analytics en vivo",
      description:
        "Transcripción en vivo, local en tu navegador, con análisis de IA generativa usando un micro modelo.",
      message:
        "Hola, quiero solicitar una demo (o unirme a la lista de espera) de Speech analytics en vivo. Me interesa la transcripción local en tiempo real con análisis de IA generativa.",
    },
    en: {
      title: "Live speech analytics",
      description:
        "Live transcription, running locally in your browser, with generative AI analysis using a micro model.",
      message:
        "Hi, I'd like to request a demo (or join the waitlist) of Live speech analytics. I'm interested in real-time local transcription with generative AI analysis.",
    },
  },
} as const;

export type DemoSlug = keyof typeof demos;
