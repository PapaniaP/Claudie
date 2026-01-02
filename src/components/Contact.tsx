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
      { opacity: 0, y: 80 },
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
    <section id="contact" ref={sectionRef} className="relative py-32 md:py-40 bg-clay-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-clay-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-clay-300/30 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <div ref={textRef} className="text-center mb-20">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl text-clay-900 leading-[0.95] mb-8">
              BOOK YOUR
              <br />
              <span className="italic text-clay-600">FIRST LESSON</span>
            </h2>
            <div className="h-1 w-40 bg-clay-600 mx-auto mb-6" />
            <p className="text-clay-700 text-lg max-w-2xl mx-auto">
              Ready to elevate your game? Get in touch to schedule your session on our clay courts.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Mail, label: 'EMAIL', value: 'academy@claycourt.de', href: 'mailto:academy@claycourt.de' },
              { icon: Phone, label: 'PHONE', value: '+49 (555) 123-4567', href: 'tel:+495551234567' },
              { icon: MapPin, label: 'LOCATION', value: 'Stein bei Nürnberg, Bavaria' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="group relative p-8 bg-white border-2 border-clay-200 hover:border-clay-600 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Icon */}
                <div className="w-14 h-14 mb-6 flex items-center justify-center bg-clay-100 group-hover:bg-clay-600 transition-colors duration-500">
                  <item.icon className="w-7 h-7 text-clay-600 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>

                {/* Label */}
                <p className="text-xs tracking-[0.25em] uppercase text-clay-500 mb-3 font-medium">{item.label}</p>

                {/* Value */}
                {item.href ? (
                  <a href={item.href} className="text-clay-900 text-lg font-medium hover:text-clay-600 transition-colors block">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-clay-900 text-lg font-medium">{item.value}</p>
                )}

                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-clay-600 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="mailto:academy@claycourt.de"
              className="group relative inline-block px-12 py-5 bg-clay-600 text-white text-lg font-medium tracking-wider hover:bg-clay-700 transition-colors duration-300"
            >
              START YOUR JOURNEY
            </a>
            <p className="text-clay-600 text-sm mt-5 tracking-wide">
              Free 30-minute consultation · All skill levels welcome
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
