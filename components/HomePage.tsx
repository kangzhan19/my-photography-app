
import React, { useState, useRef } from 'react';

interface HomePageProps {
  onSecretEntry: () => void;
  onExplore: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSecretEntry, onExplore }) => {
  const [clickCount, setClickCount] = useState(0);
  const timerRef = useRef<number | null>(null);

  const handleSecretTrigger = () => {
    setClickCount(prev => prev + 1);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    if (clickCount + 1 >= 5) {
      onSecretEntry();
      setClickCount(0);
    } else {
      timerRef.current = window.setTimeout(() => setClickCount(0), 1000);
    }
  };

  return (
    <div className="relative h-screen w-full bg-[#f9f9f9] overflow-hidden flex flex-col font-sans text-[#1a1a1a]">
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

      {/* Top Branding */}
      <div className="relative z-20 pt-14 px-8 flex justify-between items-baseline">
        <div className="flex flex-col gap-1">
          <h1 
            onClick={handleSecretTrigger}
            className="text-[13px] tracking-[0.8em] font-light uppercase active:opacity-50 transition-opacity"
          >
            BEAUTIFY
          </h1>
          <div className="w-8 h-[1px] bg-black/10 mt-1"></div>
        </div>
        <div className="text-right">
          <span className="text-[9px] tracking-[0.3em] font-light text-black/30 uppercase italic">Since 2018</span>
        </div>
      </div>

      {/* Main Exhibition Area */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-8">
        <div className="relative w-full max-w-[280px] aspect-[3/4] group">
          <div className="absolute -inset-4 border border-black/[0.03] pointer-events-none"></div>
          <div className="w-full h-full overflow-hidden bg-white shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-black/5">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop" 
              alt="Cover Photo" 
              className="w-full h-full object-cover animate-[subtleBreath_10s_ease-in-out_infinite_alternate]"
            />
          </div>
          <style>{`
            @keyframes subtleBreath {
              from { transform: scale(1.05); }
              to { transform: scale(1); }
            }
          `}</style>

          <div className="absolute -bottom-14 left-0 right-0 flex flex-col items-center">
            <h2 className="text-[14px] font-serif tracking-[0.4em] text-black/80">瞬间的永恒</h2>
            <p className="text-[8px] tracking-[0.2em] text-black/20 mt-2 uppercase">Series 01 / Minimalist</p>
          </div>
        </div>
      </div>

      {/* Bottom Action Area - Enhanced Visibility */}
      <div className="relative z-20 pb-20 px-10 flex flex-col items-center">
        
        {/* The New CTA Button */}
        <button 
          onClick={onExplore}
          className="group relative flex items-center justify-center bg-[#1a1a1a] text-white px-10 py-4 rounded-full overflow-hidden shadow-xl active:scale-95 transition-all duration-300"
        >
          {/* Visual Glimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <span className="text-[11px] tracking-[0.8em] font-light ml-[0.8em] uppercase">
            探索全集
          </span>
          
          <svg className="w-4 h-4 ml-1 opacity-60 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Dynamic Visual Cue */}
        <div className="mt-8 flex flex-col items-center opacity-30">
           <div className="w-[1px] h-8 bg-gradient-to-b from-black to-transparent animate-[scrollIndicator_2s_infinite]"></div>
           <style>{`
             @keyframes scrollIndicator {
               0% { height: 0; opacity: 0; transform: translateY(-10px); }
               50% { height: 20px; opacity: 1; transform: translateY(0); }
               100% { height: 0; opacity: 0; transform: translateY(10px); }
             }
           `}</style>
           <span className="text-[6px] tracking-[0.4em] uppercase mt-2">Enter Gallery</span>
        </div>

        {/* Meta Info */}
        <div className="mt-6 flex gap-6 opacity-[0.08]">
           <span className="text-[7px] font-mono tracking-widest uppercase">Portfolio</span>
           <span className="text-[7px] font-mono tracking-widest uppercase">Archive</span>
           <span className="text-[7px] font-mono tracking-widest uppercase">Contact</span>
        </div>
      </div>

      {/* Floating Side Text */}
      <div className="absolute top-1/2 -right-4 -translate-y-1/2 pointer-events-none opacity-10">
        <div className="text-[8px] font-mono [writing-mode:vertical-rl] tracking-[0.5em] text-black">
          THE ART OF CAPTURING SOUL // 2025
        </div>
      </div>
    </div>
  );
};

export default HomePage;
