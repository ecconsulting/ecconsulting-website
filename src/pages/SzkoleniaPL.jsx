import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock,
  CreditCard,
  FileText,
  Mail,
  Phone,
  Send,
  Sparkles,
  Users,
} from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import MotionSection from '../components/MotionSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import ContactBlock from '../components/ContactBlock.jsx';
import { company, siteContent } from '../data/site.js';

const trainingPaymentLinks = {
  'Tworzenie aplikacji projektowych dla NGO': 'https://buy.stripe.com/bJe7sN0KCcxU2b04J05J603',
  'Pomiary rezultatów i wskaźników w projekcie': 'https://buy.stripe.com/7sYfZj1OG41o8zofnE5J604',
  'Pisanie wniosków do urzędu pracy o dotację': 'https://buy.stripe.com/28E6oJ8d4btQbLA6R85J602',
  'Jak budować kosztorys projektu': 'https://buy.stripe.com/14AdRbfFwbtQdTI3EW5J601',
  'Konsultacja szkoleniowa': 'https://buy.stripe.com/6oUfZj0KC2Xk3f44J05J605',
};

const enquiryTypes = [
  'Zapis na kurs',
  'Zapytanie o dofinansowanie BUR',
  'Konsultacja szkoleniowa',
  'Szkolenie stacjonarne – wycena indywidualna',
  'Inne pytanie',
];

const stationaryQuoteLabel = 'Szkolenie stacjonarne – wycena indywidualna';
const emptyFormSelection = { enquiryType: '', selectedCourse: '', selectedDate: '' };

function getPaymentLink(title, fallback) {
  return trainingPaymentLinks[title] || fallback;
}

const paymentButtonVariants = {
  primary: 'border border-champagne bg-champagne text-ink shadow-gold hover:bg-[#e4c984]',
};

const paymentButtonSizes = {
  regular: 'min-h-12 px-5 py-3',
  compact: 'min-h-10 px-4 py-2',
};

function openPaymentLink(href) {
  if (!href) return;

  const opened = window.open(href, '_blank', 'noopener,noreferrer');

  if (!opened) {
    window.location.assign(href);
  }
}

function PaymentButton({
  href,
  children,
  icon: Icon,
  variant = 'primary',
  size = 'regular',
  className = '',
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-md text-center text-sm font-bold transition duration-300',
    paymentButtonSizes[size],
    paymentButtonVariants[variant],
    className,
  ].join(' ');

  return (
    <button type="button" onClick={() => openPaymentLink(href)} className={classes}>
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
}

function InfoPill({ children }) {
  return (
    <div className="rounded-md border border-ink/10 bg-white/80 px-4 py-3 text-sm font-semibold leading-6 text-charcoal shadow-soft">
      {children}
    </div>
  );
}

function CourseCard({ course, index, onBurEnquiry }) {
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
      {onBurEnquiry && (
        <button
          type="button"
          onClick={() => onBurEnquiry(course.title)}
          className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md border border-ink/25 px-4 py-2 text-center text-sm font-bold text-ink transition hover:bg-ink hover:text-white sm:w-auto"
        >
          Zapytaj o dofinansowanie BUR
        </button>
      )}
    </article>
  );
}

const polishWeekdays = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];

function dateSortValue(date) {
  const [day, month, year] = date.split('/').map(Number);
  return Date.UTC(year, month - 1, day);
}

function getPolishWeekday(date) {
  const value = dateSortValue(date);
  return Number.isNaN(value) ? '' : polishWeekdays[new Date(value).getUTCDay()];
}

