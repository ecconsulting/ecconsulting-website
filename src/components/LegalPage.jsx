import { Link } from 'react-router-dom';

function LegalSection({ section }) {
  return (
    <section className="rounded-md border border-ink/10 bg-white/85 p-5 shadow-soft sm:p-7">
      <h2 className="text-2xl font-semibold leading-tight text-ink sm:text-3xl">{section.title}</h2>

      <div className="mt-4 space-y-4 text-sm leading-7 text-graphite sm:text-base">
        {section.paragraphs?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        {section.linkParagraph && (
          <p>
            {section.linkParagraph.before}
            <Link
              to={section.linkParagraph.to}
              className="font-bold text-ink underline decoration-champagne underline-offset-4 transition hover:text-gilt"
            >
              {section.linkParagraph.label}
            </Link>
            {section.linkParagraph.after}
          </p>
        )}

        {section.bullets && (
          <ul className="grid gap-2 pl-5">
            {section.bullets.map((item) => (
              <li key={item} className="list-disc">
                {item}
              </li>
            ))}
          </ul>
        )}

        {section.closing && <p>{section.closing}</p>}
      </div>
    </section>
  );
}

export default function LegalPage({ policy }) {
  return (
    <div className="bg-porcelain">
      <section className="bg-quiet-luxury pb-16 pt-32 text-white sm:pb-20 sm:pt-36">
        <div className="container-shell">
          <p className="eyebrow text-champagne">{policy.companyName}</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            {policy.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
            Last updated: {policy.lastUpdated}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
          <aside className="rounded-md border border-ink/10 bg-white p-6 shadow-soft lg:sticky lg:top-28">
            <h2 className="text-2xl font-semibold text-ink">{policy.companyName}</h2>

            {'address' in policy && (
              <address className="mt-4 not-italic text-sm leading-7 text-graphite">
                {policy.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            )}

            {'contact' in policy && (
              <div className="mt-5 space-y-2 text-sm leading-7 text-graphite">
                <p>
                  <span className="font-bold text-ink">Email: </span>
                  <a href={`mailto:${policy.contact.email}`} className="font-semibold underline decoration-champagne underline-offset-4">
                    {policy.contact.email}
                  </a>
                </p>
                <p>
                  <span className="font-bold text-ink">Website: </span>
                  <a href={`https://${policy.contact.website}`} className="font-semibold underline decoration-champagne underline-offset-4">
                    {policy.contact.website}
                  </a>
                </p>
              </div>
            )}

            <div className="mt-6 h-px bg-ink/10" />
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-gilt">
              Information page
            </p>
          </aside>

          <div className="space-y-6">
            <div className="rounded-md border border-ink/10 bg-white/85 p-5 shadow-soft sm:p-7">
              <div className="space-y-4 text-sm leading-7 text-graphite sm:text-base">
                {policy.introduction.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            {policy.sections.map((section) => (
              <LegalSection key={section.title} section={section} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
