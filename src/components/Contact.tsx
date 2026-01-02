import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    // Text reveal animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'top 30%',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32 bg-gradient-to-br from-clay-50 to-orange-50 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-clay-300/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-300/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <div ref={textRef} className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-white text-clay-700 font-bold text-sm tracking-wider uppercase rounded-full mb-6"
            >
              Let's Connect
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-clay-900 mb-6 font-black">
              Ready to Start?
            </h2>
            <p className="text-xl text-clay-700 max-w-2xl mx-auto">
              Hit me up and let's get you on the court! First session is on me ☕
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Mail, label: 'EMAIL ME', value: 'academy@claycourt.de', href: 'mailto:academy@claycourt.de' },
              { icon: Phone, label: 'CALL/TEXT', value: '+49 (555) 123-4567', href: 'tel:+495551234567' },
              { icon: MapPin, label: 'LOCATION', value: 'Stein bei Nürnberg', subtext: 'Bavaria, Germany' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="group relative p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border-2 border-transparent hover:border-clay-400"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-4 flex items-center justify-center bg-clay-100 rounded-xl group-hover:bg-clay-600 transition-colors duration-500">
                  <item.icon className="w-6 h-6 text-clay-600 group-hover:text-white transition-colors duration-500" strokeWidth={2} />
                </div>

                {/* Label */}
                <p className="text-xs tracking-wider uppercase text-clay-500 mb-2 font-bold">{item.label}</p>

                {/* Value */}
                {item.href ? (
                  <a href={item.href} className="text-clay-900 font-bold hover:text-clay-600 transition-colors block">
                    {item.value}
                  </a>
                ) : (
                  <div>
                    <p className="text-clay-900 font-bold">{item.value}</p>
                    {item.subtext && (
                      <p className="text-clay-600 text-sm">{item.subtext}</p>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center bg-white rounded-2xl p-10 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-3xl font-black text-clay-900 mb-3">
              Free Trial Session! 🎾
            </h3>
            <p className="text-clay-700 mb-8 text-lg">
              Not sure if it's for you? Try a free 30-minute session. No strings attached.
            </p>
            <a
              href="mailto:academy@claycourt.de"
              className="inline-block px-12 py-4 bg-clay-600 text-white font-bold text-lg rounded-xl hover:bg-clay-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Your Free Session
            </a>
            <p className="text-clay-500 text-sm mt-6">
              Usually reply within a few hours ⚡
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
