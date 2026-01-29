
import React, { useState, useMemo } from 'react';
import { CATEGORIES } from '../constants';
import { Album } from '../types';

interface GalleryPageProps {
  albums: Album[];
  onAlbumClick: (album: Album) => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ albums, onAlbumClick }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(CATEGORIES[0].id);

  const filteredAlbums = useMemo(() => {
    if (selectedCategoryId === '1') return albums;
    return albums.filter(a => a.categoryId === selectedCategoryId);
  }, [selectedCategoryId, albums]);

  return (
    <div className="flex h-screen bg-white pb-16 overflow-hidden">
      {/* Sidebar Navigation - Classic WeChat Style */}
      <div className="w-[88px] flex-shrink-0 bg-[#F7F7F7] border-r border-gray-100 flex flex-col pt-8">
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryId(cat.id)}
              className={`w-full py-5 text-center transition-all duration-300 relative ${
                selectedCategoryId === cat.id 
                  ? 'bg-white text-black font-medium' 
                  : 'text-gray-400 font-light'
              }`}
            >
              {selectedCategoryId === cat.id && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-black"></div>
              )}
              <span className="text-[12px] [writing-mode:vertical-rl] tracking-[0.2em]">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-white">
        <header className="px-6 py-6 border-b border-gray-50 flex justify-between items-center bg-white/80 backdrop-blur-md">
          <h2 className="text-[15px] font-medium tracking-[0.1em] text-black">
            {CATEGORIES.find(c => c.id === selectedCategoryId)?.name}
          </h2>
          <span className="text-[10px] text-gray-300 font-mono tracking-tighter">
            {filteredAlbums.length.toString().padStart(2, '0')} SERIES
          </span>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-6 scroll-smooth">
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 pb-32">
            {filteredAlbums.map((album, idx) => (
              <div 
                key={album.id} 
                onClick={() => onAlbumClick(album)}
                className={`group cursor-pointer transform transition-all duration-700 animate-fade-in`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 shadow-sm border border-gray-50">
                  <img 
                    src={album.coverUrl} 
                    alt={album.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle Watermark */}
                  <div className="absolute bottom-2 right-2 text-[6px] text-white/30 uppercase tracking-[0.2em]">Beautify Studio</div>
                </div>
                <div className="mt-3 space-y-1">
                  <h3 className="text-[11px] font-normal text-gray-800 truncate tracking-wide">
                    {album.title}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-gray-200"></div>
                    <span className="text-[8px] text-gray-300 uppercase tracking-widest">{album.photos.length} Photos</span>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredAlbums.length === 0 && (
              <div className="col-span-2 py-40 flex flex-col items-center justify-center opacity-20">
                <div className="w-10 h-[1px] bg-black mb-4"></div>
                <p className="text-[10px] tracking-[0.5em] text-black">COMING SOON</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
