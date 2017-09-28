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

//create object
/* eslint-disable no-redeclare, no-console ,no-unused-vars*/
var log = console.log.bind(console);

// 工厂模式：无法识别对象的类型
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

// 构造函数模式：不同实例上的同名函数是不相等的
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

// 原型模式：在prototype上定义所有实例共享的属性和方法
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
    console.log("person1.hasOwnProperty(\"name\"):" + person1.hasOwnProperty("name"));
    console.log("person1.hasOwnProperty(\"test\"):" + person1.hasOwnProperty("test"));
    console.log("person1的prototype.hasOwnProperty(\"test\"):" + Object.getPrototypeOf(person1).hasOwnProperty("test"));
}

/***/ })
/******/ ]);