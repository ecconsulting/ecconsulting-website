import { Quote } from 'lucide-react';
import { testimonials } from '../data/site.js';
import MotionSection from './MotionSection.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function Testimonials() {
  return (
    <MotionSection className="bg-porcelain py-16 sm:py-20">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Client confidence"
          title="Professional support with clarity and discretion."
          text="Placeholder testimonials are ready for real client quotes as the website moves toward launch."
          align="center"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
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
