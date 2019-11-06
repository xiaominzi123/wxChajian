var plugin = requirePlugin("myPlugin")
var objList = require('../../util/data.js')
Page({
  data: {
    // showList: objList[2].awards,
    // title: objList[2].option,
    // tId: objList[2].id,
    // loaction: 0,
    selectArray: [],
    // chooseId: 1,
    arr: objList[0].awards,//默认选择2
    chooseArray: [
      {
        id: 1,
        // src: 'http://www.chinadce.com/img/wx/zhuanfa.png',
        text: "步数日历1"
      },
      {
        id: 2,
        // src: '',
        text: "步数日历2"
      },
      {
        id: 3,
        // src: 'http://www.chinadce.com/img/wx/zhuanfa.png',
        text: "不不不"
      },
      {
        id: 4,
        // src: 'http://www.chinadce.com/img/wx/zhuanfa.png',
        text: "步数日历"
      },
      {
        id: 5,
        // src: 'http://www.chinadce.com/img/wx/zhuanfa.png',
        text: "步数日历"
      }
    ],
    choosewordColor:'red',
    noChoosewordColor: 'blue',
    // chooseBj:"",
    // noChooseBj: "",
    viewWidth: "200rpx",
    viewHeight: "120rpx",

  },
  onLoad: function() {
    var that = this
    plugin.getData()     ///     别忘了
    for (var i = 0; i < objList.length; i++) {
      objList[i]['text'] = objList[i]['option']
    }
    this.setData({
      selectArray: objList
    })
    console.log(that.data.selectArray)
  },
  toFunction: function (e) {
    console.log(e.detail)
    var mId = e.detail.mId
    this.setData({   // chooseArray选中项ID
      mId: mId
    })
  },
  getDate: function (e) {
    console.log(e.detail)
    var id = e.detail.id
    this.setData({
      showList: objList[id].awards,
      arr: objList[id].awards
    })
  },
})