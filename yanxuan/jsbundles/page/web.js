// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(165)
	)

	/* script */
	__vue_exports__ = __webpack_require__(166)

	/* template */
	var __vue_template__ = __webpack_require__(167)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/src/page/web.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-332c4f29"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by zwwill on 2017/8/27.
	 */

	var utilFunc = {
	    initIconFont: function initIconFont() {
	        var domModule = weex.requireModule('dom');
	        domModule.addRule('fontFace', {
	            'fontFamily': "iconfont",
	            'src': "url('http://at.alicdn.com/t/font_404010_jgmnakd1zizr529.ttf')"
	        });
	    },
	    setBundleUrl: function setBundleUrl(url, jsFile) {
	        var bundleUrl = url;
	        var host = '';
	        var path = '';
	        var nativeBase = void 0;
	        var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
	        var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	        if (isAndroidAssets) {
	            nativeBase = 'file://assets/dist';
	        } else if (isiOSAssets) {
	            // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
	            // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
	            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	        } else {
	            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	            var matchFirstPath = /\/\/[^\/]+\/([^\/]+)\//.exec(bundleUrl);
	            if (matches && matches.length >= 2) {
	                host = matches[1];
	            }
	            if (matchFirstPath && matchFirstPath.length >= 2) {
	                path = matchFirstPath[1];
	            }
	            nativeBase = 'http://' + host + '/';
	        }
	        var h5Base = './index.html?page=';
	        // in Native
	        var base = nativeBase;
	        if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
	            // check if in weexpack project
	            if (path === 'web' || path === 'dist') {
	                base = h5Base + '/dist/';
	            } else {
	                base = h5Base + '';
	            }
	        } else {
	            base = nativeBase + (!!path ? path + '/' : '');
	        }

	        var newUrl = base + jsFile;
	        return newUrl;
	    },
	    getUrlSearch: function getUrlSearch(url, name) {
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	        var r = url.slice(url.indexOf('?') + 1).match(reg);
	        if (r != null) {
	            try {
	                return decodeURIComponent(r[2]);
	            } catch (_e) {
	                return null;
	            }
	        }
	        return null;
	    }
	};

	exports.default = utilFunc;
	module.exports = exports['default'];

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "position": "absolute",
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "top": 0
	  },
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "toolbar": {
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 114,
	    "paddingTop": 44,
	    "backgroundColor": "#fafafa",
	    "opacity": 0.99,
	    "zIndex": 101,
	    "flexWrap": "nowrap",
	    "flexDirection": "row",
	    "justifyContent": "space-around",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#d9d9d9"
	  },
	  "tlt": {
	    "flex": 1,
	    "fontSize": 36,
	    "paddingTop": 10,
	    "color": "#333333",
	    "textAlign": "center"
	  },
	  "left": {
	    "height": 68,
	    "width": 150,
	    "paddingTop": 10,
	    "display": "flex",
	    "flexDirection": "row",
	    "flexWrap": "nowrap",
	    "justifyContent": "flex-start",
	    "paddingLeft": 20
	  },
	  "right": {
	    "height": 68,
	    "width": 150,
	    "paddingTop": 10,
	    "display": "flex",
	    "flexDirection": "row",
	    "flexWrap": "nowrap",
	    "justifyContent": "flex-end",
	    "paddingRight": 20
	  },
	  "btnTxt": {
	    "fontSize": 40,
	    "width": 70,
	    "color": "#666666",
	    "textAlign": "center"
	  },
	  "webview-box": {
	    "position": "absolute",
	    "top": 114,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "webview": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  }
	}

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var navigator = weex.requireModule('navigator');
	var webview = weex.requireModule('webview');
	var modal = weex.requireModule('modal');
	exports.default = {
	    components: {},
	    data: function data() {
	        return {
	            url0: 'http://m.you.163.com'
	        };
	    },
	    created: function created(_e) {
	        _util2.default.initIconFont();
	        this.url = _util2.default.getUrlSearch(weex.config.bundleUrl, 'weburl') || this.url0;
	        console.log('webPageURL', this.url);
	        //            modal.toast({ message: this.url });
	    },

	    methods: {
	        back: function back(event) {
	            modal.toast({ message: 'back' });
	            webview.goBack(this.$refs.wv);
	        },
	        close: function close(event) {
	            navigator.pop({
	                animated: "false"
	            });
	        },
	        reload: function reload(event) {
	            modal.toast({ message: 'reload' });
	            webview.reload(this.$refs.wv);
	        },
	        error: function error(event) {
	            console.log('error', event);
	            //                modal.toast({ message: 'error' })
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('div', {
	    staticClass: ["toolbar"]
	  }, [_c('div', {
	    staticClass: ["left"]
	  }, [_c('text', {
	    staticClass: ["btnTxt", "iconfont"],
	    on: {
	      "click": _vm.back
	    }
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["btnTxt", "iconfont"],
	    on: {
	      "click": _vm.close
	    }
	  }, [_vm._v("")])]), _c('text', {
	    staticClass: ["tlt"]
	  }), _c('div', {
	    staticClass: ["right"]
	  }, [_c('text', {
	    staticClass: ["btnTxt", "iconfont"],
	    on: {
	      "click": _vm.reload
	    }
	  }, [_vm._v("")])])]), _c('div', {
	    staticClass: ["webview-box"]
	  }, [_c('web', {
	    ref: "wv",
	    staticClass: ["webview"],
	    attrs: {
	      "src": _vm.url
	    },
	    on: {
	      "error": _vm.error
	    }
	  })], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });