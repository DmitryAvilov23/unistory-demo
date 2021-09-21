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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../babel */ \"./babel.js\");\n/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/style.sass */ \"./sass/style.sass\");\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_style_sass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_sprite_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/sprite.svg */ \"./img/sprite.svg\");\n/* harmony import */ var _img_hero_hero_banner_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/hero/hero-banner.svg */ \"./img/hero/hero-banner.svg\");\n/* harmony import */ var _img_hero_upwork_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/hero/upwork.svg */ \"./img/hero/upwork.svg\");\n/* harmony import */ var _img_steps_step1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/steps/step1.svg */ \"./img/steps/step1.svg\");\n/* harmony import */ var _img_steps_step2_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/steps/step2.svg */ \"./img/steps/step2.svg\");\n/* harmony import */ var _img_steps_step3_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/steps/step3.svg */ \"./img/steps/step3.svg\");\n/* harmony import */ var _img_steps_step4_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/steps/step4.svg */ \"./img/steps/step4.svg\");\n/* harmony import */ var _img_steps_step_bg_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/steps/step-bg.svg */ \"./img/steps/step-bg.svg\");\n/* harmony import */ var _img_success_macbook_top_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/success/macbook-top.png */ \"./img/success/macbook-top.png\");\n/* harmony import */ var _modules_test__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/test */ \"./scripts/modules/test.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/slider */ \"./scripts/modules/slider.js\");\n\n // Картинки\n\n\n\n\n\n\n\n\n\n // Модули\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  Object(_modules_test__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(); //Sliders\n\n  var successSlider = new _modules_slider__WEBPACK_IMPORTED_MODULE_12__[\"Slider\"](\"slides-wrapper\", \".slider__slide\", document.getElementById(\"btn-prev\"), document.getElementById(\"btn-next\"));\n});\n\n//# sourceURL=webpack:///./scripts/index.js?");

/***/ }),

