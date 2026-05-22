import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, MessageCircle, X } from 'lucide-react';
import { assets, company, navItems, siteContent } from '../data/site.js';
import ButtonLink from './ButtonLink.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isPolish = pathname === '/szkolenia-pl';

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 text-white shadow-[0_10px_35px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      <nav className="container-shell flex min-h-20 items-center justify-between gap-4" aria-label={siteContent.ui.navigationAria}>
        <Link to="/" onClick={close} className="flex items-center gap-3">
          <img
            src={assets.logo}
            alt={assets.logoAlt}
            className="h-12 w-12 rounded-md border border-champagne/40 object-cover shadow-gold"
          />
          <span className="min-w-0">
            <span className="block font-display text-2xl font-semibold leading-none text-white">{company.brandName}</span>
            <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-champagne">
              {company.suffix}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                [
                  'rounded-md px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white',
                  isActive ? 'bg-white/10 text-champagne' : '',
                ].join(' ')
              }
            >
              {isPolish ? item.polishLabel : item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="text-sm font-semibold text-white/75 hover:text-champagne" href={`tel:${company.phone.replace(/\s/g, '')}`}>
            {company.phone}
          </a>
          <ButtonLink href={company.whatsappUrl} external variant="primary" icon={MessageCircle}>
            {siteContent.ui.whatsappLabel}
          </ButtonLink>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
          type="button"
          aria-label={open ? siteContent.ui.closeMenu : siteContent.ui.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink lg:hidden">
          <div className="container-shell flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={close}
                className={({ isActive }) =>
                  [
                    'rounded-md px-4 py-3 text-sm font-semibold text-white/80',
                    isActive ? 'bg-white/10 text-champagne' : 'hover:bg-white/10',
                  ].join(' ')
                }
              >
                {isPolish ? item.polishLabel : item.label}
              </NavLink>
            ))}
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ButtonLink to="/contact" variant="light" className="w-full" onClick={close}>
                {isPolish ? siteContent.ui.contactPolishLabel : siteContent.ui.contactLabel}
              </ButtonLink>
              <ButtonLink href={company.whatsappUrl} external variant="primary" icon={MessageCircle} className="w-full">
                {siteContent.ui.whatsappLabel}
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
