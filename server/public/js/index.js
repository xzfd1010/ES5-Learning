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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// 私有变量
{
    // num1、num2、sum都是私有变量
    var add = function add(num1, num2) {
        var sum = num1 + num2;
        return sum;
    };
}

// 特权方法
{
    var _MyObject = function _MyObject() {
        // 私有变量和私有函数
        var privateVariable = 10;

        function privateFunction() {
            return false;
        }

        // 特权方法：
        this.publicMethod = function () {
            privateVariable++;
            return privateFunction(); // 这里是执行而非返回函数体
        };
    };

    var obj = new _MyObject();
    console.log(obj.publicMethod);
}

// 用途1：隐藏方法和数据
{
    var _Person = function _Person(name) {
        this.getName = function () {
            return name;
        };

        this.setName = function (value) {
            name = value;
        };
    };

    var person = new _Person("Nick");
    console.log(person.getName());
    person.setName("Michael");
    console.log(person.getName());
}

// 静态私有变量
{
    (function () {
        // 私有变量和私有函数
        var privateVariable = 10;

        function privateFunction() {
            return false;
        }

        // 构造函数
        MyObject = function MyObject() {};

        // 共有/特权方法
        MyObject.prototype.publicMethod = function () {
            privateVariable++;
            return privateFunction();
        };
    })();
}
// 实例
{
    (function () {
        var name = "";
        Person = function Person(value) {
            name = value;
        };

        Person.prototype.getName = function () {
            return name;
        };

        Person.prototype.setName = function (value) {
            name = value;
        };
    })();

    var person1 = new Person("Nick");
    console.log(person1.getName());
    person1.setName("Greg");
    console.log(person1.getName());

    var person2 = new Person("Michael");
    console.log(person1.getName());
    console.log(person2.getName());
}

// 单例模式
{
    var singleton = {
        name: "value",
        method: function method() {
            // 方法代码
        }
    };
}
// 模块模式
{
    var singleton = function () {
        var privateVariable = 10;

        function privateFunction() {
            return false;
        }

        return {
            publicProperty: true,
            publicMethod: function publicMethod() {
                privateVariable++;
                return privateFunction();
            }
        };
    }();

    console.log(singleton);
}
// 实例
{
    var application = function () {
        // 私有变量和函数
        var components = new Array();

        // 初始化
        components.push(new Object());

        return {
            getComponentCount: function getComponentCount() {
                return components.length;
            },
            registerComponent: function registerComponent(component) {
                if ((typeof component === "undefined" ? "undefined" : _typeof(component)) === "object") {
                    components.push(component);
                }
            }
        };
    }();
}

// 增强模块模式
{
    var CustomType = function CustomType() {};

    var singleton = function () {
        // 私有变量和私有函数
        var privateVariable = 10;
        function privateFunction() {
            return false;
        }

        // 创建对象
        var object = new CustomType();

        // 添加特权/公有属性和方法
        object.publicMethod = function () {
            privateVariable++;
            return privateFunction();
        };

        // 返回对象
        return object;
    }();

    console.log(singleton);
}

/***/ })
/******/ ]);