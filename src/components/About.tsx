import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const About = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" ref={ref} className="py-32 bg-forest-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Large Image */}
          <motion.div
            className="aspect-[4/5] bg-gradient-to-br from-clay-500 to-forest-700 flex items-center justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <span className="text-white/30">[ Coach Portrait ]</span>
          </motion.div>

          {/* Minimal Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-serif text-5xl md:text-6xl text-forest-900 mb-8">
              15 Years<br />on Clay
            </h2>
            <p className="text-xl text-forest-700 leading-relaxed mb-6">
              European-trained with ITF certification. Specializing in technique, strategy, and mental preparation for competitive play.
            </p>
            <p className="text-lg text-forest-700/80 leading-relaxed">
              Based in Stein bei Nürnberg, working with players from beginner to professional level.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-forest-200">
              <div>
                <div className="text-4xl font-serif text-clay-500 mb-2">500+</div>
                <div className="text-sm uppercase tracking-wider text-forest-700">Students</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-clay-500 mb-2">15</div>
                <div className="text-sm uppercase tracking-wider text-forest-700">Years</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
