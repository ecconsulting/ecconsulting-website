import { Send } from 'lucide-react';
import { company } from '../data/site.js';

export default function ContactForm({ polish = false }) {
  const labels = polish
    ? {
        name: 'Imię i nazwisko',
        email: 'Adres e-mail',
        phone: 'Telefon',
        service: 'Temat',
        message: 'Wiadomość',
        submit: 'Wyślij zapytanie',
        placeholder: 'Napisz, w czym możemy pomóc.',
      }
    : {
        name: 'Full name',
        email: 'Email address',
        phone: 'Phone',
        service: 'Service interest',
        message: 'Message',
        submit: 'Send enquiry',
        placeholder: 'Tell us what support you need.',
      };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lines = [
      `${labels.name}: ${form.get('name')}`,
      `${labels.email}: ${form.get('email')}`,
      `${labels.phone}: ${form.get('phone')}`,
      `${labels.service}: ${form.get('service')}`,
      '',
      `${labels.message}:`,
      form.get('message'),
    ];
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent('Website enquiry')}&body=${encodeURIComponent(
      lines.join('\n'),
    )}`;
  };

  return (
    <form className="premium-card rounded-md p-5 sm:p-7" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-ink">{labels.name}</span>
          <input
            name="name"
            required
            className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm"
            autoComplete="name"
          />
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
        </label>
        <label className="block">
          <span className="text-sm font-bold text-ink">{labels.phone}</span>
          <input
            name="phone"
            className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm"
            autoComplete="tel"
          />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-ink">{labels.service}</span>
          <select name="service" className="mt-2 min-h-12 w-full rounded-md border border-ink/10 bg-white px-4 text-sm">
            <option>Grant writing</option>
            <option>Business consultancy</option>
            <option>Szkolenia PL</option>
            <option>General enquiry</option>
          </select>
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
      </label>
      <button
        type="submit"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-champagne bg-champagne px-5 py-3 text-sm font-bold text-ink shadow-gold transition hover:bg-[#e4c984] sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        <span>{labels.submit}</span>
      </button>
    </form>
  );
}
