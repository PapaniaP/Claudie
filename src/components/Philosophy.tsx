import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const Philosophy = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="philosophy" ref={ref} className="py-32 bg-neutral-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-px bg-heritage-gold mx-auto mb-8" />
            <h2 className="font-serif text-4xl md:text-6xl font-normal text-heritage-navy mb-8">
              Philosophy
            </h2>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg md:text-xl leading-relaxed text-neutral-charcoal font-light">
              Tennis, at its highest level, is a discipline that demands more than physical prowess.
              It requires mental clarity, strategic thinking, and an unwavering commitment to excellence.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-neutral-charcoal font-light">
              Our approach is rooted in classical European training methods—emphasizing fundamentals,
              consistency, and the development of a complete player. We do not promise shortcuts.
              We offer a rigorous path to mastery.
            </p>

            <div className="border-l-2 border-heritage-gold pl-8 my-12">
              <p className="text-2xl md:text-3xl font-serif italic text-heritage-navy leading-relaxed">
                "Clay courts reveal truth. Every movement, every decision, every weakness is exposed.
                It is the ultimate test of patience and precision."
              </p>
            </div>

            <p className="text-lg md:text-xl leading-relaxed text-neutral-charcoal font-light">
              Each student receives individual attention tailored to their unique strengths and areas
              for development. Progress is measured not in weeks, but in seasons. Championship-level
              play is built through dedication over time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
