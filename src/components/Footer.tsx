export const Footer = () => {
  return (
    <footer className="bg-forest-900 text-white/60 py-16 border-t border-white/5">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-sm tracking-wide">
            © {new Date().getFullYear()} Clay Court Tennis · Stein bei Nürnberg, Bavaria, Germany
          </p>
        </div>
      </div>
    </footer>
  );
};
