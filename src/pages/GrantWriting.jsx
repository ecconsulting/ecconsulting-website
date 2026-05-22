import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import MotionSection from '../components/MotionSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import IconGrid from '../components/IconGrid.jsx';
import PricingCards from '../components/PricingCards.jsx';
import CTASection from '../components/CTASection.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import { company, pricing, siteContent } from '../data/site.js';

export default function GrantWriting() {
  const page = siteContent.pages.grants;

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
          <div className="grid gap-4 sm:grid-cols-2">
            {page.hero.cards.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-md border border-white/10 bg-white/[0.06] p-5">
                  <Icon className="h-6 w-6 text-champagne" aria-hidden="true" />
                  <p className="mt-4 text-lg font-bold text-white">{item.label}</p>
                </div>
              );
            })}
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
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={page.details.eyebrow}
              title={page.details.title}
              text={page.details.text}
            />
            <ButtonLink to="/contact" icon={ArrowRight} className="mt-7">
              {page.details.buttonLabel}
            </ButtonLink>
          </div>
          <div className="grid gap-4">
            {page.details.bullets.map((item) => (
              <div key={item} className="flex gap-4 rounded-md border border-ink/10 bg-linen/50 p-5">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gilt" />
                <p className="text-sm font-semibold leading-7 text-charcoal">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="pricing" className="bg-porcelain-band py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow={page.pricing.eyebrow}
            title={page.pricing.title}
            text={page.pricing.text}
            align="center"
          />
          <div className="mt-10">
            <PricingCards plans={pricing.grants} />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow={page.faqs.eyebrow}
            title={page.faqs.title}
            text={page.faqs.text}
            align="center"
          />
          <div className="mx-auto mt-10 max-w-4xl divide-y divide-ink/10 rounded-md border border-ink/10 bg-white shadow-soft">
            {page.faqs.items.map((item) => (
              <details key={item.question} className="group p-6">
                <summary className="cursor-pointer list-none text-lg font-bold text-ink">
                  <span className="inline-flex w-full items-center justify-between gap-4">
                    {item.question}
                    <span className="text-gilt transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-graphite">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </MotionSection>

      <CTASection
        eyebrow={page.cta.eyebrow}
        title={page.cta.title}
        text={page.cta.text}
        primaryLabel={page.cta.primaryLabel}
        primaryTo="/contact"
        secondaryHref={company.whatsappUrl}
      />
    </>
  );
}
