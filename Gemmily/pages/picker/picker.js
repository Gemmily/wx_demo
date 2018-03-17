// pages/picker/picker.js

var cData = require('../../data/cities.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: [0, 0, 0],
    provinces: [],
    cities: [],
    areas: [],
    title:'城市选择',
    target:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = cData.cityData;
    var provinces = [];
    var cities = [];
    var areas = [];
    for (let i = 0; i < data.length; i++) {
      provinces.push(data[i].name);
      if (i == 0) {
        let cities0 = data[0].sub;
        for (let j = 0; j < cities0.length; j++) {
          cities.push(cities0[j].name);
          if (j == 0) {
            let areas0 = cities0[0].sub;
            for (let k = 0; k < areas0.length; k++) {
              areas.push(areas0[k].name)
            }
          }
        }

      }
    }
    this.setData({
      provinces: provinces,
      cities: cities,
      areas: areas,
    
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.cPicker = this.selectComponent("#cPicker");


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

  bindShowPicker() {
    this.cPicker.show();
  },
  bindChange: function (e) {
    let val = e.detail.e.value
    let current = this.data.value;
    let pData = cData.cityData[val[0]].sub;
    let cities = [];
    let areas = [];
    let value=[];

    if (val[0] != current[0]) {
      for (let i = 0; i < pData.length; i++) {
        cities.push(pData[i].name);
        if (i == 0) {
          let aData = pData[0].sub;
          for (let j = 0; j < aData.length; j++) {
            areas.push(aData[j].name);
          }
        }
      }
      value = [val[0], 0, 0]
    }else if(val[1] != current[1]){
      cities = this.data.cities;
      let aData = pData[val[1]].sub
      for (let i = 0; i < aData.length; i++){
        areas.push(aData[i].name);
      }
      value = [val[0], val[1], 0]
    }else {
      cities = this.data.cities;
      areas = this.data.areas;
      value = val
    }
  
  let t = this.data.provinces[val[0]] + "-" + cities[val[1]] + "-" + areas[val[2]]
    this.setData({
      cities: cities,
      areas: areas,
      value: value,
      target: t
    })
  }

})