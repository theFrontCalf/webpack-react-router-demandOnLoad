webpackJsonp([2],{

/***/ 558:
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
	
	var _reactRouter = __webpack_require__(330);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import {DatePicker} from 'antd';
	
	var Order = function (_Component) {
	    _inherits(Order, _Component);
	
	    function Order() {
	        _classCallCheck(this, Order);
	
	        return _possibleConstructorReturn(this, (Order.__proto__ || Object.getPrototypeOf(Order)).apply(this, arguments));
	    }
	
	    _createClass(Order, [{
	        key: 'render',
	        value: function render() {
	            // console.log(this.props);
	            // this.props.route.childRoutes
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/' },
	                            '\u8FD4\u56DE\u9996\u9875(xxxx)'
	                        )
	                    ),
	                    this.props.route.childRoutes.map(function (item, i) {
	                        return _react2.default.createElement(
	                            'li',
	                            { key: i },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/inbox/' + item.path },
	                                item.title
	                            )
	                        );
	                    })
	                ),
	                this.props.children
	            );
	        }
	    }]);
	
	    return Order;
	}(_react.Component);
	
	exports.default = Order;

/***/ })

});
//# sourceMappingURL=inbox.chunk.js.map