const app = getApp()

Page({
  data: {
  },
  onLoad: function (q) {
    this.setData({
      url: q.url,
    })
  },
  onShareAppMessage: function (res) {
    return {
      title: '套餐助手',
      path: '/pages/webview/webview?url=' + this.data.url,
    }
  },
})
