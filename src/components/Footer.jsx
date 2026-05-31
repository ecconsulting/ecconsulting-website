import { Link } from 'react-router-dom';
import { assets, company, siteContent } from '../data/site.js';
import ContactBlock from './ContactBlock.jsx';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Third Sector Support', to: '/third-sector-support' },
  { label: 'Business Consultancy', to: '/business-consultancy' },
  { label: 'Training (PL)', to: '/szkolenia-pl' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', href: '#privacy-policy' },
  { label: 'Terms & Conditions', href: '#terms-and-conditions' },
  { label: 'Cookie Policy', href: '#cookie-policy' },
];

export default function Footer() {
  const footer = siteContent.footer;
  const footerAddress = `${company.name} | Clyde Offices, 48 West George Street, 2nd Floor, Glasgow, G2 1BP, United Kingdom`;

  return (
    <footer className="bg-ink text-white">
      <div className="gold-rule" />
      <div className="container-shell grid gap-12 py-16 lg:grid-cols-[1fr_0.72fr_minmax(20rem,0.9fr)] lg:items-start">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src={assets.logo}
              alt={assets.logoAlt}
              className="h-14 w-14 rounded-md border border-champagne/40 object-cover shadow-gold"
            />
            <span>
              <span className="block font-display text-3xl font-semibold">{company.brandName}</span>
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-champagne">{company.suffix}</span>
            </span>
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-7 text-white/72">
            {footer.description}
          </p>

          <div className="mt-7 flex items-center gap-3">
            {siteContent.social.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white/78 transition hover:border-champagne/50 hover:bg-white/10 hover:text-champagne"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              );
            })}
          </div>

          <div className="mt-7 border-t border-white/10 pt-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">Company Number</p>
            <p className="mt-2 text-sm font-bold text-champagne">{company.number}</p>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-champagne">
            {footer.navigationTitle}
          </h2>
          <div className="mt-5 grid gap-3">
            {footerLinks.map((item) => (
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-sm font-semibold text-white/70 transition hover:text-champagne"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-semibold text-white/70 transition hover:text-champagne"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        </nav>

        <div className="lg:flex lg:justify-end">
          <ContactBlock compact singleColumn className="w-full max-w-md" />
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-shell flex flex-col gap-3 text-xs leading-6 text-white/58 lg:flex-row lg:items-center lg:justify-between">
          <p>{footerAddress}</p>
          <p>
            Copyright {new Date().getFullYear()} {company.name}. {footer.copyrightSuffix}
          </p>
        </div>
      </div>
    </footer>
  );
}
