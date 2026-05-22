import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-champagne text-ink shadow-gold hover:bg-[#e4c984] border border-champagne',
  dark:
    'bg-ink text-white shadow-soft hover:bg-charcoal border border-ink',
  outline:
    'bg-transparent text-ink hover:bg-ink hover:text-white border border-ink/25',
  light:
    'bg-white text-ink hover:bg-linen border border-white',
  ghost:
    'bg-transparent text-white hover:bg-white/10 border border-white/20',
};

export default function ButtonLink({
  to,
  href,
  children,
  icon: Icon,
  variant = 'primary',
  className = '',
  external = false,
  onClick,
}) {
  const classes = [
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition duration-300',
    variants[variant],
    className,
  ].join(' ');

  const content = (
    <>
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      <span>{children}</span>
    </>
  );

  if (href || external) {
    return (
      <a
        className={classes}
        href={href || to}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} to={to} onClick={onClick}>
      {content}
    </Link>
  );
}
