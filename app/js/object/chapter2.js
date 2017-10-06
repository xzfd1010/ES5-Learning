//create object
/* eslint-disable no-redeclare, no-console ,no-unused-vars*/
var log = console.log.bind(console)

// 1. 工厂模式：无法识别对象的类型
{
    function createPerson(name, age, job) {
        var o = new Object()
        o.name = name
        o.age = age
        o.job = job
        o.sayName = function () {
            log(this.name)
        }
        return o
    }

    var person1 = createPerson("Nicholas", 29, "Software Engineer")
    var person2 = createPerson("Greg", 27, "Doctor")

    person1.sayName()
    person2.sayName()

    log("方法内存是否相同：" + (person1.sayName == person2.sayName))
}

// 2. 构造函数模式：不同实例上的同名函数是不相等的
{
    function Person(name, age, job) {
        this.name = name
        this.age = age
        this.job = job
        this.sayName = function () {
            alert(this.name)
        }
    }

    var person1 = new Person("Nicholas", 29, "Software Engineer")
    var person2 = new Person("Greg", 27, "Doctor")

    log(person1 instanceof Person)
    log(person2 instanceof Person)

    log("方法内存是否相同：" + (person1.sayName == person2.sayName))
}

// 3. 原型模式：在prototype上定义所有实例共享的属性和方法
{
    function Person(name, age, job) {
        this.name = name
        this.age = age
        this.job = job
    }

    Person.prototype.sayName = function () {
        log(this.name)
    }
    Person.prototype.test = "test"
    var person1 = new Person("Nicholas", 29, "Software Engineer")
    var person2 = new Person("Greg", 27, "Doctor")
    person1.sayName()
    person2.sayName()

    log("构造函数Person === Person.prototype.constructor:" + (Person === Person.prototype.constructor))
    log("person1.__proto__ === Person.prototype:" + (person1.__proto__ === Person.prototype))

    //isPrototypeOf：判断对象和构造函数之间的关系
    log("Person.prototype.isPrototypeOf(person1):" + (Person.prototype.isPrototypeOf(person1)))

    //getPrototypeOf：获取对象的原型
    log("person1的prototype:")
    log(Object.getPrototypeOf(person1))

    //访问constructor
    log("constructor:")
    log(person1.constructor)

    //hasOwnProperty
    log("person1.hasOwnProperty(\"name\"):" + (person1.hasOwnProperty("name")))
    log("person1.hasOwnProperty(\"test\"):" + (person1.hasOwnProperty("test")))
    log("person1的prototype.hasOwnProperty(\"test\"):" + (Object.getPrototypeOf(person1).hasOwnProperty("test")))
}

// in操作符
{
    function Person() {
    }

    Person.test = "aaa"
    Person.prototype.name = "Nicholas"
    Person.prototype.age = 29
    Person.prototype.job = "Software Engineer"
    Person.prototype.sayName = function () {
        log(this.name)
    }
    var person1 = new Person()
    var person2 = new Person()

    log(person1.hasOwnProperty("name")) // false
    log("name" in person1) // true
    person1.name = "Greg"

    log(person1.name)
    log(person1.hasOwnProperty("name"))
    log("name" in person1)

    function hasPrototypeProperty(object, name) {
        return !object.hasOwnProperty(name) && (name in object)
    }

    log(hasPrototypeProperty(person1, "name"))

    // in查询不可枚举属性
    Object.defineProperty(person1, "height", {
        value: "180cm",
        enumerable: false
    })

    log(("height" in person1)) //返回true，说明查到了这个属性，尽管是不可枚举的

    // for in 枚举实例属性
    for (var attr in person1) {
        log(attr, person1[attr])
    }
    for (var attr in Person) {
        log(attr, Person[attr])
    }
}

// Object.keys()
{
    function Person(name, age, job) {
        this.name = name
        this.age = age
        this.job = job
    }

    Person.prototype.sayName = function () {
        log(this.name)
    }
    var person1 = new Person("Nicholas", 29, "Software Engineer")

    log(Object.getOwnPropertyDescriptor(Person, "prototype"))
    var keys = Object.keys(Person.prototype)
    log(keys)
}

