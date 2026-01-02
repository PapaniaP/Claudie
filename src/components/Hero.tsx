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
        <div className="w-full h-[120vh] bg-gradient-to-br from-clay-200 via-clay-300 to-clay-400 flex items-center justify-center">
          <div className="text-center">
            <div className="text-9xl mb-4">🎾</div>
            <p className="text-clay-600 text-xl font-medium tracking-wide">
              HERO IMAGE PLACEHOLDER
            </p>
            <p className="text-clay-500 text-sm mt-2">
              Full-screen tennis action shot · Player on clay court
            </p>
          </div>
        </div>
      </div>

      {/* Gradient overlay with clip-path mask */}
      <div
        ref={maskRef}
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
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
          {/* Location badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="px-8 py-3 bg-white/95 backdrop-blur-sm text-clay-900 text-sm tracking-[0.3em] uppercase font-medium border-2 border-clay-900">
              Stein bei Nürnberg · Bavaria
            </span>
          </motion.div>

          {/* Main title */}
          <h1
            ref={titleRef}
            className="font-display text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-[0.9]"
            style={{
              textShadow: '0 4px 40px rgba(0, 0, 0, 0.6)',
            }}
          >
            MASTER THE
            <br />
            <span
              className="inline-block italic"
              style={{
                background: 'linear-gradient(135deg, #c67b3e 0%, #e69a5a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: 'none',
              }}
            >
              CLAY COURT
            </span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-12 font-light max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Elite tennis coaching for players of all levels.
            Individual and group lessons on authentic clay courts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#training"
              className="group relative px-10 py-4 bg-clay-600 text-white font-medium tracking-wider overflow-hidden transition-all duration-500 hover:bg-clay-700"
            >
              <span className="relative z-10">VIEW PROGRAMS</span>
            </a>
            <a
              href="#contact"
              className="px-10 py-4 border-2 border-white text-white font-medium tracking-wider hover:bg-white hover:text-clay-900 transition-all duration-300"
            >
              BOOK A LESSON
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-white/80 to-transparent" />
      </motion.div>
    </section>
  );
};
