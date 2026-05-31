import { Link, useLocation } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import { AlertCircle, CheckCircle2, MapPin, Send } from 'lucide-react';
import { assets, company, navItems, siteContent } from '../data/site.js';
import ContactBlock from './ContactBlock.jsx';

export default function Footer() {
  const { pathname } = useLocation();
  const isPolish = pathname === '/szkolenia-pl';
  const footer = siteContent.footer;
  const formText = isPolish ? siteContent.forms.footer.pl : siteContent.forms.footer.en;
  const [footerFormState, handleFooterSubmit] = useForm(siteContent.formspree.formId);

  return (
    <footer className="bg-ink text-white">
      <div className="gold-rule" />
      <div className="container-shell grid gap-10 py-14 lg:grid-cols-[1.1fr_0.8fr_1fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <img src={assets.logo} alt={assets.logoAlt} className="h-14 w-14 rounded-md border border-champagne/40 object-cover" />
            <span>
              <span className="block font-display text-3xl font-semibold">{company.brandName}</span>
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-champagne">{company.suffix}</span>
            </span>
          </Link>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
            {isPolish ? footer.polishDescription : footer.description}
          </p>
          <ContactBlock language={isPolish ? 'pl' : 'en'} variant="dark" className="mt-6" />
          <div className="mt-4 text-sm text-white/70">
            <p className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
              <span>{company.address}</span>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-champagne">
            {isPolish ? footer.navigationPolishTitle : footer.navigationTitle}
          </h2>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="text-sm font-semibold text-white/70 transition hover:text-champagne">
                {isPolish ? item.polishLabel : item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="dark-card rounded-md p-6">
          <h2 className="text-2xl font-semibold text-white">
            {formText.title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-white/70">
            {formText.description}
          </p>
          {footerFormState.succeeded ? (
            <div className="mt-5 rounded-md border border-champagne/30 bg-white/10 p-4" role="status">
              <CheckCircle2 className="h-5 w-5 text-champagne" aria-hidden="true" />
              <p className="mt-3 text-sm font-semibold leading-6 text-white">{formText.successText}</p>
            </div>
          ) : (
            <form
              className="mt-5 space-y-3"
              action={siteContent.formspree.endpoint}
              method="POST"
              onSubmit={handleFooterSubmit}
            >
              <input type="hidden" name="_subject" value={`${siteContent.ui.websiteEnquirySubject} - footer`} />
              <input type="hidden" name="source_form" value="Footer quick enquiry" />
              <input
                type="hidden"
                name="recipient_email"
                value={isPolish ? company.trainingEmail : company.email}
              />
              <label className="sr-only" htmlFor="footer-email">
                {formText.email}
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                required
                className="min-h-12 w-full rounded-md border border-white/10 bg-white/10 px-4 text-sm text-white placeholder:text-white/50"
                placeholder={formText.email}
                autoComplete="email"
              />
              <ValidationError className="block text-xs font-semibold text-champagne" field="email" errors={footerFormState.errors} />
              <label className="sr-only" htmlFor="footer-subject">
                {formText.subject}
              </label>
              <input
                id="footer-subject"
                name="subject"
                className="min-h-12 w-full rounded-md border border-white/10 bg-white/10 px-4 text-sm text-white placeholder:text-white/50"
                placeholder={formText.subject}
              />
              <ValidationError className="block text-xs font-semibold text-champagne" field="subject" errors={footerFormState.errors} />
              <label className="sr-only" htmlFor="footer-message">
                {formText.message}
              </label>
              <textarea
                id="footer-message"
                name="message"
                required
                rows="3"
                className="w-full rounded-md border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50"
                placeholder={formText.message}
              />
              <ValidationError className="block text-xs font-semibold text-champagne" field="message" errors={footerFormState.errors} />
              {footerFormState.errors?.length > 0 && (
                <p className="flex items-start gap-2 rounded-md border border-champagne/25 bg-white/10 p-3 text-xs font-semibold leading-5 text-white">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
                  <span>{formText.errorText}</span>
                </p>
              )}
              <button
                type="submit"
                disabled={footerFormState.submitting}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-champagne bg-champagne px-5 py-3 text-sm font-bold text-ink shadow-gold transition hover:bg-[#e4c984] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                {footerFormState.submitting ? formText.submitting : formText.submit}
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container-shell flex flex-col gap-3 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {new Date().getFullYear()} {company.name}.{' '}
            {isPolish ? footer.copyrightPolishSuffix : footer.copyrightSuffix}
          </p>
          <p>{isPolish ? footer.assetPolishNote : footer.assetNote}</p>
        </div>
      </div>
    </footer>
  );
}
