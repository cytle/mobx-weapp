import { mobx, store } from '../../lib/logic'
import { mapActions } from '../../utils/util'
var app = getApp()

const { timerView, todos } = store
const actions = mapActions({
  addTodo: todos.add
})
Page({
  data: {
    userInfo: {},
    s: ''
  },
  //事件处理函数
  bindViewTap: function() {
    const addTodo = todos.add
    addTodo('asdasd' + this.data.s)
    // wx.navigateTo({url: '../logs/logs'})
  },
  autoData() {
    return {
      s: timerView.timer * 12,
      todos
    }
  },
  computed: {
    motto() {
      return timerView.sad + 'asd' + this.data.s
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
