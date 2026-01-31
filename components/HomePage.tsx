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
    <div className="relative h-screen w-full bg-white overflow-hidden flex flex-col font-sans text-[#1a1a1a]">
      {/* 细腻背景纹理 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
      </div>

      {/* 顶部品牌 */}
      <div className="relative z-20 pt-16 px-10 flex justify-between items-start animate-fade-in">
        <div className="flex flex-col gap-2">
          <h1 
            onClick={handleSecretTrigger}
            className="text-[16px] tracking-[1em] font-light uppercase active:opacity-50 transition-opacity cursor-pointer leading-none"
          >
            BEAUTIFY
          </h1>
          <div className="w-12 h-[1px] bg-black"></div>
          <span className="text-[7px] tracking-[0.4em] text-black/30 font-mono mt-1 uppercase">DeYang Premiere Studio</span>
        </div>
        <div className="text-right">
          <span className="text-[10px] tracking-[0.2em] font-light text-black/20 italic uppercase">EST. 2018</span>
        </div>
      </div>

      {/* 主展示区 - 横屏视频展示 */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 z-20">
        <div className="relative w-full max-w-[400px] flex flex-col items-center group">
          
          {/* 视频容器：采用 aspect-video (16:9) 适配横屏视频，使用 object-contain 确保不缩放变形 */}
          <div className="relative w-full aspect-video overflow-hidden bg-black rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.12)] border border-black/5 group-hover:scale-[1.01] transition-transform duration-1000">
            <video 
              src="https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/%EA%BA%97%EA%86%85%EA%B3%86%EA%BA%91.mp4"
              className="w-full h-full object-contain"
              autoPlay 
              muted 
              loop 
              playsInline
            />
            {/* 极简玻璃遮罩层 */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
          </div>

          {/* 文字点缀 */}
          <div className="mt-12 flex flex-col items-center text-center animate-fade-in-up delay-300">
            <h2 className="text-[18px] font-serif tracking-[0.6em] text-black/90 font-medium">瞬间的永恒</h2>
            <div className="mt-4 flex items-center gap-4 opacity-20">
              <div className="w-8 h-[1px] bg-black"></div>
              <span className="text-[8px] tracking-[0.4em] font-mono uppercase">Series 01 / Cinematic</span>
              <div className="w-8 h-[1px] bg-black"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部按钮区 - 诱导点击增强 */}
      <div className="relative z-30 pb-28 px-10 flex flex-col items-center">
        
        {/* 高亮“探索全集”按钮 */}
        <button 
          onClick={onExplore}
          className="group relative flex items-center justify-center bg-black text-white w-full max-w-[280px] py-6 rounded-full overflow-hidden transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] active:scale-95 animate-pulse-slow"
        >
          {/* Shimmer 光效 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          
          {/* 底部扩散阴影补足 */}
          <div className="absolute -inset-1 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-lg"></div>

          <span className="relative z-10 text-[13px] tracking-[0.8em] font-bold ml-[0.8em] uppercase">
            探索全集
          </span>
          
          <div className="relative z-10 w-5 h-5 ml-2 group-hover:translate-x-3 transition-transform duration-500 ease-out">
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>

        {/* 动态引导 */}
        <div className="mt-12 flex flex-col items-center opacity-30 group cursor-pointer" onClick={onExplore}>
           <div className="w-[1.5px] h-8 bg-black origin-top animate-expand-line"></div>
           <span className="text-[7px] tracking-[0.6em] uppercase mt-5 font-bold text-black group-hover:tracking-[0.8em] transition-all duration-500">Enter Gallery</span>
        </div>

        <style>{`
          @keyframes expand-line {
            0%, 100% { transform: scaleY(0.4); opacity: 0.5; }
            50% { transform: scaleY(1); opacity: 1; }
          }
          .animate-expand-line {
            animation: expand-line 3s infinite ease-in-out;
          }
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); box-shadow: 0 10px 30px rgba(0,0,0,0.15); }
            50% { transform: scale(1.02); box-shadow: 0 20px 50px rgba(0,0,0,0.25); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 4s infinite ease-in-out;
          }
        `}</style>
      </div>

      {/* 竖排边栏美学文字 */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 pointer-events-none opacity-[0.05] z-10">
        <div className="text-[10px] font-serif [writing-mode:vertical-rl] tracking-[1.5em] text-black">
          THE ART OF STORYTELLING THROUGH LIGHT
        </div>
      </div>
    </div>
  );
};

export default HomePage;
