import { ArrowRight, CheckCircle2, CreditCard, FileText, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import MotionSection from '../components/MotionSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import ContactBlock from '../components/ContactBlock.jsx';
import { assets, siteContent } from '../data/site.js';

function TrustCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="premium-card rounded-md p-5 transition hover:-translate-y-1 hover:border-gilt/50">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-champagne/20 text-gilt">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-ink">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-graphite">{item.text}</p>
    </article>
  );
}

function ServiceCategory({ category }) {
  const Icon = category.icon;

  return (
    <article className="overflow-hidden rounded-md border border-ink/10 bg-white shadow-soft">
      <div className="border-b border-ink/10 bg-linen/70 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-ink text-champagne">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-ink">{category.title}</h3>
            <p className="mt-3 text-sm leading-7 text-graphite">{category.text}</p>
          </div>
        </div>
      </div>
      <div className="grid gap-px bg-ink/10 sm:grid-cols-2">
        {category.services.map((service) => (
          <div key={service.title} className="bg-white p-5">
            <h4 className="text-lg font-bold text-ink">{service.title}</h4>
            <p className="mt-2 text-sm leading-7 text-graphite">{service.text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function PricingCard({ plan, compact = false }) {
  return (
    <article
      className={[
        'flex h-full flex-col rounded-md border p-6 shadow-soft transition hover:-translate-y-1',
        plan.featured ? 'border-champagne bg-ink text-white shadow-gold' : 'border-ink/10 bg-white text-charcoal',
      ].join(' ')}
    >
      {plan.featured && (
        <p className="mb-4 inline-flex w-fit rounded-md bg-champagne px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-ink">
          Popular
        </p>
      )}
      <div className="flex-1">
        <p className={['text-xs font-bold uppercase tracking-[0.16em]', plan.featured ? 'text-champagne' : 'text-gilt'].join(' ')}>
          {plan.subtitle || 'Fixed support'}
        </p>
        <h3 className={['mt-3 text-3xl font-semibold leading-tight', plan.featured ? 'text-white' : 'text-ink'].join(' ')}>
          {plan.title}
        </h3>
        <p className={['mt-4 text-2xl font-extrabold', plan.featured ? 'text-champagne' : 'text-gilt'].join(' ')}>
          {plan.price}
        </p>

        <div className="mt-6">
          <p className={['text-sm font-bold uppercase tracking-[0.14em]', plan.featured ? 'text-white/55' : 'text-graphite'].join(' ')}>
            Includes
          </p>
          <ul className="mt-3 space-y-3">
            {plan.includes.map((item) => (
              <li key={item} className={['flex gap-3 text-sm leading-6', plan.featured ? 'text-white/78' : 'text-charcoal'].join(' ')}>
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {plan.paymentStructure && (
          <div className={['mt-6 rounded-md border p-4', plan.featured ? 'border-white/10 bg-white/[0.06]' : 'border-ink/10 bg-linen/50'].join(' ')}>
            <p className={['text-sm font-bold', plan.featured ? 'text-white' : 'text-ink'].join(' ')}>Payment structure</p>
            <ul className="mt-2 space-y-2">
              {plan.paymentStructure.map((item) => (
                <li key={item} className={['text-sm leading-6', plan.featured ? 'text-white/72' : 'text-graphite'].join(' ')}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {(plan.suitable || plan.bestFor) && (
          <div className="mt-6">
            <p className={['text-sm font-bold uppercase tracking-[0.14em]', plan.featured ? 'text-white/55' : 'text-graphite'].join(' ')}>
              {plan.bestFor ? 'Best for' : 'Suitable for'}
            </p>
            {plan.bestFor ? (
              <p className={['mt-2 text-sm leading-7', plan.featured ? 'text-white/78' : 'text-graphite'].join(' ')}>
                {plan.bestFor}
              </p>
            ) : (
              <ul className="mt-3 space-y-2">
                {plan.suitable.map((item) => (
                  <li key={item} className={['text-sm leading-6', plan.featured ? 'text-white/78' : 'text-graphite'].join(' ')}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <ButtonLink
        href={plan.paymentLink}
        external
        variant={plan.featured ? 'primary' : 'outline'}
        icon={compact ? ArrowRight : CreditCard}
        className="mt-7 w-full"
      >
        {plan.buttonLabel}
      </ButtonLink>
    </article>
  );
}

function ProcessStep({ step, index }) {
  const Icon = step.icon;

  return (
    <article className="relative rounded-md border border-ink/10 bg-white p-5 shadow-soft">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-ink text-sm font-bold text-champagne">
          {index + 1}
        </span>
        <div>
          <Icon className="h-5 w-5 text-gilt" aria-hidden="true" />
          <h3 className="mt-3 text-2xl font-semibold text-ink">{step.title}</h3>
          <p className="mt-2 text-sm leading-7 text-graphite">{step.text}</p>
        </div>
      </div>
    </article>
  );
}

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
          <p className="eyebrow">Professional credentials</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {page.hero.cards.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-md border border-white/10 bg-white/[0.06] p-4">
                  <Icon className="h-5 w-5 text-champagne" aria-hidden="true" />
                  <p className="mt-3 text-sm font-bold leading-6 text-white">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </PageHero>

      <MotionSection className="bg-porcelain py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow={page.trust.eyebrow}
            title={page.trust.title}
            text={page.trust.text}
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {page.trust.items.map((item) => (
              <TrustCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-md border border-gilt/20" aria-hidden="true" />
            <img
              src={assets.portraitThirdSector}
              alt={assets.portraitThirdSectorAlt}
              className="relative h-[34rem] w-full rounded-md border border-ink/10 object-cover object-[50%_30%] shadow-soft"
              loading="lazy"
            />
            <div className="relative -mt-16 mx-5 rounded-md border border-ink/10 bg-white/90 p-4 shadow-soft backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-gilt">Third-sector leadership</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-charcoal">
                Entrepreneur since 2007, active trustee and former SCIO founder/CEO.
              </p>
            </div>
          </div>
          <div>
            <SectionHeader eyebrow={page.profile.eyebrow} title={page.profile.title} text={page.profile.text} />
            <p className="mt-5 text-base leading-8 text-graphite">{page.profile.followUp}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {page.profile.credentials.map((item) => (
                <span key={item} className="rounded-md border border-ink/10 bg-linen px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-ink">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 lg:col-span-2">
            {page.profile.achievements.map((item) => (
              <div key={item} className="flex gap-4 rounded-md border border-ink/10 bg-linen/55 p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gilt" aria-hidden="true" />
                <p className="text-sm font-semibold leading-7 text-charcoal">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="services" className="bg-porcelain-band py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow={page.services.eyebrow}
            title={page.services.title}
            text={page.services.text}
            align="center"
          />
          <div className="mt-10 grid gap-6">
            {page.services.categories.map((category) => (
              <ServiceCategory key={category.title} category={category} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={page.reporting.eyebrow}
              title={page.reporting.title}
              text={page.reporting.text}
            />
            <div className="mt-7 rounded-md border border-gilt/25 bg-champagne/15 p-5">
              <ShieldCheck className="h-6 w-6 text-gilt" aria-hidden="true" />
              <p className="mt-4 text-sm font-bold leading-7 text-ink">
                Strong financial management builds trust, reduces risk, demonstrates accountability and supports repeat funding.
              </p>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="rounded-md border border-ink/10 bg-linen/55 p-5">
              <h3 className="text-2xl font-semibold text-ink">Funders increasingly assess</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {page.reporting.assessed.map((item) => (
                  <div key={item} className="flex gap-3 rounded-md bg-white p-3 text-sm font-bold text-charcoal">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gilt" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-md border border-ink/10 bg-white p-5 shadow-soft">
              <h3 className="text-2xl font-semibold text-ink">Professional examples</h3>
              <div className="mt-5 grid gap-4">
                {page.reporting.examples.map((item) => (
                  <p key={item} className="text-sm leading-7 text-graphite">{item}</p>
                ))}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {page.reporting.outcomes.map((item) => (
                <div key={item} className="flex gap-3 rounded-md border border-ink/10 bg-white p-4">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gilt" aria-hidden="true" />
                  <p className="text-sm font-semibold leading-6 text-charcoal">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="pricing" className="bg-porcelain py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow={page.pricing.eyebrow}
            title={page.pricing.title}
            text={page.pricing.text}
            align="center"
          />

          <div className="mt-10">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-gilt" aria-hidden="true" />
              <h3 className="text-3xl font-semibold text-ink">Funding & grant support</h3>
            </div>
            <div className="mt-5 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
              {page.pricing.funding.map((plan) => (
                <PricingCard key={`${plan.title}-${plan.subtitle || plan.price}`} plan={plan} />
              ))}
            </div>
          </div>

          <div className="mt-14">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-gilt" aria-hidden="true" />
              <h3 className="text-3xl font-semibold text-ink">Monthly financial management packages</h3>
            </div>
            <div className="mt-5 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
              {page.pricing.monthly.map((plan) => (
                <PricingCard key={plan.title} plan={plan} compact />
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-md border border-gilt/30 bg-ink p-6 text-white shadow-gold sm:p-8">
            <h3 className="text-3xl font-semibold text-white">{page.pricing.value.title}</h3>
            <p className="mt-4 max-w-4xl text-base leading-8 text-white/75">{page.pricing.value.text}</p>
            <p className="mt-6 rounded-md border border-champagne/30 bg-white/[0.08] p-4 text-lg font-bold leading-7 text-champagne">
              {page.pricing.value.banner}
            </p>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow={page.process.eyebrow}
            title={page.process.title}
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {page.process.steps.map((step, index) => (
              <ProcessStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-porcelain-band py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow={page.faqs.eyebrow}
            title={page.faqs.title}
            text={page.faqs.text}
            align="center"
          />
          <div className="mx-auto mt-10 max-w-5xl divide-y divide-ink/10 rounded-md border border-ink/10 bg-white shadow-soft">
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

      <MotionSection className="bg-quiet-luxury py-16 text-white sm:py-20">
        <div className="container-shell">
          <div className="grid gap-8 rounded-md border border-white/10 bg-white/[0.055] p-8 shadow-gold backdrop-blur md:grid-cols-[1.25fr_0.75fr] md:items-center md:p-10">
            <div>
              <p className="eyebrow">{page.cta.eyebrow}</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">{page.cta.title}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">{page.cta.text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <ButtonLink to="/contact?service=grants" variant="primary" icon={ArrowRight} className="w-full">
                {page.cta.primaryLabel}
              </ButtonLink>
              <ButtonLink to="/contact?service=grants" variant="ghost" icon={ArrowRight} className="w-full">
                {page.cta.secondaryLabel}
              </ButtonLink>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 sm:py-20">
        <div className="container-shell">
          <ContactBlock />
        </div>
      </MotionSection>
    </>
  );
}
