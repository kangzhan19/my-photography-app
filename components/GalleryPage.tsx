
import React, { useMemo } from 'react';
import { CATEGORIES } from '../constants';
import { Album } from '../types';

interface GalleryPageProps {
  albums: Album[];
  onAlbumClick: (album: Album) => void;
  selectedCategoryId: string;
  onCategoryChange: (id: string) => void;
}

// 为分类添加英文副标题，增加国际化高级感
const CATEGORY_EN_MAP: Record<string, string> = {
  '1': 'ALL WORKS',
  '2': 'PURE',
  '3': 'STARRY',
  '4': 'ANCIENT',
  '5': 'LIGHT',
  '6': 'BIRTHDAY',
  '7': 'FACE',
  '8': 'CHIC',
  '9': 'TREND',
  '10': 'ID',
  '11': 'MAN',
  '12': 'GALAXY',
  '13': 'ECHO',
};

const GalleryPage: React.FC<GalleryPageProps> = ({ albums, onAlbumClick, selectedCategoryId, onCategoryChange }) => {
  const filteredAlbums = useMemo(() => {
    if (selectedCategoryId === '1') return albums;
    return albums.filter(a => a.categoryId === selectedCategoryId);
  }, [selectedCategoryId, albums]);

  return (
    <div className="flex min-h-screen bg-[#FDFDFD] pb-24">
      {/* Sidebar Navigation - Now part of global scroll */}
      <div className="w-[85px] flex-shrink-0 bg-gray-50/50 border-r border-gray-100 flex flex-col pt-6 shadow-[inset_-1px_0_0_rgba(0,0,0,0.05)]">
        <div className="px-2 space-y-4">
          {CATEGORIES.map(cat => {
            const isActive = selectedCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  onCategoryChange(cat.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full py-6 flex flex-col items-center justify-center transition-all duration-300 rounded-[20px] relative group ${
                  isActive 
                    ? 'bg-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] scale-100 ring-1 ring-black/5' 
                    : 'bg-transparent scale-90 hover:scale-95 opacity-40 hover:opacity-100'
                }`}
              >
                {/* Active Indicator Dot */}
                {isActive && (
                  <div className="absolute top-2 w-1 h-1 bg-black rounded-full animate-pulse"></div>
                )}
                
                {/* Category Text - Vertical & Refined */}
                <span className={`text-[12px] [writing-mode:vertical-rl] tracking-[0.35em] transition-all duration-300 font-medium ${
                  isActive ? 'text-black' : 'text-gray-400'
                }`}>
                  {cat.name}
                </span>

                {/* English Tag */}
                <div className={`mt-2 transition-all duration-500 overflow-hidden ${isActive ? 'max-h-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                   <span className="text-[5px] font-mono text-black/20 uppercase tracking-tighter">
                     {CATEGORY_EN_MAP[cat.id]}
                   </span>
                </div>

                {/* Hover Glow Effect */}
                {!isActive && (
                   <div className="absolute inset-0 bg-black/[0.02] rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area - Synchronized Scroll */}
      <div className="flex-1 flex flex-col bg-white">
        <header className="px-6 py-6 border-b border-gray-50 flex justify-between items-end bg-white">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <span className="text-[10px] font-mono tracking-widest text-black/20 uppercase">Category</span>
            </div>
            <h2 className="text-lg font-serif tracking-tight text-gray-900 leading-none">
              {CATEGORIES.find(c => c.id === selectedCategoryId)?.name}
            </h2>
          </div>
          <div className="text-right flex flex-col items-end">
             <span className="text-[20px] font-serif italic text-black/5 leading-none">#{CATEGORIES.findIndex(c => c.id === selectedCategoryId) + 1}</span>
             <span className="text-[8px] font-mono tracking-widest text-black/30 uppercase mt-1">{CATEGORY_EN_MAP[selectedCategoryId]} SERIES</span>
          </div>
        </header>

        <div className="px-5 py-6">
          <div className="grid grid-cols-2 gap-x-5 gap-y-12">
            {filteredAlbums.map((album, idx) => (
              <div 
                key={album.id} 
                onClick={() => onAlbumClick(album)}
                className={`group cursor-pointer transform transition-all duration-700 animate-fade-in`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative aspect-[3/4.2] overflow-hidden bg-gray-50 rounded-[24px] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:shadow-[0_25px_55px_-12px_rgba(0,0,0,0.15)] group-hover:-translate-y-2">
                  <img 
                    src={album.coverUrl} 
                    alt={album.title} 
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Overlay Info */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-2 group-hover:translate-y-0">
                     <span className="text-[7px] text-white/60 bg-white/10 backdrop-blur-md px-2 py-1 rounded-full uppercase tracking-widest font-light">Beautify Studio</span>
                  </div>
                </div>
                
                <div className="mt-5 space-y-1 px-2">
                  <h3 className="text-[12px] font-medium text-gray-900 truncate tracking-wide">
                    {album.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-[1px] h-3 bg-black/10"></div>
                      <span className="text-[9px] text-gray-400 font-mono tracking-tighter">
                        {album.photos.length.toString().padStart(2, '0')} PHOTOS
                      </span>
                    </div>
                    <div className="w-5 h-5 rounded-full border border-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-2.5 h-2.5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredAlbums.length === 0 && (
              <div className="col-span-2 py-40 flex flex-col items-center justify-center">
                <div className="w-10 h-10 border border-black/5 rounded-full flex items-center justify-center mb-6">
                  <div className="w-1.5 h-1.5 bg-black/10 rounded-full animate-ping"></div>
                </div>
                <p className="text-[9px] tracking-[0.6em] text-black/30 uppercase font-light">Curating Content</p>
                <p className="text-[7px] tracking-[0.2em] text-black/10 mt-2">COMING SOON TO GALLERY</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
