import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useRef, useState } from 'react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'coach@tennispro.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: MapPin, label: 'Location', value: 'Premium Clay Courts, City Center' },
];

export const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '', type: 'individual' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formState);
    alert('Thank you! We\'ll be in touch soon.');
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 bg-gradient-to-br from-neutral-50 to-clay-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(241 93 32 / 0.1) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Ready to <span className="text-clay-500">Start?</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Take the first step towards improving your game. Get in touch to schedule your first session.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="font-display text-3xl font-bold mb-6">Get In Touch</h3>
              <p className="text-neutral-600 mb-8">
                Whether you're a beginner looking to learn the basics or an advanced player aiming to
                refine your technique, I'm here to help you achieve your tennis goals.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-clay-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">{item.label}</div>
                    <div className="text-neutral-600">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-clay-500 text-white rounded-2xl p-8 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="font-display text-2xl font-bold mb-3">First Session Free!</h4>
              <p className="text-clay-50">
                New students get their first 30-minute evaluation session completely free.
                No strings attached—just pure tennis coaching.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-200">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-clay-500 focus:border-transparent outline-none transition"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-clay-500 focus:border-transparent outline-none transition"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Lesson Type
                  </label>
                  <select
                    id="type"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-clay-500 focus:border-transparent outline-none transition bg-white"
                    value={formState.type}
                    onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                  >
                    <option value="individual">Individual Lessons</option>
                    <option value="group">Group Sessions</option>
                    <option value="unsure">Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-clay-500 focus:border-transparent outline-none transition resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your experience level and goals..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-clay-500 text-white font-semibold py-4 rounded-lg hover:bg-clay-600 transition-colors flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
