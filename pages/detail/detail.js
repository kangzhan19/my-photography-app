
Page({
  data: {
    album: null
  },
  onLoad(options) {
    if (options.album) {
      const album = JSON.parse(options.album);
      this.setData({ album });
      wx.setNavigationBarTitle({ title: album.title });
    }
  },
  onShareAppMessage() {
    return {
      title: '分享作品集：' + this.data.album.title,
      path: '/pages/detail/detail?album=' + JSON.stringify(this.data.album)
    };
  }
});
