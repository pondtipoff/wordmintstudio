import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';

import { Samples } from './components/Samples';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Samples />
      <Contact />
      <Footer />
    </div>
  );
}