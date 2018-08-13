//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    ImgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    ],
    imgUrls: [
      {
        ImgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: 'XXX',
        desc: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      }, {
        ImgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: 'XXX',
        desc: 'XXXXXXXXXXXXXXX'
      }, {
        ImgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: 'XXX',
        desc: 'XXXXXXXXXXXXXX'
      }, {
        ImgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: 'XXX',
        desc: 'XXXXXXXXXXXXXXXX'
      }
    ],
    swiperIndex: 0, //这里不写第一次启动展示的时候会有问题
    swiperIndex1: 0,
    swiperIndex2: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3500,
    duration: 1000,
    
  },
  bindchange(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },
  bindchange1(e) {
    this.setData({
      swiperIndex1: e.detail.current
    })
  },
  bindchange2(e) {
    this.setData({
      swiperIndex2: e.detail.current
    })
  },
  changeTolist:function() {
    wx.navigateTo({
      url: '../list/list',
    })
  },
  changeTolist1: function () {
    wx.navigateTo({
      url: '../lista/lista',
    })
  },
  changeTolist2: function () {
    wx.navigateTo({
      url: '../listb/listb',
    })
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
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

  }

})

