
import React, { useState } from 'react';
import Countdown from './Countdown';
import { Mail, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

interface PreOrderProps {
  isActive: boolean;
}

const PreOrderZone: React.FC<PreOrderProps> = ({ isActive }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="w-full h-full bg-white">
      <div className="safe-scroll-area flex items-center justify-center p-8">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="reveal-content stagger-1">
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tighter leading-none">
              Limited <span className="text-teal-500 italic font-light">Early Bird.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-sm font-light">
              Join the waitlist for the AMANor Founders Edition. Only 500 units available.
            </p>
            
            <div className="bg-slate-50 p-6 md:p-10 rounded-[2.5rem] border border-slate-100 mb-10">
              <h4 className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Reservation Closing</h4>
              <Countdown targetDate={new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)} />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-500 font-medium text-sm">
                <CheckCircle className="w-5 h-5 text-teal-500" />
                <span>Full AMANor System + Universal Adapter</span>
              </div>
              <div className="flex items-center gap-4 text-slate-500 font-medium text-sm">
                <CheckCircle className="w-5 h-5 text-teal-500" />
                <span>3 Infusion Pods included</span>
              </div>
            </div>
          </div>

          <div className="relative reveal-content stagger-2">
            <div className="relative bg-white border border-slate-100 p-8 md:p-12 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.05)]">
              {submitted ? (
                <div className="text-center py-12 animate-in fade-in zoom-in duration-700">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/20">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">On the list!</h3>
                  <p className="text-slate-400 text-sm">Details sent to your inbox.</p>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="text-teal-500 text-[8px] font-black uppercase tracking-widest mb-2">Founders Price</p>
                      <div className="flex items-end gap-2">
                        <span className="text-4xl font-bold text-slate-900 tracking-tighter">299 MAD</span>
                        <span className="text-slate-200 line-through text-lg italic">450 MAD</span>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-[9px] font-black uppercase tracking-widest">
                      SAVE 33%
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="group relative">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-teal-500 transition-colors" />
                      <input 
                        type="email" 
                        required
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/5 focus:border-teal-500 transition-all text-base"
                      />
                    </div>
                    <div className="group relative">
                      <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-teal-500 transition-colors" />
                      <input 
                        type="text" 
                        placeholder="Arrival Date (Optional)"
                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/5 focus:border-teal-500 transition-all text-base"
                      />
                    </div>
                    
                    <button className="w-full group flex items-center justify-center gap-2 py-5 bg-slate-900 hover:bg-slate-800 text-white font-black tracking-widest uppercase text-xs rounded-2xl shadow-xl transition-all active:scale-[0.98]">
                      SECURE MY AMANor
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PreOrderZone;
