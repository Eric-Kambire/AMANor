
import React, { useState, useRef, useEffect } from 'react';
import { X, Shield, Cpu, Zap, Droplets, FileText, Maximize, ZoomIn, ChevronLeft, ChevronRight, Play, Package, Gift, ShoppingBag, ArrowRight, Heart, Video, Monitor, Pause } from 'lucide-react';

interface ScienceViewProps {
  onClose: () => void;
}

const ScienceView: React.FC<ScienceViewProps> = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState(0);
  const driverRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollPosition = e.currentTarget.scrollTop;
    const windowHeight = window.innerHeight;
    const index = Math.round(scrollPosition / windowHeight);
    if (index !== activeSection) {
      setActiveSection(index);
    }
  };

  const scrollTo = (index: number) => {
    driverRef.current?.scrollTo({ top: index * window.innerHeight, behavior: 'smooth' });
  };

  const navItems = ['Innovation 3D', 'Bouclier Bio', 'Démonstration Video', 'Dossier Technique', 'Investissement'];

  return (
    <div className="h-screen w-full bg-slate-50 text-slate-900 relative overflow-hidden font-sans animate-in fade-in duration-1000">
      {/* Subtle Texture Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
      
      {/* High-End Floating Exit Button */}
      <button 
        onClick={onClose}
        className="fixed top-6 right-6 md:top-10 md:right-10 z-[200] group flex items-center gap-3 bg-white/90 hover:bg-white backdrop-blur-xl border border-slate-200 p-2 pr-6 rounded-full transition-all active:scale-95 shadow-2xl shadow-slate-200/50"
      >
        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white group-hover:rotate-90 transition-transform">
          <X className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-teal-600 transition-colors">Quitter le Labo</span>
      </button>

      {/* Tech Header - Adjusted for better spacing */}
      <header className="fixed top-8 left-8 md:top-12 md:left-20 z-50 flex items-center gap-6">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20 shadow-sm">
          <Cpu className="w-6 h-6 md:w-7 md:h-7 text-teal-600" />
        </div>
        <div className="hidden sm:block">
          <h1 className="text-lg font-black tracking-tight text-slate-900 uppercase tracking-[0.1em]">AMANor Labs</h1>
          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.3em]">Spécifications v3.0</p>
        </div>
      </header>

      {/* Modern Vertical Navigation */}
      <div className="fixed left-6 md:left-20 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 md:gap-8">
        {navItems.map((name, idx) => (
          <button 
            key={idx}
            onClick={() => scrollTo(idx)}
            className="group flex items-center gap-6 focus:outline-none"
          >
            <div className={`w-1 transition-all duration-700 rounded-full ${activeSection === idx ? 'h-12 md:h-16 bg-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.5)]' : 'h-3 bg-slate-200 group-hover:bg-slate-300'}`} />
            <span className={`text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 hidden md:block ${activeSection === idx ? 'opacity-100 text-teal-600 translate-x-0' : 'opacity-0 -translate-x-4 text-slate-300'}`}>
              {name}
            </span>
          </button>
        ))}
      </div>

      {/* Main Visual Content Stack */}
      <div className="visual-stack pointer-events-none">
        <TechnicalSection1 isActive={activeSection === 0} />
        <TechnicalSection2 isActive={activeSection === 1} />
        <VideoSection isActive={activeSection === 2} />
        <DossierSection isActive={activeSection === 3} />
        <TechnicalSection5 isActive={activeSection === 4} />
      </div>

      {/* Scroll Driver */}
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
    </div>
  );
};

const TechnicalSection1 = ({ isActive }: { isActive: boolean }) => (
  <div className={`section-layer bg-slate-50 ${isActive ? 'active' : ''} flex items-center justify-center pt-20 pb-10`}>
    <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 px-8 md:px-20">
      <div className="flex flex-col justify-center">
        <div className={`reveal-content ${isActive ? 'active' : ''}`}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 text-[9px] font-black tracking-[0.5em] uppercase mb-6 md:mb-10">Module 01: Noyau de Filtration</div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter text-slate-900">Ingénierie de<br/><span className="text-teal-500 italic">Précision.</span></h2>
          <p className="text-slate-500 text-base md:text-xl font-light max-w-lg leading-relaxed">
            Un empilement de filtration de qualité médicale conçu pour les eaux dures du Royaume. Chaque micron est optimisé pour garantir une pureté absolue.
          </p>
        </div>
      </div>
      <div className="relative h-[300px] md:h-[500px] flex items-center justify-center">
        <div className={`w-48 h-72 md:w-64 md:h-96 bg-white border border-slate-200 rounded-[3rem] md:rounded-[4rem] shadow-2xl transition-all duration-1000 ${isActive ? 'scale-100 rotate-0 opacity-100' : 'scale-75 rotate-12 opacity-0'}`}>
            <div className="absolute inset-x-0 -top-12 md:-top-16 flex flex-col items-center">
                <div className="w-32 h-20 md:w-40 md:h-24 bg-teal-500/20 rounded-2xl border-4 border-white shadow-lg flex items-center justify-center">
                   <span className="text-[9px] font-black uppercase text-teal-700">Flex-Grip</span>
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 overflow-hidden">
                <div className="grid grid-cols-4 gap-2">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)] animate-pulse" />
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
);

