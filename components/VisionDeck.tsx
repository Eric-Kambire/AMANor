
import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Pause, Download, Maximize, FileText, Volume2, Music, Sparkles } from 'lucide-react';

interface VisionDeckProps {
  onClose: () => void;
}

const VisionDeck: React.FC<VisionDeckProps> = ({ onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const slides = [
    { 
      title: "La confiance coule de source.", 
      subtitle: "Rendre sa noblesse à l'eau du robinet au Maroc.", 
      details: "Introduction au projet AMANor",
      image: "slide_1.jpg"
    },
    { 
      title: "Le paradoxe de l'eau au Maroc.", 
      subtitle: "Boire une eau saine est devenu une corvée physique et un dilemme écologique.",
      details: "Pourquoi avons-nous perdu confiance en notre robinet ?",
      image: "slide_2.jpg"
    },
    { 
      title: "Notre triple défi : Santé, Budget, Planète.", 
      subtitle: "Dureté > 35°f | 350 DH/mois | 50 000 Tonnes de plastique par an.",
      details: "Risque élevé de calculs rénaux (touche 10% de la population).",
      image: "slide_3.jpg"
    },
    { 
      title: "Notre réponse : une filtration intelligente.", 
      subtitle: "Interface Universal 'Flex-Grip' | Cartouche Multi-Couches | Indicateur Aman-Scale.",
      details: "Zéro installation de plomberie. Utilisable en 2 secondes.",
      image: "slide_4.jpg"
    },
    { 
      title: "L'écosystème AMANor : la maîtrise de l'eau.", 
      subtitle: "Home, Nomad gourd, AMANor.ma, AMANor Connect.",
      details: "Pour s'informer, calculer ses économies et piloter sa consommation.",
      image: "slide_5.jpg"
    },
    { 
      title: "Innovation majeure : la preuve de sécurité.", 
      subtitle: "Le filtre vous dit lui-même quand il est temps de le changer via Aman-Scale.",
      details: "La méfiance vient de l'incertitude. Nous y répondons par la preuve digitale.",
      image: "slide_6.jpg"
    },
    { 
      title: "Un marché de 6 millions de foyers.", 
      subtitle: "Cœur de cible : Foyers urbains dans les zones à eau très dure.",
      details: "Un besoin immédiat pour des millions de Marocains.",
      image: "slide_7.jpg"
    },
    { 
      title: "Un modèle économique vertueux.", 
      subtitle: "Modèle 'Razor-Blade' : Hardware accessible + Revenus récurrents.",
      details: "~300 DH pour le kit | Relation durable via recharges trimestrielles.",
      image: "slide_8.jpg"
    },
    { 
      title: "La seule solution qui s'adapte.", 
      subtitle: "Installation : Aucune | Portabilité : Totale | Adapté aux Bidons 5L.",
      details: "Comparé aux osmoseurs complexes ou aux carafes limitées.",
      image: "slide_9.jpg"
    },
    { 
      title: "Diviser les coûts. Protéger les familles.", 
      subtitle: "Budget divisé par 4 | Jusqu'à 200 bouteilles plastiques évitées par personne/an.",
      details: "Accès simple et fiable à une eau ramenée à une dureté idéale.",
      image: "slide_10.jpg"
    },
    { 
      title: "L'équipe qui rend la confiance possible.", 
      subtitle: "Ingénieurs de l'École Centrale Casablanca.",
      details: "Zhour Meskour, CEO | Expertise en conception produit et science des matériaux.",
      image: "slide_11.jpg"
    },
    { 
      title: "Prochaine étape : le lancement pilote.", 
      subtitle: "Phase 2 : Recherche de Partenaires Industriels.",
      details: "Partenariat industriel pour l'injection et le moulage plastique.",
      image: "slide_12.jpg"
    },
    { 
      title: "Merci.", 
      subtitle: "La confiance coule de source.",
      details: "Zhour Meskour | zhour.meskour@centrale-casablanca.ma",
      image: "slide_13.jpg"
    }
  ];

  const handleStart = () => {
    setIsStarted(true);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.error("Audio play error:", e));
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Audio play error:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[200] bg-slate-950 flex flex-col items-center justify-center p-4 md:p-8 animate-in fade-in duration-1000 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      {!isStarted ? (
        <div className="text-center max-w-2xl relative z-10 animate-in zoom-in duration-1000">
          <div className="flex justify-center mb-10">
            <div className="w-20 h-20 rounded-3xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shadow-2xl">
              <Sparkles className="w-10 h-10 text-teal-400" />
            </div>
          </div>
          <h2 className="text-teal-400 text-[10px] font-black uppercase tracking-[0.5em] mb-6">Expérience Immersive</h2>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">The <span className="text-teal-500 italic">Vision.</span></h1>
          <p className="text-slate-400 text-lg md:text-xl font-light italic mb-12 max-w-lg mx-auto">"Comprendre l'urgence. Découvrir la solution. Redéfinir l'accès à l'eau au Maroc."</p>
          <button 
            onClick={handleStart}
            className="group px-12 py-6 bg-white hover:bg-teal-400 text-slate-950 rounded-full flex items-center gap-6 mx-auto transition-all transform hover:-translate-y-2 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">Lancer la Vision</span>
            <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center group-hover:bg-white transition-colors">
                <Play className="w-4 h-4 text-white group-hover:text-teal-500 fill-current" />
            </div>
          </button>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center max-w-7xl relative z-10">
          <audio ref={audioRef} preload="auto">
            <source src="AMANor_réinvente_l_eau_du_robinet_au_Maroc.m4a" type="audio/mp4" />
          </audio>
          
          <div className="w-full flex justify-between items-center mb-6 md:mb-10 px-4">
             <div className="flex items-center gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Music className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em]">AMANor Strategy Deck</h4>
                  <p className="text-slate-500 text-[8px] uppercase font-bold tracking-widest mt-1">Séquence {currentSlide + 1} sur {slides.length}</p>
                </div>
             </div>
             <button onClick={onClose} className="group p-4 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-slate-400 hover:text-white transition-all transform hover:rotate-90">
                <X className="w-6 h-6" />
             </button>
          </div>

          <div className="relative w-full flex-1 md:aspect-video rounded-[3rem] overflow-hidden border border-white/5 bg-slate-900 shadow-[0_60px_100px_rgba(0,0,0,0.6)] group">
            {/* Background Image with Ken Burns effect */}
            <div key={currentSlide} className="absolute inset-0 transition-opacity duration-1000 animate-in fade-in">
               <img 
                src={slides[currentSlide].image} 
                className="w-full h-full object-cover opacity-50 scale-100 animate-[kenburns_20s_ease-in-out_infinite]" 
                alt={`Slide ${currentSlide + 1}`} 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            </div>

            {/* Slide Content */}
            <div key={`content-${currentSlide}`} className="absolute bottom-12 md:bottom-20 left-8 md:left-16 right-8 md:right-16 z-10 max-w-4xl animate-in slide-in-from-bottom-12 duration-1000">
                <h3 className="text-white text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-[0.9]">{slides[currentSlide].title}</h3>
                <p className="text-teal-400/80 text-lg md:text-2xl font-light leading-relaxed mb-4 max-w-2xl">{slides[currentSlide].subtitle}</p>
                <div className="h-px w-12 bg-teal-500/40 mb-4" />
                <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">{slides[currentSlide].details}</p>
            </div>

            {/* Controls */}
            <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 hover:bg-teal-400 backdrop-blur-xl rounded-full border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center hover:text-slate-950">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 hover:bg-teal-400 backdrop-blur-xl rounded-full border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center hover:text-slate-950">
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Top Progress Bar for slides */}
            <div className="absolute top-0 left-0 w-full h-1.5 flex gap-1 px-1 py-0.5 z-20">
               {slides.map((_, i) => (
                 <div key={i} className="flex-1 h-full rounded-full bg-white/5 overflow-hidden">
                    <div className={`h-full transition-all duration-1000 ${i === currentSlide ? 'bg-teal-500 w-full' : i < currentSlide ? 'bg-white/20 w-full' : 'w-0'}`} />
                 </div>
               ))}
            </div>
          </div>

          {/* Luxury Hi-Fi Control Bar */}
          <div className="mt-8 md:mt-12 w-full max-w-6xl">
            <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
                <div className="flex items-center gap-10">
                  <button onClick={togglePlay} className="w-20 h-20 rounded-full bg-white hover:bg-teal-400 flex items-center justify-center text-slate-950 transition-all transform hover:scale-110 active:scale-90 shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                    {isPlaying ? <Pause className="w-8 h-8 fill-slate-950" /> : <Play className="w-8 h-8 fill-slate-950 ml-1" />}
                  </button>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-4 text-teal-400">
                        <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Audio Master Class</span>
                    </div>
                    <div className="flex items-end gap-2 h-10">
                      {[...Array(24)].map((_, i) => (
                        <div key={i} className={`w-1 rounded-full transition-all duration-300 ${isPlaying ? 'bg-teal-500/60' : 'bg-white/10 h-1'}`}
                          style={{ 
                            height: isPlaying ? `${20 + Math.random() * 80}%` : '4px', 
                            animationDelay: `${i * 0.05}s`,
                            opacity: 1 - (i * 0.03)
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                    <button className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl border border-white/5 text-[10px] font-black uppercase tracking-widest transition-all">
                      <Download className="w-4 h-4" />
                      Executive Summary
                    </button>
                    <button className="p-5 text-slate-500 hover:text-white bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-colors">
                      <Maximize className="w-5 h-5" />
                    </button>
                </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          50% { transform: scale(1.15) translate(1%, 1%); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default VisionDeck;
