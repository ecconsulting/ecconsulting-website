import { ArrowRight, MessageCircle } from 'lucide-react';
import ButtonLink from './ButtonLink.jsx';
import MotionSection from './MotionSection.jsx';
import { siteContent } from '../data/site.js';

export default function CTASection({
  eyebrow = siteContent.ui.contactLabel,
  title,
  text,
  primaryLabel = siteContent.home.hero.primaryCta.label,
  primaryTo = '/contact',
  secondaryLabel = siteContent.ui.whatsappLabel,
  secondaryHref,
}) {
  return (
    <MotionSection className="bg-quiet-luxury py-16 text-white sm:py-20">
      <div className="container-shell">
        <div className="grid gap-8 rounded-md border border-white/10 bg-white/[0.055] p-8 shadow-gold backdrop-blur md:grid-cols-[1.3fr_0.7fr] md:items-center md:p-10">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">{title}</h2>
            {text && <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">{text}</p>}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <ButtonLink to={primaryTo} variant="primary" icon={ArrowRight} className="w-full">
              {primaryLabel}
            </ButtonLink>
            {secondaryHref && (
              <ButtonLink href={secondaryHref} external variant="ghost" icon={MessageCircle} className="w-full">
                {secondaryLabel}
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
