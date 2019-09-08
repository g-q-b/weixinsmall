Page({  
    data: {  
        navLeftItems: ['人气top', '大师咖啡', '小鹿茶', '瑞纳冰', '经典饮品', 'Boss午餐', '健康轻食','幸运小食','周边潮品'],  
        navRightItems: [],  
        curNav: 1,  
        curIndex: 0,
        imgUrls: [
          'http://img4.imgtn.bdimg.com/it/u=371896910,36195632&fm=26&gp=0.jpg',
          'http://img3.imgtn.bdimg.com/it/u=2268906454,1806307733&fm=26&gp=0.jpg',
          'http://img4.imgtn.bdimg.com/it/u=2065225944,2906732768&fm=26&gp=0.jpg'
        ],
        indicatorDots: false,
        autoplay: true,
        interval: 5000,
        duration: 1000  
    },  
    onLoad: function() {  
        // 加载的使用进行网络访问，把需要的数据设置到data数据对象  
        var that = this          
        wx.request({  
          url: 'https://douban.uieee.com/v2/movie/top250',  
            data: {start:0,count:3},  
            header: {  
                'content-type': 'json'   
            },  
            success: function(res) {  
              console.log(res.data.subjects )  
                that.setData({  
                    // navLeftItems: res.data,  
                    navRightItems: res.data.subjects  
                })  
            }  
        })  
    },  
  
    //事件处理函数  
    switchRightTab: function(e) {  
        // 获取item项的id，和数组的下标值  
        // let id = e.target.dataset.id,  
           let index = parseInt(e.target.dataset.index);  
        // 把点击到的某一项，设为当前index  
        this.setData({  
            // curNav: id,  
            curIndex: index  
        })  
    }  
  
})  