/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//create object
/* eslint-disable no-redeclare, no-console ,no-unused-vars*/
var log = console.log.bind(console);

// 1. 工厂模式：无法识别对象的类型
{
    var createPerson = function createPerson(name, age, job) {
        var o = new Object();
        o.name = name;
        o.age = age;
        o.job = job;
        o.sayName = function () {
            log(this.name);
        };
        return o;
    };

    var person1 = createPerson("Nicholas", 29, "Software Engineer");
    var person2 = createPerson("Greg", 27, "Doctor");

    person1.sayName();
    person2.sayName();

    log("方法内存是否相同：" + (person1.sayName == person2.sayName));
}

// 2. 构造函数模式：不同实例上的同名函数是不相等的
{
    var Person = function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.sayName = function () {
            alert(this.name);
        };
    };

    var person1 = new Person("Nicholas", 29, "Software Engineer");
    var person2 = new Person("Greg", 27, "Doctor");

    log(person1 instanceof Person);
    log(person2 instanceof Person);

    log("方法内存是否相同：" + (person1.sayName == person2.sayName));
}

// 3. 原型模式：在prototype上定义所有实例共享的属性和方法
{
    var _Person = function _Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    };

    _Person.prototype.sayName = function () {
        log(this.name);
    };
    _Person.prototype.test = "test";
    var person1 = new _Person("Nicholas", 29, "Software Engineer");
    var person2 = new _Person("Greg", 27, "Doctor");
    person1.sayName();
    person2.sayName();

    log("构造函数Person === Person.prototype.constructor:" + (_Person === _Person.prototype.constructor));
    log("person1.__proto__ === Person.prototype:" + (person1.__proto__ === _Person.prototype));

    //isPrototypeOf：判断对象和构造函数之间的关系
    log("Person.prototype.isPrototypeOf(person1):" + _Person.prototype.isPrototypeOf(person1));

    //getPrototypeOf：获取对象的原型
    log("person1的prototype:");
    log(Object.getPrototypeOf(person1));

    //访问constructor
    log("constructor:");
    log(person1.constructor);

    //hasOwnProperty
    log("person1.hasOwnProperty(\"name\"):" + person1.hasOwnProperty("name"));
    log("person1.hasOwnProperty(\"test\"):" + person1.hasOwnProperty("test"));
    log("person1的prototype.hasOwnProperty(\"test\"):" + Object.getPrototypeOf(person1).hasOwnProperty("test"));
}

// in操作符
{
    var _Person2 = function _Person2() {};

    var hasPrototypeProperty = function hasPrototypeProperty(object, name) {
        return !object.hasOwnProperty(name) && name in object;
    };

    _Person2.test = "aaa";
    _Person2.prototype.name = "Nicholas";
    _Person2.prototype.age = 29;
    _Person2.prototype.job = "Software Engineer";
    _Person2.prototype.sayName = function () {
        log(this.name);
    };
    var person1 = new _Person2();
    var person2 = new _Person2();

    log(person1.hasOwnProperty("name")); // false
    log("name" in person1); // true
    person1.name = "Greg";

    log(person1.name);
    log(person1.hasOwnProperty("name"));
    log("name" in person1);

    log(hasPrototypeProperty(person1, "name"));

    // in查询不可枚举属性
    Object.defineProperty(person1, "height", {
        value: "180cm",
        enumerable: false
    });

    log("height" in person1); //返回true，说明查到了这个属性，尽管是不可枚举的

    // for in 枚举实例属性
    for (var attr in person1) {
        log(attr, person1[attr]);
    }
    for (var attr in _Person2) {
        log(attr, _Person2[attr]);
    }
}

// Object.keys()
{
    var _Person3 = function _Person3(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    };

    _Person3.prototype.sayName = function () {
        log(this.name);
    };
    var person1 = new _Person3("Nicholas", 29, "Software Engineer");

    log(Object.getOwnPropertyDescriptor(_Person3, "prototype"));
    var keys = Object.keys(_Person3.prototype);
    log(keys);
}

// Object.getOwnPropertyNames()
{
    var _Person4 = function _Person4(name, age, job) {};

    _Person4.prototype.name = "Nick";
    _Person4.prototype.age = 25;
    _Person4.prototype.job = "Software Engineer";
    _Person4.prototype.sayName = function () {
        log(this.name);
    };

    var keys = Object.getOwnPropertyNames(_Person4.prototype);
    log("通过getOwnPropertyNames获取Person.prototype上的属性");
    log(keys);

    var keys = Object.keys(_Person4.prototype);
    log("通过Object.keys获取Person.prototype上的属性");
    log(keys);

    var keys = Object.getOwnPropertyNames(_Person4);
    log("Person的keys：");
    log(keys);

    var keys = Object.keys(_Person4);
    log("通过Object.keys获取Person的属性");
    log(keys);
}

