import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Marcus Rivera',
    role: 'Regional Champion',
    quote: 'Working with this coach transformed my game completely. His understanding of clay court strategy is unmatched.',
    achievement: 'Ranked #3 → #1 in 6 months',
  },
  {
    name: 'Sofia Chen',
    role: 'Junior Pro',
    quote: 'The mental game coaching was a revelation. I learned to stay composed during long rallies and trust my training.',
    achievement: 'First tournament win',
  },
  {
    name: 'David Kowalski',
    role: 'Adult Beginner',
    quote: 'I started from zero at 45 years old. Now I play competitively in my local club. The patience and technique teaching is world-class.',
    achievement: 'Club League Champion',
  },
];

export const Testimonials = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" ref={ref} className="py-32 bg-neutral-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-clay-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-clay-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Results That <span className="text-clay-400">Speak</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            From beginners to championship contenders, see what players are achieving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="relative bg-neutral-800 rounded-sm p-8 border border-neutral-700"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5, borderColor: '#c67b3e' }}
            >
              <Quote className="w-10 h-10 text-clay-500 mb-6" />

              <p className="text-neutral-300 text-lg mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-neutral-700 pt-6">
                <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                <div className="text-neutral-400 text-sm mb-3">{testimonial.role}</div>
                <div className="inline-block bg-clay-600/20 text-clay-400 text-sm px-3 py-1 rounded-sm font-medium">
                  {testimonial.achievement}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { value: '500+', label: 'Students Coached' },
            { value: '15', label: 'Years Experience' },
            { value: '50+', label: 'Tournament Winners' },
            { value: '98%', label: 'Student Retention' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-clay-400 mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-400 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
