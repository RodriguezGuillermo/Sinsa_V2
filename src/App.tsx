import { Navbar } from './app/components/Navbar';
import { Hero } from './app/components/Hero';
import { Services } from './app/components/Services';
import { About } from './app/components/About';
import { Projects } from './app/components/Projects';
import { Contact } from './app/components/Contact';
import { Footer } from './app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}