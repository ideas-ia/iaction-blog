export type Locale = "es" | "en"

export const translations = {
  es: {
    // Navbar
    nav: {
      services: "Servicios",
      solutions: "Soluciones",
      process: "Proceso",
      results: "Resultados",
      faq: "FAQ",
      contact: "Contacto",
      openMenu: "Abrir menu",
      closeMenu: "Cerrar menu",
    },

    // Hero
    hero: {
      badge: "100% Freelance \u00b7 Soluciones a Medida",
      titleStart: "Automatiza tu Negocio con ",
      titleAccent: "Inteligencia Artificial",
      description:
        "Desarrollo soluciones de IA personalizadas que reducen costos operativos hasta un 70% y transforman la manera en que operas.",
      ctaQuote: "Solicitar Cotizacion",
      ctaConsult: "Agendar Consulta Gratis",
      ctaCases: "Ver Casos de Exito",
      microcopy: "Respuesta en menos de 24 horas \u00b7 Sin compromisos",
    },

    // Problems
    problems: {
      label: "Problema & Solucion",
      title: "Los desafios que resolvemos para tu negocio",
      items: [
        {
          title: "Procesos Manuales que Consumen Tiempo",
          description:
            "Tu equipo dedica horas a tareas repetitivas que podrian automatizarse, reduciendo la productividad y aumentando el margen de error humano.",
        },
        {
          title: "Costos Operativos Elevados",
          description:
            "Operaciones ineficientes generan gastos innecesarios. La falta de automatizacion impacta directamente en tu rentabilidad y competitividad.",
        },
        {
          title: "Datos Sin Aprovechar",
          description:
            "Tu negocio genera datos valiosos que no se analizan. Sin IA, pierdes insights clave para tomar decisiones estrategicas informadas.",
        },
      ],
    },

    // Services
    services: {
      label: "Servicios",
      title: "Soluciones de IA para cada necesidad",
      items: [
        {
          title: "Automatizacion de Procesos",
          benefits: [
            "Flujos de trabajo inteligentes",
            "Integracion con tus herramientas actuales",
            "Reduccion de errores hasta un 95%",
            "Escalabilidad automatica",
          ],
        },
        {
          title: "Chatbots e Interfaces IA",
          benefits: [
            "Atencion al cliente 24/7",
            "Procesamiento de lenguaje natural",
            "Integracion multicanal",
            "Aprendizaje continuo",
          ],
        },
        {
          title: "Analisis de Datos con IA",
          benefits: [
            "Dashboards predictivos",
            "Insights automatizados",
            "Reportes inteligentes",
            "Deteccion de patrones ocultos",
          ],
        },
      ],
    },

    // Solutions
    solutions: {
      label: "Soluciones",
      title: "Proyectos que ya estan generando resultados",
      subtitle:
        "Soluciones implementadas para distintas industrias y necesidades de negocio.",
      items: [
        {
          title: "Transcripcion, Categorizacion y Analisis de Atenciones",
          description:
            "Procesamos automaticamente interacciones de contact center, chatbots y atencion presencial. Extraemos insights, clasificamos temas y generamos reportes accionables con IA.",
          tags: ["Contact Center", "Chatbots", "Presencial"],
        },
        {
          title: "Catalogos y Menus de Tiendas",
          description:
            "Digitalizacion y gestion inteligente de catalogos de productos y menus. Actualizacion automatica, categorizacion y busqueda optimizada con procesamiento de lenguaje natural.",
          tags: ["E-commerce", "Retail", "Restaurantes"],
        },
        {
          title: "Sitios Web",
          description:
            "Desarrollo de sitios web modernos e inteligentes con integraciones de IA. Landing pages, plataformas y aplicaciones web optimizadas para conversion y rendimiento.",
          tags: ["Landing Pages", "Plataformas", "Web Apps"],
        },
        {
          title: "Reportes y Analitica",
          description:
            "Dashboards automatizados, reportes inteligentes y analitica predictiva. Transformamos datos brutos en decisiones estrategicas con modelos de IA avanzados.",
          tags: ["Dashboards", "Prediccion", "KPIs"],
        },
        {
          title: "Integraciones",
          description:
            "Conectamos tus sistemas y herramientas existentes con soluciones de IA. APIs, webhooks, automatizaciones entre plataformas y flujos de datos en tiempo real.",
          tags: ["APIs", "Webhooks", "Automatizacion"],
        },
        {
          title: "Redes Sociales",
          description:
            "Gestion inteligente de redes sociales con IA. Generacion de contenido, programacion automatica de publicaciones, analisis de engagement y estrategias de crecimiento basadas en datos.",
          tags: ["Contenido IA", "Programacion", "Analitica Social"],
        },
        {
          title: "SEO e Inteligencia de Contenido",
          description:
            "Optimizacion para motores de busqueda potenciada por IA. Investigacion de keywords, auditorias tecnicas, generacion de contenido optimizado y seguimiento de posicionamiento automatizado.",
          tags: ["Keywords", "Contenido SEO", "Posicionamiento"],
        },
      ],
    },

    // Process
    process: {
      label: "Proceso",
      title: "De la idea a la solucion en 4 pasos",
      steps: [
        {
          title: "Consultoria",
          description:
            "Analizamos tu negocio, identificamos oportunidades de automatizacion y definimos objetivos claros.",
        },
        {
          title: "Diseno",
          description:
            "Creamos la arquitectura de la solucion, seleccionamos las tecnologias optimas y planificamos cada fase.",
        },
        {
          title: "Implementacion",
          description:
            "Desarrollamos e integramos la solucion con tus sistemas actuales, con pruebas rigurosas en cada etapa.",
        },
        {
          title: "Soporte",
          description:
            "Monitoreo continuo, optimizacion y soporte tecnico para asegurar que todo funcione al maximo rendimiento.",
        },
      ],
    },

    // Tech Marquee
    tech: {
      label: "Tecnologias",
      title: "Herramientas que impulsan nuestras soluciones",
    },

    // Results
    results: {
      label: "Resultados",
      title: "Resultados que hablan por si solos",
      metrics: [
        {
          metric: "70%",
          label: "Reduccion de costos operativos",
          description:
            "Empresa de logistica automatizo su procesamiento de pedidos, eliminando cuellos de botella manuales.",
        },
        {
          metric: "120h",
          label: "Horas ahorradas al mes",
          description:
            "Startup fintech automatizo su onboarding de clientes, pasando de 45 minutos a 3 minutos por cliente.",
        },
        {
          metric: "3x",
          label: "Aumento en conversion",
          description:
            "E-commerce implemento chatbot IA que triplico la tasa de conversion en atencion al cliente.",
        },
      ],
      testimonial:
        "La automatizacion que implementaron transformo completamente nuestras operaciones. Lo que antes tomaba dias ahora se resuelve en minutos. Una inversion que se pago sola en el primer mes.",
      testimonialAuthor: "Carlos Mendez",
      testimonialRole: "CEO, LogiTech Solutions",
    },

    // FAQ
    faq: {
      label: "FAQ",
      title: "Preguntas Frecuentes",
      items: [
        {
          question: "Cuanto cuesta desarrollar una automatizacion con IA?",
          answer:
            "Cada proyecto es unico, por lo que los costos varian segun la complejidad y alcance. Ofrezco una consulta inicial gratuita donde analizo tus necesidades y proporciono una cotizacion detallada sin compromisos. Los proyectos tipicos van desde soluciones simples hasta integraciones empresariales completas.",
        },
        {
          question: "Cuanto tiempo toma implementar una solucion?",
          answer:
            "Los tiempos dependen del alcance del proyecto. Automatizaciones simples pueden estar listas en 1-2 semanas, mientras que proyectos mas complejos toman de 4 a 8 semanas. Siempre entrego un cronograma detallado antes de comenzar.",
        },
        {
          question:
            "Que tecnologias utilizas para las automatizaciones?",
          answer:
            "Trabajo con las tecnologias mas avanzadas del mercado: OpenAI, Claude, LangChain, Python, Node.js, APIs REST, bases de datos y plataformas de integracion como Zapier y Make. Selecciono la mejor combinacion segun tus necesidades especificas.",
        },
        {
          question:
            "Necesito conocimientos tecnicos para usar las soluciones?",
          answer:
            "No. Todas las soluciones que desarrollo estan disenadas para ser intuitivas y faciles de usar. Ademas, proporciono documentacion completa, capacitacion y soporte continuo para que tu equipo pueda operar todo sin problemas.",
        },
        {
          question: "Ofrecen soporte despues de la implementacion?",
          answer:
            "Si, ofrezco planes de soporte que incluyen monitoreo, mantenimiento, actualizaciones y optimizacion continua. Mi objetivo es que las soluciones sigan funcionando al maximo rendimiento a largo plazo.",
        },
      ],
    },

    // Contact
    contact: {
      badge: "Comienza Hoy",
      title: "Listo para Automatizar?",
      subtitle:
        "Cuentame sobre tu proyecto y te envio una propuesta personalizada en menos de 24 horas.",
      successTitle: "Mensaje Enviado",
      successMessage:
        "Te contactare en menos de 24 horas. Gracias por tu interes.",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre completo",
      emailLabel: "Email",
      emailPlaceholder: "tu@email.com",
      phoneLabel: "Telefono",
      phonePlaceholder: "+52 55 1234 5678",
      messageLabel: "Mensaje",
      messagePlaceholder:
        "Describe brevemente tu proyecto o necesidad...",
      submitButton: "Solicitar Cotizacion Ahora",
      disclaimer:
        "Sin compromisos \u00b7 Respuesta garantizada en 24 horas",
    },

    // Footer
    footer: {
      tagline:
        "Soluciones de IA personalizadas para transformar tu negocio.",
      copyright: "Todos los derechos reservados.",
    },

    // Theme toggle
    theme: {
      switchToLight: "Cambiar a modo claro",
      switchToDark: "Cambiar a modo oscuro",
    },
  },

  en: {
    // Navbar
    nav: {
      services: "Services",
      solutions: "Solutions",
      process: "Process",
      results: "Results",
      faq: "FAQ",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },

    // Hero
    hero: {
      badge: "100% Freelance \u00b7 Tailored Solutions",
      titleStart: "Automate Your Business with ",
      titleAccent: "Artificial Intelligence",
      description:
        "I build custom AI solutions that cut operating costs by up to 70% and transform the way you run your business.",
      ctaQuote: "Request a Quote",
      ctaConsult: "Book a Free Consultation",
      ctaCases: "View Success Stories",
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
      title: "AI solutions for every need",
      items: [
        {
          title: "Process Automation",
          benefits: [
            "Intelligent workflows",
            "Integration with your current tools",
            "Error reduction up to 95%",
            "Automatic scalability",
          ],
        },
        {
          title: "AI Chatbots & Interfaces",
          benefits: [
            "24/7 customer support",
            "Natural language processing",
            "Multichannel integration",
            "Continuous learning",
          ],
        },
        {
          title: "AI Data Analytics",
          benefits: [
            "Predictive dashboards",
            "Automated insights",
            "Smart reports",
            "Hidden pattern detection",
          ],
        },
      ],
    },

    // Solutions
    solutions: {
      label: "Solutions",
      title: "Projects already delivering results",
      subtitle:
        "Solutions implemented across different industries and business needs.",
      items: [
        {
          title: "Transcription, Categorization & Interaction Analysis",
          description:
            "We automatically process contact center, chatbot, and in-person interactions. We extract insights, classify topics, and generate actionable reports with AI.",
          tags: ["Contact Center", "Chatbots", "In-Person"],
        },
        {
          title: "Store Catalogs & Menus",
          description:
            "Intelligent digitization and management of product catalogs and menus. Automatic updates, categorization, and search optimized with natural language processing.",
          tags: ["E-commerce", "Retail", "Restaurants"],
        },
        {
          title: "Websites",
          description:
            "Modern, intelligent websites with AI integrations. Landing pages, platforms, and web applications optimized for conversion and performance.",
          tags: ["Landing Pages", "Platforms", "Web Apps"],
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
        {
          title: "Social Media",
          description:
            "AI-powered social media management. Content generation, automated post scheduling, engagement analytics, and data-driven growth strategies.",
          tags: ["AI Content", "Scheduling", "Social Analytics"],
        },
        {
          title: "SEO & Content Intelligence",
          description:
            "AI-powered search engine optimization. Keyword research, technical audits, optimized content generation, and automated ranking tracking.",
          tags: ["Keywords", "SEO Content", "Rankings"],
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

    // Results
    results: {
      label: "Results",
      title: "Results that speak for themselves",
      metrics: [
        {
          metric: "70%",
          label: "Reduction in operating costs",
          description:
            "A logistics company automated its order processing, eliminating manual bottlenecks.",
        },
        {
          metric: "120h",
          label: "Hours saved per month",
          description:
            "A fintech startup automated its client onboarding, going from 45 minutes to 3 minutes per client.",
        },
        {
          metric: "3x",
          label: "Increase in conversion",
          description:
            "An e-commerce business implemented an AI chatbot that tripled customer service conversion rates.",
        },
      ],
      testimonial:
        "The automation they implemented completely transformed our operations. What used to take days is now resolved in minutes. An investment that paid for itself in the first month.",
      testimonialAuthor: "Carlos Mendez",
      testimonialRole: "CEO, LogiTech Solutions",
    },

    // FAQ
    faq: {
      label: "FAQ",
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How much does it cost to develop an AI automation?",
          answer:
            "Each project is unique, so costs vary depending on complexity and scope. I offer a free initial consultation where I analyze your needs and provide a detailed, no-obligation quote. Typical projects range from simple solutions to full enterprise integrations.",
        },
        {
          question: "How long does it take to implement a solution?",
          answer:
            "Timelines depend on the project scope. Simple automations can be ready in 1-2 weeks, while more complex projects take 4 to 8 weeks. I always deliver a detailed timeline before starting.",
        },
        {
          question:
            "What technologies do you use for automations?",
          answer:
            "I work with the most advanced technologies on the market: OpenAI, Claude, LangChain, Python, Node.js, REST APIs, databases, and integration platforms like Zapier and Make. I select the best combination based on your specific needs.",
        },
        {
          question:
            "Do I need technical knowledge to use the solutions?",
          answer:
            "No. All solutions I develop are designed to be intuitive and easy to use. I also provide complete documentation, training, and ongoing support so your team can operate everything smoothly.",
        },
        {
          question: "Do you offer support after implementation?",
          answer:
            "Yes, I offer support plans that include monitoring, maintenance, updates, and continuous optimization. My goal is for solutions to keep running at peak performance long-term.",
        },
      ],
    },

    // Contact
    contact: {
      badge: "Get Started Today",
      title: "Ready to Automate?",
      subtitle:
        "Tell me about your project and I'll send you a personalized proposal within 24 hours.",
      successTitle: "Message Sent",
      successMessage:
        "I'll contact you within 24 hours. Thank you for your interest.",
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      phoneLabel: "Phone",
      phonePlaceholder: "+1 555 123 4567",
      messageLabel: "Message",
      messagePlaceholder:
        "Briefly describe your project or need...",
      submitButton: "Request a Quote Now",
      disclaimer:
        "No commitment \u00b7 Guaranteed response within 24 hours",
    },

    // Footer
    footer: {
      tagline:
        "Custom AI solutions to transform your business.",
      copyright: "All rights reserved.",
    },

    // Theme toggle
    theme: {
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
    },
  },
} as const

export type Translations = (typeof translations)["es"]
