window.onload = function () {
    var main = new Vue({
        el: "#main",
        data: {
            uname: '',
            password: '',
            user: [
                { uname: "123456", password: "123456" },
                { uname: "admin", password: "admin" }
            ]
        },
        methods: {
            verification: function (e) {
                for (let i = 0; i < this.user.length; i++) {
                    if (this.uname == this.user[i].uname && this.password == this.user[i].password) {
                        return true
                    }
                }
                e.preventDefault();
                alert("请使用默认账户登入\n账户一：123456 密码一：123456\n账户二：admin 密码二：admin")
            }
        },
    })
}