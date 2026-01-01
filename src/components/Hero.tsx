import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-heritage-navy overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%),
                           linear-gradient(-45deg, #000 25%, transparent 25%),
                           linear-gradient(45deg, transparent 75%, #000 75%),
                           linear-gradient(-45deg, transparent 75%, #000 75%)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <div className="w-24 h-px bg-heritage-gold mx-auto mb-8" />
            <p className="text-heritage-gold text-sm uppercase tracking-[0.3em] font-sans mb-4">
              Est. 2010
            </p>
          </motion.div>

          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal text-neutral-cream mb-12 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Excellence Through<br />
            <span className="italic">Discipline</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-neutral-stone max-w-3xl mx-auto leading-relaxed font-light mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            A traditional approach to tennis coaching. Focused on technique, strategy,
            and the mental fortitude required for championship play.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="w-24 h-px bg-heritage-gold mx-auto" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-heritage-gold text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-16 bg-heritage-gold/50" />
        </div>
      </motion.div>
    </section>
  );
};
