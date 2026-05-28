import { useMemo, useState } from 'react';
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  CreditCard,
  FileText,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Users,
} from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import MotionSection from '../components/MotionSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import { company, siteContent } from '../data/site.js';

function InfoPill({ children }) {
  return (
    <div className="rounded-md border border-ink/10 bg-white/80 px-4 py-3 text-sm font-semibold leading-6 text-charcoal shadow-soft">
      {children}
    </div>
  );
}

function CourseCard({ course, index }) {
  return (
    <article className="premium-card rounded-md p-5">
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-ink font-bold text-champagne">
          {index + 1}
        </span>
        <div>
          <h3 className="text-2xl font-semibold leading-tight text-ink">{course.title}</h3>
          {course.description && <p className="mt-3 text-sm leading-7 text-graphite">{course.description}</p>}
        </div>
      </div>
      <ul className="mt-5 space-y-3">
        {course.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm leading-7 text-charcoal">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gilt" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ScheduledCourseCard({ course, labels }) {
  return (
    <article className="premium-card flex h-full flex-col rounded-md p-5">
      <div className="flex flex-wrap items-center gap-2">
        {course.badge && (
          <span className="rounded-md bg-merlot px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
            {course.badge}
          </span>
        )}
        <span className="rounded-md bg-champagne/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-gilt">
          Kurs online
        </span>
      </div>
      <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-graphite">
        <span className="inline-flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-gilt" aria-hidden="true" />
          {course.date}
        </span>
        <span className="inline-flex items-center gap-2">
          <Clock className="h-4 w-4 text-gilt" aria-hidden="true" />
          {course.time}
        </span>
      </div>
      <h3 className="mt-5 flex-1 text-2xl font-semibold leading-tight text-ink">{course.title}</h3>
      <p className="mt-4 text-2xl font-extrabold text-gilt">{course.price}</p>
      <div className="mt-6 grid gap-3">
        <ButtonLink href={course.paymentLink} external icon={CreditCard} className="w-full">
          {labels.orderLabel}
        </ButtonLink>
        <a
          href="#formularz-szkolenia"
          className="inline-flex min-h-12 items-center justify-center rounded-md border border-ink/25 px-5 py-3 text-center text-sm font-bold text-ink transition hover:bg-ink hover:text-white"
        >
          {labels.burLabel}
        </a>
      </div>
    </article>
  );
}

function OfferCard({ offer, icon: Icon, variant = 'light' }) {
  const dark = variant === 'dark';

  return (
    <article className={dark ? 'dark-card rounded-md p-6 text-white' : 'premium-card rounded-md p-6'}>
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-champagne/20 text-gilt">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className={dark ? 'mt-5 text-3xl font-semibold text-white' : 'mt-5 text-3xl font-semibold text-ink'}>
        {offer.title}
      </h3>
      <p className="mt-3 text-2xl font-extrabold text-champagne">{offer.price}</p>
      <p className={dark ? 'mt-4 text-sm leading-7 text-white/72' : 'mt-4 text-sm leading-7 text-graphite'}>
        {offer.description}
      </p>
      <ul className="mt-6 space-y-3">
        {offer.includes.map((item) => (
          <li key={item} className={dark ? 'flex gap-3 text-sm text-white/82' : 'flex gap-3 text-sm text-charcoal'}>
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {offer.paymentLink ? (
        <ButtonLink href={offer.paymentLink} external icon={CreditCard} className="mt-7 w-full">
          {offer.buttonLabel}
        </ButtonLink>
      ) : (
        <a
          href="#formularz-szkolenia"
          className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-md border border-champagne bg-champagne px-5 py-3 text-sm font-bold text-ink shadow-gold transition hover:bg-[#e4c984]"
        >
          {offer.buttonLabel}
        </a>
      )}
    </article>
  );
}

function LegalSection({ section }) {
  return (
    <article className="premium-card rounded-md p-6">
      <h3 className="text-3xl font-semibold text-ink">{section.title}</h3>
      <ul className="mt-5 space-y-3">
        {section.items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-charcoal">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gilt" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function TrainingApplicationForm({ page, trainingOptions }) {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const endpoint = siteContent.formspree.szkoleniaEndpoint;
  const form = page.applicationForm;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');

    if (!endpoint || endpoint.includes('PASTE_FORMSPREE')) {
      setStatus('error');
      setMessage(form.errorMessage);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(event.currentTarget),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Formspree submission failed');
      }

      event.currentTarget.reset();
      setStatus('success');
      setMessage(form.successMessage);
    } catch {
      setStatus('error');
      setMessage(form.errorMessage);
    }
  };

  return (
    <form
      action={endpoint}
      method="POST"
      onSubmit={handleSubmit}
      className="premium-card rounded-md p-5 sm:p-7"
    >
      <input type="hidden" name="_subject" value="Zgłoszenie na szkolenie EC Consulting" />
      <input type="hidden" name="formularz" value="Szkolenia PL" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-ink">{form.fields.firstName}</span>
          <input name="imie" required className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm" />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-ink">{form.fields.lastName}</span>
          <input name="nazwisko" required className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm" />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-ink">{form.fields.email}</span>
          <input name="email" type="email" required autoComplete="email" className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm" />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-ink">{form.fields.phone}</span>
          <input name="telefon" required autoComplete="tel" className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm" />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-sm font-bold text-ink">{form.fields.selectedTraining}</span>
        <select name="wybrane_szkolenie" required className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm">
          <option value="">Wybierz szkolenie</option>
          {trainingOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      <div className="mt-4 grid gap-4">
        <label className="block">
          <span className="text-sm font-bold text-ink">{form.fields.supportNeeds}</span>
          <textarea name="szczegolne_potrzeby" rows="3" className="mt-2 w-full rounded-md border border-ink/10 bg-white px-4 py-3 text-sm" />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-ink">{form.fields.questions}</span>
          <textarea name="pytania_na_szkolenie" rows="3" className="mt-2 w-full rounded-md border border-ink/10 bg-white px-4 py-3 text-sm" />
        </label>
      </div>

      <div className="mt-6 rounded-md border border-ink/10 bg-linen/50 p-4">
        <p className="text-sm font-bold leading-6 text-ink">{form.referralNote}</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <label className="block">
            <span className="text-xs font-bold text-graphite">{form.fields.referral1Name}</span>
            <input name="polecenie_1_imie_nazwisko" className="mt-2 min-h-11 w-full rounded-md border border-ink/10 bg-white px-3 text-sm" />
          </label>
          <label className="block">
            <span className="text-xs font-bold text-graphite">{form.fields.referral1Email}</span>
            <input name="polecenie_1_email" type="email" className="mt-2 min-h-11 w-full rounded-md border border-ink/10 bg-white px-3 text-sm" />
          </label>
          <label className="block">
            <span className="text-xs font-bold text-graphite">{form.fields.referral1Phone}</span>
            <input name="polecenie_1_telefon" className="mt-2 min-h-11 w-full rounded-md border border-ink/10 bg-white px-3 text-sm" />
          </label>
          <label className="block">
            <span className="text-xs font-bold text-graphite">{form.fields.referral2Name}</span>
            <input name="polecenie_2_imie_nazwisko" className="mt-2 min-h-11 w-full rounded-md border border-ink/10 bg-white px-3 text-sm" />
          </label>
          <label className="block">
            <span className="text-xs font-bold text-graphite">{form.fields.referral2Email}</span>
            <input name="polecenie_2_email" type="email" className="mt-2 min-h-11 w-full rounded-md border border-ink/10 bg-white px-3 text-sm" />
          </label>
          <label className="block">
            <span className="text-xs font-bold text-graphite">{form.fields.referral2Phone}</span>
            <input name="polecenie_2_telefon" className="mt-2 min-h-11 w-full rounded-md border border-ink/10 bg-white px-3 text-sm" />
          </label>
          <label className="block">
            <span className="text-xs font-bold text-graphite">{form.fields.referral3Name}</span>
            <input name="polecenie_3_imie_nazwisko" className="mt-2 min-h-11 w-full rounded-md border border-ink/10 bg-white px-3 text-sm" />
          </label>
          <label className="block">
            <span className="text-xs font-bold text-graphite">{form.fields.referral3Email}</span>
            <input name="polecenie_3_email" type="email" className="mt-2 min-h-11 w-full rounded-md border border-ink/10 bg-white px-3 text-sm" />
          </label>
          <label className="block">
            <span className="text-xs font-bold text-graphite">{form.fields.referral3Phone}</span>
            <input name="polecenie_3_telefon" className="mt-2 min-h-11 w-full rounded-md border border-ink/10 bg-white px-3 text-sm" />
          </label>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <label className="flex gap-3 text-sm font-semibold leading-6 text-charcoal">
          <input name="akceptacja_regulaminu" required type="checkbox" className="mt-1 h-4 w-4 rounded border-ink/20" />
          <span>{form.termsLabel}</span>
        </label>
        <label className="flex gap-3 text-sm font-semibold leading-6 text-charcoal">
          <input name="zgoda_rodo" required type="checkbox" className="mt-1 h-4 w-4 rounded border-ink/20" />
          <span>{form.gdprLabel}</span>
        </label>
      </div>

      {message && (
        <p
          className={[
            'mt-5 rounded-md p-4 text-sm font-bold leading-6',
            status === 'success'
              ? 'border border-gilt/30 bg-champagne/15 text-ink'
              : 'border border-merlot/20 bg-merlot/5 text-merlot',
          ].join(' ')}
          role="status"
        >
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-champagne bg-champagne px-5 py-3 text-sm font-bold text-ink shadow-gold transition hover:bg-[#e4c984] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        <span>{status === 'submitting' ? form.sendingLabel : form.buttonLabel}</span>
      </button>
    </form>
  );
}

export default function SzkoleniaPL() {
  const page = siteContent.pages.training;
  const trainingOptions = useMemo(
    () => [
      ...page.availableCourses.items.map((course) => `${course.date} - ${course.title}`),
      ...page.twoDayCourses.items.map((course) => course.title),
      ...page.shortCourses.items.map((course) => course.title),
      page.consultation.title,
      page.stationary.title,
    ],
    [page],
  );

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

      <MotionSection className="bg-porcelain-band py-14 sm:py-16">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl rounded-md border border-ink/10 bg-white/82 p-6 text-center shadow-soft sm:p-8">
            <p className="text-lg leading-8 text-charcoal">{page.intro.text}</p>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="kursy-2-dniowe" className="bg-white py-16 sm:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <SectionHeader title={page.twoDayCourses.title} text={page.twoDayCourses.info[4]} />
              <div className="mt-6 grid gap-3">
                {page.twoDayCourses.info.map((item) => (
                  <InfoPill key={item}>{item}</InfoPill>
                ))}
              </div>
              <a
                href="#formularz-szkolenia"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md border border-champagne bg-champagne px-5 py-3 text-center text-sm font-bold text-ink shadow-gold transition hover:bg-[#e4c984] sm:w-auto"
              >
                {page.twoDayCourses.ctaLabel}
              </a>
            </div>
            <div className="grid gap-5">
              {page.twoDayCourses.items.map((course, index) => (
                <CourseCard key={course.title} course={course} index={index} />
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="kursy-4-godzinne" className="bg-porcelain py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeader title={page.shortCourses.title} text={page.shortCourses.info[4]} align="center" />
          <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.shortCourses.info.map((item) => (
              <InfoPill key={item}>{item}</InfoPill>
            ))}
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {page.shortCourses.items.map((course, index) => (
              <CourseCard key={course.title} course={course} index={index} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="dostepne-kursy" className="bg-white py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeader title={page.availableCourses.title} align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {page.availableCourses.items.map((course) => (
              <ScheduledCourseCard key={`${course.date}-${course.title}`} course={course} labels={page.availableCourses} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-quiet-luxury py-16 text-white sm:py-20">
        <div className="container-shell grid gap-5 lg:grid-cols-2">
          <OfferCard offer={page.consultation} icon={Sparkles} variant="dark" />
          <OfferCard offer={page.stationary} icon={Users} variant="dark" />
        </div>
      </MotionSection>

      <MotionSection id="formularz-szkolenia" className="bg-porcelain-band py-16 sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader title={page.applicationForm.title} text={page.applicationForm.intro} />
            <div className="mt-7 rounded-md border border-ink/10 bg-white/80 p-5 shadow-soft">
              <FileText className="h-7 w-7 text-gilt" aria-hidden="true" />
              <p className="mt-4 text-sm font-semibold leading-7 text-charcoal">
                {page.applicationForm.referralNote}
              </p>
            </div>
          </div>
          <TrainingApplicationForm page={page} trainingOptions={trainingOptions} />
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 sm:py-20">
        <div className="container-shell grid gap-5 lg:grid-cols-3">
          <LegalSection section={page.terms} />
          <LegalSection section={page.refunds} />
          <LegalSection section={page.gdpr} />
        </div>
      </MotionSection>

      <MotionSection className="bg-quiet-luxury py-16 text-white sm:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Szkolenia PL</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">{page.contact.title}</h2>
            <div className="mt-7 grid gap-4 text-sm text-white/78">
              <p className="flex gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
                <span>{page.contact.emailLabel}: {company.trainingEmail}</span>
              </p>
              <p className="flex gap-3">
                <MessageCircle className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
                <span>{page.contact.whatsappLabel}: {company.whatsapp}</span>
              </p>
              <p className="flex gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
                <span>{page.contact.generalLabel}: {company.email}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <ButtonLink href={`mailto:${company.trainingEmail}`} variant="primary" icon={Mail} className="w-full">
              {page.contact.emailButton}
            </ButtonLink>
            <ButtonLink href={company.whatsappUrl} external variant="ghost" icon={MessageCircle} className="w-full">
              {page.contact.whatsappButton}
            </ButtonLink>
            <a
              href="#formularz-szkolenia"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-white/20 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              {page.contact.burButton}
            </a>
          </div>
        </div>
      </MotionSection>
    </>
  );
}
