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
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-40 bg-black overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-clay-900/20 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <div ref={textRef} className="text-center mb-24">
            <h2 className="font-display text-7xl md:text-8xl lg:text-9xl text-white leading-none mb-8">
              LET'S<br />
              <span className="italic text-clay-400">CONNECT</span>
            </h2>
            <div className="h-px w-60 bg-gradient-to-r from-transparent via-clay-500 to-transparent mx-auto" />
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Mail, label: 'EMAIL', value: 'academy@claycourt.de', href: 'mailto:academy@claycourt.de' },
              { icon: Phone, label: 'PHONE', value: '+49 (555) 123-4567', href: 'tel:+495551234567' },
              { icon: MapPin, label: 'LOCATION', value: 'Stein bei Nürnberg, Bavaria' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="group relative p-8 bg-gradient-to-br from-clay-900/20 to-transparent border border-clay-500/20 hover:border-clay-500/50 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Icon */}
                <div className="w-16 h-16 mb-6 relative">
                  <div className="absolute inset-0 bg-clay-500/20 rounded-full group-hover:scale-110 transition-transform duration-500" />
                  <item.icon className="absolute inset-0 m-auto w-8 h-8 text-clay-400" strokeWidth={1.5} />
                </div>

                {/* Label */}
                <p className="text-xs tracking-[0.3em] uppercase text-clay-500 mb-3">{item.label}</p>

                {/* Value */}
                {item.href ? (
                  <a href={item.href} className="text-white text-lg hover:text-clay-300 transition-colors block">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white text-lg">{item.value}</p>
                )}

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-clay-500 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="mailto:academy@claycourt.de"
              className="group relative inline-block px-16 py-6 bg-clay-500 text-white text-xl tracking-widest uppercase overflow-hidden"
            >
              <span className="relative z-10">START YOUR JOURNEY</span>
              <div className="absolute inset-0 bg-gradient-to-r from-clay-600 via-clay-700 to-clay-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            </a>
            <p className="text-clay-400 text-sm mt-6 tracking-wide">Free 30-minute consultation</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
