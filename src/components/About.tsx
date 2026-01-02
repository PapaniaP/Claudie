import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const About = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="about" ref={ref} className="py-32 md:py-40 bg-forest-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-clay-500 to-forest-700 flex items-center justify-center">
              <span className="text-white/20 text-xs tracking-widest">COACH PORTRAIT</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-12">
              <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-forest-900 mb-8 tracking-tight leading-[0.95]">
                15 Years<br />
                <span className="italic text-clay-700">on Clay</span>
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-forest-700/80 font-light leading-relaxed">
                <p>
                  European-trained with ITF Level 3 certification. My approach combines technical precision with strategic thinking and mental conditioning.
                </p>
                <p>
                  Based in Stein bei Nürnberg, I work with players at every stage—from those discovering the sport to professionals refining their competitive edge.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 pt-12 border-t border-forest-200">
              <div>
                <div className="text-5xl md:text-6xl font-serif text-clay-700 mb-3 tracking-tight">500+</div>
                <div className="text-sm uppercase tracking-widest text-forest-700/60">Students Coached</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-serif text-clay-700 mb-3 tracking-tight">15</div>
                <div className="text-sm uppercase tracking-widest text-forest-700/60">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
