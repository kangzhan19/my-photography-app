
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
      {/* Subtle Grid Overlay - Like Architect Paper */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

      {/* Top Navigation / Branding */}
      <div className="relative z-20 pt-14 px-8 flex justify-between items-baseline">
        <div className="flex flex-col gap-1">
          <h1 
            onClick={handleSecretTrigger}
            className="text-[13px] tracking-[0.8em] font-light uppercase"
          >
            BEAUTIFY
          </h1>
          <div className="w-8 h-[1px] bg-black/10 mt-1"></div>
        </div>
        <div className="text-right">
          <span className="text-[9px] tracking-[0.3em] font-light text-black/30 uppercase italic">Est. 2018</span>
        </div>
      </div>

      {/* Main Exhibition Area */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-8">
        {/* The "Frame" */}
        <div className="relative w-full max-w-[300px] aspect-[3/4] group">
          {/* External Border Decor */}
          <div className="absolute -inset-4 border border-black/[0.03] pointer-events-none"></div>
          <div className="absolute -inset-px border border-black/5 pointer-events-none"></div>
          
          {/* The Image */}
          <div className="w-full h-full overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop" 
              alt="Artistic Photography" 
              className="w-full h-full object-cover transition-transform duration-[6000ms] ease-out group-hover:scale-110"
            />
          </div>

          {/* Label Style Caption */}
          <div className="absolute -bottom-16 left-0 right-0 flex flex-col items-center">
            <h2 className="text-[14px] font-serif tracking-[0.5em] text-black/80">瞬间的永恒</h2>
            <p className="text-[8px] tracking-[0.2em] text-black/20 mt-2 uppercase">Series 01 / Minimalist Portrait</p>
          </div>
        </div>
      </div>

      {/* Middle Spacer with delicate line */}
      <div className="relative h-20 flex justify-center items-center">
         <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
      </div>

      {/* Bottom Action Area */}
      <div className="relative z-20 pb-20 px-10">
        <div className="flex flex-col items-center">
          <button 
            onClick={onExplore}
            className="group relative px-12 py-4 overflow-hidden transition-all"
          >
            {/* Minimalist Button Text */}
            <span className="relative z-10 text-[11px] tracking-[1.5em] font-light ml-[1.5em] group-hover:text-white transition-colors duration-500">
              探索全集
            </span>
            {/* Slide up fill */}
            <div className="absolute inset-0 bg-[#1a1a1a] translate-y-full group-active:translate-y-0 group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            {/* Initial thin underline */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-black/20 group-hover:w-full transition-all duration-500"></div>
          </button>
          
          {/* Collection Metadata */}
          <div className="mt-8 flex gap-4 opacity-10">
             <span className="text-[7px] font-mono tracking-widest">Nikon Z9</span>
             <span className="text-[7px] font-mono tracking-widest">85mm f/1.2</span>
             <span className="text-[7px] font-mono tracking-widest">NATURAL LIGHT</span>
          </div>
        </div>
      </div>

      {/* Floating Corner Decor */}
      <div className="absolute top-0 right-0 p-8 pointer-events-none opacity-20">
        <div className="text-[8px] font-mono [writing-mode:vertical-rl] tracking-widest text-black">
          PAGE_01 // THE_ART_OF_SEEING
        </div>
      </div>
    </div>
  );
};

export default HomePage;
