import { Link, useLocation } from 'react-router-dom';
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { assets, company, navItems } from '../data/site.js';

export default function Footer() {
  const { pathname } = useLocation();
  const isPolish = pathname === '/szkolenia-pl';

  return (
    <footer className="bg-ink text-white">
      <div className="gold-rule" />
      <div className="container-shell grid gap-10 py-14 lg:grid-cols-[1.1fr_0.8fr_1fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <img src={assets.logo} alt="EC Consulting Ltd logo" className="h-14 w-14 rounded-md border border-champagne/40 object-cover" />
            <span>
              <span className="block font-display text-3xl font-semibold">EC Consulting</span>
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-champagne">Ltd</span>
            </span>
          </Link>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
            {isPolish
              ? 'Profesjonalne wsparcie finansowe, dotacyjne, biznesowe i szkoleniowe dla organizacji oraz firm.'
              : 'Professional financial, grant and business consultancy for charities, businesses and purpose-driven organisations.'}
          </p>
          <div className="mt-6 space-y-3 text-sm text-white/70">
            <p className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
              <span>{company.address}</span>
            </p>
            <p className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
              <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-champagne">
                {company.phone}
              </a>
            </p>
            <p className="flex gap-3">
              <MessageCircle className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
              <a href={company.whatsappUrl} className="hover:text-champagne" target="_blank" rel="noreferrer">
                {company.whatsapp}
              </a>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-champagne">
            {isPolish ? 'Nawigacja' : 'Navigation'}
          </h2>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="text-sm font-semibold text-white/70 transition hover:text-champagne">
                {isPolish ? item.polishLabel : item.label}
              </Link>
            ))}
          </div>
          <div className="mt-8 space-y-2 text-sm text-white/70">
            <p>{isPolish ? 'Numer firmy' : 'Company number'}: {company.number}</p>
            <p>
              <a href={`mailto:${company.email}`} className="hover:text-champagne">
                {company.email}
              </a>
            </p>
            <p>
              <a href={`mailto:${company.grantEmail}`} className="hover:text-champagne">
                {company.grantEmail}
              </a>
            </p>
            <p>
              <a href={`mailto:${company.trainingEmail}`} className="hover:text-champagne">
                {company.trainingEmail}
              </a>
            </p>
          </div>
        </div>

        <div className="dark-card rounded-md p-6">
          <h2 className="text-2xl font-semibold text-white">
            {isPolish ? 'Szybki kontakt' : 'Quick enquiry'}
          </h2>
          <p className="mt-2 text-sm leading-6 text-white/70">
            {isPolish
              ? 'Napisz krótką wiadomość. Formularz przygotuje e-mail do wysłania.'
              : 'Send a short message. The form opens an email draft ready to send.'}
          </p>
          <form
            className="mt-5 space-y-3"
            onSubmit={(event) => {
              event.preventDefault();
              const form = new FormData(event.currentTarget);
              const subject = encodeURIComponent(form.get('subject') || 'Website enquiry');
              const message = encodeURIComponent(form.get('message') || '');
              window.location.href = `mailto:${company.email}?subject=${subject}&body=${message}`;
            }}
          >
            <label className="sr-only" htmlFor="footer-subject">
              {isPolish ? 'Temat' : 'Subject'}
            </label>
            <input
              id="footer-subject"
              name="subject"
              className="min-h-12 w-full rounded-md border border-white/10 bg-white/10 px-4 text-sm text-white placeholder:text-white/50"
              placeholder={isPolish ? 'Temat' : 'Subject'}
            />
            <label className="sr-only" htmlFor="footer-message">
              {isPolish ? 'Wiadomosc' : 'Message'}
            </label>
            <textarea
              id="footer-message"
              name="message"
              rows="3"
              className="w-full rounded-md border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50"
              placeholder={isPolish ? 'Wiadomosc' : 'Message'}
            />
            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-champagne bg-champagne px-5 py-3 text-sm font-bold text-ink shadow-gold transition hover:bg-[#e4c984]"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              {isPolish ? 'Wyslij e-mail' : 'Send enquiry'}
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container-shell flex flex-col gap-3 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {new Date().getFullYear()} EC Consulting Ltd.{' '}
            {isPolish ? 'Wszelkie prawa zastrzeżone.' : 'All rights reserved.'}
          </p>
          <p>{isPolish ? 'Logo w nagłówku, stopce i faviconie.' : 'Logo used in navigation, footer and favicon placeholder.'}</p>
        </div>
      </div>
    </footer>
  );
}
