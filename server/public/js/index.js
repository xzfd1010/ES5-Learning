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
    }
    // 是否支持
};{}
// var isSupported = document.implementation.hasFeature("HTMLEvents", "2.0")
// var isSupported2 = document.implementation.hasFeature("UIEvent", "3.0")
// console.log(isSupported)
// console.log(isSupported2)


// load
{}
// EventUtil.addHandler(window, "load", function (e) {
//     console.log("loaded")
// })
//
// var img = new Image()
// img.src = "/img/demo.png"
// EventUtil.addHandler(img, "load", function (e) {
//     console.log("img loaded")
//     // document.body.appendChild(img)
// })
//
// var link = document.createElement("link")
// link.type = "text/css"
// link.rel = "stylesheet"
// EventUtil.addHandler(link, "load", function (e) {
//     console.log("css loaded")
// })
// link.href = "/css/test.css"
// document.getElementsByTagName("head")[0].appendChild(link)


// unload
{}
// var a = document.createElement("a")
// a.href = "http://www.baidu.com"
// a.innerText = "百度"
// a.style.fontSize = "16px"
// a.style.lineHeight = "20px"
// document.body.appendChild(a)

// beforeunload
// window.onbeforeunload = function () {
//     return "Do you want to leave?"
// }
//
// window.addEventListener("beforeunload", function (e) {
//     var confirmationMessage = "o/"
//     console.log(2)
//     e.returnValue = confirmationMessage     // Gecko, Trident, Chrome 34+
//     return confirmationMessage              // Gecko, WebKit, Chrome <34
// })


// resize
{}
// EventUtil.addHandler(window, "resize", function (event) {
//     console.log(1)
// })


// focus
// {
//     var isSupported = document.implementation.hasFeature("FocusEvent", "3.0")
//     console.log("FocusEvent", isSupported)
//
//     var input = document.getElementsByClassName("input")[0]
//     var input2 = document.getElementsByClassName("input")[1]
//     EventUtil.addHandler(input, "blur", function () {
//         console.log("blur triggered")
//     })
//     EventUtil.addHandler(input, "focus", function () {
//         console.log("focus triggered")
//     })
//     EventUtil.addHandler(input, "focusin", function () {
//         console.log("focusin triggered")
//     })
//     EventUtil.addHandler(input, "focusout", function () {
//         console.log("focusout triggered")
//     })
//     EventUtil.addHandler(input, "DOMFocusIn", function () {
//         console.log("DOMFocusIn triggered")
//     })
//     EventUtil.addHandler(input, "DOMFocusOut", function () {
//         console.log("DOMFocusOut triggered")
//     })
//
//     EventUtil.addHandler(input2, "blur", function () {
//         console.log("blur triggered")
//     })
//     EventUtil.addHandler(input2, "focus", function () {
//         console.log("focus triggered")
//     })
//     EventUtil.addHandler(input2, "focusin", function () {
//         console.log("focusin triggered")
//     })
//     EventUtil.addHandler(input2, "focusout", function () {
//         console.log("focusout triggered")
//     })
//     EventUtil.addHandler(input2, "DOMFocusIn", function () {
//         console.log("DOMFocusIn triggered")
//     })
//     EventUtil.addHandler(input2, "DOMFocusOut", function () {
//         console.log("DOMFocusOut triggered")
//     })
// }

// 鼠标事件
{
    var div = document.getElementById("someElement");
    // EventUtil.addHandler(div,"mousedown",function(){
    //     console.log("mousedown triggered")
    // })
    // EventUtil.addHandler(div,"mouseup",function(e){
    //     console.log("mouseup triggered")
    //     // console.log(e.cancelable)
    //     // e.preventDefault()
    //     // e.stopPropagation()
    //     // return false
    // })
    // EventUtil.addHandler(div,"click",function(){
    //     console.log("click triggered")
    // })
    // EventUtil.addHandler(div,"dblclick",function(){
    //     console.log("dbclick triggered")
    // })
}

