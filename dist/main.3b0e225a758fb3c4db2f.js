/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./babel.js":
/*!******************!*\
  !*** ./babel.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./babel.js?");

/***/ }),

/***/ "./img/hero/hero-banner.svg":
/*!**********************************!*\
  !*** ./img/hero/hero-banner.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/hero-banner.svg\");\n\n//# sourceURL=webpack:///./img/hero/hero-banner.svg?");

/***/ }),

/***/ "./img/hero/upwork.svg":
/*!*****************************!*\
  !*** ./img/hero/upwork.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/upwork.svg\");\n\n//# sourceURL=webpack:///./img/hero/upwork.svg?");

/***/ }),

/***/ "./img/sprite.svg":
/*!************************!*\
  !*** ./img/sprite.svg ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/sprite.svg\");\n\n//# sourceURL=webpack:///./img/sprite.svg?");

/***/ }),

/***/ "./img/steps/step-bg.svg":
/*!*******************************!*\
  !*** ./img/steps/step-bg.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/step-bg.svg\");\n\n//# sourceURL=webpack:///./img/steps/step-bg.svg?");

/***/ }),

/***/ "./img/steps/step1.svg":
/*!*****************************!*\
  !*** ./img/steps/step1.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/step1.svg\");\n\n//# sourceURL=webpack:///./img/steps/step1.svg?");

/***/ }),

/***/ "./img/steps/step2.svg":
/*!*****************************!*\
  !*** ./img/steps/step2.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/step2.svg\");\n\n//# sourceURL=webpack:///./img/steps/step2.svg?");

/***/ }),

/***/ "./img/steps/step3.svg":
/*!*****************************!*\
  !*** ./img/steps/step3.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/step3.svg\");\n\n//# sourceURL=webpack:///./img/steps/step3.svg?");

/***/ }),

/***/ "./img/steps/step4.svg":
/*!*****************************!*\
  !*** ./img/steps/step4.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/step4.svg\");\n\n//# sourceURL=webpack:///./img/steps/step4.svg?");

/***/ }),

/***/ "./img/success/macbook-top.png":
/*!*************************************!*\
  !*** ./img/success/macbook-top.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/macbook-top.png\");\n\n//# sourceURL=webpack:///./img/success/macbook-top.png?");

/***/ }),

/***/ "./img/success/million1.png":
/*!**********************************!*\
  !*** ./img/success/million1.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/million1.png\");\n\n//# sourceURL=webpack:///./img/success/million1.png?");

/***/ }),

/***/ "./img/success/million2.png":
/*!**********************************!*\
  !*** ./img/success/million2.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/million2.png\");\n\n//# sourceURL=webpack:///./img/success/million2.png?");

/***/ }),

/***/ "./img/success/million3.png":
/*!**********************************!*\
  !*** ./img/success/million3.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/million3.png\");\n\n//# sourceURL=webpack:///./img/success/million3.png?");

/***/ }),

/***/ "./img/success/million4.png":
/*!**********************************!*\
  !*** ./img/success/million4.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/million4.png\");\n\n//# sourceURL=webpack:///./img/success/million4.png?");

/***/ }),

/***/ "./sass/style.sass":
/*!*************************!*\
  !*** ./sass/style.sass ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./sass/style.sass?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../babel */ \"./babel.js\");\n/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/style.sass */ \"./sass/style.sass\");\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_style_sass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_sprite_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/sprite.svg */ \"./img/sprite.svg\");\n/* harmony import */ var _img_hero_hero_banner_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/hero/hero-banner.svg */ \"./img/hero/hero-banner.svg\");\n/* harmony import */ var _img_hero_upwork_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/hero/upwork.svg */ \"./img/hero/upwork.svg\");\n/* harmony import */ var _img_steps_step1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/steps/step1.svg */ \"./img/steps/step1.svg\");\n/* harmony import */ var _img_steps_step2_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/steps/step2.svg */ \"./img/steps/step2.svg\");\n/* harmony import */ var _img_steps_step3_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/steps/step3.svg */ \"./img/steps/step3.svg\");\n/* harmony import */ var _img_steps_step4_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/steps/step4.svg */ \"./img/steps/step4.svg\");\n/* harmony import */ var _img_steps_step_bg_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/steps/step-bg.svg */ \"./img/steps/step-bg.svg\");\n/* harmony import */ var _img_success_macbook_top_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/success/macbook-top.png */ \"./img/success/macbook-top.png\");\n/* harmony import */ var _img_success_million1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/success/million1.png */ \"./img/success/million1.png\");\n/* harmony import */ var _img_success_million2_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/success/million2.png */ \"./img/success/million2.png\");\n/* harmony import */ var _img_success_million3_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/success/million3.png */ \"./img/success/million3.png\");\n/* harmony import */ var _img_success_million4_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/success/million4.png */ \"./img/success/million4.png\");\n/* harmony import */ var _modules_test__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/test */ \"./scripts/modules/test.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/slider */ \"./scripts/modules/slider.js\");\n\n // Картинки\n\n\n\n\n\n\n\n\n\n\n\n\n\n // Модули\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  Object(_modules_test__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(); //Sliders\n\n  var successSlider = new _modules_slider__WEBPACK_IMPORTED_MODULE_16__[\"Slider\"]({\n    slidesWrapperId: \"slides-wrapper\",\n    slidesClass: \".slider__slide\",\n    activeClass: \".slider__slide--active\",\n    btnPrev: document.getElementById(\"btn-prev\"),\n    btnNext: document.getElementById(\"btn-next\")\n  });\n});\n\n//# sourceURL=webpack:///./scripts/index.js?");

