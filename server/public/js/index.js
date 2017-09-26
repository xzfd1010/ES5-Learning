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

/* eslint-disable no-redeclare, no-console ,no-unused-vars*/
// writable
{
    var person = {};
    Object.defineProperty(person, "name", {
        writable: false,
        value: "Nicholas"
    });

    console.log(person.name);
    person.name = "Greg";
    console.log(person.name);
}

// configurable
{
    var person = {};
    Object.defineProperty(person, "name", {
        configurable: false, // 不可配置

        value: "Nicholas"
    });
    console.log(person.name);
    person.name = "aaa";
    console.log(person.name);

    Object.defineProperty(person, "name", {
        writable: false
    });
}

//Object.getOwnPropertyDescriptor()
{
    var person = {};
    Object.defineProperty(person, "name", {
        configurable: true,
        value: "Nicholas"
    });
    console.log("person's attributes:");
    console.log(Object.getOwnPropertyDescriptor(person, "name"));

    Object.defineProperty(person, "name", {
        value: "nick"
    });
    console.log("通过defineProperty修改后的值：" + person.name);
    person.name = "arron";
    console.log("直接修改验证writable的有效性：" + (person.name === "arron"));

    var another = { name: "Nick" };
    console.log("another's attributes:");
    console.log(Object.getOwnPropertyDescriptor(another, "name"));
}

// 访问器属性
{
    var book = {
        _year: 2004,
        edition: 1
    };

    Object.defineProperty(book, "year", {
        get: function get() {
            return this._year;
        },
        set: function set(newValue) {
            // 如果newValue < 2004，则不会修改原有的_year的值
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    });
    console.log("year before:" + book.year);
    console.log("edition before:" + book.edition);
    book.year = 2005;
    console.log("year after:" + book.year);
    console.log("edition after:" + book.edition);

    console.log("book's attributes:");
    console.log(Object.getOwnPropertyDescriptor(book, "year"));
}

/***/ })
/******/ ]);