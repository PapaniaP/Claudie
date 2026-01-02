import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !maskRef.current) return;

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

    // Parallax title
    gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: 200,
      opacity: 0,
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient overlay with clip-path */}
      <div
        ref={maskRef}
        className="absolute inset-0 bg-gradient-to-br from-clay-500 via-clay-700 to-black opacity-60"
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }}
      />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(198, 123, 62, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(198, 123, 62, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Floating badges */}
          <motion.div
            className="flex justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="px-6 py-2 bg-clay-500/20 backdrop-blur-sm text-clay-200 text-sm tracking-widest uppercase border border-clay-500/30">
              Est. 2010
            </span>
            <span className="px-6 py-2 bg-clay-500/20 backdrop-blur-sm text-clay-200 text-sm tracking-widest uppercase border border-clay-500/30 animate-pulse-slow">
              ITF Level 3
            </span>
          </motion.div>

          {/* Main title with text effects */}
          <h1
            ref={titleRef}
            className="font-display text-8xl md:text-9xl lg:text-[12rem] font-bold text-white mb-8 leading-none"
            style={{
              textShadow: '0 0 80px rgba(198, 123, 62, 0.5)',
            }}
          >
            <span className="inline-block" style={{
              background: 'linear-gradient(to bottom, #fff 0%, #c67b3e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              CLAY
            </span>
            <br />
            <span className="inline-block italic text-clay-400">COURT</span>
          </h1>

          <motion.p
            className="text-2xl md:text-3xl text-white/70 mb-12 tracking-[0.2em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Stein bei Nürnberg · Bavaria
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center gap-6"
          >
            <a
              href="#training"
              className="group relative px-12 py-5 bg-clay-500 text-white text-lg tracking-wider overflow-hidden"
            >
              <span className="relative z-10">EXPLORE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-clay-600 to-clay-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </a>
            <a
              href="#contact"
              className="px-12 py-5 border-2 border-white text-white text-lg tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              CONTACT
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator with animation */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-20 bg-gradient-to-b from-clay-400 to-transparent" />
      </motion.div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(60px) translateY(60px); }
        }
      `}</style>
    </section>
  );
};
