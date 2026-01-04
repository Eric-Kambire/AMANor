
import React from 'react';
import { Droplet } from 'lucide-react';
import { ViewState } from '../App';

interface NavbarProps {
  activeSection: number;
  onViewChange?: (view: ViewState, section?: number) => void;
  currentView?: ViewState;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onViewChange, currentView = 'home' }) => {
  const isDark = currentView !== 'home' || [0, 2, 3].includes(activeSection);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] px-8 md:px-20 py-4 flex justify-between items-center transition-all duration-700 ${
      isDark ? 'text-white' : 'text-slate-900'
    } ${activeSection > 0 || currentView !== 'home' ? 'bg-white/5 backdrop-blur-2xl border-b border-white/5' : 'bg-transparent'}`}>
      
      <div 
        className="flex items-center gap-2.5 cursor-pointer"
        onClick={() => onViewChange?.('home')}
      >
        <div className={`p-1.5 rounded-xl transition-all duration-700 ${isDark ? 'bg-white/10' : 'bg-teal-500/10'}`}>
          <Droplet className={`w-5 h-5 ${isDark ? 'text-white' : 'text-teal-500'}`} />
        </div>
        <span className="text-lg font-bold tracking-tight">AMANor</span>
      </div>

      <div className="hidden lg:flex items-center gap-10 text-[9px] font-black tracking-[0.2em] uppercase">
        <button 
          onClick={() => onViewChange?.('vision')}
          className={`opacity-80 hover:opacity-100 transition-opacity ${currentView === 'vision' ? 'text-cyan-400 opacity-100' : ''}`}
        >
          The Vision
        </button>
        <button 
          onClick={() => onViewChange?.('science', 0)}
          className={`opacity-80 hover:opacity-100 transition-opacity ${currentView === 'science' ? 'text-cyan-400 opacity-100' : ''}`}
        >
          Technology
        </button>
        <button 
          onClick={() => onViewChange?.('science', 3)}
          className={`opacity-80 hover:opacity-100 transition-opacity ${currentView === 'science' && activeSection === 3 ? 'text-cyan-400 opacity-100' : ''}`}
        >
          Our Work
        </button>
        <button className={`px-8 py-2.5 rounded-full border text-[10px] font-black transition-all active:scale-95 ${
          isDark 
          ? 'border-white/20 bg-white/5 hover:bg-white/10 text-white' 
          : 'border-slate-900/10 bg-slate-900/5 hover:bg-slate-900/10 text-slate-900'
        }`}>
          Reserve Early
        </button>
      </div>
      
      <button className="lg:hidden p-2">
        <div className={`w-5 h-0.5 mb-1 transition-colors ${isDark ? 'bg-white' : 'bg-slate-900'}`} />
        <div className={`w-3 h-0.5 ml-auto transition-colors ${isDark ? 'bg-white' : 'bg-slate-900'}`} />
      </button>
    </nav>
  );
};

export default Navbar;
