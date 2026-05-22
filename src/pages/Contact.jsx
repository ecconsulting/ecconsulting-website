import { ExternalLink, Mail, MapPin, MessageCircle } from 'lucide-react';
import MotionSection from '../components/MotionSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ContactForm from '../components/ContactForm.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import { company, contactCards, siteContent } from '../data/site.js';

export default function Contact() {
  const page = siteContent.pages.contact;

  return (
    <>
      <section className="bg-quiet-luxury py-16 text-white sm:py-20">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="eyebrow">{page.hero.eyebrow}</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.98] sm:text-6xl">
              {page.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              {page.hero.text}
            </p>
          </div>
        </div>
      </section>

      <MotionSection className="bg-porcelain py-16 sm:py-20">
        <div className="container-shell grid gap-5 lg:grid-cols-4">
          {contactCards.map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.label} href={item.href} className="premium-card rounded-md p-5 transition hover:-translate-y-1 hover:border-gilt/50">
                <Icon className="h-6 w-6 text-gilt" aria-hidden="true" />
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-graphite">{item.label}</p>
                <p className="mt-2 break-words text-base font-bold leading-7 text-ink">{item.value}</p>
              </a>
            );
          })}
        </div>
      </MotionSection>

      <MotionSection id="consultation" className="bg-white py-16 sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={page.form.eyebrow}
              title={page.form.title}
              text={page.form.text}
            />
            <div className="mt-7 grid gap-4 rounded-md border border-ink/10 bg-linen/50 p-5">
              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-gilt" aria-hidden="true" />
                <div>
                  <p className="font-bold text-ink">{page.form.directEmailsTitle}</p>
                  <p className="mt-1 text-sm leading-7 text-graphite">
                    {siteContent.ui.directEmailLabels.general}: {company.email}
                    <br />
                    {siteContent.ui.directEmailLabels.grants}: {company.grantEmail}
                    <br />
                    {siteContent.ui.directEmailLabels.training}: {company.trainingEmail}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-gilt" aria-hidden="true" />
                <div>
                  <p className="font-bold text-ink">{page.form.whatsappTitle}</p>
                  <p className="mt-1 text-sm leading-7 text-graphite">{company.whatsapp}</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </MotionSection>

      <MotionSection id="map" className="bg-porcelain-band py-16 sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={page.map.eyebrow}
              title={page.map.title}
              text={page.map.text}
            />
            <div className="mt-7 space-y-4 text-sm leading-7 text-graphite">
              <p className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gilt" aria-hidden="true" />
                <span>{company.address}</span>
              </p>
              <p>
                <strong className="text-ink">{page.map.businessHoursLabel}:</strong> {company.businessHours}
              </p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={company.whatsappUrl} external icon={MessageCircle}>
                {siteContent.ui.whatsappLabel}
              </ButtonLink>
              <ButtonLink href={`mailto:${company.email}`} variant="outline" icon={Mail}>
                {page.map.emailButtonLabel}
              </ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-ink/10 bg-white shadow-soft">
            <iframe
              title={page.map.mapTitle}
              src={company.mapEmbedUrl}
              className="h-[26rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 sm:py-20">
        <div className="container-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.social.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="premium-card flex items-center justify-between gap-4 rounded-md p-5 transition hover:-translate-y-1 hover:border-gilt/50"
                aria-label={item.label}
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-gilt" aria-hidden="true" />
                  <span className="font-bold text-ink">{item.label}</span>
                </span>
                <ExternalLink className="h-4 w-4 text-graphite" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </MotionSection>
    </>
  );
}
