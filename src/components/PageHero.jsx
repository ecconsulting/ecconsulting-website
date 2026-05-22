import { motion } from 'framer-motion';
import ButtonLink from './ButtonLink.jsx';

export default function PageHero({ eyebrow, title, text, primaryLabel, primaryTo, secondaryLabel, secondaryTo, children }) {
  return (
    <section className="bg-quiet-luxury py-16 text-white sm:py-20">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-5 text-5xl font-semibold leading-[0.98] sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">{text}</p>
          {(primaryLabel || secondaryLabel) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryLabel && (
                <ButtonLink to={primaryTo} variant="primary">
                  {primaryLabel}
                </ButtonLink>
              )}
              {secondaryLabel && (
                <ButtonLink to={secondaryTo} variant="ghost">
                  {secondaryLabel}
                </ButtonLink>
              )}
            </div>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
