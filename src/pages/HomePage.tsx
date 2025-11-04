import Navigation from '../components/shared/Navigation';
import Hero from '../components/home/Hero';
import About from '../components/home/About';

import Strategy from '../components/home/Strategy';
import Recognition from '../components/home/Recognition';
import CTABanner from '../components/home/CTABanner';
import Footer from '../components/shared/Footer';

function HomePage() {
  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <About />
      
      <Strategy />
    
      <CTABanner />
      <Footer />
    </div>
  );
}

export default HomePage;
