import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Story = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section id="story" ref={ref} className="relative py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              style={{ x }}
              className="relative aspect-[4/5] bg-gradient-to-br from-clay-600 to-clay-800 rounded-sm overflow-hidden"
            >
              {/* Placeholder for coach photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-clay-200 text-sm uppercase tracking-wider opacity-50">Coach Photo</div>
              </div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-sand rounded-sm -z-10" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold text-neutral-900 mb-8 leading-tight">
              Why I coach on<br />
              <span className="text-clay-600">clay.</span>
            </h2>

            <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
              <p>
                Clay courts taught me patience. Growing up, I watched Nadal dominate Roland Garros,
                and I became obsessed with understanding the surface. It's unforgiving—it exposes
                weaknesses and rewards consistency.
              </p>

              <p>
                After competing professionally for 8 years, I realized my true passion was teaching.
                There's something profound about watching a student finally understand footwork on
                clay, or nail a sliding backhand they've been working on for months.
              </p>

              <p>
                Every player I coach gets a personalized approach. We analyze your game, build a
                strategy, and work relentlessly until you see results. This isn't just about
                technique—it's about developing the mental game that separates good players from
                great ones.
              </p>

              <blockquote className="border-l-4 border-clay-500 pl-6 italic text-xl text-neutral-800 my-8">
                "Clay doesn't lie. Your footwork, your patience, your heart—it all shows."
              </blockquote>

              <p className="text-neutral-900 font-medium">
                Let's build your game, one rally at a time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
