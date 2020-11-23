window.onload = function () {
    var sign = new Vue({
        el: ".sign",
        data: {
            uname: '',
            password: '',
            user: [
                { uname: "admin", password: "admin" }
            ],
            play: true,
            time: '',
            qrcode: false
        },
        methods: {
            signdisplaya: function () {
                this.play = true
            },
            signdisplayb: function () {
                this.play = false
            },
            verification: function (e) {
                for (let i = 0; i < this.user.length; i++) {
                    if (this.uname == this.user[i].uname && this.password == this.user[i].password) {
                        return true
                    }
                }
                e.preventDefault();
                alert("请使用默认账户登入\n账户二：admin 密码二：admin")
            },
            efresh: function () {
                this.qrcode = false
                this.time = setTimeout(() => {
                    this.qrcode=true
                    clearTimeout(this.time)
                }, 10000);
            }
        },
        mounted() {
            this.efresh()
        },
        beforeDestroy() {
            clearTimeout(this.time)
        },
    })
}