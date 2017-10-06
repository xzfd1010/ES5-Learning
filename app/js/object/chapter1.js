/* eslint-disable no-redeclare, no-console ,no-unused-vars*/

var log = console.log.bind(console)

// writable
{
    var person = {}
    Object.defineProperty(person, "name", {
        writable: false,
        value: "Nicholas"
    })

    console.log(person.name)
    person.name = "Greg"
    console.log(person.name)
}

// configurable
{

    log("configurable")
    var person = {}
    Object.defineProperty(person, "name", {
        configurable: false,// 不可配置
        value: "Nicholas"
    })
    console.log(person.name)
    person.name = "aaa"
    console.log(person.name)

    function test(){
        // "use strict"
        delete person.name
    }

    test()

    log("删除属性:", person.name)

    Object.defineProperty(person, "name", {
        writable: false
    })
}

//Object.getOwnPropertyDescriptor()
{
    var person = {}
    Object.defineProperty(person, "name", {
        configurable: true,
        value: "Nicholas"
    })
    console.log("person's attributes:")
    console.log(Object.getOwnPropertyDescriptor(person, "name"))

    Object.defineProperty(person, "name", {
        value: "nick"
    })
    console.log("通过defineProperty修改后的值：" + person.name)
    person.name = "arron"
    console.log("直接修改验证writable的有效性：" + (person.name === "arron"))


    var another = {name: "Nick"}
    console.log("another's attributes:")
    console.log(Object.getOwnPropertyDescriptor(another, "name"))
}

// 访问器属性
{
    var book = {
        _year: 2004,
        edition: 1
    }

    Object.defineProperty(book, "year", {
        get: function () {
            return this._year
        },
        set: function (newValue) {
            // 如果newValue < 2004，则不会修改原有的_year的值
            if (newValue > 2004) {
                this._year = newValue
                this.edition += newValue - 2004
            }
        }
    })
    console.log("year before:" + book.year)
    console.log("edition before:" + book.edition)
    book.year = 2005
    console.log("year after:" + book.year)
    console.log("edition after:" + book.edition)

    console.log("book's attributes:")
    console.log(Object.getOwnPropertyDescriptor(book, "year"))
}

{
    var book = {}
    Object.defineProperties(book, {
        // 数据属性
        _year: {
            writable: true,
            value: 2004
        },
        edition: {
            writable: true,
            value: 1
        },
        // 访问器属性
        year: {
            get: function () {
                return this._year
            },
            set: function (newValue) {
                if (newValue > 2004) {
                    this._year = newValue;
                    this.edition += newValue - 2004;
                }
            }
        }

    })
    console.log(book)
}

{
    var book = {}
    Object.defineProperties(book, {
        // 数据属性
        _year: {
            writable: true,
            value: 2004
        },
        edition: {
            writable: true,
            value: 1
        },
        // 访问器属性
        year: {
            get: function () {
                return this._year
            },
            set: function (newValue) {
                if (newValue > 2004) {
                    this._year = newValue
                    this.edition += newValue - 2004
                }
            }
        }

    })

    var descriptor = Object.getOwnPropertyDescriptor(book, "_year")
    log(`_year.value:${descriptor.value}`)
    log(`_year.configurable:${descriptor.configurable}`)
    log(`_year.get:${descriptor.get}`)

    // 没有定义value特性，只定义了存取
    descriptor = Object.getOwnPropertyDescriptor(book, "year")
    log(`year.value:${descriptor.value}`)
    log(`year.configurable:${descriptor.enumerable}`)
    log(`year.get:${descriptor.get}`)
}

