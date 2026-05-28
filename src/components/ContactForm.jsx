import { useForm, ValidationError } from '@formspree/react';
import { AlertCircle, CheckCircle2, Send } from 'lucide-react';
import { company, siteContent } from '../data/site.js';

export default function ContactForm({ polish = false }) {
  const labels = polish ? siteContent.forms.contact.pl : siteContent.forms.contact.en;
  const [state, handleSubmit] = useForm(siteContent.formspree.formId);

  if (state.succeeded) {
    return (
      <div className="premium-card rounded-md p-6 sm:p-8" role="status">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-champagne/20 text-gilt">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </div>
        <h2 className="mt-5 text-3xl font-semibold text-ink">{labels.successTitle}</h2>
        <p className="mt-3 text-sm leading-7 text-graphite">{labels.successText}</p>
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
      <input type="hidden" name="_subject" value={`${siteContent.ui.websiteEnquirySubject} - ${company.name}`} />
      <input type="hidden" name="source_form" value="Main contact form" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-ink">{labels.name}</span>
          <input
            name="name"
            required
            className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm"
            autoComplete="name"
          />
          <ValidationError className="mt-2 block text-xs font-semibold text-merlot" field="name" errors={state.errors} />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-ink">{labels.email}</span>
          <input
            name="email"
            type="email"
            required
            className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm"
            autoComplete="email"
          />
          <ValidationError className="mt-2 block text-xs font-semibold text-merlot" field="email" errors={state.errors} />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-ink">{labels.phone}</span>
          <input
            name="phone"
            className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm"
            autoComplete="tel"
          />
          <ValidationError className="mt-2 block text-xs font-semibold text-merlot" field="phone" errors={state.errors} />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-ink">{labels.service}</span>
          <select name="service" className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm">
            {labels.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <ValidationError className="mt-2 block text-xs font-semibold text-merlot" field="service" errors={state.errors} />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="text-sm font-bold text-ink">{labels.message}</span>
        <textarea
          name="message"
          required
          rows="6"
          placeholder={labels.placeholder}
          className="mt-2 w-full rounded-md border border-ink/10 bg-white px-4 py-3 text-sm"
        />
        <ValidationError className="mt-2 block text-xs font-semibold text-merlot" field="message" errors={state.errors} />
      </label>
      {state.errors?.length > 0 && (
        <p className="mt-4 flex items-start gap-2 rounded-md border border-merlot/20 bg-merlot/5 p-3 text-sm font-semibold text-merlot">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{labels.errorText}</span>
        </p>
      )}
      <button
        type="submit"
        disabled={state.submitting}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-champagne bg-champagne px-5 py-3 text-sm font-bold text-ink shadow-gold transition hover:bg-[#e4c984] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        <span>{state.submitting ? labels.submitting : labels.submit}</span>
      </button>
    </form>
  );
}
