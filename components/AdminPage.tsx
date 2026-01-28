
import React, { useState } from 'react';
import { Album, Category, Photo } from '../types';
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
      categoryId: CATEGORIES[0].id,
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

    // Process bulk URLs
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
    <div className="min-h-screen bg-gray-50 pb-20 p-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <button onClick={onExit} className="text-gray-400 text-xs mb-1 flex items-center">
            {ICONS.BACK} 返回客户模式
          </button>
          <h1 className="text-xl font-bold">后台管理 <span className="text-xs font-normal text-gray-400">开发者模式</span></h1>
        </div>
        <button 
          onClick={onReset}
          className="text-xs text-red-500 border border-red-200 px-2 py-1 rounded"
        >
          重置默认
        </button>
      </div>

      {!editingAlbum ? (
        <div className="space-y-4">
          <button 
            onClick={handleAddAlbum}
            className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 font-medium"
          >
            {ICONS.PLUS}
            创建新作品集
          </button>

          <div className="grid grid-cols-1 gap-3">
            {albums.map(album => (
              <div key={album.id} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                <img src={album.coverUrl} className="w-16 h-16 object-cover rounded-lg" alt="" />
                <div className="flex-1">
                  <h3 className="text-sm font-bold">{album.title}</h3>
                  <p className="text-[10px] text-gray-400">
                    {CATEGORIES.find(c => c.id === album.categoryId)?.name} · {album.photos.length}张照片
                  </p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setEditingAlbum(album)} className="p-2 text-gray-500 hover:text-black">
                    编辑
                  </button>
                  <button onClick={() => handleDeleteAlbum(album.id)} className="p-2 text-red-400">
                    {ICONS.DELETE}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold">编辑作品集</h2>
            <button onClick={() => setEditingAlbum(null)} className="text-gray-400">取消</button>
          </div>
          
          <form onSubmit={handleSaveEdit} className="space-y-4">
            <div>
              <label className="text-xs text-gray-400 block mb-1">标题</label>
              <input 
                type="text" 
                value={editingAlbum.title}
                onChange={e => setEditingAlbum({...editingAlbum, title: e.target.value})}
                className="w-full bg-gray-50 border-none rounded-lg p-3 text-sm"
              />
            </div>
            
            <div>
              <label className="text-xs text-gray-400 block mb-1">封面图地址</label>
              <input 
                type="text" 
                value={editingAlbum.coverUrl}
                onChange={e => setEditingAlbum({...editingAlbum, coverUrl: e.target.value})}
                className="w-full bg-gray-50 border-none rounded-lg p-3 text-sm"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 block mb-1">分类</label>
              <select 
                value={editingAlbum.categoryId}
                onChange={e => setEditingAlbum({...editingAlbum, categoryId: e.target.value})}
                className="w-full bg-gray-50 border-none rounded-lg p-3 text-sm"
              >
                {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-400 block mb-1">批量更换/增加照片 (每行一个URL)</label>
              <textarea 
                placeholder="https://example.com/photo1.jpg&#10;https://example.com/photo2.jpg"
                value={bulkUrls}
                onChange={e => setBulkUrls(e.target.value)}
                rows={4}
                className="w-full bg-gray-50 border-none rounded-lg p-3 text-sm font-mono"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 block mb-1">当前照片 ({editingAlbum.photos.length})</label>
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto bg-gray-50 p-2 rounded-lg">
                {editingAlbum.photos.map(p => (
                  <div key={p.id} className="relative w-12 h-12">
                    <img src={p.url} className="w-full h-full object-cover rounded" alt="" />
                    <button 
                      type="button"
                      onClick={() => removePhoto(p.id)}
                      className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-bold">
              确认修改
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