function ScheduledCourseList({ courses, labels, onBurEnquiry }) {
  const [openIndex, setOpenIndex] = useState(-1);
  const detailItems = [
    'Format: online',
    'Czas trwania: 4 godziny',
    'Minimalna liczba uczestników: 6 osób',
    'Certyfikat ukończenia w cenie',
    'Materiały szkoleniowe w cenie',
  ];

  return (
    <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-md border border-ink/10 bg-white shadow-soft">
      {courses.map((course, index) => {
        const isOpen = openIndex === index;
        const contentId = `dostepny-kurs-${index}`;
        const paymentLink = getPaymentLink(course.title, course.paymentLink);
        const selectedDate = `${course.date} ${course.time}`;

        return (
          <article
            key={`${course.date}-${course.title}`}
            className={[
              'border-b border-ink/10 transition last:border-b-0',
              course.badge ? 'bg-merlot/[0.035]' : 'bg-white',
            ].join(' ')}
          >
            <div className="grid gap-4 px-4 py-4 sm:px-5 lg:grid-cols-[9rem_7rem_minmax(0,1fr)_7rem_13rem] lg:items-center">
              <div className="flex items-center gap-3 lg:block">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-ink text-sm font-bold text-champagne lg:hidden">
                  {index + 1}
                </span>
                <div>
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-ink">
                    <CalendarDays className="h-4 w-4 text-gilt" aria-hidden="true" />
                    {course.date}
                  </div>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-gilt">
                    {getPolishWeekday(course.date)}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-sm font-semibold text-graphite">
                <Clock className="h-4 w-4 text-gilt" aria-hidden="true" />
                {course.time}
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-semibold leading-snug text-ink">{course.title}</h3>
                {course.badge && (
                  <span className="mt-2 inline-flex rounded-md bg-merlot px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
                    {course.badge}
                  </span>
                )}
              </div>

              <p className="text-lg font-extrabold text-gilt">{course.price}</p>

              <div className="grid grid-cols-2 gap-2 sm:flex sm:justify-start lg:justify-end">
                <PaymentButton href={paymentLink} size="compact">
                  {labels.orderLabel}
                </PaymentButton>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-ink/20 px-4 py-2 text-sm font-bold text-ink transition hover:border-gilt/60 hover:text-gilt"
                >
                  Szczegóły
                  <ChevronDown
                    className={['h-4 w-4 transition-transform duration-300', isOpen ? 'rotate-180' : ''].join(' ')}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={contentId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="border-t border-ink/10 px-4 pb-5 pt-4 sm:px-5 lg:grid lg:grid-cols-[1fr_15rem] lg:gap-6">
                    <div>
                      <p className="text-sm leading-7 text-graphite">{course.description}</p>
                      <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                        {detailItems.map((item) => (
                          <InfoPill key={item}>{item}</InfoPill>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 grid gap-3 lg:mt-0 lg:self-end">
                      <PaymentButton href={paymentLink} icon={CreditCard} className="w-full">
                        {labels.orderLabel}
                      </PaymentButton>
                      <button
                        type="button"
                        onClick={() => onBurEnquiry(course.title, selectedDate)}
                        className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-ink/25 px-5 py-3 text-center text-sm font-bold text-ink transition hover:bg-ink hover:text-white"
                      >
                        {labels.burLabel}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}

function ShortCourseAccordion({ courses, labels, onBurEnquiry, onCourseEnquiry }) {
  const [openIndex, setOpenIndex] = useState(-1);
  const courseDetails = [
    'Cena: 399 PLN',
    'Format: online',
    'Czas trwania: 4 godziny',
    'Minimalna liczba uczestników: 6 osób',
  ];

  return (
    <div className="mx-auto mt-10 max-w-5xl space-y-3">
      {courses.map((course, index) => {
        const isOpen = openIndex === index;
        const contentId = `kurs-4h-${index}`;
        const paymentLink = trainingPaymentLinks[course.title];

        return (
          <article
            key={course.title}
            className="overflow-hidden rounded-md border border-ink/10 bg-white/90 shadow-soft transition hover:border-gilt/40"
          >
            <button
              type="button"
              className="flex w-full items-start gap-4 px-4 py-4 text-left sm:px-5"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-ink text-sm font-bold text-champagne">
                {index + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xl font-semibold leading-tight text-ink sm:text-2xl">{course.title}</span>
                <span className="mt-2 block overflow-hidden text-ellipsis whitespace-nowrap text-sm leading-6 text-graphite">
                  {course.description}
                </span>
              </span>
              <span className="ml-2 flex shrink-0 items-center gap-2 pt-1 text-sm font-bold text-gilt">
                <span className="hidden sm:inline">{isOpen ? 'Zwiń szczegóły' : 'Rozwiń szczegóły'}</span>
                <ChevronDown
                  className={['h-5 w-5 transition-transform duration-300', isOpen ? 'rotate-180' : ''].join(' ')}
                  aria-hidden="true"
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={contentId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="border-t border-ink/10 px-4 pb-5 pt-4 sm:px-5">
                    <p className="text-sm leading-7 text-graphite">{course.description}</p>
                    <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                      {courseDetails.map((detail) => (
                        <InfoPill key={detail}>{detail}</InfoPill>
                      ))}
                    </div>
                    <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_0.8fr]">
                      <ul className="space-y-3">
                        {course.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-sm leading-7 text-charcoal">
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gilt" aria-hidden="true" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col justify-end gap-3">
                        {paymentLink ? (
                          <PaymentButton href={paymentLink} icon={CreditCard} className="w-full">
                            {labels.orderLabel}
                          </PaymentButton>
                        ) : (
                          <button
                            type="button"
                            onClick={() => onCourseEnquiry(course.title)}
                            className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-champagne bg-champagne px-5 py-3 text-center text-sm font-bold text-ink shadow-gold transition hover:bg-[#e4c984]"
                          >
                            Zapytaj o termin
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => onBurEnquiry(course.title)}
                          className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-ink/25 px-5 py-3 text-center text-sm font-bold text-ink transition hover:bg-ink hover:text-white"
                        >
                          {labels.burLabel}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}

function TrainingServicePanel({ offer, icon: Icon, onEnquiry }) {
  const paymentLink = getPaymentLink(offer.title, offer.paymentLink);
  const enquiryType = offer.title === 'Konsultacja szkoleniowa' ? 'Konsultacja szkoleniowa' : stationaryQuoteLabel;
  const selectedCourse = offer.title === 'Szkolenia stacjonarne' ? stationaryQuoteLabel : offer.title;

  return (
    <article className="premium-card rounded-md p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-champagne/20 text-gilt">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="text-2xl font-semibold leading-tight text-ink">{offer.title}</h3>
            <p className="shrink-0 text-lg font-extrabold text-gilt">{offer.price}</p>
          </div>
          <p className="mt-3 text-sm leading-7 text-graphite">{offer.description}</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {offer.includes.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-6 text-charcoal">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gilt" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {paymentLink ? (
              <PaymentButton href={paymentLink} icon={CreditCard} className="w-full">
                {offer.buttonLabel}
              </PaymentButton>
            ) : (
              <button
                type="button"
                onClick={() => onEnquiry({ enquiryType, selectedCourse })}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-champagne bg-champagne px-4 py-2 text-center text-sm font-bold text-ink shadow-gold transition hover:bg-[#e4c984]"
              >
                {offer.buttonLabel}
              </button>
            )}
            <button
              type="button"
              onClick={() => onEnquiry({ enquiryType, selectedCourse })}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-ink/20 px-4 py-2 text-center text-sm font-bold text-ink transition hover:border-gilt/60 hover:text-gilt"
            >
              Dowiedz się więcej
            </button>
          </div>
        </div>
      </div>
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

function TrainingApplicationForm({ page, trainingOptions, trainingDateOptions, prefill }) {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [selection, setSelection] = useState(emptyFormSelection);
  const endpoint = siteContent.formspree.szkoleniaEndpoint;
  const form = page.applicationForm;

  useEffect(() => {
    setSelection({
      enquiryType: prefill.enquiryType || '',
      selectedCourse: prefill.selectedCourse || '',
      selectedDate: prefill.selectedDate || '',
    });
  }, [prefill]);

  const updateSelection = (field, value) => {
    setSelection((current) => ({ ...current, [field]: value }));
  };

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
      const formData = new FormData(event.currentTarget);
      const payload = new URLSearchParams();

      formData.forEach((value, key) => {
        payload.append(key, value);
      });

      const body = payload.toString();
      const sent = navigator.sendBeacon?.(
        endpoint,
        new Blob([body], { type: 'application/x-www-form-urlencoded' }),
      );

      if (!sent) {
        await fetch(endpoint, {
          method: 'POST',
          mode: 'no-cors',
          keepalive: true,
          body,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
      }

      event.currentTarget.reset();
      setSelection(emptyFormSelection);
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
      <input type="hidden" name="page" value="Szkolenia PL" />
      <input type="hidden" name="source" value="EC Consulting website" />
      <input type="hidden" name="recipient_email" value={company.trainingEmail} />
      <input type="hidden" name="routing_note" value={`Prosimy przekierować zgłoszenie na ${company.trainingEmail}`} />
      <input type="hidden" name="selectedCourse" value={selection.selectedCourse} />
      <input type="hidden" name="selectedDate" value={selection.selectedDate} />
      <input type="hidden" name="enquiryType" value={selection.enquiryType} />

      {(selection.enquiryType || selection.selectedCourse || selection.selectedDate) && (
        <div className="mb-5 rounded-md border border-gilt/25 bg-champagne/15 p-4 text-sm font-semibold leading-6 text-ink">
          <p>Wybrane zgłoszenie: {selection.enquiryType || 'do uzupełnienia'}</p>
          {selection.selectedCourse && <p>Dotyczy: {selection.selectedCourse}</p>}
          {selection.selectedDate && <p>Data: {selection.selectedDate}</p>}
        </div>
      )}

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
          <input name="telefon" autoComplete="tel" className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm" />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-ink">Rodzaj zgłoszenia</span>
          <select
            name="rodzaj_zgloszenia"
            required
            value={selection.enquiryType}
            onChange={(event) => updateSelection('enquiryType', event.target.value)}
            className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm"
          >
            <option value="">Wybierz rodzaj zgłoszenia</option>
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-bold text-ink">Data szkolenia</span>
          <select
            name="data_szkolenia"
            value={selection.selectedDate}
            onChange={(event) => updateSelection('selectedDate', event.target.value)}
            className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm"
          >
            <option value="">Nie dotyczy lub wybierz datę</option>
            {trainingDateOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-sm font-bold text-ink">{form.fields.selectedTraining}</span>
        <select
          name="wybrane_szkolenie"
          required
          value={selection.selectedCourse}
          onChange={(event) => updateSelection('selectedCourse', event.target.value)}
          className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm"
        >
          <option value="">Wybierz szkolenie lub usługę</option>
          {trainingOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </label>

      <div className="mt-4 grid gap-4">
        <label className="block">
          <span className="text-sm font-bold text-ink">{form.fields.supportNeeds}</span>
          <textarea name="szczegolne_potrzeby" rows="3" className="mt-2 w-full rounded-md border border-ink/10 bg-white px-4 py-3 text-sm" />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-ink">Pytania do prowadzącej</span>
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
  const [formPrefill, setFormPrefill] = useState(emptyFormSelection);
  const trainingOptions = useMemo(
    () => Array.from(new Set([
      'Kursy online 2-dniowe',
      ...page.twoDayCourses.items.map((course) => course.title),
      ...page.shortCourses.items.map((course) => course.title),
      page.consultation.title,
      stationaryQuoteLabel,
      'Inne pytanie',
    ])),
    [page],
  );
  const trainingDateOptions = useMemo(
    () => [...page.availableCourses.items]
      .sort((first, second) => dateSortValue(first.date) - dateSortValue(second.date))
      .map((course) => ({
        value: `${course.date} ${course.time}`,
        label: `${course.date} - ${course.time} - ${course.title}`,
      })),
    [page.availableCourses.items],
  );
  const scheduledCourses = useMemo(() => {
    const shortCourseDetails = new Map(page.shortCourses.items.map((course) => [course.title, course.description]));

    return [...page.availableCourses.items]
      .map((course) => ({
        ...course,
        description: shortCourseDetails.get(course.title) || '',
      }))
      .sort((first, second) => dateSortValue(first.date) - dateSortValue(second.date));
  }, [page.availableCourses.items, page.shortCourses.items]);

  const scrollToTrainingForm = (prefill) => {
    setFormPrefill({
      enquiryType: prefill.enquiryType || '',
      selectedCourse: prefill.selectedCourse || '',
      selectedDate: prefill.selectedDate || '',
    });

    window.requestAnimationFrame(() => {
      document.getElementById('formularz-szkolenia')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const handleBurEnquiry = (selectedCourse = '', selectedDate = '') => {
    scrollToTrainingForm({
      enquiryType: 'Zapytanie o dofinansowanie BUR',
      selectedCourse,
      selectedDate,
    });
  };

  const handleCourseEnquiry = (selectedCourse = '', selectedDate = '') => {
    scrollToTrainingForm({
      enquiryType: 'Zapis na kurs',
      selectedCourse,
      selectedDate,
    });
  };

  useEffect(() => {
    const handleBurLinkClick = (event) => {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest('a[href="#formularz-szkolenia"], a[href="/szkolenia-pl#formularz-szkolenia"]');
      if (!link || !link.textContent.includes('Zapytaj o dofinansowanie BUR')) return;

      event.preventDefault();
      scrollToTrainingForm({
        enquiryType: 'Zapytanie o dofinansowanie BUR',
        selectedCourse: '',
        selectedDate: '',
      });
    };

    document.addEventListener('click', handleBurLinkClick);
    return () => document.removeEventListener('click', handleBurLinkClick);
  }, []);

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

      <MotionSection className="bg-white py-10 sm:py-12">
        <div className="container-shell grid gap-4 lg:grid-cols-2">
          <TrainingServicePanel offer={page.consultation} icon={Sparkles} onEnquiry={scrollToTrainingForm} />
          <TrainingServicePanel offer={page.stationary} icon={Users} onEnquiry={scrollToTrainingForm} />
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
              <button
                type="button"
                onClick={() => handleBurEnquiry('Kursy online 2-dniowe')}
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md border border-champagne bg-champagne px-5 py-3 text-center text-sm font-bold text-ink shadow-gold transition hover:bg-[#e4c984] sm:w-auto"
              >
                {page.twoDayCourses.ctaLabel}
              </button>
            </div>
            <div className="grid gap-5">
              {page.twoDayCourses.items.map((course, index) => (
                <CourseCard key={course.title} course={course} index={index} onBurEnquiry={handleBurEnquiry} />
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
          <ShortCourseAccordion
            courses={page.shortCourses.items}
            labels={page.availableCourses}
            onBurEnquiry={handleBurEnquiry}
            onCourseEnquiry={handleCourseEnquiry}
          />
        </div>
      </MotionSection>

      <MotionSection id="dostepne-kursy" className="bg-white py-16 sm:py-20">
        <div className="container-shell">
          <SectionHeader title={page.availableCourses.title} align="center" />
          <ScheduledCourseList courses={scheduledCourses} labels={page.availableCourses} onBurEnquiry={handleBurEnquiry} />
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
          <TrainingApplicationForm
            page={page}
            trainingOptions={trainingOptions}
            trainingDateOptions={trainingDateOptions}
            prefill={formPrefill}
          />
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
          <div className="grid gap-5">
            <p className="eyebrow">Szkolenia PL</p>
            <ContactBlock language="pl-training" variant="dark" />
          </div>
          <div className="flex flex-col gap-3">
            <ButtonLink href={`mailto:${company.trainingEmail}`} variant="primary" icon={Mail} className="w-full">
              {page.contact.emailButton}
            </ButtonLink>
            <ButtonLink href={company.polandPhoneHref} variant="ghost" icon={Phone} className="w-full">
              {page.contact.phoneButton}
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
