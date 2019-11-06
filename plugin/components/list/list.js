var array = [
  {
    name: "黄焖鸡米饭",
    color: '#FFA827'
  },
  {
    name: "拌面扁肉",
    color: '#AA47BC'
  },
  {
    name: "先上称称一下再说吧",
    color: '#42A5F6'
  },
  {
    name: "寿司",
    color: '#00CED1'
  },
  {
    name: "蛋炒饭",
    color: '#66BB6A'
  },
  {
    name: "兰州拉面",
    color: '#FFC928'
  },
  {
    name: "沙县小吃",
    color: '#FFA500'
  },
  {
    name: "麻辣烫",
    color: '#FF4500'
  },
  {
    name: "老坛酸菜牛肉面",
    color: '#FFB6C1'
  }
]
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  data: {
    loaction: 0,
    
  },

  /**
   * 组件的属性列表
   */
  properties: {
    showList: {
      type: Array,
      value: array
    }
  },
  methods: {
    /*
     * 公有方法
     */

    toStart: function () {
      var that = this
      //随机25-35数字
      that.setData({
        start: true
      })
      var rand = Math.random() * (35 - 25) + 25
      var int = setInterval(function () {
        console.log((that.data.loaction + 1) % 8)
        that.setData({
          loaction: ((that.data.loaction + 1) % 8)
        })
      }, 50);
      setTimeout(function () {
        clearInterval(int)
        that.setData({
          start: false
        })
      }, rand * 100);
    },
    //展示弹框
    showDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
    */
    _cancelEvent() {
      //触发取消回调
      this.triggerEvent("cancelEvent")
    },
    _confirmEvent() {
      //触发成功回调
      this.triggerEvent("confirmEvent");
    }
  }

})