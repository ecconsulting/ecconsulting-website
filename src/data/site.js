import {
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  FileSearch,
  FileText,
  GraduationCap,
  HandHeart,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  WalletCards,
} from 'lucide-react';

export const company = {
  name: 'EC Consulting Ltd',
  number: 'SC855029',
  address: 'Clyde Offices, 48 West George Street, 2nd Floor, Glasgow, United Kingdom, G2 1BP',
  email: 'contact@ecconsultant.co.uk',
  phone: '+44 1786 845717',
  whatsapp: '+44 7889 600760',
  whatsappUrl: 'https://wa.me/447889600760',
  grantEmail: 'thirdsector@ecconsultant.co.uk',
  trainingEmail: 'szkolenia@ecconsultant.co.uk',
};

export const assets = {
  logo: '/assets/ec-logo.jpg',
  portraitHero: '/assets/ewelina-portrait-hero.jpg',
  portraitAbout: '/assets/ewelina-portrait-about.jpg',
  portraitConsultation: '/assets/ewelina-portrait-consultation.jpg',
};

export const navItems = [
  { label: 'Home', polishLabel: 'Strona główna', path: '/' },
  { label: 'Grant Writing', polishLabel: 'Dotacje', path: '/grant-writing' },
  { label: 'Business Consultancy', polishLabel: 'Konsulting biznesowy', path: '/business-consultancy' },
  { label: 'Szkolenia PL', polishLabel: 'Szkolenia PL', path: '/szkolenia-pl' },
  { label: 'Contact', polishLabel: 'Kontakt', path: '/contact' },
];

export const stats = [
  { label: '15+ years experience', icon: BadgeCheck },
  { label: 'HMRC Registered Agent', icon: ShieldCheck },
  { label: 'Xero Professional Partner', icon: BarChart3 },
  { label: 'Grant & Third Sector Specialist', icon: HandHeart },
];

export const expertise = [
  'Grant applications',
  'Financial systems',
  'Payroll and bookkeeping',
  'Xero support',
  'Third sector development',
  'Funding strategy',
  'Governance support',
  'Soft skills coaching',
  'Welfare and budgeting guidance',
];

export const servicePreviews = [
  {
    title: 'Grant Writing',
    text: 'Funding research, application drafting, monitoring frameworks and strategic support for charities and community organisations.',
    path: '/grant-writing',
    icon: FileText,
  },
  {
    title: 'Business Consultancy',
    text: 'Bookkeeping, payroll, HMRC support, Xero systems, budgeting and practical operational consultancy.',
    path: '/business-consultancy',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Szkolenia PL',
    text: 'Profesjonalne szkolenia po polsku z dotacji, biznesu, księgowości i rozwoju działalności.',
    path: '/szkolenia-pl',
    icon: GraduationCap,
  },
];

export const testimonials = [
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
];

export const grantServices = [
  { title: 'Grant applications', icon: FileText },
  { title: 'Funding research', icon: FileSearch },
  { title: 'Monitoring and reporting', icon: ClipboardCheck },
  { title: 'Third sector consultancy', icon: HandHeart },
  { title: 'Community project funding', icon: Users },
  { title: 'Strategic funding plans', icon: Target },
];

export const businessServices = [
  { title: 'Bookkeeping', icon: ReceiptText },
  { title: 'Payroll', icon: WalletCards },
  { title: 'HMRC support', icon: Landmark },
  { title: 'Xero systems', icon: BarChart3 },
  { title: 'Budgeting', icon: ClipboardCheck },
  { title: 'Strategic planning', icon: Target },
  { title: 'Compliance', icon: ShieldCheck },
  { title: 'Startup consultancy', icon: Sparkles },
  { title: 'Operational systems', icon: Building2 },
];

export const polishTopics = [
  { title: 'Dotacje', icon: HandHeart },
  { title: 'Biznes', icon: BriefcaseBusiness },
  { title: 'Księgowość', icon: ReceiptText },
  { title: 'Rozwój działalności', icon: Target },
  { title: 'Umiejętności miękkie', icon: Users },
  { title: 'Szkolenia online', icon: BookOpenCheck },
  { title: 'Szkolenia stacjonarne', icon: GraduationCap },
];

export const contactCards = [
  { label: 'Email', value: company.email, href: `mailto:${company.email}`, icon: Mail },
  { label: 'Phone', value: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}`, icon: Phone },
  { label: 'WhatsApp', value: company.whatsapp, href: company.whatsappUrl, icon: MessageCircle },
  { label: 'Glasgow office', value: company.address, href: '/contact#map', icon: MapPin },
];

export const stripePlaceholder = 'https://buy.stripe.com/test_placeholder';

export const pricing = {
  grants: [
    {
      name: 'Basic Grant Review',
      price: 'From GBP 150',
      description: 'A focused review of your draft application, eligibility, outcomes and supporting evidence.',
      features: ['Application review', 'Eligibility check', 'Written improvement notes', '30-minute follow-up call'],
    },
    {
      name: 'Full Grant Application',
      price: 'From GBP 650',
      description: 'End-to-end preparation for a single grant or community project funding bid.',
      featured: true,
      features: ['Funding fit assessment', 'Narrative drafting', 'Budget guidance', 'Submission-ready documents'],
    },
    {
      name: 'Ongoing Funding Support',
      price: 'Monthly from GBP 450',
      description: 'A retained service for organisations needing consistent bid planning and funder reporting.',
      features: ['Funding pipeline', 'Calendar planning', 'Monitoring support', 'Strategic check-ins'],
    },
  ],
  business: [
    {
      name: 'Business Foundations',
      price: 'From GBP 175',
      description: 'A practical setup consultation for new or growing businesses needing financial clarity.',
      features: ['Initial systems review', 'HMRC and compliance guidance', 'Budget snapshot', 'Action plan'],
    },
    {
      name: 'Monthly Finance Support',
      price: 'Monthly from GBP 295',
      description: 'Reliable bookkeeping, payroll coordination and reporting support for established operations.',
      featured: true,
      features: ['Bookkeeping support', 'Payroll coordination', 'Xero workflows', 'Monthly finance check-in'],
    },
    {
      name: 'Strategic Advisory',
      price: 'From GBP 550',
      description: 'Structured business consultancy for planning, forecasting, internal systems and growth decisions.',
      features: ['Strategic planning session', 'Forecasting support', 'Operational systems review', 'Leadership support'],
    },
  ],
  polish: [
    {
      name: 'Konsultacja szkoleniowa',
      price: 'Od GBP 95',
      description: 'Indywidualna rozmowa, diagnoza potrzeb i plan dalszego rozwoju lub szkolenia.',
      features: ['60 minut online', 'Plan działania', 'Materiały po spotkaniu', 'Wsparcie mailowe'],
    },
    {
      name: 'Warsztat online',
      price: 'Od GBP 220',
      description: 'Praktyczne szkolenie dla osób rozwijających biznes, projekty lub kompetencje zawodowe.',
      featured: true,
      features: ['Szkolenie na żywo', 'Małe grupy', 'Ćwiczenia praktyczne', 'Certyfikat uczestnictwa'],
    },
    {
      name: 'Szkolenie stacjonarne',
      price: 'Wycena indywidualna',
      description: 'Profesjonalne szkolenie dla zespołów, organizacji i grup lokalnych.',
      features: ['Program dopasowany do grupy', 'Materiały szkoleniowe', 'Praca warsztatowa', 'Raport po szkoleniu'],
    },
  ],
};

export const faqs = [
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
];
