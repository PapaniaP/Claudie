import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Large Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-clay-700 via-forest-700 to-forest-900">
        {/* Placeholder for large hero image of clay court/coach action */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="text-white text-2xl font-light">[ Hero Image: Clay Court Action Shot ]</div>
        </div>
      </div>

      {/* Minimal Text Overlay */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-serif text-6xl md:text-8xl font-normal mb-6">
            Clay Court Excellence
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 text-white/90">
            Stein bei Nürnberg, Bavaria
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-forest-900 px-10 py-4 text-lg font-medium hover:bg-forest-50 transition-all"
          >
            Train With Us
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white/80" />
      </motion.div>
    </section>
  );
};
