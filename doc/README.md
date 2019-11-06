欢迎大家使用幸运转盘1小插件。
插件包含多个自定义组件
    自定义组件1：下拉选择框
    使用方法：
      xml中
        <select prop-array='{{selectArray}}'  bind:myget='getDate'/>
      json中
        "usingComponents": {
          "select": "plugin://myPlugin/select"
        }
      js中：
        selectArray格式：
                        { id: 0,
                          option: '真心话大冒险？',
                          awards: []}
        getDate:方法可更改数据（可选）


    自定义组件2：随机转盘
    使用方法：
      xml中
        <list showList="{{arr}}"/>
      json中
        "usingComponents": {
          "list": "plugin://myPlugin/list",
        }
      js中：
        selectArray格式：
                        [
                          {
                            name: "啦啦啦",//内容
                            color: '#EE534F'//背景色
                          },
                          ...
                        ]



      自定义组件3：横向滚动视图，可设置单元的宽，选中单元样式与未选中单元样式不同，可设定字体颜色、背景颜色、下划线颜色。
        chooseArray: {
      
          type: Array,
        },
        //循环的数组，格式如下
            {
              id: 1,   //ID
              src: 'http://www.chinadce.com/img/wx/zhuanfa.png', // 单元上的小图标
              text: "步数日历1" //单元文字内容
            },



        viewWidth: { //设置小单元的宽（请输入数值加单位，默认是250rpx；）
          type: String,
          value: '250rpx'
        },
        viewHeight: {//设置小单元的高（请输入数值加单位，默认是150rpx；）
          type: String,
          value: '150rpx'
        },
        choosewordColor: { //设置被选择的小单元的字体颜色（请默认是red；）
          type: String,
          value: 'red'
        },
        noChoosewordColor: { //设置未被选择的小单元的字体颜色（请默认是#000；）
          type: String,
          value: '#000'
        },
        chooseBj: { //设置被选择的小单元的背景颜色（请默认无；）
          type: String,
          value: ''
        },
        noChooseBj: {//设置未被选择的小单元的背景颜色（请默认无；）
          type: String,
          value: ''
        },
        borderRightStyle: {//设置小单元右边框，边框默认无 ；）
          type: String,
          value: ''
        },
        borderBottomStyle: {//设置小单元下边框，边框默认有 ,边框样式0.5px solid #fff；）
          type: String,
          value: '2px solid #f00'
        },

        需要修改以上那个属性就在《select、》标签中添加该属性及中自定义值。
        <choose chooseArray='{{chooseArray}}' choosewordColor="{{choosewordColor}}" noChoosewordColor="{{noChoosewordColor}}"  viewWidth="{{viewWidth}}" viewHeight="{{viewHeight}}"/>

        js中：
            toFunction: function (e) {
              console.log(e.detail)
              var mId = e.detail.mId
              this.setData({   
                mId: mId       // chooseArray选中项ID，后面需要时，直接使用
              })
            },
      
  使用具体步骤：

  app.json中  
  "plugins": {
    "myPlugin": {
      "version": "dev",  // 版本号
      "provider": "wx966faa0d7a308228"  //插件appId
    }
  }, 

  index.json中
  "usingComponents": {
    "list": "plugin://myPlugin/list",   // 三个组件用哪个加哪个就行
    "select": "plugin://myPlugin/select",
    "choose": "plugin://myPlugin/choose"
  }

  index.js中：
  var plugin = requirePlugin("myPlugin")
  //需要的变量自己添加值就行
  onLoad: function() {
    var that = this
    plugin.getData() 
  }
  
  index.wxml
  <choose bind:myget='toFunction' chooseArray='{{chooseArray}}'  viewWidth="{{viewWidth}}" viewHeight="{{viewHeight}}"/>
  <select prop-array='{{selectArray}}'  bind:myget='getDate'/>
  <list showList="{{arr}}"/>



