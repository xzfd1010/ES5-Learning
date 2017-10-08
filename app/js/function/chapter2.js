// 闭包
var log = console.log.bind(log)
{
    function createComparisonFunction(propertyName) {
        return function (object1, object2) {
            // 访问了外部函数中的propertyName，即使这个内部函数被返回了，而且在其他地方被调用，仍可以访问变量propertyName
            // 因为内部函数的作用域链中包含了createComparisonFunction()的作用域
            var value1 = object1[propertyName]
            var value2 = object2[propertyName]

            if (value1 < value2) {
                return -1
            } else if (value1 > value2) {
                return 1
            } else {
                return 0
            }
        }
    }

// 创建函数
    var compare = createComparisonFunction("name")
// 调用函数
    var result = compare({name: "Nicholas"}, {name: "Greg"})

    log(result)
    log(compare)

    compare = null
    log(compare)
}

// 变量对象
{
    log("变量对象：")

    function foo(x, y, z) {
        // 声明的函数参数数量arguments (x, y, z)
        log(foo.length) // 3

        // 真正传进来的参数个数(only x, y)
        log(arguments.length) // 2

        // 参数的callee是函数自身
        log(arguments.callee === foo) // true

        // 参数共享 
        log(x === arguments[0]) // true
        log(x) // 10

        arguments[0] = 20
        log(x) // 20

        x = 30
        log(arguments[0]) // 30

        // 不过，没有传进来的参数z，和参数的第3个索引值是不共享的
        z = 40
        log(arguments[2]) // undefined

        arguments[2] = 50
        log(z) // 40
    }

    foo(10, 20)
}

// 变量的DontDelete属性
{
    a = 10
    log(window.a) // 10

    log(delete window.a) // true

    log(window.a) // undefined

    var b = 20  // 变量，不能被删除

    log("b:", window.b) // 20

    log(delete window.b) // false

    log(window.b) // still 20

}

// 闭包的副作用：闭包只能去的包含函数中任何变量的最后一个值，闭包所保存的是整个变量对象
{
    function createFunction() {
        var result = new Array()

        for (var i = 0; i < 10; i++) {
            result[i] = function () {
                return i
            }
        }

        return result
    }


    // 每个函数都返回10的原因：每个函数的作用域链中都保存着createFunction()函数的活动对象，引用的都是同一个变量i;
    // 当createFunctions()函数返回后，变量i的值是10，此时每个函数都引用着保存变量i的同一个变量对象，所以在每个函数内部的i的值都是10
    // createFunctions()的变量对象在代码解释期间，最终变为10，此时function引用的就是这个i值
}

// 解决方法：创建一个匿名函数强制让闭包的行为符合预期
{
    function createFunctions() {
        var result = new Array()

        for (var i = 0; i < 10; i++) {
            result[i] = function (num) { // 匿名函数
                return function () {  // 此闭包访问的是function(num)的变量对象，此时result数组中每个函数都有自己的num变量的副本
                    return num
                }
            }(i) // IIFE：立即执行匿名函数，函数参数按值传递，i被赋值给num
        }

        return result
    }

    var functionArray = createFunctions()
    log(functionArray[0])
}

// this对象
{
    log("this对象：")
    var name = "The Window"
    var object = {
        name: "My Object",
        getNameFunc: function () {
            return function () {
                return this.name
            }
        }
    }
    log(object.getNameFunc()())

    // 用变量保存this
    var name = "The Window"
    var object = {
        name: "My Object",
        getNameFunc: function () {
            var that = this
            return function () {
                return that.name // 闭包引用了外部变量，因此匿名函数执行完毕后，that依然保存在变量对象中，this的值得以保存
            }
        }
    }
    log(object.getNameFunc()())
}

// this的值可能的突变
{
    log("this值突变：")
    var name = "The Window"
    var object = {
        name: "My Object",
        getName: function () {
            return log(this.name)
        }
    }

    object.getName();
    (object.getName)();
    (object.getName = object.getName)()
}

// 内存泄漏
{
    function assignHandler() {
        var element = document.getElementById("someElement")
        element.onclick = function () {
            log(element.id)
        }
    }

    assignHandler()
}
// 处理方式
{
    function assignHandler() {
        var element = document.getElementById("someElement")
        var id = element.id
        element.onclick = function () {
            log(id+1)
        }
        element = null // 解除对DOM对象的引用
    }
    assignHandler()
}