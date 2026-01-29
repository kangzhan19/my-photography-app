
import React, { useState } from 'react';
import { Album, Photo } from '../types';
import { CATEGORIES, ICONS } from '../constants';

interface AdminPageProps {
  albums: Album[];
  onUpdateAlbums: (albums: Album[]) => void;
  onReset: () => void;
  onExit: () => void;
}

const AdminPage: React.FC<AdminPageProps> = ({ albums, onUpdateAlbums, onReset, onExit }) => {
  const [editingAlbum, setEditingAlbum] = useState<Album | null>(null);
  const [bulkUrls, setBulkUrls] = useState("");

  const handleAddAlbum = () => {
    const newAlbum: Album = {
      id: `a-${Date.now()}`,
      title: '新作品集',
      categoryId: CATEGORIES[1].id,
      coverUrl: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=600&auto=format&fit=crop',
      photos: []
    };
    onUpdateAlbums([...albums, newAlbum]);
    setEditingAlbum(newAlbum);
  };

  const handleDeleteAlbum = (id: string) => {
    if (confirm('确定删除该作品集吗？')) {
      onUpdateAlbums(albums.filter(a => a.id !== id));
    }
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingAlbum) return;

    let finalPhotos = [...editingAlbum.photos];
    if (bulkUrls.trim()) {
      const urls = bulkUrls.split(/[\n,]+/).map(u => u.trim()).filter(u => u);
      const newPhotos: Photo[] = urls.map((url, idx) => ({
        id: `p-${Date.now()}-${idx}`,
        url
      }));
      finalPhotos = [...finalPhotos, ...newPhotos];
    }

    const updated = albums.map(a => 
      a.id === editingAlbum.id ? { ...editingAlbum, photos: finalPhotos } : a
    );
    onUpdateAlbums(updated);
    setEditingAlbum(null);
    setBulkUrls("");
  };

  const removePhoto = (photoId: string) => {
    if (!editingAlbum) return;
    setEditingAlbum({
      ...editingAlbum,
      photos: editingAlbum.photos.filter(p => p.id !== photoId)
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-20 p-4 font-sans">
      <div className="flex justify-between items-start mb-6">
        <div>
          <button onClick={onExit} className="text-gray-400 text-[10px] mb-1 flex items-center gap-1 uppercase tracking-widest">
            {ICONS.BACK} Exit
          </button>
          <h1 className="text-2xl font-serif tracking-tight text-gray-900">内容管理</h1>
        </div>
        <button 
          onClick={onReset}
          className="text-[10px] text-gray-400 border border-gray-200 px-3 py-1.5 rounded-full"
        >
          重置默认
        </button>
      </div>

      {!editingAlbum ? (
        <div className="space-y-4">
          <button 
            onClick={handleAddAlbum}
            className="w-full bg-black text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-medium shadow-lg"
          >
            {ICONS.PLUS}
            <span className="text-sm tracking-widest">添加作品集</span>
          </button>

          <div className="grid grid-cols-1 gap-3">
            {albums.map(album => (
              <div key={album.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <img src={album.coverUrl} className="w-12 h-16 object-cover rounded-lg" alt="" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-gray-900 truncate">{album.title}</h3>
                  <p className="text-[10px] text-gray-400 mt-1">
                    {CATEGORIES.find(c => c.id === album.categoryId)?.name} · {album.photos.length}张
                  </p>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => setEditingAlbum(album)} className="p-2 text-gray-400 hover:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  </button>
                  <button onClick={() => handleDeleteAlbum(album.id)} className="p-2 text-gray-300 hover:text-red-500">
                    {ICONS.DELETE}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-serif italic text-lg">编辑作品集</h2>
            <button onClick={() => setEditingAlbum(null)} className="text-gray-400">×</button>
          </div>
          
          <form onSubmit={handleSaveEdit} className="space-y-5">
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">标题</label>
              <input 
                type="text" 
                value={editingAlbum.title}
                onChange={e => setEditingAlbum({...editingAlbum, title: e.target.value})}
                className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">封面链接</label>
                  <input 
                    type="text" 
                    value={editingAlbum.coverUrl}
                    onChange={e => setEditingAlbum({...editingAlbum, coverUrl: e.target.value})}
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">分类</label>
                  <select 
                    value={editingAlbum.categoryId}
                    onChange={e => setEditingAlbum({...editingAlbum, categoryId: e.target.value})}
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 text-xs"
                  >
                    {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
            </div>

            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">批量导入内页图 (一行一个URL)</label>
              <textarea 
                placeholder="粘贴图片链接..."
                value={bulkUrls}
                onChange={e => setBulkUrls(e.target.value)}
                rows={4}
                className="w-full bg-gray-50 border-none rounded-2xl p-4 text-xs font-mono"
              />
            </div>

            <div className="grid grid-cols-5 gap-2 max-h-40 overflow-y-auto bg-gray-50 p-2 rounded-2xl">
              {editingAlbum.photos.map(p => (
                <div key={p.id} className="relative aspect-square">
                  <img src={p.url} className="w-full h-full object-cover rounded-lg" alt="" />
                  <button 
                    type="button"
                    onClick={() => removePhoto(p.id)}
                    className="absolute -top-1 -right-1 bg-black text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px]"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <button type="submit" className="w-full bg-black text-white py-4 rounded-2xl font-bold text-sm shadow-xl active:scale-[0.98] transition-all">
              保存并应用
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
