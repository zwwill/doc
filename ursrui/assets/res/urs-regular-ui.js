(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("regularjs"));
	else if(typeof define === 'function' && define.amd)
		define(["Regular"], factory);
	else if(typeof exports === 'object')
		exports["URSRUI"] = factory(require("regularjs"));
	else
		root["URSRUI"] = factory(root["Regular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
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

	
	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(7);

	__webpack_require__(8);

	__webpack_require__(18);

	__webpack_require__(25);

	__webpack_require__(26);

	__webpack_require__(30);

	__webpack_require__(34);

	__webpack_require__(40);

	__webpack_require__(46);

	__webpack_require__(50);

	__webpack_require__(54);

	__webpack_require__(58);

	__webpack_require__(62);

	__webpack_require__(66);

	__webpack_require__(72);

	__webpack_require__(76);

	__webpack_require__(81);

	exports.Regular = __webpack_require__(10);
	exports.Component = __webpack_require__(23);

	exports.bAlert = __webpack_require__(85);
	// import bAlert from './unit/bAlert/bAlert'

	// import './unit/bGotop/bGotop'


	// import './module/smsinput/smsinput'

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	var ValidateRules = {
	    email: [{ type: 'is', trgger: 'blur', message: '请输入正确格式的邮箱', options: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i }],
	    mobile: [{ type: 'method', trigger: 'blur', message: '请输入正确格式的手机号', options: function options(value) {
	            // 中国手机号严格校验格式
	            var _pre = value.split('-')[0],
	                _v = value.split('-')[1],
	                _regMb = /^(13|14|15|17|18)\d{9}$/,
	                _regNum = /^\d{1,12}$/;

	            if (_pre === '86') {
	                return _regMb.test(_v);
	            } else {
	                return _regNum.test(_v);
	            }
	        } }],
	    realname: [{ type: 'is', trigger: 'blur', message: '请输入正确的姓名', options: /^[\u4e00-\u9fa5]{2,16}$/
	    }],
	    idcard: [{ type: 'method', trigger: 'blur', message: '请输入正确格式的身份证号码', options: function options(value) {
	            /**
	             * 字符串是否是合法的身份证号
	             * @param  {String} e 待检测字符串
	             * @return {Boolean}    是否合法
	             */
	            var isIdCard = function isIdCard(e) {
	                function n(e) {
	                    var t = 0;
	                    e[17].toLowerCase() == "x" && (e[17] = 10);
	                    for (var n = 0; n < 17; n++) {
	                        t += o[n] * e[n];
	                    }var valCodePosition = t % 11;
	                    return e[17] == u[valCodePosition] ? !0 : !1;
	                }

	                function r(e) {
	                    var t = e.substring(6, 10),
	                        n = e.substring(10, 12),
	                        r = e.substring(12, 14),
	                        i = new Date(t, parseFloat(n) - 1, parseFloat(r));
	                    return i.getFullYear() != parseFloat(t) || i.getMonth() != parseFloat(n) - 1 || i.getDate() != parseFloat(r) ? !1 : !0;
	                }

	                function i(e) {
	                    var t = e.substring(6, 8),
	                        n = e.substring(8, 10),
	                        r = e.substring(10, 12),
	                        i = new Date(t, parseFloat(n) - 1, parseFloat(r));
	                    return i.getYear() != parseFloat(t) || i.getMonth() != parseFloat(n) - 1 || i.getDate() != parseFloat(r) ? !1 : !0;
	                }

	                function s(e) {
	                    e = e.replace(/ /g, "").trim();
	                    if (e.length == 15) return !1;
	                    if (e.length == 18) {
	                        var i = e.split("");
	                        return r(e) && n(i) ? !0 : !1;
	                    }
	                    return !1;
	                }
	                var o = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1],
	                    u = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
	                return s(e);
	            };
	            return isIdCard(value);
	        } }],
	    sms: [{ type: 'is', trigger: 'blur', message: '请输入正确格式的短信验证码', options: /^[0-9]{6}$/
	    }],
	    imgcaptcha: [{ type: 'is', trigger: 'blur', message: '请输入正确格式的图片验证码', options: /^[0-9a-zA-Z]{4}$/ }],
	    captcha: [{ type: 'method', trigger: 'submit', message: '验证码未验证', options: function options(value) {
	            return value !== '';
	        } }, { type: 'method', trigger: 'submit', message: '验证失败，请重试', options: function options(value) {
	            return value !== '0';
	        } }],
	    password: [{ type: 'isRequired', trigger: 'submit', message: '请输入密码' }, { type: 'isNot', trigger: 'blur', message: '密码中不能包含空格', options: /\s/ }, { type: 'isNot', trigger: 'blur', message: '密码中不能包含汉字', options: /[\u4e00-\u9fa5]/ }, { type: 'isNot', trigger: 'blur', message: '密码中不能包含特殊字符', options: /[^\x21-\x7e]/ }, { type: 'isLength', trigger: 'blur', message: '请输入6-16位密码', options: { min: 6, max: 16 } }, {
	        type: 'method', trigger: 'blur', message: '密码过于简单，请重新输入', options: function options(value) {
	            var simpleList = ['123456', '123456789', '12345678', '123123', '5201314', '1234567', '7758521', '654321', '1314520', '123321', '1234567890', '147258369', '123654', '5211314', 'woaini', '1230123', '987654321', '147258', '123123123', '7758258', '520520', '789456', '456789', '159357', '112233', '1314521', '456123', '110110', '521521', 'zxcvbnm', '789456123', '0123456789', '0123456', '123465', '159753', 'qwertyuiop', '987654', '115415', '1234560', '123000', '123789', '100200', '963852741', '121212', '111222', '123654789', '12301230', '456456', '741852963', 'asdasd', 'asdfghjkl', '369258', '863786', '258369', '8718693', '666888', '5845201314', '741852', '168168', 'iloveyou', '852963', '4655321', '102030', '147852369', '321321'];
	            return simpleList.indexOf(value) === -1 ? 1 : 0;
	        }
	        //  判断帐号和密码是否一致的流程业务相关性比较强，建议各个项目内扩展自行实现
	    }]
	};

	module.exports = ValidateRules;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

	module.exports = "data:text/css;base64,Ly8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4="

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * **单元组件 - 基础输入框[bInput]**<br>
	 * 基础的输入框封装组件<br>
	 * 支持输入、校验、报错提示、清空输入框等功能<br>
	 * **使用方法：**<br>
	 * ```
	 * 【引用关键字】
	 * require('urs-rui/src/unit/bInput/bInput.js')
	 * ```
	 * ```
	 * 【组件标签】
	 * <bInput />
	 *
	 * ```
	 * @class bInput
	 * @main Unit
	 * @constructor
	 * @demo unit/bInput/demo-1.html {带删除按钮}
	 * @show true
	 * @author 黄笛
	 * @revise 注释撰写 [2017-08-28] [黄笛]
	 */

	/*================组件可传参数==================*/
	/**
	 * 组件自定义追加类名，将追加到组件最外层html结构class属性中
	 * @property clazz
	 * @default ''
	 * @type String
	 */

	/**
	 * 输入框input标签value属性值，双向绑定
	 * @property value
	 * @default ''
	 * @type String
	 */

	/**
	* 输入框input标签type属性值
	* @property type
	* @default 'text'
	* @type String
	*/

	/**
	* 输入框input标签name属性值
	* @property name
	* @default ''
	* @type String
	*/

	/**
	* 输入框input标签是否禁用状态
	* @property disabled
	* @default 0
	* @type Boolean
	*/

	/**
	* 输入框input标签placeholder属性值
	* @property placeholder
	* @default ''
	* @type String
	*/

	/**
	* 基础输入框组件状态，可选‘error’(校验不通过)
	* @property state
	* @default ''
	* @type String
	*/

	/**
	* 是否允许显示清空输入框按钮
	* @property enableDelete
	* @default true
	* @type Boolean
	*/

	/**
	 * 清空输入框按钮样式类名
	 * @property del_icon_clazz
	 * @default 'i-icon i-icon-delete'
	 * @type String
	 */

	/**
	 * 清空输入框后是否自动聚焦
	 * @property deleteAutoFocus
	 * @default 0
	 * @type Boolean
	 */

	/**
	 * 输入框组件错误提示文案，显示在组件下方
	 * @property errMsg
	 * @default ''
	 * @type String
	 */

	/**
	 * 是否必填
	 * @property require
	 * @default true
	 * @type Boolean
	 */

	/**
	* 是否失焦校验输入框
	* @property blurValidate
	* @default true
	* @type Boolean
	*/

	/**
	* 是否允许显示错误提示
	* @property showErr
	* @default ''
	* @type String
	*/

	/**
	* 必填输入框为空校验时提示的文案
	* @property rqMsg
	* @default '请输入内容'
	* @type String
	*/

	/**
	* 输入框校验规则数组
	* @property rules
	* @default []
	* @type Array
	*/

	/**
	* 输入框最大允许输入长度
	* @property maxlength
	* @default 50
	* @type Number
	*/

	/**
	 * 输入框最小输入长度
	 * @property minlength
	 * @default 50
	 * @type Number
	 */

	/*================可发起/监听事件=================*/
	/**
	 * 输入框聚焦
	 * @event focus
	 * @return {Object} event
	 */

	/**
	 * 输入框失焦
	 * @event blur
	 * @return {Object} event
	 */

	/**
	 * 输入框正在输入
	 * @event input
	 * @return {Object} event
	 */

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _base = __webpack_require__(9);

	var _base2 = _interopRequireDefault(_base);

	__webpack_require__(13);

	var _bInput = __webpack_require__(15);

	var _bInput2 = _interopRequireDefault(_bInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var bowser = __webpack_require__(16);

	exports.default = _base2.default.extend({
	    name: 'bInput',
	    template: _bInput2.default,
	    config: function config() {
	        this.defaults({
	            clazz: '',
	            value: '',
	            type: 'text',
	            name: '',
	            disabled: false,
	            placeholder: '',
	            state: '',
	            enableDelete: true,
	            del_icon_clazz: 'iconfont icon-clearall bInput_delete',
	            deleteAutoFocus: false,
	            errMsg: '',
	            require: true,
	            blurValidate: true,
	            showErr: true,
	            rqMsg: '请输入内容',
	            // pass: false,  // 
	            rules: [],
	            maxlength: 50,
	            minlength: 0,
	            _eltIE9: bowser.msie && bowser.version <= 9, // 内部
	            _onNoBlur: 0 // 内部
	        });
	        this.supr();
	    },
	    init: function init() {
	        this.supr();
	    },
	    destroy: function destroy() {
	        this.supr();
	    },

	    /**
	     * 校验输入框
	     * @method validate
	     * @return Object
	     */
	    validate: function validate() {
	        var trigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'blur';

	        // let rules = this.data.rules.filter((rule)=>{
	        //     return (rule.trigger!=='submit');
	        // });
	        var rules = this.data.rules;
	        var ret = { success: 1, msg: '' };
	        // 提交校验需要验证是否非空
	        // @NOTE 非空校验单独提取 默认非空
	        if (trigger === 'submit') {
	            if (this.data.require && this.data.value === '') {
	                ret.success = 0;
	                ret.msg = this.data.rqMsg;
	                this.data.showErr && this.showError(ret.msg);
	                return ret;
	            }
	            if (!this.data.require && this.data.value === '') {
	                return ret;
	            }
	        }
	        for (var i = 0; i < rules.length; i++) {
	            if (rules[i].rule instanceof RegExp) {
	                var result = rules[i].rule.test(this.data.value);
	                // 反向校验，符合该正则时失败
	                if (rules[i].type === 'isNot') {
	                    result = !result;
	                }
	                // 校验失败
	                if (!result) {
	                    ret.success = 0;
	                    ret.msg = rules[i].msg;
	                    this.data.showErr && this.showError(ret.msg);
	                    // @NOTE 正则错误的提前退出一定是同步的
	                    return ret;
	                }
	            } else if (typeof rules[i].rule == 'function') {
	                ret.success = rules[i].rule.call(this, this.data.value);
	                ret.msg = rules[i].msg;
	                if (!ret.success) {
	                    this.data.showErr && this.showError(ret.msg);
	                    return ret;
	                }
	            }
	        }
	        return ret;
	    },

	    /**
	     * 主动聚焦输入框
	     * @method focus
	     * @return undefined
	     */
	    focus: function focus() {
	        this.$refs.input.focus();
	    },

	    /**
	     * 主动失焦输入框
	     * @method blur
	     * @return undefined
	     */
	    blur: function blur() {
	        this.$refs.input.blur();
	    },

	    /**
	     * 获取输入框值value
	     * @method getValue
	     * @return String
	     */
	    getValue: function getValue() {
	        return this.$refs.input.value;
	    },

	    /**
	     * 设置输入框值value
	     * @method setValue
	     * @return undefined
	     */
	    setValue: function setValue(_value) {
	        this.$refs.input.value = _value || '';
	    },

	    /**
	     * 设置输入框状态
	     * @method setState
	     * @param {String} _state 状态 ** *error* | '' **
	     * @return undefined
	     */
	    setState: function setState(_state) {
	        this.data.state = _state || '';
	    },

	    /**
	     * 获取输入框状态
	     * @method getState
	     * @return String 
	     */
	    getState: function getState() {
	        return this.data.state;
	    },

	    /**
	     * 显示输入框错误提示、设置错误状态
	     * @method showError
	     * @param {String} _errMsg 
	     * @return undefined
	     */
	    showError: function showError(_errMsg) {
	        this.data.state = 'error';
	        this.data.errMsg = _errMsg;
	        this.$update();
	    },

	    /**
	     * 清除输入框错误提示、清空错误状态
	     * @method clearError
	     * @return undefined
	     */
	    clearError: function clearError() {
	        // if(this.data.state === 'error'){
	        this.data.state = '';
	        this.data.errMsg = '';
	        // }
	        this.$update();
	    },

	    /*================内部监听事件=================*/
	    // 聚焦
	    _onFocus: function _onFocus(_event) {
	        this.$emit('focus', _event);
	        this.$update();
	    },

	    // 失焦
	    _onBlur: function _onBlur(_event) {

	        // @TODO 校验blur时是不是在删除按钮上
	        if (this.data.value === '' || this.data._onNoBlur === 1) {
	            return;
	        }

	        this.data.blurValidate && this.validate('blur');
	        this.$emit('blur', _event);
	    },

	    // 输入
	    _onInput: function _onInput(_event) {
	        this.$emit('input', _event);
	        if (_event.event && _event.event.propertyName === 'value' || _event.type == 'input') {
	            this.clearError();
	        }
	        // TODO _compositionInputing处理
	        // setTimeout(() => !this.data._compositionInputing && this.validate('input'));
	        // this.validate('input');
	    },

	    // 清空输入
	    _onDelete: function _onDelete(_event) {
	        this.data.value = '';
	        this.clearError();
	        // 是否配置为清空输入框自动focus
	        if (!!this.data.deleteAutoFocus) {
	            this.focus();
	        }
	    },

	    // 在删除按钮上
	    _onNoBlur: function _onNoBlur(_event) {
	        this.data._onNoBlur = 1;
	    },

	    // 不在删除按钮上
	    _onOutNoBlur: function _onOutNoBlur(_event) {
	        this.data._onNoBlur = 0;
	    }
	});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * Component 基础组件
	 * @auth hzhuangdi(hzhuangdi@corp.netease.com)
	 */

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Regular = __webpack_require__(10);
	var directive = __webpack_require__(11);
	var filter = __webpack_require__(12);
	var Dom = __webpack_require__(10).dom;

	var Component = Regular.extend({

	    /**
	     * @protected
	     */
	    config: function config() {
	        this.defaults({
	            'clazz': '',
	            visible: true
	        });
	        this.supr();
	    },

	    /**
	     * @protected
	     */
	    reset: function reset() {
	        this.data = {};
	        this.config();
	    },

	    /**
	     * 设置this.data的默认值，不会覆盖已经存在的key
	     * 
	     * @param {object} _args
	     */
	    defaults: function defaults(_args) {
	        for (var _key in _args) {
	            if (_args.hasOwnProperty(_key) && this.data[_key] === undefined) {
	                this.data[_key] = _args[_key];
	            }
	        }
	    }
	}).directive(directive).filter(filter).event('enter', function (elem, fire) {
	    function update(ev) {
	        if (ev.which == 13) {
	            // ENTER key
	            ev.preventDefault();
	            fire(ev); // if key is enter , we fire the event;
	        }
	    }
	    Dom.on(elem, "keypress", update);
	    return function destroy() {
	        // return a destroy function
	        Dom.off(elem, "keypress", update);
	    };
	});

	exports.default = Component;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _ = __webpack_require__(10).dom;

	var rClassGenerator = function rClassGenerator(rClass) {
	    exports[rClass] = function (elem, value) {
	        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.type == 'expression') this.$watch(value, function (newValue, oldValue) {
	            _[newValue ? 'addClass' : 'delClass'](elem, rClass);
	        });else if (!!value || value === '') _.addClass(elem, rClass);
	    };
	};

	rClassGenerator('z-hov');
	rClassGenerator('z-act');
	rClassGenerator('z-dis');
	rClassGenerator('z-sel');

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	var lower = function lower(value) {
	    value = value || '';
	    return value.toLowerCase();
	};
	/**
	 * @method  dateFormat(date, format) 日期格式化
	 * @public
	 * @param  {Date|number} date 需要格式化的值
	 * @param  {string} format 格式。默认为`yyyy.MM.dd`。
	 * @return {Directive} 返回生成的字符串
	 */
	var dateFormat = function () {
	    var _padZero = function _padZero(_value) {
	        _value = _value || '';
	        return _value.length < 2 ? '0' + _value : _value;
	    };
	    var MAPS = {
	        yyyy: function yyyy(date) {
	            return date.getFullYear();
	        },
	        MM: function MM(date) {
	            return _padZero(String(date.getMonth() + 1));
	        },
	        dd: function dd(date) {
	            return _padZero(String(date.getDate()));
	        },
	        HH: function HH(date) {
	            return _padZero(String(date.getHours()));
	        },
	        mm: function mm(date) {
	            return _padZero(String(date.getMinutes()));
	        },
	        ss: function ss(date) {
	            return _padZero(String(date.getSeconds()));
	        }
	    };

	    var trunk = new RegExp(Object.keys(MAPS).join('|'), 'g');

	    return function (value) {
	        var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy.MM.dd';

	        if (!value) return '';
	        value = parseInt(value);
	        value = new Date(value);

	        return format.replace(trunk, function (capture) {
	            return MAPS[capture](value);
	        });
	    };
	}();

	var objectFormat = function () {
	    return function (object) {
	        var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key';

	        if (!object) {
	            return;
	        }
	        if (format == 'key') {
	            for (var p1 in object) {
	                if (object.hasOwnProperty(p1)) return p1;
	            }
	        } else {
	            for (var p1 in object) {
	                if (object.hasOwnProperty(p1)) return object[p1];
	            }
	        }
	    };
	}();
	/**
	 * 限时时间格式化
	 */
	var expireFormat = function () {
	    // dd 天 hh 小时 mm分 ss秒
	    return function (value) {
	        var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dd.hh.mm.ss';

	        if (!value || value < 0) return 0;
	        value = parseInt(value); // 倒计时时间戳，单位为毫秒
	        value = parseInt(value / 1000); // 转化为秒处理

	        var _dd = parseInt(value / 86400),
	            _hh = parseInt(value % 86400 / 3600),
	            _mm = parseInt(value % 86400 % 3600 / 60),
	            _ss = parseInt(value % 86400 % 3600 % 60);

	        // 精确到天，不足一天显示一天
	        if (format == 'dd') {
	            _dd = _dd ? _dd : 1;
	            return _dd + "天";
	        }

	        // 精确到小时，不足一小时显示一小时
	        if (format == 'dd.hh') {
	            _hh = _hh ? _hh : 1;
	            return _dd + "天" + _hh + "小时";
	        }

	        // 精确到分钟, 不足一分钟显示一分钟
	        if (format == 'dd.hh.mm') {
	            _mm = _mm ? _mm : 1;
	            return _dd + "天" + _hh + "小时" + _mm + "分";
	        }

	        // 精确到秒,不足一秒显示一秒
	        if (format == 'dd.hh.mm.ss') {
	            _ss = _ss ? _ss : 1;
	            return _dd + "天" + _hh + "小时" + _mm + "分" + _ss + "秒";
	        }
	        return null;
	    };
	}();

	/**
	 * nos图片url格式化
	 */
	var thumbnailImg = function thumbnailImg(url, width, height, quality) {
	    var _url = url || '',
	        _w = width || 0,
	        _h = height || 0,
	        _q = quality || 85;
	    if (!_url) return "";
	    if (/imageView/.test(_url)) {
	        // 直接拼接参数
	        return _url + '&interlace=1&thumbnail=' + _w + 'x' + _h + '&quality=' + _q;
	    } else {
	        if (/\?/.test(_url)) {
	            return _url + '&imageView&interlace=1&thumbnail=' + _w + 'x' + _h + '&quality=' + _q;
	        } else {
	            return _url + '?imageView&interlace=1&thumbnail=' + _w + 'x' + _h + '&quality=' + _q;
	        }
	    }
	};

	module.exports = {
	    lower: lower,
	    dateFormat: dateFormat,
	    objectFormat: objectFormat,
	    expireFormat: expireFormat,
	    thumbnailImg: thumbnailImg
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"bInput_ipt {clazz}\">\n    <div class='bInput_wrap'>\n        <div class=\"bInput_input_wrap bInput-{state} {(!!value && enableDelete==1)?'hasval':''}\">\n            <input ref=\"input\" class='bInput_input' type={type} name={name} disabled={disabled} placeholder={placeholder} r-model={value} on-focus={this._onFocus($event)} on-blur={this._onBlur($event)} on-input={this._onInput($event)} {#if _eltIE9}on-propertychange={this._onInput($event)}{/if} autocomplete='off' spellcheck=\"false\" maxlength=\"{maxlength}\" minlength=\"{minlength}\"/>\n            {#if _eltIE9 && !value}\n            <span class=\"bInput_placeholder\" on-click={this.$refs.input.focus()} >{placeholder}</span>\n            {/if}\n            <div class='bInput_extend'>\n                {#if enableDelete==1}\n                <i class={del_icon_clazz} r-hide={!value} on-mouseover={this._onNoBlur($event)} on-mouseout={this._onOutNoBlur($event)} on-click={this._onDelete($event)}></i>\n                {/if}\n            </div>\n        </div>\n        {#inc this.$body}\n    </div>\n    {#if errMsg}\n    <div class=\"bInput_tip bInput_tip-{state}\" r-html={errMsg}></div>\n    {/if}    \n</div>\n"

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * Bowser - a browser detector
	 * https://github.com/ded/bowser
	 * MIT License | (c) Dustin Diaz 2015
	 */

	!function (root, name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition();else if (true) __webpack_require__(17)(name, definition);else root[name] = definition();
	}(undefined, 'bowser', function () {
	  /**
	    * See useragents.js for examples of navigator.userAgent
	    */

	  var t = true;

	  function detect(ua) {

	    function getFirstMatch(regex) {
	      var match = ua.match(regex);
	      return match && match.length > 1 && match[1] || '';
	    }

	    function getSecondMatch(regex) {
	      var match = ua.match(regex);
	      return match && match.length > 1 && match[2] || '';
	    }

	    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(),
	        likeAndroid = /like android/i.test(ua),
	        android = !likeAndroid && /android/i.test(ua),
	        nexusMobile = /nexus\s*[0-6]\s*/i.test(ua),
	        nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua),
	        chromeos = /CrOS/.test(ua),
	        silk = /silk/i.test(ua),
	        sailfish = /sailfish/i.test(ua),
	        tizen = /tizen/i.test(ua),
	        webos = /(web|hpw)os/i.test(ua),
	        windowsphone = /windows phone/i.test(ua),
	        samsungBrowser = /SamsungBrowser/i.test(ua),
	        windows = !windowsphone && /windows/i.test(ua),
	        mac = !iosdevice && !silk && /macintosh/i.test(ua),
	        linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua),
	        edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i),
	        versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i),
	        tablet = /tablet/i.test(ua) && !/tablet pc/i.test(ua),
	        mobile = !tablet && /[^-]mobi/i.test(ua),
	        xbox = /xbox/i.test(ua),
	        result;

	    if (/opera/i.test(ua)) {
	      //  an old Opera
	      result = {
	        name: 'Opera',
	        opera: t,
	        version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
	      };
	    } else if (/opr|opios/i.test(ua)) {
	      // a new Opera
	      result = {
	        name: 'Opera',
	        opera: t,
	        version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    } else if (/SamsungBrowser/i.test(ua)) {
	      result = {
	        name: 'Samsung Internet for Android',
	        samsungBrowser: t,
	        version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
	      };
	    } else if (/coast/i.test(ua)) {
	      result = {
	        name: 'Opera Coast',
	        coast: t,
	        version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
	      };
	    } else if (/yabrowser/i.test(ua)) {
	      result = {
	        name: 'Yandex Browser',
	        yandexbrowser: t,
	        version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
	      };
	    } else if (/ucbrowser/i.test(ua)) {
	      result = {
	        name: 'UC Browser',
	        ucbrowser: t,
	        version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
	      };
	    } else if (/mxios/i.test(ua)) {
	      result = {
	        name: 'Maxthon',
	        maxthon: t,
	        version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
	      };
	    } else if (/epiphany/i.test(ua)) {
	      result = {
	        name: 'Epiphany',
	        epiphany: t,
	        version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
	      };
	    } else if (/puffin/i.test(ua)) {
	      result = {
	        name: 'Puffin',
	        puffin: t,
	        version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
	      };
	    } else if (/sleipnir/i.test(ua)) {
	      result = {
	        name: 'Sleipnir',
	        sleipnir: t,
	        version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
	      };
	    } else if (/k-meleon/i.test(ua)) {
	      result = {
	        name: 'K-Meleon',
	        kMeleon: t,
	        version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
	      };
	    } else if (windowsphone) {
	      result = {
	        name: 'Windows Phone',
	        windowsphone: t
	      };
	      if (edgeVersion) {
	        result.msedge = t;
	        result.version = edgeVersion;
	      } else {
	        result.msie = t;
	        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i);
	      }
	    } else if (/msie|trident/i.test(ua)) {
	      result = {
	        name: 'Internet Explorer',
	        msie: t,
	        version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
	      };
	    } else if (chromeos) {
	      result = {
	        name: 'Chrome',
	        chromeos: t,
	        chromeBook: t,
	        chrome: t,
	        version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      };
	    } else if (/chrome.+? edge/i.test(ua)) {
	      result = {
	        name: 'Microsoft Edge',
	        msedge: t,
	        version: edgeVersion
	      };
	    } else if (/vivaldi/i.test(ua)) {
	      result = {
	        name: 'Vivaldi',
	        vivaldi: t,
	        version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    } else if (sailfish) {
	      result = {
	        name: 'Sailfish',
	        sailfish: t,
	        version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
	      };
	    } else if (/seamonkey\//i.test(ua)) {
	      result = {
	        name: 'SeaMonkey',
	        seamonkey: t,
	        version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
	      };
	    } else if (/firefox|iceweasel|fxios/i.test(ua)) {
	      result = {
	        name: 'Firefox',
	        firefox: t,
	        version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
	      };
	      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
	        result.firefoxos = t;
	      }
	    } else if (silk) {
	      result = {
	        name: 'Amazon Silk',
	        silk: t,
	        version: getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
	      };
	    } else if (/phantom/i.test(ua)) {
	      result = {
	        name: 'PhantomJS',
	        phantom: t,
	        version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
	      };
	    } else if (/slimerjs/i.test(ua)) {
	      result = {
	        name: 'SlimerJS',
	        slimer: t,
	        version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
	      };
	    } else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
	      result = {
	        name: 'BlackBerry',
	        blackberry: t,
	        version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
	      };
	    } else if (webos) {
	      result = {
	        name: 'WebOS',
	        webos: t,
	        version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
	      };
	      /touchpad\//i.test(ua) && (result.touchpad = t);
	    } else if (/bada/i.test(ua)) {
	      result = {
	        name: 'Bada',
	        bada: t,
	        version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
	      };
	    } else if (tizen) {
	      result = {
	        name: 'Tizen',
	        tizen: t,
	        version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    } else if (/qupzilla/i.test(ua)) {
	      result = {
	        name: 'QupZilla',
	        qupzilla: t,
	        version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
	      };
	    } else if (/chromium/i.test(ua)) {
	      result = {
	        name: 'Chromium',
	        chromium: t,
	        version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
	      };
	    } else if (/chrome|crios|crmo/i.test(ua)) {
	      result = {
	        name: 'Chrome',
	        chrome: t,
	        version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      };
	    } else if (android) {
	      result = {
	        name: 'Android',
	        version: versionIdentifier
	      };
	    } else if (/safari|applewebkit/i.test(ua)) {
	      result = {
	        name: 'Safari',
	        safari: t
	      };
	      if (versionIdentifier) {
	        result.version = versionIdentifier;
	      }
	    } else if (iosdevice) {
	      result = {
	        name: iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
	        // WTF: version is not part of user agent in web apps
	      };if (versionIdentifier) {
	        result.version = versionIdentifier;
	      }
	    } else if (/googlebot/i.test(ua)) {
	      result = {
	        name: 'Googlebot',
	        googlebot: t,
	        version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
	      };
	    } else {
	      result = {
	        name: getFirstMatch(/^(.*)\/(.*) /),
	        version: getSecondMatch(/^(.*)\/(.*) /)
	      };
	    }

	    // set webkit or gecko flag for browsers based on these engines
	    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
	      if (/(apple)?webkit\/537\.36/i.test(ua)) {
	        result.name = result.name || "Blink";
	        result.blink = t;
	      } else {
	        result.name = result.name || "Webkit";
	        result.webkit = t;
	      }
	      if (!result.version && versionIdentifier) {
	        result.version = versionIdentifier;
	      }
	    } else if (!result.opera && /gecko\//i.test(ua)) {
	      result.name = result.name || "Gecko";
	      result.gecko = t;
	      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i);
	    }

	    // set OS flags for platforms that have multiple browsers
	    if (!result.windowsphone && !result.msedge && (android || result.silk)) {
	      result.android = t;
	    } else if (!result.windowsphone && !result.msedge && iosdevice) {
	      result[iosdevice] = t;
	      result.ios = t;
	    } else if (mac) {
	      result.mac = t;
	    } else if (xbox) {
	      result.xbox = t;
	    } else if (windows) {
	      result.windows = t;
	    } else if (linux) {
	      result.linux = t;
	    }

	    function getWindowsVersion(s) {
	      switch (s) {
	        case 'NT':
	          return 'NT';
	        case 'XP':
	          return 'XP';
	        case 'NT 5.0':
	          return '2000';
	        case 'NT 5.1':
	          return 'XP';
	        case 'NT 5.2':
	          return '2003';
	        case 'NT 6.0':
	          return 'Vista';
	        case 'NT 6.1':
	          return '7';
	        case 'NT 6.2':
	          return '8';
	        case 'NT 6.3':
	          return '8.1';
	        case 'NT 10.0':
	          return '10';
	        default:
	          return undefined;
	      }
	    }

	    // OS version extraction
	    var osVersion = '';
	    if (result.windows) {
	      osVersion = getWindowsVersion(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i));
	    } else if (result.windowsphone) {
	      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
	    } else if (result.mac) {
	      osVersion = getFirstMatch(/Mac OS X (\d+([_\.\s]\d+)*)/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (iosdevice) {
	      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (android) {
	      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
	    } else if (result.webos) {
	      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
	    } else if (result.blackberry) {
	      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
	    } else if (result.bada) {
	      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
	    } else if (result.tizen) {
	      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
	    }
	    if (osVersion) {
	      result.osversion = osVersion;
	    }

	    // device type extraction
	    var osMajorVersion = !result.windows && osVersion.split('.')[0];
	    if (tablet || nexusTablet || iosdevice == 'ipad' || android && (osMajorVersion == 3 || osMajorVersion >= 4 && !mobile) || result.silk) {
	      result.tablet = t;
	    } else if (mobile || iosdevice == 'iphone' || iosdevice == 'ipod' || android || nexusMobile || result.blackberry || result.webos || result.bada) {
	      result.mobile = t;
	    }

	    // Graded Browser Support
	    // http://developer.yahoo.com/yui/articles/gbs
	    if (result.msedge || result.msie && result.version >= 10 || result.yandexbrowser && result.version >= 15 || result.vivaldi && result.version >= 1.0 || result.chrome && result.version >= 20 || result.samsungBrowser && result.version >= 4 || result.firefox && result.version >= 20.0 || result.safari && result.version >= 6 || result.opera && result.version >= 10.0 || result.ios && result.osversion && result.osversion.split(".")[0] >= 6 || result.blackberry && result.version >= 10.1 || result.chromium && result.version >= 20) {
	      result.a = t;
	    } else if (result.msie && result.version < 10 || result.chrome && result.version < 20 || result.firefox && result.version < 20.0 || result.safari && result.version < 6 || result.opera && result.version < 10.0 || result.ios && result.osversion && result.osversion.split(".")[0] < 6 || result.chromium && result.version < 20) {
	      result.c = t;
	    } else result.x = t;

	    return result;
	  }

	  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '');

	  bowser.test = function (browserList) {
	    for (var i = 0; i < browserList.length; ++i) {
	      var browserItem = browserList[i];
	      if (typeof browserItem === 'string') {
	        if (browserItem in bowser) {
	          return true;
	        }
	      }
	    }
	    return false;
	  };

	  /**
	   * Get version precisions count
	   *
	   * @example
	   *   getVersionPrecision("1.10.3") // 3
	   *
	   * @param  {string} version
	   * @return {number}
	   */
	  function getVersionPrecision(version) {
	    return version.split(".").length;
	  }

	  /**
	   * Array::map polyfill
	   *
	   * @param  {Array} arr
	   * @param  {Function} iterator
	   * @return {Array}
	   */
	  function map(arr, iterator) {
	    var result = [],
	        i;
	    if (Array.prototype.map) {
	      return Array.prototype.map.call(arr, iterator);
	    }
	    for (i = 0; i < arr.length; i++) {
	      result.push(iterator(arr[i]));
	    }
	    return result;
	  }

	  /**
	   * Calculate browser version weight
	   *
	   * @example
	   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
	   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
	   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
	   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
	   *
	   * @param  {Array<String>} versions versions to compare
	   * @return {Number} comparison result
	   */
	  function compareVersions(versions) {
	    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
	    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
	    var chunks = map(versions, function (version) {
	      var delta = precision - getVersionPrecision(version);

	      // 2) "9" -> "9.0" (for precision = 2)
	      version = version + new Array(delta + 1).join(".0");

	      // 3) "9.0" -> ["000000000"", "000000009"]
	      return map(version.split("."), function (chunk) {
	        return new Array(20 - chunk.length).join("0") + chunk;
	      }).reverse();
	    });

	    // iterate in reverse order by reversed chunks array
	    while (--precision >= 0) {
	      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
	      if (chunks[0][precision] > chunks[1][precision]) {
	        return 1;
	      } else if (chunks[0][precision] === chunks[1][precision]) {
	        if (precision === 0) {
	          // all version chunks are same
	          return 0;
	        }
	      } else {
	        return -1;
	      }
	    }
	  }

	  /**
	   * Check if browser is unsupported
	   *
	   * @example
	   *   bowser.isUnsupportedBrowser({
	   *     msie: "10",
	   *     firefox: "23",
	   *     chrome: "29",
	   *     safari: "5.1",
	   *     opera: "16",
	   *     phantom: "534"
	   *   });
	   *
	   * @param  {Object}  minVersions map of minimal version to browser
	   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
	   * @param  {String}  [ua] user agent string
	   * @return {Boolean}
	   */
	  function isUnsupportedBrowser(minVersions, strictMode, ua) {
	    var _bowser = bowser;

	    // make strictMode param optional with ua param usage
	    if (typeof strictMode === 'string') {
	      ua = strictMode;
	      strictMode = void 0;
	    }

	    if (strictMode === void 0) {
	      strictMode = false;
	    }
	    if (ua) {
	      _bowser = detect(ua);
	    }

	    var version = "" + _bowser.version;
	    for (var browser in minVersions) {
	      if (minVersions.hasOwnProperty(browser)) {
	        if (_bowser[browser]) {
	          if (typeof minVersions[browser] !== 'string') {
	            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
	          }

	          // browser version and min supported version.
	          return compareVersions([version, minVersions[browser]]) < 0;
	        }
	      }
	    }

	    return strictMode; // not found
	  }

	  /**
	   * Check if browser is supported
	   *
	   * @param  {Object} minVersions map of minimal version to browser
	   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
	   * @param  {String}  [ua] user agent string
	   * @return {Boolean}
	   */
	  function check(minVersions, strictMode, ua) {
	    return !isUnsupportedBrowser(minVersions, strictMode, ua);
	  }

	  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
	  bowser.compareVersions = compareVersions;
	  bowser.check = check;

	  /*
	   * Set our detect method to the main bowser object so we can
	   * reuse it to test other user agents.
	   * This is needed to implement future tests.
	   */
	  bowser._detect = detect;

	  return bowser;
	});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * **单元组件 - 按钮[Button]**<br>
	 * 基础的按钮封装组件<br>
	 * 支持按钮上锁、loading、倒计时功能<br>
	 * **使用方法：**<br>
	 * ```
	 * 【引用关键字】
	 * require('urs-rui/src/unit/button/button.js')
	 * ```
	 * ```
	 * 【组件标签】
	 * <bButton clazz="bButton-sms f-fl" enableTip="获取验证码"></bButton>
	 *
	 * ```
	 * @class Button
	 * @main Unit
	 * @constructor
	 * @demo unit/bButton/demo-1.html {可用状态}
	 * @demo unit/bButton/demo-2.html {锁定状态}
	 * @demo unit/bButton/demo-3.html {Loading状态}
	 * @show true
	 * @author 黄笛
	 * @revise 通用性优化，注释撰写 [2017-08-03] [张威]
	 * @revise 调整对外API，去掉可重置状态时文字（回归enableTip） [2017-09-25] [黄笛]
	 */

	/*================组件可传参数==================*/
	/**
	 * 按钮可用时显示文字
	 * @property enableTip
	 * @default 按钮
	 * @type String
	 */

	/**
	 * 倒计时状态时显示文字，``[count]``为预留计时位置
	 * @property countingTip
	 * @default [count]s
	 * @type String
	 */

	/**
	 * 锁定、禁用状态时显示文字
	 * @property disableTip
	 * @default 状态重置
	 * @type String
	 */

	/**
	 * 锁定状态计时时长
	 * @property count
	 * @default 30
	 * @type Number
	 */

	/*================可发起/监听事件==================*/
	/**
	 * 锁定计时开始回调
	 * @event countbegin
	 * @example <Button on-countbegin={ function(_obj){} } />
	 * @return {Object} {sender: e}
	 */
	/**
	 * 锁定计时结束回调
	 * @event countend
	 * @example <Button on-countend={ function(_obj){} } />
	 * @return {Object} {sender: e}
	 */
	/**
	 * 点击事件
	 * @event click
	 * @return {Object} {sender: e}
	 */

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(19);

	var _bButton = __webpack_require__(22);

	var _bButton2 = _interopRequireDefault(_bButton);

	var _component = __webpack_require__(23);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Button = _component2.default.extend({
	    name: 'bButton',
	    template: _bButton2.default,
	    config: function config() {
	        this.defaults({
	            enableTip: '提交',
	            countingTip: '[count]s',
	            disableTip: '提交中...',
	            count: 30,
	            disabled: 0,
	            loading: 0,
	            tip: ''
	        });
	        this.supr();
	    },
	    init: function init() {
	        this.data.tip = this.data.enableTip;
	    },
	    _onClick: function _onClick(_event) {
	        _event.preventDefault();

	        this.$emit('click', {
	            sender: this
	        });
	    },

	    /**
	     * 设定按钮锁定状态：loading 或 倒计时锁定
	     * @method setLock
	     * @param {Object} opt {loading:0,count:0,tip:'XXX'}
	     * @return undefined
	     */
	    setLock: function setLock(opt) {
	        var _opt = opt || {};
	        this.data.disabled = 1;
	        // 是否loading
	        if (_opt.loading) {
	            this.data.loading = 1;
	        } else {
	            this.data.loading = 0;
	        }
	        // 是否倒计时
	        if (_opt.count) {
	            // 倒计时文案采用countingTip走倒计时流程
	            this.countDown();
	        } else {
	            // 仅锁定，采用disableTip
	            this.data.tip = _opt.tip || this.data.disableTip;
	        }
	        this.$update();
	    },

	    /**
	     * 还原按钮状态：按钮可用，文案恢复为enableTip，
	     * loading、倒计时清除
	     * @method unLock
	     * @return undefined
	     */
	    unLock: function unLock() {
	        // 还原按钮状态
	        this.data.disabled = 0;
	        this.data.tip = this.data.enableTip;
	        this.data.loading = 0;
	        clearTimeout(this.timer);
	        this.$update();
	    },

	    countDown: function () {
	        var _count = 10;

	        var t = function t() {
	            var _this = this;

	            this.timer = setTimeout(function () {
	                _count--;
	                _this.data.tip = _this.data.countingTip.replace('[count]', _count);
	                _this.$update();

	                if (_count < 0) {
	                    _this.$emit('countend', {
	                        sender: _this
	                    });
	                    _this.unLock();
	                    _this.$update();
	                    clearTimeout(_this.timer);
	                    return;
	                }
	                t.apply(_this);
	            }, 1000);
	        };
	        return function () {
	            this.$emit('countbegin', {
	                sender: this
	            });
	            _count = this.data.count;
	            _count--;
	            this.data.tip = this.data.countingTip.replace('[count]', _count);
	            this.$update();
	            t.apply(this);
	        };
	    }()
	});

	exports.default = Button;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

	module.exports = "<div class='bButton_btn {clazz}'>\n    <button on-click={this._onClick($event)} z-dis={disabled} disabled={disabled}>{tip}</button>\n    {#if loading}<div class='bButton_mask'><div class=\"bButton_loading\"><i></i></div></div>{/if}\n</div>"

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * Component 基础组件
	 * @auth hzhuangdi(hzhuangdi@corp.netease.com)
	 */

	'use strict';

	var Regular = __webpack_require__(10);
	var directive = __webpack_require__(24);

	var Component = Regular.extend({

	    /**
	     * @protected
	     */
	    config: function config() {
	        this.defaults({
	            'clazz': '',
	            visible: true
	        });
	        this.supr();
	    },

	    /**
	     * @protected
	     */
	    reset: function reset() {
	        this.data = {};
	        this.config();
	    },

	    /**
	     * 设置this.data的默认值，不会覆盖已经存在的key
	     * 
	     * @param {object} _args
	     */
	    defaults: function defaults(_args) {
	        for (var _key in _args) {
	            if (_args.hasOwnProperty(_key) && this.data[_key] === undefined) {
	                this.data[_key] = _args[_key];
	            }
	        }
	    }
	}).directive(directive);

	module.exports = Component;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _ = __webpack_require__(10).dom;

	var rClassGenerator = function rClassGenerator(rClass) {
	    exports[rClass] = function (elem, value) {
	        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.type == 'expression') this.$watch(value, function (newValue, oldValue) {
	            _[newValue ? 'addClass' : 'delClass'](elem, rClass);
	        });else if (!!value || value === '') _.addClass(elem, rClass);
	    };
	};

	rClassGenerator('z-hov');
	rClassGenerator('z-act');
	rClassGenerator('z-dis');
	rClassGenerator('z-sel');

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _base = __webpack_require__(9);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ListView = _base2.default.extend({
	    name: 'bListView',
	    template: '<ul class="{clazz}" z-dis={disabled} r-hide={!visible}>{#inc this.$body}</ul>',
	    config: function config() {
	        this.defaults({
	            _list: [],
	            _selected: undefined,
	            value: undefined,
	            disabled: false,
	            visible: true,
	            multiple: false,
	            cancelable: false,
	            title: undefined
	        });
	        this.supr();
	        this.watch();
	    },
	    watch: function watch() {
	        var _this = this;

	        this.$watch('value', function (value) {
	            if (!_this.data._selected || _this.data._selected.data.value !== value) _this.data._selected = _this.data._list.find(function (item) {
	                return item.data.value === value;
	            });

	            /**
	             * @event change 选择值改变时触发
	             * @property {object} sender 事件发送对象
	             * @property {Item} selected 改变后的选择项
	             * @property {var} value 改变后的选择值
	             */
	            _this.$emit('change', {
	                sender: _this,
	                selected: _this.data._selected,
	                value: value
	            });
	        });
	        this.$watch('_selected', function (_selected, _oldSelected) {
	            // 改变item的选择状态
	            _oldSelected && (_oldSelected.data.selected = false);
	            _selected && (_selected.data.selected = true);
	            // 设置value
	            _this.data.value = _selected ? _selected.data.value : _selected;
	        });
	    },
	    select: function select(item) {
	        if (this.data.disabled) return;

	        if (this.data.multiple) item.data.selected = !item.data.selected;else if (this.data.cancelable && this.data._selected === item) this.data._selected = undefined;else this.data._selected = item;
	        this.$update();
	        /**
	         * @event select 选择某一项时触发
	         * @property {object} sender 事件发送对象
	         * @property {Item} selected 当前选择项
	         * @property {var} value 当前选择值
	         */
	        this.$emit('select', {
	            sender: this,
	            selected: item,
	            value: item.data.value
	        });
	    }
	}); /*
	     * 基础组件-ListView，改编自regular-listview
	     * @auth hzhuangdi(hzhuangdi@corp.netease.com)
	     */

	exports.default = ListView;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * **单元组件 - 验证码[Captcha]**<br>
	 * 基础的验证码封装组件<br>
	 * 支持滑块验证码，点击式验证码功能<br>
	 * **使用方法：**<br>
	 * ```
	 * 【引用关键字】
	 * require('urs-rui/src/unit/bCaptcha/bCaptcha.js')
	 * ```
	 * ```
	 * 【组件标签】
	 * <bCaptcha clazz="u-ipt" ref=bCaptcha captchaType={capType}></bCaptcha>
	 *
	 * ```
	 * @class Captcha
	 * @main Unit
	 * @constructor
	 * @demo unit/bCaptcha/demo-1.html {滑块验证码}
	 * @demo unit/bCaptcha/demo-2.html {点击式验证码}
	 * @demo unit/bCaptcha/demo-3.html {嵌入式}
	 * @show true
	 * @author cheng-lin@corp.netease.com
	 */

	/*================组件可传参数==================*/

	/**
	 * 验证码外层样式
	 * @property clazz
	 * @default 2
	 * @type String
	 */

	/**
	 * 验证码类型
	 * @property captchaType
	 * @default 2
	 * @type String
	 */

	/**
	 * 验证码文案是否居中
	 * @property alignToSpace
	 * @default true
	 * @type Boolean
	 */

	/**
	 * 验证码静态资源请求地址
	 * @property staticServer
	 * @default captcha.reg.163.com/v2
	 * @type String
	 */

	/**
	 * 验证码后端验证请求地址
	 * @property apiServer
	 * @default captcha.reg.163.com/v2
	 * @type String
	 */

	/**
	 * 验证码Id
	 * @property captchaId
	 * @default 01af5fbb3c62da409236694547396158
	 * @type String
	 */

	/**
	 * 验证码宽度
	 * @property width
	 * @default document.body.clientWidth * 0.9
	 * @type Number
	 */

	/**
	 * 是否使用https
	 * @property forceHttps
	 * @default false
	 * @type Boolean
	 */

	/**
	 * 显示延迟时间
	 * @property showDelay
	 * @default 300
	 * @type Number
	 */

	/**
	 * 隐藏延迟时间
	 * @property hideDelay
	 * @default 0
	 * @type Number
	 */

	/*================可发起/监听事件==================*/
	/**
	 * 验证码验证结果
	 * @event validate
	 * @example <bCaptcha on-validate={ function(_obj){} } />
	 * @return {Object}
	 */
	/**
	 * 验证码初始化成功
	 * @event initCallback
	 * @example <bCaptcha on-initCallback={ function(_obj){} } />
	 * @return {Object}
	 */
	/**
	 * 验证码初始化失败
	 * @event initErrorHandler
	 * @example <bCaptcha on-initErrorHandler={ function(_obj){} } />
	 * @return {Object}
	 */
	'use strict';

	var _component = __webpack_require__(23);

	var _component2 = _interopRequireDefault(_component);

	var _bCaptcha = __webpack_require__(27);

	var _bCaptcha2 = _interopRequireDefault(_bCaptcha);

	__webpack_require__(28);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var data = {};

	var wd = document.body.clientWidth < 425 ? parseInt(document.body.clientWidth * 0.92, 10) : 391;

	var capOpt = {
	  'alignToSpace': true,
	  'staticServer': 'captcha.reg.163.com/v2',
	  'apiServer': 'captcha.reg.163.com/v2',
	  'captchaId': '01af5fbb3c62da409236694547396158',
	  'width': wd,
	  'mode': 'float', // 嵌入 emit
	  'forceHttps': false,
	  'showDelay': 300,
	  'hideDelay': 0
	};

	var Captcha = _component2.default.extend({
	  template: _bCaptcha2.default,
	  name: 'bCaptcha',
	  data: {
	    'mode': 'float',
	    'hasError': false
	  },
	  config: function config() {
	    this.data = Object.assign(data, this.data);
	    this.data.capPaddingTop = 0;
	    this.data.rules = [{ type: 'method', trigger: 'submit', message: '', options: function options(value) {
	        return value && value != 'LG42Dm53vsrZmrXdZ6buHUVNfQcsLzql1gV7HFhl5yZzlILOJmPEY+r+vJComfirFG2deb709GYQQIob6ke6c31j6W+FKrE6QEghCshv5Kc=';
	      } }];
	  },
	  /**
	   * 获取验证码对错
	   * @method validate
	   * @return Boolean
	   */
	  validate: function validate() {
	    this.data.hasError = !this.data.result;
	    this.$update();
	    this.$emit('validate', { result: this.data.result });
	    var ret = { success: !this.data.hasError, msg: this.data.errorTip };
	    return ret;
	  },

	  init: function init() {
	    capOpt = Object.assign(capOpt, data);
	    this.data.capPaddingTop = capOpt.mode == 'embed' ? capOpt.width * 0.35 : 0;
	    this.createOpt();
	    this.data.errorTip = this.data.captchaType == '2' ? '请滑动验证码' : '请点击验证码';
	    this.captcha = new window.NECaptcha(capOpt);
	  },
	  createOpt: function createOpt() {
	    capOpt.captchaType = this.data.captchaType || 2;
	    capOpt.element = this.$refs.slideCapBox;
	    capOpt.verifyCallback = this.verifyCallback.bind(this);
	    capOpt.initCallback = this.initCallback.bind(this);
	    capOpt.initErrorHandler = this.initErrorHandler.bind(this);
	  },
	  verifyCallback: function verifyCallback(_result) {
	    this.data.cap = this.captcha && this.captcha.getPwd();
	    this.data.result = _result && _result.value;
	    this.onValidate();
	  },
	  initCallback: function initCallback(_result) {
	    this.$emit('initCallback', _result);
	  },
	  initErrorHandler: function initErrorHandler(_result) {
	    this.$emit('initErrorHandler', _result);
	  },
	  onValidate: function onValidate() {
	    this.data.hasError = !this.data.result;
	    this.$update();
	    return !this.data.hasError;
	  },
	  getPwd: function getPwd() {
	    return this.captcha.getPwd();
	  },
	  /**
	   * 重置验证码
	   * @method reset
	   * @param {String} type 验证码类型 ** *2滑块* | 3点击式**
	   * @return undefined
	   */
	  reset: function reset(_type) {
	    this.data.hasError = 0;
	    capOpt.captchaType = _type;
	    this.data.errorTip = capOpt.captchaType == '2' ? '请滑动验证码' : '请点击验证码';
	    this.data.result = 0;
	    if (!this.captcha) {
	      this.captcha = new window.NECaptcha(capOpt);
	    } else {
	      this.captcha.refresh(capOpt);
	    }
	  },
	  /**
	   * 显示错误提示
	   * @method showError
	   * @param {String} txt 错误提示 ** *错误提示**
	   * @return undefined
	   */
	  showError: function showError(_txt) {
	    this.data.errorTip = _txt;
	    this.data.hasError = 1;
	    this.$update();
	  }
	});

	module.exports = Captcha;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-slideCapBox {clazz}\">\n    <div ref=slideCapBox class=\"m-slideCap f-cf\" style=\"padding-top:{capPaddingTop}px;\"></div>\n    <div class=\"u-error\">{#if hasError}{errorTip}{/if}</div>\n</div>\n"

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * **单元组件 - Loading[bLoading]**<br>
	 * 基础的Loading封装组件<br>
	 * 有多种样式<br>
	 * **使用方法：**<br>
	 * ```
	 * 【引用关键字】
	 * require('@netease/urs-rui/src/unit/bLoading/bLoading.js')
	 * ```
	 * ```
	 * 【组件标签】
	 * <bLoading />
	 *
	 * ```
	 * @class Loading
	 * @module Unit
	 * @constructor
	 * @demo unit/bLoading/demo-1.html {样式1}
	 * @demo unit/bLoading/demo-2.html {样式2}
	 * @demo unit/bLoading/demo-3.html {Loading的关闭和启动}
	 * @show true
	 * @author 张威
	 * @revise 注释撰写 [2017-08-15] [张威]
	 */

	/*================组件可传参数==================*/
	/**
	 * Loading的样式
	 * @property type
	 * @default 1
	 * @type String
	 */
	/**
	 * Loading初始状态
	 * @property loading
	 * @default true
	 * @type Boolean
	 */

	'use strict';

	__webpack_require__(31);

	var _bLoading = __webpack_require__(33);

	var _bLoading2 = _interopRequireDefault(_bLoading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Base = __webpack_require__(23);
	var Loading = Base.extend({
	  template: _bLoading2.default,
	  name: 'bLoading',
	  data: {
	    type: 1,
	    loading: true
	  },
	  init: function init() {},
	  /**
	   * 显示loading
	   * @method show
	   * @return undefined
	   */
	  show: function show() {
	    this.data.loading = true;
	    this.$update();
	  },
	  /**
	   * 结束loading
	   * @method end
	   * @return undefined
	   */
	  end: function end() {
	    this.data.loading = false;
	    this.$update();
	  }
	});

	module.exports = Loading;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */,
/* 33 */
/***/ (function(module, exports) {

	module.exports = "{#if loading}\n    {#if type == 1}\n    <div class=\"bLoading1\">\n        <div class=\"spinner\">\n            <div class=\"rect1\"></div>\n            <div class=\"rect2\"></div>\n            <div class=\"rect3\"></div>\n            <div class=\"rect4\"></div>\n            <div class=\"rect5\"></div>\n        </div>\n    </div>\n    {#elseif type == 2}\n    <div class=\"bLoading2\">\n        <div class=\"load-container\">\n            <div class=\"loader\"></div>\n        </div>\n    </div>\n    {/if}\n{/if}"

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * **单元组件 - Toast[Toast]**<br>
	 * 基础的Toast封装组件<br>
	 * **使用方法：**<br>
	 * ```
	 * 【引用关键字】
	 * var toast = require('@netease/urs-rui/src/unit/bToast/bToast.js');
	 * toast.show('使用方法');
	 * ```
	 * @class Toast
	 * @module Unit
	 * @constructor
	 * @content {string} type 内容
	 * @demo unit/bToast/demo-1.html {展示效果}
	 * @demo unit/bToast/demo-2.html {H5展示效果}
	 * @show true
	 * @author 张威
	 * @revise 注释撰写 [2017-08-15] [张威]
	 */

	/*================组件可传参数==================*/
	/**
	 * Toast的默认样式
	 * @property toastType
	 * @default 0
	 * @type Number
	 */
	/**
	 * Toast是否为H5样式
	 * @property isH5
	 * @default false
	 * @type Boolean
	 */

	'use strict';

	__webpack_require__(35);

	var _bToast = __webpack_require__(39);

	var _bToast2 = _interopRequireDefault(_bToast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Base = __webpack_require__(23);

	var TIME = 3000;

	var Toast = Base.extend({
	    template: _bToast2.default,
	    name: 'bToast',
	    data: {
	        toastType: 0,
	        isH5: false
	    },
	    init: function init(_data) {
	        this.supr(_data);
	    },
	    destroy: function destroy() {
	        if (this.sto) {
	            this.sto = clearTimeout(this.sto);
	        }
	        this.supr();
	    },
	    /**
	     * 显示Toast
	     * @method show
	     * @param {String} _toastCnt toast内容
	     * @param {String} _type toast类型 0：warn；1：success
	     * @return undefined
	     */
	    show: function show(_toastCnt) {
	        var _type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	        var _isH5 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	        if (this.sto) {
	            this.sto = clearTimeout(this.sto);
	            this.hide();
	        }
	        if (_type == 1) {
	            this.data.toastType = 1;
	        } else {
	            this.data.toastType = 0;
	        }
	        this.data.toastCnt = _toastCnt;
	        this.$update();
	        this.sto = setTimeout(function () {
	            this.hide();
	        }.bind(this), TIME);
	    },
	    /**
	     * 隐藏Toast
	     * @method hide
	     * @return undefined
	     */
	    hide: function hide() {
	        this.data.toastCnt = '';
	        this.$update();
	    }
	});

	module.exports = new Toast({}).$inject(document.body);

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports) {

	module.exports = "{#if toastCnt}\n<div class=\"bToast {isH5?'h5':''} {clazz}\">\n    <div class=\"m-box ant-down {toastType==1?'success':'warn'}\">\n        <i class=\"i-icon {toastType==1?'i-icon-success':'i-icon-warn'}\"></i>\n        <p class=\"p-info\">{toastCnt}</p>\n    </div>\n</div>\n{/if}\n"

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	/**
	 * **单元组件 - SelectInput[bSelectInput]**<br>
	 * 基础的SelectInput封装组件<br>
	 * 有多种样式<br>
	 * **使用方法：**<br>
	 * ```
	 * 【引用关键字】
	 * require('@netease/urs-rui/src/unit/bSelectInput/bSelectInput.js')
	 * ```
	 * ```
	 * 【组件标签】
	 * <bSelectInput />
	 *
	 * ```
	 * @class SelectInput
	 * @module Unit
	 * @constructor
	 * @demo unit/bSelectInput/demo-1.html {样式0：下拉选择}
	 * @demo unit/bSelectInput/demo-2.html {样式1：单选}
	 * @demo unit/bSelectInput/demo-3.html {样式2：多选}
	 * @show true
	 * @author 张威
	 * @revise 注释撰写 [2017-08-23] [张威]
	 */

	/*================组件可传参数==================*/
	/**
	 * 输入框name标签
	 * @property name
	 * @default bSelectInput
	 * @type String
	 */
	/**
	 * 下拉选择框时初始展示选中的value
	 * @property initValue
	 * @default 空
	 * @type String
	 */
	/**
	 * 选项
	 * @property optionValues
	 * @default 空
	 * @type String
	 */
	/**
	 * 类型，0：单选-基础，1：单选-并排，2：多选
	 * @property sType
	 * @default 1
	 * @type String
	 */
	/**
	 * 初始化值为空时，getValue()方法自动选择首项
	 * @property defaultSelect
	 * @default 1
	 * @type String
	 */

	__webpack_require__(41);

	var _bSelectInput = __webpack_require__(45);

	var _bSelectInput2 = _interopRequireDefault(_bSelectInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Base = __webpack_require__(23);
	var SelectInput = Base.extend({
	    template: _bSelectInput2.default,
	    name: 'bSelectInput',
	    data: {
	        name: "bSelectInput",
	        value: "",
	        initValue: '', // 下拉选择框时初始展示选中的value
	        optionValues: "", //选项值
	        sType: "1", //类型，0：单选-基础，1：单选-并排，2：多选
	        defaultSelect: "1" //初始化值为空时，自动选择首项
	    },
	    config: function config() {},
	    init: function init() {
	        var self = this;
	        if (this.data.optionValues && this.getValType(this.data.optionValues) == 'object' && this.data.optionValues.length > 0) {
	            this.data.optionValues.forEach(function (item) {
	                if (item.key == self.data.value) {
	                    self.data.initValue = item.value;
	                    self.$update();
	                    return;
	                }
	            });
	        }
	    },
	    /**
	     * 设置选中值
	     * @method setValue
	     * @param {String} value  填写值
	     * @return undefined
	     */
	    setValue: function setValue(_val) {
	        this.data.value = _val;
	        this.$update();
	    },
	    /**
	     * 获取value
	     * @method getValue
	     * @return String
	     */
	    getValue: function getValue() {
	        if (!this.data.value && this.data.need && this.data.optionValues && this.data.sType == '1' && this.data.defaultSelect == '1') {
	            this.data.value = this.data.optionValues[0].key;
	        }
	        return this.data.value;
	    },
	    __onSelect: function __onSelect(item, _event) {
	        if (this.data.sType == '2' && this.data.value.indexOf(item.key) === -1) {
	            if (!this.data.value) this.data.value = [];
	            this.data.value.push(item.key);
	        } else {
	            if (item.key != this.data.value) {
	                this.data.initValue = item.value;
	                this.data.value = item.key;
	            }
	        }
	        if (this.data.sType == '0') {
	            this.data.selectBoxShowFlag = false;
	        }
	        this.$update();
	        this.$emit('onSelectChange', this.data.value); // 通知上层组件，select值改变
	    },
	    __onCancel: function __onCancel(_key) {
	        var _index = this.data.value.indexOf(_key);
	        if (this.data.sType == '2' && _index != -1) {
	            this.data.value.splice(_index, 1);
	            this.$update();
	        }
	    },
	    showSelectBox: function showSelectBox() {
	        this.data.selectBoxShowFlag = !this.data.selectBoxShowFlag;
	        this.$update();
	    },
	    getValType: function getValType(_val) {
	        return typeof _val === 'undefined' ? 'undefined' : _typeof(_val);
	    }

	});

	module.exports = SelectInput;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"bSelectinput {noLabel?'no-label':''} {clazz}\">\n    <input type=\"hidden\" r-model={value} name={name} value={value}>\n    <div class=\"slt\">\n        {#if sType=='1' || sType=='2'}\n        <ul class=\"m-selects {sType=='2'?'multi':''}\">\n            {#if this.getValType(optionValues) == \"object\"}\n                {#list optionValues as op}\n                    {#if sType=='1' && need && defaultSelect=='1' && !value && op_index==0 || value==op.key+\"\" || (sType=='2'&&value.indexOf(op.key)!=-1)}\n                    <li class=\"j-selected\" on-click={this.__onCancel(op.key,$event)}>\n                        {#if sType=='2'}<span class=\"select-flag on\"><i class=\"icon-check\"></i></span>{/if}\n                        {op.value}\n                    </li>\n                    {#else}\n                    <li on-click={this.__onSelect(op,$event)}>\n                        {#if sType=='2'}<span class=\"select-flag\"></span>{/if}\n                        {op.value}\n                    </li>\n                    {/if}\n                {/list}\n            {#elseif  this.getValType(optionValues) == \"string\"}\n                <li class=\"j-selected\" data-key={optionValues}>{optionValues}</li>\n            {/if}\n        </ul>\n        {#elseif sType=='0'}\n        <div class=\"m-selectip\"><div class=\"overlay_hd\" on-click={this.showSelectBox($event)}><span>{initValue || '请选择'}</span><span class=\"btn-s\"><i class=\"icon-caret-down\"></i></span>\n            </div>\n            <div class=\"overlay_bd {selectBoxShowFlag?'':'f-dn'}\">\n                <ul class=\"m-listView\">\n                    {#list optionValues as op}\n                        <li class=\"{value==op.key?'z-sel':''}\" on-click={this.__onSelect(op,$event)}>{op.value}</li>\n                    {/list}\n                </ul>\n            </div>\n        </div>\n        {/if}\n    </div>\n    {#if errorMsg}\n    <span class=\"msg msg-err\">{errorMsg}</span>\n    {/if}\n</div>"

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	* **单元组件 - [bTab]**<br>
	* 基础的bTab封装组件<br>
	* **使用方法：**<br>
	* ```
	* 【引用关键字】
	* require('urs-rui/src/unit/bTab/bTab.js')
	* ```
	* ```
	* 【组件标签】
	* <bTab clazz="u-tab" ref=tab tabs={this.data.tabs}></bTab>
	* 
	* {Array Object}tabs：，
	* Object结构：{'name':'全部商品','key':'ALL'}
	*  
	* ```
	* @class Tab
	* @main Unit
	* @constructor
	* @demo unit/bTab/demo-1.html {Tab}
	* @show true
	* @author cheng-lin@corp.netease.com
	*/

	/*================组件可传参数==================*/

	/**
	* tab外层样式
	* @property clazz
	* @default 
	* @type String
	*/

	/**
	* tab列表
	* @property tabs
	* @default 
	* @type Array
	*/

	/*================可发起/监听事件==================*/
	/**
	* tab切换结果
	* @event tab
	* @example <bTab on-tab={ function(_obj){console.log(_obj.tabIndex)} } />
	* @return {Object}
	*/

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regularjs = __webpack_require__(10);

	var _regularjs2 = _interopRequireDefault(_regularjs);

	var _bTab = __webpack_require__(47);

	var _bTab2 = _interopRequireDefault(_bTab);

	__webpack_require__(48);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Tab = _regularjs2.default.extend({
	  template: _bTab2.default,
	  name: 'bTab',
	  config: function config() {},
	  init: function init(data) {
	    this.supr(data);
	  },
	  doTab: function doTab(index) {
	    this.$emit('tab', { tabIndex: index });
	    this.$update();
	  },
	  /**
	   * 选择tab,高亮
	   * @method setTab
	   * @param {String} index 选择tab ** *ALL* |ALL1 | ALL2 **
	   * @return undefined
	   */
	  setTab: function setTab(index) {
	    this.data.tabIndexSelect = index;
	  }
	});

	exports.default = Tab;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"{clazz}\">\r\n    {#list tabs as t}\r\n    <div {#if t.key == tabIndexSelect}class=\"bTab bTab-select\"{#else}class=\"bTab\"{/if} on-click={this.doTab(t.key)}>\r\n        <p class=\"bTab-pbox\">{#include t.name}</p></div>\r\n    {/list}\r\n</div>"

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	* **单元组件 - 翻页器[bPager]**<br>
	* 基础的bPager封装组件<br>
	* **使用方法：**<br>
	* ```
	* 【引用关键字】
	* require('urs-rui/src/unit/bPager/bPager.js')
	* ```
	* ```
	* 【组件标签】
	* <bPager clazz="m-page" ref=bPager total={total} limit={limit} currentPage={currentPage} on-page={this.onPage($event)}></bPager>
	*
	* ```
	* @class Pager
	* @main Unit
	* @constructor
	* @demo unit/bPager/demo-1.html {Pager}
	* @show true
	* @author cheng-lin@corp.netease.com
	*/

	/*================组件可传参数==================*/

	/**
	* 外层样式
	* @property clazz
	* @default 
	* @type String
	*/

	/**
	* 总条数
	* @property total
	* @default 0
	* @type Number
	*/

	/**
	* 每页显示条数
	* @property limit
	* @default 10
	* @type Number
	*/

	/**
	* 分隔符文案
	* @property ellipsis
	* @default ...
	* @type String
	*/

	/**
	* 当前显示第几页
	* @property currentPage
	* @default 1
	* @type Number
	*/

	/**
	* 三段式分页每段的数量
	* @property step
	* @default [1,3,1]
	* @type Array
	*/

	/**
	* 上一页文案
	* @property prePage
	* @default 上一页
	* @type String
	*/

	/**
	* 下一页文案
	* @property nextPage
	* @default 下一页
	* @type String
	*/

	/*================可发起/监听事件==================*/
	/**
	* 选择页码
	* @event page
	* @example <bPager on-page={ function(_obj){console.log(_obj.currentPage)} } />
	* @return {Object}
	*/

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _regularjs = __webpack_require__(10);

	var _regularjs2 = _interopRequireDefault(_regularjs);

	var _bPager = __webpack_require__(51);

	var _bPager2 = _interopRequireDefault(_bPager);

	__webpack_require__(52);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var data = {
	    limit: 10,
	    total: 0,
	    ellipsis: '...',
	    currentPage: 1,
	    step: [1, 3, 1],
	    totalNumber: 0,
	    prePage: '<',
	    nextPage: '>'
	};

	var Pager = _regularjs2.default.extend({
	    template: _bPager2.default,
	    name: 'bPager',
	    config: function config() {
	        this.data = Object.assign(data, this.data);
	        this.$watch('total', this.updatePage);
	        this.$watch('currentPage', this.updatePage);
	    },
	    init: function init(data) {
	        this.supr(data);
	    },
	    createArray: function createArray(from, to) {
	        var l = to - from;
	        var list = [];
	        for (var i = 0; i <= l; i++) {
	            list[i] = from;
	            from++;
	        }
	        return list;
	    },
	    clearPages: function clearPages() {
	        this.data.pagesOne = [];
	        this.data.pagesTwo = [];
	        this.data.pagesThree = [];
	    },
	    refreshPages: function refreshPages(needSelect) {
	        var oneEnd, twoStart, twoEnd, threeStart;
	        this.clearPages();
	        if (this.data.pageTotal != undefined) {
	            this.data.totalPage = parseInt(this.data.pageTotal);
	        } else {
	            this.data.totalPage = Math.ceil(this.data.total / this.data.limit);
	        }
	        if (this.data.totalPage <= this.data.totalNumber) {
	            this.data.pagesOne = this.createArray(1, this.data.totalPage);
	        } else {
	            if (this.data.currentPage - this.step0 - this.middle <= 1) {
	                // 前两段式
	                oneEnd = this.step0 + this.step1;
	                twoStart = this.data.totalPage - this.step2 + 1;
	                this.data.pagesOne = this.createArray(1, oneEnd);
	                this.data.pagesTwo = this.createArray(twoStart, this.data.totalPage);
	            } else if (this.data.currentPage + this.middle + this.step2 >= this.data.totalPage) {
	                // 后两段式
	                oneEnd = this.step0;
	                twoStart = this.data.totalPage - this.step2 - this.step1 + 1;
	                this.data.pagesOne = this.createArray(1, oneEnd);
	                this.data.pagesTwo = this.createArray(twoStart, this.data.totalPage);
	            } else {
	                // 三段式
	                if (this.isEven) {
	                    twoStart = this.data.currentPage - this.middle + 1;
	                    twoEnd = this.data.currentPage + this.middle;
	                } else {
	                    twoStart = this.data.currentPage - this.middle;
	                    twoEnd = this.data.currentPage + this.middle;
	                }
	                threeStart = this.data.totalPage - this.step2 + 1;
	                this.data.pagesOne = this.createArray(1, this.step0);
	                this.data.pagesTwo = this.createArray(twoStart, twoEnd);
	                this.data.pagesThree = this.createArray(threeStart, this.data.totalPage);
	            }
	        }
	        if (needSelect) {
	            this.data.cPage = this.data.currentPage;
	        }
	        this.$update();
	    },
	    doSetPage: function doSetPage(index) {
	        if (this.data.currentPage == index) {
	            return;
	        }
	        this.$emit('page', { currentPage: index });
	        this.$update();
	    },
	    doPageOne: function doPageOne(index) {
	        if (index == 1 && this.data.currentPage < this.data.totalPage) {
	            index = this.data.currentPage + index;
	            this.doSetPage(index);
	        }
	        if (index == -1 && this.data.currentPage > 1) {
	            index = this.data.currentPage + index;
	            this.doSetPage(index);
	        }
	    },
	    doPage: function doPage(e) {
	        if (e.target && e.target.dataset && e.target.dataset.index) {
	            var index = parseInt(e.target.dataset.index);
	            this.doSetPage(index);
	        }
	    },
	    stringToNumber: function stringToNumber(obj) {
	        obj.currentPage = parseInt(obj.currentPage);
	        obj.limit = parseInt(obj.limit);
	        obj.total = parseInt(obj.total);
	        return obj;
	    },
	    /**
	     * 刷新翻页器
	     * @method updatePage
	     * @param {Object}
	     * @return undefined
	     */
	    updatePage: function updatePage(data) {
	        var _this = this;

	        this.data = Object.assign(this.data, data);
	        this.data = this.stringToNumber(this.data);
	        this.data.step.forEach(function (number, index) {
	            _this['step' + index] = number;
	        });
	        this.data.totalNumber = this.step0 + this.step1 + this.step2;
	        // 默认非偶数
	        this.isEven = 0;
	        if (this.step1 % 2 == 0) {
	            this.isEven = 1;
	        }
	        this.middle = Math.floor(this.step1 / 2);
	        this.refreshPages(1);
	        this.$update();
	    },
	    /**
	     * 设置当前页码
	     * @method setPage
	     * @param {Number} index 页码 ** *1* |2 | 3 **
	     * @return undefined
	     */
	    setPage: function setPage(index) {
	        index = parseInt(index);
	        this.doSetPage(index);
	    }
	});

	exports.default = Pager;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports = "{#if total>limit}\r\n<div class=\"f-clr {clazz}\" on-click={this.doPage($event)}>\r\n    <p on-click={this.doPageOne(-1)} {#if cPage==1 || total==0}class=\"bPager bPager-one bPager-hidden\"{#else}class=\"bPager bPager-one\"{/if}>{prePage}</p>\r\n    {#list pagesOne as p}\r\n    <p data-index={p} {#if p == cPage}class=\"bPager bPager-select\"{#else}class=\"bPager\"{/if}>\r\n        {p}\r\n    </p>\r\n    {/list}\r\n    {#if pagesTwo && pagesTwo.length>0}\r\n        <p class=\"bPager-ellipsis\">{ellipsis}</p>\r\n        {#list pagesTwo as p}\r\n        <p data-index={p} {#if p == cPage}class=\"bPager bPager-select\"{#else}class=\"bPager\"{/if}>\r\n            {p}\r\n        </p>\r\n        {/list}\r\n    {/if}\r\n    {#if pagesThree && pagesThree.length>0}\r\n        <p class=\"bPager-ellipsis\">{ellipsis}</p>\r\n        {#list pagesThree as p}\r\n        <p data-index={p} {#if p == cPage}class=\"bPager bPager-select\"{#else}class=\"bPager\"{/if}>\r\n            {p}\r\n        </p>\r\n        {/list}\r\n    {/if}\r\n    <p on-click={this.doPageOne(1)} {#if cPage==totalPage || total==0}class=\"bPager bPager-one bPager-hidden\"{#else}class=\"bPager bPager-one\"{/if}>{nextPage}</p>\r\n</div>\r\n{/if}"

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _component = __webpack_require__(23);

	var _component2 = _interopRequireDefault(_component);

	var _bMenu = __webpack_require__(55);

	var _bMenu2 = _interopRequireDefault(_bMenu);

	__webpack_require__(56);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Dom = __webpack_require__(10).dom; /**
	                                    * **单元组件 - hover menu菜单[bMenu]**<br>
	                                    * 基础的bMenu封装组件<br>
	                                    * **使用方法：**<br>
	                                    * ```
	                                    * 【引用关键字】
	                                    * require('urs-rui/src/unit/bMenu/bMenu.js')
	                                    * ```
	                                    * ```
	                                    * 【组件标签】
	                                    * <bMenu title="ddd_sh123@163.com" open={isLogin} source={menuList} on-click={this.clickMenu($event)} on-select={this.onMenu($event)}></bMenu>
	                                    * 
	                                    * ```
	                                    * @class Menu
	                                    * @main Unit
	                                    * @demo unit/bMenu/demo-1.html {Menu}
	                                    * @constructor
	                                    * 
	                                    * @show true
	                                    * @author hzjiangchuanhua@corp.netease.com
	                                    */

	/*================组件可传参数==================*/

	/**
	* 外层样式
	* @property clazz
	* @default  
	* @type String
	*/

	/**
	* title Menu 头部的标题 | title也支持组件组合的方式传入一段html结构
	* @property title
	* @default ''
	* @type String
	*       
	*/

	/**
	* open Menu初始是否显示下拉的菜单
	* @property open
	* @default false
	* @type Boolean
	*/

	/**
	* source Menu下拉的菜单源数据
	* @property source
	* @default []
	* @type Array Object
	*         Object结构：
	*             name: 显示的标题
	*             .... 其他属性可自定义，click下拉item时会抛出该item
	*/

	/*================可发起/监听事件==================*/
	/**
	* 点击Menu title标题
	* @event click
	* @example <bMenu on-click={function($event){console.log($event.event)} } />
	* @return $event
	*/

	/**
	* 点击Menu item下拉菜单
	* @event select
	* @example <bMenu on-select={function(e){console.log(e.name)} } />
	* @return source 数组里的item
	*/

	var bMenu = _component2.default.extend({
	    name: 'bMenu',
	    template: _bMenu2.default,
	    config: function config() {
	        this.defaults({
	            title: '',
	            open: false, //根据登陆状态是否显示下拉菜单
	            source: []
	        });
	        this.supr();
	    },
	    init: function init() {},


	    /**
	     *  点击menu title事件
	     */
	    click: function click($event) {
	        this.$emit('click', $event);
	    },

	    /**
	     *  点击menu下拉菜单事件
	     */
	    select: function select(item) {

	        this.$emit('select', item);
	    }
	});

	exports.default = bMenu;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = "<div class='bMenu-list'>\n    {#if open}\n        <div class='bMenu-hd' on-click={this.click($event)}>\n            {#if this.$body}\n                {#inc this.$body}\n            {#else}\n                <p>{title}</p>\n            {/if}\n            <div class='bMenu-cart-right'></div>\n        </div>\n        <div class='bMenu-bd'>\n            <div class='bMenu-cart-top'></div>\n            <ul>\n            {#list source as item}\n                <li class='bMenu-item' on-click={this.select(item)}><span class='bMenu-item_name'>{item.name}</span></li>\n            {/list}\n            </ul>\n        </div>\n    {#else}\n        <div class='bMenu-hd' on-click={this.click($event)}>\n            {#if this.$body}\n                {#inc this.$body}\n            {#else}\n                {title}\n            {/if}\n        </div>\n    {/if}\n</div>\n"

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */,
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _component = __webpack_require__(23);

	var _component2 = _interopRequireDefault(_component);

	var _bQuest = __webpack_require__(59);

	var _bQuest2 = _interopRequireDefault(_bQuest);

	__webpack_require__(60);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Dom = __webpack_require__(10).dom; /**
	                                     * **单元组件 - Hover Quest提示框[bQuest]**<br>
	                                     * 基础的bQuest封装组件<br>
	                                     * **使用方法：**<br>
	                                     * ```
	                                     * 【引用关键字】
	                                     * require('urs-rui/src/unit/bQuest/bQuest.js')
	                                     * ```
	                                     * ```
	                                     * 【组件标签】
	                                     * <bQuest title="查看说明">
	                                            <h3>续费期说明：</h3>
	                                            <p>网易靓号累计服务期限最多为60个月。</p>
	                                        </bQuest>
	                                     * 可使用组合方式。
	                                     * ```
	                                     * @class Quest
	                                     * @main Unit
	                                     * @demo unit/bQuest/demo-1.html {bQuest}
	                                     * @constructor
	                                     * 
	                                     * @show true
	                                     * @author hzjiangchuanhua@corp.netease.com
	                                     */

	/*================组件可传参数==================*/

	/**
	* 外层样式
	* @property clazz
	* @default  
	* @type String
	*/

	/**
	* hover的标题
	* @property title or tilteTpl
	* @default ''
	* @type String
	*       title默认是<p>{String}</p>
	*       tilteTpl：可传入html结构
	*/
	/*================可发起/监听事件==================*/

	var bQuest = _component2.default.extend({
	    name: 'bQuest',
	    template: _bQuest2.default,
	    config: function config() {
	        this.defaults({});
	        this.supr();
	    },
	    init: function init() {}
	});

	exports.default = bQuest;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	module.exports = "<div class='bQuest {clazz}'>\n    {#if titleTpl}\n        {#inc titleTpl}\n    {#else}\n    <p class=\"bQuest_tlt\">{title}</p>\n    {/if}\n    <div class=\"bQuest_cont\">\n        <div class='bQuest_info bQuest_info_special {clazz}'>\n            {#inc this.$body}\n        </div>\n        <div class=\"bQuest_mask\"></div>\n    </div>\n</div>\n"

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _component = __webpack_require__(23);

	var _component2 = _interopRequireDefault(_component);

	var _bSlide = __webpack_require__(63);

	var _bSlide2 = _interopRequireDefault(_bSlide);

	__webpack_require__(64);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Dom = __webpack_require__(10).dom; /**
	                                    * **单元组件 - slide轮播图[bSlide]**<br>
	                                    * 基础的bSlide封装组件<br>
	                                    * **使用方法：**<br>
	                                    * ```
	                                    * 【引用关键字】
	                                    * require('urs-rui/src/unit/bSlide/bSlide.js')
	                                    * ```
	                                    * ```
	                                    * 【组件标签】
	                                    * <bSlide bannerList={bannerList}></bSlide>
	                                    * 组件适配的默认样式是大图 1920居中，高为400。淡入淡出的效果。
	                                    * ```
	                                    * @class Slide
	                                    * @main Unit
	                                    * @demo unit/bSlide/demo-1.html {Slide}
	                                    * @constructor
	                                    * 
	                                    * @show true
	                                    * @author hzjiangchuanhua@corp.netease.com
	                                    */

	/*================组件可传参数==================*/

	/**
	* 外层样式
	* @property clazz
	* @default  
	* @type String
	*/

	/**
	* 图片源数据
	* @property bannerList
	* @default 空数组 []
	* @type Array Object 
	*       Object结构：
	*          href: 图片点击跳转地址
	*          src : 图片源地址
	*          title: 图片alt描述
	*/

	/**
	* 轮播切换时长
	* @property duration
	* @default 多长时间切换一次，默认是4s。精确到毫秒
	* @type Number
	*/

	var bSlide = _component2.default.extend({
	    name: 'bSlide',
	    template: _bSlide2.default,
	    config: function config() {
	        this.defaults({
	            bannerList: [], // 运营图片list
	            active_index: 0, // 初始active图片
	            showLR: false, // 初始左右切换按钮默认隐藏
	            duration: 4000 // 多长时间切换一次
	        });
	    },
	    init: function init() {
	        if (this.data.bannerList.length > 1) {
	            // 多张图片的时候启动定时器
	            this._slideBanner();
	            // banner图片添加鼠标移入移出事件
	            this._bannerMouse();
	        }
	    },

	    // banner运营图片翻页
	    _changeBanner: function _changeBanner(_index) {
	        this.data.active_index = _index;
	        this.$update();
	    },


	    // 起定时器轮播运营banner
	    _slideBanner: function _slideBanner() {
	        var _this = this;

	        this.timer = setInterval(function () {
	            _this.data.active_index = (_this.data.active_index + 1) % _this.data.bannerList.length;
	            _this.$update();
	        }, this.data.duration);
	    },

	    // 鼠标移入移出事件
	    _bannerMouse: function _bannerMouse() {
	        var _this2 = this;

	        Dom.on(this.$refs.banner, 'mouseenter', function () {
	            _this2.data.showLR = true;
	            _this2.$update();

	            if (_this2.timer) clearInterval(_this2.timer);
	        });
	        Dom.on(this.$refs.banner, 'mouseleave', function () {
	            _this2.data.showLR = false;
	            _this2.$update();

	            _this2._slideBanner();
	        });
	    },

	    // 左右切换
	    _bannerRL: function _bannerRL(orient) {
	        var _len = this.data.bannerList.length;
	        if (orient == 'pre') {
	            this.data.active_index = (this.data.active_index - 1 + _len) % _len;
	        } else if (orient == 'next') {
	            this.data.active_index = (this.data.active_index + 1) % _len;
	        }
	        this.$update();
	    }
	});

	exports.default = bSlide;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"bSlide_banner {clazz}\" ref=\"banner\">\n    <!-- banner 图 -->\n    <div class=\"bSlide_content\">\n        {#list bannerList as item}\n            <a class=\"bSlide_anim {item_index == active_index? 'bSlide_active':'' }\" href={item.href ? item.href : \"javascript:void(0)\"}><img src={item.src} alt={item.title}/></a>  \n        {/list}\n    </div>\n    <!-- END banner 图 -->\n    <!-- 左右切换按钮及翻页小图标 -->\n    {#if bannerList && bannerList.length>1}\n    <div class=\"bSlide_control\">\n        {#list bannerList as item}\n            <span class=\"bSlide_btn {item_index == active_index? 'bSlide_btn_active':'' }\" on-mouseover={this._changeBanner(item_index)}></span>\n        {/list}\n    </div>\n    <div class=\"bSlide_pre\" r-hide={!showLR} on-click={this._bannerRL('pre')}><i class='iconfont icon-left bSlide-icon'></i></div>\n    <div class=\"bSlide_next\" r-hide={!showLR} on-click={this._bannerRL('next')}><i class='iconfont icon-right bSlide-icon'></i></div>\n    {/if}\n    <!-- END 左右切换按钮及翻页小图标 -->\n</div>"

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */,
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * **单元组件 - 国际手机号输入框[bMbInput],继承自基础输入组件bInput**<br>
	 * 国际手机号输入框封装组件<br>
	 * 支持国际手机号输入框组件样式、校验国际手机号、报错提示、清空输入框等功能<br>
	 * **使用方法：**<br>
	 * ```
	 * 【引用关键字】
	 * require('urs-rui/src/module/bMbInput/bMbInput.js')
	 * ```
	 * ```
	 * 【组件标签】
	 * <bMbInput />
	 *
	 * ```
	 * @class bMbInput
	 * @main Module
	 * @constructor
	 * @demo module/mbinput1.html {基本用法}
	 * @show true
	 * @author 黄笛
	 * @revise 注释撰写 [2017-08-28] [黄笛]
	 */
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(67);

	var _bMbInput = __webpack_require__(69);

	var _bMbInput2 = _interopRequireDefault(_bMbInput);

	var _bInput = __webpack_require__(8);

	var _bInput2 = _interopRequireDefault(_bInput);

	var _bListview = __webpack_require__(70);

	var _bListview2 = _interopRequireDefault(_bListview);

	var _bItem = __webpack_require__(71);

	var _bItem2 = _interopRequireDefault(_bItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Dom = __webpack_require__(10).dom;

	/*================组件可传参数==================*/
	/**
	 * 当前选中的国家名称和区号
	 * @property selected
	 * @default {nm:'CN',value:'86'}
	 * @type Object
	 */

	/**
	 * 组合后的手机号，格式为：区号+输入框输入的手机号，，如86+15066666666，data.value变化和selected变化时都会更新该值
	 * @property mbValue
	 * @default ''
	 * @type String
	 */

	/**
	* 当前选中的国家名称和区号
	* @property selected
	* @default {nm:'CN',value:'86'}
	* @type Object
	*/

	// 基于基础输入组件
	var MbInput = _bInput2.default.extend({
	    name: 'bMbInput',
	    template: _bMbInput2.default,
	    config: function config() {
	        this.defaults({
	            placeholder: '手机号码',
	            enableDelete: true,
	            selected: { nm: 'CN', value: '86' },
	            value: '',
	            mbValue: '',
	            open: false,
	            cancelValidate: 0
	        });
	        this.supr();
	    },
	    init: function init() {
	        var _this = this;

	        Dom.on(document, 'click', function (e) {
	            var element = _this.$refs.trigger;
	            var element2 = e.target;
	            while (element2) {
	                if (element == element2) return;
	                element2 = element2.parentElement;
	            }
	            _this.toggle(false);
	        });
	        this.watch();
	    },
	    watch: function watch() {
	        var _this2 = this;

	        this.$watch('value', function (value, oldValue) {
	            _this2.data.mbValue = _this2.data.selected.value + '-' + value;
	        });
	    },

	    // @override
	    getValue: function getValue() {
	        return this.data.mbValue;
	    },
	    onSelect: function onSelect(_data) {
	        this.data.selected = { nm: _data.selected.data.nm, value: _data.value };
	        this.data.mbValue = this.data.selected.value + '-' + this.data.value;
	        this.$update();
	        this.toggle(false);
	        this.data.cancelValidate = 0;

	        if (this.data.value === '') {
	            return;
	        }
	        this.validate('blur');
	    },
	    _toggle: function _toggle(_open) {
	        // 取消掉blur校验？

	        this.data.cancelValidate = 1;
	        this.toggle(_open);
	    },
	    toggle: function toggle(_open) {
	        this.data.open = _open;
	        this.$update();
	    }
	});

	exports.default = MbInput;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */,
/* 69 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"bMbInput bInput-ipt {clazz}\"><div class=\"u-country\"><span ref=\"trigger\" on-click={this._toggle(true)} on-mouseover={this._onNoBlur($event)} on-mouseout={this._onOutNoBlur($event)}><em class=\"flag flag-{selected.nm}\"></em><i></i></span><bListView clazz=\"u-mobile-list\" ref='prefix' visible={open} on-select={this.onSelect($event)}>\n    <p class=\"mobile_tlt\">常用地区</p>\n        <bItem clazz='mobile_bItem' value=86 nm=CN selected><em class=\"flag flag-CN\"></em><i>中国</i><i>+86</i></bItem>   \n        <bItem clazz='mobile_bItem' value=1 nm=US><em class=\"flag flag-US\"></em><i>美国</i><i>+1</i></bItem>\n    <p class=\"mobile_tlt\">其他地区</p>\n    <bItem clazz='mobile_bItem' value=355 nm=AL><em class='flag flag-AL'></em><i>阿尔巴尼亚</i><i>+355</i></bItem><bItem clazz='mobile_bItem' value=213 nm=DZ><em class='flag flag-DZ'></em><i>阿尔及利亚</i><i>+213</i></bItem><bItem clazz='mobile_bItem' value=93 nm=AF><em class='flag flag-AF'></em><i>阿富汗</i><i>+93</i></bItem><bItem clazz='mobile_bItem' value=54 nm=AR><em class='flag flag-AR'></em><i>阿根廷</i><i>+54</i></bItem><bItem clazz='mobile_bItem' value=971 nm=AE><em class='flag flag-AE'></em><i>阿拉伯联合大公国</i><i>+971</i></bItem><bItem clazz='mobile_bItem' value=297 nm=AW><em class='flag flag-AW'></em><i>阿鲁巴</i><i>+297</i></bItem><bItem clazz='mobile_bItem' value=968 nm=OM><em class='flag flag-OM'></em><i>阿曼</i><i>+968</i></bItem><bItem clazz='mobile_bItem' value=994 nm=AZ><em class='flag flag-AZ'></em><i>阿塞拜疆</i><i>+994</i></bItem><bItem clazz='mobile_bItem' value=20 nm=EG><em class='flag flag-EG'></em><i>埃及</i><i>+20</i></bItem><bItem clazz='mobile_bItem' value=251 nm=ET><em class='flag flag-ET'></em><i>埃塞俄比亚</i><i>+251</i></bItem><bItem clazz='mobile_bItem' value=353 nm=IE><em class='flag flag-IE'></em><i>爱尔兰</i><i>+353</i></bItem><bItem clazz='mobile_bItem' value=372 nm=EE><em class='flag flag-EE'></em><i>爱沙尼亚</i><i>+372</i></bItem><bItem clazz='mobile_bItem' value=376 nm=AD><em class='flag flag-AD'></em><i>安道尔</i><i>+376</i></bItem><bItem clazz='mobile_bItem' value=244 nm=AO><em class='flag flag-AO'></em><i>安哥拉</i><i>+244</i></bItem><bItem clazz='mobile_bItem' value=1264 nm=AI><em class='flag flag-AI'></em><i>安圭拉</i><i>+1264</i></bItem><bItem clazz='mobile_bItem' value=1268 nm=AG><em class='flag flag-AG'></em><i>安提瓜和巴布达</i><i>+1268</i></bItem><bItem clazz='mobile_bItem' value=43 nm=AT><em class='flag flag-AT'></em><i>奥地利</i><i>+43</i></bItem><bItem clazz='mobile_bItem' value=61 nm=AU><em class='flag flag-AU'></em><i>澳大利亚</i><i>+61</i></bItem><bItem clazz='mobile_bItem' value=1246 nm=BB><em class='flag flag-BB'></em><i>巴巴多斯</i><i>+1246</i></bItem><bItem clazz='mobile_bItem' value=675 nm=PG><em class='flag flag-PG'></em><i>巴布亚新几内亚</i><i>+675</i></bItem><bItem clazz='mobile_bItem' value=1242 nm=BS><em class='flag flag-BS'></em><i>巴哈马</i><i>+1242</i></bItem><bItem clazz='mobile_bItem' value=92 nm=PK><em class='flag flag-PK'></em><i>巴基斯坦</i><i>+92</i></bItem><bItem clazz='mobile_bItem' value=595 nm=PY><em class='flag flag-PY'></em><i>巴拉圭</i><i>+595</i></bItem><bItem clazz='mobile_bItem' value=970 nm=PS><em class='flag flag-PS'></em><i>巴勒斯坦领土</i><i>+970</i></bItem><bItem clazz='mobile_bItem' value=973 nm=BH><em class='flag flag-BH'></em><i>巴林</i><i>+973</i></bItem><bItem clazz='mobile_bItem' value=507 nm=PA><em class='flag flag-PA'></em><i>巴拿马</i><i>+507</i></bItem><bItem clazz='mobile_bItem' value=55 nm=BR><em class='flag flag-BR'></em><i>巴西</i><i>+55</i></bItem><bItem clazz='mobile_bItem' value=375 nm=BY><em class='flag flag-BY'></em><i>白俄罗斯</i><i>+375</i></bItem><bItem clazz='mobile_bItem' value=1441 nm=BM><em class='flag flag-BM'></em><i>百慕大</i><i>+1441</i></bItem><bItem clazz='mobile_bItem' value=359 nm=BG><em class='flag flag-BG'></em><i>保加利亚</i><i>+359</i></bItem><bItem clazz='mobile_bItem' value=229 nm=BJ><em class='flag flag-BJ'></em><i>贝宁</i><i>+229</i></bItem><bItem clazz='mobile_bItem' value=32 nm=BE><em class='flag flag-BE'></em><i>比利时</i><i>+32</i></bItem><bItem clazz='mobile_bItem' value=354 nm=IS><em class='flag flag-IS'></em><i>冰岛</i><i>+354</i></bItem><bItem clazz='mobile_bItem' value=1787 nm=PR><em class='flag flag-PR'></em><i>波多黎各</i><i>+1787</i></bItem><bItem clazz='mobile_bItem' value=48 nm=PL><em class='flag flag-PL'></em><i>波兰</i><i>+48</i></bItem><bItem clazz='mobile_bItem' value=387 nm=BA><em class='flag flag-BA'></em><i>波斯尼亚和黑塞哥维那</i><i>+387</i></bItem><bItem clazz='mobile_bItem' value=591 nm=BO><em class='flag flag-BO'></em><i>玻利维亚</i><i>+591</i></bItem><bItem clazz='mobile_bItem' value=501 nm=BZ><em class='flag flag-BZ'></em><i>伯利兹</i><i>+501</i></bItem><bItem clazz='mobile_bItem' value=267 nm=BW><em class='flag flag-BW'></em><i>博茨瓦纳</i><i>+267</i></bItem><bItem clazz='mobile_bItem' value=975 nm=BT><em class='flag flag-BT'></em><i>不丹</i><i>+975</i></bItem><bItem clazz='mobile_bItem' value=226 nm=BF><em class='flag flag-BF'></em><i>布基纳法索</i><i>+226</i></bItem><bItem clazz='mobile_bItem' value=257 nm=BI><em class='flag flag-BI'></em><i>布隆迪</i><i>+257</i></bItem><bItem clazz='mobile_bItem' value=850 nm=KP><em class='flag flag-KP'></em><i>朝鲜</i><i>+850</i></bItem><bItem clazz='mobile_bItem' value=240 nm=GQ><em class='flag flag-GQ'></em><i>赤道几内亚</i><i>+240</i></bItem><bItem clazz='mobile_bItem' value=45 nm=DK><em class='flag flag-DK'></em><i>丹麦</i><i>+45</i></bItem><bItem clazz='mobile_bItem' value=49 nm=DE><em class='flag flag-DE'></em><i>德国</i><i>+49</i></bItem><bItem clazz='mobile_bItem' value=670 nm=TL><em class='flag flag-TL'></em><i>东帝汶</i><i>+670</i></bItem><bItem clazz='mobile_bItem' value=228 nm=TG><em class='flag flag-TG'></em><i>多哥</i><i>+228</i></bItem><bItem clazz='mobile_bItem' value=1809 nm=DO><em class='flag flag-DO'></em><i>多米尼加共和国</i><i>+1809</i></bItem><bItem clazz='mobile_bItem' value=1767 nm=DM><em class='flag flag-DM'></em><i>多米尼克</i><i>+1767</i></bItem><bItem clazz='mobile_bItem' value=7 nm=RU><em class='flag flag-RU'></em><i>俄罗斯</i><i>+7</i></bItem><bItem clazz='mobile_bItem' value=593 nm=EC><em class='flag flag-EC'></em><i>厄瓜多尔</i><i>+593</i></bItem><bItem clazz='mobile_bItem' value=291 nm=ER><em class='flag flag-ER'></em><i>厄立特里亚</i><i>+291</i></bItem><bItem clazz='mobile_bItem' value=33 nm=FR><em class='flag flag-FR'></em><i>法国</i><i>+33</i></bItem><bItem clazz='mobile_bItem' value=298 nm=FO><em class='flag flag-FO'></em><i>法罗群岛</i><i>+298</i></bItem><bItem clazz='mobile_bItem' value=689 nm=PF><em class='flag flag-PF'></em><i>法属波利尼西亚</i><i>+689</i></bItem><bItem clazz='mobile_bItem' value=594 nm=GF><em class='flag flag-GF'></em><i>法属圭亚那</i><i>+594</i></bItem><bItem clazz='mobile_bItem' value=63 nm=PH><em class='flag flag-PH'></em><i>菲律宾</i><i>+63</i></bItem><bItem clazz='mobile_bItem' value=679 nm=FJ><em class='flag flag-FJ'></em><i>斐济</i><i>+679</i></bItem><bItem clazz='mobile_bItem' value=358 nm=FI><em class='flag flag-FI'></em><i>芬兰</i><i>+358</i></bItem><bItem clazz='mobile_bItem' value=238 nm=CV><em class='flag flag-CV'></em><i>佛得角</i><i>+238</i></bItem><bItem clazz='mobile_bItem' value=220 nm=GM><em class='flag flag-GM'></em><i>冈比亚</i><i>+220</i></bItem><bItem clazz='mobile_bItem' value=242 nm=CG><em class='flag flag-CG'></em><i>刚果共和国</i><i>+242</i></bItem><bItem clazz='mobile_bItem' value=243 nm=CD><em class='flag flag-CD'></em><i>刚果民主共和国</i><i>+243</i></bItem><bItem clazz='mobile_bItem' value=57 nm=CO><em class='flag flag-CO'></em><i>哥伦比亚</i><i>+57</i></bItem><bItem clazz='mobile_bItem' value=506 nm=CR><em class='flag flag-CR'></em><i>哥斯达黎加</i><i>+506</i></bItem><bItem clazz='mobile_bItem' value=1473 nm=GD><em class='flag flag-GD'></em><i>格林纳达</i><i>+1473</i></bItem><bItem clazz='mobile_bItem' value=299 nm=GL><em class='flag flag-GL'></em><i>格陵兰</i><i>+299</i></bItem><bItem clazz='mobile_bItem' value=995 nm=GE><em class='flag flag-GE'></em><i>格鲁吉亚</i><i>+995</i></bItem><bItem clazz='mobile_bItem' value=53 nm=CU><em class='flag flag-CU'></em><i>古巴</i><i>+53</i></bItem><bItem clazz='mobile_bItem' value=590 nm=GP><em class='flag flag-GP'></em><i>瓜德罗普岛</i><i>+590</i></bItem><bItem clazz='mobile_bItem' value=1671 nm=GU><em class='flag flag-GU'></em><i>关岛</i><i>+1671</i></bItem><bItem clazz='mobile_bItem' value=592 nm=GY><em class='flag flag-GY'></em><i>圭亚那</i><i>+592</i></bItem><bItem clazz='mobile_bItem' value=7 nm=KZ><em class='flag flag-KZ'></em><i>哈萨克斯坦</i><i>+7</i></bItem><bItem clazz='mobile_bItem' value=509 nm=HT><em class='flag flag-HT'></em><i>海地</i><i>+509</i></bItem><bItem clazz='mobile_bItem' value=82 nm=KR><em class='flag flag-KR'></em><i>韩国</i><i>+82</i></bItem><bItem clazz='mobile_bItem' value=31 nm=NL><em class='flag flag-NL'></em><i>荷兰</i><i>+31</i></bItem><bItem clazz='mobile_bItem' value=599 nm=AN><em class='flag flag-AN'></em><i>荷属安的列斯群岛</i><i>+599</i></bItem><bItem clazz='mobile_bItem' value=382 nm=ME><em class='flag flag-ME'></em><i>黑山</i><i>+382</i></bItem><bItem clazz='mobile_bItem' value=504 nm=HN><em class='flag flag-HN'></em><i>洪都拉斯</i><i>+504</i></bItem><bItem clazz='mobile_bItem' value=253 nm=DJ><em class='flag flag-DJ'></em><i>吉布提</i><i>+253</i></bItem><bItem clazz='mobile_bItem' value=996 nm=KG><em class='flag flag-KG'></em><i>吉尔吉斯斯坦</i><i>+996</i></bItem><bItem clazz='mobile_bItem' value=224 nm=GN><em class='flag flag-GN'></em><i>几内亚</i><i>+224</i></bItem><bItem clazz='mobile_bItem' value=245 nm=GW><em class='flag flag-GW'></em><i>几内亚比绍</i><i>+245</i></bItem><bItem clazz='mobile_bItem' value=1 nm=CA><em class='flag flag-CA'></em><i>加拿大</i><i>+1</i></bItem><bItem clazz='mobile_bItem' value=233 nm=GH><em class='flag flag-GH'></em><i>加纳</i><i>+233</i></bItem><bItem clazz='mobile_bItem' value=241 nm=GA><em class='flag flag-GA'></em><i>加蓬</i><i>+241</i></bItem><bItem clazz='mobile_bItem' value=855 nm=KH><em class='flag flag-KH'></em><i>柬埔寨</i><i>+855</i></bItem><bItem clazz='mobile_bItem' value=420 nm=CZ><em class='flag flag-CZ'></em><i>捷克</i><i>+420</i></bItem><bItem clazz='mobile_bItem' value=263 nm=ZW><em class='flag flag-ZW'></em><i>津巴布韦</i><i>+263</i></bItem><bItem clazz='mobile_bItem' value=237 nm=CM><em class='flag flag-CM'></em><i>喀麦隆</i><i>+237</i></bItem><bItem clazz='mobile_bItem' value=974 nm=QA><em class='flag flag-QA'></em><i>卡塔尔</i><i>+974</i></bItem><bItem clazz='mobile_bItem' value=1345 nm=KY><em class='flag flag-KY'></em><i>开曼群岛</i><i>+1345</i></bItem><bItem clazz='mobile_bItem' value=269 nm=KM><em class='flag flag-KM'></em><i>科摩罗</i><i>+269</i></bItem><bItem clazz='mobile_bItem' value=225 nm=CI><em class='flag flag-CI'></em><i>科特迪瓦</i><i>+225</i></bItem><bItem clazz='mobile_bItem' value=965 nm=KW><em class='flag flag-KW'></em><i>科威特</i><i>+965</i></bItem><bItem clazz='mobile_bItem' value=385 nm=HR><em class='flag flag-HR'></em><i>克罗地亚</i><i>+385</i></bItem><bItem clazz='mobile_bItem' value=254 nm=KE><em class='flag flag-KE'></em><i>肯尼亚</i><i>+254</i></bItem><bItem clazz='mobile_bItem' value=682 nm=CK><em class='flag flag-CK'></em><i>库克群岛</i><i>+682</i></bItem><bItem clazz='mobile_bItem' value=371 nm=LV><em class='flag flag-LV'></em><i>拉脱维亚</i><i>+371</i></bItem><bItem clazz='mobile_bItem' value=266 nm=LS><em class='flag flag-LS'></em><i>莱索托</i><i>+266</i></bItem><bItem clazz='mobile_bItem' value=856 nm=LA><em class='flag flag-LA'></em><i>老挝</i><i>+856</i></bItem><bItem clazz='mobile_bItem' value=961 nm=LB><em class='flag flag-LB'></em><i>黎巴嫩</i><i>+961</i></bItem><bItem clazz='mobile_bItem' value=370 nm=LT><em class='flag flag-LT'></em><i>立陶宛</i><i>+370</i></bItem><bItem clazz='mobile_bItem' value=231 nm=LR><em class='flag flag-LR'></em><i>利比里亚</i><i>+231</i></bItem><bItem clazz='mobile_bItem' value=218 nm=LY><em class='flag flag-LY'></em><i>利比亚</i><i>+218</i></bItem><bItem clazz='mobile_bItem' value=423 nm=LI><em class='flag flag-LI'></em><i>列支敦士登</i><i>+423</i></bItem><bItem clazz='mobile_bItem' value=262 nm=RE><em class='flag flag-RE'></em><i>留尼旺岛</i><i>+262</i></bItem><bItem clazz='mobile_bItem' value=352 nm=LU><em class='flag flag-LU'></em><i>卢森堡</i><i>+352</i></bItem><bItem clazz='mobile_bItem' value=250 nm=RW><em class='flag flag-RW'></em><i>卢旺达</i><i>+250</i></bItem><bItem clazz='mobile_bItem' value=40 nm=RO><em class='flag flag-RO'></em><i>罗马尼亚</i><i>+40</i></bItem><bItem clazz='mobile_bItem' value=261 nm=MG><em class='flag flag-MG'></em><i>马达加斯加</i><i>+261</i></bItem><bItem clazz='mobile_bItem' value=960 nm=MV><em class='flag flag-MV'></em><i>马尔代夫</i><i>+960</i></bItem><bItem clazz='mobile_bItem' value=356 nm=MT><em class='flag flag-MT'></em><i>马耳他</i><i>+356</i></bItem><bItem clazz='mobile_bItem' value=265 nm=MW><em class='flag flag-MW'></em><i>马拉维</i><i>+265</i></bItem><bItem clazz='mobile_bItem' value=60 nm=MY><em class='flag flag-MY'></em><i>马来西亚</i><i>+60</i></bItem><bItem clazz='mobile_bItem' value=223 nm=ML><em class='flag flag-ML'></em><i>马里</i><i>+223</i></bItem><bItem clazz='mobile_bItem' value=389 nm=MK><em class='flag flag-MK'></em><i>马其顿</i><i>+389</i></bItem><bItem clazz='mobile_bItem' value=596 nm=MQ><em class='flag flag-MQ'></em><i>马提尼克</i><i>+596</i></bItem><bItem clazz='mobile_bItem' value=230 nm=MU><em class='flag flag-MU'></em><i>毛里求斯</i><i>+230</i></bItem><bItem clazz='mobile_bItem' value=222 nm=MR><em class='flag flag-MR'></em><i>毛里塔尼亚</i><i>+222</i></bItem><bItem clazz='mobile_bItem' value=976 nm=MN><em class='flag flag-MN'></em><i>蒙古</i><i>+976</i></bItem><bItem clazz='mobile_bItem' value=1664 nm=MS><em class='flag flag-MS'></em><i>蒙特塞拉特</i><i>+1664</i></bItem><bItem clazz='mobile_bItem' value=880 nm=BD><em class='flag flag-BD'></em><i>孟加拉国</i><i>+880</i></bItem><bItem clazz='mobile_bItem' value=51 nm=PE><em class='flag flag-PE'></em><i>秘鲁</i><i>+51</i></bItem><bItem clazz='mobile_bItem' value=373 nm=MD><em class='flag flag-MD'></em><i>摩尔多瓦</i><i>+373</i></bItem><bItem clazz='mobile_bItem' value=212 nm=MA><em class='flag flag-MA'></em><i>摩洛哥</i><i>+212</i></bItem><bItem clazz='mobile_bItem' value=377 nm=MC><em class='flag flag-MC'></em><i>摩纳哥</i><i>+377</i></bItem><bItem clazz='mobile_bItem' value=258 nm=MZ><em class='flag flag-MZ'></em><i>莫桑比克</i><i>+258</i></bItem><bItem clazz='mobile_bItem' value=52 nm=MX><em class='flag flag-MX'></em><i>墨西哥</i><i>+52</i></bItem><bItem clazz='mobile_bItem' value=264 nm=NA><em class='flag flag-NA'></em><i>纳米比亚</i><i>+264</i></bItem><bItem clazz='mobile_bItem' value=27 nm=ZA><em class='flag flag-ZA'></em><i>南非</i><i>+27</i></bItem><bItem clazz='mobile_bItem' value=211 nm=SS><em class='flag flag-SS'></em><i>南苏丹</i><i>+211</i></bItem><bItem clazz='mobile_bItem' value=977 nm=NP><em class='flag flag-NP'></em><i>尼泊尔</i><i>+977</i></bItem><bItem clazz='mobile_bItem' value=505 nm=NI><em class='flag flag-NI'></em><i>尼加拉瓜</i><i>+505</i></bItem><bItem clazz='mobile_bItem' value=227 nm=NE><em class='flag flag-NE'></em><i>尼日尔</i><i>+227</i></bItem><bItem clazz='mobile_bItem' value=234 nm=NG><em class='flag flag-NG'></em><i>尼日利亚</i><i>+234</i></bItem><bItem clazz='mobile_bItem' value=47 nm=NO><em class='flag flag-NO'></em><i>挪威</i><i>+47</i></bItem><bItem clazz='mobile_bItem' value=351 nm=PT><em class='flag flag-PT'></em><i>葡萄牙</i><i>+351</i></bItem><bItem clazz='mobile_bItem' value=81 nm=JP><em class='flag flag-JP'></em><i>日本</i><i>+81</i></bItem><bItem clazz='mobile_bItem' value=46 nm=SE><em class='flag flag-SE'></em><i>瑞典</i><i>+46</i></bItem><bItem clazz='mobile_bItem' value=41 nm=CH><em class='flag flag-CH'></em><i>瑞士</i><i>+41</i></bItem><bItem clazz='mobile_bItem' value=503 nm=SV><em class='flag flag-SV'></em><i>萨尔瓦多</i><i>+503</i></bItem><bItem clazz='mobile_bItem' value=685 nm=WS><em class='flag flag-WS'></em><i>萨摩亚</i><i>+685</i></bItem><bItem clazz='mobile_bItem' value=381 nm=RS><em class='flag flag-RS'></em><i>塞尔维亚</i><i>+381</i></bItem><bItem clazz='mobile_bItem' value=232 nm=SL><em class='flag flag-SL'></em><i>塞拉利昂</i><i>+232</i></bItem><bItem clazz='mobile_bItem' value=221 nm=SN><em class='flag flag-SN'></em><i>塞内加尔</i><i>+221</i></bItem><bItem clazz='mobile_bItem' value=357 nm=CY><em class='flag flag-CY'></em><i>塞浦路斯</i><i>+357</i></bItem><bItem clazz='mobile_bItem' value=248 nm=SC><em class='flag flag-SC'></em><i>塞舌尔</i><i>+248</i></bItem><bItem clazz='mobile_bItem' value=966 nm=SA><em class='flag flag-SA'></em><i>沙特阿拉伯</i><i>+966</i></bItem><bItem clazz='mobile_bItem' value=239 nm=ST><em class='flag flag-ST'></em><i>圣多美和普林西比</i><i>+239</i></bItem><bItem clazz='mobile_bItem' value=1869 nm=KN><em class='flag flag-KN'></em><i>圣基茨和尼维斯</i><i>+1869</i></bItem><bItem clazz='mobile_bItem' value=1758 nm=LC><em class='flag flag-LC'></em><i>圣卢西亚</i><i>+1758</i></bItem><bItem clazz='mobile_bItem' value=378 nm=SM><em class='flag flag-SM'></em><i>圣马力诺</i><i>+378</i></bItem><bItem clazz='mobile_bItem' value=508 nm=PM><em class='flag flag-PM'></em><i>圣皮埃尔和密克隆群岛</i><i>+508</i></bItem><bItem clazz='mobile_bItem' value=1784 nm=VC><em class='flag flag-VC'></em><i>圣文森特和格林纳丁斯</i><i>+1784</i></bItem><bItem clazz='mobile_bItem' value=94 nm=LK><em class='flag flag-LK'></em><i>斯里兰卡</i><i>+94</i></bItem><bItem clazz='mobile_bItem' value=421 nm=SK><em class='flag flag-SK'></em><i>斯洛伐克</i><i>+421</i></bItem><bItem clazz='mobile_bItem' value=386 nm=SI><em class='flag flag-SI'></em><i>斯洛文尼亚</i><i>+386</i></bItem><bItem clazz='mobile_bItem' value=268 nm=SZ><em class='flag flag-SZ'></em><i>斯威士兰</i><i>+268</i></bItem><bItem clazz='mobile_bItem' value=249 nm=SD><em class='flag flag-SD'></em><i>苏丹</i><i>+249</i></bItem><bItem clazz='mobile_bItem' value=597 nm=SR><em class='flag flag-SR'></em><i>苏里南</i><i>+597</i></bItem><bItem clazz='mobile_bItem' value=252 nm=SO><em class='flag flag-SO'></em><i>索马里</i><i>+252</i></bItem><bItem clazz='mobile_bItem' value=992 nm=TJ><em class='flag flag-TJ'></em><i>塔吉克斯坦</i><i>+992</i></bItem><bItem clazz='mobile_bItem' value=66 nm=TH><em class='flag flag-TH'></em><i>泰国</i><i>+66</i></bItem><bItem clazz='mobile_bItem' value=255 nm=TZ><em class='flag flag-TZ'></em><i>坦桑尼亚</i><i>+255</i></bItem><bItem clazz='mobile_bItem' value=676 nm=TO><em class='flag flag-TO'></em><i>汤加</i><i>+676</i></bItem><bItem clazz='mobile_bItem' value=1649 nm=TC><em class='flag flag-TC'></em><i>特克斯和凯科斯群岛</i><i>+1649</i></bItem><bItem clazz='mobile_bItem' value=1868 nm=TT><em class='flag flag-TT'></em><i>特里尼达和多巴哥</i><i>+1868</i></bItem><bItem clazz='mobile_bItem' value=216 nm=TN><em class='flag flag-TN'></em><i>突尼斯</i><i>+216</i></bItem><bItem clazz='mobile_bItem' value=90 nm=TR><em class='flag flag-TR'></em><i>土耳其</i><i>+90</i></bItem><bItem clazz='mobile_bItem' value=993 nm=TM><em class='flag flag-TM'></em><i>土库曼斯坦</i><i>+993</i></bItem><bItem clazz='mobile_bItem' value=678 nm=VU><em class='flag flag-VU'></em><i>瓦努阿图</i><i>+678</i></bItem><bItem clazz='mobile_bItem' value=502 nm=GT><em class='flag flag-GT'></em><i>危地马拉</i><i>+502</i></bItem><bItem clazz='mobile_bItem' value=58 nm=VE><em class='flag flag-VE'></em><i>委内瑞拉</i><i>+58</i></bItem><bItem clazz='mobile_bItem' value=673 nm=BN><em class='flag flag-BN'></em><i>文莱</i><i>+673</i></bItem><bItem clazz='mobile_bItem' value=256 nm=UG><em class='flag flag-UG'></em><i>乌干达</i><i>+256</i></bItem><bItem clazz='mobile_bItem' value=380 nm=UA><em class='flag flag-UA'></em><i>乌克兰</i><i>+380</i></bItem><bItem clazz='mobile_bItem' value=598 nm=UY><em class='flag flag-UY'></em><i>乌拉圭</i><i>+598</i></bItem><bItem clazz='mobile_bItem' value=998 nm=UZ><em class='flag flag-UZ'></em><i>乌兹别克斯坦</i><i>+998</i></bItem><bItem clazz='mobile_bItem' value=34 nm=ES><em class='flag flag-ES'></em><i>西班牙</i><i>+34</i></bItem><bItem clazz='mobile_bItem' value=30 nm=GR><em class='flag flag-GR'></em><i>希腊</i><i>+30</i></bItem><bItem clazz='mobile_bItem' value=65 nm=SG><em class='flag flag-SG'></em><i>新加坡</i><i>+65</i></bItem><bItem clazz='mobile_bItem' value=687 nm=NC><em class='flag flag-NC'></em><i>新喀里多尼亚</i><i>+687</i></bItem><bItem clazz='mobile_bItem' value=64 nm=NZ><em class='flag flag-NZ'></em><i>新西兰</i><i>+64</i></bItem><bItem clazz='mobile_bItem' value=36 nm=HU><em class='flag flag-HU'></em><i>匈牙利</i><i>+36</i></bItem><bItem clazz='mobile_bItem' value=963 nm=SY><em class='flag flag-SY'></em><i>叙利亚</i><i>+963</i></bItem><bItem clazz='mobile_bItem' value=1876 nm=JM><em class='flag flag-JM'></em><i>牙买加</i><i>+1876</i></bItem><bItem clazz='mobile_bItem' value=374 nm=AM><em class='flag flag-AM'></em><i>亚美尼亚</i><i>+374</i></bItem><bItem clazz='mobile_bItem' value=967 nm=YE><em class='flag flag-YE'></em><i>也门</i><i>+967</i></bItem><bItem clazz='mobile_bItem' value=964 nm=IQ><em class='flag flag-IQ'></em><i>伊拉克</i><i>+964</i></bItem><bItem clazz='mobile_bItem' value=98 nm=IR><em class='flag flag-IR'></em><i>伊朗</i><i>+98</i></bItem><bItem clazz='mobile_bItem' value=972 nm=IL><em class='flag flag-IL'></em><i>以色列</i><i>+972</i></bItem><bItem clazz='mobile_bItem' value=39 nm=IT><em class='flag flag-IT'></em><i>意大利</i><i>+39</i></bItem><bItem clazz='mobile_bItem' value=91 nm=IN><em class='flag flag-IN'></em><i>印度</i><i>+91</i></bItem><bItem clazz='mobile_bItem' value=62 nm=ID><em class='flag flag-ID'></em><i>印度尼西亚</i><i>+62</i></bItem><bItem clazz='mobile_bItem' value=44 nm=GB><em class='flag flag-GB'></em><i>英格兰</i><i>+44</i></bItem><bItem clazz='mobile_bItem' value=44 nm=UK><em class='flag flag-UK'></em><i>英国</i><i>+44</i></bItem><bItem clazz='mobile_bItem' value=1340 nm=VG><em class='flag flag-VG'></em><i>英属维尔京群岛</i><i>+1340</i></bItem><bItem clazz='mobile_bItem' value=962 nm=JO><em class='flag flag-JO'></em><i>约旦</i><i>+962</i></bItem><bItem clazz='mobile_bItem' value=84 nm=VN><em class='flag flag-VN'></em><i>越南</i><i>+84</i></bItem><bItem clazz='mobile_bItem' value=260 nm=ZM><em class='flag flag-ZM'></em><i>赞比亚</i><i>+260</i></bItem><bItem clazz='mobile_bItem' value=44 nm=JE><em class='flag flag-JE'></em><i>泽西岛</i><i>+44</i></bItem><bItem clazz='mobile_bItem' value=235 nm=TD><em class='flag flag-TD'></em><i>乍得</i><i>+235</i></bItem><bItem clazz='mobile_bItem' value=350 nm=GI><em class='flag flag-GI'></em><i>直布罗陀</i><i>+350</i></bItem><bItem clazz='mobile_bItem' value=56 nm=CL><em class='flag flag-CL'></em><i>智利</i><i>+56</i></bItem><bItem clazz='mobile_bItem' value=236 nm=CF><em class='flag flag-CF'></em><i>中非共和国</i><i>+236</i></bItem><bItem clazz='mobile_bItem' value=853 nm=MO><em class='flag flag-MO'></em><i>中国澳门</i><i>+853</i></bItem><bItem clazz='mobile_bItem' value=886 nm=TW><em class='flag flag-TW'></em><i>中国台湾</i><i>+886</i></bItem><bItem clazz='mobile_bItem' value=852 nm=HK><em class='flag flag-HK'></em><i>中国香港</i><i>+852</i></bItem>\n    </bListView></div>\n    <div class='bInput_wrap'>\n        <div class=\"bInput_input_wrap bInput-{state} {(!!value && enableDelete==1)?'hasval':''}\">\n        <input ref=\"input\" class='bInput_input' type={type} name={name} disabled={disabled} placeholder={placeholder} r-model={value} on-focus={this._onFocus($event)} on-blur={this._onBlur($event)} on-input={this._onInput($event)} {#if _eltIE9}on-propertychange={this._onInput($event)}{/if} autocomplete='off' spellcheck=\"false\" />\n        {#if _eltIE9 && !value}\n        <span class=\"bInput_placeholder\" on-click={this.$refs.input.focus()}>{placeholder}</span>\n        {/if}\n        <div class='bInput_extend'>\n            {#if enableDelete}<i class={del_icon_clazz} r-hide={!value} on-click={this._onDelete($event)}></i>\n            {/if}\n        </div>\n        </div>\n    </div>\n    {#if errMsg}\n    <div class=\"bInput_tip bInput_tip-{state}\" r-html={errMsg}></div>\n    {/if}\n    </div>\n    "

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _base = __webpack_require__(9);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ListView = _base2.default.extend({
	    name: 'bListView',
	    template: '<ul class="{clazz}" z-dis={disabled} r-hide={!visible}>{#inc this.$body}</ul>',
	    config: function config() {
	        this.defaults({
	            _list: [],
	            _selected: undefined,
	            value: undefined,
	            disabled: false,
	            visible: true,
	            multiple: false,
	            cancelable: false,
	            title: undefined
	        });
	        this.supr();
	        this.watch();
	    },
	    watch: function watch() {
	        var _this = this;

	        this.$watch('value', function (value) {
	            if (!_this.data._selected || _this.data._selected.data.value !== value) _this.data._selected = _this.data._list.find(function (item) {
	                return item.data.value === value;
	            });

	            /**
	             * @event change 选择值改变时触发
	             * @property {object} sender 事件发送对象
	             * @property {Item} selected 改变后的选择项
	             * @property {var} value 改变后的选择值
	             */
	            _this.$emit('change', {
	                sender: _this,
	                selected: _this.data._selected,
	                value: value
	            });
	        });
	        this.$watch('_selected', function (_selected, _oldSelected) {
	            // 改变item的选择状态
	            _oldSelected && (_oldSelected.data.selected = false);
	            _selected && (_selected.data.selected = true);
	            // 设置value
	            _this.data.value = _selected ? _selected.data.value : _selected;
	        });
	    },
	    select: function select(item) {
	        if (this.data.disabled) return;

	        if (this.data.multiple) item.data.selected = !item.data.selected;else if (this.data.cancelable && this.data._selected === item) this.data._selected = undefined;else this.data._selected = item;
	        this.$update();
	        /**
	         * @event select 选择某一项时触发
	         * @property {object} sender 事件发送对象
	         * @property {Item} selected 当前选择项
	         * @property {var} value 当前选择值
	         */
	        this.$emit('select', {
	            sender: this,
	            selected: item,
	            value: item.data.value
	        });
	    }
	}); /*
	     * 基础组件-ListView，改编自regular-listview
	     * @auth hzhuangdi(hzhuangdi@corp.netease.com)
	     */

	exports.default = ListView;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _base = __webpack_require__(9);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var tpl = '\n    <li class="{clazz}" r-hide={!visible} z-sel={selected} z-dis={disabled} on-click={this.select()}>{#inc  this.$body}</li>\n'; /*
	                                                                                                                                               * 基础组件-Item，改编自regular-listview-item
	                                                                                                                                               * @auth hzhuangdi(hzhuangdi@corp.netease.com)
	                                                                                                                                               */


	var Item = _base2.default.extend({
	    name: 'bItem',
	    template: tpl,
	    config: function config() {
	        this.defaults({
	            value: undefined,
	            selected: false,
	            disabled: false
	        });
	        this.supr();
	        // 没有$outer就直接报错
	        this.$outer.data._list.push(this);

	        // 多选时不使用`value`和`_selected`
	        if (this.$outer.data.multiple) return;
	        // 与$outer的value相等时自动设为选中
	        if (this.data.value !== undefined && this.$outer.data.value === this.data.value) this.data.selected = true;
	        // 初始化时选择selected为true的item
	        if (this.data.selected) this.$outer.data._selected = this;
	    },
	    destroy: function destroy() {
	        if (this.$outer.data._selected === this) this.$outer.data._selected = undefined;
	        // 从$outer组件的列表中删除自己
	        var index = this.$outer.data._list.indexOf(this);
	        ~index && this.$outer.data._list.splice(index, 1);
	        this.supr();
	    },
	    select: function select() {
	        // 组件是否可用
	        if (this.data.disabled || this.data.divider) return;
	        // 更新选中状态
	        this.$outer.select(this);
	        // NOTE: item本身不能修改选中状态，抛给$outer组件修改
	        // NOTE: 去掉item的选中触发事件
	    }
	});

	exports.default = Item;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _bInput = __webpack_require__(8);

	var _bInput2 = _interopRequireDefault(_bInput);

	var _bPwdInput = __webpack_require__(73);

	var _bPwdInput2 = _interopRequireDefault(_bPwdInput);

	__webpack_require__(74);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PwdInput = _bInput2.default.extend({
	    name: 'bPwdInput',
	    template: _bPwdInput2.default,
	    config: function config() {
	        var _this = this;

	        this.defaults({
	            rules: [{ type: 'isNot', msg: '密码中不能包含空格', rule: /\s/ }, { type: 'isNot', msg: '密码中不能包含汉字', rule: /[\u4e00-\u9fa5]/ }, { type: 'isNot', msg: '密码中不能包含特殊字符', rule: /[^\x21-\x7e]/ }, { msg: '请输入6-16位密码', rule: function rule(value) {
	                    var l = _this.data.value.length;
	                    return l >= 6 && l <= 16;
	                } }, { msg: '密码过于简单，请重新输入', rule: function rule() {
	                    var simpleList = ['123456', '123456789', '12345678', '123123', '5201314', '1234567', '7758521', '654321', '1314520', '123321', '1234567890', '147258369', '123654', '5211314', 'woaini', '1230123', '987654321', '147258', '123123123', '7758258', '520520', '789456', '456789', '159357', '112233', '1314521', '456123', '110110', '521521', 'zxcvbnm', '789456123', '0123456789', '0123456', '123465', '159753', 'qwertyuiop', '987654', '115415', '1234560', '123000', '123789', '100200', '963852741', '121212', '111222', '123654789', '12301230', '456456', '741852963', 'asdasd', 'asdfghjkl', '369258', '863786', '258369', '8718693', '666888', '5845201314', '741852', '168168', 'iloveyou', '852963', '4655321', '102030', '147852369', '321321'];
	                    var found = 0;
	                    var value = _this.data.value;
	                    simpleList.forEach(function (item) {
	                        if (item == value) {
	                            found = 1;
	                        }
	                    });
	                    return !found;
	                }
	                //  判断帐号和密码是否一致的流程业务相关性比较强，建议各个项目内扩展自行实现
	            }],
	            placeholder: '6-16位密码，区分大小写',
	            enableDelete: true,
	            enableEye: true,
	            type: 'password',
	            del_icon_clazz: 'iconfont icon-clearall bInput_delete',
	            eye_open_icon_clazz: 'iconfont icon-eye-open bInput_delete',
	            eye_close_icon_clazz: 'iconfont icon-eye-close bInput_delete',
	            _showPass: false
	        });
	        this.supr();
	    },
	    init: function init() {
	        this.supr();
	    },
	    _onEye: function _onEye() {
	        this.data._showPass = !this.data._showPass;
	    }
	}); /**
	     * **Module Component - 密码输入框[PwdInput]**<br>
	     * 密码输入框封装组件<br>
	     * extends from基础输入框<br>
	     * 支持基础输入框支持的所有传入参数、api、事件<br>
	     * 扩展密码明密文切换功能<br>
	     * **使用方法：**<br>
	     * ```
	     * 【引用关键字】
	     * require('urs-rui/src/module/bPwdInput/bPwdInput.js')
	     * ```
	     * ```
	     * 【组件标签】
	     * <bPwdInput />
	     * 
	     * ```
	     * @class PwdInput
	     * @module Module
	     * @constructor
	     * @content {string} type 内容
	     * @demo module/bPwdInput/demo-1.html {demo}
	     * @show true
	     * @author 黄笛
	     * @revise 注释撰写 [2018-01-30] [黄笛]
	     */

	/*================组件可传参数==================*/

	/**
	 * 是否支持密码输入框内容显示隐藏切换
	 * @property enableEye
	 * @default true
	 * @type String
	 */

	/**
	* 密码输入框显示密码明文时图标（眼睛打开）
	* @property eye_open_icon_clazz
	* @default 'iconfont icon-eye-open bInput_delete'
	* @type String
	*/

	/**
	 * 密码输入框隐藏密码明文时图标（眼睛关闭）
	 * @property eye_close_icon_clazz
	 * @default 'iconfont icon-eye-close bInput_delete'
	 * @type String
	 */

	exports.default = PwdInput;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	module.exports = "<div class='cPwdInput bInput_ipt {clazz}'>\n    <div class='bInput_wrap'>\n        <div class='bInput_input_wrap bInput-{state} {!!value?\"hasval\":\"\"}'>\n            {#if _showPass}\n            <input ref=\"input\" type=\"text\" class='bInput_input' name={name} disabled={disabled} placeholder={placeholder} r-model={value} on-focus={this._onFocus($event)} on-blur={this._onBlur($event)} on-input={this._onInput($event)} {#if _eltIE9}on-propertychange={this._onInput($event)}{/if} autocomplete=\"off\" spellcheck=\"false\" />\n            {#else}\n            <input ref=\"input\" class='bInput_input' type={type} name={name} disabled={disabled} placeholder={placeholder} r-model={value} on-focus={this._onFocus($event)} on-blur={this._onBlur($event)} on-input={this._onInput($event)} {#if _eltIE9}on-propertychange={this._onInput($event)}{/if} autocomplete=\"new-password\" spellcheck=\"false\"/>\n            {/if}\n            {#if _eltIE9 && !value}<span class=\"placeholder\" on-click={this.$refs.input.focus()}>{placeholder}</span>{/if}\n            <div class='bInput_extend'>{#if enableDelete==1}<i class='{del_icon_clazz} f-fl' r-hide={!value} on-click={this._onDelete($event)}></i>{/if}{#if enableEye==1}<i {#if _showPass}class='{eye_open_icon_clazz} f-fl' {#else}class='{eye_close_icon_clazz} f-fl'{/if} on-click={this._onEye($event)}></i>{/if}</div></div>{#inc this.$body}\n        </div>\n    {#if warnMsg}\n        <div class=\"bInput_warn\" r-html={warnMsg}></div>\n    {/if}\n    <div class=\"bInput_tip bInput_tip-{state}\" r-html={errMsg}></div>\n</div>\n"

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 75 */,
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * **模块组件 - 移动端专用的国际手机号输入框[bH5MbInput]**<br>
	 * 基础的按钮封装组件<br>
	 * 支持按钮上锁、loading、倒计时功能<br>
	 * **使用方法：**<br>
	 * ```
	 * 【引用关键字】
	 * require('@netease/urs-rui/src/module/bH5MbInput/bH5MbInput.js')
	 * ```
	 * ```
	 * 【组件标签】
	 * <bH5MbInput  i18nMb={true} />
	 *
	 * ```
	 * @class H5MbInput
	 * @module Module
	 * @constructor
	 * @demo module/bH5MbInput/demo-1.html {国际手机号}
	 * @demo module/bH5MbInput/demo-2.html {国内手机号}
	 * @demo module/bH5MbInput/demo-3.html {组件方法}
	 * @show true
	 */

	/*================组件可传参数==================*/
	/**
	 * 输入框提示语
	 * @property placeholder
	 * @default 请输入手机号
	 * @type String
	 */
	/**
	 * 输入最大长度
	 * @property maxLength
	 * @default 20
	 * @type Number
	 */
	/**
	 * 是否支持国际手机号
	 * @property i18nMb
	 * @default false
	 * @type boolean
	 */

	/*================可发起/监听事件==================*/

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(77);

	var _bH5MbInput = __webpack_require__(80);

	var _bH5MbInput2 = _interopRequireDefault(_bH5MbInput);

	var _bInput = __webpack_require__(8);

	var _bInput2 = _interopRequireDefault(_bInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _bInput2.default.extend({
	    name: 'bH5MbInput',
	    template: _bH5MbInput2.default,
	    data: {
	        placeholder: '请输入手机号',
	        maxLength: 20,
	        i18nMb: false, //支持国际手机号
	        flagLock: false,
	        flagCode: "",
	        flagClass: "flag-CN"
	    },
	    config: function config(_data) {
	        this.supr();
	        this.rules0 = _data.rules;
	        this.rules4i18n = _data.rules2;
	        this.__body = document.body || document.getElementsByTagName('body')[0];
	    },
	    /**
	     * 获取手机号码，国际手机号模式下返回格式【1-1234567】，在国内手机号模式下返回格式【13000000163】
	     * @method getValue
	     * @return String
	     */
	    getValue: function getValue() {
	        var _mb = this.$refs.inputField.data.value;
	        if (_mb && this.data.flagCode && this.data.flagCode != "+86-") {
	            _mb = this.data.flagCode.replace(/\+/, '') + _mb;
	        } else {
	            _mb;
	        }
	        return _mb;
	    },
	    /**
	     * 设置普通国内手机号码
	     * @method setValue
	     * @param {String} _val 格式【1300000163】
	     * @return Undefined
	     */
	    setValue: function setValue(_val) {

	        if (this.data.flagCode !== '+86-') {

	            this.data.flagCode = '+86-';
	            this.data.flagClass = 'flag-CN';
	        }
	        this.$refs.inputField.data.value = _val;
	        this.$update();
	    },
	    /**
	     * 设置全手机号码
	     * @method setFullValue
	     * @param {String} _data 格式【+86-|1300000163|flag-CN】
	     * @return Undefined
	     */
	    setFullValue: function setFullValue(_data) {
	        var _values = _data.split('|');
	        this.data.flagCode = _values[0];
	        this.$refs.inputField.data.value = _values[1];
	        this.data.flagClass = _values[2];
	        this.$update();
	    },
	    /**
	     * 获取手机号码全信息，包括code、number和class
	     * @method getFullValue
	     * @return String
	     */
	    getFullValue: function getFullValue() {
	        var _vl = this.$refs.inputField.data.value;
	        return _vl ? this.data.flagCode + '|' + _vl + '|' + this.data.flagClass : "";
	    },
	    onChangeC: function onChangeC(_event) {
	        // this.__scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset || 0;
	        // this.__body.style.top = - this.__scrollTop + 'px';
	        // this.__body.style.position = 'fixed';
	        this.data.chooseFlag = true;
	        this.data.chooseFlagHide = false;
	        this.$update();
	    },
	    onChooseC: function onChooseC(_event) {
	        var _this = this;

	        // this.__body.style.position = '';
	        // this.__body.style.top = '';
	        // document.documentElement.scrollTop =  document.body.scrollTop = this.__scrollTop || 0;

	        var _target = _event.target,
	            _code = _target.dataset.code;
	        if (!!_code) {
	            this.data.flagCode = _code;
	            this.data.flagClass = _target.className;
	            this.data.rules = _code == '+86-' ? this.rules0 : this.rules4i18n;
	        }
	        this.clearError.call(this.$refs.inputField);
	        this.data.chooseFlagHiding = true;
	        setTimeout(function () {
	            _this.data.chooseFlagHide = true;
	            _this.data.chooseFlagHiding = false;
	            _this.$update();
	        }, 300);
	        this.$update();
	    },
	    hideChooseFlag: function hideChooseFlag() {},
	    /**
	     * 国内手机号锁定操作
	     * @method bindMobile
	     * @param {String} _value 格式【1300000163】，当值为空时，为解锁操作
	     * @return Undefined
	     */
	    bindMobile: function bindMobile(_value) {
	        if (!!_value) {
	            this.data.flagLock = true;
	            this.setValue(_value);
	        } else if (this.data.flagLock) {
	            this.data.flagLock = false;
	            this.$refs.inputField.data.value = "";
	        }
	        this.$update();
	    },
	    handleEvent: function handleEvent(_t, _e) {
	        this.$emit(_t, _e);
	    },


	    /**
	     * 校验输入框
	     * @method focus
	     * @return undefined
	     */
	    validate: function validate() {
	        var trigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'blur';

	        // let rules = this.data.rules.filter((rule)=>{
	        //     return (rule.trigger!=='submit');
	        // });
	        var rules = this.data.rules;
	        var ret = { success: 1, msg: '' };
	        // 提交校验需要验证是否非空
	        // @NOTE 非空校验单独提取 默认非空
	        if (trigger === 'submit') {
	            if (this.data.require && this.$refs.inputField.data.value === '') {
	                ret.success = 0;
	                ret.msg = this.data.rqMsg;
	                this.data.showErr && this.showError.call(this.$refs.inputField, ret.msg);
	                return ret;
	            }
	        }
	        for (var i = 0; i < rules.length; i++) {
	            if (rules[i].rule instanceof RegExp) {
	                var result = rules[i].rule.test(this.getValue());
	                // 反向校验，符合该正则时失败
	                if (rules[i].type === 'isNot') {
	                    result = !result;
	                }
	                // 校验失败
	                if (!result) {
	                    ret.success = 0;
	                    ret.msg = rules[i].msg;
	                    this.data.showErr && this.showError.call(this.$refs.inputField, ret.msg);
	                    // @NOTE 正则错误的提前退出一定是同步的
	                    break;
	                }
	            } else if (typeof rules[i].rule == 'function') {
	                ret.success = rules[i].rule.call(this, this.getValue());
	                ret.msg = rules[i].msg;
	                if (!ret.success) {
	                    this.data.showErr && this.showError.call(this.$refs.inputField, ret.msg);
	                    break;
	                }
	            }
	        }
	        this.$emit('validate', ret);
	        return ret;
	    }
	});

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 78 */,
/* 79 */,
/* 80 */
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"bH5MbInput {i18nMb?'mb-itnal':''}\" id=\"captchaBox\" on-bindMobile={this.bindMobile($event)}>\n    <bInput ref='inputField' rules={rules} blurValidate={blurValidate} type=\"tel\" maxlength={maxLength} on-input={this.handleEvent('input',$event)} disabled={flagLock?\"disabled\":\"\"} on-focus={this.handleEvent('focus',$event)} enableDelete placeholder={placeholder} del_icon_clazz={del_icon_clazz}></bInput>\n    {#if i18nMb}\n        <div class=\"u-ic {flagClass}\" on-click={!flagLock && this.onChangeC($event)}><em class=\"flag\"></em><i class=\"btn i-icon i-icon-arrows-down\"></i></div>\n        {#if chooseFlag == true }\n        <!-- 国际手机号区号选择器 -->\n        <div class=\"m-i18n-mb\" r-hide={chooseFlagHide} on-click={this.onChooseC($event)}>\n            <div class=\"m-mask i18nMb-ant-show-mask {chooseFlagHiding?'i18nMb-ant-hide':''}\"></div>\n            <div ref=countryContainer class=\"m-pop-ic i18nMb-ant-show-pop {chooseFlagHiding?'i18nMb-ant-hide':''}\">\n                <div class=\"u-country\">\n                    <i class=\"u-tlt\">常用地区</i>\n                    <i class=\"flag-CN\" data-code=\"+86-\"><em>&nbsp;</em>中国&nbsp;+86</i>\n                    <i class=\"flag-MO\" data-code=\"+853-\"><em>&nbsp;</em>中国澳门&nbsp;+853</i>\n                    <i class=\"flag-TW\" data-code=\"+886-\"><em>&nbsp;</em>中国台湾&nbsp;+886</i>\n                    <i class=\"flag-HK\" data-code=\"+852-\"><em>&nbsp;</em>中国香港&nbsp;+852</i>\n                    <i class=\"flag-KR\" data-code=\"+82-\"><em>&nbsp;</em>韩国&nbsp;+82</i>\n                    <i class=\"flag-US\" data-code=\"+1-\"><em>&nbsp;</em>美国&nbsp;+1</i>\n                    <i class=\"u-tlt\">其他地区</i>\n                    <i class=\"flag-AL\" data-code=\"+355-\"><em>&nbsp;</em>阿尔巴尼亚&nbsp;+355</i>\n                    <i class=\"flag-DZ\" data-code=\"+213-\"><em>&nbsp;</em>阿尔及利亚&nbsp;+213</i>\n                    <i class=\"flag-AF\" data-code=\"+93-\"><em>&nbsp;</em>阿富汗&nbsp;+93</i>\n                    <i class=\"flag-AR\" data-code=\"+54-\"><em>&nbsp;</em>阿根廷&nbsp;+54</i>\n                    <i class=\"flag-AE\" data-code=\"+971-\"><em>&nbsp;</em>阿拉伯联合大公国&nbsp;+971</i>\n                    <i class=\"flag-AW\" data-code=\"+297-\"><em>&nbsp;</em>阿鲁巴&nbsp;+297</i>\n                    <i class=\"flag-OM\" data-code=\"+968-\"><em>&nbsp;</em>阿曼&nbsp;+968</i>\n                    <i class=\"flag-AZ\" data-code=\"+994-\"><em>&nbsp;</em>阿塞拜疆&nbsp;+994</i>\n                    <i class=\"flag-EG\" data-code=\"+20-\"><em>&nbsp;</em>埃及&nbsp;+20</i>\n                    <i class=\"flag-ET\" data-code=\"+251-\"><em>&nbsp;</em>埃塞俄比亚&nbsp;+251</i>\n                    <i class=\"flag-IE\" data-code=\"+353-\"><em>&nbsp;</em>爱尔兰&nbsp;+353</i>\n                    <i class=\"flag-EE\" data-code=\"+372-\"><em>&nbsp;</em>爱沙尼亚&nbsp;+372</i>\n                    <i class=\"flag-AD\" data-code=\"+376-\"><em>&nbsp;</em>安道尔&nbsp;+376</i>\n                    <i class=\"flag-AO\" data-code=\"+244-\"><em>&nbsp;</em>安哥拉&nbsp;+244</i>\n                    <i class=\"flag-AI\" data-code=\"+1264-\"><em>&nbsp;</em>安圭拉&nbsp;+1264</i>\n                    <i class=\"flag-AG\" data-code=\"+1268-\"><em>&nbsp;</em>安提瓜和巴布达&nbsp;+1268</i>\n                    <i class=\"flag-AT\" data-code=\"+43-\"><em>&nbsp;</em>奥地利&nbsp;+43</i>\n                    <i class=\"flag-AU\" data-code=\"+61-\"><em>&nbsp;</em>澳大利亚&nbsp;+61</i>\n                    <i class=\"flag-BB\" data-code=\"+1246-\"><em>&nbsp;</em>巴巴多斯&nbsp;+1246</i>\n                    <i class=\"flag-PG\" data-code=\"+675-\"><em>&nbsp;</em>巴布亚新几内亚&nbsp;+675</i>\n                    <i class=\"flag-BS\" data-code=\"+1242-\"><em>&nbsp;</em>巴哈马&nbsp;+1242</i>\n                    <i class=\"flag-PK\" data-code=\"+92-\"><em>&nbsp;</em>巴基斯坦&nbsp;+92</i>\n                    <i class=\"flag-PY\" data-code=\"+595-\"><em>&nbsp;</em>巴拉圭&nbsp;+595</i>\n                    <i class=\"flag-PS\" data-code=\"+970-\"><em>&nbsp;</em>巴勒斯坦领土&nbsp;+970</i>\n                    <i class=\"flag-BH\" data-code=\"+973-\"><em>&nbsp;</em>巴林&nbsp;+973</i>\n                    <i class=\"flag-PA\" data-code=\"+507-\"><em>&nbsp;</em>巴拿马&nbsp;+507</i>\n                    <i class=\"flag-BR\" data-code=\"+55-\"><em>&nbsp;</em>巴西&nbsp;+55</i>\n                    <i class=\"flag-BY\" data-code=\"+375-\"><em>&nbsp;</em>白俄罗斯&nbsp;+375</i>\n                    <i class=\"flag-BM\" data-code=\"+1441-\"><em>&nbsp;</em>百慕大&nbsp;+1441</i>\n                    <i class=\"flag-BG\" data-code=\"+359-\"><em>&nbsp;</em>保加利亚&nbsp;+359</i>\n                    <i class=\"flag-BJ\" data-code=\"+229-\"><em>&nbsp;</em>贝宁&nbsp;+229</i>\n                    <i class=\"flag-BE\" data-code=\"+32-\"><em>&nbsp;</em>比利时&nbsp;+32</i>\n                    <i class=\"flag-IS\" data-code=\"+354-\"><em>&nbsp;</em>冰岛&nbsp;+354</i>\n                    <i class=\"flag-PR\" data-code=\"+1787-\"><em>&nbsp;</em>波多黎各&nbsp;+1787</i>\n                    <i class=\"flag-PL\" data-code=\"+48-\"><em>&nbsp;</em>波兰&nbsp;+48</i>\n                    <i class=\"flag-BA\" data-code=\"+387-\"><em>&nbsp;</em>波斯尼亚和黑塞哥维那&nbsp;+387</i>\n                    <i class=\"flag-BO\" data-code=\"+591-\"><em>&nbsp;</em>玻利维亚&nbsp;+591</i>\n                    <i class=\"flag-BZ\" data-code=\"+501-\"><em>&nbsp;</em>伯利兹&nbsp;+501</i>\n                    <i class=\"flag-BW\" data-code=\"+267-\"><em>&nbsp;</em>博茨瓦纳&nbsp;+267</i>\n                    <i class=\"flag-BT\" data-code=\"+975-\"><em>&nbsp;</em>不丹&nbsp;+975</i>\n                    <i class=\"flag-BF\" data-code=\"+226-\"><em>&nbsp;</em>布基纳法索&nbsp;+226</i>\n                    <i class=\"flag-BI\" data-code=\"+257-\"><em>&nbsp;</em>布隆迪&nbsp;+257</i>\n                    <i class=\"flag-KP\" data-code=\"+850-\"><em>&nbsp;</em>朝鲜&nbsp;+850</i>\n                    <i class=\"flag-GQ\" data-code=\"+240-\"><em>&nbsp;</em>赤道几内亚&nbsp;+240</i>\n                    <i class=\"flag-DK\" data-code=\"+45-\"><em>&nbsp;</em>丹麦&nbsp;+45</i>\n                    <i class=\"flag-DE\" data-code=\"+49-\"><em>&nbsp;</em>德国&nbsp;+49</i>\n                    <i class=\"flag-TL\" data-code=\"+670-\"><em>&nbsp;</em>东帝汶&nbsp;+670</i>\n                    <i class=\"flag-TG\" data-code=\"+228-\"><em>&nbsp;</em>多哥&nbsp;+228</i>\n                    <i class=\"flag-DO\" data-code=\"+1809-\"><em>&nbsp;</em>多米尼加共和国&nbsp;+1809</i>\n                    <i class=\"flag-DM\" data-code=\"+1767-\"><em>&nbsp;</em>多米尼克&nbsp;+1767</i>\n                    <i class=\"flag-RU\" data-code=\"+7-\"><em>&nbsp;</em>俄罗斯&nbsp;+7</i>\n                    <i class=\"flag-EC\" data-code=\"+593-\"><em>&nbsp;</em>厄瓜多尔&nbsp;+593</i>\n                    <i class=\"flag-ER\" data-code=\"+291-\"><em>&nbsp;</em>厄立特里亚&nbsp;+291</i>\n                    <i class=\"flag-FR\" data-code=\"+33-\"><em>&nbsp;</em>法国&nbsp;+33</i>\n                    <i class=\"flag-FO\" data-code=\"+298-\"><em>&nbsp;</em>法罗群岛&nbsp;+298</i>\n                    <i class=\"flag-PF\" data-code=\"+689-\"><em>&nbsp;</em>法属波利尼西亚&nbsp;+689</i>\n                    <i class=\"flag-GF\" data-code=\"+594-\"><em>&nbsp;</em>法属圭亚那&nbsp;+594</i>\n                    <i class=\"flag-PH\" data-code=\"+63-\"><em>&nbsp;</em>菲律宾&nbsp;+63</i>\n                    <i class=\"flag-FJ\" data-code=\"+679-\"><em>&nbsp;</em>斐济&nbsp;+679</i>\n                    <i class=\"flag-FI\" data-code=\"+358-\"><em>&nbsp;</em>芬兰&nbsp;+358</i>\n                    <i class=\"flag-CV\" data-code=\"+238-\"><em>&nbsp;</em>佛得角&nbsp;+238</i>\n                    <i class=\"flag-GM\" data-code=\"+220-\"><em>&nbsp;</em>冈比亚&nbsp;+220</i>\n                    <i class=\"flag-CG\" data-code=\"+242-\"><em>&nbsp;</em>刚果共和国&nbsp;+242</i>\n                    <i class=\"flag-CD\" data-code=\"+243-\"><em>&nbsp;</em>刚果民主共和国&nbsp;+243</i>\n                    <i class=\"flag-CO\" data-code=\"+57-\"><em>&nbsp;</em>哥伦比亚&nbsp;+57</i>\n                    <i class=\"flag-CR\" data-code=\"+506-\"><em>&nbsp;</em>哥斯达黎加&nbsp;+506</i>\n                    <i class=\"flag-GD\" data-code=\"+1473-\"><em>&nbsp;</em>格林纳达&nbsp;+1473</i>\n                    <i class=\"flag-GL\" data-code=\"+299-\"><em>&nbsp;</em>格陵兰&nbsp;+299</i>\n                    <i class=\"flag-GE\" data-code=\"+995-\"><em>&nbsp;</em>格鲁吉亚&nbsp;+995</i>\n                    <i class=\"flag-CU\" data-code=\"+53-\"><em>&nbsp;</em>古巴&nbsp;+53</i>\n                    <i class=\"flag-GP\" data-code=\"+590-\"><em>&nbsp;</em>瓜德罗普岛&nbsp;+590</i>\n                    <i class=\"flag-GU\" data-code=\"+1671-\"><em>&nbsp;</em>关岛&nbsp;+1671</i>\n                    <i class=\"flag-GY\" data-code=\"+592-\"><em>&nbsp;</em>圭亚那&nbsp;+592</i>\n                    <i class=\"flag-KZ\" data-code=\"+7-\"><em>&nbsp;</em>哈萨克斯坦&nbsp;+7</i>\n                    <i class=\"flag-HT\" data-code=\"+509-\"><em>&nbsp;</em>海地&nbsp;+509</i>\n                    <i class=\"flag-KR\" data-code=\"+82-\"><em>&nbsp;</em>韩国&nbsp;+82</i>\n                    <i class=\"flag-NL\" data-code=\"+31-\"><em>&nbsp;</em>荷兰&nbsp;+31</i>\n                    <i class=\"flag-AN\" data-code=\"+599-\"><em>&nbsp;</em>荷属安的列斯群岛&nbsp;+599</i>\n                    <i class=\"flag-ME\" data-code=\"+382-\"><em>&nbsp;</em>黑山&nbsp;+382</i>\n                    <i class=\"flag-HN\" data-code=\"+504-\"><em>&nbsp;</em>洪都拉斯&nbsp;+504</i>\n                    <i class=\"flag-DJ\" data-code=\"+253-\"><em>&nbsp;</em>吉布提&nbsp;+253</i>\n                    <i class=\"flag-KG\" data-code=\"+996-\"><em>&nbsp;</em>吉尔吉斯斯坦&nbsp;+996</i>\n                    <i class=\"flag-GN\" data-code=\"+224-\"><em>&nbsp;</em>几内亚&nbsp;+224</i>\n                    <i class=\"flag-GW\" data-code=\"+245-\"><em>&nbsp;</em>几内亚比绍&nbsp;+245</i>\n                    <i class=\"flag-CA\" data-code=\"+1-\"><em>&nbsp;</em>加拿大&nbsp;+1</i>\n                    <i class=\"flag-GH\" data-code=\"+233-\"><em>&nbsp;</em>加纳&nbsp;+233</i>\n                    <i class=\"flag-GA\" data-code=\"+241-\"><em>&nbsp;</em>加蓬&nbsp;+241</i>\n                    <i class=\"flag-KH\" data-code=\"+855-\"><em>&nbsp;</em>柬埔寨&nbsp;+855</i>\n                    <i class=\"flag-CZ\" data-code=\"+420-\"><em>&nbsp;</em>捷克&nbsp;+420</i>\n                    <i class=\"flag-ZW\" data-code=\"+263-\"><em>&nbsp;</em>津巴布韦&nbsp;+263</i>\n                    <i class=\"flag-CM\" data-code=\"+237-\"><em>&nbsp;</em>喀麦隆&nbsp;+237</i>\n                    <i class=\"flag-QA\" data-code=\"+974-\"><em>&nbsp;</em>卡塔尔&nbsp;+974</i>\n                    <i class=\"flag-KY\" data-code=\"+1345-\"><em>&nbsp;</em>开曼群岛&nbsp;+1345</i>\n                    <i class=\"flag-KM\" data-code=\"+269-\"><em>&nbsp;</em>科摩罗&nbsp;+269</i>\n                    <i class=\"flag-CI\" data-code=\"+225-\"><em>&nbsp;</em>科特迪瓦&nbsp;+225</i>\n                    <i class=\"flag-KW\" data-code=\"+965-\"><em>&nbsp;</em>科威特&nbsp;+965</i>\n                    <i class=\"flag-HR\" data-code=\"+385-\"><em>&nbsp;</em>克罗地亚&nbsp;+385</i>\n                    <i class=\"flag-KE\" data-code=\"+254-\"><em>&nbsp;</em>肯尼亚&nbsp;+254</i>\n                    <i class=\"flag-CK\" data-code=\"+682-\"><em>&nbsp;</em>库克群岛&nbsp;+682</i>\n                    <i class=\"flag-LV\" data-code=\"+371-\"><em>&nbsp;</em>拉脱维亚&nbsp;+371</i>\n                    <i class=\"flag-LS\" data-code=\"+266-\"><em>&nbsp;</em>莱索托&nbsp;+266</i>\n                    <i class=\"flag-LA\" data-code=\"+856-\"><em>&nbsp;</em>老挝&nbsp;+856</i>\n                    <i class=\"flag-LB\" data-code=\"+961-\"><em>&nbsp;</em>黎巴嫩&nbsp;+961</i>\n                    <i class=\"flag-LT\" data-code=\"+370-\"><em>&nbsp;</em>立陶宛&nbsp;+370</i>\n                    <i class=\"flag-LR\" data-code=\"+231-\"><em>&nbsp;</em>利比里亚&nbsp;+231</i>\n                    <i class=\"flag-LY\" data-code=\"+218-\"><em>&nbsp;</em>利比亚&nbsp;+218</i>\n                    <i class=\"flag-LI\" data-code=\"+423-\"><em>&nbsp;</em>列支敦士登&nbsp;+423</i>\n                    <i class=\"flag-RE\" data-code=\"+262-\"><em>&nbsp;</em>留尼旺岛&nbsp;+262</i>\n                    <i class=\"flag-LU\" data-code=\"+352-\"><em>&nbsp;</em>卢森堡&nbsp;+352</i>\n                    <i class=\"flag-RW\" data-code=\"+250-\"><em>&nbsp;</em>卢旺达&nbsp;+250</i>\n                    <i class=\"flag-RO\" data-code=\"+40-\"><em>&nbsp;</em>罗马尼亚&nbsp;+40</i>\n                    <i class=\"flag-MG\" data-code=\"+261-\"><em>&nbsp;</em>马达加斯加&nbsp;+261</i>\n                    <i class=\"flag-MV\" data-code=\"+960-\"><em>&nbsp;</em>马尔代夫&nbsp;+960</i>\n                    <i class=\"flag-MT\" data-code=\"+356-\"><em>&nbsp;</em>马耳他&nbsp;+356</i>\n                    <i class=\"flag-MW\" data-code=\"+265-\"><em>&nbsp;</em>马拉维&nbsp;+265</i>\n                    <i class=\"flag-MY\" data-code=\"+60-\"><em>&nbsp;</em>马来西亚&nbsp;+60</i>\n                    <i class=\"flag-ML\" data-code=\"+223-\"><em>&nbsp;</em>马里&nbsp;+223</i>\n                    <i class=\"flag-MK\" data-code=\"+389-\"><em>&nbsp;</em>马其顿&nbsp;+389</i>\n                    <i class=\"flag-MQ\" data-code=\"+596-\"><em>&nbsp;</em>马提尼克&nbsp;+596</i>\n                    <i class=\"flag-MU\" data-code=\"+230-\"><em>&nbsp;</em>毛里求斯&nbsp;+230</i>\n                    <i class=\"flag-MR\" data-code=\"+222-\"><em>&nbsp;</em>毛里塔尼亚&nbsp;+222</i>\n                    <i class=\"flag-US\" data-code=\"+1-\"><em>&nbsp;</em>美国&nbsp;+1</i>\n                    <i class=\"flag-MN\" data-code=\"+976-\"><em>&nbsp;</em>蒙古&nbsp;+976</i>\n                    <i class=\"flag-MS\" data-code=\"+1664-\"><em>&nbsp;</em>蒙特塞拉特&nbsp;+1664</i>\n                    <i class=\"flag-BD\" data-code=\"+880-\"><em>&nbsp;</em>孟加拉国&nbsp;+880</i>\n                    <i class=\"flag-PE\" data-code=\"+51-\"><em>&nbsp;</em>秘鲁&nbsp;+51</i>\n                    <i class=\"flag-MD\" data-code=\"+373-\"><em>&nbsp;</em>摩尔多瓦&nbsp;+373</i>\n                    <i class=\"flag-MA\" data-code=\"+212-\"><em>&nbsp;</em>摩洛哥&nbsp;+212</i>\n                    <i class=\"flag-MC\" data-code=\"+377-\"><em>&nbsp;</em>摩纳哥&nbsp;+377</i>\n                    <i class=\"flag-MZ\" data-code=\"+258-\"><em>&nbsp;</em>莫桑比克&nbsp;+258</i>\n                    <i class=\"flag-MX\" data-code=\"+52-\"><em>&nbsp;</em>墨西哥&nbsp;+52</i>\n                    <i class=\"flag-NA\" data-code=\"+264-\"><em>&nbsp;</em>纳米比亚&nbsp;+264</i>\n                    <i class=\"flag-ZA\" data-code=\"+27-\"><em>&nbsp;</em>南非&nbsp;+27</i>\n                    <i class=\"flag-SS\" data-code=\"+211-\"><em>&nbsp;</em>南苏丹&nbsp;+211</i>\n                    <i class=\"flag-NP\" data-code=\"+977-\"><em>&nbsp;</em>尼泊尔&nbsp;+977</i>\n                    <i class=\"flag-NI\" data-code=\"+505-\"><em>&nbsp;</em>尼加拉瓜&nbsp;+505</i>\n                    <i class=\"flag-NE\" data-code=\"+227-\"><em>&nbsp;</em>尼日尔&nbsp;+227</i>\n                    <i class=\"flag-NG\" data-code=\"+234-\"><em>&nbsp;</em>尼日利亚&nbsp;+234</i>\n                    <i class=\"flag-NO\" data-code=\"+47-\"><em>&nbsp;</em>挪威&nbsp;+47</i>\n                    <i class=\"flag-PT\" data-code=\"+351-\"><em>&nbsp;</em>葡萄牙&nbsp;+351</i>\n                    <i class=\"flag-JP\" data-code=\"+81-\"><em>&nbsp;</em>日本&nbsp;+81</i>\n                    <i class=\"flag-SE\" data-code=\"+46-\"><em>&nbsp;</em>瑞典&nbsp;+46</i>\n                    <i class=\"flag-CH\" data-code=\"+41-\"><em>&nbsp;</em>瑞士&nbsp;+41</i>\n                    <i class=\"flag-SV\" data-code=\"+503-\"><em>&nbsp;</em>萨尔瓦多&nbsp;+503</i>\n                    <i class=\"flag-WS\" data-code=\"+685-\"><em>&nbsp;</em>萨摩亚&nbsp;+685</i>\n                    <i class=\"flag-RS\" data-code=\"+381-\"><em>&nbsp;</em>塞尔维亚&nbsp;+381</i>\n                    <i class=\"flag-SL\" data-code=\"+232-\"><em>&nbsp;</em>塞拉利昂&nbsp;+232</i>\n                    <i class=\"flag-SN\" data-code=\"+221-\"><em>&nbsp;</em>塞内加尔&nbsp;+221</i>\n                    <i class=\"flag-CY\" data-code=\"+357-\"><em>&nbsp;</em>塞浦路斯&nbsp;+357</i>\n                    <i class=\"flag-SC\" data-code=\"+248-\"><em>&nbsp;</em>塞舌尔&nbsp;+248</i>\n                    <i class=\"flag-SA\" data-code=\"+966-\"><em>&nbsp;</em>沙特阿拉伯&nbsp;+966</i>\n                    <i class=\"flag-ST\" data-code=\"+239-\"><em>&nbsp;</em>圣多美和普林西比&nbsp;+239</i>\n                    <i class=\"flag-KN\" data-code=\"+1869-\"><em>&nbsp;</em>圣基茨和尼维斯&nbsp;+1869</i>\n                    <i class=\"flag-LC\" data-code=\"+1758-\"><em>&nbsp;</em>圣卢西亚&nbsp;+1758</i>\n                    <i class=\"flag-SM\" data-code=\"+378-\"><em>&nbsp;</em>圣马力诺&nbsp;+378</i>\n                    <i class=\"flag-PM\" data-code=\"+508-\"><em>&nbsp;</em>圣皮埃尔和密克隆群岛&nbsp;+508</i>\n                    <i class=\"flag-VC\" data-code=\"+1784-\"><em>&nbsp;</em>圣文森特和格林纳丁斯&nbsp;+1784</i>\n                    <i class=\"flag-LK\" data-code=\"+94-\"><em>&nbsp;</em>斯里兰卡&nbsp;+94</i>\n                    <i class=\"flag-SK\" data-code=\"+421-\"><em>&nbsp;</em>斯洛伐克&nbsp;+421</i>\n                    <i class=\"flag-SI\" data-code=\"+386-\"><em>&nbsp;</em>斯洛文尼亚&nbsp;+386</i>\n                    <i class=\"flag-SZ\" data-code=\"+268-\"><em>&nbsp;</em>斯威士兰&nbsp;+268</i>\n                    <i class=\"flag-SD\" data-code=\"+249-\"><em>&nbsp;</em>苏丹&nbsp;+249</i>\n                    <i class=\"flag-SR\" data-code=\"+597-\"><em>&nbsp;</em>苏里南&nbsp;+597</i>\n                    <i class=\"flag-SO\" data-code=\"+252-\"><em>&nbsp;</em>索马里&nbsp;+252</i>\n                    <i class=\"flag-TJ\" data-code=\"+992-\"><em>&nbsp;</em>塔吉克斯坦&nbsp;+992</i>\n                    <i class=\"flag-TH\" data-code=\"+66-\"><em>&nbsp;</em>泰国&nbsp;+66</i>\n                    <i class=\"flag-TZ\" data-code=\"+255-\"><em>&nbsp;</em>坦桑尼亚&nbsp;+255</i>\n                    <i class=\"flag-TO\" data-code=\"+676-\"><em>&nbsp;</em>汤加&nbsp;+676</i>\n                    <i class=\"flag-TC\" data-code=\"+1649-\"><em>&nbsp;</em>特克斯和凯科斯群岛&nbsp;+1649</i>\n                    <i class=\"flag-TT\" data-code=\"+1868-\"><em>&nbsp;</em>特里尼达和多巴哥&nbsp;+1868</i>\n                    <i class=\"flag-TN\" data-code=\"+216-\"><em>&nbsp;</em>突尼斯&nbsp;+216</i>\n                    <i class=\"flag-TR\" data-code=\"+90-\"><em>&nbsp;</em>土耳其&nbsp;+90</i>\n                    <i class=\"flag-TM\" data-code=\"+993-\"><em>&nbsp;</em>土库曼斯坦&nbsp;+993</i>\n                    <i class=\"flag-VU\" data-code=\"+678-\"><em>&nbsp;</em>瓦努阿图&nbsp;+678</i>\n                    <i class=\"flag-GT\" data-code=\"+502-\"><em>&nbsp;</em>危地马拉&nbsp;+502</i>\n                    <i class=\"flag-VE\" data-code=\"+58-\"><em>&nbsp;</em>委内瑞拉&nbsp;+58</i>\n                    <i class=\"flag-BN\" data-code=\"+673-\"><em>&nbsp;</em>文莱&nbsp;+673</i>\n                    <i class=\"flag-UG\" data-code=\"+256-\"><em>&nbsp;</em>乌干达&nbsp;+256</i>\n                    <i class=\"flag-UA\" data-code=\"+380-\"><em>&nbsp;</em>乌克兰&nbsp;+380</i>\n                    <i class=\"flag-UY\" data-code=\"+598-\"><em>&nbsp;</em>乌拉圭&nbsp;+598</i>\n                    <i class=\"flag-UZ\" data-code=\"+998-\"><em>&nbsp;</em>乌兹别克斯坦&nbsp;+998</i>\n                    <i class=\"flag-ES\" data-code=\"+34-\"><em>&nbsp;</em>西班牙&nbsp;+34</i>\n                    <i class=\"flag-GR\" data-code=\"+30-\"><em>&nbsp;</em>希腊&nbsp;+30</i>\n                    <i class=\"flag-SG\" data-code=\"+65-\"><em>&nbsp;</em>新加坡&nbsp;+65</i>\n                    <i class=\"flag-NC\" data-code=\"+687-\"><em>&nbsp;</em>新喀里多尼亚&nbsp;+687</i>\n                    <i class=\"flag-NZ\" data-code=\"+64-\"><em>&nbsp;</em>新西兰&nbsp;+64</i>\n                    <i class=\"flag-HU\" data-code=\"+36-\"><em>&nbsp;</em>匈牙利&nbsp;+36</i>\n                    <i class=\"flag-SY\" data-code=\"+963-\"><em>&nbsp;</em>叙利亚&nbsp;+963</i>\n                    <i class=\"flag-JM\" data-code=\"+1876-\"><em>&nbsp;</em>牙买加&nbsp;+1876</i>\n                    <i class=\"flag-AM\" data-code=\"+374-\"><em>&nbsp;</em>亚美尼亚&nbsp;+374</i>\n                    <i class=\"flag-YE\" data-code=\"+967-\"><em>&nbsp;</em>也门&nbsp;+967</i>\n                    <i class=\"flag-IQ\" data-code=\"+964-\"><em>&nbsp;</em>伊拉克&nbsp;+964</i>\n                    <i class=\"flag-IR\" data-code=\"+98-\"><em>&nbsp;</em>伊朗&nbsp;+98</i>\n                    <i class=\"flag-IL\" data-code=\"+972-\"><em>&nbsp;</em>以色列&nbsp;+972</i>\n                    <i class=\"flag-IT\" data-code=\"+39-\"><em>&nbsp;</em>意大利&nbsp;+39</i>\n                    <i class=\"flag-IN\" data-code=\"+91-\"><em>&nbsp;</em>印度&nbsp;+91</i>\n                    <i class=\"flag-ID\" data-code=\"+62-\"><em>&nbsp;</em>印度尼西亚&nbsp;+62</i>\n                    <i class=\"flag-GB\" data-code=\"+44-\"><em>&nbsp;</em>英格兰&nbsp;+44</i>\n                    <i class=\"flag-UK\" data-code=\"+44-\"><em>&nbsp;</em>英国&nbsp;+44</i>\n                    <i class=\"flag-VG\" data-code=\"+1340-\"><em>&nbsp;</em>英属维尔京群岛&nbsp;+1340</i>\n                    <i class=\"flag-JO\" data-code=\"+962-\"><em>&nbsp;</em>约旦&nbsp;+962</i>\n                    <i class=\"flag-VN\" data-code=\"+84-\"><em>&nbsp;</em>越南&nbsp;+84</i>\n                    <i class=\"flag-ZM\" data-code=\"+260-\"><em>&nbsp;</em>赞比亚&nbsp;+260</i>\n                    <i class=\"flag-JE\" data-code=\"+44-\"><em>&nbsp;</em>泽西岛&nbsp;+44</i>\n                    <i class=\"flag-TD\" data-code=\"+235-\"><em>&nbsp;</em>乍得&nbsp;+235</i>\n                    <i class=\"flag-GI\" data-code=\"+350-\"><em>&nbsp;</em>直布罗陀&nbsp;+350</i>\n                    <i class=\"flag-CL\" data-code=\"+56-\"><em>&nbsp;</em>智利&nbsp;+56</i>\n                    <i class=\"flag-CF\" data-code=\"+236-\"><em>&nbsp;</em>中非共和国&nbsp;+236</i>\n                    <i class=\"flag-CN\" data-code=\"+86-\"><em>&nbsp;</em>中国&nbsp;+86</i>\n                    <i class=\"flag-MO\" data-code=\"+853-\"><em>&nbsp;</em>中国澳门&nbsp;+853</i>\n                    <i class=\"flag-TW\" data-code=\"+886-\"><em>&nbsp;</em>中国台湾&nbsp;+886</i>\n                    <i class=\"flag-HK\" data-code=\"+852-\"><em>&nbsp;</em>中国香港&nbsp;+852</i>\n                </div>\n            </div>\n        </div>\n        <!-- END 国际手机号 -->\n        {/if}\n    {/if}\n</div>\n"

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * **模块组件 - 移动端专用的Tab切换[bH5Tab]**<br>
	 * **使用方法：**<br>
	 * ```
	 * 【引用关键字】
	 * require('@netease/urs-rui/src/module/bH5Tab/bH5Tab.js')
	 * ```
	 * ```
	 * 【组件标签】
	 * <bH5Tab />
	 *
	 * ```
	 * @class H5Tab
	 * @module Module
	 * @constructor
	 * @demo module/bH5Tab/demo-1.html {展示效果}
	 * @show true
	 */

	/*================组件可传参数==================*/
	/**
	 * 输入框提示语
	 * @property placeholder
	 * @default 请输入手机号
	 * @type String
	 */
	/*================可发起/监听事件==================*/

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(82);

	var _bH5Tab = __webpack_require__(84);

	var _bH5Tab2 = _interopRequireDefault(_bH5Tab);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Base = __webpack_require__(23);

	var MbInput = Base.extend({
	    name: 'bH5Tab',
	    template: _bH5Tab2.default,
	    data: {
	        currentChannelIndex: 0,
	        channels: [{
	            name: "申请帐号修复",
	            href: "https://mima.163.com/nie"
	        }, {
	            name: "Channel 1"
	        }, {
	            name: "Channel 2"
	        }]
	    },
	    config: function config() {
	        this.supr();
	        this.__body = document.body || document.getElementsByTagName('body')[0];
	    },

	    /**
	     * 切换channel
	     * */
	    changeChannel: function changeChannel(_index) {
	        var _hashChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	        this.data.currentChannelIndex = _index;
	        this.hideChannelTab(_hashChange);
	        this.$emit('tabChange', _index);
	    },
	    /**
	     * 显示channel Tab
	     * */
	    showChannelTab: function showChannelTab() {
	        // this.__scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset || 0;
	        // this.__body.style.top = - this.__scrollTop + 'px';
	        // this.__body.style.position = 'fixed';
	        this.data.cTabHide = false;
	        this.data.showChannelTab = true;
	        this.$update();
	    },
	    hideChannelTab: function hideChannelTab() {
	        var _this = this;

	        var _hashChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	        this.data.cTabHide = true;
	        this.$update();
	        this.sto = setTimeout(function () {
	            _this.data.showChannelTab = false;
	            _this.$update();
	            // this.__body.style.position = '';
	            // this.__body.style.top = '';
	            // document.documentElement.scrollTop =  document.body.scrollTop = this.__scrollTop || 0;
	        }, _hashChange ? 300 : 0);
	    }
	});
	exports.default = MbInput;

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */,
/* 84 */
/***/ (function(module, exports) {

	module.exports = "{#if showChannelTab}\n<div class=\"bH5Tab\">\n    <div class=\"top_mask verify-tab-mask-show {cTabHide?'verify-tab-mask-hide':''}\"  on-click={this.hideChannelTab($event)}></div>\n    <div class=\"tab-box verify-tab-box-show {cTabHide?'verify-tab-box-hide':''}\">\n        <ul class=\"tabs_hd clearfix\">\n            {#list channels as c}\n                <li class=\"i-channel\">\n                    <a href=\"{c.href}\" target=\"{c.target}\" on-click={this.changeChannel(c_index,c.href.charAt(0)=='#')}>{c.name}</a>\n                </li>\n            {/list}\n        </ul>\n        <div class=\"u-btn\" on-click={this.hideChannelTab($event)}>取消</div>\n    </div>\n</div>\n{/if}"

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _component = __webpack_require__(23);

	var _component2 = _interopRequireDefault(_component);

	var _bAlert = __webpack_require__(86);

	var _bAlert2 = _interopRequireDefault(_bAlert);

	__webpack_require__(87);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var bAlert = _component2.default.extend({
	    name: 'bAlert',
	    template: _bAlert2.default,
	    config: function config() {
	        this.defaults({
	            title: '提示',
	            content: '',
	            closeBtn: false,
	            okBtn: true,
	            cancelBtn: false
	        });
	        this.supr();
	    },
	    init: function init() {
	        // 如果不是内嵌组件，则嵌入到document.body中
	        if (this.$root === this) this.$inject(document.body);
	    },

	    /**
	     *  关闭对话框
	     *  @param {boolean} result 点击确认还是取消
	     */
	    close: function close(result) {
	        this.$emit('close', {
	            result: result
	        });
	        result ? this.ok() : this.cancel();
	    },

	    // 点击确认按钮
	    ok: function ok() {
	        this.$emit('ok');
	        this.destroy();
	    },

	    // 点击取消按钮
	    cancel: function cancel() {
	        this.$emit('cancel');
	        this.destroy();
	    }
	});

	/**
	 * 显示alert弹框
	 * @method show
	 * @param {object} data 
	 * @param {function} ok 确认成功回调
	 * @param {function} cancel 取消成功回调
	 * @param {function} close 关闭成功回调
	 * @return 弹窗实例对象
	 * 
	 */
	/**
	* **单元组件 - alert弹框[bAlert]**<br>
	* 基础的bAlert封装组件<br>
	* **使用方法：**<br>
	* ```
	* 【引用关键字】
	* import bAlert from 'urs-rui/src/unit/bAlert/bAlert.js';
	* ```
	* ```
	* 【组件标签】
	* bAlert.show({
	           title:'提示', // 可传空，不显示tilte
	           content:'<p style="color:red;">你好</p>',
	           cancelBtn:'取消'
	       }, this.ok.bind(this), 
	       this.cancel.bind(this)
	   )
	*
	* ```
	* @class Alert
	* @main Unit
	* @demo unit/bAlert/demo-1.html {alert}
	* @constructor
	* 
	* @show true
	* @author hzjiangchuanhua@corp.netease.com
	*/

	/*================组件可传参数==================*/

	/**
	* 外层样式
	* @property clazz
	* @default 
	* @type String
	*/

	/**
	* 初始化数据
	* @property data
	* @default {title:"提示",content:'',closeBtn:false,okBtn:true,cancelBtn:false}
	* @type Object
	*       tilte: 传空则不显示标题
	*       content: 支持html结构
	*/

	/**
	* 点击确认按钮回调函数
	* @property ok
	* @default 默认关闭当前窗口
	* @type function
	*/

	/**
	* 点击取消按钮回调函数
	* @property cancel
	* @default 默认关闭当前窗口
	* @type function
	*/

	/**
	* 点击关闭按钮回调函数
	* @property close
	* @default 默认关闭当前窗口
	* @type function
	*/

	bAlert.show = function (data, ok, cancel, close) {
	    var _data = data || {},
	        close = close || function () {},
	        ok = ok || function () {},
	        cancel = cancel || function () {};
	    var _modal = new this({ data: _data });
	    _modal.$on('close', close).$on('ok', ok).$on('cancel', cancel);

	    return _modal;
	};

	// export default bAlert;
	module.exports = bAlert;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	module.exports = "<div class='bAlert-mask'></div>\n<div class='bAlert {clazz}'>\n    {#if title}<div class='bAlert_title'>{title}</div>{/if}\n    <div class='bAlert_close' on-click={this.close(false)} r-hide={!closeBtn}>X</div>\n    <div class='bAlert_content'>\n        <div class=\"bAlert_msg\">{#if content}{#inc @(content)}{/if}</div>\n        <div class='bAlert_btn_container'>\n        {#if okBtn&&!cancelBtn}\n            <span class='bAlert-btn bAlert_btn_ok f-fl' on-click={this.close(true)}>{okBtn === true ? '确定' : okBtn}</span>\n        {/if}\n        {#if cancelBtn}\n            <span class='bAlert-btn bAlert_btn_cancel f-fl' on-click={this.close(false)}>{cancelBtn === true ? '取消' : cancelBtn}</span>\n        {/if}\n        {#if okBtn&&cancelBtn}\n            <span class='bAlert-btn bAlert_btn_ok f-fl bAlert-btn-second' on-click={this.close(true)}>{okBtn === true ? '确定' : okBtn}</span>\n        {/if}\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 87 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ])
});
;