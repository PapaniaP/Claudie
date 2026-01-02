import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const programs = [
  {
    title: 'Private Coaching',
    subtitle: 'Personalized one-on-one training',
    image: 'COACH & PLAYER',
  },
  {
    title: 'Group Sessions',
    subtitle: 'Small group competitive training',
    image: 'GROUP TRAINING',
  },
  {
    title: 'Tournament Prep',
    subtitle: 'Match-ready conditioning',
    image: 'MATCH PLAY',
  },
];

export const Training = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="training" ref={ref} className="py-32 md:py-40 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="max-w-4xl mb-20 md:mb-28"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-forest-900 mb-6 tracking-tight leading-tight">
            Training<br />Programs
          </h2>
          <p className="text-xl md:text-2xl text-forest-700/60 font-light max-w-2xl">
            Tailored approaches for every level of play
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-forest-900">
                <div className="absolute inset-0 bg-gradient-to-br from-clay-500 to-forest-700 flex items-center justify-center">
                  <span className="text-white/20 text-xs tracking-widest">{program.image}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-clay-500/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Text */}
              <div className="space-y-3">
                <h3 className="font-serif text-3xl md:text-4xl text-forest-900 tracking-tight group-hover:text-clay-700 transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-base text-forest-700/60 font-light leading-relaxed">
                  {program.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-24 md:mt-32 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-forest-900 hover:text-clay-700 transition-colors duration-300"
          >
            <span className="text-lg tracking-wide">Discuss Your Goals</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
