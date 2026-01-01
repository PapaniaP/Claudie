import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Academy } from './components/Academy';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-cream">
      <Navigation />
      <Hero />
      <Philosophy />
      <Academy />
      <Credentials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
