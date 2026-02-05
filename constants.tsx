
import { Experience, Skill, Education, Language } from './types';

export const TRANSLATIONS: Record<Language, any> = {
  es: {
    ui: {
      archive: "Archivo",
      legacy: "Experiencia",
      legacySubtitle: "Más de 15 años de evolución constante, desde el diseño artesanal hasta la arquitectura de sistemas basados en IA.",
      impact: "Impacto",
      impactSubtitle: "Proyectos de escala masiva y disrupción tecnológica.",
      foundation: "Los Cimientos.",
      foundationSubtitle: "Formación. Compromiso con la excelencia técnica y artística en la era digital.",
      pedigree: "Pedigrí Académico",
      expertise: "La Esencia.",
      proficiency: "Dominio Técnico",
      humanLogic: "Lógica Humana",
      contact: "Consultas y Colaboraciones",
      craft: "Creemos lo excepcional.",
      issue: "Currículum digital",
      status: "Estado Actual",
      available: "Disponible para roles de liderazgo",
      location: "Ubicado en",
      rights: "Todos los derechos reservados",
      vol: "Volumen I",
      mastery: "Nivel de Dominio",
      coreTitle: "El Núcleo.",
      coreSubtitle: "Sintetizando IA Generativa y Programación Sensorial (Vibe Coding).",
      quote: "Ecosistemas digitales donde la tecnología y el arte convergen.",
      langQuestion: "¿En qué idioma quieres leer mi currículum?",
      creativeAutomation: "Automatización Creativa",
      languagesTitle: "Idiomas",
      strategy: {
        title: "Estrategia",
        text: "No solo diseño; construyo sistemas. Mi enfoque radica en la intersección entre el diseño visual de alta gama y la eficiencia que aporta la IA Generativa.",
        quote: "La creatividad ya no es solo una cuestión de ideas, sino de cómo escalamos esas ideas mediante la tecnología para impactar a nivel global."
      }
    },
    info: {
      name: "Oscar Amengual",
      title: "Arquitecto de Ecosistemas Digitales",
      bio: "Sintetizo la precisión técnica con la visión estratégica. Mi enfoque no se limita al diseño de interfaces, sino a la creación de ecosistemas digitales completos donde la IA Generativa, el espacio 3D y el 'Vibe Coding' se entrelazan para generar experiencias que no solo respiran marca, sino que impulsan resultados de negocio tangibles.",
      contact: {
        email: "oamengual@gmail.com",
        phone: "+34 630000491",
        location: "Calvià, Mallorca",
      }
    },
    impactProjects: [
      {
        id: "p1",
        title: "Automatización Masiva de Vídeo",
        description: "Liderazgo técnico en la creación de una infraestructura automática para la generación de 1.600 vídeos publicitarios únicos. Integración compleja de feeds de datos de Google Sheets, lógica condicional en After Effects y Dataclay Templater."
      },
      {
        id: "p2",
        title: "Interfaz de Solicitud de Campañas",
        description: "Desarrollo estratégico de un entorno de trabajo que fusiona negocio y creatividad. Esta herramienta utiliza LLMs para estandarizar las peticiones de los Market Managers."
      }
    ],
    skills: [
      { name: "Síntesis 3D (Maya/Mudbox)", category: 'Espacial' },
      { name: "Arquitectura Creativa Adobe", category: 'Sistémico' },
      { name: "IA Generativa", category: 'Gen-AI' },
      { name: "UX Enfocado a Conversión", category: 'Estrategia' },
      { name: "Motor de Identidad Visual", category: 'Visual' },
      { name: "Compositor de Software (Vibe Coding)", category: 'Software' }
    ],
    softSkills: [
      { name: "Liderazgo Creativo", description: "Capacidad para guiar equipos hacia visiones disruptivas." },
      { name: "Pensamiento Estratégico", description: "Diseño de soluciones que impactan el núcleo del negocio." },
      { name: "Resolución de Problemas", description: "Arquitectura de sistemas complejos ante retos técnicos." },
      { name: "Comunicación Visual", description: "Narrativa poderosa a través del diseño de alta gama." }
    ],
    languages: [
      { name: "Castellano", level: "Nativo" },
      { name: "Catalán", level: "Nativo" },
      { name: "Inglés", level: "Medio (B1)" }
    ],
    experiences: [
      {
        id: "1",
        role: "Diseñador Digital (eCommerce) y Evangelista de Automatización",
        company: "RIU Hotels & Resorts",
        period: "DIC 2016 / ACTUALIDAD",
        description: "Liderando la transformación digital hacia el diseño generativo y la automatización a gran escala para mercados globales.",
        color: "#00AEEF"
      },
      {
        id: "2",
        role: "Diseñador Digital (eCommerce)",
        company: "Barceló Hotels & Resorts",
        period: "DIC 2013 / DIC 2016",
        description: "Optimización de la identidad visual eCommerce y branding digital en entornos de alto rendimiento.",
        color: "#0072bc"
      },
      {
        id: "3",
        role: "Diseñador Gráfico",
        company: "Freelance",
        period: "OCT 2011 / DIC 2013",
        description: "Consultoría creativa y ejecución de proyectos de branding y CGI para clientes diversos.",
        color: "#8DA9C4"
      },
      {
        id: "4",
        role: "Director de Arte",
        company: "H2a comunicació i uniformitat",
        period: "NOV 2007 / OCT 2011",
        description: "Responsable de la estrategia visual y coordinación creativa para proyectos integrales de marca.",
        color: "#0B2545"
      }
    ],
    education: [
      {
        id: "e1",
        degree: "Máster IA para Creativos",
        institution: "Founderz & Microsoft",
        period: "2024 - 2025",
        description: "Especialización en el uso de LLMs and automatización estratégica de flujos de trabajo creativos."
      },
      {
        id: "e2",
        degree: "Máster Animación 3D",
        institution: "LADAT (Parc Bit)",
        period: "2005 - 2007",
        description: "Formación avanzada en producción CGI, modelado, animación y postproducción digital."
      },
      {
        id: "e3",
        degree: "Grado en Diseño Gráfico",
        institution: "EDIB Escola de disseny de les illes balears",
        period: "2001 - 2005",
        description: "Fundamentos de comunicación visual, tipografía y estrategia de diseño."
      }
    ]
  },
  ca: {
    ui: {
      archive: "Arxiu",
      legacy: "Experiència",
      legacySubtitle: "Més de 15 anys d'evolució constant, des del disseny artesanal fins a l'arquitectura de sistemes basats en IA.",
      impact: "Impacte",
      impactSubtitle: "Projectes d'escala massiva i disrupció tecnològica.",
      foundation: "Els Fonaments.",
      foundationSubtitle: "Formació. Compromís amb l'excel·lència tècnica i artística en l'era digital.",
      pedigree: "Pedigrí Acadèmic",
      expertise: "L'Essència.",
      proficiency: "Domini Tècnic",
      humanLogic: "Lògica Humana",
      contact: "Consultes i Col·laboracions",
      craft: "Creem l'excepcional.",
      issue: "Currículum digital",
      status: "Estat Actual",
      available: "Disponible per a rols de lideratge",
      location: "Ubicat a",
      rights: "Tots els drets reservats",
      vol: "Volum I",
      mastery: "Nivell de Domini",
      coreTitle: "The Core.",
      coreSubtitle: "Sintetitzant IA Generativa i Vibe Coding.",
      quote: "Ecosistemes digitals on la tecnologia i l'art convergeixen.",
      langQuestion: "En quin idioma vols llegir el meu currículum?",
      creativeAutomation: "Automatització Creativa",
      languagesTitle: "Idiomes",
      strategy: {
        title: "Estratègia",
        text: "No només dissenyo; construeixo sistemes. El meu enfocament radica en la intersecció entre el disseny visual d'alta gamma i l'eficiència que aporta la IA Generativa.",
        quote: "La creativitat ja no és només una qüestió d'idees, sinó de com escalem aquestes idees mitjançant la tecnologia per impactar a nivell global."
      }
    },
    info: {
      name: "Oscar Amengual",
      title: "Arquitecte d'Ecosistemes Dig.",
      bio: "Sintetitzo la precisió tècnica amb la visió estratègica. El meu enfocament no es limita al disseny d'interfícies, sino a la creació d'ecosistemes digitals complets on la IA Generativa, l'espai 3D i el 'Vibe Coding' s'entrellacen per generar experiències que no només respiren marca, sinó que impulsen resultats de negoci tangibles.",
      contact: {
        email: "oamengual@gmail.com",
        phone: "+34 630000491",
        location: "Calvià, Mallorca",
      }
    },
    impactProjects: [
      {
        id: "p1",
        title: "Mass Video Automation",
        description: "Lideratge tècnic en la creació d'una infraestructura automàtica per a la generació de 1.600 vídeos publicitaris únics."
      },
      {
        id: "p2",
        title: "Interfície de Sol·licitud de Campanyes",
        description: "Desenvolupament estratègic d'un entorn de treball que fusiona negoci i creativitat mitjançant LLMs."
      }
    ],
    skills: [
      { name: "Síntesi 3D (Maya/Mudbox)", category: 'Espacial' },
      { name: "Arquitectura Creativa Adobe", category: 'Sistèmic' },
      { name: "IA Generativa", category: 'Gen-AI' },
      { name: "UX Enfocat a Conversió", category: 'Estrategia' },
      { name: "Motor d'Identitat Visual", category: 'Visual' },
      { name: "Compositor de Software (Vibe Coding)", category: 'Software' }
    ],
    softSkills: [
      { name: "Liderazgo Creativo", description: "Capacitat per guiar equips cap a visions disruptives." },
      { name: "Pensamiento Estratégico", description: "Disseny de solucions que impacten el core del negoci." },
      { name: "Resolució de Problemes", description: "Arquitectura de sistemes complexos davant reptes tècnics." },
      { name: "Comunicació Visual", description: "Narrativa poderosa a través del disseny d'alta gamma." }
    ],
    languages: [
      { name: "Castellà", level: "Nativo" },
      { name: "Català", level: "Nativo" },
      { name: "Anglès", level: "Mitjà (B1)" }
    ],
    experiences: [
      {
        id: "1",
        role: "Digital Designer (eCommerce) & Automation Evangelist",
        company: "RIU Hotels & Resorts",
        period: "DES 2016 / ACTUALITAT",
        description: "Liderant la transformació digital cap a disseny generatiu i automatització a gran escala per a mercats globals.",
        color: "#00AEEF"
      }
    ],
    education: [
      {
        id: "e1",
        degree: "Màster IA per a Creatius",
        institution: "Founderz & Microsoft",
        period: "2024 - 2025",
        description: "Especialització en l'ús de LLMs i automatització estratègica de fluxos de treball creatius."
      }
    ]
  },
  en: {
    ui: {
      archive: "Archive",
      legacy: "Experience",
      legacySubtitle: "Over 15 years of constant evolution, from artisanal design to AI-based systems architecture.",
      impact: "Impact",
      impactSubtitle: "Mass-scale projects and technological disruption.",
      foundation: "The Foundation.",
      foundationSubtitle: "Education. Commitment to technical and artistic excellence in the digital age.",
      pedigree: "Academic Pedigree",
      expertise: "The Core.",
      proficiency: "Technical Proficiency",
      humanLogic: "Human Logic",
      contact: "Inquiries & Collaborations",
      craft: "Let's craft the exceptional.",
      issue: "Digital Resume",
      status: "Current Status",
      available: "Available for Lead Roles",
      location: "Based in",
      rights: "All Rights Reserved",
      vol: "Volume I",
      mastery: "Mastery Level",
      coreTitle: "The Core.",
      coreSubtitle: "Synthesizing Generative AI and Vibe Coding.",
      quote: "Digital ecosystems where technology and art converge.",
      langQuestion: "In which language would you like to read my resume?",
      creativeAutomation: "Creative Automation",
      languagesTitle: "Languages",
      strategy: {
        title: "Strategy",
        text: "I don't just design; I build systems. My focus lies at the intersection of high-end visual design and the efficiency brought by Generative AI.",
        quote: "Creativity is no longer just a matter of ideas, but of how we scale those ideas through technology to impact on a global level."
      }
    },
    info: {
      name: "Oscar Amengual",
      title: "Digital Ecosystem Architect",
      bio: "I synthesize technical precision with strategic vision. My focus goes beyond interface design to creating complete digital ecosystems where Generative AI, 3D spatial design, and 'Vibe Coding' intertwine.",
      contact: {
        email: "oamengual@gmail.com",
        phone: "+34 630000491",
        location: "Calvià, Mallorca",
      }
    },
    impactProjects: [
      {
        id: "p1",
        title: "Mass Video Automation",
        description: "Technical leadership in creating an automatic infrastructure for the generation of 1,600 unique advertising videos."
      },
      {
        id: "p2",
        title: "Campaign Request Interface",
        description: "Strategic development of a workspace that merges business and creativity using LLMs."
      }
    ],
    skills: [
      { name: "3D Synthesis (Maya/Mudbox)", category: 'Spatial' },
      { name: "Adobe Creative Architecture", category: 'Systemic' },
      { name: "Generative AI", category: 'Gen-AI' },
      { name: "Conversion-Focused UX", category: 'Strategy' },
      { name: "Visual Identity Engine", category: 'Visual' },
      { name: "Software Composer (Vibe Coding)", category: 'Software' }
    ],
    softSkills: [
      { name: "Creative Leadership", description: "Ability to guide teams towards disruptive visions." },
      { name: "Strategic Thinking", description: "Designing solutions that impact the business core." },
      { name: "Problem Solving", description: "Architecture of complex systems for technical challenges." },
      { name: "Visual Communication", description: "Powerful storytelling through high-end design." }
    ],
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "Catalan", level: "Native" },
      { name: "English", level: "Intermediate (B1)" }
    ],
    experiences: [
      {
        id: "1",
        role: "Digital Designer (eCommerce) & Automation Evangelist",
        company: "RIU Hotels & Resorts",
        period: "DEC 2016 / PRESENT",
        description: "Leading digital transformation towards generative design and large-scale automation.",
        color: "#00AEEF"
      }
    ],
    education: [
      {
        id: "e1",
        degree: "Master in AI for Creatives",
        institution: "Founderz & Microsoft",
        period: "2024 - 2025",
        description: "Specialization in the use of LLMs and strategic automation of creative workflows."
      }
    ]
  },
  fr: {
    ui: {
      archive: "Archives",
      legacy: "Expérience",
      legacySubtitle: "Plus de 15 ans d'évolution constante, de la conception artisanale à l'architecture de systèmes basés sur l'IA.",
      impact: "Impact",
      impactSubtitle: "Projets à grande échelle et perturbation technologique.",
      foundation: "Les Fondations.",
      foundationSubtitle: "Formation. Engagement envers l'excellence technique et artistique à l'ère numérique.",
      pedigree: "Pédigrée Académique",
      expertise: "L'Essence.",
      proficiency: "Maîtrise Technique",
      humanLogic: "Logique Humaine",
      contact: "Demandes & Collaborations",
      craft: "Créons l'exceptionnel.",
      issue: "CV Numérique",
      status: "Statut Actuel",
      available: "Disponible pour des Rôles de Direction",
      location: "Basé à",
      rights: "Tous droits réservés",
      vol: "Volume I",
      mastery: "Niveau de Maîtrise",
      coreTitle: "Le Noyau.",
      coreSubtitle: "Synthèse de l'IA Générative et du Vibe Coding.",
      quote: "Écosystèmes numériques où la technologie et l'art convergent.",
      langQuestion: "Dans quelle langue souhaitez-vous lire mon CV ?",
      creativeAutomation: "Automatisation Créative",
      languagesTitle: "Langues",
      strategy: {
        title: "Stratégie",
        text: "Je ne fais pas que concevoir ; je construis des systèmes. Mon approche se situe à l'intersection du design visuel haut de gamme et de l'efficacité apportée par l'IA Générative.",
        quote: "La créativité n'est plus seulement une question d'idées, mais de la manière dont nous mettons ces idées à l'échelle grâce à la technologie pour avoir un impact mondial."
      }
    },
    info: {
      name: "Oscar Amengual",
      title: "Architecte d'Écosystèmes Numériques",
      bio: "Je synthétise la précision technique avec la vision stratégique. Mon approche ne se limite pas à la conception d'interfaces, mais à la création d'écosystèmes numériques complets où l'IA Générative, l'espace 3D et le 'Vibe Coding' s'entremêlent pour générer des expériences qui ne se contentent pas de respirer la marque, mais qui génèrent des résultats commerciaux tangibles.",
      contact: {
        email: "oamengual@gmail.com",
        phone: "+34 630000491",
        location: "Calvià, Majorque",
      }
    },
    impactProjects: [
      {
        id: "p1",
        title: "Automatisation Vidéo Massive",
        description: "Leadership technique dans la création d'une infrastructure automatique pour la génération de 1 600 vidéos publicitaires uniques."
      },
      {
        id: "p2",
        title: "Interface de Demande de Campagne",
        description: "Développement stratégique d'un environnement de travail fusionnant affaires et créativité à l'aide de LLM."
      }
    ],
    skills: [
      { name: "Synthèse 3D (Maya/Mudbox)", category: 'Spatial' },
      { name: "Architecture Créative Adobe", category: 'Systémique' },
      { name: "IA Générative", category: 'Gen-AI' },
      { name: "UX Axé sur la Conversion", category: 'Stratégie' },
      { name: "Moteur d'Identité Visuelle", category: 'Visuel' },
      { name: "Compositeur Logiciel (Vibe Coding)", category: 'Logiciel' }
    ],
    softSkills: [
      { name: "Leadership Créatif", description: "Capacité à guider les équipes vers des visions disruptives." },
      { name: "Pensée Stratégique", description: "Conception de solutions qui impactent le cœur de métier." },
      { name: "Résolution de Problèmes", description: "Architecture de systèmes complexes face à des défis techniques." },
      { name: "Communication Visuelle", description: "Narration puissante grâce à un design haut de gamme." }
    ],
    languages: [
      { name: "Espagnol", level: "Natif" },
      { name: "Catalan", level: "Natif" },
      { name: "Anglais", level: "Intermédiaire (B1)" }
    ],
    experiences: [
      {
        id: "1",
        role: "Concepteur Numérique (eCommerce) & Évangéliste de l'Automatisation",
        company: "RIU Hotels & Resorts",
        period: "DÉC 2016 / ACTUEL",
        description: "Diriger la transformation numérique vers la conception générative et l'automatisation à grande échelle pour les marchés mondiaux.",
        color: "#00AEEF"
      }
    ],
    education: [
      {
        id: "e1",
        degree: "Master en IA pour Créatifs",
        institution: "Founderz & Microsoft",
        period: "2024 - 2025",
        description: "Spécialisation dans l'utilisation des LLM et l'automatisation stratégique des flux de travail créatifs."
      }
    ]
  },
  it: {
    ui: {
      archive: "Archivio",
      legacy: "Esperienza",
      legacySubtitle: "Oltre 15 anni di evoluzione costante, dal design artigianale all'architettura di sistemi basati sull'IA.",
      impact: "Impatto",
      impactSubtitle: "Progetti su vasta scala erompendo tecnologicamente.",
      foundation: "Le Fondamenta.",
      foundationSubtitle: "Formazione. Impegno per l'eccellenza tecnica e artistica nell'era digitale.",
      pedigree: "Pedigree Accademico",
      expertise: "L'Essenza.",
      proficiency: "Competenza Tecnica",
      humanLogic: "Logica Umana",
      contact: "Richieste e Collaborazioni",
      craft: "Creiamo l'eccezionale.",
      issue: "Curriculum Digitale",
      status: "Stato Attuale",
      available: "Disponibile per Ruoli di Leadership",
      location: "Basato a",
      rights: "Tutti i diritti riservati",
      vol: "Volume I",
      mastery: "Livello di Maestria",
      coreTitle: "Il Nucleo.",
      coreSubtitle: "Sintetizzando IA Generativa e Vibe Coding.",
      quote: "Ecosistemi digitali dove tecnologia e arte convergono.",
      langQuestion: "In quale lingua vuoi leggere il mio curriculum?",
      creativeAutomation: "Automazione Creativa",
      languagesTitle: "Lingue",
      strategy: {
        title: "Strategia",
        text: "Non progetto solo; costruisco sistemi. Il mio focus risiede nell'intersezione tra design visivo di alta gamma e l'efficienza portata dall'IA Generativa.",
        quote: "La creatività non è più solo una questione di idee, ma di come scaliamo quelle idee attraverso la tecnologia per avere un impatto a livello globale."
      }
    },
    info: {
      name: "Oscar Amengual",
      title: "Architetto di Ecosistemi Digitali",
      bio: "Sintetizzo la precisione tecnica con la visione strategica. Il mio approccio non si limita al design di interfacce, ma alla creazione di ecosistemi digitali completi in cui l'IA Generativa, lo spazio 3D e il 'Vibe Coding' si intrecciano per generare esperienze che non solo respirano il brand, ma guidano risultati di business tangibili.",
      contact: {
        email: "oamengual@gmail.com",
        phone: "+34 630000491",
        location: "Calvià, Maiorca",
      }
    },
    impactProjects: [
      {
        id: "p1",
        title: "Automazione Video Massiva",
        description: "Leadership tecnica nella creazione di un'infrastruttura automatica per la generazione di 1.600 video pubblicitari unici."
      },
      {
        id: "p2",
        title: "Interfaccia Richiesta Campagne",
        description: "Sviluppo strategico di uno spazio di lavoro che fonde business e creatività utilizzando LLM."
      }
    ],
    skills: [
      { name: "Sintesi 3D (Maya/Mudbox)", category: 'Spaziale' },
      { name: "Architettura Creativa Adobe", category: 'Sistemico' },
      { name: "IA Generativa", category: 'Gen-AI' },
      { name: "UX Focalizzata alla Conversione", category: 'Strategia' },
      { name: "Motore di Identità Visiva", category: 'Visivo' },
      { name: "Compositore Software (Vibe Coding)", category: 'Software' }
    ],
    softSkills: [
      { name: "Leadership Creativa", description: "Capacità di guidare i team verso visioni dirompenti." },
      { name: "Pensiero Strategico", description: "Progettazione di soluzioni che impattano il core business." },
      { name: "Risoluzione dei Problemi", description: "Architettura di sistemi complessi di fronte a sfide tecniche." },
      { name: "Comunicazione Visiva", description: "Narrazione potente attraverso il design di alta gamma." }
    ],
    languages: [
      { name: "Spagnolo", level: "Madrelingua" },
      { name: "Catalano", level: "Madrelingua" },
      { name: "Inglese", level: "Intermedio (B1)" }
    ],
    experiences: [
      {
        id: "1",
        role: "Digital Designer (eCommerce) & Evangelist dell'Automazione",
        company: "RIU Hotels & Resorts",
        period: "DIC 2016 / PRESENTE",
        description: "Guidare la trasformazione digitale verso il design generativo e l'automazione su larga scala per i mercati globali.",
        color: "#00AEEF"
      }
    ],
    education: [
      {
        id: "e1",
        degree: "Master in IA per Creativi",
        institution: "Founderz & Microsoft",
        period: "2024 - 2025",
        description: "Specializzazione nell'uso di LLM e automazione strategica dei flussi di lavoro creativi."
      }
    ]
  },
  ru: {
    ui: {
      archive: "Архив",
      legacy: "Опыт",
      legacySubtitle: "Более 15 лет постоянной эволюции: от ремесленного дизайна до архитектуры систем на базе ИИ.",
      impact: "Влияние",
      impactSubtitle: "Масштабные проекты и технологический прорыв.",
      foundation: "Фундамент.",
      foundationSubtitle: "Образование. Приверженность техническому и художественному совершенству в цифровую эпоху.",
      pedigree: "Академическая Родословная",
      expertise: "Суть.",
      proficiency: "Техническое Мастерство",
      humanLogic: "Человеческая Логика",
      contact: "Запросы и Сотрудничество",
      craft: "Создаем исключительное.",
      issue: "Цифровое Резюме",
      status: "Текущий Статус",
      available: "Доступен для Руководящих Ролей",
      location: "Базируется в",
      rights: "Все права защищены",
      vol: "Том I",
      mastery: "Уровень Мастерства",
      coreTitle: "Ядро.",
      coreSubtitle: "Синтез Генеративного ИИ и Vibe Coding.",
      quote: "Цифровые экосистемы, где технологии и искусство сходятся воедино.",
      langQuestion: "На каком языке вы хотите читать мое резюме?",
      creativeAutomation: "Креативная Автоматизация",
      languagesTitle: "Языки",
      strategy: {
        title: "Стратегия",
        text: "Я не просто проектирую; я строю системы. Мой фокус лежит на пересечении высококлассного визуального дизайна и эффективности, которую дает Генеративный ИИ.",
        quote: "Креативность – это уже не просто вопрос идей, а того, как мы масштабируем эти идеи с помощью технологий для глобального влияния."
      }
    },
    info: {
      name: "Oscar Amengual",
      title: "Архитектор Цифровых Экосистем",
      bio: "Я синтезирую техническую точность со стратегическим видением. Мой подход выходит за рамки дизайна интерфейсов и направлен на создание полных цифровых экосистем, где переплетаются Генеративный ИИ, 3D-пространство и 'Vibe Coding', создавая опыт, который не просто дышит брендом, но и приносит ощутимые бизнес-результаты.",
      contact: {
        email: "oamengual@gmail.com",
        phone: "+34 630000491",
        location: "Кальвия, Майорка",
      }
    },
    impactProjects: [
      {
        id: "p1",
        title: "Массовая Видео Автоматизация",
        description: "Техническое руководство созданием автоматической инфраструктуры для генерации 1 600 уникальных рекламных видеороликов."
      },
      {
        id: "p2",
        title: "Интерфейс Запроса Кампаний",
        description: "Стратегическая разработка рабочего пространства, объединяющего бизнес и творчество с использованием LLM."
      }
    ],
    skills: [
      { name: "3D Синтез (Maya/Mudbox)", category: 'Пространственный' },
      { name: "Архитектура Creative Adobe", category: 'Системный' },
      { name: "Генеративный ИИ", category: 'Gen-AI' },
      { name: "UX, Ориентированный на Конверсию", category: 'Стратегия' },
      { name: "Движок Визуальной Идентичности", category: 'Визуальный' },
      { name: "Композитор ПО (Vibe Coding)", category: 'Программный' }
    ],
    softSkills: [
      { name: "Креативное Лидерство", description: "Способность вести команды к прорывным видениям." },
      { name: "Стратегическое Мышление", description: "Разработка решений, влияющих на ядро бизнеса." },
      { name: "Решение Проблем", description: "Архитектура сложных систем перед лицом технических вызовов." },
      { name: "Визуальная Коммуникация", description: "Мощный сторителлинг через дизайн высокого класса." }
    ],
    languages: [
      { name: "Испанский", level: "Родной" },
      { name: "Каталанский", level: "Родной" },
      { name: "Английский", level: "Средний (B1)" }
    ],
    experiences: [
      {
        id: "1",
        role: "Цифровой Дизайнер (eCommerce) и Евангелист Автоматизации",
        company: "RIU Hotels & Resorts",
        period: "ДЕК 2016 / НАСТ. ВРЕМЯ",
        description: "Руководство цифровой трансформацией в сторону генеративного дизайна и крупномасштабной автоматизации для глобальных рынков.",
        color: "#00AEEF"
      }
    ],
    education: [
      {
        id: "e1",
        degree: "Магистр ИИ для Креативов",
        institution: "Founderz & Microsoft",
        period: "2024 - 2025",
        description: "Специализация на использовании LLM и стратегической автоматизации творческих рабочих процессов."
      }
    ]
  },
  zh: {
    ui: {
      archive: "档案",
      legacy: "经验",
      legacySubtitle: "超过15年的不断演变，从手工设计到基于人工智能的系统架构。",
      impact: "影响",
      impactSubtitle: "大规模项目和技术颠覆。",
      foundation: "基石。",
      foundationSubtitle: "教育。在数字时代致力于技术和艺术的卓越。",
      pedigree: "学术背景",
      expertise: "核心。",
      proficiency: "技术专长",
      humanLogic: "人类逻辑",
      contact: "咨询与合作",
      craft: "打造非凡。",
      issue: "数字简历",
      status: "当前状态",
      available: "可担任领导职务",
      location: "常驻",
      rights: "版权所有",
      vol: "第一卷",
      mastery: "精通程度",
      coreTitle: "核心。",
      coreSubtitle: "综合生成式AI和Vibe Coding。",
      quote: "技术与艺术交汇的数字生态系统。",
      langQuestion: "您想用哪种语言阅读我的简历？",
      creativeAutomation: "创意自动化",
      languagesTitle: "语言",
      strategy: {
        title: "战略",
        text: "我不只是设计；我构建系统。我的重点在于高端视觉设计与生成式AI带来的效率之间的交集。",
        quote: "创造力不再仅仅是想法的问题，而是我们如何通过技术扩展这些想法以产生全球影响的问题。"
      }
    },
    info: {
      name: "Oscar Amengual",
      title: "数字生态系统架构师",
      bio: "我将技术精确性与战略愿景相结合。我的重点不仅仅是界面设计，而是创建完整的数字生态系统，其中生成式AI、3D空间设计和'Vibe Coding'相互交织，创造出不仅具有品牌气息，还能推动实际业务成果的体验。",
      contact: {
        email: "oamengual@gmail.com",
        phone: "+34 630000491",
        location: "卡尔维亚, 马略卡岛",
      }
    },
    impactProjects: [
      {
        id: "p1",
        title: "大规模视频自动化",
        description: "技术领导创建自动基础设施，生成1,600个独特的广告视频。"
      },
      {
        id: "p2",
        title: "活动请求接口",
        description: "融合商业和创意的战略工作空间开发，使用LLM。"
      }
    ],
    skills: [
      { name: "3D合成 (Maya/Mudbox)", category: '空间' },
      { name: "Adobe创意架构", category: '系统' },
      { name: "生成式AI", category: 'Gen-AI' },
      { name: "以转化为中心的UX", category: '战略' },
      { name: "视觉识别引擎", category: '视觉' },
      { name: "软件作曲家 (Vibe Coding)", category: '软件' }
    ],
    softSkills: [
      { name: "创意领导力", description: "引导团队实现颠覆性愿景的能力。" },
      { name: "战略思维", description: "设计影响核心业务的解决方案。" },
      { name: "问题解决", description: "面对技术挑战的复杂系统架构。" },
      { name: "视觉传达", description: "通过高端设计进行强有力的叙事。" }
    ],
    languages: [
      { name: "西班牙语", level: "母语" },
      { name: "加泰罗尼亚语", level: "母语" },
      { name: "英语", level: "中级 (B1)" }
    ],
    experiences: [
      {
        id: "1",
        role: "数字设计师 (电商) & 自动化布道者",
        company: "RIU Hotels & Resorts",
        period: "2016年12月 / 至今",
        description: "领导数字化转型，迈向全球市场的生成式设计和大规模自动化。",
        color: "#00AEEF"
      }
    ],
    education: [
      {
        id: "e1",
        degree: "创意AI硕士",
        institution: "Founderz & Microsoft",
        period: "2024 - 2025",
        description: "专注于LLM的使用和创意工作流的战略自动化。"
      }
    ]
  }
};

export const SKILLS_DATA = [
  { level: 95 },
  { level: 98 },
  { level: 94 },
  { level: 92 },
  { level: 95 },
  { level: 88 }
];
