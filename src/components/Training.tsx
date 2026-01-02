import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  { title: 'PRIVATE', subtitle: 'One-on-One Mastery', number: '01' },
  { title: 'GROUP', subtitle: 'Team Dynamics', number: '02' },
  { title: 'TOURNAMENT', subtitle: 'Competition Ready', number: '03' },
];

export const Training = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate cards with stagger
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
          opacity: 0,
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1,
          },
          delay: index * 0.1,
        }
      );
    });
  }, []);

  return (
    <section id="training" ref={sectionRef} className="relative py-40 bg-black overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-clay-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-clay-700/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-display text-7xl md:text-8xl lg:text-9xl text-white mb-8 leading-none">
            TRAINING<br />
            <span className="italic text-clay-400">PROGRAMS</span>
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-clay-500 to-transparent" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-clay-900 to-black border border-clay-500/20 cursor-pointer"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-clay-500/0 group-hover:bg-clay-500/20 transition-all duration-700" />

              {/* Content */}
              <div className="relative h-full p-10 flex flex-col justify-between">
                <div className="text-9xl font-display text-clay-500/20 leading-none">
                  {program.number}
                </div>

                <div>
                  <h3 className="font-display text-5xl text-white mb-3 tracking-tight group-hover:text-clay-300 transition-colors duration-500">
                    {program.title}
                  </h3>
                  <p className="text-clay-400 text-lg tracking-wider uppercase">
                    {program.subtitle}
                  </p>

                  {/* Animated underline */}
                  <div className="mt-6 h-px w-0 bg-clay-500 group-hover:w-full transition-all duration-700" />
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-clay-500/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
