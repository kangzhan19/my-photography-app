
import React, { useEffect, useState } from 'react';
import { Album } from '../types';
import { ICONS } from '../constants';

interface AlbumDetailPageProps {
  album: Album;
  onBack: () => void;
}

const AlbumDetailPage: React.FC<AlbumDetailPageProps> = ({ album, onBack }) => {
  const [isWechat, setIsWechat] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ua = navigator.userAgent.toLowerCase();
    setIsWechat(ua.indexOf('micromessenger') !== -1);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Beautify摄影 - ${album.title}`,
        text: '为您推荐极致质感的摄影作品集',
        url: window.location.href
      }).catch(console.log);
    } else {
      // 降级处理：复制链接
      const el = document.createElement('textarea');
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      alert('链接已复制，可直接发送给好友');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="fixed top-0 inset-x-0 h-14 bg-white/80 backdrop-blur-xl border-b border-gray-50 flex items-center justify-between px-4 z-[100]">
        <button onClick={onBack} className="p-2 -ml-2 text-black active:scale-90 transition-transform">
          {ICONS.BACK}
        </button>
        <span className="text-[11px] font-medium tracking-[0.2em] uppercase truncate max-w-[200px]">
          {album.title}
        </span>
        <button onClick={handleShare} className="p-2 -mr-2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </button>
      </div>

      {/* Photo Stream */}
      <div className="pt-14 pb-32">
        {album.photos.length > 0 ? (
          album.photos.map((photo, index) => (
            <div key={photo.id} className="w-full relative overflow-hidden bg-gray-50 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <img 
                src={photo.url} 
                alt={`Photo ${index + 1}`} 
                className="w-full block"
                loading={index < 2 ? "eager" : "lazy"}
              />
              <div className="absolute bottom-4 right-4 text-[8px] text-white/20 tracking-widest pointer-events-none">
                © BEAUTIFY STUDIO
              </div>
            </div>
          ))
        ) : (
          <div className="py-40 text-center opacity-20 flex flex-col items-center">
            <div className="w-8 h-[1px] bg-black mb-4"></div>
            <p className="text-[10px] tracking-widest">NO IMAGES FOUND</p>
          </div>
        )}
      </div>

      {/* Bottom Tool Bar */}
      <div className="fixed bottom-6 inset-x-6 h-14 bg-black/90 text-white rounded-full flex items-center px-6 shadow-2xl backdrop-blur-md z-[101]">
        <button 
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-2 text-[10px] font-light tracking-[0.2em]"
        >
          {ICONS.SHARE}
          <span>推荐作品</span>
        </button>
        <div className="w-[1px] h-4 bg-white/10"></div>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex-1 flex items-center justify-center gap-2 text-[10px] font-light tracking-[0.2em]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 10.5L12 3m0 0l7.5-7.5M12 3v18" />
          </svg>
          <span>回到顶部</span>
        </button>
      </div>

      {isWechat && (
        <div className="fixed top-2 right-4 z-[110] animate-bounce pointer-events-none">
           <div className="bg-black/80 text-white text-[9px] px-3 py-1.5 rounded-lg flex items-center gap-2">
              <span>点击右上角可在浏览器打开</span>
              <svg className="w-3 h-3 rotate-[-45deg]" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
           </div>
        </div>
      )}
    </div>
  );
};

export default AlbumDetailPage;