// Object.getOwnPropertyNames()
{
    function Person(name, age, job) {

    }

    Person.prototype.name = "Nick"
    Person.prototype.age = 25
    Person.prototype.job = "Software Engineer"
    Person.prototype.sayName = function () {
        log(this.name)
    }

    var keys = Object.getOwnPropertyNames(Person.prototype)
    log("通过getOwnPropertyNames获取Person.prototype上的属性")
    log(keys)

    var keys = Object.keys(Person.prototype)
    log("通过Object.keys获取Person.prototype上的属性")
    log(keys)

    var keys = Object.getOwnPropertyNames(Person)
    log("Person的keys：")
    log(keys)

    var keys = Object.keys(Person)
    log("通过Object.keys获取Person的属性")
    log(keys)
}

// instanceof的理解：
{
    function Person() {

    }

    Person.prototype = {
        name: "Nick",
        age: 25,
        job: "Software Engineer",
        sayName: function () {
            log(this.name)
        }
    }

    var friend = new Person()
    log(friend instanceof Object)
    log(friend instanceof Person)
    log(friend.constructor == Person)
    log(friend.constructor == Object)
    log(friend.constructor)// ƒ Object() { [native code] } 丢失了指向
    log(Person.prototype === Object.getPrototypeOf(friend)) // 这是instanceof仍然成立的原因
    // Object.defineProperty(Person.prototype, "constructor", {
    //     enumerable: false,
    //     value: Person
    // })
}

// 重写构造函数
{
    function Person() {

    }

    Person.prototype = {
        name: "Nick",
        age: 25,
        job: "Software Engineer",
        sayName: function () {
            log(this.name)
        }
    }

    Object.defineProperty(Person.prototype, "constructor", {
        enumerable: false,
        value: Person
    })
}

// 原型的动态性
{
    function Friend() {

    }

    var friend = new Friend()
    log("之前的prototype：")

    log(Object.getPrototypeOf(friend))


    Friend.prototype = {
        name: "Nick",
        age: 25,
        job: "Software Engineer",
        sayName: function () {
            log(this.name)
        }
    }

    Object.defineProperty(Friend.prototype, "constructor", {
        enumerable: false,
        value: Friend
    })

    // friend.sayName() // error
    log("之后的prototype：")
    log(Object.getPrototypeOf(friend))

    log("Friend.prototype:")
    log(Friend.prototype)

    log("friend instanceof Friend:因为二者的prototype已经不一样了")
    log(friend instanceof Friend)


}

// 4. 混合模式的常见写法
{
    function Person(name, age, job) {
        this.name = name
        this.age = age
        this.job = job
        this.friends = ["Shelby", "Court"]
    }

    Person.prototype = {
        constructor: Person, // 通常的写法，并不介意constructor是否可枚举
        sayName: function () {
            log(this.name)
        }
    }
}

// 5. 动态原型模式
{
    function Person(name, age, job) {
        this.name = name
        this.age = age
        this.job = job

        // 方法
        if (typeof this.sayName !== "function") {
            Person.prototype.sayName = function () {
                log(this.name)
            }
        }
    }

    var friend = new Person("Nick", 25, "Software Engineer")
    friend.sayName()
}

// 6. 寄生构造函数模式
{
    function Person(name, age, job) {
        var o = new Object()
        o.name = name
        o.age = age
        o.job = job
        o.sayName = function () {
            log(this.name)
        }
        return o
    }

    var friend = new Person("Nick", 25, "Software Engineer")
    friend.sayName()

    // 适用场景：扩展原有的对象
    function SpecialArray() {
        var values = new Array()
        values.push.apply(values, arguments) // 添加值
        values.toPipedString = function () {
            return this.join("|")
        }
        return values
    }

    var colors = new SpecialArray("red", "blue", "green")
    log(colors.toPipedString())

    log(Object.getPrototypeOf(colors) === Array.prototype)
}

// 7. 稳妥构造函数模式
{
    function Person(name, age, job) {
        // 创建要返回的对象
        var o = new Object()

        // 定义私有变量和函数
        // o.name = name
        // o.age = age
        // o.job = job

        // 添加方法
        o.sayName = function () {
            log(name)
        }

        return o
    }

    var friend = Person("Nick", 25, "Software Engineer")
    friend.sayName()
}

// 8. ES6的class
{
    class Person {
        constructor(name, age, job) {
            this.name = name
            this.age = age
            this.job = job
        }

        sayName() {
            log(this.name)
        }
    }

    var person = new Person("Nick", 25, "Software Engineer")
    person.sayName()

    // constructor的属性检测
    log("class构建的constructor是否可枚举：")
    log(Object.getOwnPropertyDescriptor(Person.prototype, "constructor").enumerable) // 不可枚举，完美！
}