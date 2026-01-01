export const Footer = () => {
  return (
    <footer className="bg-heritage-navy text-neutral-stone py-16 border-t border-heritage-gold/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl text-neutral-cream mb-2">Clay Court Academy</h3>
            <p className="text-sm uppercase tracking-wider text-heritage-gold">Est. 2010</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm">
            <p>© {new Date().getFullYear()} Clay Court Academy</p>
            <span className="hidden md:block text-heritage-gold">·</span>
            <a href="#" className="hover:text-heritage-gold transition-colors">Privacy</a>
            <span className="hidden md:block text-heritage-gold">·</span>
            <a href="#" className="hover:text-heritage-gold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
