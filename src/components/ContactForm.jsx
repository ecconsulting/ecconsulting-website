import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import { AlertCircle, CheckCircle2, Send } from 'lucide-react';
import { company, siteContent } from '../data/site.js';

function getRoutingEmail(service) {
  const value = service.toLowerCase();

  if (value.includes('grant') || value.includes('dotacje')) {
    return company.grantEmail;
  }

  if (value.includes('szkolenia') || value.includes('training')) {
    return company.trainingEmail;
  }

  return company.email;
}

function resolveServiceOption(options, search) {
  const requested = new URLSearchParams(search).get('service')?.toLowerCase();

  if (!requested) return options[0];

  if (requested.includes('grant') || requested.includes('funding') || requested.includes('dotacje')) {
    return options.find((option) => option.toLowerCase().includes('grant') || option.toLowerCase().includes('dotacje')) || options[0];
  }

  if (requested.includes('business') || requested.includes('consultancy') || requested.includes('biznes')) {
    return options.find((option) => option.toLowerCase().includes('business') || option.toLowerCase().includes('biznes')) || options[0];
  }

  if (requested.includes('training') || requested.includes('szkolenia')) {
    return options.find((option) => option.toLowerCase().includes('szkolenia')) || options[0];
  }

  return options[0];
}

export default function ContactForm({ polish = false }) {
  const { search } = useLocation();
  const labels = polish ? siteContent.forms.contact.pl : siteContent.forms.contact.en;
  const [state, handleSubmit] = useForm(siteContent.formspree.formId);
  const [service, setService] = useState(() => resolveServiceOption(labels.options, search));
  const routingEmail = getRoutingEmail(service);

  useEffect(() => {
    setService(resolveServiceOption(labels.options, search));
  }, [labels.options, search]);

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
      <input type="hidden" name="_subject" value={`${siteContent.ui.websiteEnquirySubject} - ${service}`} />
      <input type="hidden" name="source_form" value="Main contact form" />
      <input type="hidden" name="recipient_email" value={routingEmail} />
      <input type="hidden" name="routing_note" value={`Please route this enquiry to ${routingEmail}`} />
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
          <select
            name="service"
            value={service}
            onChange={(event) => setService(event.target.value)}
            className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm"
          >
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
