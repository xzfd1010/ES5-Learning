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

{
    var supportsTraversals = document.implementation.hasFeature("Traversal", "2.0");
    var supportsNodeIterator = typeof document.createNodeIterator == "function";
    var supportsTreeWalker = typeof document.createTreeWalker == "function";

    console.log("supportsTraversals", supportsTraversals);
    console.log("supportsNodeIterator", supportsNodeIterator);
    console.log("supportsTreeWalker", supportsTreeWalker);
}

// NodeIterator
{

    var html = document.documentElement;

    var filter = {
        acceptNode: function acceptNode(node) {
            return node.tagName.toLowerCase() == "p" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    };

    var iterator = document.createNodeIterator(html, NodeFilter.SHOW_ELEMENT, filter, false);
    console.log(iterator);

    // 实例1
    var div = document.getElementById("div1");
    var iterator = document.createNodeIterator(div, NodeFilter.SHOW_ELEMENT, null, false);
    var node = iterator.nextNode();
    while (node !== null) {
        console.log(node.tagName);
        node = iterator.nextNode();
    }
}
// 实例2
{
    var div = document.getElementById("div1");
    var filter = {
        acceptNode: function acceptNode(node) {
            return node.tagName.toLowerCase() == "li" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    };
    var iterator = document.createNodeIterator(div, NodeFilter.SHOW_ELEMENT, filter, false);
    var node = iterator.nextNode();
    while (node !== null) {
        console.log(node.tagName);
        node = iterator.nextNode();
    }
}

// TreeWalker
{
    var div = document.getElementById("div1");
    var filter = {
        acceptNode: function acceptNode(node) {
            return node.tagName.toLowerCase() == "li" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    };
    var walker = document.createTreeWalker(div, NodeFilter.SHOW_ELEMENT, filter, false);
    var node = walker.nextNode();
    while (node !== null) {
        console.log(node.tagName);
        node = walker.nextNode();
    }
}

// 不定义filter的treeWalker
{
    var div = document.getElementById("div1");
    var walker = document.createTreeWalker(div, NodeFilter.SHOW_ELEMENT, null, false);
    walker.firstChild();
    walker.nextSibling();
    var node = walker.firstChild();
    console.log(node);
    while (node !== null) {
        console.log(node.tagName);
        console.log(walker.currentNode);
        node = walker.nextNode();
    }
}

/***/ })
/******/ ]);