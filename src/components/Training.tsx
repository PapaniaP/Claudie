import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const programs = [
  {
    title: 'Private Coaching',
    subtitle: 'One-on-one intensive training',
    image: '[ Coach & Student on Clay Court ]',
  },
  {
    title: 'Group Sessions',
    subtitle: 'Small group dynamics',
    image: '[ Group Training Action ]',
  },
  {
    title: 'Tournament Prep',
    subtitle: 'Competition-focused programs',
    image: '[ Match Play Moment ]',
  },
];

export const Training = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="training" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Minimal Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="font-serif text-5xl md:text-6xl text-forest-900 mb-4">Training Programs</h2>
        </motion.div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className="group relative aspect-[3/4] bg-forest-100 overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-clay-500 to-forest-700 flex items-center justify-center">
                <span className="text-white/30 text-sm">{program.image}</span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="font-serif text-3xl mb-2">{program.title}</h3>
                <p className="text-white/80">{program.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#contact"
            className="inline-block border-2 border-forest-900 text-forest-900 px-8 py-3 hover:bg-forest-900 hover:text-white transition-all"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};
