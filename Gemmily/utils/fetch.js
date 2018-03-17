const URI = 'http://news-at.zhihu.com/api/4/news/';

function fetch(data){
  return new Promise((resolve, reject) => {
    wx.request({
      url: URI + data,
      data: {},
      method: 'get',
      header: { 'Content-Type': 'json' },
      success: resolve,
      fail: reject
    })
  })
}

const getDetail = data => {
  return fetch(data).then(res => res.data)
}
const getData = data => {
  return fetch('before/' + data).then(res => res.data)
}

const getSwiper = data => {
  return fetch('latest').then(res => res.data.top_stories)
}

module.exports = {
  getData: getData,
  getSwiper:getSwiper,
  getDetail: getDetail
}
