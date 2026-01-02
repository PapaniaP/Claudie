import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useRef } from 'react';

export const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="contact" ref={ref} className="py-32 md:py-40 bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-20 md:mb-28"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-forest-900 mb-6 tracking-tight">
              Get in Touch
            </h2>
            <p className="text-xl md:text-2xl text-forest-700/60 font-light max-w-2xl mx-auto">
              Start your journey to clay court mastery
            </p>
          </motion.div>

          {/* Contact Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-12 md:gap-16 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-center group">
              <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-clay-700 transition-colors duration-300">
                <Mail className="w-9 h-9 text-forest-700 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <a
                href="mailto:academy@claycourt.de"
                className="text-lg md:text-xl text-forest-900 hover:text-clay-700 transition-colors duration-300 block"
              >
                academy@claycourt.de
              </a>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-clay-700 transition-colors duration-300">
                <Phone className="w-9 h-9 text-forest-700 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <a
                href="tel:+495551234567"
                className="text-lg md:text-xl text-forest-900 hover:text-clay-700 transition-colors duration-300 block"
              >
                +49 (555) 123-4567
              </a>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-clay-700 transition-colors duration-300">
                <MapPin className="w-9 h-9 text-forest-700 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <p className="text-lg md:text-xl text-forest-900">
                Stein bei Nürnberg<br />Bavaria, Germany
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a
              href="mailto:academy@claycourt.de"
              className="inline-block bg-forest-900 text-white px-14 py-6 text-lg tracking-wide hover:bg-clay-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Free Consultation
            </motion.a>
            <p className="text-sm text-forest-700/60 mt-6 font-light">
              Complimentary 30-minute evaluation session
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
