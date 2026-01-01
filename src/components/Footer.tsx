export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Pro Tennis Coach. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-clay-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-clay-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
