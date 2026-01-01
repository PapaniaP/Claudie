import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Training } from './components/Training';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Training />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
