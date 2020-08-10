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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(4)
var $app_style$ = __webpack_require__(5)
var $app_script$ = __webpack_require__(6)

$app_define$('@app-component/hello', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/hello',{ packagerName:'fa-toolkit', packagerVersion: '2.1.0-Stable.300'})

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "header"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "scan"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Hello/img/sm.png"
              },
              "events": {
                "click": "scancore"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "input"
          ],
          "children": [
            {
              "type": "input",
              "attr": {
                "placeholder": "百度搜索",
                "id": "st",
                "value": function () {return this.accountValue}
              },
              "classList": [
                "search-text"
              ],
              "id": "st",
              "events": {
                "change": "getAccountValue"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "search"
          ],
          "children": [
            {
              "type": "input",
              "attr": {
                "type": "button",
                "value": "搜索",
                "id": "sb"
              },
              "classList": [
                "search-btn"
              ],
              "id": "sb",
              "events": {
                "click": "search_btn"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "content"
      ],
      "children": [
        {
          "type": "web",
          "attr": {
            "src": function () {return this.websrc},
            "trustedurl": function () {return this.list},
            "id": "web"
          },
          "classList": [
            "web-page"
          ],
          "events": {
            "pagestart": "onPageStart",
            "pagefinish": "onPageFinish",
            "error": "onError",
            "message": "onMessage"
          },
          "id": "web"
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "footer"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "back"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Hello/img/back.png",
                "id": "back",
                "alt": "返回"
              },
              "id": "back",
              "events": {
                "click": "back"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "refresh"
          ],
          "events": {
            "click": "refresh"
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Hello/img/refresh.png",
                "alt": "刷新",
                "id": "refresh"
              },
              "id": "refresh"
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".title": {
    "fontSize": "100px"
  },
  ".header": {
    "width": "95%",
    "height": "110px",
    "borderTopWidth": "5px",
    "borderRightWidth": "5px",
    "borderBottomWidth": "5px",
    "borderLeftWidth": "5px",
    "borderStyle": "solid",
    "borderTopColor": "#1a1a1a",
    "borderRightColor": "#1a1a1a",
    "borderBottomColor": "#1a1a1a",
    "borderLeftColor": "#1a1a1a",
    "display": "flex",
    "top": "5px",
    "paddingTop": "5px",
    "paddingRight": "5px",
    "paddingBottom": "5px",
    "paddingLeft": "5px",
    "borderRadius": "20px"
  },
  ".search": {
    "width": "150px",
    "height": "80px",
    "backgroundColor": "#248dff",
    "position": "absolute",
    "top": "55px",
    "marginTop": "-40px",
    "right": "15px",
    "borderRadius": "10px"
  },
  ".search input": {
    "width": "100%",
    "height": "100%",
    "textAlign": "center",
    "color": "#ffffff",
    "marginTop": "auto",
    "marginRight": "auto",
    "marginBottom": "auto",
    "marginLeft": "auto",
    "fontSize": "40px",
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  ".input": {
    "width": "400px",
    "height": "80px",
    "position": "absolute",
    "top": "55px",
    "marginTop": "-40px",
    "marginLeft": "120px"
  },
  ".search-text": {
    "width": "100%",
    "height": "100%",
    "fontSize": "40px"
  },
  ".scan": {
    "position": "absolute",
    "top": "55px",
    "marginTop": "-40px",
    "marginLeft": "20px"
  },
  ".scan image": {
    "width": "80px",
    "height": "80px"
  },
  ".web-page": {
    "width": "100%",
    "height": "1300px",
    "top": "20px"
  },
  ".footer": {
    "width": "100%",
    "height": "90px",
    "borderTopWidth": "1px",
    "borderTopStyle": "solid",
    "borderTopColor": "#b0b0b0",
    "backgroundColor": "#ffffff",
    "position": "fixed",
    "display": "flex",
    "bottom": "0px"
  },
  ".back": {
    "width": "70px",
    "height": "70px",
    "marginTop": "auto",
    "marginRight": "auto",
    "marginBottom": "auto",
    "marginLeft": "auto"
  },
  ".refresh": {
    "width": "60px",
    "height": "60px",
    "marginTop": "auto",
    "marginRight": "auto",
    "marginBottom": "auto",
    "marginLeft": "auto"
  },
  ".footer text": {
    "fontSize": "38px"
  },
  ".text_active": {
    "color": "#cd2325"
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.barcode"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.webview"));

var _system4 = _interopRequireDefault($app_require$("@app-module/system.storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  data: {
    title: '',
    context: '',
    websrc: '',
    arrowRightShow: true,
    isRefreshing: false,
    list: [/.*/, "new RegExp('https?.*')"],
    msg: '',
    accountValue: ''
  },
  onInit: function onInit() {
    this.$on('arrowLeft', this.arrowLeftIcon);
    this.$on('arrowRight', this.arrowRightIcon);
    this.websrc = "https://m.baidu.com/";

    _system4["default"].get({
      key: 'endwebsrc',
      success: function success(data) {
        console.log("handling success:1" + data);

        if (data !== null && data !== "https://m.baidu.com/") {
          _system3["default"].loadUrl({
            url: data
          });
        }
      },
      fail: function fail(data, code) {
        console.log("handling fail, code=" + code);
      }
    });
  },
  getAccountValue: function getAccountValue(e) {
    this.accountValue = e.value;
    console.info("value=" + e.value);
    console.info(this.accountValue);
  },
  search_btn: function search_btn() {
    this.websrc = 'https://m.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=' + this.accountValue;
  },
  scancore: function scancore() {
    _system["default"].scan({
      success: function success(data) {
        console.log('handling success: ' + data.result);

        _system3["default"].loadUrl({
          url: data.result
        });
      },
      fail: function fail(data, code) {
        console.log('handling fail, code = ' + code);
      }
    });
  },
  onPageStart: function onPageStart(e) {
    this.isRefreshing = false;
    console.info('pagestart: ' + e.url);
  },
  onPageFinish: function onPageFinish(e) {
    console.info('pagefinish: ' + e.url);

    _system4["default"].set({
      key: 'endwebsrc',
      value: e.url,
      success: function success(data) {
        console.log("handling success");
      },
      fail: function fail(data, code) {
        console.log("handling fail, code=" + code);
      }
    });

    this.arrowRightShow = e.canForward;
  },
  onError: function onError() {
    console.info('pageError');
  },
  onMessage: function onMessage(e) {
    console.info('onmessage e = ' + e.message + ", url = " + e.url);
    this.msg = e.message;
  },
  arrowLeftIcon: function arrowLeftIcon() {
    this.isCanBack();
  },
  arrowRightIcon: function arrowRightIcon() {
    this.isCanForward();
  },
  isCanForward: function isCanForward() {
    this.$element('web').canForward({
      callback: function (e) {
        if (e) {
          this.$element('web').forward();
        }
      }.bind(this)
    });
  },
  isCanBack: function isCanBack() {
    this.$element('web').canBack({
      callback: function (e) {
        if (e) {
          this.$element('web').back();
        } else {
          _system2["default"].back();
        }
      }.bind(this)
    });
  },
  back: function back(e) {
    this.$dispatch("arrowLeft");
  },
  next: function next() {
    this.$dispatch('arrowRight');
  },
  refresh: function refresh(e) {
    this.$element('web').reload();
  },
  sendMessage: function sendMessage() {
    this.$element('web').postMessage({
      message: 'message to Web page'
    });
  }
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXEhlbGxvXFxoZWxsby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vZTovSHVhd2VpIFF1aWNrQXBwLXByb2plY3QvY29tLmh1YXdlaS5kZW1vL3NyYy9IZWxsby9oZWxsby51eCIsIndlYnBhY2s6Ly8vZTovSHVhd2VpIFF1aWNrQXBwLXByb2plY3QvY29tLmh1YXdlaS5kZW1vL3NyYy9IZWxsby9oZWxsby51eD8zMWY2Iiwid2VicGFjazovLy9lOi9IdWF3ZWkgUXVpY2tBcHAtcHJvamVjdC9jb20uaHVhd2VpLmRlbW8vc3JjL0hlbGxvL2hlbGxvLnV4Pzc0MjEiLCJ3ZWJwYWNrOi8vL2U6L0h1YXdlaSBRdWlja0FwcC1wcm9qZWN0L2NvbS5odWF3ZWkuZGVtby9zcmMvSGVsbG8vaGVsbG8udXg/YjgzYSJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9oZWxsby51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxIdWF3ZWkgUXVpY2tBcHAtcHJvamVjdFxcXFxjb20uaHVhd2VpLmRlbW9cXFxcc3JjXFxcXEhlbGxvXFxcXGhlbGxvLnV4IS4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWU6XFxcXEh1YXdlaSBRdWlja0FwcC1wcm9qZWN0XFxcXGNvbS5odWF3ZWkuZGVtb1xcXFxzcmNcXFxcSGVsbG9cXFxcaGVsbG8udXghLi9oZWxsby51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWU6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWU6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZTpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxqc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaGVsbG8udXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9oZWxsbycsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaGVsbG8nLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMi4xLjAtU3RhYmxlLjMwMCd9KSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJoZWFkZXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2NhblwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9IZWxsby9pbWcvc20ucG5nXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzY2FuY29yZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJpbnB1dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwi55m+5bqm5pCc57SiXCIsXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInN0XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYWNjb3VudFZhbHVlfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzZWFyY2gtdGV4dFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiaWRcIjogXCJzdFwiLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjaGFuZ2VcIjogXCJnZXRBY2NvdW50VmFsdWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2VhcmNoXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmkJzntKJcIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwic2JcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzZWFyY2gtYnRuXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInNiXCIsXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwic2VhcmNoX2J0blwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNvbnRlbnRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwid2ViXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy53ZWJzcmN9LFxuICAgICAgICAgICAgXCJ0cnVzdGVkdXJsXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5saXN0fSxcbiAgICAgICAgICAgIFwiaWRcIjogXCJ3ZWJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ3ZWItcGFnZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcInBhZ2VzdGFydFwiOiBcIm9uUGFnZVN0YXJ0XCIsXG4gICAgICAgICAgICBcInBhZ2VmaW5pc2hcIjogXCJvblBhZ2VGaW5pc2hcIixcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCJvbkVycm9yXCIsXG4gICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJvbk1lc3NhZ2VcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpZFwiOiBcIndlYlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImZvb3RlclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJiYWNrXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL0hlbGxvL2ltZy9iYWNrLnBuZ1wiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJiYWNrXCIsXG4gICAgICAgICAgICAgICAgXCJhbHRcIjogXCLov5Tlm55cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImlkXCI6IFwiYmFja1wiLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImJhY2tcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicmVmcmVzaFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwicmVmcmVzaFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9IZWxsby9pbWcvcmVmcmVzaC5wbmdcIixcbiAgICAgICAgICAgICAgICBcImFsdFwiOiBcIuWIt+aWsFwiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJyZWZyZXNoXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInJlZnJlc2hcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTAwcHhcIlxuICB9LFxuICBcIi5oZWFkZXJcIjoge1xuICAgIFwid2lkdGhcIjogXCI5NSVcIixcbiAgICBcImhlaWdodFwiOiBcIjExMHB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjVweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjVweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCI1cHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjVweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjMWExYTFhXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiIzFhMWExYVwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjMWExYTFhXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjMWExYTFhXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwidG9wXCI6IFwiNXB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNXB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMHB4XCJcbiAgfSxcbiAgXCIuc2VhcmNoXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTUwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMyNDhkZmZcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiBcIjU1cHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIi00MHB4XCIsXG4gICAgXCJyaWdodFwiOiBcIjE1cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwcHhcIlxuICB9LFxuICBcIi5zZWFyY2ggaW5wdXRcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiYXV0b1wiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCJhdXRvXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCJhdXRvXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiYXV0b1wiLFxuICAgIFwiZm9udFNpemVcIjogXCI0MHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiXG4gIH0sXG4gIFwiLmlucHV0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDAwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcHhcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiBcIjU1cHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIi00MHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTIwcHhcIlxuICB9LFxuICBcIi5zZWFyY2gtdGV4dFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcImZvbnRTaXplXCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLnNjYW5cIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IFwiNTVweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiLTQwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHB4XCJcbiAgfSxcbiAgXCIuc2NhbiBpbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjgwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcHhcIlxuICB9LFxuICBcIi53ZWItcGFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjEzMDBweFwiLFxuICAgIFwidG9wXCI6IFwiMjBweFwiXG4gIH0sXG4gIFwiLmZvb3RlclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjkwcHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJUb3BTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNiMGIwYjBcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJib3R0b21cIjogXCIwcHhcIlxuICB9LFxuICBcIi5iYWNrXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNzBweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiYXV0b1wiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCJhdXRvXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCJhdXRvXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiYXV0b1wiXG4gIH0sXG4gIFwiLnJlZnJlc2hcIjoge1xuICAgIFwid2lkdGhcIjogXCI2MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2MHB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCJhdXRvXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcImF1dG9cIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcImF1dG9cIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCJhdXRvXCJcbiAgfSxcbiAgXCIuZm9vdGVyIHRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzOHB4XCJcbiAgfSxcbiAgXCIudGV4dF9hY3RpdmVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjY2QyMzI1XCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0uYmFyY29kZVwiKSk7XG5cbnZhciBfc3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5yb3V0ZXJcIikpO1xuXG52YXIgX3N5c3RlbTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ud2Vidmlld1wiKSk7XG5cbnZhciBfc3lzdGVtNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5zdG9yYWdlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhOiB7XG4gICAgdGl0bGU6ICcnLFxuICAgIGNvbnRleHQ6ICcnLFxuICAgIHdlYnNyYzogJycsXG4gICAgYXJyb3dSaWdodFNob3c6IHRydWUsXG4gICAgaXNSZWZyZXNoaW5nOiBmYWxzZSxcbiAgICBsaXN0OiBbLy4qLywgXCJuZXcgUmVnRXhwKCdodHRwcz8uKicpXCJdLFxuICAgIG1zZzogJycsXG4gICAgYWNjb3VudFZhbHVlOiAnJ1xuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcbiAgICB0aGlzLiRvbignYXJyb3dMZWZ0JywgdGhpcy5hcnJvd0xlZnRJY29uKTtcbiAgICB0aGlzLiRvbignYXJyb3dSaWdodCcsIHRoaXMuYXJyb3dSaWdodEljb24pO1xuICAgIHRoaXMud2Vic3JjID0gXCJodHRwczovL20uYmFpZHUuY29tL1wiO1xuXG4gICAgX3N5c3RlbTRbXCJkZWZhdWx0XCJdLmdldCh7XG4gICAgICBrZXk6ICdlbmR3ZWJzcmMnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxpbmcgc3VjY2VzczoxXCIgKyBkYXRhKTtcblxuICAgICAgICBpZiAoZGF0YSAhPT0gbnVsbCAmJiBkYXRhICE9PSBcImh0dHBzOi8vbS5iYWlkdS5jb20vXCIpIHtcbiAgICAgICAgICBfc3lzdGVtM1tcImRlZmF1bHRcIl0ubG9hZFVybCh7XG4gICAgICAgICAgICB1cmw6IGRhdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZGF0YSwgY29kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIGZhaWwsIGNvZGU9XCIgKyBjb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZ2V0QWNjb3VudFZhbHVlOiBmdW5jdGlvbiBnZXRBY2NvdW50VmFsdWUoZSkge1xuICAgIHRoaXMuYWNjb3VudFZhbHVlID0gZS52YWx1ZTtcbiAgICBjb25zb2xlLmluZm8oXCJ2YWx1ZT1cIiArIGUudmFsdWUpO1xuICAgIGNvbnNvbGUuaW5mbyh0aGlzLmFjY291bnRWYWx1ZSk7XG4gIH0sXG4gIHNlYXJjaF9idG46IGZ1bmN0aW9uIHNlYXJjaF9idG4oKSB7XG4gICAgdGhpcy53ZWJzcmMgPSAnaHR0cHM6Ly9tLmJhaWR1LmNvbS9zP2llPXV0Zi04JmY9OCZyc3ZfYnA9MSZyc3ZfaWR4PTEmdG49YmFpZHUmd2Q9JyArIHRoaXMuYWNjb3VudFZhbHVlO1xuICB9LFxuICBzY2FuY29yZTogZnVuY3Rpb24gc2NhbmNvcmUoKSB7XG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uc2Nhbih7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsaW5nIHN1Y2Nlc3M6ICcgKyBkYXRhLnJlc3VsdCk7XG5cbiAgICAgICAgX3N5c3RlbTNbXCJkZWZhdWx0XCJdLmxvYWRVcmwoe1xuICAgICAgICAgIHVybDogZGF0YS5yZXN1bHRcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChkYXRhLCBjb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGluZyBmYWlsLCBjb2RlID0gJyArIGNvZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBvblBhZ2VTdGFydDogZnVuY3Rpb24gb25QYWdlU3RhcnQoZSkge1xuICAgIHRoaXMuaXNSZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgY29uc29sZS5pbmZvKCdwYWdlc3RhcnQ6ICcgKyBlLnVybCk7XG4gIH0sXG4gIG9uUGFnZUZpbmlzaDogZnVuY3Rpb24gb25QYWdlRmluaXNoKGUpIHtcbiAgICBjb25zb2xlLmluZm8oJ3BhZ2VmaW5pc2g6ICcgKyBlLnVybCk7XG5cbiAgICBfc3lzdGVtNFtcImRlZmF1bHRcIl0uc2V0KHtcbiAgICAgIGtleTogJ2VuZHdlYnNyYycsXG4gICAgICB2YWx1ZTogZS51cmwsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGluZyBzdWNjZXNzXCIpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZGF0YSwgY29kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIGZhaWwsIGNvZGU9XCIgKyBjb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYXJyb3dSaWdodFNob3cgPSBlLmNhbkZvcndhcmQ7XG4gIH0sXG4gIG9uRXJyb3I6IGZ1bmN0aW9uIG9uRXJyb3IoKSB7XG4gICAgY29uc29sZS5pbmZvKCdwYWdlRXJyb3InKTtcbiAgfSxcbiAgb25NZXNzYWdlOiBmdW5jdGlvbiBvbk1lc3NhZ2UoZSkge1xuICAgIGNvbnNvbGUuaW5mbygnb25tZXNzYWdlIGUgPSAnICsgZS5tZXNzYWdlICsgXCIsIHVybCA9IFwiICsgZS51cmwpO1xuICAgIHRoaXMubXNnID0gZS5tZXNzYWdlO1xuICB9LFxuICBhcnJvd0xlZnRJY29uOiBmdW5jdGlvbiBhcnJvd0xlZnRJY29uKCkge1xuICAgIHRoaXMuaXNDYW5CYWNrKCk7XG4gIH0sXG4gIGFycm93UmlnaHRJY29uOiBmdW5jdGlvbiBhcnJvd1JpZ2h0SWNvbigpIHtcbiAgICB0aGlzLmlzQ2FuRm9yd2FyZCgpO1xuICB9LFxuICBpc0NhbkZvcndhcmQ6IGZ1bmN0aW9uIGlzQ2FuRm9yd2FyZCgpIHtcbiAgICB0aGlzLiRlbGVtZW50KCd3ZWInKS5jYW5Gb3J3YXJkKHtcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgIHRoaXMuJGVsZW1lbnQoJ3dlYicpLmZvcndhcmQoKTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH0sXG4gIGlzQ2FuQmFjazogZnVuY3Rpb24gaXNDYW5CYWNrKCkge1xuICAgIHRoaXMuJGVsZW1lbnQoJ3dlYicpLmNhbkJhY2soe1xuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgdGhpcy4kZWxlbWVudCgnd2ViJykuYmFjaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5iYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKVxuICAgIH0pO1xuICB9LFxuICBiYWNrOiBmdW5jdGlvbiBiYWNrKGUpIHtcbiAgICB0aGlzLiRkaXNwYXRjaChcImFycm93TGVmdFwiKTtcbiAgfSxcbiAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB0aGlzLiRkaXNwYXRjaCgnYXJyb3dSaWdodCcpO1xuICB9LFxuICByZWZyZXNoOiBmdW5jdGlvbiByZWZyZXNoKGUpIHtcbiAgICB0aGlzLiRlbGVtZW50KCd3ZWInKS5yZWxvYWQoKTtcbiAgfSxcbiAgc2VuZE1lc3NhZ2U6IGZ1bmN0aW9uIHNlbmRNZXNzYWdlKCkge1xuICAgIHRoaXMuJGVsZW1lbnQoJ3dlYicpLnBvc3RNZXNzYWdlKHtcbiAgICAgIG1lc3NhZ2U6ICdtZXNzYWdlIHRvIFdlYiBwYWdlJ1xuICAgIH0pO1xuICB9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==