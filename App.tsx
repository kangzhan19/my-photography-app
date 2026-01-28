
import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import AlbumDetailPage from './components/AlbumDetailPage';
import AdminPage from './components/AdminPage';
import TabBar from './components/TabBar';
import { ViewType, Album } from './types';
import { DEFAULT_ALBUMS } from './constants';

const LOCAL_STORAGE_KEY = 'BEAUTIFY_ALBUMS_V1';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ViewType>('HOME');
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [showAdmin, setShowAdmin] = useState(false);

  // Load albums from localStorage or default
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        setAlbums(JSON.parse(saved));
      } catch (e) {
        setAlbums(DEFAULT_ALBUMS);
      }
    } else {
      setAlbums(DEFAULT_ALBUMS);
    }
  }, []);

  const handleTabChange = (tab: ViewType) => {
    setActiveTab(tab);
    setSelectedAlbum(null);
    setShowAdmin(false);
  };

  const handleAlbumSelect = (album: Album) => {
    setSelectedAlbum(album);
  };

  const handleBack = () => {
    setSelectedAlbum(null);
  };

  const handleUpdateAlbums = (newAlbums: Album[]) => {
    setAlbums(newAlbums);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newAlbums));
  };

  const handleReset = () => {
    if (confirm('确定要恢复默认设置吗？所有修改将丢失。')) {
      handleUpdateAlbums(DEFAULT_ALBUMS);
      alert('已重置');
    }
  };

  const enterAdminMode = () => {
    setShowAdmin(true);
    setActiveTab('ADMIN');
  };

  const exitAdminMode = () => {
    setShowAdmin(false);
    setActiveTab('HOME');
  };

  return (
    <div className="max-w-md mx-auto min-h-screen relative shadow-2xl bg-white flex flex-col hide-scrollbar">
      <main className="flex-1">
        {selectedAlbum ? (
          <AlbumDetailPage album={selectedAlbum} onBack={handleBack} />
        ) : showAdmin ? (
          <AdminPage albums={albums} onUpdateAlbums={handleUpdateAlbums} onReset={handleReset} onExit={exitAdminMode} />
        ) : (
          <>
            {activeTab === 'HOME' && <HomePage onSecretEntry={enterAdminMode} />}
            {activeTab === 'GALLERY' && <GalleryPage albums={albums} onAlbumClick={handleAlbumSelect} />}
          </>
        )}
      </main>

      {!selectedAlbum && !showAdmin && (
        <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
      )}
    </div>
  );
};

export default App;
