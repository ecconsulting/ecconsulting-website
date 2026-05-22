import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ClipboardCheck, MessageCircle } from 'lucide-react';
import HeroSection from '../components/HeroSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import MotionSection from '../components/MotionSection.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTASection from '../components/CTASection.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import { assets, company, expertise, servicePreviews } from '../data/site.js';

export default function Home() {
  return (
    <>
      <HeroSection />

      <MotionSection className="bg-porcelain-band py-16 sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-md border border-gilt/20" aria-hidden="true" />
            <img
              src={assets.portraitAbout}
              alt="Ewelina Chin seated professional portrait"
              className="relative h-[36rem] w-full rounded-md border border-ink/10 object-cover object-[50%_16%] shadow-soft"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="About EC Consulting"
              title="Experienced, strategic and grounded in practical financial leadership."
              text="Ewelina Chin is an experienced financial consultant, welfare adviser and strategic grant specialist with over 15 years of experience supporting charities, community organisations and businesses."
            />
            <p className="mt-6 text-base leading-8 text-graphite">
              Her work combines financial oversight, grant management, compliance, budgeting, strategic
              planning and trauma-informed leadership.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {expertise.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-md border border-ink/10 bg-white/70 p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gilt" aria-hidden="true" />
                  <span className="text-sm font-semibold text-charcoal">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Services"
            title="Focused consultancy for finance, funding and growth."
            text="Choose a service area to explore packages, support options and the most relevant contact route."
            align="center"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {servicePreviews.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  to={service.path}
                  className="group premium-card rounded-md p-6 transition duration-300 hover:-translate-y-1 hover:border-gilt/50 hover:shadow-gold"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-ink text-champagne">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-3xl font-semibold text-ink">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-graphite">{service.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gilt">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-quiet-luxury py-16 text-white sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Consultative method"
              title="Clear steps, calm execution and accountable support."
              text="Each engagement starts with context, risk and priorities, then moves into a practical plan that can be used immediately by leadership, trustees or business owners."
              light
            />
          </div>
          <div className="grid gap-4">
            {[
              ['1', 'Clarify the brief', 'Understand the organisation, pressure points, funding needs and operational goals.'],
              ['2', 'Build the plan', 'Create a focused route for finance, systems, compliance, grant applications or training.'],
              ['3', 'Support delivery', 'Provide practical documents, structured advice and calm professional follow-through.'],
            ].map(([number, title, text]) => (
              <article key={number} className="dark-card rounded-md p-5">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-champagne font-bold text-ink">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/70">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-linen py-16 sm:py-20">
        <div className="container-shell grid gap-8 rounded-md border border-ink/10 bg-white/80 p-7 shadow-soft lg:grid-cols-[1fr_0.8fr] lg:items-center lg:p-10">
          <div>
            <p className="eyebrow">Professional consultation</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              A discreet advisory space for decisions that need structure.
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite">
              Book a consultation to review funding plans, finance processes, compliance questions,
              business systems or training requirements.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <ButtonLink to="/business-consultancy#consultation" icon={ClipboardCheck} className="w-full">
              Book Consultation
            </ButtonLink>
            <ButtonLink href={company.whatsappUrl} external variant="outline" icon={MessageCircle} className="w-full">
              WhatsApp EC Consulting
            </ButtonLink>
          </div>
        </div>
      </MotionSection>

      <Testimonials />

      <CTASection
        eyebrow="Sustainable growth"
        title="Let’s build sustainable growth together."
        text="For charities, businesses and purpose-driven organisations ready for clearer systems, stronger funding and more confident decisions."
        primaryTo="/contact"
        secondaryHref={company.whatsappUrl}
      />
    </>
  );
}