/***/ "./scripts/modules/slider.js":
/*!***********************************!*\
  !*** ./scripts/modules/slider.js ***!
  \***********************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slider\", function() { return Slider; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Slider = /*#__PURE__*/function () {\n  function Slider(slidesWrapperId, slidesClass, btnPrev, btnNext) {\n    var _this = this;\n\n    _classCallCheck(this, Slider);\n\n    _defineProperty(this, \"sliderCounter\", 0);\n\n    this.slidesWrapper = document.getElementById(slidesWrapperId);\n    this.slidesClass = slidesClass;\n    this.slides = document.querySelectorAll(slidesClass);\n    this.btnPrev = btnPrev;\n    this.btnNext = btnNext;\n    this.refreshSliderCounterValue(this.slides.length).then(function () {\n      _this.slidesWrapper.style.cssText += \"\\n          transition: 0.4s\\n        \";\n    });\n    this.createBindings();\n    this.createInfinityToNext();\n    this.createInfinityToPrev();\n    this.createEventListeners();\n    this.createMirror();\n  }\n\n  _createClass(Slider, [{\n    key: \"createMirror\",\n    value: function createMirror() {\n      var slides = document.querySelectorAll(this.slidesClass);\n      console.log(slides.length);\n      slides.forEach(function (item) {\n        var mirroredSlide = item.cloneNode(true);\n        mirroredSlide.style.cssText = \"\\n        transform: scale(1, -1) translateY(-120%);\\n        width: 100%;\\n        opacity: 0.3;\\n        height: 50px;\\n        position: absolute;\\n        bottom: 0;\\n        left: 0;\\n      \";\n        item.style.position = \"relative\";\n        item.innerHTML += mirroredSlide.outerHTML;\n      });\n    }\n  }, {\n    key: \"changeSlideToNext\",\n    value: function () {\n      var _changeSlideToNext = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this.checkSlidesLength(\"next\");\n\n              case 2:\n                this.sliderCounter++;\n                this.moveSliderWrapper();\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function changeSlideToNext() {\n        return _changeSlideToNext.apply(this, arguments);\n      }\n\n      return changeSlideToNext;\n    }()\n  }, {\n    key: \"changeSlideToPrev\",\n    value: function () {\n      var _changeSlideToPrev = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return this.checkSlidesLength(\"prev\");\n\n              case 2:\n                this.sliderCounter--;\n                this.moveSliderWrapper();\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function changeSlideToPrev() {\n        return _changeSlideToPrev.apply(this, arguments);\n      }\n\n      return changeSlideToPrev;\n    }()\n  }, {\n    key: \"checkSlidesLength\",\n    value: function () {\n      var _checkSlidesLength = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(way) {\n        var actualSlidesLength, slidesGroupLength;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                actualSlidesLength = document.querySelectorAll(\"\".concat(this.slidesClass, \" > \").concat(this.slidesClass)).length;\n                slidesGroupLength = 4;\n                console.log(this.sliderCounter, actualSlidesLength);\n\n                if (!(way === \"prev\")) {\n                  _context3.next = 11;\n                  break;\n                }\n\n                if (!(this.sliderCounter < slidesGroupLength)) {\n                  _context3.next = 9;\n                  break;\n                }\n\n                this.createInfinityToPrev();\n                _context3.next = 8;\n                return this.refreshSliderCounterValue(this.sliderCounter + slidesGroupLength);\n\n              case 8:\n                this.slidesWrapper.style.cssText += \"\\n              transition: 0.4s\\n            \";\n\n              case 9:\n                _context3.next = 12;\n                break;\n\n              case 11:\n                if (this.sliderCounter > actualSlidesLength - slidesGroupLength) {\n                  console.log(1);\n                  this.createInfinityToNext();\n                }\n\n              case 12:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function checkSlidesLength(_x) {\n        return _checkSlidesLength.apply(this, arguments);\n      }\n\n      return checkSlidesLength;\n    }()\n  }, {\n    key: \"createInfinityToNext\",\n    value: function createInfinityToNext() {\n      var _this2 = this;\n\n      var slides = [];\n      this.slides.forEach(function (item) {\n        var slide = item;\n        slides.push(item);\n      });\n      slides.forEach(function (item) {\n        var slide = item;\n        console.log(slide);\n\n        _this2.slidesWrapper.insertAdjacentHTML(\"beforeend\", slide.outerHTML);\n      });\n    }\n  }, {\n    key: \"createInfinityToPrev\",\n    value: function createInfinityToPrev() {\n      var _this3 = this;\n\n      var slides = [];\n      this.slides.forEach(function (item) {\n        var slide = item;\n        slides.push(item);\n      });\n      slides.reverse().forEach(function (item) {\n        var slide = item;\n\n        _this3.slidesWrapper.insertAdjacentHTML(\"afterbegin\", slide.outerHTML);\n      });\n    }\n  }, {\n    key: \"refreshSliderCounterValue\",\n    value: function () {\n      var _refreshSliderCounterValue = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(value) {\n        var _this4 = this;\n\n        return regeneratorRuntime.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.next = 2;\n                return new Promise(function (resolve) {\n                  _this4.slidesWrapper.style.transition = \"unset\";\n                  _this4.sliderCounter = value;\n\n                  _this4.moveSliderWrapper();\n\n                  setTimeout(function () {\n                    return resolve();\n                  }, 0);\n                });\n\n              case 2:\n                return _context4.abrupt(\"return\", _context4.sent);\n\n              case 3:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      function refreshSliderCounterValue(_x2) {\n        return _refreshSliderCounterValue.apply(this, arguments);\n      }\n\n      return refreshSliderCounterValue;\n    }()\n  }, {\n    key: \"moveSliderWrapper\",\n    value: function moveSliderWrapper() {\n      var _this$slides$;\n\n      var slideWidth = +((_this$slides$ = this.slides[0]) === null || _this$slides$ === void 0 ? void 0 : _this$slides$.getBoundingClientRect().width) + 4;\n      this.slidesWrapper.style.cssText += \"\\n    transform: translateX(-\".concat(this.sliderCounter * slideWidth - 30, \"px)\\n    \");\n    }\n  }, {\n    key: \"createEventListeners\",\n    value: function createEventListeners() {\n      this.btnPrev.addEventListener(\"click\", this.changeSlideToPrev);\n      this.btnNext.addEventListener(\"click\", this.changeSlideToNext);\n    }\n  }, {\n    key: \"createBindings\",\n    value: function createBindings() {\n      this.changeSlideToNext = this.changeSlideToNext.bind(this);\n      this.changeSlideToPrev = this.changeSlideToPrev.bind(this);\n      this.createInfinityToNext = this.createInfinityToNext.bind(this);\n      this.createInfinityToPrev = this.createInfinityToPrev.bind(this);\n      this.moveSliderWrapper = this.moveSliderWrapper.bind(this);\n    }\n  }]);\n\n  return Slider;\n}();\n\n//# sourceURL=webpack:///./scripts/modules/slider.js?");

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