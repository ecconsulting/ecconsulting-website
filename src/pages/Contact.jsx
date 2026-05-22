import { ExternalLink, Facebook, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';
import MotionSection from '../components/MotionSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ContactForm from '../components/ContactForm.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import { company, contactCards } from '../data/site.js';

export default function Contact() {
  return (
    <>
      <section className="bg-quiet-luxury py-16 text-white sm:py-20">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.98] sm:text-6xl">
              Start a confidential conversation with EC Consulting.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Send an enquiry, call the office or use WhatsApp for grant writing, consultancy, training and general business support.
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
              eyebrow="Enquiry form"
              title="Tell us what kind of support you need."
              text="This form opens a prepared email draft so your message can be sent from your own email account."
            />
            <div className="mt-7 grid gap-4 rounded-md border border-ink/10 bg-linen/50 p-5">
              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-gilt" aria-hidden="true" />
                <div>
                  <p className="font-bold text-ink">Direct emails</p>
                  <p className="mt-1 text-sm leading-7 text-graphite">
                    General: {company.email}
                    <br />
                    Grant writing: {company.grantEmail}
                    <br />
                    Polish training: {company.trainingEmail}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-gilt" aria-hidden="true" />
                <div>
                  <p className="font-bold text-ink">WhatsApp</p>
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
              eyebrow="Glasgow office"
              title="Clyde Offices, West George Street."
              text="Appointments and consultations are arranged in advance. Please contact EC Consulting before visiting."
            />
            <div className="mt-7 space-y-4 text-sm leading-7 text-graphite">
              <p className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gilt" aria-hidden="true" />
                <span>{company.address}</span>
              </p>
              <p>
                <strong className="text-ink">Business hours:</strong> Monday to Friday, 9:00-17:00. Evening appointments may be available by arrangement.
              </p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={company.whatsappUrl} external icon={MessageCircle}>
                WhatsApp
              </ButtonLink>
              <ButtonLink href={`mailto:${company.email}`} variant="outline" icon={Mail}>
                Email EC Consulting
              </ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-ink/10 bg-white shadow-soft">
            <iframe
              title="Google Maps placeholder for EC Consulting Ltd"
              src="https://www.google.com/maps?q=Clyde%20Offices%2048%20West%20George%20Street%20Glasgow%20G2%201BP&output=embed"
              className="h-[26rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 sm:py-20">
        <div className="container-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: 'LinkedIn placeholder', icon: Linkedin },
            { label: 'Facebook placeholder', icon: Facebook },
            { label: 'Business profile placeholder', icon: ExternalLink },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href="#"
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
