
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
    <div className="flex flex-col min-h-screen bg-white">
      {/* Immersive Hero Section */}
      <div className="relative h-[82vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop" 
          alt="Premium Portrait" 
          className="w-full h-full object-cover brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20"></div>
        
        {/* Navigation Overlays */}
        <div className="absolute top-12 inset-x-0 flex flex-col items-center">
          <h1 
            onClick={handleSecretTrigger}
            className="text-[13px] tracking-[0.5em] font-medium text-white drop-shadow-sm uppercase select-none active:scale-95 transition-all"
          >
            BEAUTIFY STUDIO
          </h1>
          <div className="w-8 h-[1px] bg-white/40 mt-3 animate-pulse"></div>
        </div>

        {/* Brand Text Area */}
        <div className="absolute bottom-20 left-10 right-10 flex flex-col items-start space-y-4">
          <div className="overflow-hidden">
            <h2 className="text-4xl font-extralight tracking-[0.15em] text-black leading-[1.3] animate-fade-in-up">
              光影交织<br/>
              记录最真实的你
            </h2>
          </div>
          <p className="text-[10px] text-gray-400 tracking-[0.3em] font-light uppercase animate-fade-in-up delay-100">
            Professional Photography · Since 2018
          </p>
          
          <button 
            onClick={onExplore}
            className="mt-6 px-10 py-3.5 bg-black text-white text-[10px] tracking-[0.4em] uppercase hover:bg-gray-800 transition-colors active:scale-95"
          >
            探索作品集
          </button>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="px-10 py-16 space-y-12 bg-white">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-[9px] tracking-[0.6em] text-gray-300 uppercase">Our Philosophy</div>
          <p className="text-center text-[12px] text-gray-500 font-light leading-loose tracking-[0.2em]">
            不只是摄影，更是对生活细节的凝望。<br/>
            在快门落下的瞬间，<br/>
            捕捉那些稍纵即逝的情绪与诗意。
          </p>
          <div className="grid grid-cols-3 w-full pt-8 text-center border-t border-gray-50">
            <div>
              <div className="text-lg font-light">10k+</div>
              <div className="text-[8px] text-gray-300 tracking-widest mt-1">作品总数</div>
            </div>
            <div>
              <div className="text-lg font-light">8.5</div>
              <div className="text-[8px] text-gray-300 tracking-widest mt-1">服务年限</div>
            </div>
            <div>
              <div className="text-lg font-light">99%</div>
              <div className="text-[8px] text-gray-300 tracking-widest mt-1">好评指数</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
