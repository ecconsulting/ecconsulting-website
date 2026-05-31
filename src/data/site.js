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
  phone: '+44 (0)1786 845717',
  phoneHref: 'tel:+441786845717',
  ukPhone: '+44 (0)1786 845717',
  ukPhoneHref: 'tel:+441786845717',
  polandPhone: '+48 884 988 855',
  polandPhoneHref: 'tel:+48884988855',
  website: 'www.ecconsultant.co.uk',
  websiteUrl: 'https://www.ecconsultant.co.uk',
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
  grants: [],
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
  formspree: {
    formId: 'mpqnbjbv',
    endpoint: 'https://formspree.io/f/mpqnbjbv',
    szkoleniaEndpoint: 'https://formspree.io/f/mpqnbjbv',
  },
  navigation: [
    { label: 'Home', polishLabel: 'Strona główna', path: '/' },
    { label: 'Third Sector Support', polishLabel: 'Wsparcie NGO', path: '/third-sector-support' },
    { label: 'Business Consultancy', polishLabel: 'Konsulting biznesowy', path: '/business-consultancy' },
    { label: 'Szkolenia PL', polishLabel: 'Szkolenia PL', path: '/szkolenia-pl' },
    { label: 'Contact', polishLabel: 'Kontakt', path: '/contact' },
  ],
  ui: {
    navigationAria: 'Main navigation',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    phoneLabel: 'Telephone',
    callLabel: 'Call EC Consulting',
    contactLabel: 'Contact',
    contactPolishLabel: 'Kontakt',
    learnMoreLabel: 'Learn more',
    pricingButtonLabel: 'Stripe payment placeholder',
    pricingButtonPolishLabel: 'Płatność Stripe placeholder',
    popularLabel: 'Popular',
    popularPolishLabel: 'Polecane',
    websiteEnquirySubject: 'Website enquiry',
    directEmailLabels: {
      general: 'General Enquiries',
      grants: 'Third Sector & Funding Support',
      training: 'Training Enquiries',
    },
  },
  contactBlock: {
    english: {
      title: 'Contact EC Consulting Ltd',
      companyNumberLabel: 'Company Number',
      ukLabel: 'United Kingdom',
      polandLabel: 'Poland',
      generalLabel: 'General Enquiries',
      grantsLabel: 'Third Sector & Funding Support',
      trainingLabel: 'Training Enquiries',
      websiteLabel: 'Website',
    },
    polish: {
      title: 'Kontakt EC Consulting Ltd',
      companyNumberLabel: 'Numer firmy',
      ukLabel: 'Wielka Brytania',
      polandLabel: 'Polska',
      generalLabel: 'Zapytania ogólne',
      grantsLabel: 'Trzeci sektor i wsparcie dotacyjne',
      trainingLabel: 'Zapytania szkoleniowe',
      websiteLabel: 'Strona internetowa',
    },
    polishTraining: {
      title: 'Kontakt w sprawie szkoleń',
      polandLabel: 'Polska',
      emailLabel: 'E-mail',
      note:
        'W przypadku pytań dotyczących szkoleń, zapisów, płatności lub organizacji wydarzeń prosimy o kontakt telefoniczny lub mailowy.',
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
        submitting: 'Sending...',
        successTitle: 'Thank you. Your enquiry has been sent.',
        successText: 'EC Consulting will reply as soon as possible.',
        errorText: 'Something went wrong. Please try again or email EC Consulting directly.',
        placeholder: 'Tell us what support you need.',
        options: ['General enquiry', 'Grant writing', 'Business consultancy', 'Szkolenia PL'],
      },
      pl: {
        name: 'Imię i nazwisko',
        email: 'Adres e-mail',
        phone: 'Telefon',
        service: 'Temat',
        message: 'Wiadomość',
        submit: 'Wyślij zapytanie',
        submitting: 'Wysyłanie...',
        successTitle: 'Dziękujemy. Wiadomość została wysłana.',
        successText: 'EC Consulting odpowie tak szybko, jak to możliwe.',
        errorText: 'Coś poszło nie tak. Spróbuj ponownie albo napisz bezpośrednio e-mail.',
        placeholder: 'Napisz, w czym możemy pomóc.',
        options: ['Zapytanie ogólne', 'Dotacje', 'Konsulting biznesowy', 'Szkolenia PL'],
      },
    },
    footer: {
      en: {
        title: 'Quick enquiry',
        description: 'Send a short message securely through the website.',
        email: 'Email address',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send enquiry',
        submitting: 'Sending...',
        successText: 'Thank you. Your message has been sent.',
        errorText: 'Something went wrong. Please try again.',
      },
      pl: {
        title: 'Szybki kontakt',
        description: 'Wyślij krótką wiadomość bezpośrednio przez stronę.',
        email: 'Adres e-mail',
        subject: 'Temat',
        message: 'Wiadomość',
        submit: 'Wyślij e-mail',
        submitting: 'Wysyłanie...',
        successText: 'Dziękujemy. Wiadomość została wysłana.',
        errorText: 'Coś poszło nie tak. Spróbuj ponownie.',
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
    companyNumberLabel: 'Company Number',
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
      secondaryCta: { label: 'Contact Now', to: '/contact?service=general' },
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
          title: 'Third Sector Support',
          text:
            'Strategic funding, financial management, compliance and reporting support for charities, CICs and community organisations.',
          path: '/third-sector-support',
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
          text: 'Polish-language training for start-ups, NGOs, European funding projects, documentation and advisory skills.',
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
      secondaryLabel: 'Call EC Consulting',
    },
    testimonials: {
      eyebrow: 'Client confidence',
      title: 'Professional support with clarity and discretion.',
      text: 'Placeholder testimonials are ready for real client quotes as the website moves towards launch.',
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
        eyebrow: 'Third Sector Support',
        title: 'Third Sector Support',
        text:
          'Funding, finance and compliance support for charities, CICs, social enterprises and community organisations. Supporting organisations to secure funding, strengthen financial management and build long-term sustainability.',
        primaryLabel: 'Book a Consultation',
        primaryTo: '/contact?service=grants',
        secondaryLabel: 'View Services',
        secondaryTo: '/third-sector-support#services',
        cards: [
          { label: "Over 15 years' experience", icon: ShieldCheck },
          { label: 'Over £850,000 secured during 2025', icon: Target },
          { label: 'HMRC Agent', icon: Landmark },
          { label: 'ICO Registered', icon: FileCheck2 },
          { label: 'Xero Partner', icon: BarChart3 },
          { label: 'PVG Certified', icon: BadgeCheck },
          { label: 'Fixed transparent fees', icon: ReceiptText },
          { label: 'Reduced rates for small organisations', icon: HandHeart },
        ],
      },
      trust: {
        eyebrow: 'Trust and accountability',
        title: 'Why Organisations Choose EC Consulting',
        text:
          'Small organisations need clear advice, practical delivery and honest guidance. EC Consulting provides ethical, transparent support without inflated consultancy fees, outsourced bid writing, commission-based charging or pressure to pursue unsuitable funding.',
        items: [
          { title: 'Personal service', text: 'You work directly with Ewelina, not a rotating team or outsourced writer.', icon: Users },
          { title: 'Transparent pricing', text: 'Fees are fixed, clearly scoped and agreed before work begins.', icon: ReceiptText },
          { title: 'Ethical approach', text: 'Advice is realistic, funder-aware and never based on percentage commission.', icon: ShieldCheck },
          { title: 'Long-term partnership', text: 'Support can continue into reporting, finance systems and trustee confidence.', icon: HandHeart },
          { title: 'No inflated fees', text: 'Reduced charitable rates are designed for grassroots organisations and CICs.', icon: WalletCards },
          { title: 'Accountable delivery', text: 'Work is structured around evidence, deadlines, budget quality and compliance.', icon: ClipboardCheck },
        ],
      },
      profile: {
        eyebrow: 'Professional profile',
        title: 'Meet Ewelina Chin',
        text:
          'Ewelina Chin is a finance professional and funding specialist with practical third-sector experience. She combines financial management, grant strategy, governance awareness and reporting expertise, helping organisations present stronger applications while building the controls and evidence systems that funders expect.',
        achievements: [
          'Over £850,000 secured for organisations during 2025.',
          'Experience supporting grassroots organisations and first-time applicants.',
          'Practical understanding of funders’ expectations around need, impact, budget and delivery.',
          'Professional experience across charity finance, Xero, compliance and management reporting.',
        ],
        credentials: ['Finance professional', 'Funding specialist', 'HMRC Agent', 'ICO Registered', 'Xero Partner', 'PVG Certified'],
      },
      services: {
        eyebrow: 'Our Services',
        title: 'Funding, finance and compliance support under one professional roof.',
        text:
          'Applications are stronger when project design, financial systems, governance and reporting are connected. EC Consulting supports the full picture, from funding readiness to post-award accountability.',
        categories: [
          {
            title: 'Funding & Grant Support',
            text: 'Strategic support to identify suitable opportunities, shape fundable projects and prepare clear, evidence-based applications.',
            icon: FileSearch,
            services: [
              { title: 'Funding Consultation', text: 'A structured review of your organisation, project idea, eligibility and next funding steps.' },
              { title: 'Grant Review & Improvement', text: 'Professional review of a draft application with practical recommendations to strengthen the case for support.' },
              { title: 'Full Grant Applications', text: 'Application drafting or rewriting, with budget alignment and submission-ready wording.' },
              { title: 'Bid Development', text: 'Support to refine project purpose, need, outcomes, delivery and value for money.' },
              { title: 'Project Design', text: 'Turning an early idea into a fundable project with clear activities, beneficiaries and outputs.' },
              { title: 'Theory of Change', text: 'A clear model showing how activities lead to outcomes and long-term impact.' },
              { title: 'Monitoring Frameworks', text: 'Practical tools for measuring progress, outputs, outcomes and evidence.' },
              { title: 'Funder Reporting Support', text: 'Support after an award to prepare accurate reports and maintain funder confidence.' },
            ],
          },
          {
            title: 'Financial Management Support',
            text: 'Affordable finance support that helps trustees, directors and funders understand how money is managed.',
            icon: BarChart3,
            services: [
              { title: 'Bookkeeping', text: 'Regular checks and records that keep financial information organised and reliable.' },
              { title: 'Payroll', text: 'Payroll processing support for organisations employing staff or sessional workers.' },
              { title: 'Fund Tracking', text: 'Clear tracking of restricted and unrestricted funds so grant conditions are met.' },
              { title: 'Management Reporting', text: 'Readable financial reports for trustees, boards, funders and management teams.' },
              { title: 'Cashflow Monitoring', text: 'Practical monitoring to help organisations plan payments, commitments and sustainability.' },
              { title: 'Budget Development', text: 'Realistic project and organisational budgets that match funder requirements.' },
              { title: 'Forecasting', text: 'Forward planning to understand future income, costs, risk and capacity.' },
              { title: 'Restricted Fund Monitoring', text: 'Support to separate, evidence and report restricted grant expenditure correctly.' },
              { title: 'Xero Support', text: 'Setup, cleanup and reporting support for better digital financial management.' },
            ],
          },
          {
            title: 'Compliance & Governance Support',
            text: 'Practical systems that help organisations demonstrate accountability, reduce risk and prepare for funder scrutiny.',
            icon: ShieldCheck,
            services: [
              { title: 'Financial Policies', text: 'Policy support that clarifies approvals, controls, spending and responsibilities.' },
              { title: 'Reporting Frameworks', text: 'Simple reporting structures that align finance, delivery and funder requirements.' },
              { title: 'Audit Preparation', text: 'Organisation of records, reports and supporting evidence before audit or independent review.' },
              { title: 'Year-End Preparation', text: 'Practical preparation to support accounts, records and year-end reporting.' },
              { title: 'Trustee Reporting', text: 'Clear packs and summaries that help trustees make informed financial decisions.' },
              { title: 'Funding Compliance', text: 'Monitoring of grant conditions, restricted funds, evidence and reporting deadlines.' },
              { title: 'Project Monitoring', text: 'Tools for tracking activity, attendance, outputs, outcomes and spend.' },
              { title: 'Evidence Collection Systems', text: 'Practical evidence systems that support reports, future bids and accountability.' },
            ],
          },
        ],
      },
      pricing: {
        eyebrow: 'Packages & Fees',
        title: 'Transparent support designed for small organisations.',
        text:
          'Fees are fixed wherever possible, with reduced charitable rates and clear inclusions. The aim is excellent value, professional quality and practical support without hidden costs.',
        funding: [
          {
            title: 'Funding Consultation',
            price: '£150 Fixed Fee',
            includes: ['Pre-consultation questionnaire', '60-minute strategic consultation', 'Complimentary additional 60-minute follow-up support', 'Funding readiness discussion', 'Eligibility review', 'Practical next steps'],
            suitable: ['New charities', 'CICs', 'Community groups', 'First-time applicants'],
            buttonLabel: 'Book Funding Consultation',
            paymentLink: 'https://buy.stripe.com/REPLACE_ME',
          },
          {
            title: 'Grant Review & Improvement',
            price: '£240 Fixed Fee',
            includes: ['Introductory consultation', 'Professional review of existing application', 'Up to 3 hours of expert input', 'Written recommendations', 'Strengthening of outcomes and impact sections', 'Budget observations', 'Funder-alignment review'],
            suitable: ['Organisations that have already started an application'],
            buttonLabel: 'Book Grant Review',
            paymentLink: 'https://buy.stripe.com/REPLACE_ME',
          },
          {
            title: 'Full Grant Application',
            subtitle: 'Up to £2,000',
            price: '£300 Fixed Fee',
            includes: ['Eligibility assessment', 'Project planning call', 'Application drafting or rewriting', 'Basic budget', 'One revision round', 'Submission-ready version'],
            paymentStructure: ['70% upfront', '30% payable only if successful'],
            buttonLabel: 'Apply Now',
            paymentLink: 'https://buy.stripe.com/REPLACE_ME',
          },
          {
            title: 'Full Grant Application',
            subtitle: '£2,001 – £5,000',
            price: '£440 Fixed Fee',
            includes: ['Project shaping', 'Narrative development', 'Budget preparation', 'Outcomes framework', 'Monitoring considerations', 'Two revision rounds'],
            paymentStructure: ['70% upfront', '30% payable only if successful'],
            buttonLabel: 'Apply Now',
            paymentLink: 'https://buy.stripe.com/REPLACE_ME',
          },
          {
            title: 'Full Grant Application',
            subtitle: '£5,001 – £10,000',
            price: '£680 Fixed Fee',
            includes: ['Strategic bid development', 'Value-for-money narrative', 'Risk and mitigation section', 'Supporting evidence integration', 'Budget development', 'Two revision rounds'],
            paymentStructure: ['70% upfront', '30% on submission', 'Waived if unsuccessful'],
            buttonLabel: 'Apply Now',
            paymentLink: 'https://buy.stripe.com/REPLACE_ME',
          },
          {
            title: 'Full Grant Application',
            subtitle: '£10,001 – £20,000',
            price: '£840 Fixed Fee',
            includes: ['End-to-end bid leadership', 'Theory of Change or Logic Model', 'Evaluation framework', 'Partnership input', 'Compliance review', 'Three revision rounds', 'Post-submission clarification support'],
            paymentStructure: ['70% upfront', '30% on submission', 'Waived if unsuccessful'],
            buttonLabel: 'Apply Now',
            paymentLink: 'https://buy.stripe.com/REPLACE_ME',
          },
          {
            title: 'Larger Grants',
            subtitle: '£20,000+',
            price: 'Custom Quotation',
            includes: ['Multi-year funding', 'Consortium bids', 'Partnership projects', 'Complex applications'],
            suitable: ['Organisations preparing higher-value or multi-partner bids'],
            buttonLabel: 'Request Quote',
            paymentLink: 'https://buy.stripe.com/REPLACE_ME',
          },
        ],
        monthly: [
          {
            title: 'Bronze',
            price: '£180 per month',
            subtitle: 'Up to 6 hours monthly support',
            includes: ['Basic bookkeeping checks', 'Ledger reconciliations', 'Monthly summary report'],
            bestFor: 'Sole traders and very small organisations',
            buttonLabel: 'Subscribe',
            paymentLink: 'https://buy.stripe.com/REPLACE_ME',
          },
          {
            title: 'Silver',
            price: '£260 per month',
            subtitle: 'Up to 12 hours monthly support',
            includes: ['Bookkeeping', 'Payroll processing', 'Bank reconciliations', 'Monthly management reports'],
            bestFor: 'Growing charities and CICs',
            buttonLabel: 'Subscribe',
            paymentLink: 'https://buy.stripe.com/REPLACE_ME',
            featured: true,
          },
          {
            title: 'Gold',
            price: '£340 per month',
            subtitle: 'Up to 20 hours monthly support',
            includes: ['Bookkeeping', 'Payroll', 'Management reporting', 'Quarterly budget reviews', 'Fund tracking', 'Funder-ready reporting packs'],
            bestFor: 'Organisations with multiple funding streams',
            buttonLabel: 'Subscribe',
            paymentLink: 'https://buy.stripe.com/REPLACE_ME',
          },
          {
            title: 'Project-Based Support',
            price: 'From £200 to £1,200',
            subtitle: 'Scoped support for a defined finance or reporting task',
            includes: ['Xero setup', 'Xero cleanup', 'Historic bookkeeping catch-up', 'Year-end preparation', 'Audit packs', 'Funder reporting packs'],
            bestFor: 'Organisations needing a specific financial management project completed',
            buttonLabel: 'Request Quote',
            paymentLink: 'https://buy.stripe.com/REPLACE_ME',
          },
        ],
        value: {
          title: 'Designed for Small Organisations',
          text:
            'Unlike many consultancy firms, EC Consulting deliberately offers reduced charitable rates to ensure professional support remains accessible to grassroots organisations, charities, CICs and community groups. Every fee is transparent, clearly explained and focused on delivering meaningful value rather than inflated consultancy costs.',
          banner: 'No commission fees. No hidden charges. No percentage-based grant fees. Just transparent professional support.',
        },
      },
      reporting: {
        eyebrow: 'Funder-ready finance',
        title: 'Why strong financial reporting helps secure funding.',
        text:
          'Many organisations focus only on writing applications. Increasingly, funders also assess whether an organisation has the financial stability, controls and reporting capability to deliver the project responsibly. A strong application explains the need; strong financial management proves the organisation can be trusted to deliver.',
        assessed: ['Financial stability', 'Financial controls', 'Governance quality', 'Budget accuracy', 'Reporting capability', 'Evidence collection systems'],
        outcomes: [
          'Builds trust with funders and trustees.',
          'Reduces perceived delivery and compliance risk.',
          'Demonstrates accountability for restricted funds.',
          'Supports repeat funding and stronger funder relationships.',
          'Improves grant success rates by making budgets and delivery plans more credible.',
          'Strengthens confidence when funders request clarification or monitoring evidence.',
        ],
        examples: [
          'A community group applying for a project grant may need a clear budget, evidence of demand, restricted fund tracking and a realistic plan for reporting outcomes.',
          'A CIC with several funding streams may need management accounts that separate project spend, staff costs and unrestricted reserves before approaching a larger funder.',
          'A charity preparing a repeat application may need to show previous grant spend, outputs delivered and lessons learned in a format the funder can trust.',
        ],
      },
      faqs: {
        eyebrow: 'FAQ',
        title: 'Third sector funding and finance questions.',
        text: 'Practical answers for organisations preparing applications, financial records and funder reports.',
        items: [
          {
            question: 'Why do funders ask for financial information?',
            answer:
              'Funders need confidence that public, charitable or restricted money will be managed properly. They may assess accounts, budgets, cashflow, reserves, controls and previous reporting to understand whether the organisation can deliver safely and accountably.',
          },
          {
            question: 'How important is budgeting?',
            answer:
              'Budgeting is central to a funder-ready application. A strong budget is realistic, eligible, clearly linked to activities and proportionate to the outcomes promised. Weak or unclear budgets can undermine an otherwise strong application.',
          },
          {
            question: 'Can poor reporting affect future funding?',
            answer:
              'Yes. Late, incomplete or unclear reporting can damage funder confidence and make repeat funding harder. Good reporting shows that funds were used properly, outcomes were monitored and the organisation understands its responsibilities.',
          },
          {
            question: 'What financial systems should small charities have?',
            answer:
              'At minimum, small charities should have clear bookkeeping, bank reconciliations, simple management reports, restricted fund tracking, approval controls and organised evidence for income and expenditure. The system does not need to be complicated, but it must be reliable.',
          },
          {
            question: 'What happens if we have never applied before?',
            answer:
              'EC Consulting can start with funding readiness, eligibility, project design, budget structure and evidence. First-time applicants often benefit from a consultation before investing in a full application.',
          },
          {
            question: 'Can you help with funder reporting after an award?',
            answer:
              'Yes. Support can include monitoring frameworks, output and outcome evidence, financial reports, spend summaries, restricted fund tracking and narrative updates for funders.',
          },
          {
            question: 'Can you support trustees?',
            answer:
              'Yes. Trustee support can include clearer finance packs, budget explanations, funding risk summaries, reporting calendars and practical guidance so trustees can make informed decisions.',
          },
          {
            question: 'Can you help improve our financial records before applying?',
            answer:
              'Yes. Many organisations benefit from bookkeeping checks, Xero cleanup, fund tracking, management reports or year-end preparation before submitting a funding application.',
          },
          {
            question: 'How does good financial reporting improve grant success?',
            answer:
              'It improves credibility. When budgets, records and reporting systems are clear, funders can see that the organisation understands delivery costs, risk, accountability and evidence collection.',
          },
          {
            question: 'What makes an application funder-ready?',
            answer:
              'A funder-ready application has a clear need, realistic project design, eligible costs, credible budget, measurable outcomes, evidence of demand, suitable governance and a reporting plan that shows how progress will be monitored.',
          },
        ],
      },
      process: {
        eyebrow: 'How We Work',
        title: 'A structured process that keeps decisions clear.',
        steps: [
          { title: 'Initial Enquiry', text: 'Share your organisation type, funding need, deadline and current financial position.', icon: Mail },
          { title: 'Suitability Review', text: 'EC Consulting reviews funder fit, eligibility, risks, timescales and readiness.', icon: Search },
          { title: 'Scope & Proposal', text: 'You receive a clear scope, fixed fee and practical delivery plan before work begins.', icon: FileText },
          { title: 'Project Delivery', text: 'Funding, finance or compliance work is completed with structured checkpoints.', icon: ClipboardCheck },
          { title: 'Review & Refinement', text: 'Drafts, budgets, reports or systems are reviewed and refined before final delivery.', icon: FileCheck2 },
          { title: 'Ongoing Support', text: 'Support can continue through reporting, trustee confidence, finance systems and future funding.', icon: HandHeart },
        ],
      },
      cta: {
        eyebrow: 'Third Sector Support',
        title: 'Ready to Strengthen Your Organisation?',
        text:
          'Whether you need support with funding, financial management, reporting or compliance, EC Consulting can help you build stronger foundations and greater confidence for the future.',
        primaryLabel: 'Book a Consultation',
        secondaryLabel: 'Contact Us',
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
        secondaryTo: '/contact?service=business',
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
        polandCallLabel: 'Poland',
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
        title: 'Profesjonalne szkolenia online dla startupów, NGO i osób rozwijających działalność',
        text:
          'Praktyczne kursy z zakresu funduszy europejskich, przygotowania projektów, współpracy z instytucjami i rozwoju kompetencji doradczych.',
        primaryLabel: 'Zobacz dostępne kursy',
        primaryTo: '/szkolenia-pl#dostepne-kursy',
        secondaryLabel: 'Zapytaj o dofinansowanie BUR',
        secondaryTo: '/szkolenia-pl#formularz-szkolenia',
      },
      heroPanel: {
        eyebrow: 'Zakres szkoleń',
        title: 'Fundusze, projekty, dokumentacja i kompetencje doradcze.',
        badges: ['Start-upy i NGO', 'Projekty unijne', 'Dofinansowanie BUR'],
      },
      intro: {
        text:
          'Szkolenia prowadzone są w praktycznym, uporządkowanym i przystępnym formacie. Programy są przygotowane z myślą o osobach, które chcą lepiej rozumieć dokumentację projektową, przygotowywać skuteczne wnioski, rozwijać działalność lub świadczyć usługi doradcze.',
      },
      twoDayCourses: {
        title: 'Kursy online 2-dniowe',
        info: [
          'Cena: 1400 PLN za osobę',
          'Format: online',
          'Czas trwania: 2 dni',
          'Minimalna liczba uczestników: 4 osoby',
          'Możliwość dofinansowania BUR nawet do 80% w partnerstwie z Jaśkiewicz Academy',
          'W celu uzyskania szczegółów prosimy o kontakt',
        ],
        ctaLabel: 'Zapytaj o dofinansowanie BUR',
        items: [
          {
            title: 'Zarządzanie projektami unijnymi – od pomysłu do realizacji',
            bullets: [
              'Wprowadzenie do mechanizmów finansowania projektów z UE',
              'Kluczowe etapy przygotowania i wdrożenia projektów',
              'Najczęstsze błędy i dobre praktyki',
            ],
          },
          {
            title: 'Fundusze europejskie na start – jak założyć firmę z pomocą środków UE',
            bullets: [
              'Przegląd dostępnych programów dla początkujących przedsiębiorców',
              'Przygotowanie skutecznego wniosku',
              'Rozliczanie i monitoring projektu',
            ],
          },
          {
            title: 'Rozwój działalności gospodarczej dzięki funduszom UE',
            bullets: [
              'Możliwości rozwoju firmy przy wsparciu funduszy strukturalnych',
              'Przykłady działań rozwojowych',
              'Budowanie strategii wzrostu opartej na wsparciu zewnętrznym',
            ],
          },
          {
            title: 'Jak efektywnie współpracować z urzędami pracy (PUP) – regionalne ścieżki wsparcia',
            bullets: [
              'Aktualny przegląd instrumentów wsparcia w urzędach pracy',
              'Praktyczna współpraca z instytucjami rynku pracy',
              'Przygotowywanie dokumentacji do programów regionalnych',
            ],
          },
          {
            title: 'Profesjonalne przygotowanie dokumentacji do projektów unijnych',
            bullets: [
              'Najważniejsze elementy wniosku projektowego',
              'Najczęstsze błędy formalne i jak ich unikać',
              'Praktyczny warsztat – przejście przez dokumentację krok po kroku',
            ],
          },
          {
            title: 'Skuteczna komunikacja i prowadzenie konsultacji w branży doradczej',
            bullets: [
              'Kluczowe umiejętności komunikacyjne',
              'Narzędzia pracy konsultanta',
              'Budowanie trwałych relacji z klientami',
            ],
          },
        ],
      },
      shortCourses: {
        title: 'Krótkie kursy online 4-godzinne',
        info: [
          'Cena: 399 PLN',
          'Format: online',
          'Czas trwania: 4 godziny',
          'Minimalna liczba uczestników: 6 osób',
          'Możliwość dofinansowania BUR nawet do 80%',
          'W celu uzyskania szczegółów prosimy o kontakt',
        ],
        items: [
          {
            title: 'Jak rozumieć aplikacje o dofinansowanie',
            description:
              'Kurs wprowadzający w analizę dokumentacji konkursowej, zrozumienie kryteriów oceny oraz ocenę szans powodzenia projektu.',
            bullets: [
              'Struktura aplikacji / wniosku',
              'Analiza wytycznych i dokumentów konkursowych',
              'Kluczowe błędy i dobre praktyki',
              'Przykłady rzeczywistych aplikacji',
            ],
          },
          {
            title: 'Zbieranie i interpretacja wymagań projektowych',
            description:
              'Nauka ustalania realnych celów projektu, definiowania wymagań oraz mapowania interesariuszy.',
            bullets: [
              'Identyfikacja potrzeb biznesowych',
              'Definiowanie celów SMART',
              'Warsztaty z interesariuszami',
              'Tworzenie matryc wymagań',
            ],
          },
          {
            title: 'Jak budować kosztorys projektu',
            description:
              'Wprowadzenie do budżetowania przedsięwzięć, szacowania kosztów i efektywności finansowej.',
            bullets: [
              'Struktura kosztorysu i najczęstsze kategorie wydatków',
              'Źródła danych do szacowania kosztów',
              'Przykłady budżetów do wniosków UE i krajowych',
              'Analiza ryzyka kosztowego',
            ],
          },
          {
            title: 'Badanie rynku i analiza konkurencji',
            description:
              'Praktyczny przewodnik po metodach zbierania informacji o rynku i konkurentach.',
            bullets: [
              'Metody badań rynku: desk research, wywiady, ankiety',
              'Narzędzia analityczne: SWOT, benchmarking',
              'Interpretacja wyników badań',
              'Wykorzystanie danych w aplikacjach projektowych',
            ],
          },
          {
            title: 'Pisanie wniosków do urzędu pracy o dotację',
            description:
              'Praktyczny kurs o przygotowywaniu efektywnych wniosków o dofinansowanie na start działalności gospodarczej.',
            bullets: [
              'Wytyczne PUP i kluczowe elementy wniosku',
              'Harmonogram realizacji i plan wydatków',
              'Przykładowy wniosek wraz z omówieniem',
              'Najczęstsze błędy i wskazówki',
            ],
          },
          {
            title: 'Pisanie aplikacji do PFRON',
            description:
              'Specyfika projektów skierowanych do osób z niepełnosprawnościami – wymagania, uzasadnienie i dokumentacja.',
            bullets: [
              'Struktura wniosku do PFRON',
              'Dokumentacja potwierdzająca spełnienie kryteriów',
              'Opis działań i celów zgodnych z misją PFRON',
              'Przykłady skutecznych aplikacji',
            ],
          },
          {
            title: 'Pomiary rezultatów i wskaźników w projekcie',
            description:
              'Jak planować i monitorować stopień realizacji celów projektowych oraz raportować postępy.',
            bullets: [
              'Definicja wskaźników rezultatu i produktu',
              'Planowanie pomiarów',
              'Narzędzia raportowania',
              'Typowe problemy i sposoby ich rozwiązywania',
            ],
          },
          {
            title: 'Tworzenie aplikacji projektowych dla NGO',
            description:
              'Kompleksowy przewodnik po pisaniu wniosków zgodnie z wymogami programów grantowych dla organizacji pozarządowych.',
            bullets: [
              'Analiza specyfiki działalności NGO',
              'Struktura i język wniosku grantowego',
              'Podkreślanie wpływu społecznego i trwałości projektu',
              'Przykłady udanych projektów',
            ],
          },
        ],
      },
      availableCourses: {
        title: 'Dostępne kursy – zapisz się już dziś',
        orderLabel: 'Zamów teraz',
        burLabel: 'Zapytaj o dofinansowanie BUR',
        stripePlaceholder: 'https://buy.stripe.com/REPLACE_ME',
        items: [
          {
            date: '25/08/2026',
            time: '9:00–13:30',
            title: 'Tworzenie aplikacji projektowych dla NGO',
            price: '399 PLN',
            paymentLink: 'https://buy.stripe.com/REPLACE_ME',
          },
          {
            date: '28/10/2026',
            time: '9:00–13:30',
            title: 'Tworzenie aplikacji projektowych dla NGO',
            price: '399 PLN',
            paymentLink: 'https://buy.stripe.com/REPLACE_ME',
          },
          {
            date: '27/09/2026',
            time: '9:00–13:30',
            title: 'Pomiary rezultatów i wskaźników w projekcie',
            price: '399 PLN',
            paymentLink: 'https://buy.stripe.com/REPLACE_ME',
          },
          {
            date: '26/09/2026',
            time: '9:00–13:30',
            title: 'Pomiary rezultatów i wskaźników w projekcie',
            price: '399 PLN',
            paymentLink: 'https://buy.stripe.com/REPLACE_ME',
          },
          {
            date: '26/08/2026',
            time: '9:00–13:30',
            title: 'Pisanie wniosków do urzędu pracy o dotację',
            price: '249 PLN',
            badge: 'Oferta specjalna',
            paymentLink: 'https://buy.stripe.com/REPLACE_ME',
          },
          {
            date: '26/10/2026',
            time: '9:00–13:30',
            title: 'Pisanie wniosków do urzędu pracy o dotację',
            price: '249 PLN',
            badge: 'Oferta specjalna',
            paymentLink: 'https://buy.stripe.com/REPLACE_ME',
          },
          {
            date: '16/10/2026',
            time: '9:00–13:30',
            title: 'Jak budować kosztorys projektu',
            price: '399 PLN',
            paymentLink: 'https://buy.stripe.com/REPLACE_ME',
          },
          {
            date: '16/11/2026',
            time: '9:00–13:30',
            title: 'Jak budować kosztorys projektu',
            price: '399 PLN',
            paymentLink: 'https://buy.stripe.com/REPLACE_ME',
          },
        ],
      },
      consultation: {
        title: 'Konsultacja szkoleniowa',
        price: '349 PLN',
        description: 'Indywidualna rozmowa, diagnoza potrzeb i plan dalszego rozwoju lub szkolenia.',
        includes: ['60 minut online', 'Plan działania', 'Materiały po spotkaniu', 'Wsparcie mailowe'],
        buttonLabel: 'Zarezerwuj konsultację',
        paymentLink: 'https://buy.stripe.com/REPLACE_ME',
      },
      stationary: {
        title: 'Szkolenia stacjonarne',
        price: 'Wycena indywidualna',
        description: 'Profesjonalne szkolenie dla zespołów, organizacji i grup lokalnych.',
        includes: ['Program dopasowany do grupy', 'Materiały szkoleniowe', 'Praca warsztatowa', 'Raport po szkoleniu'],
        buttonLabel: 'Zapytaj o wycenę',
      },
      applicationForm: {
        title: 'Formularz zgłoszeniowy',
        intro: 'Wypełnij formularz, aby zgłosić udział w szkoleniu lub zapytać o dofinansowanie BUR.',
        referralNote:
          'Za każdą osobę poleconą, która kupi kurs, osoba polecająca otrzyma kupon Rossmann o wartości 30 PLN.',
        fields: {
          firstName: 'Imię',
          lastName: 'Nazwisko',
          email: 'Adres e-mail',
          phone: 'Numer telefonu',
          selectedTraining: 'Wybrane szkolenie',
          supportNeeds: 'Szczególne potrzeby wspierające udział w szkoleniu',
          questions: 'Pytania, na które chcesz uzyskać odpowiedź podczas szkolenia',
          referral1Name: 'Polecenie 1: imię i nazwisko',
          referral1Email: 'Polecenie 1: e-mail',
          referral1Phone: 'Polecenie 1: telefon',
          referral2Name: 'Polecenie 2: imię i nazwisko',
          referral2Email: 'Polecenie 2: e-mail',
          referral2Phone: 'Polecenie 2: telefon',
          referral3Name: 'Polecenie 3: imię i nazwisko',
          referral3Email: 'Polecenie 3: e-mail',
          referral3Phone: 'Polecenie 3: telefon',
        },
        termsLabel: 'Akceptuję regulamin szkolenia',
        gdprLabel: 'Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z RODO',
        buttonLabel: 'Wyślij zgłoszenie',
        sendingLabel: 'Wysyłanie zgłoszenia...',
        successMessage: 'Dziękujemy. Twoje zgłoszenie zostało wysłane.',
        errorMessage:
          `Wystąpił błąd. Spróbuj ponownie lub napisz do nas bezpośrednio: ${companyContent.trainingEmail}`,
      },
      terms: {
        title: 'Regulamin szkolenia',
        items: [
          'Rezerwacja miejsca następuje po przesłaniu formularza i/lub dokonaniu płatności.',
          'Szkolenie online odbędzie się, jeśli zapisze się minimalna wymagana liczba uczestników.',
          'Dla kursów 2-dniowych minimum to 4 osoby.',
          'Dla kursów 4-godzinnych minimum to 6 osób.',
          'Organizator może zaproponować nowy termin, jeśli minimalna liczba uczestników nie zostanie osiągnięta.',
          'Uczestnik otrzymuje materiały pomocnicze.',
          'Uczestnik otrzymuje certyfikat ukończenia szkolenia.',
          'Link do szkolenia online zostanie wysłany na adres e-mail podany w formularzu.',
          'Uczestnik odpowiada za poprawność danych podanych w formularzu.',
        ],
      },
      refunds: {
        title: 'Zasady rezygnacji i zwrotu kosztów',
        items: [
          '80% zwrotu, jeśli rezygnacja nastąpi więcej niż 30 dni przed terminem szkolenia.',
          '50% zwrotu, jeśli rezygnacja nastąpi 20–29 dni przed terminem szkolenia.',
          '30% zwrotu, jeśli rezygnacja nastąpi 15–19 dni przed terminem szkolenia.',
          'Brak zwrotu, jeśli rezygnacja nastąpi mniej niż 14 dni przed terminem szkolenia.',
        ],
      },
      gdpr: {
        title: 'RODO',
        items: [
          'Administratorem danych jest EC Consulting Ltd.',
          'Dane są przetwarzane w celu obsługi zgłoszenia, kontaktu, organizacji szkolenia i realizacji usługi.',
          'Dane mogą być wykorzystywane do kontaktu organizacyjnego przed i po szkoleniu.',
          'Podanie danych jest dobrowolne, ale konieczne do obsługi zgłoszenia.',
          'Osoba zgłaszająca ma prawo dostępu do danych, sprostowania, usunięcia lub ograniczenia przetwarzania.',
          `Kontakt w sprawach danych: ${companyContent.trainingEmail}`,
        ],
      },
      contact: {
        title: 'Kontakt w sprawie szkoleń',
        emailLabel: 'E-mail',
        polandPhoneLabel: 'Polska',
        generalLabel: 'Kontakt ogólny',
        emailButton: 'Napisz e-mail',
        phoneButton: 'Zadzwoń',
        burButton: 'Zapytaj o dofinansowanie BUR',
      },
    },
    contact: {
      hero: {
        eyebrow: 'Contact',
        title: 'Start a confidential conversation with EC Consulting.',
        text:
          'Send an enquiry or call EC Consulting for grant writing, consultancy, training and general business support.',
      },
      cards: [
        { label: 'United Kingdom telephone', value: companyContent.ukPhone, href: companyContent.ukPhoneHref, icon: Phone },
        { label: 'Poland telephone', value: companyContent.polandPhone, href: companyContent.polandPhoneHref, icon: Phone },
        { label: 'General Enquiries', value: companyContent.email, href: `mailto:${companyContent.email}`, icon: Mail },
        { label: 'Third Sector & Funding Support', value: companyContent.grantEmail, href: `mailto:${companyContent.grantEmail}`, icon: Mail },
        { label: 'Training Enquiries', value: companyContent.trainingEmail, href: `mailto:${companyContent.trainingEmail}`, icon: Mail },
        { label: 'Website', value: companyContent.website, href: companyContent.websiteUrl, icon: ExternalLink },
        { label: 'Glasgow office', value: companyContent.address, href: '/contact#map', icon: MapPin },
      ],
      form: {
        eyebrow: 'Enquiry form',
        title: 'Tell us what kind of support you need.',
        text: 'This form securely sends your enquiry to EC Consulting through Formspree.',
        directEmailsTitle: 'Direct emails',
        telephoneTitle: 'Telephone',
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
export const grantServices = siteContent.pages.grants.services.categories;
export const businessServices = siteContent.pages.business.services.items;
export const polishTopics = [];
export const contactCards = siteContent.pages.contact.cards;
export const stripePlaceholder = siteContent.stripe.fallbackPaymentLink;
export const pricing = siteContent.pricing;
export const faqs = siteContent.pages.grants.faqs.items;
