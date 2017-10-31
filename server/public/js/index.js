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
    },
    getRelatedTarget: function getRelatedTarget(event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    },
    getButton: function getButton(event) {
        if (document.implementation.hasFeature("Mouseevents", "2.0")) {
            return event.button;
        } else {
            switch (event.button) {
                // 把IE的某些事件简单看作DOM的事件
                case 0:
                    return;
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    getWheelDelta: function getWheelDelta(event) {
        if (event.wheelDelta) {
            return event.wheelDelta;
        } else {
            return -event.detail * 120;
        }
    },
    getCharCode: function getCharCode(event) {
        if (typeof event.charCode == "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    },
    getClipboardText: function getClipboardText(event) {
        var clipboardData = event.clipboardData || window.clipboardData;
        return clipboardData.getData("text");
    },
    setClipboardText: function setClipboardText(event, value) {
        if (event.clipboardData) {
            return event.clipboardData.setData("text/plain", value);
        } else if (window.clipboardData) {
            return window.clipboardData.setData("text", value);
        }
    }

    // 自定义错误
};{
    // function CustomError(message) {
    //
    //     this.name = "CustomError"
    //     this.message = message
    // }
    //
    // CustomError.prototype = new Error()
    //
    // throw new CustomError("My message")
}

window.onerror = function (message, url, line) {
    console.log(message, url, line);
    return false;
};

// 抛出错误的时机
{
    var process = function process(values) {
        if (!(values instanceof Array)) {
            throw new Error("process():Argument must be an Array");
        }
        values.sort();

        for (var i = 0, len = values.length; i < len; i++) {
            if (values[i] > 100) {
                return values[i];
            }
        }

        return -1;
    };

    // process(1)

}

// 图像的error事件
{
    var image = new Image();
    EventUtil.addHandler(image, "load", function (event) {
        console.log("Image loaded");
    });

    EventUtil.addHandler(image, "error", function (event) {
        console.log("Image not loaded");
    });

    image.src = "smilex.gif";
}

{
    var addQueryStringArg = function addQueryStringArg(url, name, value) {
        if (url.indexOf("?") == -1) {
            url += "?";
        } else {
            url += "&";
        }

        url += encodeURIComponent(name) + "=" + encodeURIComponent(value);

        return url;
    };
}

{
    var logError = function logError(sev, msg) {
        var img = new Image();
        img.src = "log.php?sev=" + encodeURIComponent(sev) + "&msg=" + encodeURIComponent(msg);
    };

    try {
        // xxx
    } catch (error) {
        logError("nonfatal", "xxx" + error.message);
    }
}

/***/ })
/******/ ]);