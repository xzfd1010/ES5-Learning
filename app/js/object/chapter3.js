// 对象的继承

/* eslint-disable no-redeclare, no-console ,no-unused-vars*/
var log = console.log.bind(console)


// 1. 原型链
{
    function SuperType() {
        this.property = true
    }

    SuperType.prototype.getSuperValue = function () {
        return this.property
    }

    function SubType() {
        this.subproperty = false
    }

    log("实现继承前的SubType.prototype:")
    log(SubType.prototype)

    SubType.prototype = new SuperType()
    // 继承了SuperType，subtype的原型是SuperType的实例，SubType的[[prototype]]指向SuperType.prototype
    // SuperType.prototype.constructor指向另一个SuperType

    SubType.prototype.getSubValue = function () {
        return this.subproperty
    }

    var instance = new SubType()

    log(instance.getSuperValue())

    log("实现继承后的SubType.prototype:")
    log(SubType.prototype)

    // 原型和实例的关系
    log("instance instanceof SubType：" + (instance instanceof SubType))
    log("instance instanceof SuperType：" + (instance instanceof SuperType))
    log("instance instanceof Object：" + (instance instanceof Object))

    log("instance:", instance)

    log(Object.prototype.isPrototypeOf(instance))
    log(SuperType.prototype.isPrototypeOf(instance))
    log(SubType.prototype.isPrototypeOf(instance))
}

// 原型链的问题1：引用类型属性
{
    function SuperType() {
        this.colors = ["red", "blue", "green"]
    }

    function SubType() {

    }

    // 继承了SuperType
    SubType.prototype = new SuperType()

    var instance1 = new SubType()

    instance1.colors.push("black")
    log(instance1.colors)

    var instance2 = new SubType()
    log(instance2.colors)
}

// 原型链的问题2：给父类传参
{
    function SuperType(colors) {
        this.colors = colors
    }

    function SubType() {

    }

    // 继承了SuperType
    SubType.prototype = new SuperType()

    var instance1 = new SubType(["blue", "red"])

    log(instance1.colors) // undefined
}

// 借用构造函数
// 1. 解决引用类型问题
{
    function SuperType() {
        this.colors = ["red", "blue", "green"]
    }

    function SubType() {
        // 继承了SuperType，在将要新创建的SubType实例的环境下调用SuperType的构造函数
        SuperType.call(this)
    }

    var instance1 = new SubType()
    instance1.colors.push("black")
    log(instance1.colors)

    var instance2 = new SubType()
    log(instance2.colors)
}
// 2. 解决传参问题
{
    function SuperType(name) {
        this.name = name
    }

    function SubType(name) {
        // 继承了SuperType，在将要新创建的SubType实例的环境下调用SuperType的构造函数
        SuperType.call(this, name)
        this.age = 25
    }

    var instance1 = new SubType("Nick")
    log(instance1.name)
}
// 借用构造函数存在的问题：单独使用时，方法难以复用

// 组合继承
{
    function SuperType(name) {
        this.name = name
        this.colors = ["red", "blue", "green"]
    }

    SuperType.prototype.sayName = function () {
        log(this.name)
    }

    function SubType(name, age) {
        // 继承属性
        SuperType.apply(this, [name])
        this.age = age
    }

    log("继承前的constructor", Object.getOwnPropertyDescriptor(SubType.prototype, "constructor")) // enumerable是true，此时constructor是可枚举的

    // 继承方法
    SubType.prototype = new SuperType()
    SubType.prototype.constructor = SubType // 改变constructor的指向

    log("继承后的constructor", Object.getOwnPropertyDescriptor(SubType.prototype, "constructor")) // enumerable是true，此时constructor是可枚举的

    // 定义私有方法
    SubType.prototype.sayAge = function () {
        log(this.age)
    }

    var instance1 = new SubType("Nick", 25)
    instance1.colors.push("black")
    log("instance1的相关属性")
    log(instance1.colors)
    instance1.sayName()
    instance1.sayAge()

    log("instance2的相关属性")
    var instance2 = new SubType("Greg", 27)
    log(instance2.colors)
    instance2.sayName()
    instance2.sayAge()
}
// 组合继承的不足
{
    log("组合继承的不足:")

    function SuperType(name) {
        this.name = name
        this.colors = ["red", "blue", "green"]
    }

    SuperType.prototype.sayName = function () {
        log(this.name)
    }

    function SubType(name, age) {
        SuperType.call(this, name)      // 第二次调用SuperType()
        this.age = age
    }

    SubType.prototype = new SuperType() // 第一次调用SuperType()
    SubType.prototype.constructor = SubType
    SubType.prototype.sayAge = function () {
        log(this.age)
    }
}

// 原型式继承
{
    function object(o) {
        function F() {
        }

        F.prototype = o
        return new F()
    }

    var person = {
        name: "Nicholas",
        friends: ["Sheldon", "Van", "Nick"]
    }

    var anotherPerson = object(person)
    anotherPerson.name = "Greg"
    anotherPerson.friends.push("Rob")

    var yetAnotherPerson = object(person)
    yetAnotherPerson.name = "Linda"
    yetAnotherPerson.friends.push("Barbie")

    log(person.friends)
}

// Object.create()
{
    var person = {
        name: "Nicholas",
        friends: ["Sheldon", "Van", "Nick"]
    }

    var anotherPerson = Object.create(person)
    anotherPerson.name = "Greg"
    anotherPerson.friends.push("Rob")

    var yetAnotherPerson = Object.create(person)
    yetAnotherPerson.name = "Linda"
    yetAnotherPerson.friends.push("Barbie")

    log("通过Object.create()改写实例：")
    log(person.friends)

    var anotherPerson1 = Object.create(person, {
        name: {
            value: "Greg"
        }
    })
    log(anotherPerson1.name)
}

// 寄生式继承
{
    function object(o) {
        function F() {
        }

        F.prototype = o
        return new F()
    }

    function createAnother(original) {
        var clone = object(original) // 调用函数创建一个新对象
        clone.sayHi = function () {  // 以某种方式来增强这个对象
            log("hi")
        }
        return clone // 返回这个对象
    }

    var person = {
        name: "Nicholas",
        friends: ["Sheldon", "Court", "Van"]
    }

    var anotherPerson = createAnother(person)
    anotherPerson.sayHi()
}

// 寄生式组合继承
{
    log("寄生组合式继承：")

    function inheritPrototype(subType, superType) {
        var prototype = Object(superType.prototype) // 创建对象，此对象用于subType的原型
        prototype.constructor = subType  // 增强对象，指定constructor及自定义方法
        subType.prototype = prototype    // 指定对象，重设prototype

    }

    // 改写组合模式
    function SuperType(name) {
        this.name = name
        this.colors = ["red", "blue", "green"]
    }

    SuperType.prototype.sayName = function () {
        log(this.name)
    }

    function SubType(name, age) {
        SuperType.call(this, name)
        this.age = age
    }

    inheritPrototype(SubType, SuperType)

    SubType.prototype.sayAge = function () {
        log(this.age)
    }

    var instance = new SubType("Nick", 25)
    instance.sayAge()
}
