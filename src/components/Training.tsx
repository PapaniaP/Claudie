import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    title: '1-on-1 Coaching',
    subtitle: 'Your game, your pace',
    description: 'Personalized coaching sessions focused on YOUR goals. Work on technique, strategy, or match prep.',
    emoji: '🎯',
    features: ['Video analysis', 'Custom drills', 'Flexible scheduling', 'All skill levels'],
    color: 'from-orange-400 to-clay-500',
    placeholder: 'Private lesson · Coach working one-on-one with player',
  },
  {
    title: 'Group Sessions',
    subtitle: 'Train together, grow together',
    description: 'Join other players for dynamic group training. Perfect mix of drills, match play, and fun.',
    emoji: '👥',
    features: ['Max 6 players', 'Match practice', 'Social vibe', 'Weekly sessions'],
    color: 'from-clay-400 to-amber-500',
    placeholder: 'Group training · Players practicing volleys together',
  },
  {
    title: 'Tournament Ready',
    subtitle: 'Get competitive',
    description: 'Intense prep for tournaments. Mental game, match tactics, and pressure training.',
    emoji: '🏆',
    features: ['Match simulation', 'Mental coaching', 'Strategy sessions', 'Performance tracking'],
    color: 'from-amber-400 to-orange-500',
    placeholder: 'Tournament prep · Intense match situation training',
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
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 40%',
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
            end: 'top 50%',
            scrub: 1,
          },
          delay: index * 0.1,
        }
      );
    });
  }, []);

  return (
    <section id="training" ref={sectionRef} className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-clay-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 bg-clay-100 text-clay-700 font-bold text-sm tracking-wider uppercase rounded-full mb-6"
          >
            Training Programs
          </motion.div>
          <h2
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl text-clay-900 mb-6 font-black"
          >
            Find Your Perfect
            <br />
            <span className="text-clay-600">Training Style</span>
          </h2>
        </div>

        {/* Program Cards - Grid layout */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={program.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-clay-100 hover:border-clay-400">
                {/* Image placeholder */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                    <div className="text-center p-6">
                      <div className="text-7xl mb-3">{program.emoji}</div>
                      <p className="text-white font-bold text-lg">
                        IMAGE
                      </p>
                      <p className="text-white/90 text-xs mt-2 max-w-xs mx-auto">
                        {program.placeholder}
                      </p>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-black text-clay-900 mb-1">
                      {program.title}
                    </h3>
                    <p className="text-clay-600 font-medium">
                      {program.subtitle}
                    </p>
                  </div>

                  <p className="text-clay-700 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-clay-600 rounded-full" />
                        <span className="text-sm text-clay-800">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="block w-full text-center px-6 py-3 bg-clay-600 text-white font-bold rounded-lg hover:bg-clay-700 hover:scale-105 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
