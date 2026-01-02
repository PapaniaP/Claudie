import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    title: 'Individual Lessons',
    description: 'Personalized one-on-one coaching tailored to your skill level and goals',
    features: ['Technical analysis', 'Custom drills', 'Video feedback', 'Mental coaching'],
    placeholder: 'One-on-one coaching session · Player receiving forehand instruction',
  },
  {
    title: 'Group Training',
    description: 'Dynamic group sessions for players to learn and compete together',
    features: ['Match play', 'Group drills', 'Team exercises', 'Social environment'],
    placeholder: 'Group training session · Multiple players practicing serves',
  },
  {
    title: 'Tournament Prep',
    description: 'Intensive preparation for competitive tournament play',
    features: ['Match strategy', 'Mental toughness', 'Competition drills', 'Performance analysis'],
    placeholder: 'Competitive training · Player in tournament-style match',
  },
];

export const Training = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    // Animate title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1,
        },
      }
    );

    // Animate cards with clip-path reveal
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
            start: 'top 85%',
            end: 'top 45%',
            scrub: 1,
          },
          delay: index * 0.15,
        }
      );
    });
  }, []);

  return (
    <section id="training" ref={sectionRef} className="relative py-32 md:py-40 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2
            ref={titleRef}
            className="font-display text-6xl md:text-7xl lg:text-8xl text-clay-900 mb-6 leading-[0.95]"
          >
            TRAINING
            <br />
            <span className="italic text-clay-600">PROGRAMS</span>
          </h2>
          <div className="h-1 w-32 bg-clay-600 mx-auto" />
        </motion.div>

        {/* Program Cards */}
        <div className="space-y-24">
          {programs.map((program, index) => (
            <div
              key={program.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image placeholder - alternating left/right */}
                <div className={`relative aspect-[4/3] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-clay-200 via-clay-300 to-clay-400 flex items-center justify-center overflow-hidden">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-4">🎾</div>
                      <p className="text-clay-700 font-medium tracking-wide">
                        {program.title.toUpperCase()}
                      </p>
                      <p className="text-clay-600 text-sm mt-3 leading-relaxed max-w-md">
                        {program.placeholder}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-clay-900/0 group-hover:bg-clay-900/10 transition-all duration-700" />

                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-clay-900/20 group-hover:border-clay-900/40 transition-colors duration-500" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-clay-900/20 group-hover:border-clay-900/40 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div>
                    <div className="text-clay-400 text-sm tracking-[0.3em] uppercase font-medium mb-3">
                      Program {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-display text-4xl md:text-5xl text-clay-900 mb-4 leading-tight">
                      {program.title}
                    </h3>
                    <p className="text-clay-700 text-lg leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3">
                    {program.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-clay-600 rotate-45" />
                        <span className="text-clay-800">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <a
                      href="#contact"
                      className="inline-block px-8 py-3 bg-clay-600 text-white font-medium tracking-wider hover:bg-clay-700 transition-colors duration-300"
                    >
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
