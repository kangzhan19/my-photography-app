
import React, { useEffect } from 'react';
import { Album } from '../types';
import { ICONS } from '../constants';

interface AlbumDetailPageProps {
  album: Album;
  onBack: () => void;
}

const AlbumDetailPage: React.FC<AlbumDetailPageProps> = ({ album, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: album.title,
        text: '查看 beautify摄影 的最新作品集',
        url: window.location.href
      }).catch(console.log);
    } else {
      alert('已复制分享链接到剪贴板');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="fixed top-0 inset-x-0 h-14 bg-white/80 backdrop-blur-xl border-b border-gray-50 flex items-center justify-between px-4 z-[100]">
        <button onClick={onBack} className="p-2 -ml-2 text-black active:scale-90 transition-transform">
          {ICONS.BACK}
        </button>
        <span className="text-xs font-medium tracking-[0.2em] uppercase truncate max-w-[200px]">
          {album.title}
        </span>
        <div className="w-10"></div> {/* Spacer for symmetry */}
      </div>

      {/* Photo Stream */}
      <div className="pt-14 pb-24">
        {album.photos.map((photo, index) => (
          <div key={photo.id} className="w-full relative overflow-hidden bg-gray-50">
            <img 
              src={photo.url} 
              alt={`Photo ${index + 1}`} 
              className="w-full block"
              loading={index < 2 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Bottom Tool Bar */}
      <div className="fixed bottom-6 inset-x-6 h-14 bg-black/90 text-white rounded-full flex items-center px-6 shadow-2xl backdrop-blur-md z-[101]">
        <button 
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-2 text-[11px] font-light tracking-widest"
        >
          {ICONS.SHARE}
          <span>分享好友</span>
        </button>
        <div className="w-[1px] h-4 bg-white/20"></div>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex-1 flex items-center justify-center gap-2 text-[11px] font-light tracking-widest"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
          </svg>
          <span>回到顶部</span>
        </button>
      </div>
    </div>
  );
};

export default AlbumDetailPage;
