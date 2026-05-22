export default function SectionHeader({ eyebrow, title, text, align = 'left', light = false }) {
  const centered = align === 'center';

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={[
          'mt-3 text-4xl font-semibold leading-tight sm:text-5xl',
          light ? 'text-white' : 'text-ink',
        ].join(' ')}
      >
        {title}
      </h2>
      {text && (
        <p className={['mt-5 text-base leading-8 sm:text-lg', light ? 'text-white/70' : 'text-graphite'].join(' ')}>
          {text}
        </p>
      )}
    </div>
  );
}
