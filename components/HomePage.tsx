
import React, { useState, useRef } from 'react';

interface HomePageProps {
  onSecretEntry: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSecretEntry }) => {
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
      {/* Hero Section */}
      <div className="relative h-[75vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop" 
          alt="Premium Portrait" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white/90"></div>
        
        {/* Secret Title */}
        <div className="absolute top-10 inset-x-0 flex justify-center">
          <h1 
            onClick={handleSecretTrigger}
            className="text-[10px] tracking-[0.4em] uppercase text-white/90 bg-black/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 select-none active:scale-95 transition-all"
          >
            beautify STUDIO · 德阳
          </h1>
        </div>

        {/* Floating Slogan */}
        <div className="absolute bottom-16 left-8 animate-fade-in-up">
          <p className="text-[10px] text-gray-500 tracking-[0.3em] font-light mb-2">始于 2018</p>
          <h2 className="text-3xl font-extralight tracking-[0.2em] text-black leading-tight">
            每一刻<br/>
            都值得被温柔记录
          </h2>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="flex-1 px-8 py-12 space-y-10">
        <div className="space-y-6 text-center">
          <div className="flex justify-center items-center gap-4 text-gray-200">
            <div className="h-[0.5px] w-8 bg-current"></div>
            <span className="text-[9px] tracking-[0.5em] text-gray-400">品牌价值</span>
            <div className="h-[0.5px] w-8 bg-current"></div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-light tracking-[0.8em] text-gray-800 ml-[0.8em]">专业</h3>
            <h3 className="text-lg font-light tracking-[0.8em] text-gray-800 ml-[0.8em]">质感</h3>
            <h3 className="text-lg font-light tracking-[0.8em] text-gray-800 ml-[0.8em]">永恒</h3>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-50 text-center">
          <p className="text-[11px] text-gray-400 font-light tracking-[0.2em] leading-relaxed">
            光影是时间的画笔<br/>
            我们负责定格<br/>
            您最真实的情绪
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
