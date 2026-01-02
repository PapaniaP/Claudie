import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !maskRef.current || !imageRef.current) return;

    // Animate clip-path mask on scroll
    gsap.to(maskRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    });

    // Parallax image
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: 150,
    });

    // Parallax title
    gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: 100,
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-clay-50"
    >
      {/* Large tennis image placeholder with parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 -mt-20"
      >
        <div className="w-full h-[120vh] bg-gradient-to-br from-clay-300 via-orange-300 to-amber-200 flex items-center justify-center">
          <div className="text-center">
            <div className="text-9xl mb-4">🎾</div>
            <p className="text-clay-700 text-2xl font-bold">
              HERO IMAGE
            </p>
            <p className="text-clay-600 text-sm mt-3 max-w-md mx-auto">
              Action shot of player hitting powerful forehand on clay court
            </p>
          </div>
        </div>
      </div>

      {/* Gradient overlay with clip-path mask */}
      <div
        ref={maskRef}
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Energetic badge */}
          <motion.div
            className="flex justify-center gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="px-6 py-2.5 bg-white text-clay-900 text-xs font-bold tracking-wider uppercase rounded-full">
              Clay Court Specialist
            </span>
            <span className="px-6 py-2.5 bg-clay-600 text-white text-xs font-bold tracking-wider uppercase rounded-full">
              Bavaria
            </span>
          </motion.div>

          {/* Main title - casual and energetic */}
          <h1
            ref={titleRef}
            className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight"
            style={{
              textShadow: '0 4px 60px rgba(0, 0, 0, 0.5)',
            }}
          >
            Level Up Your
            <br />
            <span
              className="inline-block relative"
            >
              <span className="relative z-10 text-clay-400">Tennis Game</span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-clay-600/50 -rotate-1" />
            </span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-white mb-10 font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Pro tennis coaching on authentic clay courts in Stein bei Nürnberg.
            <br />
            All levels welcome 👋
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#training"
              className="px-10 py-4 bg-clay-600 text-white font-bold tracking-wide rounded-lg hover:bg-clay-700 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              See Programs
            </a>
            <a
              href="#contact"
              className="px-10 py-4 bg-white text-clay-900 font-bold tracking-wide rounded-lg hover:bg-clay-100 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Book a Lesson
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white text-xs font-medium tracking-wider">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/80 to-transparent" />
      </motion.div>
    </section>
  );
};
