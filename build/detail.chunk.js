webpackJsonp([1],{

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(332);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(549);
	
	__webpack_require__(556);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Detail = function (_Component) {
	    _inherits(Detail, _Component);
	
	    function Detail() {
	        _classCallCheck(this, Detail);
	
	        return _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).apply(this, arguments));
	    }
	
	    _createClass(Detail, [{
	        key: 'clickHandle',
	        value: function clickHandle() {
	            fetch('/api/comments', {
	                credentials: 'include',
	                method: 'get'
	            }).then(function (data) {
	                return data.json();
	            }).then(function (json) {
	                console.log(json);
	                console.log("success!+json");
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    '\u8FD9\u662F\u8BE6\u60C5\u9875\u9762\uFF01'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '\u8FD9\u662F\u4E00\u4E2AP\uFF0C\u6D4B\u8BD5\u662F\u5426\u7EE7\u627F\u4E86style.css\u7684\u6837\u5F0F'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { onClick: this.clickHandle.bind(this) },
	                    '\u70B9\u6211'
	                )
	            );
	        }
	    }]);
	
	    return Detail;
	}(_react.Component);
	
	exports.default = Detail;
	;

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(557);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(553)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(557, function() {
				var newContent = __webpack_require__(557);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(552)();
	// imports
	
	
	// module
	exports.push([module.id, "h2 {\n  color: #e4393c;\n}\n", ""]);
	
	// exports


/***/ })

});
//# sourceMappingURL=detail.chunk.js.map