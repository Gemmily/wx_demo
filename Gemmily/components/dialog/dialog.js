// components/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hidden: {
      type: Boolean,
      value: true,
      // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
      observer: function (newVal, oldVal) {
        if (oldVal && this.data.dialogtype != "dialog"){
          this.hideToast();
        }
      }
    },
    title: {
      type: String,
      value: "提示",
    },
    content: {
      type: String,
      value: "这是个提示框"
    },
    dialogtype: {
      type: String,
      value: "dialog"
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    makeSure: function () {
      this.setData({
        hidden: true
      })

    },

    cancel: function () {
      this.setData({
        hidden: true
      })
    },

    hideToast: function () {
      setTimeout(() => {
        this.setData({
          hidden: true,
        })
      }, 1500)
    }
  }
})