const TechnicalSection2 = ({ isActive }: { isActive: boolean }) => (
  <div className={`section-layer bg-white ${isActive ? 'active' : ''} flex items-center justify-center pt-20 pb-10`}>
    <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 px-8 md:px-20">
      <div className="order-2 lg:order-1 relative h-[300px] md:h-[500px] flex items-center justify-center">
        <div className={`relative transition-all duration-1000 ${isActive ? 'scale-110 opacity-100' : 'scale-75 opacity-0'}`}>
            <Shield className="w-48 h-48 md:w-64 md:h-64 text-teal-500/10" />
            <div className="absolute inset-0 flex items-center justify-center">
                <Droplets className="w-24 h-24 md:w-32 md:h-32 text-teal-500 drop-shadow-[0_0_30px_rgba(20,184,166,0.3)]" />
            </div>
        </div>
      </div>
      <div className="order-1 lg:order-2 flex flex-col justify-center">
        <div className={`reveal-content ${isActive ? 'active' : ''}`}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 text-[9px] font-black tracking-[0.5em] uppercase mb-6 md:mb-10">Unité: AMANor Nomad</div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter text-slate-900">Bouclier<br/><span className="text-slate-300">Biologique.</span></h2>
          <p className="text-slate-500 text-base md:text-xl font-light leading-relaxed mb-6 md:mb-10 max-w-lg">
            Ultra-filtration de 0,1 micron. Une barrière physique impénétrable contre 99,99% des bactéries et parasites, testée dans les conditions les plus rudes.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const VideoSection = ({ isActive }: { isActive: boolean }) => (
  <div className={`section-layer bg-slate-50 ${isActive ? 'active' : ''} flex items-center justify-center pt-20 pb-10`}>
    <div className="max-w-7xl w-full px-8 md:px-20 text-center">
      <div className={`reveal-content ${isActive ? 'active' : ''} mb-8 md:mb-12`}>
        <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 text-[9px] font-black tracking-[0.5em] uppercase mb-6">Démonstration Produit</div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-none">La Confiance <br className="md:hidden"/><span className="text-teal-500 italic">en Action.</span></h2>
      </div>

      <div className={`relative w-full max-w-4xl aspect-video mx-auto bg-black rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] transition-all duration-1000 ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
        {/* Placeholder for the Video mentioned in the doc */}
        <div className="absolute inset-0 flex items-center justify-center group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <img src="https://images.unsplash.com/photo-1517646288024-aaee039b56f1?auto=format&fit=crop&q=80&w=1200" alt="Video Placeholder" className="w-full h-full object-cover opacity-60" />
          <div className="z-20 w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-white/40">
            <Play className="w-8 h-8 md:w-12 md:h-12 text-white fill-current ml-1" />
          </div>
          <div className="absolute bottom-8 left-8 z-20 flex items-center gap-4 text-white">
            <Video className="w-5 h-5 text-teal-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Lecture: Démo Laboratoire AMANor</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DossierSection = ({ isActive }: { isActive: boolean }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const totalPages = 13;
  
  // High-fidelity slide content (Mocking PDF pages)
  const slides = [
    { title: "Introduction AMANor", desc: "La révolution de l'eau au Maroc.", color: "bg-slate-900" },
    { title: "Problématique Locale", desc: "Dureté excessive et risques sanitaires.", color: "bg-teal-900" },
    { title: "Anatomie Technique", desc: "Membranes d'ultra-filtration 0.1μm.", color: "bg-slate-800" },
    { title: "Validation Labo", desc: "Certifications et tests de pureté.", color: "bg-teal-800" },
    { title: "Étude d'Impact", desc: "Réduction des calculs rénaux.", color: "bg-slate-900" },
    { title: "Modèle Économique", desc: "Hardware + Consommables récurrents.", color: "bg-teal-700" },
    { title: "Universalité", desc: "Adaptation aux bouteilles et robinets.", color: "bg-slate-800" },
    { title: "Connectivité", desc: "IoT et suivi de la santé du filtre.", color: "bg-teal-900" },
    { title: "Impact Social", desc: "1 Acheté = 1 Donné pour le monde rural.", color: "bg-slate-900" },
    { title: "Phase Pilote", desc: "Lancement Casablanca/Marrakech.", color: "bg-teal-800" },
    { title: "L'Équipe Fondatrice", desc: "Ingénieurs École Centrale Casablanca.", color: "bg-slate-900" },
    { title: "Partenaires Industriels", desc: "Stratégie de production locale.", color: "bg-teal-700" },
    { title: "Conclusion & Vision", desc: "Une eau de source à chaque robinet.", color: "bg-slate-800" },
  ];

  useEffect(() => {
    let interval: number;
    if (isAutoPlaying && isActive) {
      interval = window.setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, isActive]);

  const handleNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const handlePrev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <div className={`section-layer bg-white ${isActive ? 'active' : ''} flex items-center justify-center pt-20 pb-10`}>
      <div className="max-w-7xl w-full px-8 md:px-20 text-center pointer-events-auto">
        <div className={`reveal-content ${isActive ? 'active' : ''} mb-8 md:mb-12`}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 text-[9px] font-black tracking-[0.5em] uppercase mb-6">Vision Stratégique</div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-none">Dossier <span className="text-slate-200">Technique.</span></h2>
          <p className="text-slate-400 text-sm md:text-lg font-light mt-4 max-w-lg mx-auto">Visualisez notre travail à travers ce carrousel immersif.</p>
        </div>

        <div className={`relative w-full max-w-4xl h-[350px] md:h-[550px] mx-auto bg-slate-50 rounded-[2rem] md:rounded-[3rem] border border-slate-200 overflow-hidden shadow-2xl group transition-all duration-1000 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {/* Flipbook / Carousel Container */}
          <div className="h-full w-full flex flex-col relative">
              {/* Slides Container */}
              <div className="flex-1 relative overflow-hidden">
                {slides.map((slide, idx) => (
                  <div 
                    key={idx}
                    className={`absolute inset-0 transition-all duration-1000 flex items-center justify-center p-12 ${
                      idx === currentPage ? 'opacity-100 translate-x-0 scale-100' : 
                      idx < currentPage ? 'opacity-0 -translate-x-full scale-95' : 'opacity-0 translate-x-full scale-95'
                    }`}
                  >
                    <div className={`w-full h-full rounded-[2rem] ${slide.color} shadow-inner flex flex-col items-center justify-center text-white p-10 relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <FileText className="w-32 h-32" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-teal-400 mb-6">AMANor Technical Paper</span>
                        <h4 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-center">{slide.title}</h4>
                        <p className="text-white/60 text-lg md:text-xl font-light text-center max-w-md">{slide.desc}</p>
                        <div className="mt-10 flex gap-1">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-12 h-1 bg-white/10 rounded-full" />
                          ))}
                        </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Bar */}
              <div className="h-20 md:h-24 bg-white/80 backdrop-blur-xl border-t border-slate-100 px-6 md:px-10 flex items-center justify-between">
                  <div className="flex items-center gap-4 md:gap-8">
                      <button 
                        onClick={handlePrev}
                        className="p-3 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-all"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      
                      <div className="flex items-center gap-4">
                          <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest tabular-nums">
                            Page {(currentPage + 1).toString().padStart(2, '0')}
                          </span>
                          <div className="w-24 md:w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-teal-500 transition-all duration-500" 
                                style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }} 
                              />
                          </div>
                          <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{totalPages}</span>
                      </div>

                      <button 
                        onClick={handleNext}
                        className="p-3 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-all"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                  </div>
                  
                  <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className={`flex items-center gap-3 px-5 md:px-8 py-2 md:py-3 rounded-full text-[9px] font-black tracking-[0.2em] uppercase transition-all active:scale-95 shadow-lg ${
                          isAutoPlaying ? 'bg-teal-500 text-white' : 'bg-slate-900 text-white hover:bg-teal-500'
                        }`}
                      >
                          {isAutoPlaying ? <Pause className="w-3 h-3 md:w-4 md:h-4" /> : <Monitor className="w-3 h-3 md:w-4 md:h-4" />}
                          <span className="hidden sm:inline">{isAutoPlaying ? 'Pause Auto' : 'Auto-Présentation'}</span>
                      </button>
                      <div className="hidden sm:flex items-center gap-4 text-slate-300">
                          <button className="hover:text-teal-600 transition-colors"><ZoomIn className="w-4 h-4" /></button>
                          <button className="hover:text-teal-600 transition-colors"><Maximize className="w-4 h-4" /></button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechnicalSection5 = ({ isActive }: { isActive: boolean }) => (
  <div className={`section-layer bg-slate-50 ${isActive ? 'active' : ''} flex items-center justify-center pt-24 pb-12 overflow-y-auto`}>
    <div className="max-w-7xl w-full px-8 md:px-20">
      <div className={`reveal-content ${isActive ? 'active' : ''} text-center mb-10 md:mb-16`}>
        <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 text-[9px] font-black tracking-[0.5em] uppercase mb-6 md:mb-8">La Carte AMANor</div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 md:mb-6 text-slate-900 leading-none">Investissez dans votre santé.<br/><span className="text-teal-500 italic">Impactez une vie.</span></h2>
        
        <div className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-white border border-teal-100 text-teal-600 rounded-full shadow-xl shadow-teal-500/5 animate-bounce mb-4 md:mb-8">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-teal-500 flex items-center justify-center text-white">
                <Heart className="w-3 h-3 md:w-4 md:h-4 fill-current" />
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.2em]">Impact Social : 1 Acheté = 1 Donné (Kit Rural)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto pb-10">
        <div className={`group relative bg-white border border-slate-200 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 shadow-2xl transition-all duration-700 hover:-translate-y-4 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-teal-500 rounded-full flex items-center justify-center text-white shadow-xl rotate-12 group-hover:rotate-0 transition-transform overflow-hidden">
             <img src="shop_home.png" alt="Home Pack" className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform" />
          </div>
          <p className="text-teal-500 text-[9px] font-black uppercase tracking-[0.4em] mb-4">Option A</p>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Home Starter Kit</h3>
          <ul className="text-slate-400 text-xs md:text-sm mb-10 md:mb-12 space-y-3 md:space-y-4 font-light">
            <li className="flex items-center gap-3"><Droplets className="w-4 h-4 text-teal-500" /> Système AMANor Home</li>
            <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-teal-500" /> + 2 Cartouches de rechange</li>
            <li className="flex items-center gap-3"><Shield className="w-4 h-4 text-teal-500" /> Garantie Vitalité 2 ans</li>
          </ul>
          
          <div className="flex items-center justify-between pt-6 md:pt-8 border-t border-slate-100">
            <div className="flex flex-col">
                <span className="text-slate-300 text-[9px] font-bold uppercase line-through">450 MAD</span>
                <span className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">299 <span className="text-base md:text-xl font-bold text-teal-500 uppercase">MAD</span></span>
            </div>
            <button className="w-12 h-12 md:w-16 md:h-16 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors shadow-2xl">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        <div className={`group relative bg-white border border-slate-200 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 shadow-2xl transition-all duration-700 hover:-translate-y-4 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 shadow-xl group-hover:bg-teal-500 group-hover:text-white transition-colors group-hover:rotate-12 overflow-hidden">
             <img src="shop_nomad.png" alt="Nomad Pack" className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform" />
          </div>
          <p className="text-teal-500 text-[9px] font-black uppercase tracking-[0.4em] mb-4">Option B</p>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Nomad Adventure</h3>
          <ul className="text-slate-400 text-xs md:text-sm mb-10 md:mb-12 space-y-3 md:space-y-4 font-light">
            <li className="flex items-center gap-3"><Droplets className="w-4 h-4 text-teal-500" /> Gourde AMANor Nomad</li>
            <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-teal-500" /> + 3 Flavor Pods (Sensation)</li>
            <li className="flex items-center gap-3"><Shield className="w-4 h-4 text-teal-500" /> Étui de transport inclus</li>
          </ul>
          
          <div className="flex items-center justify-between pt-6 md:pt-8 border-t border-slate-100">
            <div className="flex flex-col">
                <span className="text-slate-300 text-[9px] font-bold uppercase line-through">520 MAD</span>
                <span className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">349 <span className="text-base md:text-xl font-bold text-teal-500 uppercase">MAD</span></span>
            </div>
            <button className="w-12 h-12 md:w-16 md:h-16 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors shadow-2xl">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ScienceView;
