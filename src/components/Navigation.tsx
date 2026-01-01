import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(250, 248, 243, 0)', 'rgba(250, 248, 243, 0.98)']
  );
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ['rgb(23, 23, 23)', 'rgb(23, 23, 23)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#story', label: 'Story' },
    { href: '#training', label: 'Training' },
    { href: '#testimonials', label: 'Results' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-display text-2xl font-bold text-neutral-900"
            whileHover={{ scale: 1.05 }}
          >
            Clay<span className="text-clay-600">Court</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-neutral-900 hover:text-clay-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-clay-600 text-white px-6 py-2 rounded-sm hover:bg-clay-700 transition-colors font-semibold"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-900 p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 bg-cream">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-neutral-900 hover:text-clay-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-clay-600 text-white px-6 py-2 rounded-sm hover:bg-clay-700 transition-colors font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};
