import { CalendarCheck, CheckCircle2, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import MotionSection from '../components/MotionSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import IconGrid from '../components/IconGrid.jsx';
import PricingCards from '../components/PricingCards.jsx';
import CTASection from '../components/CTASection.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import { assets, businessServices, company, pricing } from '../data/site.js';

export default function BusinessConsultancy() {
  return (
    <>
      <PageHero
        eyebrow="Business Consultancy"
        title="Financial systems and strategic support for confident business decisions."
        text="Practical consultancy for bookkeeping, payroll, HMRC support, Xero systems, budgeting, compliance and operational structure."
        primaryLabel="Book consultation"
        primaryTo="/business-consultancy#consultation"
        secondaryLabel="Contact now"
        secondaryTo="/contact"
      >
        <div className="dark-card rounded-md p-6">
          <p className="eyebrow">Business support</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Organised finance. Clearer operations. Better planning.</h2>
          <div className="mt-7 grid gap-3">
            {['HMRC Registered Agent', 'Xero Professional Partner', '15+ years experience'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.06] p-4">
                <ShieldCheck className="h-5 w-5 text-champagne" aria-hidden="true" />
                <span className="text-sm font-bold text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <MotionSection className="bg-porcelain py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Consultancy focus"
            title="A complete view of finance, compliance and operations."
            text="Support can be focused on one pressure point or shaped into an ongoing business support relationship."
            align="center"
          />
          <div className="mt-10">
            <IconGrid items={businessServices} />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Packages"
            title="Business support packages."
            text="Choose a starting point for setup, monthly finance support or strategic consultancy."
            align="center"
          />
          <div className="mt-10">
            <PricingCards plans={pricing.business} />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-quiet-luxury py-16 text-white sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Why work with EC Consulting"
              title="Senior-level judgement with practical delivery."
              text="EC Consulting combines finance, welfare guidance, grant strategy, compliance awareness and leadership coaching into support that makes sense for real organisations."
              light
            />
          </div>
          <div className="grid gap-4">
            {[
              'Clear financial insight without unnecessary complexity.',
              'Support that connects strategy with day-to-day systems.',
              'Professional guidance for owners, trustees and leadership teams.',
              'Calm, confidential advice when decisions carry pressure.',
            ].map((item) => (
              <div key={item} className="dark-card flex gap-4 rounded-md p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-champagne" aria-hidden="true" />
                <p className="text-sm font-semibold leading-7 text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="consultation" className="bg-porcelain-band py-16 sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-md border border-gilt/20" aria-hidden="true" />
            <img
              src={assets.portraitConsultation}
              alt="Ewelina Chin professional consultation portrait"
              className="relative h-[34rem] w-full rounded-md border border-ink/10 object-cover object-[50%_18%] shadow-soft"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Consultation booking"
              title="Book a professional consultation."
              text="Use this section to start a conversation about business finance, Xero, payroll, HMRC support, budgeting or operational systems."
            />
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="premium-card rounded-md p-5 transition hover:-translate-y-1 hover:border-gilt/50">
                <Phone className="h-6 w-6 text-gilt" aria-hidden="true" />
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-graphite">Call</p>
                <p className="mt-1 text-lg font-bold text-ink">{company.phone}</p>
              </a>
              <a href={company.whatsappUrl} target="_blank" rel="noreferrer" className="premium-card rounded-md p-5 transition hover:-translate-y-1 hover:border-gilt/50">
                <MessageCircle className="h-6 w-6 text-gilt" aria-hidden="true" />
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-graphite">WhatsApp</p>
                <p className="mt-1 text-lg font-bold text-ink">{company.whatsapp}</p>
              </a>
            </div>
            <ButtonLink to="/contact" icon={CalendarCheck} className="mt-7">
              Send consultation request
            </ButtonLink>
          </div>
        </div>
      </MotionSection>

      <CTASection
        eyebrow="Business clarity"
        title="Make the next financial decision with structure."
        text="Get the right support around bookkeeping, payroll, HMRC, Xero, compliance and business planning."
        primaryLabel="Contact EC Consulting"
        primaryTo="/contact"
        secondaryHref={company.whatsappUrl}
      />
    </>
  );
}
