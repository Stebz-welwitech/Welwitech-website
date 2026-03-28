export const nav = {
  logo: 'WELWITECH',
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Design', href: '#design' },
    { label: 'Mobile', href: '#mobile' },
    { label: 'Web', href: '#web' },
    { label: 'IA', href: '#ai' },
    { label: 'Projets', href: '#portfolio' },
    { label: 'Approche', href: '#approach' },
  ],
  cta: { label: 'Contact', href: '#contact' },
}

export const hero = {
  tag: 'DESIGN STUDIO \u00B7 DUBAI',
  title: 'WELWITECH',
  subtitle: 'Nous transformons vos id\u00e9es en produits digitaux d\u2019exception.',
  location: 'Design \u00B7 Mobile \u00B7 Web \u00B7 Intelligence Artificielle',
  cta: 'D\u00e9marrons votre projet',
}

export const servicesOverview = {
  tag: 'Nos expertises',
  heading: 'NOS P\u00d4LES DE COMP\u00c9TENCES',
  headingAccent: 'DE COMP\u00c9TENCES',
  cards: [
    { num: '01', title: 'Design', desc: 'UX/UI \u2014 Interfaces centr\u00e9es utilisateur, recherche, prototypage et design systems.', href: '#design', variant: 'design' },
    { num: '02', title: 'Mobile', desc: 'Applications multiplateforme et natives \u2014 Flutter, React Native, Swift, Kotlin.', href: '#mobile', variant: 'mobile' },
    { num: '03', title: 'Web & Business', desc: 'Sites, e-commerce, SaaS, CRM/ERP \u2014 Solutions digitales sur mesure.', href: '#web', variant: 'web' },
    { num: '04', title: 'Intelligence Artificielle', desc: 'IA G\u00e9n\u00e9rative & Agents IA \u2014 L\u2019IA au service de vos produits.', href: '#ai', variant: 'ai' },
  ],
}

