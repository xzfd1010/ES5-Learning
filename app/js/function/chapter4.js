// 私有变量
{
    // num1、num2、sum都是私有变量
    function add(num1, num2) {
        var sum = num1 + num2
        return sum
    }

}

// 特权方法
{
    function MyObject() {
        // 私有变量和私有函数
        var privateVariable = 10

        function privateFunction() {
            return false
        }

        // 特权方法：
        this.publicMethod = function () {
            privateVariable++
            return privateFunction() // 这里是执行而非返回函数体
        }
    }

    var obj = new MyObject()
    console.log(obj.publicMethod)
}

// 用途1：隐藏方法和数据
{
    function Person(name) {
        this.getName = function () {
            return name
        }

        this.setName = function (value) {
            name = value
        }
    }

    var person = new Person("Nick")
    console.log(person.getName())
    person.setName("Michael")
    console.log(person.getName())
}

// 静态私有变量
{
    (function () {
        // 私有变量和私有函数
        var privateVariable = 10

        function privateFunction() {
            return false
        }

        // 构造函数
        MyObject = function () {

        }

        // 共有/特权方法
        MyObject.prototype.publicMethod = function () {
            privateVariable++
            return privateFunction()
        }
    })()
}
// 实例
{
    (function () {
        var name = ""
        Person = function (value) {
            name = value
        }

        Person.prototype.getName = function () {
            return name
        }

        Person.prototype.setName = function (value) {
            name = value
        }
    })()

    var person1 = new Person("Nick")
    console.log(person1.getName())
    person1.setName("Greg")
    console.log(person1.getName())

    var person2 = new Person("Michael")
    console.log(person1.getName())
    console.log(person2.getName())
}

// 单例模式
{
    var singleton = {
        name: "value",
        method: function () {
            // 方法代码
        }
    }
}
// 模块模式
{
    var singleton = function () {
        var privateVariable = 10

        function privateFunction() {
            return false
        }

        return {
            publicProperty: true,
            publicMethod: function () {
                privateVariable++
                return privateFunction()
            }
        }
    }()

    console.log(singleton)
}
// 实例
{
    var application = function () {
        // 私有变量和函数
        var components = new Array()

        // 初始化
        components.push(new Object())

        return {
            getComponentCount: function () {
                return components.length
            },
            registerComponent: function (component) {
                if (typeof component === "object") {
                    components.push(component)
                }
            }
        }
    }()
    
}

// 增强模块模式
{
    function CustomType() {
        
    }
    
    var singleton = function(){
        // 私有变量和私有函数
        var privateVariable = 10
        function privateFunction(){
            return false
        }
        
        // 创建对象
        var object = new CustomType()
        
        // 添加特权/公有属性和方法
        object.publicMethod = function(){
            privateVariable++
            return privateFunction()
        }
        
        // 返回对象
        return object
    }()
    
    console.log(singleton)
}