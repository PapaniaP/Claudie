import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Heart, Zap } from 'lucide-react';
import { useRef } from 'react';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to helping you reach your highest potential through proven techniques.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Tennis is not just a job—it\'s a lifelong love that I share with every student.',
  },
  {
    icon: Zap,
    title: 'Results',
    description: 'Data-driven approach with measurable improvements in technique and performance.',
  },
];

export const About = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={ref} className="relative py-24 bg-neutral-900 overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ x }}
        className="absolute top-1/4 left-0 w-72 h-72 bg-clay-600/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ x: useTransform(scrollYProgress, [0, 1], ['10%', '-10%']) }}
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-clay-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ opacity }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Clay Court <span className="text-clay-400">Specialist</span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              With over 15 years of experience on clay courts, I've developed a unique coaching methodology
              that combines technical precision with the mental game. Every student receives personalized
              attention designed to unlock their full potential.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="relative bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-clay-500 transition-all duration-300">
                  {/* 3D Effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-clay-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.02 }}
                  />

                  <div className="relative">
                    <div className="w-14 h-14 bg-clay-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-clay-500 transition-colors">
                      <value.icon className="w-7 h-7 text-clay-400 group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-neutral-400">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <blockquote className="text-2xl md:text-3xl font-light text-neutral-300 italic max-w-4xl mx-auto">
              "Clay courts demand patience, strategy, and adaptability—qualities that extend far beyond tennis."
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
