//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/dUtil.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    home:[],
    home_length:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
    
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
    
  },
  getData:function(){
    var home = util.getData("home");
    var home_data = home.data;
    this.setData({
      home:home_data,
      home_length:home_data.length
    })
  },
  bindItemTap:function(){
    wx.navigateTo({
      url: '../test/test',
    })
  },

})