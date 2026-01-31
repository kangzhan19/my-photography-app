
import React, { useState, useRef } from 'react';

interface HomePageProps {
  onSecretEntry: () => void;
  onExplore: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSecretEntry, onExplore }) => {
  const [clickCount, setClickCount] = useState(0);
  const timerRef = useRef<number | null>(null);

  // 封面大片：铺满全屏
  const COVER_IMAGE = "https://beautifystudio-1301730494.cos.ap-guangzhou.myqcloud.com/beautify%E6%91%84%E5%BD%B1/beautify2/5%20%283%29.jpg";

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
    <div className="relative h-screen w-full overflow-hidden bg-black flex flex-col font-sans">
      
      {/* 全屏背景图 - 电影感缩放动画 */}
      <div className="absolute inset-0 z-0">
        <img 
          src={COVER_IMAGE} 
          className="w-full h-full object-cover animate-ken-burns"
          alt="Cover Masterpiece"
        />
        {/* 精细调色遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent via-50% to-black/70 pointer-events-none"></div>
        {/* 胶片颗粒纹理 */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* 顶部状态 */}
      <div className="relative z-20 pt-8 px-8 flex justify-between items-center animate-fade-in opacity-40">
        <span className="text-[6px] tracking-[0.6em] text-white font-mono uppercase">Fine Art Archive</span>
        <div className="w-6 h-[0.5px] bg-white/50"></div>
        <span className="text-[6px] tracking-[0.6em] text-white font-mono uppercase">Series 2025</span>
      </div>

      {/* 中间 LOGO 区 - 完整品牌展示 (优化间距) */}
      <div className="relative flex-1 flex flex-col items-center justify-center z-10 px-6">
        <div 
          onClick={handleSecretTrigger}
          className="flex flex-col items-center cursor-pointer active:scale-95 transition-all duration-700"
        >
          {/* 完整品牌 LOGO：beautify写真工作室 - 缩减了间距确保展示完整 */}
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-[34px] md:text-[42px] tracking-[0.5em] font-extralight text-white uppercase ml-[0.5em] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] leading-tight">
              beautify
            </h1>
            <h2 className="text-[11px] tracking-[0.8em] font-light text-white/90 ml-[0.8em] uppercase drop-shadow-lg">
              写真工作室
            </h2>
          </div>
          
          {/* 极简底部装饰：一个呼吸的焦点 */}
          <div className="mt-8 relative">
            <div className="w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
            <div className="absolute inset-0 w-1 h-1 bg-white/60 rounded-full"></div>
          </div>
        </div>

        {/* 视觉引导文案 */}
        <div className="absolute bottom-1/4 flex flex-col items-center animate-fade-in delay-500">
          <p className="text-[13px] font-serif italic text-white/80 tracking-[0.3em] font-light">捕捉灵魂深处的纯净光影</p>
        </div>
      </div>

      {/* 底部交互区 - 磨砂流光胶囊按钮 */}
      <div className="relative z-30 pb-24 px-8 flex flex-col items-center">
        
        <button 
          onClick={onExplore}
          className="group relative w-full max-w-[280px] h-[72px] flex items-center justify-center rounded-full overflow-hidden transition-all duration-700 active:scale-95 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
        >
          {/* 极致磨砂背板 */}
          <div className="absolute inset-0 bg-white/15 backdrop-blur-2xl border border-white/20 group-hover:bg-white/25 transition-all"></div>
          
          {/* 按钮内部动态流光 */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[2s] ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          
          <div className="relative z-10 flex items-center justify-center gap-4">
            <span className="text-[16px] tracking-[1.2em] font-bold text-white ml-[1.2em] uppercase">探索全集</span>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 transition-all duration-500 group-hover:translate-x-3 group-hover:bg-white text-white group-hover:text-black shadow-lg">
               <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
          </div>
        </button>

        {/* 交互提示 */}
        <div className="mt-12 flex flex-col items-center opacity-30 group cursor-pointer" onClick={onExplore}>
           <div className="relative w-[1px] h-10 bg-white/40 overflow-hidden">
              <div className="absolute top-0 w-full h-1/2 bg-white animate-scroll-line"></div>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-ken-burns {
          animation: ken-burns 30s ease-in-out infinite alternate;
        }
        
        @keyframes scroll-line {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        .animate-scroll-line {
          animation: scroll-line 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
