import {
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  ExternalLink,
  Facebook,
  FileCheck2,
  FileSearch,
  FileText,
  GraduationCap,
  HandHeart,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ReceiptText,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  WalletCards,
} from 'lucide-react';

// Owner editing note:
// Most website edits can be made in this file by changing the text inside quotes,
// prices, email addresses, phone numbers, image paths, and placeholder links.
// The icon values are part of the design system and usually do not need editing.

const companyContent = {
  name: 'EC Consulting Ltd',
  brandName: 'EC Consulting',
  suffix: 'Ltd',
  number: 'SC855029',
  address: 'Clyde Offices, 48 West George Street, 2nd Floor, Glasgow, United Kingdom, G2 1BP',
  email: 'contact@ecconsultant.co.uk',
  grantEmail: 'thirdsector@ecconsultant.co.uk',
  trainingEmail: 'szkolenia@ecconsultant.co.uk',
  phone: '+44 1786 845717',
  whatsapp: '+44 7889 600760',
  whatsappUrl: 'https://wa.me/447889600760',
  businessHours:
    'Monday to Friday, 9:00-17:00. Evening appointments may be available by arrangement.',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Clyde%20Offices%2048%20West%20George%20Street%20Glasgow%20G2%201BP&output=embed',
};

const assetContent = {
  logo: '/assets/ec-logo.jpg',
  logoAlt: 'EC Consulting Ltd logo',
  portraitHero: '/assets/ewelina-portrait-hero.jpg',
  portraitHeroAlt: 'Professional portrait of Ewelina Chin',
  portraitAbout: '/assets/ewelina-portrait-about.jpg',
  portraitAboutAlt: 'Ewelina Chin seated professional portrait',
  portraitConsultation: '/assets/ewelina-portrait-consultation.jpg',
  portraitConsultationAlt: 'Ewelina Chin professional consultation portrait',
};

const pricingContent = {
  grants: [
    {
      name: 'Basic Grant Review',
      price: 'From GBP 150',
      paymentLink: 'https://buy.stripe.com/test_basic_grant_review',
      description: 'A focused review of your draft application, eligibility, outcomes and supporting evidence.',
      features: ['Application review', 'Eligibility check', 'Written improvement notes', '30-minute follow-up call'],
    },
    {
      name: 'Full Grant Application',
      price: 'From GBP 650',
      paymentLink: 'https://buy.stripe.com/test_full_grant_application',
      description: 'End-to-end preparation for a single grant or community project funding bid.',
      featured: true,
      features: ['Funding fit assessment', 'Narrative drafting', 'Budget guidance', 'Submission-ready documents'],
    },
    {
      name: 'Ongoing Funding Support',
      price: 'Monthly from GBP 450',
      paymentLink: 'https://buy.stripe.com/test_ongoing_funding_support',
      description: 'A retained service for organisations needing consistent bid planning and funder reporting.',
      features: ['Funding pipeline', 'Calendar planning', 'Monitoring support', 'Strategic check-ins'],
    },
  ],
  business: [
    {
      name: 'Business Foundations',
      price: 'From GBP 175',
      paymentLink: 'https://buy.stripe.com/test_business_foundations',
      description: 'A practical setup consultation for new or growing businesses needing financial clarity.',
      features: ['Initial systems review', 'HMRC and compliance guidance', 'Budget snapshot', 'Action plan'],
    },
    {
      name: 'Monthly Finance Support',
      price: 'Monthly from GBP 295',
      paymentLink: 'https://buy.stripe.com/test_monthly_finance_support',
      description: 'Reliable bookkeeping, payroll coordination and reporting support for established operations.',
      featured: true,
      features: ['Bookkeeping support', 'Payroll coordination', 'Xero workflows', 'Monthly finance check-in'],
    },
    {
      name: 'Strategic Advisory',
      price: 'From GBP 550',
      paymentLink: 'https://buy.stripe.com/test_strategic_advisory',
      description: 'Structured business consultancy for planning, forecasting, internal systems and growth decisions.',
      features: ['Strategic planning session', 'Forecasting support', 'Operational systems review', 'Leadership support'],
    },
  ],
  polish: [
    {
      name: 'Konsultacja szkoleniowa',
      price: 'Od GBP 95',
      paymentLink: 'https://buy.stripe.com/test_konsultacja_szkoleniowa',
      description: 'Indywidualna rozmowa, diagnoza potrzeb i plan dalszego rozwoju lub szkolenia.',
      features: ['60 minut online', 'Plan działania', 'Materiały po spotkaniu', 'Wsparcie mailowe'],
    },
    {
      name: 'Warsztat online',
      price: 'Od GBP 220',
      paymentLink: 'https://buy.stripe.com/test_warsztat_online',
      description: 'Praktyczne szkolenie dla osób rozwijających biznes, projekty lub kompetencje zawodowe.',
      featured: true,
      features: ['Szkolenie na żywo', 'Małe grupy', 'Ćwiczenia praktyczne', 'Certyfikat uczestnictwa'],
    },
    {
      name: 'Szkolenie stacjonarne',
      price: 'Wycena indywidualna',
      paymentLink: 'https://buy.stripe.com/test_szkolenie_stacjonarne',
      description: 'Profesjonalne szkolenie dla zespołów, organizacji i grup lokalnych.',
      features: ['Program dopasowany do grupy', 'Materiały szkoleniowe', 'Praca warsztatowa', 'Raport po szkoleniu'],
    },
  ],
};

