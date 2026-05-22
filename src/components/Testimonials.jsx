import { Quote } from 'lucide-react';
import { siteContent } from '../data/site.js';
import MotionSection from './MotionSection.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function Testimonials() {
  const testimonials = siteContent.home.testimonials;

  return (
    <MotionSection className="bg-porcelain py-16 sm:py-20">
      <div className="container-shell">
        <SectionHeader
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          text={testimonials.text}
          align="center"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.items.map((item) => (
            <article key={item.name} className="premium-card rounded-md p-6">
              <Quote className="h-7 w-7 text-gilt" aria-hidden="true" />
              <p className="mt-5 text-base leading-8 text-charcoal">"{item.quote}"</p>
              <div className="mt-6 border-t border-ink/10 pt-5">
                <p className="font-bold text-ink">{item.name}</p>
                <p className="mt-1 text-sm text-graphite">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
