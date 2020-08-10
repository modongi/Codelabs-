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
                "src": "/quickDemo/img/sm.png"
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
                "placeholder": "搜索内容或网址",
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
                "src": "/quickDemo/img/back.png",
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
                "src": "/quickDemo/img/next.png",
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
                "src": "/quickDemo/img/refresh.png",
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
        if (data !== null && data !== "https://m.baidu.com/") {
          _system3["default"].loadUrl({
            url: data
          });
        }
      },
      fail: function fail(data, code) {
        console.log("get handling fail, code=" + code);
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
  onError: function onError() {
    console.info('pageError');
  },
  onMessage: function onMessage(e) {
    console.info('onmessage e = ' + e.message + ", url = " + e.url);
    this.msg = e.message;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXHF1aWNrRGVtb1xccXVpY2tCcm93c2VyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy9kOi/moYzpnaIvQ29kZWxhYnMg5L2c5LiaL3F1aWNrQnJvd3Nlcua6kOeggS9jb20uaHVhd2VpLmRlbW8vc3JjL3F1aWNrRGVtby9xdWlja0Jyb3dzZXIudXgiLCJ3ZWJwYWNrOi8vL2Q6L+ahjOmdoi9Db2RlbGFicyDkvZzkuJovcXVpY2tCcm93c2Vy5rqQ56CBL2NvbS5odWF3ZWkuZGVtby9zcmMvcXVpY2tEZW1vL3F1aWNrQnJvd3Nlci51eD81NGRiIiwid2VicGFjazovLy9kOi/moYzpnaIvQ29kZWxhYnMg5L2c5LiaL3F1aWNrQnJvd3Nlcua6kOeggS9jb20uaHVhd2VpLmRlbW8vc3JjL3F1aWNrRGVtby9xdWlja0Jyb3dzZXIudXg/ZDE1NCIsIndlYnBhY2s6Ly8vZDov5qGM6Z2iL0NvZGVsYWJzIOS9nOS4mi9xdWlja0Jyb3dzZXLmupDnoIEvY29tLmh1YXdlaS5kZW1vL3NyYy9xdWlja0RlbW8vcXVpY2tCcm93c2VyLnV4PzdjMzciXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhZTpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1qc29uLWxvYWRlci5qcyFlOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLXRlbXBsYXRlLWxvYWRlci5qcyFlOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vcXVpY2tCcm93c2VyLnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISFlOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWpzb24tbG9hZGVyLmpzIWU6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWQ6XFxcXOahjOmdolxcXFxDb2RlbGFicyDkvZzkuJpcXFxccXVpY2tCcm93c2Vy5rqQ56CBXFxcXGNvbS5odWF3ZWkuZGVtb1xcXFxzcmNcXFxccXVpY2tEZW1vXFxcXHF1aWNrQnJvd3Nlci51eCFlOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1kOlxcXFzmoYzpnaJcXFxcQ29kZWxhYnMg5L2c5LiaXFxcXHF1aWNrQnJvd3Nlcua6kOeggVxcXFxjb20uaHVhd2VpLmRlbW9cXFxcc3JjXFxcXHF1aWNrRGVtb1xcXFxxdWlja0Jyb3dzZXIudXghLi9xdWlja0Jyb3dzZXIudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISFlOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLXNjcmlwdC1sb2FkZXIuanMhZTpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1hY2Nlc3MtbG9hZGVyLmpzIWU6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1lOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWU6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSFlOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3F1aWNrQnJvd3Nlci51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L3F1aWNrQnJvd3NlcicsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvcXVpY2tCcm93c2VyJyx7IHBhY2thZ2VyTmFtZTonZmEtdG9vbGtpdCcsIHBhY2thZ2VyVmVyc2lvbjogJzIuMS4wLVN0YWJsZS4zMDAnfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaGVhZGVyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInNjYW5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvcXVpY2tEZW1vL2ltZy9zbS5wbmdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInNjYW5jb3JlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImlucHV0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLmkJzntKLlhoXlrrnmiJbnvZHlnYBcIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwic3RcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5hY2NvdW50VmFsdWV9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNlYXJjaC10ZXh0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInN0XCIsXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNoYW5nZVwiOiBcImdldEFjY291bnRWYWx1ZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzZWFyY2hcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuaQnOe0olwiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJzYlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNlYXJjaC1idG5cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImlkXCI6IFwic2JcIixcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzZWFyY2hfYnRuXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY29udGVudFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ3ZWJcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLndlYnNyY30sXG4gICAgICAgICAgICBcInRydXN0ZWR1cmxcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxpc3R9LFxuICAgICAgICAgICAgXCJpZFwiOiBcIndlYlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIndlYi1wYWdlXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwicGFnZXN0YXJ0XCI6IFwib25QYWdlU3RhcnRcIixcbiAgICAgICAgICAgIFwicGFnZWZpbmlzaFwiOiBcIm9uUGFnZUZpbmlzaFwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIm9uRXJyb3JcIixcbiAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIm9uTWVzc2FnZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlkXCI6IFwid2ViXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiZm9vdGVyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJhY2tcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvcXVpY2tEZW1vL2ltZy9iYWNrLnBuZ1wiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJiYWNrXCIsXG4gICAgICAgICAgICAgICAgXCJhbHRcIjogXCLov5Tlm55cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImlkXCI6IFwiYmFja1wiLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImJhY2tcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwibmV4dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9xdWlja0RlbW8vaW1nL25leHQucG5nXCIsXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIm5leHRcIixcbiAgICAgICAgICAgICAgICBcImFsdFwiOiBcIuWJjei/m1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiaWRcIjogXCJuZXh0XCIsXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwibmV4dFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJyZWZyZXNoXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJyZWZyZXNoXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL3F1aWNrRGVtby9pbWcvcmVmcmVzaC5wbmdcIixcbiAgICAgICAgICAgICAgICBcImFsdFwiOiBcIuWIt+aWsFwiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJyZWZyZXNoXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInJlZnJlc2hcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmhlYWRlclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjk1JVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTEwcHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiNXB4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiNXB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjVweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiNXB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiMxYTFhMWFcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjMWExYTFhXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiMxYTFhMWFcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiMxYTFhMWFcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJ0b3BcIjogXCI1cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjVweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcHhcIlxuICB9LFxuICBcIi5zZWFyY2hcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNTBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzI0OGRmZlwiLFxuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IFwiNTVweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiLTQwcHhcIixcbiAgICBcInJpZ2h0XCI6IFwiMTVweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTBweFwiXG4gIH0sXG4gIFwiLnNlYXJjaCBpbnB1dFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCJhdXRvXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcImF1dG9cIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcImF1dG9cIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCJhdXRvXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjQwcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCJcbiAgfSxcbiAgXCIuaW5wdXRcIjoge1xuICAgIFwid2lkdGhcIjogXCI0MDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODBweFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IFwiNTVweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiLTQwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMjBweFwiXG4gIH0sXG4gIFwiLnNlYXJjaC10ZXh0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuICAgIFwiZm9udFNpemVcIjogXCI0MHB4XCJcbiAgfSxcbiAgXCIuc2NhblwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogXCI1NXB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCItNDBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi5zY2FuIGltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiODBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODBweFwiXG4gIH0sXG4gIFwiLndlYi1wYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTMwMHB4XCIsXG4gICAgXCJ0b3BcIjogXCIyMHB4XCJcbiAgfSxcbiAgXCIuZm9vdGVyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiOTBweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclRvcFN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2IwYjBiMFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImJvdHRvbVwiOiBcIjBweFwiXG4gIH0sXG4gIFwiLmJhY2tcIjoge1xuICAgIFwid2lkdGhcIjogXCI3MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI3MHB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCJhdXRvXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcImF1dG9cIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcImF1dG9cIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCJhdXRvXCJcbiAgfSxcbiAgXCIubmV4dFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjk0cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjk0cHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIi0zcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiYXV0b1wiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiYXV0b1wiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcImF1dG9cIlxuICB9LFxuICBcIi5yZWZyZXNoXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjBweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiYXV0b1wiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCJhdXRvXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCJhdXRvXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiYXV0b1wiXG4gIH0sXG4gIFwiLmZvb3RlciB0ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzhweFwiXG4gIH0sXG4gIFwiLnRleHRfYWN0aXZlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2NkMjMyNVwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLmJhcmNvZGVcIikpO1xuXG52YXIgX3N5c3RlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucm91dGVyXCIpKTtcblxudmFyIF9zeXN0ZW0zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLndlYnZpZXdcIikpO1xuXG52YXIgX3N5c3RlbTQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0uc3RvcmFnZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YToge1xuICAgIHRpdGxlOiAnJyxcbiAgICBjb250ZXh0OiAnJyxcbiAgICB3ZWJzcmM6ICcnLFxuICAgIHBhdHRlcm46ICcnLFxuICAgIGFycm93UmlnaHRTaG93OiB0cnVlLFxuICAgIGlzUmVmcmVzaGluZzogZmFsc2UsXG4gICAgaXNVcmw6IGZhbHNlLFxuICAgIGxpc3Q6IFsvLiovLCBcIm5ldyBSZWdFeHAoJ2h0dHBzPy4qJylcIl0sXG4gICAgbXNnOiAnJyxcbiAgICBhY2NvdW50VmFsdWU6ICcnXG4gIH0sXG4gIG9uSW5pdDogZnVuY3Rpb24gb25Jbml0KCkge1xuICAgIHRoaXMuJG9uKCdhcnJvd0xlZnQnLCB0aGlzLmFycm93TGVmdEljb24pO1xuICAgIHRoaXMuJG9uKCdhcnJvd1JpZ2h0JywgdGhpcy5hcnJvd1JpZ2h0SWNvbik7XG4gICAgdGhpcy53ZWJzcmMgPSBcImh0dHBzOi8vbS5iYWlkdS5jb20vXCI7XG4gICAgdGhpcy5wYXR0ZXJuID0gL14oW2hIXVt0VF17Mn1bcFBdOlxcL1xcL3xbaEhdW3RUXXsyfVtwUF1bc1NdOlxcL1xcLykoKFtBLVphLXowLTktfl0rKVxcLikrKFtBLVphLXowLTktflxcL10pKyQvO1xuXG4gICAgX3N5c3RlbTRbXCJkZWZhdWx0XCJdLmdldCh7XG4gICAgICBrZXk6ICdlbmR3ZWJzcmMnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhICE9PSBudWxsICYmIGRhdGEgIT09IFwiaHR0cHM6Ly9tLmJhaWR1LmNvbS9cIikge1xuICAgICAgICAgIF9zeXN0ZW0zW1wiZGVmYXVsdFwiXS5sb2FkVXJsKHtcbiAgICAgICAgICAgIHVybDogZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChkYXRhLCBjb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IGhhbmRsaW5nIGZhaWwsIGNvZGU9XCIgKyBjb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgc2NhbmNvcmU6IGZ1bmN0aW9uIHNjYW5jb3JlKCkge1xuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnNjYW4oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGluZyBzdWNjZXNzOiAnICsgZGF0YS5yZXN1bHQpO1xuXG4gICAgICAgIF9zeXN0ZW0zW1wiZGVmYXVsdFwiXS5sb2FkVXJsKHtcbiAgICAgICAgICB1cmw6IGRhdGEucmVzdWx0XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZGF0YSwgY29kZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnaGFuZGxpbmcgZmFpbCwgY29kZSA9ICcgKyBjb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZ2V0QWNjb3VudFZhbHVlOiBmdW5jdGlvbiBnZXRBY2NvdW50VmFsdWUoZSkge1xuICAgIHRoaXMuYWNjb3VudFZhbHVlID0gZS52YWx1ZTtcblxuICAgIGlmICh0aGlzLnBhdHRlcm4udGVzdChlLnZhbHVlKSkge1xuICAgICAgdGhpcy5pc1VybCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNVcmwgPSBmYWxzZTtcbiAgICB9XG4gIH0sXG4gIHNlYXJjaF9idG46IGZ1bmN0aW9uIHNlYXJjaF9idG4oKSB7XG4gICAgaWYgKHRoaXMuaXNVcmwpIHtcbiAgICAgIHRoaXMud2Vic3JjID0gdGhpcy5hY2NvdW50VmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2Vic3JjID0gJ2h0dHBzOi8vbS5iYWlkdS5jb20vcz9pZT11dGYtOCZmPTgmcnN2X2JwPTEmcnN2X2lkeD0xJnRuPWJhaWR1JndkPScgKyB0aGlzLmFjY291bnRWYWx1ZTtcbiAgICB9XG4gIH0sXG4gIG9uUGFnZVN0YXJ0OiBmdW5jdGlvbiBvblBhZ2VTdGFydChlKSB7XG4gICAgdGhpcy5pc1JlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICBjb25zb2xlLmluZm8oJ3BhZ2VzdGFydDogJyArIGUudXJsKTtcbiAgfSxcbiAgb25QYWdlRmluaXNoOiBmdW5jdGlvbiBvblBhZ2VGaW5pc2goZSkge1xuICAgIGNvbnNvbGUuaW5mbygncGFnZWZpbmlzaDogJyArIGUudXJsKTtcblxuICAgIF9zeXN0ZW00W1wiZGVmYXVsdFwiXS5zZXQoe1xuICAgICAga2V5OiAnZW5kd2Vic3JjJyxcbiAgICAgIHZhbHVlOiBlLnVybCxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIHN1Y2Nlc3NcIik7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChkYXRhLCBjb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxpbmcgZmFpbCwgY29kZT1cIiArIGNvZGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hcnJvd1JpZ2h0U2hvdyA9IGUuY2FuRm9yd2FyZDtcbiAgfSxcbiAgYXJyb3dSaWdodEljb246IGZ1bmN0aW9uIGFycm93UmlnaHRJY29uKCkge1xuICAgIHRoaXMuaXNDYW5Gb3J3YXJkKCk7XG4gIH0sXG4gIGFycm93TGVmdEljb246IGZ1bmN0aW9uIGFycm93TGVmdEljb24oKSB7XG4gICAgdGhpcy5pc0NhbkJhY2soKTtcbiAgfSxcbiAgaXNDYW5Gb3J3YXJkOiBmdW5jdGlvbiBpc0NhbkZvcndhcmQoKSB7XG4gICAgdGhpcy4kZWxlbWVudCgnd2ViJykuY2FuRm9yd2FyZCh7XG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICB0aGlzLiRlbGVtZW50KCd3ZWInKS5mb3J3YXJkKCk7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKVxuICAgIH0pO1xuICB9LFxuICBpc0NhbkJhY2s6IGZ1bmN0aW9uIGlzQ2FuQmFjaygpIHtcbiAgICB0aGlzLiRlbGVtZW50KCd3ZWInKS5jYW5CYWNrKHtcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgIHRoaXMuJGVsZW1lbnQoJ3dlYicpLmJhY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcylcbiAgICB9KTtcbiAgfSxcbiAgYmFjazogZnVuY3Rpb24gYmFjayhlKSB7XG4gICAgdGhpcy4kZGlzcGF0Y2goXCJhcnJvd0xlZnRcIik7XG4gIH0sXG4gIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgdGhpcy4kZGlzcGF0Y2goJ2Fycm93UmlnaHQnKTtcbiAgfSxcbiAgcmVmcmVzaDogZnVuY3Rpb24gcmVmcmVzaChlKSB7XG4gICAgdGhpcy4kZWxlbWVudCgnd2ViJykucmVsb2FkKCk7XG4gIH0sXG4gIG9uRXJyb3I6IGZ1bmN0aW9uIG9uRXJyb3IoKSB7XG4gICAgY29uc29sZS5pbmZvKCdwYWdlRXJyb3InKTtcbiAgfSxcbiAgb25NZXNzYWdlOiBmdW5jdGlvbiBvbk1lc3NhZ2UoZSkge1xuICAgIGNvbnNvbGUuaW5mbygnb25tZXNzYWdlIGUgPSAnICsgZS5tZXNzYWdlICsgXCIsIHVybCA9IFwiICsgZS51cmwpO1xuICAgIHRoaXMubXNnID0gZS5tZXNzYWdlO1xuICB9LFxuICBzZW5kTWVzc2FnZTogZnVuY3Rpb24gc2VuZE1lc3NhZ2UoKSB7XG4gICAgdGhpcy4kZWxlbWVudCgnd2ViJykucG9zdE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZTogJ21lc3NhZ2UgdG8gV2ViIHBhZ2UnXG4gICAgfSk7XG4gIH1cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlIGRhdGEgbXVzdCBub3QgY29leGlzdCB3aXRoIHB1YmxpYywgcHJvdGVjdGVkLCBvciBwcml2YXRlLiBQbGVhc2UgcmVwbGFjZSBkYXRhIHdpdGggcHVibGljLicpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlICcgKyBhY2MgKyAnIHZhbHVlIG11c3Qgbm90IGJlIGEgZnVuY3Rpb24uIENoYW5nZSB0aGUgdmFsdWUgdG8gYW4gb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG59fSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN0TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==