import { ArrowRight, FileCheck2, HandHeart, Search, Target } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import MotionSection from '../components/MotionSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import IconGrid from '../components/IconGrid.jsx';
import PricingCards from '../components/PricingCards.jsx';
import CTASection from '../components/CTASection.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import { company, faqs, grantServices, pricing } from '../data/site.js';

export default function GrantWriting() {
  return (
    <>
      <PageHero
        eyebrow="Grant Writing"
        title="Strategic funding support for charities and community organisations."
        text="Professional grant applications, funding research, monitoring and reporting support for organisations delivering meaningful community impact."
        primaryLabel="Discuss a funding bid"
        primaryTo="/contact"
        secondaryLabel="View pricing"
        secondaryTo="/grant-writing#pricing"
      >
        <div className="dark-card rounded-md p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Funding research', icon: Search },
              { label: 'Application drafting', icon: FileCheck2 },
              { label: 'Impact reporting', icon: Target },
              { label: 'Third sector advice', icon: HandHeart },
            ].map((item) => {
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
            eyebrow="Funding services"
            title="From funder fit to final reporting."
            text="Support can focus on a single application or on a longer funding strategy that helps your organisation plan ahead with confidence."
            align="center"
          />
          <div className="mt-10">
            <IconGrid items={grantServices} />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Third sector consultancy"
              title="Funding plans that connect purpose, budget and evidence."
              text="Grant work is strongest when the case for support, delivery model, budget and monitoring plan all speak the same language."
            />
            <ButtonLink to="/contact" icon={ArrowRight} className="mt-7">
              Start a funding conversation
            </ButtonLink>
          </div>
          <div className="grid gap-4">
            {[
              'Funding pipeline and deadline mapping for community projects.',
              'Project outcomes, outputs, budget notes and monitoring indicators.',
              'Trustee and leadership guidance around grant compliance and reporting.',
              'Application language that is clear, specific and aligned with funder priorities.',
            ].map((item) => (
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
            eyebrow="Pricing"
            title="Grant support packages."
            text="Transparent starting points for common funding support needs. Final scope is confirmed after an initial conversation."
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
            eyebrow="FAQ"
            title="Common grant writing questions."
            text="A few practical answers before you start the process."
            align="center"
          />
          <div className="mx-auto mt-10 max-w-4xl divide-y divide-ink/10 rounded-md border border-ink/10 bg-white shadow-soft">
            {faqs.map((item) => (
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
        eyebrow="Funding support"
        title="Ready to strengthen your next application?"
        text={`Email ${company.grantEmail} or use the contact form to share your project, funder deadline and support needs.`}
        primaryLabel="Contact Grant Support"
        primaryTo="/contact"
        secondaryHref={company.whatsappUrl}
      />
    </>
  );
}
