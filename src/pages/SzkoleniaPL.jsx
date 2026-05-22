import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import MotionSection from '../components/MotionSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import IconGrid from '../components/IconGrid.jsx';
import PricingCards from '../components/PricingCards.jsx';
import CTASection from '../components/CTASection.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import { company, pricing, siteContent } from '../data/site.js';

export default function SzkoleniaPL() {
  const page = siteContent.pages.training;

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
                <CheckCircle2 className="h-5 w-5 text-champagne" aria-hidden="true" />
                <span className="text-sm font-bold text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <MotionSection id="tematy" className="bg-porcelain py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow={page.topics.eyebrow}
            title={page.topics.title}
            text={page.topics.text}
            align="center"
          />
          <div className="mt-10">
            <IconGrid items={page.topics.items} />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={page.approach.eyebrow}
              title={page.approach.title}
              text={page.approach.text}
            />
            <ButtonLink to="/contact" icon={ArrowRight} className="mt-7">
              {page.approach.buttonLabel}
            </ButtonLink>
          </div>
          <div className="grid gap-4">
            {page.approach.bullets.map((item) => (
              <div key={item} className="flex gap-4 rounded-md border border-ink/10 bg-linen/50 p-5">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gilt" />
                <p className="text-sm font-semibold leading-7 text-charcoal">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-porcelain-band py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow={page.pricing.eyebrow}
            title={page.pricing.title}
            text={page.pricing.text}
            align="center"
          />
          <div className="mt-10">
            <PricingCards plans={pricing.polish} polish />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-quiet-luxury py-16 text-white sm:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow">{page.contactBand.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">{page.contactBand.title}</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">
              {page.contactBand.text}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <ButtonLink to="/contact" variant="primary" className="w-full">
              {page.contactBand.primaryLabel}
            </ButtonLink>
            <ButtonLink href={company.whatsappUrl} external variant="ghost" icon={MessageCircle} className="w-full">
              {page.contactBand.secondaryLabel}
            </ButtonLink>
          </div>
        </div>
      </MotionSection>

      <CTASection
        eyebrow={page.cta.eyebrow}
        title={page.cta.title}
        text={page.cta.text}
        primaryLabel={page.cta.primaryLabel}
        primaryTo="/contact"
        secondaryLabel={page.cta.secondaryLabel}
        secondaryHref={company.whatsappUrl}
      />
    </>
  );
}
