var fetch = require('../../utils/fetch.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: [],
    hidden: false,
    swipers: [],
    date: '20180314',
    isMore: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fetch.getSwiper()
      .then(res => {
        this.setData({ swipers: res })
      }
      )
    this.getData(this.data.date);
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
    this.setData({
      hidden: false
    })
    this.getData("20180314");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var date = this.data.date;
    if (date == '20180301') {
      this.setData({ isMore: false })
    } else {
      fetch.getData(date)
        .then(res => {
          var list = this.data.news;
          this.setData({ news: list.concat(res.stories), date: res.date })
        })
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getData: function (date) {
    fetch.getData(date)
      .then(res => {
        this.setData({ news: res.stories, hidden: true, date: res.date })
      })
  }


})