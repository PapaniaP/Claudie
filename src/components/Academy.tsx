import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const programs = [
  {
    title: 'Individual Coaching',
    description: 'Personalized instruction focusing on technical refinement, tactical awareness, and mental preparation. Sessions are structured to address specific areas of development.',
    duration: 'Sessions available by arrangement',
  },
  {
    title: 'Group Training',
    description: 'Small group sessions (maximum 4 students) emphasizing competitive play, situational drills, and peer learning. Students are grouped by skill level.',
    duration: 'Twice weekly sessions',
  },
  {
    title: 'Tournament Preparation',
    description: 'Intensive preparation for competitive players. Includes match strategy, opponent analysis, and mental conditioning specific to high-pressure situations.',
    duration: 'Custom scheduling',
  },
];

export const Academy = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="academy" ref={ref} className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-px bg-heritage-gold mx-auto mb-8" />
          <h2 className="font-serif text-4xl md:text-6xl font-normal text-heritage-navy mb-8">
            The Academy
          </h2>
          <p className="text-lg text-neutral-charcoal max-w-2xl mx-auto font-light">
            Structured programs designed for serious students of the game
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-1">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className="border-b border-neutral-stone last:border-b-0 py-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="md:w-1/3">
                  <h3 className="font-serif text-2xl md:text-3xl text-heritage-navy mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sm text-heritage-gold uppercase tracking-wider">
                    {program.duration}
                  </p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg text-neutral-charcoal leading-relaxed font-light">
                    {program.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-neutral-charcoal mb-6 font-light">
            Enrollment is selective and based on commitment to the program.
          </p>
          <a
            href="#contact"
            className="inline-block border-2 border-heritage-navy text-heritage-navy px-8 py-3 hover:bg-heritage-navy hover:text-neutral-cream transition-all duration-300 text-sm uppercase tracking-wider"
          >
            Inquire About Enrollment
          </a>
        </motion.div>
      </div>
    </section>
  );
};
