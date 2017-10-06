// 函数声明和函数表达式之间的区别：函数提升
var log = console.log.bind(console)

// 错误用法
{
    var condition = Math.random() > 0.5
    if (condition) {
        function sayHi() {
            log("Hi!")
        }
    }else{
        function sayHi(){
            log("Yo!")
        }
    }

    // sayHi() // 浏览器中显示的是yo!
}

// 正确用法
{
    var sayHi
    var condition = Math.random() > 0.5
    if(condition){
        sayHi = function(){
            log("Hi!")
        }
    }else{
        sayHi = function(){
            log("Yo!")
        }
    }
    sayHi()
}