export type Locale = "es" | "en";

export const translations = {
  es: {
    // Navbar
    meta: {
      title: "iaction | Ingeniería de IA, automatización y sistemas inteligentes",
      description:
        "Estudio de IA aplicada: diseñamos, desarrollamos e integramos sistemas de inteligencia artificial que automatizan operaciones, conectan plataformas y transforman datos en decisiones.",
      ogLocale: "es_CL",
      skipLink: "Saltar al contenido principal",
    },
    nav: {
      services: "Servicios",
      solutions: "Soluciones",
      process: "Proceso",
      demos: "Demos",
      faq: "FAQ",
      contact: "Contacto",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },

    // Hero
    hero: {
      badge: "Intelligence into Action",
      titleStart: "Convertimos procesos complejos en ",
      titleAccent: "soluciones inteligentes",
      description:
        "Diseñamos, desarrollamos e integramos sistemas de inteligencia artificial que automatizan operaciones, conectan plataformas y transforman datos en decisiones.",
      ctaQuote: "Solicitar Cotización",
      ctaCases: "Ver demos",
      microcopy: "Respuesta en menos de 24 horas \u00b7 Sin compromisos",
    },

    // Problems
    problems: {
      label: "Problema & Solución",
      title: "Los desafíos que resolvemos para tu negocio",
      items: [
        {
          title: "Procesos Manuales que Consumen Tiempo",
          description:
            "Tu equipo dedica horas a tareas repetitivas que podrían automatizarse, reduciendo la productividad y aumentando el margen de error humano.",
        },
        {
          title: "Costos Operativos Elevados",
          description:
            "Operaciones ineficientes generan gastos innecesarios. La falta de automatización impacta directamente en tu rentabilidad y competitividad.",
        },
        {
          title: "Datos Sin Aprovechar",
          description:
            "Tu negocio genera datos valiosos que no se analizan. Sin IA, pierdes insights clave para tomar decisiones estratégicas informadas.",
        },
      ],
    },

    // Services
    services: {
      label: "Servicios",
      title: "Tres líneas de trabajo, un foco: IA aplicada",
      items: [
        {
          title: "AI Solutions",
          summary: "Agentes, RAG y asistentes empresariales",
          benefits: [
            "Agentes que ejecutan tareas sobre tus sistemas",
            "Asistentes con RAG sobre tu documentación interna",
            "Modelos LLM elegidos según costo, latencia y privacidad",
            "Evaluación y monitoreo de calidad en producción",
          ],
        },
        {
          title: "Intelligent Automation",
          summary: "Workflows, integraciones y automatización documental",
          benefits: [
            "Extracción de datos de facturas, órdenes de compra y contratos",
            "Flujos de trabajo que conectan tus plataformas actuales",
            "Integraciones vía APIs y webhooks",
            "Revisión humana donde el riesgo lo exige",
          ],
        },
        {
          title: "Data Intelligence",
          summary: "Speech analytics, extracción de información y dashboards",
          benefits: [
            "Transcripción y análisis de interacciones de contact center",
            "Clasificación de temas, motivos y sentimiento",
            "Dashboards con los indicadores de tu operación",
            "Reportes accionables generados automáticamente",
          ],
        },
      ],
    },

    // Solutions
    solutions: {
      label: "Soluciones",
      title: "Dónde aplicamos IA",
      subtitle: "Los tipos de proyectos que diseñamos e implementamos para empresas.",
      items: [
        {
          title: "Transcripción, Categorización y Análisis de Atenciones",
          description:
            "Procesamos automáticamente interacciones de contact center, chatbots y atención presencial. Extraemos insights, clasificamos temas y generamos reportes accionables con IA.",
          tags: ["Contact Center", "Chatbots", "Presencial"],
        },
        {
          title: "Procesamiento Documental",
          description:
            "Extraemos RUT, montos, fechas e ítems de facturas, órdenes de compra, cotizaciones y contratos, y los cargamos directo en tus sistemas.",
          tags: ["Facturas", "Contratos", "OCR + LLM"],
        },
        {
          title: "Asistentes y Agentes Empresariales",
          description:
            "Asistentes que responden con la información de tu empresa (RAG) y agentes que ejecutan tareas sobre tus sistemas, con trazabilidad de cada acción.",
          tags: ["RAG", "Agentes", "LLM"],
        },
        {
          title: "Reportes y Analítica",
          description:
            "Dashboards automatizados, reportes inteligentes y analítica predictiva. Transformamos datos brutos en decisiones estratégicas con modelos de IA avanzados.",
          tags: ["Dashboards", "Predicción", "KPIs"],
        },
        {
          title: "Integraciones",
          description:
            "Conectamos tus sistemas y herramientas existentes con soluciones de IA. APIs, webhooks, automatizaciones entre plataformas y flujos de datos en tiempo real.",
          tags: ["APIs", "Webhooks", "Automatización"],
        },
      ],
    },

    // Process
    process: {
      label: "Proceso",
      title: "De la idea a la solución en 4 pasos",
      steps: [
        {
          title: "Consultoría",
          description:
            "Analizamos tu negocio, identificamos oportunidades de automatización y definimos objetivos claros.",
        },
        {
          title: "Diseño",
          description:
            "Creamos la arquitectura de la solución, seleccionamos las tecnologías óptimas y planificamos cada fase.",
        },
        {
          title: "Implementación",
          description:
            "Desarrollamos e integramos la solución con tus sistemas actuales, con pruebas rigurosas en cada etapa.",
        },
        {
          title: "Soporte",
          description:
            "Monitoreo continuo, optimización y soporte técnico para asegurar que todo funcione al máximo rendimiento.",
        },
      ],
    },

    // Tech Marquee
    tech: {
      label: "Tecnologías",
      title: "Herramientas que impulsan nuestras soluciones",
    },

    // Demos
    demos: {
      label: "Demos",
      title: "Prueba la IA aplicada a tu operación",
      subtitle:
        "Demos que estamos preparando. Pide acceso anticipado o únete a la lista de espera.",
      soon: "Próximamente",
      request: "Solicitar demo o unirme a la lista de espera",
      back: "Volver a iaction",
    },

    // FAQ
    faq: {
      label: "FAQ",
      title: "Preguntas Frecuentes",
      items: [
        {
          question: "¿Cuánto cuesta desarrollar una automatización con IA?",
          answer:
            "Cada proyecto es único, por lo que los costos varían según la complejidad y alcance. Ofrecemos una consulta inicial gratuita donde analizamos tus necesidades y entregamos una cotización detallada sin compromisos. Los proyectos típicos van desde soluciones simples hasta integraciones empresariales completas.",
        },
        {
          question: "¿Cuánto tiempo toma implementar una solución?",
          answer:
            "Los tiempos dependen del alcance del proyecto. Automatizaciones simples pueden estar listas en 1-2 semanas, mientras que proyectos más complejos toman de 4 a 8 semanas. Siempre entregamos un cronograma detallado antes de comenzar.",
        },
        {
          question: "¿Qué tecnologías utilizan?",
          answer:
            "Trabajamos con modelos de OpenAI, Anthropic (Claude) y Google, LangChain, Python, Node.js, APIs REST y bases de datos. Elegimos la combinación según costo, latencia, privacidad de los datos y los sistemas que ya tienes.",
        },
        {
          question: "¿Necesito conocimientos técnicos para usar las soluciones?",
          answer:
            "No. Todas las soluciones que desarrollamos están diseñadas para ser intuitivas y fáciles de usar. Además, entregamos documentación completa, capacitación y soporte continuo para que tu equipo pueda operar todo sin problemas.",
        },
        {
          question: "¿Ofrecen soporte después de la implementación?",
          answer:
            "Sí, ofrecemos planes de soporte que incluyen monitoreo, mantenimiento, actualizaciones y optimización continua. Nuestro objetivo es que las soluciones sigan funcionando al máximo rendimiento a largo plazo.",
        },
      ],
    },

    // Contact
    contact: {
      badge: "Comienza Hoy",
      title: "¿Listo para automatizar?",
      subtitle:
        "Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada en menos de 24 horas.",
      successTitle: "Mensaje enviado",
      successMessage: "Te contactaremos en menos de 24 horas. Gracias por tu interés.",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre completo",
      emailLabel: "Email",
      emailPlaceholder: "tu@email.com",
      phoneLabel: "Teléfono",
      phonePlaceholder: "+56 9 1234 5678",
      messageLabel: "Mensaje",
      messagePlaceholder: "Describe brevemente tu proyecto o necesidad...",
      submitButton: "Solicitar Cotización Ahora",
      disclaimer: "Sin compromisos \u00b7 Respuesta garantizada en 24 horas",
      errName: "Ingresa tu nombre (2 a 100 caracteres).",
      errEmail: "Ingresa un email válido.",
      errMessage: "Cuéntanos un poco más (10 a 2000 caracteres).",
      assistantTitle: "Asistente IA (en tu dispositivo)",
      assistantIntro: "Cuéntame qué quieres automatizar y te ayudo a armar el mensaje.",
      assistantPlaceholder: "Ej: respondemos 200 correos de clientes al día a mano",
      assistantSend: "Enviar",
      assistantUse: "Usar en el mensaje",
      assistantUndo: "Deshacer",
      assistantDownloading: "Preparando el modelo de IA…",
      assistantError: "El asistente no pudo responder. Puedes escribir el mensaje directamente.",
    },

    // Footer
    footer: {
      tagline: "Intelligence into Action. Ingeniería de IA para empresas.",
      copyright: "Todos los derechos reservados.",
      homeHref: "/",
      homeLabel: "iaction inicio",
      navLabel: "Enlaces del pie",
      mailSubject: "Consulta desde iaction.cl",
      mailBody:
        "Hola, me gustaría automatizar:\n\nProceso: \nVolumen aproximado: \nPlazo: \n\nNombre y empresa: ",
    },

    // Theme toggle
    theme: {
      switchToLight: "Cambiar a modo claro",
      switchToDark: "Cambiar a modo oscuro",
    },
  },

  en: {
    // Navbar
    meta: {
      title: "iaction | AI Engineering, Automation & Intelligent Systems",
      description:
        "Applied AI studio: we design, build and integrate artificial intelligence systems that automate operations, connect platforms and turn data into decisions.",
      ogLocale: "en_US",
      skipLink: "Skip to main content",
    },
    nav: {
      services: "Services",
      solutions: "Solutions",
      process: "Process",
      demos: "Demos",
      faq: "FAQ",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },

    // Hero
    hero: {
      badge: "Intelligence into Action",
      titleStart: "We turn complex processes into ",
      titleAccent: "intelligent solutions",
      description:
        "We design, build and integrate artificial intelligence systems that automate operations, connect platforms and turn data into decisions.",
      ctaQuote: "Request a Quote",
      ctaCases: "See demos",
      microcopy: "Response within 24 hours \u00b7 No commitment",
    },

    // Problems
    problems: {
      label: "Problem & Solution",
      title: "The challenges we solve for your business",
      items: [
        {
          title: "Time-Consuming Manual Processes",
          description:
            "Your team spends hours on repetitive tasks that could be automated, reducing productivity and increasing the margin for human error.",
        },
        {
          title: "High Operating Costs",
          description:
            "Inefficient operations generate unnecessary expenses. The lack of automation directly impacts your profitability and competitiveness.",
        },
        {
          title: "Untapped Data",
          description:
            "Your business generates valuable data that goes unanalyzed. Without AI, you miss key insights for making informed strategic decisions.",
        },
      ],
    },

    // Services
    services: {
      label: "Services",
      title: "Three lines of work, one focus: applied AI",
      items: [
        {
          title: "AI Solutions",
          summary: "Agents, RAG and enterprise assistants",
          benefits: [
            "Agents that carry out tasks on your systems",
            "RAG assistants over your internal documentation",
            "LLMs chosen for cost, latency and privacy",
            "Quality evaluation and monitoring in production",
          ],
        },
        {
          title: "Intelligent Automation",
          summary: "Workflows, integrations and document automation",
          benefits: [
            "Data extraction from invoices, purchase orders and contracts",
            "Workflows that connect your current platforms",
            "Integrations via APIs and webhooks",
            "Human review where the risk calls for it",
          ],
        },
        {
          title: "Data Intelligence",
          summary: "Speech analytics, information extraction and dashboards",
          benefits: [
            "Transcription and analysis of contact center interactions",
            "Topic, reason and sentiment classification",
            "Dashboards with your operation's KPIs",
            "Actionable reports generated automatically",
          ],
        },
      ],
    },

    // Solutions
    solutions: {
      label: "Solutions",
      title: "Where we apply AI",
      subtitle: "The kinds of projects we design and deliver for companies.",
      items: [
        {
          title: "Transcription, Categorization & Interaction Analysis",
          description:
            "We automatically process contact center, chatbot, and in-person interactions. We extract insights, classify topics, and generate actionable reports with AI.",
          tags: ["Contact Center", "Chatbots", "In-Person"],
        },
        {
          title: "Document Processing",
          description:
            "We extract tax IDs, amounts, dates and line items from invoices, purchase orders, quotes and contracts, and load them straight into your systems.",
          tags: ["Invoices", "Contracts", "OCR + LLM"],
        },
        {
          title: "Enterprise Assistants & Agents",
          description:
            "Assistants that answer with your company's own information (RAG) and agents that carry out tasks on your systems, with every action traceable.",
          tags: ["RAG", "Agents", "LLM"],
        },
        {
          title: "Reports & Analytics",
          description:
            "Automated dashboards, smart reports, and predictive analytics. We transform raw data into strategic decisions with advanced AI models.",
          tags: ["Dashboards", "Prediction", "KPIs"],
        },
        {
          title: "Integrations",
          description:
            "We connect your existing systems and tools with AI solutions. APIs, webhooks, cross-platform automations, and real-time data flows.",
          tags: ["APIs", "Webhooks", "Automation"],
        },
      ],
    },

    // Process
    process: {
      label: "Process",
      title: "From idea to solution in 4 steps",
      steps: [
        {
          title: "Consulting",
          description:
            "We analyze your business, identify automation opportunities, and define clear objectives.",
        },
        {
          title: "Design",
          description:
            "We create the solution architecture, select optimal technologies, and plan each phase.",
        },
        {
          title: "Implementation",
          description:
            "We develop and integrate the solution with your current systems, with rigorous testing at every stage.",
        },
        {
          title: "Support",
          description:
            "Continuous monitoring, optimization, and technical support to ensure everything runs at peak performance.",
        },
      ],
    },

    // Tech Marquee
    tech: {
      label: "Technologies",
      title: "Tools that power our solutions",
    },

    // Demos
    demos: {
      label: "Demos",
      title: "Try AI applied to your operation",
      subtitle: "Demos we're preparing. Ask for early access or join the waitlist.",
      soon: "Coming soon",
      request: "Request a demo or join the waitlist",
      back: "Back to iaction",
    },

    // FAQ
    faq: {
      label: "FAQ",
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How much does it cost to develop an AI automation?",
          answer:
            "Each project is unique, so costs vary depending on complexity and scope. we offer a free initial consultation where we analyze your needs and provide a detailed, no-obligation quote. Typical projects range from simple solutions to full enterprise integrations.",
        },
        {
          question: "How long does it take to implement a solution?",
          answer:
            "Timelines depend on the project scope. Simple automations can be ready in 1-2 weeks, while more complex projects take 4 to 8 weeks. We always deliver a detailed timeline before starting.",
        },
        {
          question: "What technologies do you use?",
          answer:
            "We work with models from OpenAI, Anthropic (Claude) and Google, LangChain, Python, Node.js, REST APIs and databases. We pick the combination based on cost, latency, data privacy and the systems you already run.",
        },
        {
          question: "Do I need technical knowledge to use the solutions?",
          answer:
            "No. All solutions we build are designed to be intuitive and easy to use. We also provide complete documentation, training, and ongoing support so your team can operate everything smoothly.",
        },
        {
          question: "Do you offer support after implementation?",
          answer:
            "Yes, we offer support plans that include monitoring, maintenance, updates, and continuous optimization. Our goal is for solutions to keep running at peak performance long-term.",
        },
      ],
    },

    // Contact
    contact: {
      badge: "Get Started Today",
      title: "Ready to Automate?",
      subtitle:
        "Tell us about your project and we'll send you a personalized proposal within 24 hours.",
      successTitle: "Message Sent",
      successMessage: "We'll contact you within 24 hours. Thank you for your interest.",
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      phoneLabel: "Phone",
      phonePlaceholder: "+1 555 123 4567",
      messageLabel: "Message",
      messagePlaceholder: "Briefly describe your project or need...",
      submitButton: "Request a Quote Now",
      disclaimer: "No commitment \u00b7 Guaranteed response within 24 hours",
      errName: "Enter your name (2 to 100 characters).",
      errEmail: "Enter a valid email.",
      errMessage: "Tell us a bit more (10 to 2000 characters).",
      assistantTitle: "AI assistant (on your device)",
      assistantIntro: "Tell me what you want to automate and I'll help you write the message.",
      assistantPlaceholder: "E.g. we answer 200 customer emails a day by hand",
      assistantSend: "Send",
      assistantUse: "Use in message",
      assistantUndo: "Undo",
      assistantDownloading: "Preparing the AI model…",
      assistantError: "The assistant couldn't respond. You can write the message directly.",
    },

    // Footer
    footer: {
      tagline: "Intelligence into Action. AI engineering for companies.",
      copyright: "All rights reserved.",
      homeHref: "/en",
      homeLabel: "iaction home",
      navLabel: "Footer links",
      mailSubject: "Inquiry from iaction.cl",
      mailBody:
        "Hi, I'd like to automate:\n\nProcess: \nApproximate volume: \nTimeline: \n\nName and company: ",
    },

    // Theme toggle
    theme: {
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];
