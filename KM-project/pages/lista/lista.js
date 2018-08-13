// pages/list/list.js
const app = getApp();

Page({
  data: {
    ImgUrla: 'https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074__340.jpg',
    ImgUrlb: 'https://cdn.pixabay.com/photo/2015/05/15/14/50/concert-768722__340.jpg',
    ImgUrlc: 'https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074__340.jpg',

    ImgUrls: [
      {
        ImgUrl: '../../content/images/list/sample.jpg',
        title: 'XXX',
        desc: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      }, {
        ImgUrl: 'https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074__340.jpg',
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
    ImgUrls1: [
      {
        ImgUrl: '../../content/images/list/sample.jpg',
        title: '2222',
        desc: '2222222222222222222222222222222222222222222222222222222222'
      }, {
        ImgUrl: 'https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074__340.jpg',
        title: '2222',
        desc: '2222222222222222222222222222222222222222222222222222222222'
      }, {
        ImgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: '222222',
        desc: '2222222222222222222222222222222222222222222222222222222222'
      }, {
        ImgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: '222222',
        desc: '2222222222222222222222222222222222222222222222222222222222'
      }
    ],
    // tab切换    
    currentTab: 0,

  },
  swichNav: function (e) {
    console.log(e);
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },
  swiperChange: function (e) {
    console.log(e);
    this.setData({
      currentTab: e.detail.current,
    })
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载 

  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成  
  },
  onShow: function () {
    // 生命周期函数--监听页面显示  
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏  
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载  
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作  
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数  
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享  
    return {
      title: 'title', // 分享标题  
      desc: 'desc', // 分享描述  
      path: 'path' // 分享路径  
    }
  },

}) 