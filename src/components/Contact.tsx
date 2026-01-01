import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useRef } from 'react';

export const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-serif text-5xl md:text-6xl text-forest-900 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Get in Touch
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-12 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div>
              <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-forest-700" />
              </div>
              <a href="mailto:academy@claycourt.de" className="text-lg text-forest-900 hover:text-clay-500">
                academy@claycourt.de
              </a>
            </div>

            <div>
              <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-forest-700" />
              </div>
              <a href="tel:+495551234567" className="text-lg text-forest-900 hover:text-clay-500">
                +49 (555) 123-4567
              </a>
            </div>

            <div>
              <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-forest-700" />
              </div>
              <p className="text-lg text-forest-900">
                Stein bei Nürnberg<br />Bavaria
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <a
              href="mailto:academy@claycourt.de"
              className="inline-block bg-forest-900 text-white px-12 py-4 text-lg hover:bg-forest-700 transition-all"
            >
              Book Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
