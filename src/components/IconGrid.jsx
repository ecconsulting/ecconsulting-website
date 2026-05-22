import { motion } from 'framer-motion';

export default function IconGrid({ items, dark = false }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <motion.article
            key={item.title}
            whileHover={{ y: -5 }}
            className={[
              'rounded-md border p-5 transition',
              dark ? 'border-white/10 bg-white/[0.055] text-white' : 'border-ink/10 bg-white/80 text-charcoal shadow-soft',
            ].join(' ')}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-champagne/20 text-gilt">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className={['mt-5 text-2xl font-semibold', dark ? 'text-white' : 'text-ink'].join(' ')}>{item.title}</h3>
            {item.text && <p className={['mt-3 text-sm leading-7', dark ? 'text-white/70' : 'text-graphite'].join(' ')}>{item.text}</p>}
          </motion.article>
        );
      })}
    </div>
  );
}