export const poles = {
  design: {
    id: 'design',
    color: 'rose',
    tag: 'P\u00f4le Design',
    title: 'EXP\u00c9RIENCES DIGITALES M\u00c9MORABLES',
    desc: 'Interfaces centr\u00e9es sur l\u2019exp\u00e9rience humaine, alliant esth\u00e9tique soign\u00e9e et ergonomie fonctionnelle.',
    subsections: [
      {
        title: 'UX/UI DESIGN',
        desc: 'Recherche utilisateur, wireframes, prototypes interactifs et livrables pr\u00eats pour le d\u00e9veloppement.',
        caps: [
          { title: 'Recherche utilisateur', desc: 'Interviews, personas, parcours utilisateur, audit UX existant' },
          { title: 'Wireframing', desc: 'Maquettes basse fid\u00e9lit\u00e9, architecture de l\u2019information, zoning' },
          { title: 'Prototypage interactif', desc: 'Figma, maquettes haute fid\u00e9lit\u00e9, prototype cliquable' },
          { title: 'Design system', desc: 'Composants r\u00e9utilisables, guidelines, tokens de design' },
          { title: 'Tests utilisateurs', desc: 'Tests d\u2019usabilit\u00e9, A/B testing, it\u00e9rations bas\u00e9es sur les retours' },
        ],
      },
    ],
  },
  mobile: {
    id: 'mobile',
    color: 'amber',
    tag: 'P\u00f4le Mobile',
    title: 'APPLICATIONS MOBILES PERFORMANTES',
    desc: 'iOS et Android \u2014 du multiplateforme au natif pur, pour chaque besoin de performance.',
    subsections: [
      {
        title: 'MULTIPLATEFORME',
        desc: 'Applications unifi\u00e9es fonctionnant nativement sur iOS et Android depuis une seule base de code.',
        caps: [
          { title: 'Flutter', desc: 'Applications cross-platform au rendu natif, interfaces riches et fluides' },
          { title: 'React Native', desc: 'D\u00e9veloppement JS/TS, forte int\u00e9gration avec les \u00e9cosyst\u00e8mes web' },
          { title: 'Int\u00e9grations', desc: 'Paiement, notifications push, g\u00e9olocalisation, cam\u00e9ra, biom\u00e9trie' },
          { title: 'Publication stores', desc: 'D\u00e9ploiement App Store et Google Play, gestion des releases' },
        ],
      },
      {
        title: 'NATIF',
        desc: 'Performances maximales et int\u00e9gration profonde aux APIs syst\u00e8me.',
        caps: [
          { title: 'Swift (iOS/macOS)', desc: 'SwiftUI, animations avanc\u00e9es, ARKit, HealthKit' },
          { title: 'Kotlin (Android)', desc: 'Jetpack Compose, int\u00e9grations hardware pouss\u00e9es' },
          { title: 'Performance', desc: 'Optimisation m\u00e9moire, 60fps, gestion batterie, offline-first' },
          { title: 'S\u00e9curit\u00e9', desc: 'Biom\u00e9trie, chiffrement local, SSL, gestion des permissions' },
        ],
      },
    ],
  },
  web: {
    id: 'web',
    color: 'emerald',
    tag: 'P\u00f4le Web & Business',
    title: 'SOLUTIONS DIGITALES SUR MESURE',
    desc: 'Sites, e-commerce, SaaS et CRM/ERP avec des technologies modernes.',
    subsections: [
      {
        title: 'SITES INTERNET',
        desc: 'Performants, optimis\u00e9s SEO et responsive.',
        caps: [
          { title: 'Site vitrine', desc: 'Storytelling, animations, SEO on-page' },
          { title: 'Site corporate', desc: 'Blog, CMS, multilingue' },
          { title: 'Landing page', desc: 'Conversion, A/B testing, analytics' },
          { title: 'Performance', desc: 'Core Web Vitals, accessibilit\u00e9 WCAG' },
        ],
      },
      {
        title: 'E-COMMERCE',
        desc: 'Boutiques robustes et scalables avec parcours d\u2019achat optimis\u00e9.',
        caps: [
          { title: 'Shopify / WooCommerce', desc: 'Th\u00e8me sur mesure, personnalisation avanc\u00e9e' },
          { title: 'E-commerce custom', desc: 'React / Next.js + backend sur mesure' },
          { title: 'Paiement', desc: 'Stripe, PayPal, Apple Pay, solutions locales' },
          { title: 'Catalogue & stock', desc: 'Produits, variantes, inventaire, ERP' },
        ],
      },
      {
        title: 'APPLICATIONS WEB & SAAS',
        desc: 'Architectures modernes, pens\u00e9es pour scaler.',
        caps: [
          { title: 'Frontend', desc: 'React, Next.js, Vue \u2014 temps r\u00e9el, PWA' },
          { title: 'Backend & API', desc: 'Node.js, Python, microservices' },
          { title: 'Base de donn\u00e9es', desc: 'PostgreSQL, MongoDB, Redis' },
          { title: 'Infrastructure', desc: 'AWS, GCP, Azure, CI/CD, Docker' },
          { title: 'Multi-tenant SaaS', desc: 'Organisations, billing, RBAC' },
        ],
      },
      {
        title: 'CRM & ERP',
        desc: 'Centraliser vos donn\u00e9es et automatiser vos op\u00e9rations.',
        caps: [
          { title: 'Int\u00e9gration CRM', desc: 'Salesforce, HubSpot, Pipedrive' },
          { title: 'ERP sur mesure', desc: 'Modules m\u00e9tier sp\u00e9cifiques' },
          { title: 'Automatisations', desc: 'Workflows, sync outils tiers' },
          { title: 'Connecteurs', desc: 'API REST, webhooks, SAP, Odoo' },
        ],
      },
    ],
  },
  ai: {
    id: 'ai',
    color: 'violet',
    tag: 'P\u00f4le Intelligence Artificielle',
    title: 'L\u2019IA AU SERVICE DE VOS PRODUITS',
    desc: 'Mod\u00e8les de langage et agents IA autonomes pour augmenter votre productivit\u00e9.',
    subsections: [
      {
        title: 'IA G\u00c9N\u00c9RATIVE',
        desc: 'LLM int\u00e9gr\u00e9s dans vos produits pour enrichir l\u2019exp\u00e9rience utilisateur.',
        caps: [
          { title: 'Int\u00e9gration LLM', desc: 'GPT-4o, Claude, Mistral, Gemini' },
          { title: 'Chatbots & assistants', desc: 'Assistants contextuels int\u00e9gr\u00e9s' },
          { title: 'RAG', desc: 'Recherche s\u00e9mantique sur vos documents' },
          { title: 'G\u00e9n\u00e9ration de contenu', desc: 'Texte, images, code \u2014 workflows cr\u00e9atifs' },
          { title: 'Fine-tuning', desc: 'Adaptation \u00e0 votre domaine m\u00e9tier' },
        ],
      },
      {
        title: 'AGENTS IA',
        desc: 'Syst\u00e8mes autonomes capables de planifier et ex\u00e9cuter des t\u00e2ches complexes.',
        caps: [
          { title: 'Agents autonomes', desc: 'Mono/multi-t\u00e2ches avec m\u00e9moire' },
          { title: 'Orchestration', desc: 'LangChain, LangGraph, CrewAI' },
          { title: 'Int\u00e9grations outils', desc: 'APIs, SaaS (Slack, Notion...)' },
          { title: 'Agents internes', desc: 'RH, finance, support, reporting' },
          { title: 'Supervision', desc: 'Guardrails, monitoring, tra\u00e7abilit\u00e9' },
        ],
      },
    ],
  },
}

export const approach = {
  tag: 'Notre approche',
  title: 'UN PROCESSUS \u00c9PROUV\u00c9',
  desc: 'Du cadrage initial au suivi post-lancement, chaque \u00e9tape garantit qualit\u00e9 et alignement.',
  steps: [
    { num: '01', title: 'D\u00c9COUVERTE', desc: 'Analyse des besoins, cadrage, d\u00e9finition des KPIs de succ\u00e8s.' },
    { num: '02', title: 'DESIGN', desc: 'UX research, wireframes, prototype valid\u00e9 avant d\u00e9veloppement.' },
    { num: '03', title: 'D\u00c9VELOPPEMENT', desc: 'Sprints agiles, livrables r\u00e9guliers, code review\u00e9 et test\u00e9.' },
    { num: '04', title: 'D\u00c9PLOIEMENT', desc: 'Mise en production, transfert de comp\u00e9tences, maintenance.' },
  ],
}

export const contact = {
  tag: 'Parlons de votre projet',
  title: 'D\u00c9MARRONS ENSEMBLE',
  desc: 'Premier \u00e9change sans engagement. Notre \u00e9quipe est pr\u00eate.',
  cta: 'Nous contacter',
  email: 'contact@welwitech.com',
  website: 'welwitech.com',
  location: 'Dubai, UAE',
}

export const footer = {
  brand: 'WELWITECH',
  copyright: '\u00A9 2026 Welwitech',
}
