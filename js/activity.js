window.onload=function(){
    var activity = new Vue({
        el: ".activity",
        data: {
        },
        methods: {
            back:function(){
                console.log(1);
                history.back()
            }
        },
    })
}