// 坐标
{}
// var div = document.getElementById("someElement")
// EventUtil.addHandler(div, "click", function (event) {
//     event = EventUtil.getEvent(event)
// console.log("Client coordinates: ", event.clientX, event.clientY)
// console.log("Page coordinates: ", event.pageX, event.pageY)
// console.log("Screen coordinates: ", event.screenX, event.screenY)
// })


// 修改键
{}
// var div = document.getElementById("someElement")
// EventUtil.addHandler(div, "click", function (event) {
//     event = EventUtil.getEvent(event)
//     event.preventDefault()
//     var keys = new Array()
//     if (event.shiftKey) {
//         keys.push("shift")
//     }
//     if (event.ctrlKey) {
//         keys.push("ctrl")
//     }
//     if (event.altKey) {
//         keys.push("alt")
//     }
//     if (event.metaKey) {
//         keys.push("meta")
//     }
//     console.log("Keys:", keys.join(","))
// })


// 相关元素
{}
// var div = document.getElementById("someElement")
// EventUtil.addHandler(div, "mouseout", function (event) {
//     event = EventUtil.getEvent(event)
//     var target = EventUtil.getTarget(event)
//     var relatedTarget = EventUtil.getRelatedTarget(event)
//     console.log("Moused out of " + target.tagName + " to " + relatedTarget.tagName)
// })


// 鼠标按钮
{}
// var div = document.getElementById("someElement")
// EventUtil.addHandler(div, "mousedown", function (event) {
//     event = EventUtil.getEvent(event)
//     console.log(EventUtil.getButton(event))
// })


// detail
// {
//     var div = document.getElementById("someElement")
//     EventUtil.addHandler(div, "click", function (event) {
//         event = EventUtil.getEvent(event)
//         console.log(event.detail)
//     })
// }

// 滚轮
{
    // EventUtil.addHandler(document, "mousewheel", function (event) {
    //     event = EventUtil.getEvent(event)
    //     console.log(event.wheelDelta)
    // })
    //
    // EventUtil.addHandler(document, "DOMMouseScroll", function (event) {
    //     event = EventUtil.getEvent(event)
    //     console.log(event.detail)
    // })

    (function () {
        function handleMouseWheel(event) {
            event = EventUtil.getEvent(event);
            var delta = EventUtil.getWheelDelta(event);
            console.log(delta);
        }

        EventUtil.addHandler(document, "mousewheel", handleMouseWheel);
        EventUtil.addHandler(document, "DOMMouseScroll", handleMouseWheel);
    })();
}

// 键盘与文本事件
// {
//     var input = document.getElementsByTagName("input")[0]
//     EventUtil.addHandler(input,"input",function(){
//         console.log("textInput triggered")
//     })
// }

{}
// var input = document.getElementsByTagName("input")[0]
// EventUtil.addHandler(input, "keypress", function (event) {
//     event = EventUtil.getEvent(event)
//     console.log("charCode", event.charCode)
//     console.log("keyCode", event.keyCode)
//     console.log("key", event.key)
//     console.log("char", event.char)
//     console.log("location", event.location)
//     // console.log(EventUtil.getCharCode(event))
//
//     if(event.getModifierState){
//         console.log(event.getModifierState("Shift"))
//
//     }
// })

//input
{}
// var input = document.getElementsByClassName("input")[0]
// EventUtil.addHandler(input, "input", function (e) {
//     e = EventUtil.getEvent(e)
//     console.log(e.data)
// })


// 复合事件
{}
// var isSupported = document.implementation.hasFeature("CompositionEvent", "3.0")
// console.log("CompositionEvent", isSupported) // chrome true
//
// var textbox = document.getElementsByClassName("input")[0]
// EventUtil.addHandler(textbox, "compositionstart", function (event) {
//     console.log("compositionstart", event.data)
// })
//
// EventUtil.addHandler(textbox, "compositionupdate", function (event) {
//     console.log("compositionupdate", event.data)
// })
//
// EventUtil.addHandler(textbox, "compositionend", function (event) {
//     console.log("compositionend", event.data)
// })


