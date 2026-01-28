
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
      {/* Sidebar Navigation */}
      <div className="w-20 flex-shrink-0 bg-[#fafafa] border-r border-gray-50 flex flex-col pt-8">
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryId(cat.id)}
              className={`w-full py-6 text-[12px] text-center relative transition-all ${
                selectedCategoryId === cat.id 
                  ? 'text-black font-bold' 
                  : 'text-gray-400'
              }`}
            >
              {selectedCategoryId === cat.id && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-black rounded-r-full"></div>
              )}
              <span className="[writing-mode:vertical-rl] tracking-[0.3em]">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Album Grid */}
      <div className="flex-1 overflow-y-auto px-5 pt-8 bg-white">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-xl font-light tracking-[0.2em] text-black">精选作品集</h2>
            <p className="text-[9px] text-gray-300 tracking-wider mt-1 uppercase">Selected Portfolio</p>
          </div>
          <span className="text-[9px] text-gray-300 font-mono">{filteredAlbums.length} COLLECTIONS</span>
        </header>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 pb-24">
          {filteredAlbums.map(album => (
            <div 
              key={album.id} 
              onClick={() => onAlbumClick(album)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-[2px] overflow-hidden bg-gray-50">
                <img 
                  src={album.coverUrl} 
                  alt={album.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-active:bg-black/5 transition-colors"></div>
              </div>
              <h3 className="mt-3 text-[11px] font-normal text-gray-700 truncate px-0.5 tracking-wider">
                {album.title}
              </h3>
            </div>
          ))}
          {filteredAlbums.length === 0 && (
            <div className="col-span-2 py-32 text-center">
              <p className="text-xs text-gray-200 tracking-widest">暂无作品，敬请期待</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
