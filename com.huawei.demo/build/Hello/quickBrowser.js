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

$app_define$('@app-component/quickBrowser', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/quickBrowser',{ packagerName:'fa-toolkit', packagerVersion: '2.1.0-Stable.300'})

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
            "next"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Hello/img/next.png",
                "id": "next",
                "alt": "前进"
              },
              "id": "next",
              "events": {
                "click": "next"
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
  ".next": {
    "width": "94px",
    "height": "94px",
    "marginTop": "-3px",
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
    pattern: '',
    arrowRightShow: true,
    isRefreshing: false,
    isUrl: false,
    list: [/.*/, "new RegExp('https?.*')"],
    msg: '',
    accountValue: ''
  },
  onInit: function onInit() {
    this.$on('arrowLeft', this.arrowLeftIcon);
    this.$on('arrowRight', this.arrowRightIcon);
    this.websrc = "https://m.baidu.com/";
    this.pattern = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;

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
  getAccountValue: function getAccountValue(e) {
    this.accountValue = e.value;

    if (this.pattern.test(e.value)) {
      this.isUrl = true;
    } else {
      this.isUrl = false;
    }
  },
  search_btn: function search_btn() {
    if (this.isUrl) {
      this.websrc = this.accountValue;
    } else {
      this.websrc = 'https://m.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=' + this.accountValue;
    }
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
  arrowRightIcon: function arrowRightIcon() {
    this.isCanForward();
  },
  arrowLeftIcon: function arrowLeftIcon() {
    this.isCanBack();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXEhlbGxvXFxxdWlja0Jyb3dzZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2U6L0h1YXdlaSBRdWlja0FwcC1wcm9qZWN0L2NvbS5odWF3ZWkuZGVtby9zcmMvSGVsbG8vcXVpY2tCcm93c2VyLnV4Iiwid2VicGFjazovLy9lOi9IdWF3ZWkgUXVpY2tBcHAtcHJvamVjdC9jb20uaHVhd2VpLmRlbW8vc3JjL0hlbGxvL3F1aWNrQnJvd3Nlci51eD8xMGUyIiwid2VicGFjazovLy9lOi9IdWF3ZWkgUXVpY2tBcHAtcHJvamVjdC9jb20uaHVhd2VpLmRlbW8vc3JjL0hlbGxvL3F1aWNrQnJvd3Nlci51eD9kNzg4Iiwid2VicGFjazovLy9lOi9IdWF3ZWkgUXVpY2tBcHAtcHJvamVjdC9jb20uaHVhd2VpLmRlbW8vc3JjL0hlbGxvL3F1aWNrQnJvd3Nlci51eD85OTA1Il0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL3F1aWNrQnJvd3Nlci51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxIdWF3ZWkgUXVpY2tBcHAtcHJvamVjdFxcXFxjb20uaHVhd2VpLmRlbW9cXFxcc3JjXFxcXEhlbGxvXFxcXHF1aWNrQnJvd3Nlci51eCEuLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxIdWF3ZWkgUXVpY2tBcHAtcHJvamVjdFxcXFxjb20uaHVhd2VpLmRlbW9cXFxcc3JjXFxcXEhlbGxvXFxcXHF1aWNrQnJvd3Nlci51eCEuL3F1aWNrQnJvd3Nlci51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWU6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWU6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZTpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxqc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vcXVpY2tCcm93c2VyLnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvcXVpY2tCcm93c2VyJywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcblxuJGFwcF9ib290c3RyYXAkKCdAYXBwLWNvbXBvbmVudC9xdWlja0Jyb3dzZXInLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMi4xLjAtU3RhYmxlLjMwMCd9KSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJoZWFkZXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2NhblwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9IZWxsby9pbWcvc20ucG5nXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzY2FuY29yZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJpbnB1dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwi55m+5bqm5pCc57SiXCIsXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInN0XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYWNjb3VudFZhbHVlfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzZWFyY2gtdGV4dFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiaWRcIjogXCJzdFwiLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjaGFuZ2VcIjogXCJnZXRBY2NvdW50VmFsdWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2VhcmNoXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmkJzntKJcIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwic2JcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzZWFyY2gtYnRuXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInNiXCIsXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwic2VhcmNoX2J0blwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNvbnRlbnRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwid2ViXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy53ZWJzcmN9LFxuICAgICAgICAgICAgXCJ0cnVzdGVkdXJsXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5saXN0fSxcbiAgICAgICAgICAgIFwiaWRcIjogXCJ3ZWJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ3ZWItcGFnZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcInBhZ2VzdGFydFwiOiBcIm9uUGFnZVN0YXJ0XCIsXG4gICAgICAgICAgICBcInBhZ2VmaW5pc2hcIjogXCJvblBhZ2VGaW5pc2hcIixcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCJvbkVycm9yXCIsXG4gICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJvbk1lc3NhZ2VcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpZFwiOiBcIndlYlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImZvb3RlclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJiYWNrXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL0hlbGxvL2ltZy9iYWNrLnBuZ1wiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJiYWNrXCIsXG4gICAgICAgICAgICAgICAgXCJhbHRcIjogXCLov5Tlm55cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImlkXCI6IFwiYmFja1wiLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImJhY2tcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwibmV4dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9IZWxsby9pbWcvbmV4dC5wbmdcIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwibmV4dFwiLFxuICAgICAgICAgICAgICAgIFwiYWx0XCI6IFwi5YmN6L+bXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJpZFwiOiBcIm5leHRcIixcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJuZXh0XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInJlZnJlc2hcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcInJlZnJlc2hcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvSGVsbG8vaW1nL3JlZnJlc2gucG5nXCIsXG4gICAgICAgICAgICAgICAgXCJhbHRcIjogXCLliLfmlrBcIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwicmVmcmVzaFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiaWRcIjogXCJyZWZyZXNoXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5oZWFkZXJcIjoge1xuICAgIFwid2lkdGhcIjogXCI5NSVcIixcbiAgICBcImhlaWdodFwiOiBcIjExMHB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjVweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjVweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCI1cHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjVweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjMWExYTFhXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiIzFhMWExYVwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjMWExYTFhXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjMWExYTFhXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwidG9wXCI6IFwiNXB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNXB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMHB4XCJcbiAgfSxcbiAgXCIuc2VhcmNoXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTUwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMyNDhkZmZcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiBcIjU1cHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIi00MHB4XCIsXG4gICAgXCJyaWdodFwiOiBcIjE1cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwcHhcIlxuICB9LFxuICBcIi5zZWFyY2ggaW5wdXRcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiYXV0b1wiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCJhdXRvXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCJhdXRvXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiYXV0b1wiLFxuICAgIFwiZm9udFNpemVcIjogXCI0MHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiXG4gIH0sXG4gIFwiLmlucHV0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDAwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcHhcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiBcIjU1cHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIi00MHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTIwcHhcIlxuICB9LFxuICBcIi5zZWFyY2gtdGV4dFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcImZvbnRTaXplXCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLnNjYW5cIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IFwiNTVweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiLTQwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHB4XCJcbiAgfSxcbiAgXCIuc2NhbiBpbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjgwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcHhcIlxuICB9LFxuICBcIi53ZWItcGFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjEzMDBweFwiLFxuICAgIFwidG9wXCI6IFwiMjBweFwiXG4gIH0sXG4gIFwiLmZvb3RlclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjkwcHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJUb3BTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNiMGIwYjBcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJib3R0b21cIjogXCIwcHhcIlxuICB9LFxuICBcIi5iYWNrXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNzBweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiYXV0b1wiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCJhdXRvXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCJhdXRvXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiYXV0b1wiXG4gIH0sXG4gIFwiLm5leHRcIjoge1xuICAgIFwid2lkdGhcIjogXCI5NHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI5NHB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCItM3B4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcImF1dG9cIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcImF1dG9cIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCJhdXRvXCJcbiAgfSxcbiAgXCIucmVmcmVzaFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjYwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjYwcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcImF1dG9cIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiYXV0b1wiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiYXV0b1wiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcImF1dG9cIlxuICB9LFxuICBcIi5mb290ZXIgdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjM4cHhcIlxuICB9LFxuICBcIi50ZXh0X2FjdGl2ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNjZDIzMjVcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG52YXIgX3N5c3RlbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5iYXJjb2RlXCIpKTtcblxudmFyIF9zeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlclwiKSk7XG5cbnZhciBfc3lzdGVtMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS53ZWJ2aWV3XCIpKTtcblxudmFyIF9zeXN0ZW00ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnN0b3JhZ2VcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IHtcbiAgICB0aXRsZTogJycsXG4gICAgY29udGV4dDogJycsXG4gICAgd2Vic3JjOiAnJyxcbiAgICBwYXR0ZXJuOiAnJyxcbiAgICBhcnJvd1JpZ2h0U2hvdzogdHJ1ZSxcbiAgICBpc1JlZnJlc2hpbmc6IGZhbHNlLFxuICAgIGlzVXJsOiBmYWxzZSxcbiAgICBsaXN0OiBbLy4qLywgXCJuZXcgUmVnRXhwKCdodHRwcz8uKicpXCJdLFxuICAgIG1zZzogJycsXG4gICAgYWNjb3VudFZhbHVlOiAnJ1xuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcbiAgICB0aGlzLiRvbignYXJyb3dMZWZ0JywgdGhpcy5hcnJvd0xlZnRJY29uKTtcbiAgICB0aGlzLiRvbignYXJyb3dSaWdodCcsIHRoaXMuYXJyb3dSaWdodEljb24pO1xuICAgIHRoaXMud2Vic3JjID0gXCJodHRwczovL20uYmFpZHUuY29tL1wiO1xuICAgIHRoaXMucGF0dGVybiA9IC9eKFtoSF1bdFRdezJ9W3BQXTpcXC9cXC98W2hIXVt0VF17Mn1bcFBdW3NTXTpcXC9cXC8pKChbQS1aYS16MC05LX5dKylcXC4pKyhbQS1aYS16MC05LX5cXC9dKSskLztcblxuICAgIF9zeXN0ZW00W1wiZGVmYXVsdFwiXS5nZXQoe1xuICAgICAga2V5OiAnZW5kd2Vic3JjJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIHN1Y2Nlc3M6MVwiICsgZGF0YSk7XG5cbiAgICAgICAgaWYgKGRhdGEgIT09IG51bGwgJiYgZGF0YSAhPT0gXCJodHRwczovL20uYmFpZHUuY29tL1wiKSB7XG4gICAgICAgICAgX3N5c3RlbTNbXCJkZWZhdWx0XCJdLmxvYWRVcmwoe1xuICAgICAgICAgICAgdXJsOiBkYXRhXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGRhdGEsIGNvZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGluZyBmYWlsLCBjb2RlPVwiICsgY29kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIHNjYW5jb3JlOiBmdW5jdGlvbiBzY2FuY29yZSgpIHtcbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5zY2FuKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnaGFuZGxpbmcgc3VjY2VzczogJyArIGRhdGEucmVzdWx0KTtcblxuICAgICAgICBfc3lzdGVtM1tcImRlZmF1bHRcIl0ubG9hZFVybCh7XG4gICAgICAgICAgdXJsOiBkYXRhLnJlc3VsdFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGRhdGEsIGNvZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsaW5nIGZhaWwsIGNvZGUgPSAnICsgY29kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGdldEFjY291bnRWYWx1ZTogZnVuY3Rpb24gZ2V0QWNjb3VudFZhbHVlKGUpIHtcbiAgICB0aGlzLmFjY291bnRWYWx1ZSA9IGUudmFsdWU7XG5cbiAgICBpZiAodGhpcy5wYXR0ZXJuLnRlc3QoZS52YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNVcmwgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzVXJsID0gZmFsc2U7XG4gICAgfVxuICB9LFxuICBzZWFyY2hfYnRuOiBmdW5jdGlvbiBzZWFyY2hfYnRuKCkge1xuICAgIGlmICh0aGlzLmlzVXJsKSB7XG4gICAgICB0aGlzLndlYnNyYyA9IHRoaXMuYWNjb3VudFZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndlYnNyYyA9ICdodHRwczovL20uYmFpZHUuY29tL3M/aWU9dXRmLTgmZj04JnJzdl9icD0xJnJzdl9pZHg9MSZ0bj1iYWlkdSZ3ZD0nICsgdGhpcy5hY2NvdW50VmFsdWU7XG4gICAgfVxuICB9LFxuICBvblBhZ2VTdGFydDogZnVuY3Rpb24gb25QYWdlU3RhcnQoZSkge1xuICAgIHRoaXMuaXNSZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgY29uc29sZS5pbmZvKCdwYWdlc3RhcnQ6ICcgKyBlLnVybCk7XG4gIH0sXG4gIG9uUGFnZUZpbmlzaDogZnVuY3Rpb24gb25QYWdlRmluaXNoKGUpIHtcbiAgICBjb25zb2xlLmluZm8oJ3BhZ2VmaW5pc2g6ICcgKyBlLnVybCk7XG5cbiAgICBfc3lzdGVtNFtcImRlZmF1bHRcIl0uc2V0KHtcbiAgICAgIGtleTogJ2VuZHdlYnNyYycsXG4gICAgICB2YWx1ZTogZS51cmwsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGluZyBzdWNjZXNzXCIpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZGF0YSwgY29kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIGZhaWwsIGNvZGU9XCIgKyBjb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYXJyb3dSaWdodFNob3cgPSBlLmNhbkZvcndhcmQ7XG4gIH0sXG4gIG9uRXJyb3I6IGZ1bmN0aW9uIG9uRXJyb3IoKSB7XG4gICAgY29uc29sZS5pbmZvKCdwYWdlRXJyb3InKTtcbiAgfSxcbiAgb25NZXNzYWdlOiBmdW5jdGlvbiBvbk1lc3NhZ2UoZSkge1xuICAgIGNvbnNvbGUuaW5mbygnb25tZXNzYWdlIGUgPSAnICsgZS5tZXNzYWdlICsgXCIsIHVybCA9IFwiICsgZS51cmwpO1xuICAgIHRoaXMubXNnID0gZS5tZXNzYWdlO1xuICB9LFxuICBhcnJvd1JpZ2h0SWNvbjogZnVuY3Rpb24gYXJyb3dSaWdodEljb24oKSB7XG4gICAgdGhpcy5pc0NhbkZvcndhcmQoKTtcbiAgfSxcbiAgYXJyb3dMZWZ0SWNvbjogZnVuY3Rpb24gYXJyb3dMZWZ0SWNvbigpIHtcbiAgICB0aGlzLmlzQ2FuQmFjaygpO1xuICB9LFxuICBpc0NhbkZvcndhcmQ6IGZ1bmN0aW9uIGlzQ2FuRm9yd2FyZCgpIHtcbiAgICB0aGlzLiRlbGVtZW50KCd3ZWInKS5jYW5Gb3J3YXJkKHtcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgIHRoaXMuJGVsZW1lbnQoJ3dlYicpLmZvcndhcmQoKTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH0sXG4gIGlzQ2FuQmFjazogZnVuY3Rpb24gaXNDYW5CYWNrKCkge1xuICAgIHRoaXMuJGVsZW1lbnQoJ3dlYicpLmNhbkJhY2soe1xuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgdGhpcy4kZWxlbWVudCgnd2ViJykuYmFjaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5iYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKVxuICAgIH0pO1xuICB9LFxuICBiYWNrOiBmdW5jdGlvbiBiYWNrKGUpIHtcbiAgICB0aGlzLiRkaXNwYXRjaChcImFycm93TGVmdFwiKTtcbiAgfSxcbiAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB0aGlzLiRkaXNwYXRjaCgnYXJyb3dSaWdodCcpO1xuICB9LFxuICByZWZyZXNoOiBmdW5jdGlvbiByZWZyZXNoKGUpIHtcbiAgICB0aGlzLiRlbGVtZW50KCd3ZWInKS5yZWxvYWQoKTtcbiAgfSxcbiAgc2VuZE1lc3NhZ2U6IGZ1bmN0aW9uIHNlbmRNZXNzYWdlKCkge1xuICAgIHRoaXMuJGVsZW1lbnQoJ3dlYicpLnBvc3RNZXNzYWdlKHtcbiAgICAgIG1lc3NhZ2U6ICdtZXNzYWdlIHRvIFdlYiBwYWdlJ1xuICAgIH0pO1xuICB9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBIiwic291cmNlUm9vdCI6IiJ9