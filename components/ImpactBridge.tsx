
import React from 'react';
import { ArrowUpRight, Globe } from 'lucide-react';

interface ImpactProps {
  isActive: boolean;
}

const ImpactBridge: React.FC<ImpactProps> = ({ isActive }) => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      {/* Left Side: Luxury context (Light) */}
      <div 
        className="absolute inset-0 bg-white z-10"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[15s] ease-out opacity-30"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200')`,
            transform: isActive ? 'scale(1.1) translateX(2%)' : 'scale(1) translateX(0)'
          }}
        />
        {/* Subtle darkening for better text contrast on the light side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex items-center justify-start pl-[10%] lg:pl-[15%]">
            <div className={`relative w-48 h-72 md:w-64 md:h-96 transition-all duration-1000 delay-300 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                <div className="absolute inset-0 border-[1px] border-black/5 rounded-[2.5rem] md:rounded-[3rem]" />
                <img 
                    src="https://picsum.photos/seed/amanor-luxury/600/800" 
                    alt="Luxury context" 
                    className="w-full h-full object-cover rounded-[2.5rem] md:rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
        </div>
      </div>

      {/* Right Side: Social context (Dark) */}
      <div className="absolute inset-0 bg-zinc-900 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[15s] ease-out opacity-40"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1200')`,
            transform: isActive ? 'scale(1.1) translateX(-2%)' : 'scale(1) translateX(0)'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-end pr-[10%] lg:pr-[15%]">
            <div className={`relative w-48 h-72 md:w-64 md:h-96 transition-all duration-1000 delay-500 ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                <div className="absolute inset-0 border-[1px] border-white/5 rounded-[2.5rem] md:rounded-[3rem]" />
                <img 
                    src="https://picsum.photos/seed/amanor-rural/600/800" 
                    alt="Rural context" 
                    className="w-full h-full object-cover rounded-[2.5rem] md:rounded-[3rem] shadow-2xl brightness-75 hover:brightness-100 transition-all duration-700"
                />
            </div>
        </div>
      </div>

      {/* Center localized darkening for text readability across the split */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-radial-gradient from-black/40 via-transparent to-transparent" 
           style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />

      {/* The Glow Connection */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-cyan-400/40 z-20 shadow-[0_0_50px_rgba(34,211,238,0.6)] transition-all duration-1000 ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[shimmer_3s_infinite]" />
      </div>

      {/* Central Badge */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-1000 delay-700 ${isActive ? 'scale-100 opacity-100 rotate-0' : 'scale-50 opacity-0 rotate-12'}`}>
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-2xl border border-white/30 flex flex-col items-center justify-center text-center p-4 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
            <span className="text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-widest leading-none mb-1">Buy 1.</span>
            <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-widest leading-none">Gift 1.</span>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="safe-scroll-area flex items-center justify-center p-8 z-40 relative">
        <div className="max-w-4xl text-center">
            <div className={`reveal-content stagger-1 ${isActive ? 'active' : ''}`}>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
                    One Filter.<br/>
                    <span className="text-cyan-400 italic font-light drop-shadow-[0_2px_10px_rgba(34,211,238,0.3)]">Two Worlds.</span>
                </h2>
            </div>
            
            <div className={`reveal-content stagger-2 ${isActive ? 'active' : ''}`}>
                <p className="text-white/90 text-base md:text-xl font-light max-w-xl mx-auto mb-12 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                    For every AMANor you reserve, we equip a rural family in need. Designed for comfort. <span className="text-cyan-300 font-semibold">Engineered for survival.</span>
                </p>
            </div>

            <div className={`reveal-content stagger-3 ${isActive ? 'active' : ''}`}>
                <button className="group flex items-center gap-3 mx-auto px-10 py-5 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/30 text-white rounded-full transition-all active:scale-95 shadow-xl">
                    <span className="text-xs font-black uppercase tracking-widest">See Our Impact Map</span>
                    <Globe className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
                </button>
            </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default ImpactBridge;
