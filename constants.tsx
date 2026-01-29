
import React from 'react';
import { Category, Album } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: '全部作品' },
  { id: '2', name: '纯净证件' },
  { id: '3', name: '复古油画' },
  { id: '4', name: '极简肖像' },
  { id: '5', name: '情绪写真' },
  { id: '6', name: '法式浪漫' },
  { id: '7', name: '男士质感' },
  { id: '8', name: '生日贺卡' },
];

const generatePhotos = (seed: string, count: number) => 
  Array.from({ length: count }).map((_, i) => ({
    id: `${seed}-${i}`,
    url: `https://picsum.photos/seed/${seed}-${i}/1200/1800`
  }));

export const DEFAULT_ALBUMS: Album[] = [
  {
    id: 'a1',
    title: 'BEAUTIFY · 极简主义',
    categoryId: '4',
    coverUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800',
    photos: generatePhotos('portrait', 6)
  },
  {
    id: 'a2',
    title: '赫本风复古系列',
    categoryId: '3',
    coverUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800',
    photos: generatePhotos('retro', 8)
  },
  {
    id: 'a3',
    title: '2025 春季 · 氧气写真',
    categoryId: '5',
    coverUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800',
    photos: generatePhotos('fresh', 5)
  },
  {
    id: 'a4',
    title: '法式浪漫 · 塞纳河畔',
    categoryId: '6',
    coverUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800',
    photos: generatePhotos('france', 4)
  }
];

export const ICONS = {
  HOME: (active: boolean) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill={active ? "black" : "none"} viewBox="0 0 24 24" stroke="black" strokeWidth={active ? 1 : 1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18" />
    </svg>
  ),
  GALLERY: (active: boolean) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill={active ? "black" : "none"} viewBox="0 0 24 24" stroke="black" strokeWidth={active ? 1 : 1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  ),
  BACK: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
  ),
  SHARE: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
    </svg>
  ),
  PLUS: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  ),
  DELETE: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  )
};
