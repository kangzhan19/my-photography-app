
import React from 'react';
import { ICONS } from '../constants';
import { ViewType } from '../types';

interface TabBarProps {
  activeTab: ViewType;
  onTabChange: (tab: ViewType) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 h-16 bg-white/95 backdrop-blur-xl border-t border-gray-50 flex justify-around items-center z-50 safe-area-inset-bottom">
      <button 
        onClick={() => onTabChange('HOME')}
        className={`flex flex-col items-center gap-1 transition-all duration-300 ${activeTab === 'HOME' ? 'scale-105' : 'opacity-30 grayscale'}`}
      >
        {ICONS.HOME(activeTab === 'HOME')}
        <span className="text-[10px] font-medium tracking-widest mt-0.5">首页</span>
      </button>
      <div className="h-4 w-[1px] bg-gray-100"></div>
      <button 
        onClick={() => onTabChange('GALLERY')}
        className={`flex flex-col items-center gap-1 transition-all duration-300 ${activeTab === 'GALLERY' ? 'scale-105' : 'opacity-30 grayscale'}`}
      >
        {ICONS.GALLERY(activeTab === 'GALLERY')}
        <span className="text-[10px] font-medium tracking-widest mt-0.5">作品</span>
      </button>
    </div>
  );
};

export default TabBar;
