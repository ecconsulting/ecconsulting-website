import { CalendarCheck, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import MotionSection from '../components/MotionSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import IconGrid from '../components/IconGrid.jsx';
import PricingCards from '../components/PricingCards.jsx';
import CTASection from '../components/CTASection.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import ContactBlock from '../components/ContactBlock.jsx';
import { assets, company, pricing, siteContent } from '../data/site.js';

export default function BusinessConsultancy() {
  const page = siteContent.pages.business;

  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        text={page.hero.text}
        primaryLabel={page.hero.primaryLabel}
        primaryTo={page.hero.primaryTo}
        secondaryLabel={page.hero.secondaryLabel}
        secondaryTo={page.hero.secondaryTo}
      >
        <div className="dark-card rounded-md p-6">
          <p className="eyebrow">{page.heroPanel.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">{page.heroPanel.title}</h2>
          <div className="mt-7 grid gap-3">
            {page.heroPanel.badges.map((item) => (
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
            eyebrow={page.services.eyebrow}
            title={page.services.title}
            text={page.services.text}
            align="center"
          />
          <div className="mt-10">
            <IconGrid items={page.services.items} />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow={page.pricing.eyebrow}
            title={page.pricing.title}
            text={page.pricing.text}
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
              eyebrow={page.why.eyebrow}
              title={page.why.title}
              text={page.why.text}
              light
            />
          </div>
          <div className="grid gap-4">
            {page.why.bullets.map((item) => (
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
              alt={assets.portraitConsultationAlt}
              className="relative h-[34rem] w-full rounded-md border border-ink/10 object-cover object-[50%_18%] shadow-soft"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow={page.consultation.eyebrow}
              title={page.consultation.title}
              text={page.consultation.text}
            />
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <a href={company.ukPhoneHref} className="premium-card rounded-md p-5 transition hover:-translate-y-1 hover:border-gilt/50">
                <Phone className="h-6 w-6 text-gilt" aria-hidden="true" />
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-graphite">{page.consultation.callLabel}</p>
                <p className="mt-1 text-lg font-bold text-ink">{company.ukPhone}</p>
              </a>
              <a href={company.polandPhoneHref} className="premium-card rounded-md p-5 transition hover:-translate-y-1 hover:border-gilt/50">
                <Phone className="h-6 w-6 text-gilt" aria-hidden="true" />
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-graphite">{page.consultation.polandCallLabel}</p>
                <p className="mt-1 text-lg font-bold text-ink">{company.polandPhone}</p>
              </a>
            </div>
            <ButtonLink to="/contact?service=business" icon={CalendarCheck} className="mt-7">
              {page.consultation.buttonLabel}
            </ButtonLink>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 sm:py-20">
        <div className="container-shell">
          <ContactBlock />
        </div>
      </MotionSection>

      <CTASection
        eyebrow={page.cta.eyebrow}
        title={page.cta.title}
        text={page.cta.text}
        primaryLabel={page.cta.primaryLabel}
        primaryTo="/contact?service=business"
        secondaryHref={company.ukPhoneHref}
      />
    </>
  );
}
