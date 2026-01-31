
import React, { useMemo } from 'react';
import { CATEGORIES } from '../constants';
import { Album } from '../types';

interface GalleryPageProps {
  albums: Album[];
  onAlbumClick: (album: Album) => void;
  selectedCategoryId: string;
  onCategoryChange: (id: string) => void;
}

// 对应 ID 的专用小图标设计
const CATEGORY_ICON_MAP: Record<string, React.ReactNode> = {
  '1': <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>, // 全部
  '2': <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>, // 纯漾
  '3': <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, // 星芒
  '4': <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M5.6 18.4L18.4 5.6"/></svg>, // 古意
  '5': <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="8" r="5"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/></svg>, // 肖像
  '6': <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7c2.5-2.5 5-2.5 5 0s-2.5 5-5 5-5-2.5-5-5 2.5-2.5 5 0z"/></svg>, // 生日
  '7': <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>, // 繁花
  '8': <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>, // 国潮
  '12': <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>, // 星河
};

const GalleryPage: React.FC<GalleryPageProps> = ({ albums, onAlbumClick, selectedCategoryId, onCategoryChange }) => {
  const filteredAlbums = useMemo(() => {
    if (selectedCategoryId === '1') return albums;
    return albums.filter(a => a.categoryId === selectedCategoryId);
  }, [selectedCategoryId, albums]);

  return (
    <div className="flex min-h-screen bg-white pb-24">
      {/* 强化版侧边栏 - 宽度调优，增强可见性 */}
      <div className="w-[68px] flex-shrink-0 bg-[#f7f7f7] border-r border-gray-200 flex flex-col pt-12 sticky top-0 h-screen overflow-y-auto hide-scrollbar">
        <div className="flex flex-col items-center">
          {CATEGORIES.map((cat, idx) => {
            const isActive = selectedCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  onCategoryChange(cat.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full py-7 flex flex-col items-center justify-center transition-all duration-300 relative group ${
                  isActive ? 'bg-white shadow-[inset_-4px_0_10px_rgba(0,0,0,0.02)]' : 'hover:bg-black/[0.02]'
                }`}
              >
                {/* 状态指示线：加厚至 3px，更清晰 */}
                <div 
                  className={`absolute left-0 w-[3px] bg-black rounded-r-full transition-all duration-500 ease-in-out ${
                    isActive ? 'h-12 opacity-100' : 'h-0 opacity-0'
                  }`}
                />
                
                {/* 辅助图标：解决纯文字不显眼的问题 */}
                <div className={`mb-3 transition-all duration-300 ${
                  isActive ? 'text-black scale-110' : 'text-gray-400 group-hover:text-gray-600'
                }`}>
                  {CATEGORY_ICON_MAP[cat.id] || <div className="w-1.5 h-1.5 rounded-full border border-current" />}
                </div>

                {/* 分类文字：提高对比度 */}
                <span className={`text-[12px] [writing-mode:vertical-rl] tracking-[0.4em] transition-all duration-300 ${
                  isActive 
                    ? 'text-black font-bold' 
                    : 'text-gray-500 group-hover:text-gray-700'
                }`}>
                  {cat.name}
                </span>

                {/* 极小点缀 - 提示还有更多细节 */}
                {isActive && (
                  <div className="mt-2 w-[2px] h-[2px] bg-black/40 rounded-full animate-pulse"></div>
                )}
              </button>
            );
          })}
        </div>
        
        {/* 底部装饰占位 */}
        <div className="mt-auto py-10 flex flex-col items-center opacity-10">
           <div className="w-[1px] h-10 bg-black"></div>
           <span className="text-[7px] [writing-mode:vertical-rl] tracking-widest mt-4">PAGE BOTTOM</span>
        </div>
        <div className="h-20 flex-shrink-0" />
      </div>

      {/* 主展示区 */}
      <div className="flex-1 flex flex-col bg-white">
        <header className="px-6 py-10 flex justify-between items-end border-b border-gray-50">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[9px] font-mono tracking-[0.4em] text-black/30 uppercase">Selection</span>
              <div className="flex-1 w-8 h-[1px] bg-black/5"></div>
            </div>
            <h2 className="text-2xl font-serif tracking-tight text-gray-900 leading-none">
              {CATEGORIES.find(c => c.id === selectedCategoryId)?.name}
            </h2>
          </div>
          <div className="flex flex-col items-end">
             <span className="text-[28px] font-serif italic text-black/[0.04] leading-none mb-1">
               {CATEGORIES.findIndex(c => c.id === selectedCategoryId) + 1 < 10 ? '0' : ''}
               {CATEGORIES.findIndex(c => c.id === selectedCategoryId) + 1}
             </span>
             <span className="text-[7px] tracking-widest text-black/20 uppercase font-mono">Series Index</span>
          </div>
        </header>

        <div className="px-5 py-8">
          <div className="grid grid-cols-2 gap-x-5 gap-y-12">
            {filteredAlbums.map((album, idx) => (
              <div 
                key={album.id} 
                onClick={() => onAlbumClick(album)}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="relative aspect-[3/4.4] overflow-hidden bg-[#fdfdfd] rounded-3xl shadow-[0_15px_35px_-12px_rgba(0,0,0,0.08)] transition-all duration-700 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] group-hover:-translate-y-1 border border-gray-50">
                  <img 
                    src={album.coverUrl} 
                    alt={album.title} 
                    className="w-full h-full object-cover transition-transform duration-[3s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle glass effect label */}
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md px-2 py-1 rounded-full border border-white/30">
                    <span className="text-[7px] text-white font-mono tracking-tighter">HD VIEW</span>
                  </div>
                </div>
                
                <div className="mt-5 px-1 space-y-1.5">
                  <h3 className="text-[12px] font-bold text-gray-900 tracking-wider">
                    {album.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono text-black/40">
                      {album.photos.length.toString().padStart(2, '0')} P
                    </span>
                    <div className="w-4 h-[1px] bg-black/10"></div>
                    <span className="text-[8px] font-light tracking-widest uppercase text-black/30">Style Archive</span>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredAlbums.length === 0 && (
              <div className="col-span-2 py-48 flex flex-col items-center justify-center">
                <div className="w-12 h-12 border border-gray-100 rounded-full flex items-center justify-center animate-spin duration-[3000ms] mb-6">
                   <div className="w-1 h-1 bg-black rounded-full"></div>
                </div>
                <p className="text-[10px] tracking-[0.6em] uppercase font-light text-gray-300">Synchronizing Archive</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