/***/ }),

/***/ "./scripts/modules/slider.js":
/*!***********************************!*\
  !*** ./scripts/modules/slider.js ***!
  \***********************************/
/*! exports provided: Slider */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ../node_modules/babel-loader/lib/index.js):\\nSyntaxError: D:\\\\websites\\\\projects\\\\UnistoryNew\\\\src\\\\scripts\\\\modules\\\\slider.js: Expecting Unicode escape sequence \\\\uXXXX. (95:7)\\n\\n\\u001b[0m \\u001b[90m 93 |\\u001b[39m     \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mslides\\u001b[33m.\\u001b[39mforEach((item) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 94 |\\u001b[39m       \\u001b[36mconst\\u001b[39m slide \\u001b[33m=\\u001b[39m item\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 95 |\\u001b[39m       \\u001b[37m\\u001b[41m\\u001b[1m\\\\\\u001b[22m\\u001b[49m\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 96 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 97 |\\u001b[39m       \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mslidesWrapper\\u001b[33m.\\u001b[39minsertAdjacentHTML(\\u001b[32m\\\"beforeend\\\"\\u001b[39m\\u001b[33m,\\u001b[39m slide\\u001b[33m.\\u001b[39mouterHTML)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 98 |\\u001b[39m     })\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser._raise (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:796:17)\\n    at Parser.raiseWithData (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:789:17)\\n    at Parser.raise (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:750:17)\\n    at Parser.readWord1 (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:2853:16)\\n    at Parser.readWord (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:2879:23)\\n    at Parser.getTokenFromCode (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:2328:14)\\n    at Parser.nextToken (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:1749:12)\\n    at Parser.next (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:1654:10)\\n    at Parser.eat (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:1659:12)\\n    at Parser.isLineTerminator (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3222:17)\\n    at Parser.semicolon (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3226:25)\\n    at Parser.parseVarStatement (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13291:10)\\n    at Parser.parseStatementContent (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12873:21)\\n    at Parser.parseStatement (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12806:17)\\n    at Parser.parseBlockOrModuleBlockBody (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13395:25)\\n    at Parser.parseBlockBody (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13386:10)\\n    at Parser.parseBlock (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13370:10)\\n    at Parser.parseFunctionBody (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12254:24)\\n    at Parser.parseArrowExpression (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12226:10)\\n    at Parser.parseParenAndDistinguishExpression (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11802:12)\\n    at Parser.parseExprAtom (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11419:23)\\n    at Parser.parseExprSubscripts (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11090:23)\\n    at Parser.parseUpdate (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11070:21)\\n    at Parser.parseMaybeUnary (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11048:23)\\n    at Parser.parseExprOps (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10891:23)\\n    at Parser.parseMaybeConditional (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10865:23)\\n    at Parser.parseMaybeAssign (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10823:21)\\n    at D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10785:39\\n    at Parser.allowInAnd (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12604:12)\\n    at Parser.parseMaybeAssignAllowIn (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10785:17)\\n    at Parser.parseExprListItem (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12341:18)\\n    at Parser.parseCallExpressionArguments (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11294:22)\\n    at Parser.parseCoverCallAndAsyncArrowHead (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11201:29)\\n    at Parser.parseSubscript (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11134:19)\\n    at Parser.parseSubscripts (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11107:19)\\n    at Parser.parseExprSubscripts (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11096:17)\");\n\n//# sourceURL=webpack:///./scripts/modules/slider.js?");

/***/ }),

/***/ "./scripts/modules/test.js":
/*!*********************************!*\
  !*** ./scripts/modules/test.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar test = function test() {//   alert(\"a\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test);\n\n//# sourceURL=webpack:///./scripts/modules/test.js?");

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi @babel/polyfill ./scripts/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"../node_modules/@babel/polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./scripts/index.js */\"./scripts/index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./scripts/index.js?");

/***/ })

/******/ });