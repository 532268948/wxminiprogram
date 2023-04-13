// pages/goods/detail/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner_images: [
      'https://t7.baidu.com/it/u=2235283139,2108773862&fm=193&f=GIF',
      'https://t7.baidu.com/it/u=3881051708,1318727812&fm=193&f=GIF',
      'https://picnew12.photophoto.cn/20180708/gousheyingtupiangouxiezhenbizhi-30235020_1.jpg',
    ],
    goods_cover: 'https://img.zcool.cn/community/01983b6183421511013f22cf713959.jpg@1280w_1l_2o_100sh.jpg',
    goods_color_covers: ['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F10%2F20210610232327_c1b93.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683877564&t=f986e8282cd58aa52d1009d03a7623eb', 'https://c-ssl.dtstatic.com/uploads/blog/202112/02/20211202113803_9ba69.thumb.1000_0.png', 'https://img.zcool.cn/community/01983b6183421511013f22cf713959.jpg@1280w_1l_2o_100sh.jpg',
    ],
    goods_detail_images: ['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F10%2F20210610232327_c1b93.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683877564&t=f986e8282cd58aa52d1009d03a7623eb', 'https://c-ssl.dtstatic.com/uploads/blog/202112/02/20211202113803_9ba69.thumb.1000_0.png', 'https://img.zcool.cn/community/01983b6183421511013f22cf713959.jpg@1280w_1l_2o_100sh.jpg',
    ],
    currentBannerIndex: 0,
    currentColorIndex: 0,
    normalColor: "hsla(0, 0%, 0%, 0.08)",
    selectColor: "hsla(350, 85%, 43%, 1)",
    goods_params_five: [
      {
        key: '材料',
        value: '10%大豆纤维90%聚酯纤维10%大豆纤维90%聚酯纤维'
      }, {
        key: '年份',
        value: '2021年'
      }, {
        key: '季节',
        value: '四季'
      }, {
        key: '风格',
        value: '运动风，学院风，小清新'
      }, {
        key: '鞋帮',
        value: '低帮'
      }, {
        key: '材料',
        value: '10%大豆纤维90%聚酯纤维10%大豆纤维90%聚酯纤维'
      },
    ],
    goods_params: [
      {
        key: '材料',
        value: '10%大豆纤维90%聚酯纤维10%大豆纤维90%聚酯纤维'
      }, {
        key: '年份',
        value: '2021年'
      }, {
        key: '季节',
        value: '四季'
      }, {
        key: '风格',
        value: '运动风，学院风，小清新'
      }, {
        key: '鞋帮',
        value: '低帮'
      }, {
        key: '产地',
        value: '乌克兰'
      }
    ],
    goods_params_show_all: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  /**
   * 当前banner page变化
   */
  onBannerCurrentPageChange: function (e) {
    this.setData({
      currentBannerIndex: e.detail.current
    })
  },

  onColorClick: function (e) {
    this.setData({
      currentColorIndex: e.currentTarget.dataset['index']
    })
  },

  onGoodsParamsShowAll: function (e) {
    this.setData({
      goods_params_show_all: true
    })
  },

  onGoodsParamsHide: function (e) {
    this.setData({
      goods_params_show_all: false
    })
  }

})