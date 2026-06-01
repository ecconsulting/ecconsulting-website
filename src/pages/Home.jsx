import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ClipboardCheck, Phone } from 'lucide-react';
import HeroSection from '../components/HeroSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import MotionSection from '../components/MotionSection.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTASection from '../components/CTASection.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import { assets, company, siteContent } from '../data/site.js';

export default function Home() {
  const home = siteContent.home;

  return (
    <>
      <HeroSection />

      <MotionSection className="bg-linen py-10 sm:py-12">
        <div className="container-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {home.trust.items.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-md border border-ink/10 bg-white/80 p-4 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-ink text-champagne">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-ink">{item.title}</h2>
                    <p className="mt-1 text-xs font-semibold leading-5 text-graphite">{item.text}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </MotionSection>

      <MotionSection id="about" className="bg-porcelain-band py-16 sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-md border border-gilt/20" aria-hidden="true" />
            <img
              src={assets.portraitAbout}
              alt={assets.portraitAboutAlt}
              className="relative h-[36rem] w-full rounded-md border border-ink/10 object-cover object-[50%_16%] shadow-soft"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow={home.about.eyebrow}
              title={home.about.title}
              text={home.about.text}
            />
            <p className="mt-6 text-base leading-8 text-graphite">
              {home.about.followUp}
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {home.about.expertise.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-md border border-ink/10 bg-white/70 p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gilt" aria-hidden="true" />
                  <span className="text-sm font-semibold text-charcoal">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="services" className="bg-white py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow={home.services.eyebrow}
            title={home.services.title}
            text={home.services.text}
            align="center"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {home.services.cards.map((service) => {
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
                  {service.points?.length > 0 && (
                    <ul className="mt-5 space-y-2">
                      {service.points.map((point) => (
                        <li key={point} className="flex gap-2 text-sm font-semibold leading-6 text-charcoal">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gilt" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gilt">
                    {service.ctaLabel || siteContent.ui.learnMoreLabel}
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
              eyebrow={home.method.eyebrow}
              title={home.method.title}
              text={home.method.text}
              light
            />
          </div>
          <div className="grid gap-4">
            {home.method.steps.map((step) => (
              <article key={step.number} className="dark-card rounded-md p-5">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-champagne font-bold text-ink">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/70">{step.text}</p>
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
            <p className="eyebrow">{home.consultation.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {home.consultation.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite">
              {home.consultation.text}
            </p>
            {home.consultation.points?.length > 0 && (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {home.consultation.points.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-md border border-ink/10 bg-linen/60 p-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gilt" aria-hidden="true" />
                    <span className="text-sm font-semibold leading-6 text-charcoal">{point}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <ButtonLink to={home.consultation.primaryTo} icon={ClipboardCheck} className="w-full">
              {home.consultation.primaryLabel}
            </ButtonLink>
            <ButtonLink href={company.ukPhoneHref} variant="outline" icon={Phone} className="w-full">
              {home.consultation.secondaryLabel}
            </ButtonLink>
          </div>
        </div>
      </MotionSection>

      <Testimonials />

      <CTASection
        eyebrow={home.cta.eyebrow}
        title={home.cta.title}
        text={home.cta.text}
        primaryLabel={home.cta.primaryLabel}
        primaryTo="/contact?service=general"
        secondaryHref={company.ukPhoneHref}
      />
    </>
  );
}
