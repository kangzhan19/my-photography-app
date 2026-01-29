
import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import AlbumDetailPage from './components/AlbumDetailPage';
import AdminPage from './components/AdminPage';
import TabBar from './components/TabBar';
import { ViewType, Album } from './types';
import { DEFAULT_ALBUMS } from './constants';

const LOCAL_STORAGE_KEY = 'BEAUTIFY_ALBUMS_V2';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ViewType>('HOME');
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [showAdmin, setShowAdmin] = useState(false);

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
    window.scrollTo({ top: 0, behavior: 'instant' });
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
    if (confirm('确定要恢复默认设置吗？')) {
      handleUpdateAlbums(DEFAULT_ALBUMS);
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
    <div className="max-w-md mx-auto min-h-screen relative bg-white flex flex-col hide-scrollbar selection:bg-black selection:text-white">
      <main className="flex-1">
        {selectedAlbum ? (
          <AlbumDetailPage album={selectedAlbum} onBack={handleBack} />
        ) : showAdmin ? (
          <AdminPage albums={albums} onUpdateAlbums={handleUpdateAlbums} onReset={handleReset} onExit={exitAdminMode} />
        ) : (
          <div className="transition-all duration-500">
            {activeTab === 'HOME' && <HomePage onSecretEntry={enterAdminMode} onExplore={() => setActiveTab('GALLERY')} />}
            {activeTab === 'GALLERY' && <GalleryPage albums={albums} onAlbumClick={handleAlbumSelect} />}
          </div>
        )}
      </main>

      {!selectedAlbum && !showAdmin && (
        <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
      )}
    </div>
  );
};

export default App;
