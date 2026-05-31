import { useId } from 'react';
import { Building2, Globe2, Mail, Phone } from 'lucide-react';
import { company, siteContent } from '../data/site.js';

function ContactItem({ icon: Icon, label, value, href, dark = false }) {
  const content = (
    <>
      <Icon className={['mt-1 h-4 w-4 shrink-0', dark ? 'text-champagne' : 'text-gilt'].join(' ')} aria-hidden="true" />
      <span>
        <span className={['block text-xs font-bold uppercase tracking-[0.14em]', dark ? 'text-white/55' : 'text-graphite'].join(' ')}>
          {label}
        </span>
        <span className={['mt-1 block break-words text-sm font-bold leading-6', dark ? 'text-white' : 'text-ink'].join(' ')}>
          {value}
        </span>
      </span>
    </>
  );

  const className = [
    'flex gap-3 rounded-md border p-4 transition',
    dark
      ? 'border-white/10 bg-white/[0.04] hover:border-champagne/40'
      : 'border-ink/10 bg-white/75 hover:border-gilt/45 hover:shadow-soft',
  ].join(' ');

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

export default function ContactBlock({ language = 'en', variant = 'light', className = '' }) {
  const titleId = useId();
  const dark = variant === 'dark';
  const isPolishTraining = language === 'pl-training';
  const labels = isPolishTraining
    ? siteContent.contactBlock.polishTraining
    : language === 'pl'
      ? siteContent.contactBlock.polish
      : siteContent.contactBlock.english;

  const shellClass = [
    dark
      ? 'rounded-md border border-white/10 bg-white/[0.055] p-5 text-white shadow-gold backdrop-blur sm:p-6'
      : 'premium-card rounded-md p-5 sm:p-6',
    className,
  ].join(' ');

  if (isPolishTraining) {
    return (
      <section className={shellClass} aria-labelledby={titleId}>
        <h2 id={titleId} className={['text-3xl font-semibold', dark ? 'text-white' : 'text-ink'].join(' ')}>
          {labels.title}
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <ContactItem icon={Phone} label={labels.polandLabel} value={company.polandPhone} href={company.polandPhoneHref} dark={dark} />
          <ContactItem icon={Mail} label={labels.emailLabel} value={company.trainingEmail} href={`mailto:${company.trainingEmail}`} dark={dark} />
        </div>
        <p className={['mt-5 text-sm font-semibold leading-7', dark ? 'text-white/72' : 'text-graphite'].join(' ')}>
          {labels.note}
        </p>
      </section>
    );
  }

  return (
    <section className={shellClass} aria-labelledby={titleId}>
      <h2 id={titleId} className={['text-3xl font-semibold', dark ? 'text-white' : 'text-ink'].join(' ')}>
        {labels.title}
      </h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <ContactItem icon={Building2} label={labels.companyNumberLabel} value={company.number} dark={dark} />
        <ContactItem icon={Phone} label={labels.ukLabel} value={company.ukPhone} href={company.ukPhoneHref} dark={dark} />
        <ContactItem icon={Phone} label={labels.polandLabel} value={company.polandPhone} href={company.polandPhoneHref} dark={dark} />
        <ContactItem icon={Mail} label={labels.generalLabel} value={company.email} href={`mailto:${company.email}`} dark={dark} />
        <ContactItem icon={Mail} label={labels.grantsLabel} value={company.grantEmail} href={`mailto:${company.grantEmail}`} dark={dark} />
        <ContactItem icon={Mail} label={labels.trainingLabel} value={company.trainingEmail} href={`mailto:${company.trainingEmail}`} dark={dark} />
        <ContactItem icon={Globe2} label={labels.websiteLabel} value={company.website} href={company.websiteUrl} dark={dark} />
      </div>
    </section>
  );
}
