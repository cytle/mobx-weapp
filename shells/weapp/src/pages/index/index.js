import { mobx, store } from '../../lib/logic'

var app = getApp()

Page({
  data: {
    userInfo: {},
    s: ''
  },
  //事件处理函数
  bindViewTap: function() {
    store.timerView.as()
    // wx.navigateTo({url: '../logs/logs'})
  },
  autoData() {
    return {
      s: store.timerView.timer * 12
    }
  },
  computed: {
    motto() {
      console.warn(this.data);
      console.warn(this.data.s);
      return store.timerView.sad + 'asd' + this.data.s
    }
  },
  onLoad: function() {
    console.warn(this.data);
    mobx.autorun(() => {
      this.setData(this.autoData())
    })
    for (const key in this.computed) {
      mobx.autorun(() => {
        this.setData({
          [key]: this.computed[key].call(this)
        })
      })
    }
    console.warn(this.data);
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo) {
      //更新数据
      that.setData({userInfo: userInfo})
    })
  }
})
