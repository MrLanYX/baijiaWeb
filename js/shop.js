window.onload = function () {

    // 拆解地址栏
    var id = window.location.search.split("=")[1]
    if (!id) {
        window.location.href = 'shop.html?id=1001';
    }

    var main = new Vue({
        el: "#main",
        data() {
            return {
                topAdv: true,
                selects: '',
                shopCart: false,
                shop: {
                    id: 1001,
                    url: 'img/shop1.jpg',
                    uname: '天猫魔盒6八核蓝牙语音智能家用网络电视盒子机顶盒遥控官方4K高清华为小米苹果手机无线投屏',
                    describe: '氮化镓第三代半导体材料 / 效率更高，体积更小，重量更轻 / 45分钟为小米10 Pro充电100% / 内含5A大电流，1米长数据线，充电更快 / 兼容大多数Type-C型手机，笔记本电脑，平板电脑',
                    money: '499',
                    moneyless: '459',
                    style: {
                        styleName: '颜色',
                        style: ['红色', '白色', '绿色', '蓝色', '黑色']
                    }
                },
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
        },
        created() {
            console.log(id);
            axios.get('shop.json')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    });

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
        }, 20);
    }
    goTop.addEventListener('click', go)

    // 获取位置


}