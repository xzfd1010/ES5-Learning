// 模仿块级作用域
var log = console.log.bind(console)

{
    function outputNumbers(count){
        for(var i = 0;i<count;i++){
            log(i)
        }
        var i

        log(i) // 仍然是10
    }
    outputNumbers(10)


}

// 创建私有作用域示例
(function(){
    var now = new Date() // 匿名函数中的局部变量，无须担心污染全局
    if(now.getMonth() === 9 && now.getDate() === 7){
        log("Happy National Day!")
    }
})()
