
import React from 'react';
import { ICONS } from '../constants';
import { ViewType } from '../types';

interface TabBarProps {
  activeTab: ViewType;
  onTabChange: (tab: ViewType) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 h-20 bg-white/80 backdrop-blur-2xl border-t border-gray-100/50 flex justify-center items-center z-50 safe-area-inset-bottom shadow-[0_-10px_40px_rgba(0,0,0,0.04)]">
      {/* 居中容器，通过 gap 控制两个按钮的间距 */}
      <div className="flex items-center gap-16 relative">
        
        {/* 首页按钮 */}
        <button 
          onClick={() => onTabChange('HOME')}
          className={`flex flex-col items-center gap-1.5 transition-all duration-500 ease-out ${
            activeTab === 'HOME' 
              ? 'scale-110 translate-y-[-2px]' 
              : 'opacity-20 grayscale hover:opacity-40'
          }`}
        >
          <div className="transition-transform duration-500">
            {ICONS.HOME(activeTab === 'HOME')}
          </div>
          <span className={`text-[11px] tracking-[0.2em] transition-colors ${
            activeTab === 'HOME' ? 'font-bold text-black' : 'font-light text-gray-500'
          }`}>
            首页
          </span>
          {/* 选中底部横线指示 */}
          {activeTab === 'HOME' && (
            <div className="absolute -bottom-3 w-4 h-[1.5px] bg-black rounded-full animate-fade-in"></div>
          )}
        </button>

        {/* 视觉分割点 - 增加设计感 */}
        <div className="w-1 h-1 bg-black/10 rounded-full"></div>

        {/* 作品按钮 */}
        <button 
          onClick={() => onTabChange('GALLERY')}
          className={`flex flex-col items-center gap-1.5 transition-all duration-500 ease-out ${
            activeTab === 'GALLERY' 
              ? 'scale-110 translate-y-[-2px]' 
              : 'opacity-20 grayscale hover:opacity-40'
          }`}
        >
          <div className="transition-transform duration-500">
            {ICONS.GALLERY(activeTab === 'GALLERY')}
          </div>
          <span className={`text-[11px] tracking-[0.2em] transition-colors ${
            activeTab === 'GALLERY' ? 'font-bold text-black' : 'font-light text-gray-500'
          }`}>
            作品
          </span>
          {/* 选中底部横线指示 */}
          {activeTab === 'GALLERY' && (
            <div className="absolute -bottom-3 w-4 h-[1.5px] bg-black rounded-full animate-fade-in"></div>
          )}
        </button>
      </div>
    </div>
  );
};

export default TabBar;
