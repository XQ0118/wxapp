//text.js
//获取应用实例
const app = getApp()
Page({

  data: {
    imgUrls: [
       {
        ImgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: 'XXX',
        desc: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      },{
        ImgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: 'XXX',
        desc: 'XXXXXXXXXXXXXXX'
      },{
        ImgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: 'XXX',
        desc: 'XXXXXXXXXXXXXX'
      },{
        ImgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: 'XXX',
        desc: 'XXXXXXXXXXXXXXXX'
      }
    ],
    swiperIndex: 0 //这里不写第一次启动展示的时候会有问题
  },
  words: [{ message: '微信小程序', viewid: '1', time: '2017-01-09 8:00:00', money: 'hello' },
  { message: '微信小程序', viewid: '2', time: '2017-01-09 8:00:00', money: 'hello' },
  { message: '微信小程序', viewid: '3', time: '2017-01-09 8:00:00', money: 'hello' },
  { message: '微信小程序', viewid: '4', time: '2017-01-09 8:00:00', money: 'hello' },
  { message: '微信小程序', viewid: '5', time: '2017-01-09 8:00:00', money: 'hello' },
  { message: '微信小程序', viewid: '6', time: '2017-01-09 8:00:00', money: 'hello' },
  { message: '微信小程序', viewid: '7', time: '2017-01-09 8:00:00', money: 'hello' },
  { message: '微信小程序', viewid: '8', time: '2017-01-09 8:00:00', money: 'hello' },
  { message: '微信小程序', viewid: '9', time: '2017-01-09 8:00:00', money: 'hello' }],
  
  bindchange(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },
  containerTap: function (res) {
    console.log(res.touches[0]);
    var x = res.touches[0].pageX;
    var y = res.touches[0].pageY + 85;
    this.setData({
      rippleStyle: ''
    });
    this.setData({
      rippleStyle: 'top:' + y + 'px;left:' + x + 'px;-webkit-animation: ripple 0.4s linear;animation:ripple 0.4s linear;'
    });
  }
})