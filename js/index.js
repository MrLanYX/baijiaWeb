window.onload = function () {
    var main = new Vue({
        el: "#main",
        data: {
            num: '1',
            adv: { flag: true, data: 5, time: '' },
            search: '',
            bottom: [
                { icon: '&#xe821;', noicon: '&#xe822;', uname: '首页', flag: true },
                { icon: '&#xe833;', noicon: '&#xe834;', uname: '分类', flag: false },
                { icon: '&#xe649;', noicon: '&#xe603;', uname: '购物车', flag: false },
                { icon: '&#xe823;', noicon: '&#xe824;', uname: '我的', flag: false },
            ],
            nav: [
                { flag: true, uname: '为您推荐' },
                { flag: false, uname: '内衣配饰' },
                { flag: false, uname: '珠宝配饰' },
                { flag: false, uname: '户外运动' },
                { flag: false, uname: '女装' },
                { flag: false, uname: '家装' },
                { flag: false, uname: '鞋靴' },
                { flag: false, uname: '男装' },
                { flag: false, uname: '人群偏爱' },
                { flag: false, uname: '手机数码' },
                { flag: false, uname: '食品' }
            ],
            shops: [
                { select: false, flag: true, url: 'img/shop1.jpg', uname: '【双十一预售】天猫魔盒6八核蓝牙语音智能家用网络电视盒子机顶盒遥控官方4K高清华为小米苹果手机无线投屏', money: '499', moneyless: '459', style: '颜色分类:红色 套餐类型:官方标配', number: '1' },
                { select: false, flag: true, url: 'img/shop2.jpg', uname: '秋叶原 HDMI线2.0版电视线机顶盒电脑笔记本投影仪4K高清线数据线3D视效1.5米8米15米加长线音视频加长信号线', money: '95', moneyless: '50', style: '颜色分类:金色 长度:1.5M', number: '1' },
                { select: false, flag: true, url: 'img/shop3.jpg', uname: '创意网红抖音散装好吃的红糖味结婚礼喜糖果小零食散称发批少女心', money: '57', moneyless: '', style: '红糖味牛奶硬糖含包装1斤约120颗', number: '2' },
                { select: false, flag: true, url: 'img/shop4.jpg', uname: '时尚LED创意电子钟表 夜光静音闹钟 座台钟 墙壁挂钟3D立体客厅钟', money: '23', moneyless: '', style: '颜色分类:霓虹粉', number: '5' },
                { select: false, flag: true, url: 'img/shop3.jpg', uname: '创意网红抖音散装好吃的红糖味结婚礼喜糖果小零食散称发批少女心', money: '57', moneyless: '', style: '红糖味牛奶硬糖含包装1斤约120颗', number: '2' },
                { select: false, flag: true, url: 'img/shop4.jpg', uname: '时尚LED创意电子钟表 夜光静音闹钟 座台钟 墙壁挂钟3D立体客厅钟', money: '23', moneyless: '', style: '颜色分类:霓虹粉', number: '5' },
            ],
            allmoney: 0,
            allSelectState: true
        },
        methods: {
            advGoBack: function () {
                location.assign("activity.html")
            },
            advNotShow: function (e) {
                e.stopPropagation()
                this.adv.flag = false
                clearInterval(this.adv.time)
            },
            displayFlag: function (arr, obj) {
                for (let i = 0; i < arr.length; i++) {
                    arr[i].flag = false
                }
                obj.flag = true
            },
            select: function (index) {
                this.shops[index].select = !this.shops[index].select
            },
            allSelect: function () {
                if (this.allSelectState) {
                    for (let i = 0; i < this.shops.length; i++) {
                        this.shops[i].select = false
                    }
                } else {
                    for (let i = 0; i < this.shops.length; i++) {
                        this.shops[i].select = true
                    }
                }
            },
            addShop: function (index) {
                this.shops[index].number++
            },
            reduceShop: function (index) {
                if (this.shops[index].number >= 2) {
                    this.shops[index].number--
                } else {
                    var x = confirm("商品数量以为最小确认是否删除商品？")
                    if (x) {
                        this.shops.splice(index, 1)
                    }
                }
            },
        },
        computed: {
            addAllMoney: function () {
                var allmoney = 0
                var that = this
                for (let i = 0; i < that.shops.length; i++) {
                    if (that.shops[i].select) {
                        if (that.shops[i].moneyless) {
                            allmoney += that.shops[i].moneyless * that.shops[i].number
                        } else {
                            allmoney += that.shops[i].money * that.shops[i].number
                        }
                    }
                }
                return allmoney
            },
            selectState: function () {
                var flag = true
                var that = this
                for (let i = 0; i < that.shops.length; i++) {
                    if (!that.shops[i].select) {
                        flag = false
                        break
                    }
                }
                that.allSelectState = flag
                if (flag) {
                    return '取消'
                } else {
                    return '全选'
                }
            }
        },
        mounted() {
            this.adv.time = setInterval(() => {
                this.adv.data--
                if (this.adv.data <= 0) {
                    clearInterval(this.adv.time)
                    this.adv.flag = false
                }
            }, 1000);
            var banner = new Swiper('.banner .swiper-container', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
            var fclass = new Swiper('.fclass .swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        },
        beforeDestroy() {
            clearInterval(this.adv.time)
        },
    });
}