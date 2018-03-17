
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: [{
      "name": "选择器",
      "img": "../../images/follow.png",
      "url":"../picker/picker"
    }, {
      "name": "提示框",
      "img": "../../images/manuscript.png",
      "url": "../dialog/dialog"
    }, {
      "name": "倒计时",
      "img": "../../images/history.png",
      "url": "../countDown/countDown"
    }, {
      "name": "上拉菜单",
       "img": "../../images/star.png",
       "url": "../actionSheet/actionSheet"
    }],
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
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

})