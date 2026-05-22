import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import MotionSection from '../components/MotionSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import IconGrid from '../components/IconGrid.jsx';
import PricingCards from '../components/PricingCards.jsx';
import CTASection from '../components/CTASection.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import { company, polishTopics, pricing } from '../data/site.js';

export default function SzkoleniaPL() {
  return (
    <>
      <PageHero
        eyebrow="Szkolenia PL"
        title="Profesjonalne szkolenia biznesowe i dotacyjne w języku polskim."
        text="Praktyczne wsparcie dla osób, firm i organizacji, które chcą rozwijać działalność, lepiej rozumieć finanse, przygotowywać dotacje i budować pewność w działaniu."
        primaryLabel="Skontaktuj się z nami"
        primaryTo="/contact"
        secondaryLabel="Zobacz tematy"
        secondaryTo="/szkolenia-pl#tematy"
      >
        <div className="dark-card rounded-md p-6">
          <p className="eyebrow">Rozwój zawodowy</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Szkolenia online i stacjonarne dla osób, które chcą działać profesjonalnie.</h2>
          <div className="mt-7 grid gap-3">
            {['Jasny język', 'Praktyczne materiały', 'Wsparcie po szkoleniu'].map((item) => (
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
            eyebrow="Tematy"
            title="Szkolenia dopasowane do realnych potrzeb."
            text="Zakres szkolenia można dopasować do poziomu uczestników, branży, organizacji lub konkretnego celu biznesowego."
            align="center"
          />
          <div className="mt-10">
            <IconGrid items={polishTopics} />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Styl pracy"
              title="Elegancko, konkretnie i z szacunkiem dla doświadczenia uczestników."
              text="Szkolenia łączą wiedzę finansową, biznesową i miękkie kompetencje, aby uczestnicy wychodzili z jasnym planem działania."
            />
            <ButtonLink to="/contact" icon={ArrowRight} className="mt-7">
              Zapytaj o termin
            </ButtonLink>
          </div>
          <div className="grid gap-4">
            {[
              'Dotacje: od pomysłu do wniosku i budżetu projektu.',
              'Biznes: planowanie, organizacja, oferta i komunikacja.',
              'Księgowość: podstawy, dokumenty, terminy i odpowiedzialność.',
              'Umiejętności miękkie: komunikacja, odporność, przywództwo i praca z klientem.',
            ].map((item) => (
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
            eyebrow="Cennik"
            title="Pakiety szkoleniowe."
            text="Poniższe ceny są punktami startowymi. Ostateczny zakres zależy od liczby uczestników, formy szkolenia i oczekiwanych materiałów."
            align="center"
          />
          <div className="mt-10">
            <PricingCards plans={pricing.polish} buttonLabel="Płatność Stripe placeholder" polish />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-quiet-luxury py-16 text-white sm:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow">Kontakt po polsku</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">Porozmawiajmy o szkoleniu dopasowanym do Twoich potrzeb.</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">
              Napisz na {company.trainingEmail} albo użyj formularza kontaktowego, aby opisać temat, grupę i preferowaną formę szkolenia.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <ButtonLink to="/contact" variant="primary" className="w-full">
              Skontaktuj się z nami
            </ButtonLink>
            <ButtonLink href={company.whatsappUrl} external variant="ghost" icon={MessageCircle} className="w-full">
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      </MotionSection>

      <CTASection
        eyebrow="Szkolenia PL"
        title="Skontaktuj się z nami"
        text="Profesjonalne szkolenia po polsku z zakresu dotacji, biznesu, księgowości, rozwoju działalności i umiejętności miękkich."
        primaryLabel="Wyślij zapytanie"
        primaryTo="/contact"
        secondaryLabel="WhatsApp"
        secondaryHref={company.whatsappUrl}
      />
    </>
  );
}
