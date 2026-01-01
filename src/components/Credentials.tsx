import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const achievements = [
  {
    year: '2010',
    title: 'Academy Founded',
    description: 'Established training facility with focus on clay court excellence',
  },
  {
    year: '2015',
    title: 'European Certification',
    description: 'Advanced coaching certification from German Tennis Federation',
  },
  {
    year: '2018',
    title: 'Regional Championships',
    description: '12 students qualified for national tournament play',
  },
  {
    year: '2023',
    title: 'Professional Development',
    description: 'Two academy graduates turned professional',
  },
];

const credentials = [
  'ITF Level 3 Certified Coach',
  'German Tennis Federation - Advanced Certification',
  'Sports Psychology Specialist',
  '15+ Years Competitive Playing Experience',
];

export const Credentials = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="credentials" ref={ref} className="py-32 bg-heritage-navy text-neutral-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-px bg-heritage-gold mx-auto mb-8" />
            <h2 className="font-serif text-4xl md:text-6xl font-normal mb-8">
              Heritage & Credentials
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.year}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex gap-6">
                  <div className="text-6xl font-serif text-heritage-gold/30 leading-none">
                    {achievement.year}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-3">{achievement.title}</h3>
                    <p className="text-neutral-stone font-light">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            className="border-t border-neutral-stone/20 pt-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="font-serif text-2xl text-center mb-12">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {credentials.map((credential) => (
                <div
                  key={credential}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-heritage-gold mt-2 flex-shrink-0" />
                  <p className="text-neutral-stone font-light">{credential}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
