import { motion, useInView } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';
import { useRef } from 'react';

export const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" ref={ref} className="relative py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold text-neutral-900 mb-8 leading-tight">
              Let's talk<br />
              <span className="text-clay-600">tennis.</span>
            </h2>

            <p className="text-xl md:text-2xl text-neutral-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you're looking to go pro, improve your local ranking, or just fall in love
              with the game—reach out. Every great player starts with a conversation.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="mailto:coach@claycourtpro.com"
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-clay-600 text-white font-semibold text-lg rounded-sm hover:bg-clay-700 transition-all hover:scale-105"
            >
              <Mail className="w-6 h-6" />
              <span>coach@claycourtpro.com</span>
            </a>

            <a
              href="tel:+15551234567"
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 border-2 border-neutral-900 text-neutral-900 font-semibold text-lg rounded-sm hover:bg-neutral-900 hover:text-white transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              <span>+1 (555) 123-4567</span>
            </a>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 pt-16 border-t border-neutral-200"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <div className="text-sm text-neutral-500 uppercase tracking-wider mb-2">Location</div>
              <div className="text-lg text-neutral-900">Premium Clay Courts<br />City Center</div>
            </div>
            <div>
              <div className="text-sm text-neutral-500 uppercase tracking-wider mb-2">Availability</div>
              <div className="text-lg text-neutral-900">7 days a week<br />6AM - 8PM</div>
            </div>
            <div>
              <div className="text-sm text-neutral-500 uppercase tracking-wider mb-2">First Session</div>
              <div className="text-lg font-semibold text-clay-600">Free 30-min Evaluation</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
