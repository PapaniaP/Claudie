import { motion, useInView } from 'framer-motion';
import { User, Users, Trophy, Target } from 'lucide-react';
import { useRef } from 'react';

const services = [
  {
    icon: User,
    title: 'Individual Lessons',
    description: 'One-on-one personalized coaching tailored to your skill level and goals.',
    features: ['Custom training plan', 'Video analysis', 'Flexible scheduling', 'Progress tracking'],
    price: 'From $80/hour',
  },
  {
    icon: Users,
    title: 'Group Sessions',
    description: 'Learn alongside others in small groups with focused skill development.',
    features: ['Max 4 players', 'Competitive drills', 'Social environment', 'Cost-effective'],
    price: 'From $35/hour',
  },
];

const stats = [
  { icon: Trophy, value: '15+', label: 'Years Experience' },
  { icon: Target, value: '500+', label: 'Students Coached' },
  { icon: Users, value: '95%', label: 'Satisfaction Rate' },
];

export const Services = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-clay-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Choose Your <span className="text-clay-500">Path</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Whether you prefer personalized attention or team dynamics, we have the perfect program for you.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-clay-400 to-clay-600 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />

                <div className="relative">
                  <div className="w-16 h-16 bg-clay-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-clay-500 transition-colors">
                    <service.icon className="w-8 h-8 text-clay-600 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-display text-3xl font-bold mb-3">{service.title}</h3>
                  <p className="text-neutral-600 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-neutral-700">
                        <svg className="w-5 h-5 text-clay-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-neutral-200">
                    <p className="text-2xl font-bold text-clay-600">{service.price}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-clay-500 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="font-display text-4xl font-bold text-neutral-900 mb-2">{stat.value}</div>
              <div className="text-neutral-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
