Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:'hi-gemmily',
    num:0,
    array:[{text:'text_0'}],
    object:{text: 'object_0'},
  },
  changeText:function(){
    var tutil = require('../../utils/tutil.js');
    this.setData({
      text: tutil.changeData(this.data.text),
    })
  },
  changeNum:function(){
    this.data.num = 1;
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray:function(){
    this.setData({
      'array[0].text':'changed data'
    })
  },
  changeItemInObject:function(){
    this.setData({
      'object.text':'change data'
    })
  },
  addNewField:function(){
    this.setData({
      'newFiled.text':'new data'
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var appInstance = getApp();
    this.setData({
      text: appInstance.testData
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})