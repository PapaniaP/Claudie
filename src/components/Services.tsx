import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const offerings = [
  {
    title: 'Private Training',
    description: 'One-on-one sessions focused entirely on your development. We analyze your game, build custom strategies, and work intensively on technique, footwork, and mental resilience.',
    ideal: 'Serious competitors, professionals, players seeking rapid improvement',
    commitment: '1-2 hour sessions',
  },
  {
    title: 'Small Group Coaching',
    description: 'Train with 2-4 players at your level. Competitive drills, match play, and tactical training in a motivating group environment.',
    ideal: 'Intermediate to advanced players who thrive in team settings',
    commitment: '90-minute sessions',
  },
  {
    title: 'Tournament Preparation',
    description: 'Intensive pre-tournament training covering match strategy, mental preparation, and situation-specific drills. Includes video analysis of opponents when available.',
    ideal: 'Competitive players preparing for specific events',
    commitment: 'Custom packages',
  },
];

export const Services = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="training" ref={ref} className="py-32 bg-sand/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            How We <span className="text-clay-600">Work Together</span>
          </h2>
          <p className="text-xl text-neutral-700 leading-relaxed">
            Whether you're chasing professional rankings or simply want to dominate your local
            league, I tailor every session to your specific goals. No cookie-cutter programs.
          </p>
        </motion.div>

        <div className="space-y-6 max-w-5xl">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              className="group bg-white rounded-sm p-8 md:p-12 border-l-4 border-clay-600 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ x: 5 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="font-display text-3xl font-bold text-neutral-900 mb-4">
                    {offering.title}
                  </h3>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                    {offering.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm text-neutral-500 uppercase tracking-wider">Ideal For</div>
                    <div className="text-neutral-900">{offering.ideal}</div>
                  </div>
                </div>
                <div className="md:text-right flex-shrink-0">
                  <div className="inline-block bg-clay-600 text-white px-4 py-2 rounded-sm text-sm font-medium">
                    {offering.commitment}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg text-neutral-600 mb-6">
            Not sure which option fits your goals? Let's talk.
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-neutral-900 text-white font-semibold text-lg rounded-sm hover:bg-clay-700 transition-all hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};