export const siteContent = {
  company: companyContent,
  assets: assetContent,
  seo: {
    title: 'EC Consulting Ltd | Financial, Grant & Business Consultancy',
    description:
      'EC Consulting Ltd provides professional financial, grant and business consultancy for charities, businesses and purpose-driven organisations.',
    themeColor: '#15120f',
    image: assetContent.logo,
  },
  navigation: [
    { label: 'Home', polishLabel: 'Strona główna', path: '/' },
    { label: 'Grant Writing', polishLabel: 'Dotacje', path: '/grant-writing' },
    { label: 'Business Consultancy', polishLabel: 'Konsulting biznesowy', path: '/business-consultancy' },
    { label: 'Szkolenia PL', polishLabel: 'Szkolenia PL', path: '/szkolenia-pl' },
    { label: 'Contact', polishLabel: 'Kontakt', path: '/contact' },
  ],
  ui: {
    navigationAria: 'Main navigation',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    whatsappLabel: 'WhatsApp',
    contactLabel: 'Contact',
    contactPolishLabel: 'Kontakt',
    learnMoreLabel: 'Learn more',
    pricingButtonLabel: 'Stripe payment placeholder',
    pricingButtonPolishLabel: 'Płatność Stripe placeholder',
    popularLabel: 'Popular',
    popularPolishLabel: 'Polecane',
    websiteEnquirySubject: 'Website enquiry',
    directEmailLabels: {
      general: 'General',
      grants: 'Grant writing',
      training: 'Polish training',
    },
  },
  forms: {
    contact: {
      en: {
        name: 'Full name',
        email: 'Email address',
        phone: 'Phone',
        service: 'Service interest',
        message: 'Message',
        submit: 'Send enquiry',
        placeholder: 'Tell us what support you need.',
        options: ['Grant writing', 'Business consultancy', 'Szkolenia PL', 'General enquiry'],
      },
      pl: {
        name: 'Imię i nazwisko',
        email: 'Adres e-mail',
        phone: 'Telefon',
        service: 'Temat',
        message: 'Wiadomość',
        submit: 'Wyślij zapytanie',
        placeholder: 'Napisz, w czym możemy pomóc.',
        options: ['Dotacje', 'Konsulting biznesowy', 'Szkolenia PL', 'Zapytanie ogólne'],
      },
    },
    footer: {
      en: {
        title: 'Quick enquiry',
        description: 'Send a short message. The form opens an email draft ready to send.',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send enquiry',
      },
      pl: {
        title: 'Szybki kontakt',
        description: 'Napisz krótką wiadomość. Formularz przygotuje e-mail do wysłania.',
        subject: 'Temat',
        message: 'Wiadomość',
        submit: 'Wyślij e-mail',
      },
    },
  },
  footer: {
    navigationTitle: 'Navigation',
    navigationPolishTitle: 'Nawigacja',
    description:
      'Professional financial, grant and business consultancy for charities, businesses and purpose-driven organisations.',
    polishDescription:
      'Profesjonalne wsparcie finansowe, dotacyjne, biznesowe i szkoleniowe dla organizacji oraz firm.',
    companyNumberLabel: 'Company number',
    companyNumberPolishLabel: 'Numer firmy',
    copyrightSuffix: 'All rights reserved.',
    copyrightPolishSuffix: 'Wszelkie prawa zastrzeżone.',
    assetNote: 'Logo used in navigation, footer and favicon placeholder.',
    assetPolishNote: 'Logo w nagłówku, stopce i faviconie.',
  },
  social: [
    { label: 'LinkedIn placeholder', href: '#', icon: Linkedin },
    { label: 'Facebook placeholder', href: '#', icon: Facebook },
    { label: 'Business profile placeholder', href: '#', icon: ExternalLink },
  ],
  stripe: {
    fallbackPaymentLink: 'https://buy.stripe.com/test_placeholder',
  },
  home: {
    hero: {
      eyebrow: 'EC Consulting Ltd',
      title: 'Professional Financial, Grant & Business Consultancy',
      subtitle:
        'Supporting charities, businesses and purpose-driven organisations with strategic consultancy, funding support and professional development.',
      primaryCta: { label: 'Book Consultation', to: '/business-consultancy#consultation' },
      secondaryCta: { label: 'Contact Now', to: '/contact' },
      portraitCaptionName: 'Ewelina Chin',
      portraitCaptionTitle: 'Financial consultant & grant specialist',
      stats: [
        { label: '15+ years experience', icon: BadgeCheck },
        { label: 'HMRC Registered Agent', icon: ShieldCheck },
        { label: 'Xero Professional Partner', icon: BarChart3 },
        { label: 'Grant & Third Sector Specialist', icon: HandHeart },
      ],
    },
    about: {
      eyebrow: 'About EC Consulting',
      title: 'Experienced, strategic and grounded in practical financial leadership.',
      text:
        'Ewelina Chin is an experienced financial consultant, welfare adviser and strategic grant specialist with over 15 years of experience supporting charities, community organisations and businesses.',
      followUp:
        'Her work combines financial oversight, grant management, compliance, budgeting, strategic planning and trauma-informed leadership.',
      expertise: [
        'Grant applications',
        'Financial systems',
        'Payroll and bookkeeping',
        'Xero support',
        'Third sector development',
        'Funding strategy',
        'Governance support',
        'Soft skills coaching',
        'Welfare and budgeting guidance',
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'Focused consultancy for finance, funding and growth.',
      text: 'Choose a service area to explore packages, support options and the most relevant contact route.',
      cards: [
        {
          title: 'Grant Writing',
          text:
            'Funding research, application drafting, monitoring frameworks and strategic support for charities and community organisations.',
          path: '/grant-writing',
          icon: FileText,
        },
        {
          title: 'Business Consultancy',
          text:
            'Bookkeeping, payroll, HMRC support, Xero systems, budgeting and practical operational consultancy.',
          path: '/business-consultancy',
          icon: BriefcaseBusiness,
        },
        {
          title: 'Szkolenia PL',
          text: 'Profesjonalne szkolenia po polsku z dotacji, biznesu, księgowości i rozwoju działalności.',
          path: '/szkolenia-pl',
          icon: GraduationCap,
        },
      ],
    },
    method: {
      eyebrow: 'Consultative method',
      title: 'Clear steps, calm execution and accountable support.',
      text:
        'Each engagement starts with context, risk and priorities, then moves into a practical plan that can be used immediately by leadership, trustees or business owners.',
      steps: [
        {
          number: '1',
          title: 'Clarify the brief',
          text: 'Understand the organisation, pressure points, funding needs and operational goals.',
        },
        {
          number: '2',
          title: 'Build the plan',
          text: 'Create a focused route for finance, systems, compliance, grant applications or training.',
        },
        {
          number: '3',
          title: 'Support delivery',
          text: 'Provide practical documents, structured advice and calm professional follow-through.',
        },
      ],
    },
    consultation: {
      eyebrow: 'Professional consultation',
      title: 'A discreet advisory space for decisions that need structure.',
      text:
        'Book a consultation to review funding plans, finance processes, compliance questions, business systems or training requirements.',
      primaryLabel: 'Book Consultation',
      secondaryLabel: 'WhatsApp EC Consulting',
    },
    testimonials: {
      eyebrow: 'Client confidence',
      title: 'Professional support with clarity and discretion.',
      text: 'Placeholder testimonials are ready for real client quotes as the website moves toward launch.',
      items: [
        {
          quote:
            'Ewelina brought structure, clarity and confidence to a complex funding process. Her strategic input helped us focus on what mattered.',
          name: 'Third sector client',
          role: 'Community organisation',
        },
        {
          quote:
            'Professional, precise and deeply practical. EC Consulting helped us improve our systems and understand our financial position.',
          name: 'Business client',
          role: 'Small business owner',
        },
        {
          quote:
            'The training was clear, supportive and immediately useful. We left with practical tools and renewed confidence.',
          name: 'Training participant',
          role: 'Polish business workshop',
        },
      ],
    },
    cta: {
      eyebrow: 'Sustainable growth',
      title: "Let's build sustainable growth together.",
      text:
        'For charities, businesses and purpose-driven organisations ready for clearer systems, stronger funding and more confident decisions.',
      primaryLabel: 'Book Consultation',
    },
  },
  pages: {
    grants: {
      hero: {
        eyebrow: 'Grant Writing',
        title: 'Strategic funding support for charities and community organisations.',
        text:
          'Professional grant applications, funding research, monitoring and reporting support for organisations delivering meaningful community impact.',
        primaryLabel: 'Discuss a funding bid',
        primaryTo: '/contact',
        secondaryLabel: 'View pricing',
        secondaryTo: '/grant-writing#pricing',
        cards: [
          { label: 'Funding research', icon: Search },
          { label: 'Application drafting', icon: FileCheck2 },
          { label: 'Impact reporting', icon: Target },
          { label: 'Third sector advice', icon: HandHeart },
        ],
      },
      services: {
        eyebrow: 'Funding services',
        title: 'From funder fit to final reporting.',
        text:
          'Support can focus on a single application or on a longer funding strategy that helps your organisation plan ahead with confidence.',
        items: [
          { title: 'Grant applications', icon: FileText },
          { title: 'Funding research', icon: FileSearch },
          { title: 'Monitoring and reporting', icon: ClipboardCheck },
          { title: 'Third sector consultancy', icon: HandHeart },
          { title: 'Community project funding', icon: Users },
          { title: 'Strategic funding plans', icon: Target },
        ],
      },
      details: {
        eyebrow: 'Third sector consultancy',
        title: 'Funding plans that connect purpose, budget and evidence.',
        text:
          'Grant work is strongest when the case for support, delivery model, budget and monitoring plan all speak the same language.',
        buttonLabel: 'Start a funding conversation',
        bullets: [
          'Funding pipeline and deadline mapping for community projects.',
          'Project outcomes, outputs, budget notes and monitoring indicators.',
          'Trustee and leadership guidance around grant compliance and reporting.',
          'Application language that is clear, specific and aligned with funder priorities.',
        ],
      },
      pricing: {
        eyebrow: 'Pricing',
        title: 'Grant support packages.',
        text:
          'Transparent starting points for common funding support needs. Final scope is confirmed after an initial conversation.',
      },
      faqs: {
        eyebrow: 'FAQ',
        title: 'Common grant writing questions.',
        text: 'A few practical answers before you start the process.',
        items: [
          {
            question: 'Can EC Consulting help if we have never applied for funding before?',
            answer:
              'Yes. The process can begin with eligibility, project fit, outcomes and budget structure before moving into the application itself.',
          },
          {
            question: 'Do you guarantee funding success?',
            answer:
              'No consultant can guarantee a funder decision. EC Consulting focuses on strong fit, clear evidence, realistic budgets and high-quality submissions.',
          },
          {
            question: 'Can you support monitoring and reporting after an award?',
            answer:
              'Yes. Monitoring frameworks, evidence capture, impact reporting and budget reporting can be built into ongoing support.',
          },
        ],
      },
      cta: {
        eyebrow: 'Funding support',
        title: 'Ready to strengthen your next application?',
        text:
          `Email ${companyContent.grantEmail} or use the contact form to share your project, funder deadline and support needs.`,
        primaryLabel: 'Contact Grant Support',
      },
    },
    business: {
      hero: {
        eyebrow: 'Business Consultancy',
        title: 'Financial systems and strategic support for confident business decisions.',
        text:
          'Practical consultancy for bookkeeping, payroll, HMRC support, Xero systems, budgeting, compliance and operational structure.',
        primaryLabel: 'Book consultation',
        primaryTo: '/business-consultancy#consultation',
        secondaryLabel: 'Contact now',
        secondaryTo: '/contact',
      },
      heroPanel: {
        eyebrow: 'Business support',
        title: 'Organised finance. Clearer operations. Better planning.',
        badges: ['HMRC Registered Agent', 'Xero Professional Partner', '15+ years experience'],
      },
      services: {
        eyebrow: 'Consultancy focus',
        title: 'A complete view of finance, compliance and operations.',
        text:
          'Support can be focused on one pressure point or shaped into an ongoing business support relationship.',
        items: [
          { title: 'Bookkeeping', icon: ReceiptText },
          { title: 'Payroll', icon: WalletCards },
          { title: 'HMRC support', icon: Landmark },
          { title: 'Xero systems', icon: BarChart3 },
          { title: 'Budgeting', icon: ClipboardCheck },
          { title: 'Strategic planning', icon: Target },
          { title: 'Compliance', icon: ShieldCheck },
          { title: 'Startup consultancy', icon: Sparkles },
          { title: 'Operational systems', icon: Building2 },
        ],
      },
      pricing: {
        eyebrow: 'Packages',
        title: 'Business support packages.',
        text: 'Choose a starting point for setup, monthly finance support or strategic consultancy.',
      },
      why: {
        eyebrow: 'Why work with EC Consulting',
        title: 'Senior-level judgement with practical delivery.',
        text:
          'EC Consulting combines finance, welfare guidance, grant strategy, compliance awareness and leadership coaching into support that makes sense for real organisations.',
        bullets: [
          'Clear financial insight without unnecessary complexity.',
          'Support that connects strategy with day-to-day systems.',
          'Professional guidance for owners, trustees and leadership teams.',
          'Calm, confidential advice when decisions carry pressure.',
        ],
      },
      consultation: {
        eyebrow: 'Consultation booking',
        title: 'Book a professional consultation.',
        text:
          'Use this section to start a conversation about business finance, Xero, payroll, HMRC support, budgeting or operational systems.',
        callLabel: 'Call',
        whatsappLabel: 'WhatsApp',
        buttonLabel: 'Send consultation request',
      },
      cta: {
        eyebrow: 'Business clarity',
        title: 'Make the next financial decision with structure.',
        text: 'Get the right support around bookkeeping, payroll, HMRC, Xero, compliance and business planning.',
        primaryLabel: 'Contact EC Consulting',
      },
    },
    training: {
      hero: {
        eyebrow: 'Szkolenia PL',
        title: 'Profesjonalne szkolenia biznesowe i dotacyjne w języku polskim.',
        text:
          'Praktyczne wsparcie dla osób, firm i organizacji, które chcą rozwijać działalność, lepiej rozumieć finanse, przygotowywać dotacje i budować pewność w działaniu.',
        primaryLabel: 'Skontaktuj się z nami',
        primaryTo: '/contact',
        secondaryLabel: 'Zobacz tematy',
        secondaryTo: '/szkolenia-pl#tematy',
      },
      heroPanel: {
        eyebrow: 'Rozwój zawodowy',
        title: 'Szkolenia online i stacjonarne dla osób, które chcą działać profesjonalnie.',
        badges: ['Jasny język', 'Praktyczne materiały', 'Wsparcie po szkoleniu'],
      },
      topics: {
        eyebrow: 'Tematy',
        title: 'Szkolenia dopasowane do realnych potrzeb.',
        text:
          'Zakres szkolenia można dopasować do poziomu uczestników, branży, organizacji lub konkretnego celu biznesowego.',
        items: [
          { title: 'Dotacje', icon: HandHeart },
          { title: 'Biznes', icon: BriefcaseBusiness },
          { title: 'Księgowość', icon: ReceiptText },
          { title: 'Rozwój działalności', icon: Target },
          { title: 'Umiejętności miękkie', icon: Users },
          { title: 'Szkolenia online', icon: BookOpenCheck },
          { title: 'Szkolenia stacjonarne', icon: GraduationCap },
        ],
      },
      approach: {
        eyebrow: 'Styl pracy',
        title: 'Elegancko, konkretnie i z szacunkiem dla doświadczenia uczestników.',
        text:
          'Szkolenia łączą wiedzę finansową, biznesową i miękkie kompetencje, aby uczestnicy wychodzili z jasnym planem działania.',
        buttonLabel: 'Zapytaj o termin',
        bullets: [
          'Dotacje: od pomysłu do wniosku i budżetu projektu.',
          'Biznes: planowanie, organizacja, oferta i komunikacja.',
          'Księgowość: podstawy, dokumenty, terminy i odpowiedzialność.',
          'Umiejętności miękkie: komunikacja, odporność, przywództwo i praca z klientem.',
        ],
      },
      pricing: {
        eyebrow: 'Cennik',
        title: 'Pakiety szkoleniowe.',
        text:
          'Poniższe ceny są punktami startowymi. Ostateczny zakres zależy od liczby uczestników, formy szkolenia i oczekiwanych materiałów.',
      },
      contactBand: {
        eyebrow: 'Kontakt po polsku',
        title: 'Porozmawiajmy o szkoleniu dopasowanym do Twoich potrzeb.',
        text:
          `Napisz na ${companyContent.trainingEmail} albo użyj formularza kontaktowego, aby opisać temat, grupę i preferowaną formę szkolenia.`,
        primaryLabel: 'Skontaktuj się z nami',
        secondaryLabel: 'WhatsApp',
      },
      cta: {
        eyebrow: 'Szkolenia PL',
        title: 'Skontaktuj się z nami',
        text:
          'Profesjonalne szkolenia po polsku z zakresu dotacji, biznesu, księgowości, rozwoju działalności i umiejętności miękkich.',
        primaryLabel: 'Wyślij zapytanie',
        secondaryLabel: 'WhatsApp',
      },
    },
    contact: {
      hero: {
        eyebrow: 'Contact',
        title: 'Start a confidential conversation with EC Consulting.',
        text:
          'Send an enquiry, call the office or use WhatsApp for grant writing, consultancy, training and general business support.',
      },
      cards: [
        { label: 'Email', value: companyContent.email, href: `mailto:${companyContent.email}`, icon: Mail },
        { label: 'Phone', value: companyContent.phone, href: `tel:${companyContent.phone.replace(/\s/g, '')}`, icon: Phone },
        { label: 'WhatsApp', value: companyContent.whatsapp, href: companyContent.whatsappUrl, icon: MessageCircle },
        { label: 'Glasgow office', value: companyContent.address, href: '/contact#map', icon: MapPin },
      ],
      form: {
        eyebrow: 'Enquiry form',
        title: 'Tell us what kind of support you need.',
        text: 'This form opens a prepared email draft so your message can be sent from your own email account.',
        directEmailsTitle: 'Direct emails',
        whatsappTitle: 'WhatsApp',
      },
      map: {
        eyebrow: 'Glasgow office',
        title: 'Clyde Offices, West George Street.',
        text: 'Appointments and consultations are arranged in advance. Please contact EC Consulting before visiting.',
        businessHoursLabel: 'Business hours',
        emailButtonLabel: 'Email EC Consulting',
        mapTitle: 'Google Maps placeholder for EC Consulting Ltd',
      },
    },
  },
  pricing: pricingContent,
};

export const company = siteContent.company;
export const assets = siteContent.assets;
export const navItems = siteContent.navigation;
export const stats = siteContent.home.hero.stats;
export const expertise = siteContent.home.about.expertise;
export const servicePreviews = siteContent.home.services.cards;
export const testimonials = siteContent.home.testimonials.items;
export const grantServices = siteContent.pages.grants.services.items;
export const businessServices = siteContent.pages.business.services.items;
export const polishTopics = siteContent.pages.training.topics.items;
export const contactCards = siteContent.pages.contact.cards;
export const stripePlaceholder = siteContent.stripe.fallbackPaymentLink;
export const pricing = siteContent.pricing;
export const faqs = siteContent.pages.grants.faqs.items;
