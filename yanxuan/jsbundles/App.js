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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(1)
	)
	__vue_styles__.push(__webpack_require__(2)
	)

	/* script */
	__vue_exports__ = __webpack_require__(3)

	/* template */
	var __vue_template__ = __webpack_require__(9)
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
	__vue_options__.__file = "/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/src/App.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-127a4f3c"
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
/* 1 */
/***/ (function(module, exports) {

	module.exports = {}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = {
	  "app-wrapper": {
	    "backgroundColor": "#f4f4f4"
	  },
	  "r-box": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  }
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _tabBar = __webpack_require__(5);

	var _tabBar2 = _interopRequireDefault(_tabBar);

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

	var modal = weex.requireModule('modal');
	exports.default = {
	    data: function data() {
	        return {};
	    },

	    components: {
	        'tab-bar': _tabBar2.default
	    },
	    created: function created() {
	        _util2.default.initIconFont();
	    },

	    methods: {
	        onTabTo: function onTabTo(_result) {
	            var _key = _result.data.key || '';
	            this.$router && this.$router.push('/' + _key);
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(6)
	)

	/* script */
	__vue_exports__ = __webpack_require__(7)

	/* template */
	var __vue_template__ = __webpack_require__(8)
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
	__vue_options__.__file = "/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/assets/components/tabBar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7f777756"
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


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "wrapper": {
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 90,
	    "flexWrap": "nowrap",
	    "flexDirection": "row",
	    "justifyContent": "space-around",
	    "borderTopWidth": 1,
	    "borderTopColor": "#d9d9d9",
	    "backgroundColor": "#fafafa"
	  },
	  "bar-item": {
	    "flex": 1
	  },
	  "bar-txt": {
	    "color": "#666666",
	    "textAlign": "center",
	    "fontSize": 22,
	    "paddingTop": 2
	  },
	  "bar-ic": {
	    "color": "#666666",
	    "textAlign": "center",
	    "paddingTop": 14,
	    "fontSize": 38
	  },
	  "bar-active": {
	    "color": "#b4282d"
	  }
	}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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


	var modal = weex.requireModule('modal');
	exports.default = {
	    //        props: {
	    //            indexKey: {
	    //                type: String,
	    //                default: 'home'
	    //            },
	    //            reClick: {
	    //                type: Boolean,
	    //                default: false
	    //            },
	    //            items: {
	    //                type: Array,
	    //                default: function(){
	    //                    return [
	    //                        {
	    //                            icon:'&#xe660;',
	    //                            name:"首页",
	    //                            key:'home'
	    //                        }
	    //                    ]
	    //                }
	    //            }
	    //        },
	    computed: {
	        testCS: function testCS() {
	            return this.pIndexKey == 'home' ? 'color:#b4282d;' : '';
	        }
	    },
	    data: function data() {
	        return {
	            pIndexKey: 'home'
	        };
	    },
	    mounted: function mounted() {},

	    methods: {
	        tabTo: function tabTo(_key) {
	            if (this.pIndexKey == _key) return;
	            this.pIndexKey = _key;
	            this.$emit('tabTo', {
	                status: 'tabTo',
	                data: {
	                    key: _key
	                }
	            });
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('div', {
	    staticClass: ["bar-item"],
	    on: {
	      "click": function($event) {
	        _vm.tabTo('home')
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["bar-ic", "iconfont"],
	    style: _vm.testCS
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["bar-txt"]
	  }, [_vm._v("首页")])]), _c('div', {
	    staticClass: ["bar-item"],
	    on: {
	      "click": function($event) {
	        _vm.tabTo('topic')
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["bar-ic", "iconfont"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["bar-txt"]
	  }, [_vm._v("专题")])]), _c('div', {
	    staticClass: ["bar-item", "act"],
	    on: {
	      "click": function($event) {
	        _vm.tabTo('class')
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["bar-ic", "iconfont"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["bar-txt"]
	  }, [_vm._v("分类")])]), _c('div', {
	    staticClass: ["bar-item"],
	    on: {
	      "click": function($event) {
	        _vm.tabTo('shop')
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["bar-ic", "iconfont"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["bar-txt"]
	  }, [_vm._v("购物车")])]), _c('div', {
	    staticClass: ["bar-item"],
	    on: {
	      "click": function($event) {
	        _vm.tabTo('my')
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["bar-ic", "iconfont"]
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["bar-txt"]
	  }, [_vm._v("个人")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["app-wrapper"]
	  }, [_c('router-view', {
	    staticClass: ["r-box"]
	  }), _c('tab-bar', {
	    on: {
	      "tabTo": _vm.onTabTo
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);