// DOM变动事件
// {
//     var isSupported = document.implementation.hasFeature("MutationEvents", "2.0")
//     console.log("MutationEvents",isSupported)
//
// }
// HTML5事件
{}
// EventUtil.addHandler(window,"load",function(event){
//     var div = document.getElementById("myDiv")
//     EventUtil.addHandler(div,"contextmenu",function(event){
//         event = EventUtil.getEvent(event)
//         EventUtil.preventDefault(event)
//
//         var menu = document.getElementById("myMenu")
//         menu.style.left = event.clientX + "px"
//         menu.style.top = event.clientY + "px"
//         menu.style.visibility = "visible"
//     })
// })
//
// EventUtil.addHandler(document,"click",function(event){
//     document.getElementById("myMenu").style.visibility = "hidden"
// })

// DOMContentLoaded事件
// {
//     var script = document.createElement("script")
//     EventUtil.addHandler(script, "readystatechange", function (event) {
//         event = EventUtil.getEvent(event)
//         var target = EventUtil.getTarget(event)
//
//         if (target.readyState == "loaded" || target.readyState == "complete") {
//             EventUtil.removeHandler(target, "readystatechange", arguments.callee)
//             console.log("script readystate")
//         }
//     })
//     script.src="http://code.jquery.com/jquery-3.2.1.min.js"
//     document.body.appendChild(script)
//     EventUtil.addHandler(document, "DOMContentLoaded", function (event) {
//         console.log("DOMContentLoaded")
//         console.log(new Date().getMilliseconds())
//     })
//     EventUtil.addHandler(window, "load", function (event) {
//         console.log("loaded")
//         console.log(new Date().getMilliseconds())
//     })
//     setTimeout(function () {
//         console.log("timeout")
//         console.log(new Date().getMilliseconds())
//
//     }, 0)
//
//     EventUtil.addHandler(document, "readystatechange", function (event) {
//         if (document.readyState == "interactive" || document.readyState == "complete") {
//             EventUtil.removeHandler(document, "readystatechange", arguments.callee)
//             console.log("readystate changed")
//             console.log(new Date().getMilliseconds())
//         }
//     })
//
// }

// pageshow
// (function () {
//     var showCount = 0
//
//     EventUtil.addHandler(window, "load", function () {
//         console.log("Load fired")
//     })
//
//     EventUtil.addHandler(window, "pageshow", function () {
//         showCount++
//         console.log(event)
//         console.log("Show has been fired " + showCount + " times. Persisted? " + event.persisted)
//         console.log(window.performance)
//         console.log(window.performance.navigation.type)
//     })
//     console.log(showCount)
// })()

// {
//     EventUtil.addHandler(window, "hashchange", function (event) {
//         console.log("old url:" + event.oldURL + " \nnew URL: " + event.newURL)
//         console.log("Current hash: " + location.hash)
//     })
//     location.hash = "test"
// }

{
    EventUtil.addHandler(window, "load", function (event) {
        var div = document.getElementById("myDiv");
        div.innerHTML = "Current orientation is " + screen.orientation.type;

        EventUtil.addHandler(window, "orientationchange", function (event) {
            div.innerHTML = "Current orientation is " + screen.orientation.type;
        });

        EventUtil.addHandler(window, "deviceorientation", function (event) {
            var div = document.getElementById("myDiv");
            // div.style.webkitTransform = "rotate(" + Math.round(event.alpha) + "deg)"
        });
    });
}
// devicemotion
{
    EventUtil.addHandler(window, "devicemotion", function (event) {
        var output = document.getElementById("myDiv");
        if (event.rotationRate !== null) {
            output.innerHTML = " Alpha=" + event.rotationRate.alpha + "<br>, Beta=" + event.rotationRate.beta + "<br>, Gamma=" + event.rotationRate.gamma;
        }
    });
}

/***/ })
/******/ ]);