// instanceof的理解：
{
    var _Person5 = function _Person5() {};

    _Person5.prototype = {
        name: "Nick",
        age: 25,
        job: "Software Engineer",
        sayName: function sayName() {
            log(this.name);
        }
    };

    var friend = new _Person5();
    log(friend instanceof Object);
    log(friend instanceof _Person5);
    log(friend.constructor == _Person5);
    log(friend.constructor == Object);
    log(friend.constructor); // ƒ Object() { [native code] } 丢失了指向
    log(_Person5.prototype === Object.getPrototypeOf(friend)); // 这是instanceof仍然成立的原因
    // Object.defineProperty(Person.prototype, "constructor", {
    //     enumerable: false,
    //     value: Person
    // })
}

// 重写构造函数
{
    var _Person6 = function _Person6() {};

    _Person6.prototype = {
        name: "Nick",
        age: 25,
        job: "Software Engineer",
        sayName: function sayName() {
            log(this.name);
        }
    };

    Object.defineProperty(_Person6.prototype, "constructor", {
        enumerable: false,
        value: _Person6
    });
}

// 原型的动态性
{
    var Friend = function Friend() {};

    var friend = new Friend();
    log("之前的prototype：");

    log(Object.getPrototypeOf(friend));

    Friend.prototype = {
        name: "Nick",
        age: 25,
        job: "Software Engineer",
        sayName: function sayName() {
            log(this.name);
        }
    };

    Object.defineProperty(Friend.prototype, "constructor", {
        enumerable: false,
        value: Friend
    });

    // friend.sayName() // error
    log("之后的prototype：");
    log(Object.getPrototypeOf(friend));

    log("Friend.prototype:");
    log(Friend.prototype);

    log("friend instanceof Friend:因为二者的prototype已经不一样了");
    log(friend instanceof Friend);
}

// 4. 混合模式的常见写法
{
    var _Person7 = function _Person7(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.friends = ["Shelby", "Court"];
    };

    _Person7.prototype = {
        constructor: _Person7, // 通常的写法，并不介意constructor是否可枚举
        sayName: function sayName() {
            log(this.name);
        }
    };
}

// 5. 动态原型模式
{
    var _Person8 = function _Person8(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;

        // 方法
        if (typeof this.sayName !== "function") {
            _Person8.prototype.sayName = function () {
                log(this.name);
            };
        }
    };

    var friend = new _Person8("Nick", 25, "Software Engineer");
    friend.sayName();
}

// 6. 寄生构造函数模式
{
    var _Person9 = function _Person9(name, age, job) {
        var o = new Object();
        o.name = name;
        o.age = age;
        o.job = job;
        o.sayName = function () {
            log(this.name);
        };
        return o;
    };

    // 适用场景：扩展原有的对象
    var SpecialArray = function SpecialArray() {
        var values = new Array();
        values.push.apply(values, arguments); // 添加值
        values.toPipedString = function () {
            return this.join("|");
        };
        return values;
    };

    var friend = new _Person9("Nick", 25, "Software Engineer");
    friend.sayName();

    var colors = new SpecialArray("red", "blue", "green");
    log(colors.toPipedString());

    log(Object.getPrototypeOf(colors) === Array.prototype);
}

// 7. 稳妥构造函数模式
{
    var _Person10 = function _Person10(name, age, job) {
        // 创建要返回的对象
        var o = new Object();

        // 定义私有变量和函数
        // o.name = name
        // o.age = age
        // o.job = job

        // 添加方法
        o.sayName = function () {
            log(name);
        };

        return o;
    };

    var friend = _Person10("Nick", 25, "Software Engineer");
    friend.sayName();
}

// 8. ES6的class
{
    var _Person11 = function () {
        function _Person11(name, age, job) {
            _classCallCheck(this, _Person11);

            this.name = name;
            this.age = age;
            this.job = job;
        }

        _createClass(_Person11, [{
            key: "sayName",
            value: function sayName() {
                log(this.name);
            }
        }]);

        return _Person11;
    }();

    var person = new _Person11("Nick", 25, "Software Engineer");
    person.sayName();

    // constructor的属性检测
    log("class构建的constructor是否可枚举：");
    log(Object.getOwnPropertyDescriptor(_Person11.prototype, "constructor").enumerable); // 不可枚举，完美！
}

/***/ })
/******/ ]);