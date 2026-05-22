import { CheckCircle2, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteContent, stripePlaceholder } from '../data/site.js';
import ButtonLink from './ButtonLink.jsx';

export default function PricingCards({ plans, buttonLabel, polish = false }) {
  const labels = siteContent.ui;

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {plans.map((plan) => (
        <motion.article
          key={plan.name}
          whileHover={{ y: -6 }}
          className={[
            'flex h-full flex-col rounded-md border p-6 shadow-soft transition',
            plan.featured
              ? 'border-champagne bg-ink text-white'
              : 'border-ink/10 bg-white/90 text-charcoal',
          ].join(' ')}
        >
          {plan.featured && (
            <p className="mb-4 inline-flex w-fit rounded-md bg-champagne px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-ink">
              {polish ? labels.popularPolishLabel : labels.popularLabel}
            </p>
          )}
          <h3 className={['text-3xl font-semibold', plan.featured ? 'text-white' : 'text-ink'].join(' ')}>
            {plan.name}
          </h3>
          <p className={['mt-3 text-2xl font-extrabold', plan.featured ? 'text-champagne' : 'text-gilt'].join(' ')}>
            {plan.price}
          </p>
          <p className={['mt-4 text-sm leading-7', plan.featured ? 'text-white/70' : 'text-graphite'].join(' ')}>
            {plan.description}
          </p>
          <ul className="mt-6 flex-1 space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className={['flex gap-3 text-sm', plan.featured ? 'text-white/80' : 'text-charcoal'].join(' ')}>
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <ButtonLink
            href={plan.paymentLink || stripePlaceholder}
            external
            variant={plan.featured ? 'primary' : 'outline'}
            icon={CreditCard}
            className="mt-8 w-full"
          >
            {buttonLabel || (polish ? labels.pricingButtonPolishLabel : labels.pricingButtonLabel)}
          </ButtonLink>
        </motion.article>
      ))}
    </div>
  );
}
