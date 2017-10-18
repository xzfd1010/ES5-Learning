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

// addHandler 使用DOM0级方法、DOM2级方法或IE来添加事件
var EventUtil = {
    addHandler: function addHandler(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            // 0级事件代替
            element["on" + type] = handler;
        }
    },
    getEvent: function getEvent(event) {
        return event ? event : window.event;
    },
    getTarget: function getTarget(event) {
        return event.target || event.srcElement;
    },
    preventDefault: function preventDefault(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            evnet.returnValue = false;
        }
    },
    removeHandler: function removeHandler(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    stopPropagation: function stopPropagation(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};
var div = document.getElementById("someElement");
var handler = function handler(e) {
    // console.log("click")
    // console.log(e.defaultPrevented)
    // console.log(e.detail)
    console.log("currentTarget", e.currentTarget);
    console.log("target", e.target);
    console.log("this", this);
};
EventUtil.addHandler(div, "click", handler);

var btn = document.getElementById("myBtn");
// {
//     var handler = function(event){
//         switch (event.type){
//             case "click":
//                 console.log("clicked")
//                 break
//             case "mouseover":
//                 event.target.style.backgroundColor = "deepskyblue"
//                 break
//             case "mouseout":
//                 console.log(event.type)
//                 event.target.style.backgroundColor = ""
//                 break
//         }
//     }
//     btn.onclick = handler
//     btn.onmouseover = handler
//     btn.onmouseout = handler
// }

// eventPhase
{
    btn.onclick = function (event) {
        console.log("btn.onclick", event.eventPhase); // 2 处于目标阶段
    };
    document.body.addEventListener("click", function (event) {
        console.log("body.listener", event.eventPhase); // 1 表示捕获阶段
    }, true);
    document.body.onclick = function (event) {
        console.log("body.onclick", event.eventPhase);
    };
}

/***/ })
/******/ ]);