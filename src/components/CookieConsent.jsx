import { useEffect, useState } from 'react';

const STORAGE_KEY = 'ecConsultingCookieConsent';

const defaultPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

function loadAnalyticsScripts() {
  // Add Google Analytics, Google Tag Manager or similar analytics scripts here.
  // This function is called only after the visitor has accepted analytics cookies.
}

function loadMarketingScripts() {
  // Add Meta Pixel, LinkedIn Insight Tag or similar marketing scripts here.
  // This function is called only after the visitor has accepted marketing cookies.
}

function applyCookiePreferences(preferences) {
  if (preferences.analytics) {
    loadAnalyticsScripts();
  }

  if (preferences.marketing) {
    loadMarketingScripts();
  }
}

function readStoredPreferences() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function savePreferences(preferences) {
  const payload = {
    ...preferences,
    necessary: true,
    savedAt: new Date().toISOString(),
    version: 1,
  };

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Some privacy-focused browsers can block storage; consent choices still apply for this page view.
  }

  applyCookiePreferences(payload);
}

function Toggle({ id, checked, onChange, label, children }) {
  return (
    <div className="rounded-md border border-ink/10 bg-white px-4 py-4 shadow-[0_12px_30px_rgba(21,18,15,0.06)] sm:px-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 id={`${id}-label`} className="text-base font-extrabold text-ink">{label}</h3>
          <p className="mt-2 text-sm leading-6 text-graphite">{children}</p>
        </div>
        <label htmlFor={id} className="relative inline-flex shrink-0 cursor-pointer items-center">
          <input
            id={id}
            type="checkbox"
            role="switch"
            aria-labelledby={`${id}-label`}
            checked={checked}
            onChange={(event) => onChange(event.target.checked)}
            className="peer sr-only"
          />
          <span className="h-7 w-12 rounded-full border border-ink/15 bg-linen transition peer-checked:border-[#d97917] peer-checked:bg-[#d97917]" />
          <span className="absolute left-1 h-5 w-5 rounded-full bg-white shadow-sm transition peer-checked:translate-x-5" />
        </label>
      </div>
    </div>
  );
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState(defaultPreferences);

  useEffect(() => {
    const storedPreferences = readStoredPreferences();

    if (storedPreferences) {
      applyCookiePreferences(storedPreferences);
      return;
    }

    setIsVisible(true);
  }, []);

  const updatePreference = (name, value) => {
    setPreferences((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const closeWithPreferences = (nextPreferences) => {
    savePreferences(nextPreferences);
    setPreferences(nextPreferences);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end bg-ink/35 px-3 py-4 backdrop-blur-sm sm:items-center sm:px-6"
      role="presentation"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-consent-title"
        className="mx-auto max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-md border border-ink/10 bg-[#f7f7f5] text-ink shadow-[0_28px_90px_rgba(21,18,15,0.28)]"
      >
        <div className="border-b border-ink/10 bg-white px-5 py-6 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d97917]">EC Consulting Ltd</p>
          <h2 id="cookie-consent-title" className="mt-3 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Cookies: the choice is yours
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-graphite sm:text-base">
            <p>
              We use cookies to make our website work properly and to help us improve your experience. Some cookies
              are necessary for the website to function and are always on. With your permission, we may also use
              analytics and marketing cookies to understand how visitors use our website and to improve our services.
            </p>
            <p>
              You can choose to accept all cookies, use necessary cookies only, or manage your preferences below.
            </p>
            <p>
              For detailed information about how we use cookies and similar technologies, please visit our{' '}
              <a href="/#cookie-policy" className="font-bold text-ink underline decoration-[#d97917] underline-offset-4">
                cookies information page
              </a>
              .
            </p>
          </div>
          <button
            type="button"
            onClick={() => closeWithPreferences({ necessary: true, analytics: true, marketing: true })}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md border border-[#d97917] bg-[#d97917] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#c86d11] sm:w-auto"
          >
            Accept all cookies
          </button>
        </div>

        <div className="grid gap-4 px-5 py-5 sm:px-8">
          <div className="rounded-md border border-ink/10 bg-white px-4 py-4 shadow-[0_12px_30px_rgba(21,18,15,0.06)] sm:px-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-extrabold text-ink">Necessary Cookies</h3>
                <p className="mt-2 text-sm leading-6 text-graphite">
                  These cookies are required for the website to operate. They cannot be switched off through this
                  banner.
                </p>
              </div>
              <span className="rounded-full border border-ink/10 bg-linen px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-charcoal">
                Always on
              </span>
            </div>
          </div>

          <Toggle
            id="analytics-cookies"
            label="Analytics Cookies"
            checked={preferences.analytics}
            onChange={(value) => updatePreference('analytics', value)}
          >
            These cookies help us understand how visitors use our website so we can improve content, navigation and
            user experience.
          </Toggle>

          <Toggle
            id="marketing-cookies"
            label="Marketing Cookies"
            checked={preferences.marketing}
            onChange={(value) => updatePreference('marketing', value)}
          >
            These cookies may be used to personalise content, measure campaign performance and support relevant
            communications.
          </Toggle>
        </div>

        <div className="grid gap-3 border-t border-ink/10 bg-white px-5 py-5 sm:grid-cols-2 sm:px-8">
          <button
            type="button"
            onClick={() => closeWithPreferences(defaultPreferences)}
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-ink/20 bg-white px-5 py-3 text-sm font-extrabold text-ink transition hover:border-[#d97917] hover:text-[#d97917]"
          >
            Necessary cookies only
          </button>
          <button
            type="button"
            onClick={() => closeWithPreferences(preferences)}
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-ink/20 bg-white px-5 py-3 text-sm font-extrabold text-ink transition hover:border-[#d97917] hover:text-[#d97917]"
          >
            Save my cookie choices and close
          </button>
        </div>
      </section>
    </div>
  );
}
