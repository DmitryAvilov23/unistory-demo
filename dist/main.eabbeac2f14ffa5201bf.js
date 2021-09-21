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

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ../node_modules/babel-loader/lib/index.js):\\nSyntaxError: D:\\\\websites\\\\projects\\\\UnistoryNew\\\\src\\\\scripts\\\\index.js: Unexpected token (18:42)\\n\\n\\u001b[0m \\u001b[90m 16 |\\u001b[39m test()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 |\\u001b[39m \\u001b[90m//Sliders\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 18 |\\u001b[39m \\u001b[36mconst\\u001b[39m successSlider \\u001b[33m=\\u001b[39m \\u001b[36mnew\\u001b[39m \\u001b[33mSlider\\u001b[39m(document\\u001b[33m.\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m                                           \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 19 |\\u001b[39m\\u001b[0m\\n    at Parser._raise (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:796:17)\\n    at Parser.raiseWithData (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:789:17)\\n    at Parser.raise (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:750:17)\\n    at Parser.unexpected (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3257:16)\\n    at Parser.parseIdentifierName (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12371:18)\\n    at Parser.parseIdentifier (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12349:23)\\n    at Parser.parseMember (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11149:103)\\n    at Parser.parseSubscript (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11136:19)\\n    at Parser.parseSubscripts (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11107:19)\\n    at Parser.parseExprSubscripts (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11096:17)\\n    at Parser.parseUpdate (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11070:21)\\n    at Parser.parseMaybeUnary (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11048:23)\\n    at Parser.parseExprOps (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10891:23)\\n    at Parser.parseMaybeConditional (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10865:23)\\n    at Parser.parseMaybeAssign (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10823:21)\\n    at D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10785:39\\n    at Parser.allowInAnd (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12604:12)\\n    at Parser.parseMaybeAssignAllowIn (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10785:17)\\n    at Parser.parseExprListItem (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12341:18)\\n    at Parser.parseExprList (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12311:22)\\n    at Parser.parseNewArguments (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11889:25)\\n    at Parser.parseNew (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11883:10)\\n    at Parser.parseNewOrNewTarget (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11869:17)\\n    at Parser.parseExprAtom (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11456:21)\\n    at Parser.parseExprSubscripts (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11090:23)\\n    at Parser.parseUpdate (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11070:21)\\n    at Parser.parseMaybeUnary (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11048:23)\\n    at Parser.parseExprOps (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10891:23)\\n    at Parser.parseMaybeConditional (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10865:23)\\n    at Parser.parseMaybeAssign (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10823:21)\\n    at D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10785:39\\n    at Parser.allowInAnd (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12598:16)\\n    at Parser.parseMaybeAssignAllowIn (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10785:17)\\n    at Parser.parseVar (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13476:70)\\n    at Parser.parseVarStatement (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13290:10)\\n    at Parser.parseStatementContent (D:\\\\websites\\\\projects\\\\UnistoryNew\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12873:21)\");\n\n//# sourceURL=webpack:///./scripts/index.js?");

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