var log = console.log.bind(console)

// 递归

// 阶乘
{
    log("函数声明")
    function factorial(num) {
        if (num > 1) {
            return factorial(num - 1) * num
        } else {
            return 1
        }
    }

    log(factorial(3))

    // 但不能兼容以下写法

    var anotherFactorial = factorial
    factorial = null
    // log(anotherFactorial(4)) // 报错，因为阶乘的过程中引用了factorial，而此时已被赋值为null
}
// 使用arguments.callee解决
{
    log("arguments.callee")
    function factorial(num) {
        if (num <= 1) {
            return 1
        } else {
            return num * arguments.callee(num - 1)
        }
    }

    var anotherFactorial = factorial
    factorial = null
    log(anotherFactorial(4))
}
// callee严格模式不可用，使用函数表达式
{
    log("函数表达式")
    var factorial = function f(num) {
        if (num <= 1) {
            return 1
        } else {
            return num * f(num - 1)
        }
    }


    var anotherFactorial = factorial
    factorial = null
    log(anotherFactorial(4))



}
