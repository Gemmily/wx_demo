// components/picker/picker.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    array: {
      type: Array,
      value: [0, 0, 0],
    },
    provinces: {
      type: Array,
      value: [],
    },
    cities: {
      type: Array,
      value: [],
    },
    areas: {
      type: Array,
      value: [],
    },
    title: {
      type: String,
      value: ''
    },
    isHidden: {
      type: Boolean,
      value: true,
    },



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
    _bindChange: function (e) {
      this.triggerEvent("bindChange", { e: e.detail })
    },
    hide() {
      this.setData({
        isHidden: true,
      })
    },
    show() {
      this.setData({
        isHidden: false
      })
    },
    cancel() {
      this.hide();
    },
    makeSure() {
      this.hide();
    }

  }
})
