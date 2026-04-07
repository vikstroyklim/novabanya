import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Quiz from './components/Quiz';
import Features from './components/Features';
import DownloadCatalog from './components/DownloadCatalog';
import Catalog from './components/Catalog';
import Process from './components/Process';
import Production from './components/Production';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contacts from './components/Contacts';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen selection-brand overflow-x-hidden bg-[#0a0a0b]">
      {loading && <Preloader onLoadingComplete={() => setLoading(false)} />}
      
      {/* Global Background Depth Layers */}
      <div className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-noise" />
        
        {/* Cinematic Background Glows - Layered for depth */}
        <div className="absolute top-[-20%] left-[-15%] w-[70%] h-[70%] bg-brand/[0.06] blur-[200px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-15%] w-[70%] h-[70%] bg-brand/[0.06] blur-[200px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Subtle middle glow to break the darkness */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand/[0.02] blur-[240px] rounded-full" />
        
        {/* Very subtle top edge glow */}
        <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-brand/[0.03] to-transparent" />
      </div>

      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        {/* Main Content Wrapper with Background to cover footer */}
        <div className="relative z-20 footer-reveal-shadow">
          <main>
            <Hero />
            <Quiz />
            <Catalog />
            <Features />
            <DownloadCatalog />
            <Process />
            <Production />
            <Gallery />
            <Reviews />
            <FAQ />
            <Contacts />
            <FinalCTA />
          </main>
        </div>

        {/* Footer with Sticky Reveal Effect */}
        <div className="sticky bottom-0 z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
