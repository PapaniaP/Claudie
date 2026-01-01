export const Footer = () => {
  return (
    <footer className="bg-forest-900 text-white/80 py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Clay Court Tennis · Stein bei Nürnberg, Bavaria
        </p>
      </div>
    </footer>
  );
};
