import { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  CreditCard,
  Phone,
  Send,
  ShieldCheck,
} from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import MotionSection from '../components/MotionSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import CTASection from '../components/CTASection.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import { assets, company, siteContent } from '../data/site.js';

const emptyPrefill = { reason: '', supportNeeded: '' };

function isPlaceholderLink(link) {
  return !link || link.includes('REPLACE_ME');
}

function ServiceCard({ item, onEnquire }) {
  const Icon = item.icon;

  return (
    <article className="premium-card rounded-md p-5 transition hover:-translate-y-1 hover:border-gilt/50">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-champagne/20 text-gilt">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-ink">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-graphite">{item.text}</p>
      <button
        type="button"
        onClick={() => onEnquire(item.title)}
        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gilt transition hover:text-ink"
      >
        Enquire about this
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </article>
  );
}

function MonthlyPackage({ plan, onEnquire }) {
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
      <h3 className={['text-3xl font-semibold', plan.featured ? 'text-white' : 'text-ink'].join(' ')}>
        {plan.title}
      </h3>
      <p className={['mt-3 text-2xl font-extrabold', plan.featured ? 'text-champagne' : 'text-gilt'].join(' ')}>
        {plan.price}
      </p>
      <p className={['mt-4 text-sm leading-7', plan.featured ? 'text-white/72' : 'text-graphite'].join(' ')}>
        {plan.text}
      </p>
      <ul className="mt-6 flex-1 space-y-3">
        {plan.includes.map((item) => (
          <li key={item} className={['flex gap-3 text-sm leading-6', plan.featured ? 'text-white/80' : 'text-charcoal'].join(' ')}>
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => onEnquire(plan.title)}
        className={[
          'mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition',
          plan.featured
            ? 'border border-champagne bg-champagne text-ink shadow-gold hover:bg-[#e4c984]'
            : 'border border-ink/25 text-ink hover:bg-ink hover:text-white',
        ].join(' ')}
      >
        {plan.buttonLabel}
      </button>
    </article>
  );
}

function ConsultationCard({ item, onEnquire }) {
  const isPlaceholder = isPlaceholderLink(item.paymentLink);

  return (
    <article
      className={[
        'rounded-md border p-6 shadow-soft',
        item.featured ? 'border-champagne bg-ink text-white shadow-gold' : 'border-ink/10 bg-white',
      ].join(' ')}
    >
      <p className={['text-sm font-bold uppercase tracking-[0.14em]', item.featured ? 'text-champagne' : 'text-gilt'].join(' ')}>
        {item.duration}
      </p>
      <h3 className={['mt-3 text-3xl font-semibold', item.featured ? 'text-white' : 'text-ink'].join(' ')}>
        {item.title}
      </h3>
      <p className={['mt-3 text-2xl font-extrabold', item.featured ? 'text-champagne' : 'text-gilt'].join(' ')}>
        {item.price}
      </p>
      <p className={['mt-4 text-sm leading-7', item.featured ? 'text-white/72' : 'text-graphite'].join(' ')}>
        {item.text}
      </p>
      <ul className="mt-5 space-y-3">
        {item.includes.map((include) => (
          <li key={include} className={['flex gap-3 text-sm leading-6', item.featured ? 'text-white/80' : 'text-charcoal'].join(' ')}>
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
            <span>{include}</span>
          </li>
        ))}
      </ul>
      {isPlaceholder ? (
        <button
          type="button"
          onClick={() => onEnquire(item.title)}
          className={[
            'mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition',
            item.featured
              ? 'border border-champagne bg-champagne text-ink shadow-gold hover:bg-[#e4c984]'
              : 'border border-ink/25 text-ink hover:bg-ink hover:text-white',
          ].join(' ')}
        >
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
          {item.buttonLabel}
        </button>
      ) : (
        <ButtonLink href={item.paymentLink} external icon={CreditCard} className="mt-6 w-full">
          {item.buttonLabel}
        </ButtonLink>
      )}
    </article>
  );
}

function BusinessEnquiryForm({ page, prefill }) {
  const [state, handleSubmit] = useForm(siteContent.formspree.formId);
  const form = page.enquiryForm;
  const [selection, setSelection] = useState(emptyPrefill);

  useEffect(() => {
    setSelection({
      reason: prefill.reason || '',
      supportNeeded: prefill.supportNeeded || '',
    });
  }, [prefill]);

  const updateSelection = (field, value) => {
    setSelection((current) => ({ ...current, [field]: value }));
  };

  if (state.succeeded) {
    return (
      <div className="premium-card rounded-md p-6 sm:p-8" role="status">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-champagne/20 text-gilt">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="mt-5 text-3xl font-semibold text-ink">{form.successMessage}</h3>
        <p className="mt-3 text-sm leading-7 text-graphite">EC Consulting will reply as soon as possible.</p>
      </div>
    );
  }

  return (
    <form
      className="premium-card rounded-md p-5 sm:p-7"
      action={siteContent.formspree.endpoint}
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="_subject" value="Business support enquiry - EC Consulting Ltd" />
      <input type="hidden" name="source_form" value="Business Support enquiry form" />
      <input type="hidden" name="recipient_email" value={company.email} />
      <input type="hidden" name="routing_note" value={`Please route this enquiry to ${company.email}`} />

      <div className="mb-5">
        <p className="eyebrow">{page.consultation.eyebrow}</p>
        <h3 className="mt-3 text-3xl font-semibold text-ink">{form.title}</h3>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-ink">{form.fields.name}</span>
          <input name="name" required autoComplete="name" className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm" />
          <ValidationError className="mt-2 block text-xs font-semibold text-merlot" field="name" errors={state.errors} />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-ink">{form.fields.email}</span>
          <input name="email" required type="email" autoComplete="email" className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm" />
          <ValidationError className="mt-2 block text-xs font-semibold text-merlot" field="email" errors={state.errors} />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-ink">{form.fields.phone}</span>
          <input name="phone" autoComplete="tel" className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm" />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-ink">{form.fields.businessName}</span>
          <input name="business_name" className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm" />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-ink">{form.fields.businessType}</span>
          <select name="business_type" required className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm">
            <option value="">Select business type</option>
            {form.businessTypes.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-bold text-ink">{form.fields.tradingStage}</span>
          <select name="trading_stage" required className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm">
            <option value="">Select stage</option>
            {form.tradingStages.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-sm font-bold text-ink">{form.fields.reason}</span>
        <select
          name="reason_for_contacting"
          required
          value={selection.reason}
          onChange={(event) => updateSelection('reason', event.target.value)}
          className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm"
        >
          <option value="">Select reason</option>
          {form.reasons.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      <label className="mt-4 block">
        <span className="text-sm font-bold text-ink">{form.fields.supportNeeded}</span>
        <textarea
          name="support_needed"
          required
          rows="6"
          value={selection.supportNeeded}
          onChange={(event) => updateSelection('supportNeeded', event.target.value)}
          placeholder="Explain what has happened, what you need help with, any deadlines and whether you already trade."
          className="mt-2 w-full rounded-md border border-ink/10 bg-white px-4 py-3 text-sm"
        />
      </label>

      {state.errors?.length > 0 && (
        <p className="mt-4 flex items-start gap-2 rounded-md border border-merlot/20 bg-merlot/5 p-3 text-sm font-semibold text-merlot">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{form.errorMessage}</span>
        </p>
      )}

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-champagne bg-champagne px-5 py-3 text-sm font-bold text-ink shadow-gold transition hover:bg-[#e4c984] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {state.submitting ? form.submittingLabel : form.submitLabel}
      </button>
    </form>
  );
}

export default function BusinessSupport() {
  const page = siteContent.pages.business;
  const [formPrefill, setFormPrefill] = useState(emptyPrefill);

  const scrollToEnquiry = (supportNeeded = '', reason = '') => {
    setFormPrefill({
      reason,
      supportNeeded,
    });

    window.requestAnimationFrame(() => {
      document.getElementById('business-enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

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
        <div className="dark-card overflow-hidden rounded-md">
          <img
            src={assets.portraitBusinessSupport}
            alt={assets.portraitBusinessSupportAlt}
            className="h-[28rem] w-full bg-charcoal object-contain object-center"
          />
          <div className="p-6">
            <p className="eyebrow">{page.heroPanel.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">{page.heroPanel.title}</h2>
            <p className="mt-4 text-sm leading-7 text-white/72">{page.heroPanel.text}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {page.heroPanel.badges.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.06] p-3">
                  <ShieldCheck className="h-4 w-4 text-champagne" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageHero>

      <MotionSection id="services" className="bg-porcelain py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow={page.services.eyebrow}
            title={page.services.title}
            text={page.services.text}
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {page.services.items.map((item) => (
              <ServiceCard key={item.title} item={item} onEnquire={(title) => scrollToEnquiry(`I would like to enquire about: ${title}.`, '')} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeader eyebrow={page.entities.eyebrow} title={page.entities.title} text={page.entities.text} />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.entities.items.map((item) => (
              <div key={item} className="flex gap-3 rounded-md border border-ink/10 bg-linen/55 p-4">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gilt" aria-hidden="true" />
                <p className="text-sm font-bold leading-6 text-charcoal">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-quiet-luxury py-16 text-white sm:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow={page.monthlySupport.eyebrow}
            title={page.monthlySupport.title}
            text={page.monthlySupport.text}
            align="center"
            light
          />
          <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.monthlySupport.highlights.map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-white/[0.06] p-4 text-sm font-bold text-white/78">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {page.monthlySupport.packages.map((plan) => (
              <MonthlyPackage
                key={plan.title}
                plan={plan}
                onEnquire={(title) => scrollToEnquiry(`I would like to enquire about: ${title}.`, 'Monthly bookkeeping support')}
              />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-porcelain-band py-16 sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeader eyebrow={page.healthcheck.eyebrow} title={page.healthcheck.title} text={page.healthcheck.text} />
            <button
              type="button"
              onClick={() => scrollToEnquiry('I would like a business welfare and healthcheck review.', 'Business healthcheck')}
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-champagne bg-champagne px-5 py-3 text-sm font-bold text-ink shadow-gold transition hover:bg-[#e4c984]"
            >
              Request a healthcheck
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <div className="grid gap-4">
            {page.healthcheck.checks.map((item) => (
              <div key={item} className="premium-card flex gap-4 rounded-md p-5">
                <BarChart3 className="mt-1 h-5 w-5 shrink-0 text-gilt" aria-hidden="true" />
                <p className="text-sm font-semibold leading-7 text-charcoal">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="consultation" className="bg-white py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow={page.pricing.eyebrow}
            title={page.pricing.title}
            text={page.pricing.text}
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-2">
            {page.pricing.consultations.map((item) => (
              <ConsultationCard
                key={item.title}
                item={item}
                onEnquire={(title) => scrollToEnquiry(`I would like to enquire about: ${title}.`, 'Other')}
              />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-quiet-luxury py-16 text-white sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader eyebrow={page.why.eyebrow} title={page.why.title} text={page.why.text} light />
          </div>
          <div className="grid gap-4">
            {page.why.bullets.map((item) => (
              <div key={item} className="dark-card flex gap-4 rounded-md p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-champagne" aria-hidden="true" />
                <p className="text-sm font-semibold leading-7 text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="business-enquiry" className="bg-porcelain-band py-16 sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeader eyebrow={page.consultation.eyebrow} title={page.consultation.title} text={page.consultation.text} />
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <a href={company.ukPhoneHref} className="premium-card rounded-md p-5 transition hover:-translate-y-1 hover:border-gilt/50">
                <Phone className="h-6 w-6 text-gilt" aria-hidden="true" />
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-graphite">{page.consultation.callLabel}</p>
                <p className="mt-1 text-lg font-bold text-ink">{company.ukPhone}</p>
              </a>
              <a href={company.polandPhoneHref} className="premium-card rounded-md p-5 transition hover:-translate-y-1 hover:border-gilt/50">
                <Phone className="h-6 w-6 text-gilt" aria-hidden="true" />
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-graphite">{page.consultation.polandCallLabel}</p>
                <p className="mt-1 text-lg font-bold text-ink">{company.polandPhone}</p>
              </a>
            </div>
          </div>
          <BusinessEnquiryForm page={page} prefill={formPrefill} />
        </div>
      </MotionSection>

      <CTASection
        eyebrow={page.cta.eyebrow}
        title={page.cta.title}
        text={page.cta.text}
        primaryLabel={page.cta.primaryLabel}
        primaryTo="/business-support#business-enquiry"
        secondaryHref={company.ukPhoneHref}
      />
    </>
  );
}
