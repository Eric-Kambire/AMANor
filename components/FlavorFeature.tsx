
import React from 'react';
import { Citrus, Wind, Droplets } from 'lucide-react';

interface FeatureProps {
  isActive: boolean;
}

const FlavorFeature: React.FC<FeatureProps> = ({ isActive }) => {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row items-stretch">
      <div className="w-full lg:w-1/2 min-h-[40vh] lg:h-full relative flex items-center justify-center bg-slate-50 p-8">
        <div className={`relative w-full max-w-sm aspect-square rounded-[4rem] bg-white shadow-xl flex items-center justify-center transition-all duration-1000 transform ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
          
          <div className="absolute top-1/4 left-1/4 animate-bounce delay-100">
            <Citrus className="w-12 h-12 text-yellow-500/60" />
          </div>
          <div className="absolute bottom-1/4 right-1/4 animate-bounce delay-500">
            <Wind className="w-12 h-12 text-teal-500/60" />
          </div>
          
          <div className="z-10 flex flex-col items-center">
            <div className="w-28 h-56 bg-slate-50 rounded-[2rem] border-4 border-white shadow-lg relative overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-teal-500/10 to-transparent" />
              <div className={`absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-yellow-400 rounded-2xl shadow-md transition-all duration-1000 delay-700 ${isActive ? 'translate-y-4 rotate-12' : '-translate-y-full opacity-0'}`} />
            </div>
            <p className="mt-6 text-slate-400 text-[8px] font-black uppercase tracking-[0.4em]">AMANor X Series</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 min-h-[60vh] lg:h-full flex items-center justify-center p-8 md:p-16 bg-white overflow-y-auto pt-24 lg:pt-8">
        <div className="max-w-md">
          <div className="reveal-content stagger-1">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tighter">
              Safe isn't <span className="text-teal-500 italic font-light">Boring.</span>
            </h2>
          </div>
          
          <div className="reveal-content stagger-2">
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Missing the taste of home? Snap on our <strong>Flavor Pods</strong> and turn secure water into spa-quality hydration instantly.
            </p>
          </div>
          
          <div className="space-y-4 reveal-content stagger-3">
            {[
              { icon: Droplets, title: "1-Click Snap", text: "Organic essence release system", color: "bg-blue-50 text-blue-500" },
              { icon: Citrus, title: "Natural Infusion", text: "Zero calories, pure taste", color: "bg-yellow-50 text-yellow-500" },
              { icon: Wind, title: "Moroccan Mint", text: "Authentic laboratory refined", color: "bg-teal-50 text-teal-500" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-center group cursor-default">
                <div className={`p-3 rounded-2xl ${item.color} group-hover:scale-105 transition-transform shadow-sm`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                  <p className="text-[10px] text-slate-400 font-medium">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlavorFeature;
