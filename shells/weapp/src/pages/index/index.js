//index.js
//获取应用实例
// import mobx from 'mobx'
// import timerView from 'store/timerView'
console.log('asd')
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({url: '../logs/logs'})
  },
  onLoad: function() {
    console.log('onLoad')
    // mobx.autorun(() => {
    //   console.log('asd');
    //   this.setData({
    //     motto: timerView.timer + 'asd'
    //   })
    // })
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo) {
      //更新数据
      that.setData({userInfo: userInfo})
    })
  }
})
