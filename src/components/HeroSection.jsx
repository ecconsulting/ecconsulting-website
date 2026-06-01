import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { assets, siteContent } from '../data/site.js';
import ButtonLink from './ButtonLink.jsx';

export default function HeroSection() {
  const { hero } = siteContent.home;

  return (
    <section className="relative overflow-hidden bg-quiet-luxury text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/80 to-transparent" />
      <div className="container-shell grid min-h-[calc(100vh-5rem)] gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to={hero.primaryCta.to} icon={ArrowRight}>
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink to={hero.secondaryCta.to} variant="ghost" icon={ArrowRight}>
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {hero.stats.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4 }}
                  className="dark-card rounded-md p-4"
                >
                  <Icon className="h-5 w-5 text-champagne" aria-hidden="true" />
                  <p className="mt-3 text-sm font-bold text-white">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-xl"
        >
          <div className="absolute -inset-4 rounded-md border border-champagne/20" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-md border border-champagne/30 bg-charcoal shadow-gold">
            <img
              src={assets.portraitHero}
              alt={assets.portraitHeroAlt}
              className="h-[34rem] w-full object-cover object-[50%_18%] sm:h-[42rem] lg:h-[46rem]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6">
              <p className="font-display text-3xl font-semibold">{hero.portraitCaptionName}</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-champagne">
                {hero.portraitCaptionTitle}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
