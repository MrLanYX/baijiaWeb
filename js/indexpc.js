window.onload = function () {
    var main = new Vue({
        el: "#main",
        data() {
            return {
                topAdv: true,
                selects: '',
                nav: [],
                shopCart: false,
                shopLess: [
                    { url: 'img/shop10.jpg', uname: '天猫魔盒6八核蓝牙语音智能家用网络电视盒子机顶盒遥控官方4K高清华为小米苹果手机无线投屏', money: '499', moneyless: '459', style: '颜色分类:红色 套餐类型:官方标配', number: '1' },
                    { url: 'img/shop2.jpg', uname: '秋叶原 HDMI线2.0版电视线机顶盒电脑笔记本投影仪4K高清线数据线3D视效1.5米8米15米加长线音视频加长信号线', money: '95', moneyless: '50', style: '颜色分类:金色 长度:1.5M', number: '1' },
                    { url: 'img/shop3.jpg', uname: '创意网红抖音散装好吃的红糖味结婚礼喜糖果小零食散称发批少女心', money: '57', moneyless: '50', style: '红糖味牛奶硬糖含包装1斤约120颗', number: '2' },
                    { url: 'img/shop4.jpg', uname: '时尚LED创意电子钟表 夜光静音闹钟 座台钟 墙壁挂钟3D立体客厅钟', money: '23', moneyless: '19', style: '颜色分类:霓虹粉', number: '5' },
                    { url: 'img/shop5.jpg', uname: '天猫魔盒6八核蓝牙语音智能家用网络电视盒子机顶盒遥控官方4K高清华为小米苹果手机无线投屏', money: '499', moneyless: '459', style: '颜色分类:红色 套餐类型:官方标配', number: '1' },
                    { url: 'img/shop6.jpg', uname: '秋叶原 HDMI线2.0版电视线机顶盒电脑笔记本投影仪4K高清线数据线3D视效1.5米8米15米加长线音视频加长信号线', money: '95', moneyless: '50', style: '颜色分类:金色 长度:1.5M', number: '1' },
                    { url: 'img/shop7.jpg', uname: '创意网红抖音散装好吃的红糖味结婚礼喜糖果小零食散称发批少女心', money: '57', moneyless: '50', style: '红糖味牛奶硬糖含包装1斤约120颗', number: '2' },
                    { url: 'img/shop8.jpg', uname: '时尚LED创意电子钟表 夜光静音闹钟 座台钟 墙壁挂钟3D立体客厅钟', money: '23', moneyless: '19', style: '颜色分类:霓虹粉', number: '5' },
                    { url: 'img/shop9.jpg', uname: '天猫魔盒6八核蓝牙语音智能家用网络电视盒子机顶盒遥控官方4K高清华为小米苹果手机无线投屏', money: '499', moneyless: '459', style: '颜色分类:红色 套餐类型:官方标配', number: '1' },
                    { url: 'img/shop10.jpg', uname: '秋叶原 HDMI线2.0版电视线机顶盒电脑笔记本投影仪4K高清线数据线3D视效1.5米8米15米加长线音视频加长信号线', money: '95', moneyless: '50', style: '颜色分类:金色 长度:1.5M', number: '1' },
                    { url: 'img/shop11.jpg', uname: '创意网红抖音散装好吃的红糖味结婚礼喜糖果小零食散称发批少女心', money: '57', moneyless: '50', style: '红糖味牛奶硬糖含包装1斤约120颗', number: '2' },
                    { url: 'img/shop12.jpg', uname: '时尚LED创意电子钟表 夜光静音闹钟 座台钟 墙壁挂钟3D立体客厅钟', money: '23', moneyless: '19', style: '颜色分类:霓虹粉', number: '5' },
                ],
                class1name:'手机',
                class1: [
                    { url: 'img/shop11.jpg', uname: '天猫魔盒6八核蓝牙语音智能家用网络电视盒子机顶盒遥控官方4K高清华为小米苹果手机无线投屏', money: '499', moneyless: '459', style: '颜色分类:红色 套餐类型:官方标配', number: '1' },
                    { url: 'img/shop12.jpg', uname: '秋叶原 HDMI线2.0版电视线机顶盒电脑笔记本投影仪4K高清线数据线3D视效1.5米8米15米加长线音视频加长信号线', money: '95', moneyless: '50', style: '颜色分类:金色 长度:1.5M', number: '1' },
                    { url: 'img/shop13.jpg', uname: '创意网红抖音散装好吃的红糖味结婚礼喜糖果小零食散称发批少女心', money: '57', moneyless: '50', style: '红糖味牛奶硬糖含包装1斤约120颗', number: '2' },
                    { url: 'img/shop14.jpg', uname: '时尚LED创意电子钟表 夜光静音闹钟 座台钟 墙壁挂钟3D立体客厅钟', money: '23', moneyless: '19', style: '颜色分类:霓虹粉', number: '5' },
                    { url: 'img/shop15.jpg', uname: '天猫魔盒6八核蓝牙语音智能家用网络电视盒子机顶盒遥控官方4K高清华为小米苹果手机无线投屏', money: '499', moneyless: '459', style: '颜色分类:红色 套餐类型:官方标配', number: '1' },
                    { url: 'img/shop16.jpg', uname: '秋叶原 HDMI线2.0版电视线机顶盒电脑笔记本投影仪4K高清线数据线3D视效1.5米8米15米加长线音视频加长信号线', money: '95', moneyless: '50', style: '颜色分类:金色 长度:1.5M', number: '1' },
                    { url: 'img/shop17.jpg', uname: '创意网红抖音散装好吃的红糖味结婚礼喜糖果小零食散称发批少女心', money: '57', moneyless: '50', style: '红糖味牛奶硬糖含包装1斤约120颗', number: '2' },
                    { url: 'img/shop18.jpg', uname: '时尚LED创意电子钟表 夜光静音闹钟 座台钟 墙壁挂钟3D立体客厅钟', money: '23', moneyless: '19', style: '颜色分类:霓虹粉', number: '5' },
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
            }
        },
        methods: {
            topAdvFlag: function () {
                this.topAdv = !this.topAdv
            },
            showClass: function (index) {
                this.nav[index].flag = true
            },
            notShowClass: function (index) {
                this.nav[index].flag = false
            },
            miaoShaUrl: function (a, b) {
                var num = (a - 1) * 4 + b - 1
                var str = this.shopLess[num]
                return str
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
            navLiHeight: function () {
                var navLiHeight = 'height:' + (Math.floor(100 / this.nav.length * 100) / 100) + '%'
                return navLiHeight
            },
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
        },
        created() {
            // 包装分类
            var oldNav = ['为您推荐', '内衣配饰', '珠宝配饰', '户外运动', '女装', '家装', '鞋靴', '男装', '人群偏爱', '手机数码', '食品']
            for (let i = 0; i < oldNav.length; i++) {
                this.nav.push({ uname: oldNav[i], flag: false })
            }
        },
        beforeDestroy() {
        },
    });

    // 计时器
    var span = document.querySelector('#main').querySelector('.time-down').querySelectorAll('span')
    var str = { futureTime: '2021-11-11' }
    setInterval(() => {
        str.inputTime = +new Date(str.futureTime)
        str.nowTime = +new Date();
        str.times = (str.inputTime - str.nowTime) / 1000;
        // str.d = parseInt(str.times / 60 / 60 / 24);
        str.h = parseInt(str.times / 60 / 60 % 24);
        str.m = parseInt(str.times / 60 % 60);
        str.s = parseInt(str.times % 60);
        // str.d = str.d < 10 ? '0' + str.d : str.d;
        str.h = str.h < 10 ? '0' + str.h : str.h;
        str.m = str.m < 10 ? '0' + str.m : str.m;
        str.s = str.s < 10 ? '0' + str.s : str.s;
        span[0].innerHTML = str.h
        span[1].innerHTML = str.m
        span[2].innerHTML = str.s
    }, 1000);

    // 监听浏览器滚动   固定导航栏
    var topNav = document.querySelector('.top-nav')
    var rightNav = document.querySelector('.right-nav')
    var goTop = rightNav.querySelectorAll('div')[12]
    var changeNav = function () {
        // 回到顶部按钮显示
        if (window.pageYOffset > 450) {
            goTop.style.display = 'flex'
        } else {
            goTop.style.display = 'none'
        }
        if (!main.topAdv) {
            return false
        } else {
            if (window.pageYOffset > 120) {
                topNav.className = 'top-nav fixed'
                rightNav.className = 'right-nav fixed'
            } else {
                topNav.className = 'top-nav'
                rightNav.className = 'right-nav'
            }
        }
    }
    changeNav()
    window.addEventListener('scroll', changeNav)

    // 回到顶部缓动函数
    var go = function () {
        clearInterval(time)
        var time = setInterval(() => {
            var step = Math.floor(window.pageYOffset - window.pageYOffset / 10)
            scroll(0, step)
            if (window.pageYOffset == 0) {
                clearInterval(time)
            }
        }, 30);
    }
    goTop.addEventListener('click', go)
}