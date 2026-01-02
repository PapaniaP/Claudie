import { WebGLBackground } from './components/WebGLBackground';
import { Hero } from './components/Hero';
import { Training } from './components/Training';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <WebGLBackground />
      <Hero />
      <Training />
      <Contact />
    </div>
  );
}

export default App;
