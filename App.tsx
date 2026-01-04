
import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlavorFeature from './components/FlavorFeature';
import NomadContext from './components/NomadContext';
import ImpactBridge from './components/ImpactBridge';
import PreOrderZone from './components/PreOrderZone';
import LocationBanner from './components/LocationBanner';
import ScienceView from './components/ScienceView';
import VisionDeck from './components/VisionDeck';

export type ViewState = 'home' | 'science' | 'vision';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [activeSection, setActiveSection] = useState(0);
  const driverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveSection(0);
    if (driverRef.current) {
      driverRef.current.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }, [view]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollPosition = e.currentTarget.scrollTop;
    const windowHeight = window.innerHeight;
    const index = Math.round(scrollPosition / windowHeight);
    if (index !== activeSection) {
      setActiveSection(index);
    }
  };

  const scrollTo = (index: number) => {
    driverRef.current?.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  };

  const renderHome = () => (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="visual-stack">
        <div className={`section-layer dark-bg ${activeSection === 0 ? 'active' : ''}`}>
          <Hero isActive={activeSection === 0} onOpenScience={() => setView('science')} onOpenVision={() => setView('vision')} />
        </div>
        <div className={`section-layer ${activeSection === 1 ? 'active' : ''}`}>
          <FlavorFeature isActive={activeSection === 1} />
        </div>
        <div className={`section-layer dark-bg ${activeSection === 2 ? 'active' : ''}`}>
          <NomadContext isActive={activeSection === 2} />
        </div>
        <div className={`section-layer dark-bg ${activeSection === 3 ? 'active' : ''}`}>
          <ImpactBridge isActive={activeSection === 3} />
        </div>
        <div className={`section-layer ${activeSection === 4 ? 'active' : ''}`}>
          <PreOrderZone isActive={activeSection === 4} />
        </div>
      </div>

      <Navbar activeSection={activeSection} onViewChange={setView} currentView={view} />
      <LocationBanner />
      
      <div 
        ref={driverRef}
        className="scroll-driver"
        onScroll={handleScroll}
      >
        <div className="snap-point" />
        <div className="snap-point" />
        <div className="snap-point" />
        <div className="snap-point" />
        <div className="snap-point" />
      </div>

      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-6">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            className="group flex items-center justify-end"
            onClick={() => scrollTo(index)}
          >
            <div className={`w-1 rounded-full transition-all duration-700 ${
              activeSection === index 
              ? 'h-12 bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.5)]' 
              : `h-4 ${[0, 2, 3].includes(activeSection) ? 'bg-white/20 hover:bg-white/50' : 'bg-slate-300 hover:bg-slate-500'}`
            }`} />
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-black min-h-screen w-full transition-all duration-700">
      {view === 'home' && renderHome()}
      {view === 'science' && <ScienceView onClose={() => setView('home')} />}
      {view === 'vision' && <VisionDeck onClose={() => setView('home')} />}
    </div>
  );
};

export default App;
