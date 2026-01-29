
import React, { useMemo } from 'react';
import { CATEGORIES } from '../constants';
import { Album } from '../types';

interface GalleryPageProps {
  albums: Album[];
  onAlbumClick: (album: Album) => void;
  selectedCategoryId: string;
  onCategoryChange: (id: string) => void;
}

// 为分类添加英文副标题，增加设计感
const CATEGORY_EN_MAP: Record<string, string> = {
  '1': 'ALL WORKS',
  '2': 'PURE DESIRE',
  '3': 'STAR MOMENT',
  '4': 'ANCIENT CHARM',
  '5': 'PORTRAIT LIGHT',
  '6': 'FLOWER BIRTH',
  '7': 'BEAUTY FACE',
  '8': 'GUOCHAO NEW',
  '9': 'FASHION BURNING',
  '10': 'ID PHOTO',
  '11': 'MAN TEXTURE',
  '12': 'GALAXY TOGETHER',
  '13': 'TIME ECHO',
};

const GalleryPage: React.FC<GalleryPageProps> = ({ albums, onAlbumClick, selectedCategoryId, onCategoryChange }) => {
  const filteredAlbums = useMemo(() => {
    if (selectedCategoryId === '1') return albums;
    return albums.filter(a => a.categoryId === selectedCategoryId);
  }, [selectedCategoryId, albums]);

  return (
    <div className="flex h-screen bg-white pb-16 overflow-hidden">
      {/* Sidebar Navigation - Decorated & Premium Style */}
      <div className="w-[100px] flex-shrink-0 bg-[#fdfdfd] border-r border-black/[0.03] flex flex-col pt-6 shadow-[inset_-10px_0_20px_-15px_rgba(0,0,0,0.05)]">
        <div className="flex-1 overflow-y-auto hide-scrollbar space-y-1 py-4">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`w-full py-6 flex flex-col items-center justify-center transition-all duration-500 relative group`}
            >
              {/* Active Indicator Bar */}
              <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] transition-all duration-500 rounded-r-full ${
                selectedCategoryId === cat.id 
                  ? 'h-10 bg-black opacity-100' 
                  : 'h-0 bg-black/20 opacity-0 group-hover:h-4 group-hover:opacity-30'
              }`}></div>
              
              {/* Category Name - Vertical Chinese */}
              <span className={`text-[12px] [writing-mode:vertical-rl] tracking-[0.3em] transition-all duration-500 ${
                selectedCategoryId === cat.id 
                  ? 'text-black font-semibold transform scale-105' 
                  : 'text-gray-400 font-light hover:text-gray-600'
              }`}>
                {cat.name}
              </span>
              
              {/* English Subtitle - Horizontal Tiny Text */}
              <span className={`mt-3 text-[5px] font-serif italic tracking-tighter transition-all duration-700 whitespace-nowrap overflow-visible ${
                selectedCategoryId === cat.id 
                  ? 'text-black/40 translate-y-0 opacity-100' 
                  : 'text-transparent translate-y-2 opacity-0'
              }`}>
                {CATEGORY_EN_MAP[cat.id]}
              </span>

              {/* Decorative Dot */}
              {selectedCategoryId === cat.id && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-[2px] h-[2px] rounded-full bg-black/10"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-white">
        <header className="px-6 py-6 border-b border-gray-50 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-[14px] font-serif italic tracking-[0.1em] text-black">
              {CATEGORIES.find(c => c.id === selectedCategoryId)?.name}
            </h2>
            <div className="w-4 h-[1px] bg-black/20"></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-black/10 font-serif italic tracking-widest uppercase">Collection</span>
            <span className="text-[10px] text-gray-300 font-mono tabular-nums">
              {filteredAlbums.length.toString().padStart(2, '0')}
            </span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-6 scroll-smooth">
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 pb-32">
            {filteredAlbums.map((album, idx) => (
              <div 
                key={album.id} 
                onClick={() => onAlbumClick(album)}
                className={`group cursor-pointer transform transition-all duration-700 animate-fade-in`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] transition-shadow hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)]">
                  <img 
                    src={album.coverUrl} 
                    alt={album.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  {/* Subtle Watermark */}
                  <div className="absolute bottom-2 right-2 text-[5px] text-white/40 uppercase tracking-[0.4em] pointer-events-none transform origin-right scale-75">Beautify Studio</div>
                </div>
                <div className="mt-4 space-y-1.5 px-1">
                  <h3 className="text-[11px] font-normal text-gray-800 truncate tracking-wider">
                    {album.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-[1.5px] h-[1.5px] rounded-full bg-black/20"></div>
                      <span className="text-[7px] text-gray-400 uppercase tracking-widest leading-none">
                        {album.photos.length} Works
                      </span>
                    </div>
                    <div className="w-1.5 h-1.5 opacity-0 group-hover:opacity-20 transition-opacity">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredAlbums.length === 0 && (
              <div className="col-span-2 py-40 flex flex-col items-center justify-center">
                <div className="relative w-12 h-[1px] bg-black/5 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
                </div>
                <p className="text-[8px] tracking-[0.8em] text-black/20 uppercase font-light">Coming Soon</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
