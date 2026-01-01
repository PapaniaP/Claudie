import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Large Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream/95 z-10" />
        {/* Placeholder for hero image - replace with actual photo */}
        <div className="w-full h-full bg-gradient-to-br from-clay-700 via-clay-600 to-clay-800 opacity-20"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%238b4513" width="1200" height="800"/><circle cx="600" cy="400" r="300" fill="%23a86334" opacity="0.3"/></svg>')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 py-32">
        <motion.div
          style={{ opacity }}
          className="max-w-4xl"
        >
          <motion.p
            className="text-clay-700 text-lg md:text-xl font-medium mb-6 tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Clay Court Specialist
          </motion.p>

          <motion.h1
            className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tennis is more than<br />
            <span className="text-clay-600">a game.</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-neutral-700 mb-12 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            It's discipline, strategy, and the pursuit of excellence. For 15 years, I've helped players
            master the clay—where patience meets power, and every rally tells a story.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-clay-600 text-white font-semibold text-lg rounded-sm hover:bg-clay-700 transition-all hover:scale-105"
            >
              Start Your Journey
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-neutral-900 text-neutral-900 font-semibold text-lg rounded-sm hover:bg-neutral-900 hover:text-white transition-all"
            >
              My Story
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-sm text-neutral-600 uppercase tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-neutral-400"
        />
      </motion.div>
    </section>
  );
};
