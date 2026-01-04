
import React, { useState, useEffect } from 'react';
import { Plane, X } from 'lucide-react';

const LocationBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[120] max-w-[calc(100vw-3rem)] md:max-w-sm animate-in slide-in-from-left duration-700">
      <div className="bg-slate-900 text-white p-5 rounded-3xl shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-2 opacity-50 hover:opacity-100 cursor-pointer" onClick={() => setVisible(false)}>
          <X className="w-4 h-4" />
        </div>
        
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center shrink-0">
            <Plane className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />
          </div>
          <div>
            <h5 className="font-bold text-xs md:text-sm">Visiting Morocco?</h5>
            <p className="text-[10px] md:text-xs text-slate-400 mt-1 leading-tight">
              Pre-order now and have your AMANor delivered to your Hotel in Casablanca or Marrakech.
            </p>
          </div>
        </div>
        
        <div className="mt-4 flex gap-2">
          <button 
            onClick={() => {
              const el = document.getElementById('preorder');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-1 bg-white text-slate-900 text-[10px] font-bold py-2 rounded-xl hover:bg-teal-50 transition-colors"
          >
            Learn More
          </button>
          <button className="flex-1 bg-slate-800 text-white text-[10px] font-bold py-2 rounded-xl hover:bg-slate-700 transition-colors">
            Our Cities
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationBanner;
