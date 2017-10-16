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

// 测试浏览器
{
    var supportDOM2CSS = document.implementation.hasFeature("CSS", "2.0");
    var supportDOM2CSS2 = document.implementation.hasFeature("CSS2", "2.0");

    console.log("supportDOM2CSS", supportDOM2CSS);
    console.log("supportDOM2CSS2", supportDOM2CSS2);
}

//style
{
    var div = document.getElementById("myDiv");
    div.style.cssText = "width:80px;height:30px;background-color:deepskyblue;border:2px solid #ccc;";
    console.log(div);

    for (var i = 0, len = div.style.length; i < len; i++) {
        var prop = div.style[i];
        var value = div.style.getPropertyValue(prop);
        console.log(prop + ":" + value);
    }

    var declaration = div.style;
    var rule = declaration.parentRule;
    console.log(declaration.parentRule);

    // for (var i = 0, len = div.style.length; i < len; i++) {
    //     var prop = div.style[i]
    //     var value = div.style.getPropertyCSSValue(prop)
    //     console.log(prop + ":" + value)
    // }
}

// getComputedStyle(ele,null/:after)
{
    var div = document.getElementById("myDiv");
    var computedStyle = document.defaultView.getComputedStyle(div, null);

    console.log(computedStyle.backgroundColor);
    console.log(computedStyle.border);
}

/***/ })
/******/ ]);