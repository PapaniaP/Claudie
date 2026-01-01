import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
      >
        <div className="absolute inset-0 bg-clay-600/10" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(241, 93, 32, 0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }} />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="font-display text-6xl md:text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Master the
            <span className="block text-clay-400">Clay Court</span>
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Professional tennis coaching tailored to your goals. Individual sessions or group training.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-clay-500 text-white font-semibold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-clay-500/50"
          >
            <span className="relative z-10">Book Your Session</span>
            <div className="absolute inset-0 bg-gradient-to-r from-clay-600 to-clay-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>
          <a
            href="#services"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-neutral-900 transition-all"
          >
            View Programs
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-clay-400" />
      </motion.div>
    </section>
  );
};
