//create object
/* eslint-disable no-redeclare, no-console ,no-unused-vars*/
var log = console.log.bind(console)

// 工厂模式：无法识别对象的类型
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

// 构造函数模式：不同实例上的同名函数是不相等的
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

// 原型模式：在prototype上定义所有实例共享的属性和方法
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
    console.log("person1.hasOwnProperty(\"name\"):" + (person1.hasOwnProperty("name")))
    console.log("person1.hasOwnProperty(\"test\"):" + (person1.hasOwnProperty("test")))
    console.log("person1的prototype.hasOwnProperty(\"test\"):" + (Object.getPrototypeOf(person1).hasOwnProperty("test")))
}