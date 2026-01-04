
import React from 'react';
import { Play } from 'lucide-react';

interface HeroProps {
  isActive: boolean;
  onOpenScience?: () => void;
  onOpenVision?: () => void;
}

const Hero: React.FC<HeroProps> = ({ isActive, onOpenScience, onOpenVision }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-linear ${isActive ? 'scale-110' : 'scale-100'}`}
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=2000')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
      </div>

      <div className="safe-scroll-area flex items-center justify-center p-8">
        <div className="relative z-10 max-w-4xl text-center">
          <div className="reveal-content stagger-1 flex justify-center">
            <button 
              onClick={onOpenVision}
              className="flex items-center gap-3 px-5 py-2 mb-8 rounded-full bg-white/10 hover:bg-teal-500/20 backdrop-blur-md border border-white/20 text-white text-[9px] font-black tracking-[0.3em] uppercase transition-all hover:scale-105 active:scale-95"
            >
              <Play className="w-3 h-3 fill-white" />
              Watch The Vision
            </button>
          </div>
          
          <div className="reveal-content stagger-2">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tighter mb-6 leading-tight">
              AMANor. <span className="font-semibold italic text-teal-400">Confidence.</span>
            </h1>
          </div>

          <div className="reveal-content stagger-3">
            <p className="text-base md:text-lg text-white/60 font-light max-w-xl mx-auto mb-10 leading-relaxed">
              Transforming Moroccan tap water into safe, mineral-rich, and delicious hydration for the conscious traveler. 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto px-10 py-4 bg-teal-500 hover:bg-teal-400 text-white rounded-full font-bold text-xs tracking-widest uppercase transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-teal-500/20">
                Pre-Order Now
              </button>
              <button 
                onClick={onOpenScience}
                className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white border border-white/20 rounded-full font-bold text-xs tracking-widest uppercase transition-all active:scale-95"
              >
                The Technology
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
