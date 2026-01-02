import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Large Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-700 to-clay-700">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="text-white text-3xl font-light tracking-wider">CLAY COURT ACTION SHOT</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block">
              <p className="text-sm tracking-[0.3em] uppercase text-white/70 mb-2">Est. 2010</p>
              <div className="h-px w-24 bg-white/30 mx-auto" />
            </div>
          </motion.div>

          <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl font-light mb-8 tracking-tight leading-[0.9]">
            Clay Court<br />
            <span className="italic">Excellence</span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl font-light mb-16 text-white/80 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Stein bei Nürnberg · Bavaria
          </motion.p>

          <motion.a
            href="#training"
            className="inline-block bg-white text-forest-900 px-12 py-5 text-base font-medium tracking-wide hover:bg-white/90 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Training
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/60" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
};
