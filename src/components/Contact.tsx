import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" ref={ref} className="py-32 bg-neutral-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-px bg-heritage-gold mx-auto mb-8" />
            <h2 className="font-serif text-4xl md:text-6xl font-normal text-heritage-navy mb-12">
              Inquiries
            </h2>
          </motion.div>

          <motion.div
            className="space-y-8 mb-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg text-neutral-charcoal leading-relaxed font-light">
              Prospective students and their families are welcome to schedule a consultation
              to discuss training goals and academy enrollment.
            </p>

            <div className="space-y-4 pt-8">
              <div>
                <p className="text-sm uppercase tracking-wider text-heritage-gold mb-2">Email</p>
                <a
                  href="mailto:academy@claycourt.de"
                  className="text-xl text-heritage-navy hover:text-heritage-gold transition-colors"
                >
                  academy@claycourt.de
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-heritage-gold mb-2">Telephone</p>
                <a
                  href="tel:+495551234567"
                  className="text-xl text-heritage-navy hover:text-heritage-gold transition-colors"
                >
                  +49 (555) 123-4567
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="border-t border-neutral-stone pt-12 grid md:grid-cols-3 gap-8 text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div>
              <p className="text-heritage-gold uppercase tracking-wider mb-2">Location</p>
              <p className="text-neutral-charcoal font-light">
                Stein bei Nürnberg<br />Bavaria, Germany
              </p>
            </div>
            <div>
              <p className="text-heritage-gold uppercase tracking-wider mb-2">Training Hours</p>
              <p className="text-neutral-charcoal font-light">
                Monday - Saturday<br />6:00 - 20:00
              </p>
            </div>
            <div>
              <p className="text-heritage-gold uppercase tracking-wider mb-2">Consultation</p>
              <p className="text-neutral-charcoal font-light">
                Complimentary initial<br />assessment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
