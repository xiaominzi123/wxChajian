// plugin/components/choose.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    chooseArray: {
      type: Array,
    },
    viewWidth: {
      type: String,
      value: '250rpx'
    },
    viewHeight: {
      type: String,
      value: '150rpx'
    },
    choosewordColor: {
      type: String,
      value: 'red'
    },
    noChoosewordColor: {
      type: String,
      value: '#000'
    },
    chooseBj: {
      type: String,
      value: ''
    },
    noChooseBj: {
      type: String,
      value: ''
    },
    borderRightStyle: {
      type: String,
      value: '0.5px solid #fff'
    },
    borderBottomStyle: {
      type: String,
      value: '2px solid #f00'
    },

  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectShow: false,//初始option不显示
    nowText: "请选择",//初始内容
    animationData: {},//右边箭头的动画
    mId: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toFunction:function (e){
      this.setData({
        mId: e.detail.target.id
      })
      console.log(e)
      var nowDate = {
        mId: e.detail.target.id,
      }
      this.triggerEvent('myget', nowDate)
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
