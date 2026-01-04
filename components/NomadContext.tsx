
import React from 'react';
import { ShieldCheck, Zap, Maximize } from 'lucide-react';

interface NomadProps {
  isActive: boolean;
}

const NomadContext: React.FC<NomadProps> = ({ isActive }) => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1500 ${isActive ? 'opacity-30' : 'opacity-0'}`}
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1489493512598-d08130f49bea?auto=format&fit=crop&q=80&w=2000')` }}
      />

      <div className="safe-scroll-area flex items-center justify-center p-8">
        <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <div className="reveal-content stagger-1">
              <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[8px] font-black tracking-[0.3em] uppercase">
                Endurance Tested
              </div>
              <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tighter leading-tight">
                Your <span className="font-bold italic text-teal-400">Travel Shield.</span>
              </h2>
              <p className="text-white/40 text-base font-light mb-10 leading-relaxed max-w-lg">
                From the High Atlas to the Sahara, AMANor ensures purity. Designed to fit standard 5L bottles found throughout Morocco.
              </p>
            </div>

            <div className="space-y-6 reveal-content stagger-2">
              <FeatureRow icon={ShieldCheck} title="99.9% Bacteria Blocked" desc="Medical grade ultra-filtration." />
              <FeatureRow icon={Zap} title="Instant Flow" desc="Pure water at the speed of thought." />
              <FeatureRow icon={Maximize} title="Universal Fit" desc="Connects to taps, tanks, or bottles." />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center reveal-content stagger-3">
            <div className="relative w-full max-w-sm group">
              <div className="absolute -inset-10 bg-teal-500/5 blur-[80px] rounded-full group-hover:bg-teal-500/10 transition-all duration-1000" />
              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-4 rounded-[3rem] shadow-2xl overflow-hidden">
                 <img 
                   src="https://picsum.photos/seed/amanor-travel/800/1000" 
                   alt="AMANor usage" 
                   className={`w-full aspect-[4/5] object-cover rounded-[2rem] transition-all duration-1000 ${isActive ? 'grayscale-0' : 'grayscale'}`}
                 />
                 <div className="pt-4 flex justify-between items-center text-white/20">
                    <span className="text-[8px] uppercase font-black tracking-widest">Serial: AMANor-X1</span>
                    <span className="text-[8px] uppercase font-black tracking-widest italic">Agafay, MA</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureRow = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="flex gap-6 items-start group">
    <div className="p-3 rounded-2xl bg-white/5 text-teal-400 border border-white/10 group-hover:bg-teal-500 group-hover:text-white transition-all duration-500 shrink-0">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="text-white font-bold text-base mb-0.5">{title}</h4>
      <p className="text-white/30 text-xs font-medium">{desc}</p>
    </div>
  </div>
);

export default NomadContext;
