
const DEFAULT_ALBUMS = [
  { id: '1', title: 'beautify风格一', categoryId: '1', coverUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600', photos: [{id:'p1', url:'https://images.unsplash.com/photo-1517841905240-472988babdf9'}] },
  { id: '2', title: 'beautify风格二', categoryId: '1', coverUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=600', photos: [{id:'p2', url:'https://images.unsplash.com/photo-1509248961158-e54f6934749c'}] }
];

Page({
  data: {
    activeTab: 'HOME',
    selectedCatId: '1',
    clickCount: 0,
    albums: [],
    filteredAlbums: [],
    categories: [
      { id: '1', name: '风格合集' }, { id: '2', name: '证件照' }, { id: '3', name: '复古系列' }, { id: '4', name: '情侣写真' }
    ],
    editingAlbum: null,
    bulkUrls: ''
  },

  onLoad() {
    let saved = wx.getStorageSync('ALBUMS');
    let albums = saved || DEFAULT_ALBUMS;
    this.setData({ albums }, () => this.filterAlbums());
  },

  switchTab(e) {
    this.setData({ activeTab: e.currentTarget.dataset.tab });
  },

  onCatSelect(e) {
    this.setData({ selectedCatId: e.currentTarget.dataset.id }, () => this.filterAlbums());
  },

  filterAlbums() {
    const { albums, selectedCatId } = this.data;
    const filtered = selectedCatId === '1' ? albums : albums.filter(a => a.categoryId === selectedCatId);
    this.setData({ filteredAlbums: filtered });
  },

  onSecretTrigger() {
    let count = this.data.clickCount + 1;
    this.setData({ clickCount: count });
    if (count >= 5) {
      this.setData({ activeTab: 'ADMIN', clickCount: 0 });
      wx.showToast({ title: '已进入后台', icon: 'none' });
    }
    setTimeout(() => this.setData({ clickCount: 0 }), 2000);
  },

  exitAdmin() {
    this.setData({ activeTab: 'HOME' });
  },

  startEdit(e) {
    this.setData({ editingAlbum: JSON.parse(JSON.stringify(e.currentTarget.dataset.album)) });
  },

  addNewAlbum() {
    const newAlbum = { id: Date.now().toString(), title: '新作品集', categoryId: '1', coverUrl: '', photos: [] };
    this.setData({ editingAlbum: newAlbum });
  },

  inputTitle(e) { this.setData({ 'editingAlbum.title': e.detail.value }); },
  inputCover(e) { this.setData({ 'editingAlbum.coverUrl': e.detail.value }); },
  inputBulkUrls(e) { this.setData({ bulkUrls: e.detail.value }); },

  saveAlbum() {
    let { albums, editingAlbum, bulkUrls } = this.data;
    if (bulkUrls.trim()) {
      const urls = bulkUrls.split('\n').filter(u => u.trim());
      const newPhotos = urls.map(url => ({ id: Math.random().toString(), url: url.trim() }));
      editingAlbum.photos = [...editingAlbum.photos, ...newPhotos];
    }
    
    let index = albums.findIndex(a => a.id === editingAlbum.id);
    if (index > -1) albums[index] = editingAlbum;
    else albums.push(editingAlbum);

    this.setData({ albums, editingAlbum: null, bulkUrls: '' }, () => {
      wx.setStorageSync('ALBUMS', albums);
      this.filterAlbums();
    });
  },

  cancelEdit() { this.setData({ editingAlbum: null }); },

  deleteAlbum(e) {
    wx.showModal({
      title: '确认删除',
      content: '确定要删除这个作品集吗？',
      success: (res) => {
        if (res.confirm) {
          let albums = this.data.albums.filter(a => a.id !== e.currentTarget.dataset.id);
          this.setData({ albums }, () => {
            wx.setStorageSync('ALBUMS', albums);
            this.filterAlbums();
          });
        }
      }
    });
  },

  goToDetail(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?album=' + JSON.stringify(e.currentTarget.dataset.album)
    });
  }
});
