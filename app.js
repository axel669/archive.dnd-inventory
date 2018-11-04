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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.tea");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/autobind-decorator/lib/index.js":
/*!***************************************************************************************************************!*\
  !*** delegated ./node_modules/autobind-decorator/lib/index.js from dll-reference vendor_d6e5e571475d8870d24d ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_d6e5e571475d8870d24d */ "dll-reference vendor_d6e5e571475d8870d24d"))(104);

/***/ }),

/***/ "./node_modules/doric-components/index.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/doric-components/index.js from dll-reference vendor_d6e5e571475d8870d24d ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_d6e5e571475d8870d24d */ "dll-reference vendor_d6e5e571475d8870d24d"))(123);

/***/ }),

/***/ "./node_modules/immutable-update-values/index.js":
/*!****************************************************************************************************************!*\
  !*** delegated ./node_modules/immutable-update-values/index.js from dll-reference vendor_d6e5e571475d8870d24d ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_d6e5e571475d8870d24d */ "dll-reference vendor_d6e5e571475d8870d24d"))(145);

/***/ }),

/***/ "./node_modules/react/index.js":
/*!**********************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference vendor_d6e5e571475d8870d24d ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_d6e5e571475d8870d24d */ "dll-reference vendor_d6e5e571475d8870d24d"))(0);

/***/ }),

/***/ "./node_modules/redux-batching/dist/redux-batching.js":
/*!************************************************************!*\
  !*** ./node_modules/redux-batching/dist/redux-batching.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var gen = function gen(store) {
    var action = function action(type) {
        var constructor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
            return {};
        };
        var dispatches = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        var method = function method() {
            var obj = _extends({
                type: type
            }, constructor.apply(undefined, arguments));
            return obj;
        };
        if (dispatches === true) {
            method.dispatch = function () {
                store.dispatch(method.apply(undefined, arguments));
            };
        }
        return method;
    };
    var batch = action('batch', function () {
        for (var _len = arguments.length, actions = Array(_len), _key = 0; _key < _len; _key++) {
            actions[_key] = arguments[_key];
        }

        return {
            actions: actions
        };
    });

    return { action: action, batch: batch };
};

var batchReducer = function batchReducer(func) {
    return function (state, action) {
        if (action.type === 'batch') {
            return action.actions.reduce(function (state, action) {
                return func(state, action);
            }, state);
        }
        return func(state, action);
    };
};

exports.batchReducer = batchReducer;
exports.gen = gen;

/***/ }),

/***/ "./node_modules/redux-batching/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-batching/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/redux-batching.js */ "./node_modules/redux-batching/dist/redux-batching.js");


/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!*************************************************************************************************!*\
  !*** delegated ./node_modules/redux/es/redux.js from dll-reference vendor_d6e5e571475d8870d24d ***!
  \*************************************************************************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_d6e5e571475d8870d24d */ "dll-reference vendor_d6e5e571475d8870d24d"))(120);

/***/ }),

/***/ "./node_modules/ssjs/index.js":
/*!*********************************************************************************************!*\
  !*** delegated ./node_modules/ssjs/index.js from dll-reference vendor_d6e5e571475d8870d24d ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_d6e5e571475d8870d24d */ "dll-reference vendor_d6e5e571475d8870d24d"))(126);

/***/ }),

/***/ "./src/components/Card.tea":
/*!*********************************!*\
  !*** ./src/components/Card.tea ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_style_tea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/style.tea */ "./src/style.tea");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



_core_style_tea__WEBPACK_IMPORTED_MODULE_1__["default"].addStyles({
  "item-card": {
    display: "block",
    margin: 4,
    backgroundColor: "white",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    border: "1px solid lightgray",
    position: "relative"
  },
  "item-card[container]": {
    border: "1px solid black"
  },
  "item-card-title": {
    margin: "2px 2px 4px 2px",
    display: "block",
    fontSize: 18,
    fontWeight: "bold"
  },
  "item-card-content": {
    display: "block",
    margin: 8
  },
  "item-expandable": {
    display: "block",
    backgroundColor: "white",
    borderRadius: 3,
    paddingBottom: 4
  }
});

var Card = function Card(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("item-card", props, children);
};

Card.title = function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("item-card-title", null, props.main);
};

Card.content = function (_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("item-card-content", null, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/items.js":
/*!**********************!*\
  !*** ./src/items.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  "name": "Item 0",
  "price": 0,
  "id": 0
}, {
  "name": "Item 1",
  "price": 5,
  "id": 1
}, {
  "name": "Item 2",
  "price": 10,
  "id": 2
}, {
  "name": "Item 3",
  "price": 15,
  "id": 3
}, {
  "name": "Item 4",
  "price": 20,
  "id": 4
}, {
  "name": "Item 5",
  "price": 25,
  "id": 5
}, {
  "name": "Item 6",
  "price": 30,
  "id": 6
}, {
  "name": "Item 7",
  "price": 35,
  "id": 7
}, {
  "name": "Item 8",
  "price": 40,
  "id": 8
}, {
  "name": "Item 9",
  "price": 45,
  "id": 9
}, {
  "name": "Item 10",
  "price": 50,
  "id": 10
}, {
  "name": "Item 11",
  "price": 55,
  "id": 11
}, {
  "name": "Item 12",
  "price": 60,
  "id": 12
}, {
  "name": "Item 13",
  "price": 65,
  "id": 13
}, {
  "name": "Item 14",
  "price": 70,
  "id": 14
}, {
  "name": "Item 15",
  "price": 75,
  "id": 15
}, {
  "name": "Item 16",
  "price": 80,
  "id": 16
}, {
  "name": "Item 17",
  "price": 85,
  "id": 17
}, {
  "name": "Item 18",
  "price": 90,
  "id": 18
}, {
  "name": "Item 19",
  "price": 95,
  "id": 19
}, {
  "name": "Item 20",
  "price": 100,
  "id": 20
}, {
  "name": "Item 21",
  "price": 105,
  "id": 21
}, {
  "name": "Item 22",
  "price": 110,
  "id": 22
}, {
  "name": "Item 23",
  "price": 115,
  "id": 23
}, {
  "name": "Item 24",
  "price": 120,
  "id": 24
}]);

/***/ }),

/***/ "./src/main.tea":
/*!**********************!*\
  !*** ./src/main.tea ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var doric_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! doric-components */ "./node_modules/doric-components/index.js");
/* harmony import */ var doric_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(doric_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var autobind_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/index.js");
/* harmony import */ var autobind_decorator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(autobind_decorator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_style_tea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/style.tea */ "./src/style.tea");
/* harmony import */ var _screen_Main_tea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @screen/Main.tea */ "./src/screen/Main.tea");





_core_style_tea__WEBPACK_IMPORTED_MODULE_3__["default"].attach();
doric_components__WEBPACK_IMPORTED_MODULE_1___default.a.init(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_screen_Main_tea__WEBPACK_IMPORTED_MODULE_4__["default"], null), document.querySelector("app-root"));

/***/ }),

/***/ "./src/screen/Inventory.tea":
/*!**********************************!*\
  !*** ./src/screen/Inventory.tea ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var doric_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! doric-components */ "./node_modules/doric-components/index.js");
/* harmony import */ var doric_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(doric_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var autobind_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/index.js");
/* harmony import */ var autobind_decorator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(autobind_decorator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _screen_ItemList_tea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @screen/ItemList.tea */ "./src/screen/ItemList.tea");
/* harmony import */ var _core_yggdrasil_tea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/yggdrasil.tea */ "./src/yggdrasil.tea");
/* harmony import */ var _core_style_tea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/style.tea */ "./src/style.tea");
/* harmony import */ var _component_Card_tea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @component/Card.tea */ "./src/components/Card.tea");
var _class;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }








var Expandable = (_class =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Expandable, _PureComponent);

  function Expandable(props) {
    var _this;

    _classCallCheck(this, Expandable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Expandable).call(this, props));
    _this.state = {
      expanded: false
    };
    return _this;
  }

  _createClass(Expandable, [{
    key: "toggle",
    value: function toggle() {
      var expanded = !this.state.expanded;
      this.setState({
        expanded: expanded
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _ref = this.state.expanded === true ? ["ion-minus", "block"] : ["ion-plus", "none"],
          _ref2 = _slicedToArray(_ref, 2),
          icon = _ref2[0],
          display = _ref2[1];

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("item-expandable", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(doric_components__WEBPACK_IMPORTED_MODULE_1___default.a.iconButton, {
        block: true,
        flush: true,
        icon: icon,
        text: this.props.title,
        onTap: this.toggle
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: display
        }
      }, this.props.children));
    }
  }]);

  return Expandable;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]), (_applyDecoratedDescriptor(_class.prototype, "toggle", [autobind_decorator__WEBPACK_IMPORTED_MODULE_2___default.a], Object.getOwnPropertyDescriptor(_class.prototype, "toggle"), _class.prototype)), _class);
;
_core_style_tea__WEBPACK_IMPORTED_MODULE_5__["default"].addStyles({
  "item-grid": {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gridAutoRows: 30
  },
  "item-grid > div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "middle"
  }
});

var Item =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(Item, _PureComponent2);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, _getPrototypeOf(Item).apply(this, arguments));
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          item = _this$props.item,
          path = _this$props.path;

      var addOne = function addOne() {
        return _core_yggdrasil_tea__WEBPACK_IMPORTED_MODULE_4__["default"]["inventory.update.count"](path, 1);
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Card_tea__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Card_tea__WEBPACK_IMPORTED_MODULE_6__["default"].title, {
        main: item.name
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Card_tea__WEBPACK_IMPORTED_MODULE_6__["default"].content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, item.guid), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("item-grid", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Count"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, item.count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(doric_components__WEBPACK_IMPORTED_MODULE_1___default.a.button, {
        text: "+1",
        flush: true,
        flat: true,
        primary: true,
        onTap: addOne
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(doric_components__WEBPACK_IMPORTED_MODULE_1___default.a.button, {
        text: "-1",
        flush: true,
        flat: true,
        danger: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Weight"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, item.count * item.weight), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(doric_components__WEBPACK_IMPORTED_MODULE_1___default.a.button, {
        text: "+X",
        flush: true,
        flat: true,
        primary: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(doric_components__WEBPACK_IMPORTED_MODULE_1___default.a.iconButton, {
        icon: "ion-trash-b",
        flush: true,
        flat: true,
        danger: true
      }))));
    }
  }]);

  return Item;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

;

var Container =
/*#__PURE__*/
function (_PureComponent3) {
  _inherits(Container, _PureComponent3);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, _getPrototypeOf(Container).apply(this, arguments));
  }

  _createClass(Container, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          item = _this$props2.item,
          items = _this$props2.items,
          source = _this$props2.source,
          path = _this$props2.path;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Card_tea__WEBPACK_IMPORTED_MODULE_6__["default"], {
        container: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Card_tea__WEBPACK_IMPORTED_MODULE_6__["default"].title, {
        main: item.name
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Card_tea__WEBPACK_IMPORTED_MODULE_6__["default"].content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, item.guid), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Expandable, {
        title: "Items"
      }, items.map(function (info, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Display, _extends({
          info: info,
          source: source
        }, {
          path: "".concat(path, ".").concat(index)
        }));
      }))));
    }
  }]);

  return Container;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

;

var Display =
/*#__PURE__*/
function (_Component) {
  _inherits(Display, _Component);

  function Display() {
    _classCallCheck(this, Display);

    return _possibleConstructorReturn(this, _getPrototypeOf(Display).apply(this, arguments));
  }

  _createClass(Display, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          info = _this$props3.info,
          source = _this$props3.source,
          path = _this$props3.path;
      var item = source[info[0]];

      if (Array.isArray(info[1]) === false) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
          path: path,
          item: _objectSpread({}, item, {
            count: info[1]
          })
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, _extends({
          item: item,
          source: source,
          path: path
        }, {
          items: info[1]
        }));
      }

      ;
    }
  }]);

  return Display;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

;
var itemAddStyle = {
  position: "fixed",
  bottom: 0,
  right: 0,
  top: "auto",
  left: "auto",
  width: 40,
  height: 40
};

var Inventory2 =
/*#__PURE__*/
function (_PureComponent4) {
  _inherits(Inventory2, _PureComponent4);

  function Inventory2() {
    _classCallCheck(this, Inventory2);

    return _possibleConstructorReturn(this, _getPrototypeOf(Inventory2).apply(this, arguments));
  }

  _createClass(Inventory2, [{
    key: "render",
    value: function render() {
      var _this$props$inventory = this.props.inventory,
          structure = _this$props$inventory.structure,
          source = _this$props$inventory.source;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(doric_components__WEBPACK_IMPORTED_MODULE_1___default.a.appContainer, {
        title: "Inventory"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: 0.1
        }
      }), structure.map(function (info, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Display, {
          info: info,
          source: source,
          path: index
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(doric_components__WEBPACK_IMPORTED_MODULE_1___default.a.iconButton, {
        action: true,
        primary: true,
        style: itemAddStyle,
        icon: "ion-plus"
      }));
    }
  }]);

  return Inventory2;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(Inventory2, "propList", ["inventory"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Inventory2);

/***/ }),

/***/ "./src/screen/ItemList.tea":
/*!*********************************!*\
  !*** ./src/screen/ItemList.tea ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var doric_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! doric-components */ "./node_modules/doric-components/index.js");
/* harmony import */ var doric_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(doric_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_style_tea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/style.tea */ "./src/style.tea");
/* harmony import */ var _core_yggdrasil_tea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/yggdrasil.tea */ "./src/yggdrasil.tea");
var _dec, _class, _class2, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





_core_style_tea__WEBPACK_IMPORTED_MODULE_2__["default"].addStyles({
  "div.test doric-col, div.test doric-button": {
    height: 30
  },
  "div.test > doric-grid > div:nth-child(even) > *": {
    backgroundColor: "lightgray"
  }
});
var ItemList = (_dec = doric_components__WEBPACK_IMPORTED_MODULE_1___default.a.dialogify, _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ItemList, _PureComponent);

  function ItemList() {
    _classCallCheck(this, ItemList);

    return _possibleConstructorReturn(this, _getPrototypeOf(ItemList).apply(this, arguments));
  }

  _createClass(ItemList, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "test"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(doric_components__WEBPACK_IMPORTED_MODULE_1___default.a.grid, null, this.props.itemList.map(function (item) {
        var onTap = function onTap() {
          return _core_yggdrasil_tea__WEBPACK_IMPORTED_MODULE_3__["default"].items.add(item);
        };

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: item.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(doric_components__WEBPACK_IMPORTED_MODULE_1___default.a.grid.col, {
          size: 8
        }, item.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(doric_components__WEBPACK_IMPORTED_MODULE_1___default.a.grid.col, {
          size: 2
        }, item.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(doric_components__WEBPACK_IMPORTED_MODULE_1___default.a.grid.col, {
          size: 2
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(doric_components__WEBPACK_IMPORTED_MODULE_1___default.a.iconButton, {
          block: true,
          flush: true,
          icon: "ion-plus",
          onTap: onTap
        })));
      })));
    }
  }]);

  return ItemList;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]), _defineProperty(_class2, "propList", ["itemList"]), _temp)) || _class);
;
/* harmony default export */ __webpack_exports__["default"] = (ItemList);

/***/ }),

/***/ "./src/screen/Main.tea":
/*!*****************************!*\
  !*** ./src/screen/Main.tea ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var doric_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! doric-components */ "./node_modules/doric-components/index.js");
/* harmony import */ var doric_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(doric_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _screen_Inventory_tea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @screen/Inventory.tea */ "./src/screen/Inventory.tea");
/* harmony import */ var _core_yggdrasil_tea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/yggdrasil.tea */ "./src/yggdrasil.tea");
var _dec, _class2;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var connect = function connect(store) {
  return function (Parent) {
    var _class, _temp;

    var nullref0;
    return _temp = _class =
    /*#__PURE__*/
    function (_Component) {
      _inherits(_class, _Component);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
        _this.state = store.getState();
        store.subscribe(function () {
          return _this.setState(store.getState());
        });
        return _this;
      }

      _createClass(_class, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Parent, this.state);
        }
      }]);

      return _class;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _defineProperty(_class, "displayName", "Connected<".concat((nullref0 = Parent.name) != null ? nullref0 : Parent.displayName, ">")), _temp;
  };
};

var Main = (_dec = connect(_core_yggdrasil_tea__WEBPACK_IMPORTED_MODULE_3__["default"].store), _dec(_class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Main, _PureComponent);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, _getPrototypeOf(Main).apply(this, arguments));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$screen$Sc = this.props.screen.Screen,
          Screen = _this$props$screen$Sc === void 0 ? _screen_Inventory_tea__WEBPACK_IMPORTED_MODULE_2__["default"] : _this$props$screen$Sc;
      var props = Screen.propList.reduce(function (p, name) {
        return _defineProperty({}, name, _this2.props[name]);
      }, {});
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Screen, props);
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"])) || _class2);
;
/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/store/actions.tea":
/*!*******************************!*\
  !*** ./src/store/actions.tea ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable_update_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable-update-values */ "./node_modules/immutable-update-values/index.js");
/* harmony import */ var immutable_update_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable_update_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_batching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-batching */ "./node_modules/redux-batching/index.js");
/* harmony import */ var redux_batching__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_batching__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_store_tea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/store.tea */ "./src/store/store.tea");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var _gen = Object(redux_batching__WEBPACK_IMPORTED_MODULE_1__["gen"])(_store_store_tea__WEBPACK_IMPORTED_MODULE_2__["default"]),
    batch = _gen.batch,
    action = _gen.action;

var pass = function pass() {
  for (var _len = arguments.length, names = new Array(_len), _key = 0; _key < _len; _key++) {
    names[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return names.reduce(function (item, name, index) {
      return _objectSpread({}, item, _defineProperty({}, name, args[index]));
    }, {});
  };
};

var actions = Object.entries({
  "items.add": pass("item"),
  "inventory.update.count": pass("path", "value"),
  "screen.change": pass("screen")
}).reduce(function (mod, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];

  return _objectSpread({}, mod, _defineProperty({}, "".concat(key, ".$set"), action(key, value)));
}, {});
/* harmony default export */ __webpack_exports__["default"] = (immutable_update_values__WEBPACK_IMPORTED_MODULE_0___default()({
  batch: batch
}, actions, true));

/***/ }),

/***/ "./src/store/inventory.tea":
/*!*********************************!*\
  !*** ./src/store/inventory.tea ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable_update_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable-update-values */ "./node_modules/immutable-update-values/index.js");
/* harmony import */ var immutable_update_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable_update_values__WEBPACK_IMPORTED_MODULE_0__);
var _source;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var b = Date.now();
var itemSource = {
  source: (_source = {}, _defineProperty(_source, b + 1, {
    name: "Herbs",
    weight: 0.25
  }), _defineProperty(_source, b + 2, {
    name: "Sword",
    weight: 2
  }), _defineProperty(_source, b + 3, {
    name: "Backpack",
    weight: null,
    limit: null
  }), _defineProperty(_source, b + 4, {
    name: "Candle",
    weight: 0.5
  }), _defineProperty(_source, b + 5, {
    name: "Bag of Holding",
    weight: 5,
    limit: 500
  }), _defineProperty(_source, b + 6, {
    name: "Kobold Skull",
    weight: 0
  }), _source),
  structure: [[b + 1, 5], [b + 2, 2], [b + 3, [[b + 4, 3], [b + 5, [[b + 6, 2]]]]]]
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : itemSource;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return function () {
    switch (action.type) {
      case "inventory.update.count":
        {
          return immutable_update_values__WEBPACK_IMPORTED_MODULE_0___default()(state, _defineProperty({}, "structure.".concat(action.path, ".1.$apply"), function structure1$apply(value) {
            return value + action.value;
          }));
          break;
          ;
        }

      default:
        {
          return state;
        }
    }
  }();
});

/***/ }),

/***/ "./src/store/store.tea":
/*!*****************************!*\
  !*** ./src/store/store.tea ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var immutable_update_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable-update-values */ "./node_modules/immutable-update-values/index.js");
/* harmony import */ var immutable_update_values__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable_update_values__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_batching__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-batching */ "./node_modules/redux-batching/index.js");
/* harmony import */ var redux_batching__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_batching__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_items_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/items.js */ "./src/items.js");
/* harmony import */ var _store_inventory_tea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @store/inventory.tea */ "./src/store/inventory.tea");
var _obj, _init, _init2, _init3;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }








var batched = function batched(target, name, desc) {
  desc.value = Object(redux_batching__WEBPACK_IMPORTED_MODULE_3__["batchReducer"])(desc.value);
  return desc;
};

var itemList = function itemList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var nullref0;
  return (nullref0 = state) != null ? nullref0 : _core_items_js__WEBPACK_IMPORTED_MODULE_4__["default"];
};

var screen = function screen() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Inventory;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return function () {
    if (action.type === "screen.change") {
      return action.screen;
    } else {
      return state;
    }

    ;
  }();
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])((_obj = {
  inventory: _store_inventory_tea__WEBPACK_IMPORTED_MODULE_5__["default"],
  itemList: itemList,
  screen: screen
}, (_applyDecoratedDescriptor(_obj, "inventory", [batched], (_init = Object.getOwnPropertyDescriptor(_obj, "inventory"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, "itemList", [batched], (_init2 = Object.getOwnPropertyDescriptor(_obj, "itemList"), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, "screen", [batched], (_init3 = Object.getOwnPropertyDescriptor(_obj, "screen"), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj)), _obj))));

/***/ }),

/***/ "./src/style.tea":
/*!***********************!*\
  !*** ./src/style.tea ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssjs */ "./node_modules/ssjs/index.js");
/* harmony import */ var ssjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ssjs__WEBPACK_IMPORTED_MODULE_0__);

var sheet = ssjs__WEBPACK_IMPORTED_MODULE_0___default.a.create();
sheet.addStyles({
  "html, body": {
    padding: 0,
    margin: 0,
    width: "100%",
    height: "100%",
    clear: "both"
  },
  "*": {
    boxSizing: "border-box"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (sheet);

/***/ }),

/***/ "./src/yggdrasil.tea":
/*!***************************!*\
  !*** ./src/yggdrasil.tea ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_store_tea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/store.tea */ "./src/store/store.tea");
/* harmony import */ var _store_actions_tea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/actions.tea */ "./src/store/actions.tea");


/* harmony default export */ __webpack_exports__["default"] = ({
  store: _store_store_tea__WEBPACK_IMPORTED_MODULE_0__["default"],
  items: {
    add: function add(item) {
      return _store_actions_tea__WEBPACK_IMPORTED_MODULE_1__["default"].batch.dispatch(_store_actions_tea__WEBPACK_IMPORTED_MODULE_1__["default"].items.add(item), _store_actions_tea__WEBPACK_IMPORTED_MODULE_1__["default"].screen.change(null));
    }
  },
  screen: {
    change: function change(screen) {
      return _store_actions_tea__WEBPACK_IMPORTED_MODULE_1__["default"].screen.change.dispatch(screen);
    }
  },
  "inventory.update.count": function inventoryUpdateCount(path, value) {
    return _store_actions_tea__WEBPACK_IMPORTED_MODULE_1__["default"].inventory.update.count.dispatch(path, value);
  }
});

/***/ }),

/***/ "dll-reference vendor_d6e5e571475d8870d24d":
/*!**********************************************!*\
  !*** external "vendor_d6e5e571475d8870d24d" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = vendor_d6e5e571475d8870d24d;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hdXRvYmluZC1kZWNvcmF0b3IvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZDZlNWU1NzE0NzVkODg3MGQyNGQiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9kb3JpYy1jb21wb25lbnRzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZDZlNWU1NzE0NzVkODg3MGQyNGQiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9pbW11dGFibGUtdXBkYXRlLXZhbHVlcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2Q2ZTVlNTcxNDc1ZDg4NzBkMjRkIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9kNmU1ZTU3MTQ3NWQ4ODcwZDI0ZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtYmF0Y2hpbmcvZGlzdC9yZWR1eC1iYXRjaGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtYmF0Y2hpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9yZWR1eC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2Q2ZTVlNTcxNDc1ZDg4NzBkMjRkIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvc3Nqcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2Q2ZTVlNTcxNDc1ZDg4NzBkMjRkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQudGVhIiwid2VicGFjazovLy8uL3NyYy9pdGVtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50ZWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbi9JbnZlbnRvcnkudGVhIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW4vSXRlbUxpc3QudGVhIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW4vTWFpbi50ZWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMudGVhIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbnZlbnRvcnkudGVhIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9zdG9yZS50ZWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnRlYSIsIndlYnBhY2s6Ly8vLi9zcmMveWdnZHJhc2lsLnRlYSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2ZW5kb3JfZDZlNWU1NzE0NzVkODg3MGQyNGRcIiJdLCJuYW1lcyI6WyJhZGRTdHlsZXMiLCJkaXNwbGF5IiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwiYm9yZGVyIiwicG9zaXRpb24iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nQm90dG9tIiwiQ2FyZCIsImNoaWxkcmVuIiwicHJvcHMiLCJ0aXRsZSIsIm1haW4iLCJjb250ZW50IiwiYXR0YWNoIiwiaW5pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkV4cGFuZGFibGUiLCJzdGF0ZSIsImV4cGFuZGVkIiwic2V0U3RhdGUiLCJpY29uIiwidG9nZ2xlIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRBdXRvUm93cyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIkl0ZW0iLCJpdGVtIiwicGF0aCIsImFkZE9uZSIsIm5hbWUiLCJndWlkIiwiY291bnQiLCJ3ZWlnaHQiLCJDb250YWluZXIiLCJpdGVtcyIsInNvdXJjZSIsIm1hcCIsImluZm8iLCJpbmRleCIsIkRpc3BsYXkiLCJBcnJheSIsImlzQXJyYXkiLCJpdGVtQWRkU3R5bGUiLCJib3R0b20iLCJyaWdodCIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsIkludmVudG9yeTIiLCJpbnZlbnRvcnkiLCJzdHJ1Y3R1cmUiLCJJdGVtTGlzdCIsImRpYWxvZ2lmeSIsIml0ZW1MaXN0Iiwib25UYXAiLCJhZGQiLCJpZCIsInByaWNlIiwiY29ubmVjdCIsInN0b3JlIiwiUGFyZW50IiwibnVsbHJlZjAiLCJnZXRTdGF0ZSIsInN1YnNjcmliZSIsImRpc3BsYXlOYW1lIiwiTWFpbiIsInNjcmVlbiIsIlNjcmVlbiIsInByb3BMaXN0IiwicmVkdWNlIiwicCIsImJhdGNoIiwiYWN0aW9uIiwicGFzcyIsIm5hbWVzIiwiYXJncyIsImFjdGlvbnMiLCJPYmplY3QiLCJlbnRyaWVzIiwibW9kIiwia2V5IiwidmFsdWUiLCJiIiwiRGF0ZSIsIm5vdyIsIml0ZW1Tb3VyY2UiLCJsaW1pdCIsInR5cGUiLCJiYXRjaGVkIiwidGFyZ2V0IiwiZGVzYyIsIkludmVudG9yeSIsInNoZWV0IiwiY3JlYXRlIiwicGFkZGluZyIsImNsZWFyIiwiYm94U2l6aW5nIiwiZGlzcGF0Y2giLCJjaGFuZ2UiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFF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RUksV0FBUyxFQUZiO0FBR0ksUUFBTTtBQUhWLENBMUJXLEVBK0JYO0FBQ0ksVUFBUSxRQURaO0FBRUksV0FBUyxFQUZiO0FBR0ksUUFBTTtBQUhWLENBL0JXLEVBb0NYO0FBQ0ksVUFBUSxRQURaO0FBRUksV0FBUyxFQUZiO0FBR0ksUUFBTTtBQUhWLENBcENXLEVBeUNYO0FBQ0ksVUFBUSxRQURaO0FBRUksV0FBUyxFQUZiO0FBR0ksUUFBTTtBQUhWLENBekNXLEVBOENYO0FBQ0ksVUFBUSxRQURaO0FBRUksV0FBUyxFQUZiO0FBR0ksUUFBTTtBQUhWLENBOUNXLEVBbURYO0FBQ0ksVUFBUSxTQURaO0FBRUksV0FBUyxFQUZiO0FBR0ksUUFBTTtBQUhWLENBbkRXLEVBd0RYO0FBQ0ksVUFBUSxTQURaO0FBRUksV0FBUyxFQUZiO0FBR0ksUUFBTTtBQUhWLENBeERXLEVBNkRYO0FBQ0ksVUFBUSxTQURaO0FBRUksV0FBUyxFQUZiO0FBR0ksUUFBTTtBQUhWLENBN0RXLEVBa0VYO0FBQ0ksVUFBUSxTQURaO0FBRUksV0FBUyxFQUZiO0FBR0ksUUFBTTtBQUhWLENBbEVXLEVBdUVYO0FBQ0ksVUFBUSxTQURaO0FBRUksV0FBUyxFQUZiO0FBR0ksUUFBTTtBQUhWLENBdkVXLEVBNEVYO0FBQ0ksVUFBUSxTQURaO0FBRUksV0FBUyxFQUZiO0FBR0ksUUFBTTtBQUhWLENBNUVXLEVBaUZYO0FBQ0ksVUFBUSxTQURaO0FBRUksV0FBUyxFQUZiO0FBR0ksUUFBTTtBQUhWLENBakZXLEVBc0ZYO0FBQ0ksVUFBUSxTQURaO0FBRUksV0FBUyxFQUZiO0FBR0ksUUFBTTtBQUhWLENBdEZXLEVBMkZYO0FBQ0ksVUFBUSxTQURaO0FBRUksV0FBUyxFQUZiO0FBR0ksUUFBTTtBQUhWLENBM0ZXLEVBZ0dYO0FBQ0ksVUFBUSxTQURaO0FBRUksV0FBUyxFQUZiO0FBR0ksUUFBTTtBQUhWLENBaEdXLEVBcUdYO0FBQ0ksVUFBUSxTQURaO0FBRUksV0FBUyxHQUZiO0FBR0ksUUFBTTtBQUhWLENBckdXLEVBMEdYO0FBQ0ks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QUErQi9CLE1BQS9CLENBQVA7QUFDQztBQUhPLEdBUE87QUFZZiw0QkFBMEIsOEJBQUN4QyxJQUFELEVBQU91RCxLQUFQLEVBQWlCO0FBQzNDLFdBQU8sMERBQU8sQ0FBQ2hDLFNBQVIsQ0FBa0JrRCxNQUFsQixDQUF5QnJFLEtBQXpCLENBQStCbUUsUUFBL0IsQ0FBd0N2RSxJQUF4QyxFQUE4Q3VELEtBQTlDLENBQVA7QUFDQztBQWRjLENBQWYsRTs7Ozs7Ozs7Ozs7QUNGQSw2QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRlYVwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2Q2ZTVlNTcxNDc1ZDg4NzBkMjRkICovIFwiZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZDZlNWU1NzE0NzVkODg3MGQyNGRcIikpKDEwNCk7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZDZlNWU1NzE0NzVkODg3MGQyNGQgKi8gXCJkbGwtcmVmZXJlbmNlIHZlbmRvcl9kNmU1ZTU3MTQ3NWQ4ODcwZDI0ZFwiKSkoMTIzKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIHZlbmRvcl9kNmU1ZTU3MTQ3NWQ4ODcwZDI0ZCAqLyBcImRsbC1yZWZlcmVuY2UgdmVuZG9yX2Q2ZTVlNTcxNDc1ZDg4NzBkMjRkXCIpKSgxNDUpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2Q2ZTVlNTcxNDc1ZDg4NzBkMjRkICovIFwiZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZDZlNWU1NzE0NzVkODg3MGQyNGRcIikpKDApOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgZ2VuID0gZnVuY3Rpb24gZ2VuKHN0b3JlKSB7XG4gICAgdmFyIGFjdGlvbiA9IGZ1bmN0aW9uIGFjdGlvbih0eXBlKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgZGlzcGF0Y2hlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcblxuICAgICAgICB2YXIgbWV0aG9kID0gZnVuY3Rpb24gbWV0aG9kKCkge1xuICAgICAgICAgICAgdmFyIG9iaiA9IF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlXG4gICAgICAgICAgICB9LCBjb25zdHJ1Y3Rvci5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cykpO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRpc3BhdGNoZXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIG1ldGhvZC5kaXNwYXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChtZXRob2QuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldGhvZDtcbiAgICB9O1xuICAgIHZhciBiYXRjaCA9IGFjdGlvbignYmF0Y2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhY3Rpb25zID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhY3Rpb25zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGlvbnM6IGFjdGlvbnNcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IGFjdGlvbjogYWN0aW9uLCBiYXRjaDogYmF0Y2ggfTtcbn07XG5cbnZhciBiYXRjaFJlZHVjZXIgPSBmdW5jdGlvbiBiYXRjaFJlZHVjZXIoZnVuYykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdiYXRjaCcpIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24uYWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuYyhzdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgICAgIH0sIHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuYyhzdGF0ZSwgYWN0aW9uKTtcbiAgICB9O1xufTtcblxuZXhwb3J0cy5iYXRjaFJlZHVjZXIgPSBiYXRjaFJlZHVjZXI7XG5leHBvcnRzLmdlbiA9IGdlbjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9yZWR1eC1iYXRjaGluZy5qcycpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIHZlbmRvcl9kNmU1ZTU3MTQ3NWQ4ODcwZDI0ZCAqLyBcImRsbC1yZWZlcmVuY2UgdmVuZG9yX2Q2ZTVlNTcxNDc1ZDg4NzBkMjRkXCIpKSgxMjApOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2Q2ZTVlNTcxNDc1ZDg4NzBkMjRkICovIFwiZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZDZlNWU1NzE0NzVkODg3MGQyNGRcIikpKDEyNik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHNoZWV0IGZyb20gXCJAY29yZS9zdHlsZS50ZWFcIjtcbnNoZWV0LmFkZFN0eWxlcyh7XG5cIml0ZW0tY2FyZFwiOiB7XG5kaXNwbGF5OiBcImJsb2NrXCIsXG5tYXJnaW46IDQsXG5iYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbmJveFNoYWRvdzogXCIycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjUpXCIsXG5ib3JkZXI6IFwiMXB4IHNvbGlkIGxpZ2h0Z3JheVwiLFxucG9zaXRpb246IFwicmVsYXRpdmVcIlxufSxcblwiaXRlbS1jYXJkW2NvbnRhaW5lcl1cIjoge1xuYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiXG59LFxuXCJpdGVtLWNhcmQtdGl0bGVcIjoge1xubWFyZ2luOiBcIjJweCAycHggNHB4IDJweFwiLFxuZGlzcGxheTogXCJibG9ja1wiLFxuZm9udFNpemU6IDE4LFxuZm9udFdlaWdodDogXCJib2xkXCJcbn0sXG5cIml0ZW0tY2FyZC1jb250ZW50XCI6IHtcbmRpc3BsYXk6IFwiYmxvY2tcIixcbm1hcmdpbjogOFxufSxcblwiaXRlbS1leHBhbmRhYmxlXCI6IHtcbmRpc3BsYXk6IFwiYmxvY2tcIixcbmJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuYm9yZGVyUmFkaXVzOiAzLFxucGFkZGluZ0JvdHRvbTogNFxufVxufSk7XG5jb25zdCBDYXJkID0gKHtcbmNoaWxkcmVuLFxuLi4ucHJvcHNcbn0pID0+IHtcbnJldHVybiA8aXRlbS1jYXJkIHsuLi5wcm9wc30+XG57Y2hpbGRyZW59XG48L2l0ZW0tY2FyZD47XG59O1xuKENhcmQudGl0bGUgPSAocHJvcHMpID0+IHtcbnJldHVybiA8aXRlbS1jYXJkLXRpdGxlID5cbntwcm9wcy5tYWlufVxuPC9pdGVtLWNhcmQtdGl0bGU+O1xufSk7XG4oQ2FyZC5jb250ZW50ID0gKHtcbmNoaWxkcmVuXG59KSA9PiB7XG5yZXR1cm4gPGl0ZW0tY2FyZC1jb250ZW50ID5cbntjaGlsZHJlbn1cbjwvaXRlbS1jYXJkLWNvbnRlbnQ+O1xufSk7XG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkl0ZW0gMFwiLFxyXG4gICAgICAgIFwicHJpY2VcIjogMCxcclxuICAgICAgICBcImlkXCI6IDBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiSXRlbSAxXCIsXHJcbiAgICAgICAgXCJwcmljZVwiOiA1LFxyXG4gICAgICAgIFwiaWRcIjogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJJdGVtIDJcIixcclxuICAgICAgICBcInByaWNlXCI6IDEwLFxyXG4gICAgICAgIFwiaWRcIjogMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJJdGVtIDNcIixcclxuICAgICAgICBcInByaWNlXCI6IDE1LFxyXG4gICAgICAgIFwiaWRcIjogM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJJdGVtIDRcIixcclxuICAgICAgICBcInByaWNlXCI6IDIwLFxyXG4gICAgICAgIFwiaWRcIjogNFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJJdGVtIDVcIixcclxuICAgICAgICBcInByaWNlXCI6IDI1LFxyXG4gICAgICAgIFwiaWRcIjogNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJJdGVtIDZcIixcclxuICAgICAgICBcInByaWNlXCI6IDMwLFxyXG4gICAgICAgIFwiaWRcIjogNlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJJdGVtIDdcIixcclxuICAgICAgICBcInByaWNlXCI6IDM1LFxyXG4gICAgICAgIFwiaWRcIjogN1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJJdGVtIDhcIixcclxuICAgICAgICBcInByaWNlXCI6IDQwLFxyXG4gICAgICAgIFwiaWRcIjogOFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJJdGVtIDlcIixcclxuICAgICAgICBcInByaWNlXCI6IDQ1LFxyXG4gICAgICAgIFwiaWRcIjogOVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJJdGVtIDEwXCIsXHJcbiAgICAgICAgXCJwcmljZVwiOiA1MCxcclxuICAgICAgICBcImlkXCI6IDEwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkl0ZW0gMTFcIixcclxuICAgICAgICBcInByaWNlXCI6IDU1LFxyXG4gICAgICAgIFwiaWRcIjogMTFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiSXRlbSAxMlwiLFxyXG4gICAgICAgIFwicHJpY2VcIjogNjAsXHJcbiAgICAgICAgXCJpZFwiOiAxMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJJdGVtIDEzXCIsXHJcbiAgICAgICAgXCJwcmljZVwiOiA2NSxcclxuICAgICAgICBcImlkXCI6IDEzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkl0ZW0gMTRcIixcclxuICAgICAgICBcInByaWNlXCI6IDcwLFxyXG4gICAgICAgIFwiaWRcIjogMTRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiSXRlbSAxNVwiLFxyXG4gICAgICAgIFwicHJpY2VcIjogNzUsXHJcbiAgICAgICAgXCJpZFwiOiAxNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJJdGVtIDE2XCIsXHJcbiAgICAgICAgXCJwcmljZVwiOiA4MCxcclxuICAgICAgICBcImlkXCI6IDE2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkl0ZW0gMTdcIixcclxuICAgICAgICBcInByaWNlXCI6IDg1LFxyXG4gICAgICAgIFwiaWRcIjogMTdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiSXRlbSAxOFwiLFxyXG4gICAgICAgIFwicHJpY2VcIjogOTAsXHJcbiAgICAgICAgXCJpZFwiOiAxOFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJJdGVtIDE5XCIsXHJcbiAgICAgICAgXCJwcmljZVwiOiA5NSxcclxuICAgICAgICBcImlkXCI6IDE5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkl0ZW0gMjBcIixcclxuICAgICAgICBcInByaWNlXCI6IDEwMCxcclxuICAgICAgICBcImlkXCI6IDIwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkl0ZW0gMjFcIixcclxuICAgICAgICBcInByaWNlXCI6IDEwNSxcclxuICAgICAgICBcImlkXCI6IDIxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkl0ZW0gMjJcIixcclxuICAgICAgICBcInByaWNlXCI6IDExMCxcclxuICAgICAgICBcImlkXCI6IDIyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkl0ZW0gMjNcIixcclxuICAgICAgICBcInByaWNlXCI6IDExNSxcclxuICAgICAgICBcImlkXCI6IDIzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkl0ZW0gMjRcIixcclxuICAgICAgICBcInByaWNlXCI6IDEyMCxcclxuICAgICAgICBcImlkXCI6IDI0XHJcbiAgICB9XHJcbl07XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgUHVyZUNvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZG9yaWMgZnJvbSBcImRvcmljLWNvbXBvbmVudHNcIjtcbmltcG9ydCBhdXRvYmluZCBmcm9tIFwiYXV0b2JpbmQtZGVjb3JhdG9yXCI7XG5pbXBvcnQgc2hlZXQgZnJvbSBcIkBjb3JlL3N0eWxlLnRlYVwiO1xuaW1wb3J0IE1haW4gZnJvbSBcIkBzY3JlZW4vTWFpbi50ZWFcIjtcbnNoZWV0LmF0dGFjaCgpO1xuZG9yaWMuaW5pdCg8TWFpbiAgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhcHAtcm9vdFwiKSk7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFB1cmVDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGRvcmljIGZyb20gXCJkb3JpYy1jb21wb25lbnRzXCI7XG5pbXBvcnQgYmluZCBmcm9tIFwiYXV0b2JpbmQtZGVjb3JhdG9yXCI7XG5pbXBvcnQgSXRlbUxpc3QgZnJvbSBcIkBzY3JlZW4vSXRlbUxpc3QudGVhXCI7XG5pbXBvcnQgeWdnZHJhc2lsIGZyb20gXCJAY29yZS95Z2dkcmFzaWwudGVhXCI7XG5pbXBvcnQgc2hlZXQgZnJvbSBcIkBjb3JlL3N0eWxlLnRlYVwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIkBjb21wb25lbnQvQ2FyZC50ZWFcIjtcbmNsYXNzIEV4cGFuZGFibGUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbmNvbnN0cnVjdG9yKHByb3BzKSB7XG5zdXBlcihwcm9wcyk7XG4odGhpcy5zdGF0ZSA9IHtcbmV4cGFuZGVkOiBmYWxzZVxufSk7XG59XG5AYmluZFxudG9nZ2xlKCkge1xuY29uc3QgZXhwYW5kZWQgPSAhdGhpcy5zdGF0ZS5leHBhbmRlZDtcbnRoaXMuc2V0U3RhdGUoe1xuZXhwYW5kZWQ6IGV4cGFuZGVkXG59KTtcbn1cbnJlbmRlcigpIHtcbmNvbnN0IFtpY29uLCBkaXNwbGF5XSA9ICh0aGlzLnN0YXRlLmV4cGFuZGVkID09PSB0cnVlKSA/IFtcImlvbi1taW51c1wiLCBcImJsb2NrXCJdIDogW1wiaW9uLXBsdXNcIiwgXCJub25lXCJdO1xucmV0dXJuIDxpdGVtLWV4cGFuZGFibGUgPlxuPGRvcmljLmljb25CdXR0b24gYmxvY2sgZmx1c2ggaWNvbj17aWNvbn0gdGV4dD17dGhpcy5wcm9wcy50aXRsZX0gb25UYXA9e3RoaXMudG9nZ2xlfSAvPlxuPGRpdiBzdHlsZT17e1xuZGlzcGxheTogZGlzcGxheVxufX0+XG57dGhpcy5wcm9wcy5jaGlsZHJlbn1cbjwvZGl2PlxuPC9pdGVtLWV4cGFuZGFibGU+O1xufVxufTtcbnNoZWV0LmFkZFN0eWxlcyh7XG5cIml0ZW0tZ3JpZFwiOiB7XG5kaXNwbGF5OiBcImdyaWRcIixcbmdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiYXV0byBhdXRvIGF1dG8gYXV0b1wiLFxuZ3JpZEF1dG9Sb3dzOiAzMFxufSxcblwiaXRlbS1ncmlkID4gZGl2XCI6IHtcbmRpc3BsYXk6IFwiZmxleFwiLFxuYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbmp1c3RpZnlDb250ZW50OiBcIm1pZGRsZVwiXG59XG59KTtcbmNsYXNzIEl0ZW0gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbnJlbmRlcigpIHtcbmNvbnN0IHtcbml0ZW0sXG5wYXRoXG59ID0gdGhpcy5wcm9wcztcbmNvbnN0IGFkZE9uZSA9ICgpID0+IHtcbnJldHVybiB5Z2dkcmFzaWxbXCJpbnZlbnRvcnkudXBkYXRlLmNvdW50XCJdKHBhdGgsIDEpO1xufTtcbnJldHVybiA8Q2FyZCA+XG48Q2FyZC50aXRsZSBtYWluPXtpdGVtLm5hbWV9IC8+XG48Q2FyZC5jb250ZW50ID5cbjxkaXYgPlxue2l0ZW0uZ3VpZH1cbjwvZGl2PlxuPGl0ZW0tZ3JpZCA+XG48ZGl2ID5cbkNvdW50XG48L2Rpdj5cbjxkaXYgPlxue2l0ZW0uY291bnR9XG48L2Rpdj5cbjxkb3JpYy5idXR0b24gdGV4dD17XCIrMVwifSBmbHVzaCBmbGF0IHByaW1hcnkgb25UYXA9e2FkZE9uZX0gLz5cbjxkb3JpYy5idXR0b24gdGV4dD17XCItMVwifSBmbHVzaCBmbGF0IGRhbmdlciAvPlxuPGRpdiA+XG5XZWlnaHRcbjwvZGl2PlxuPGRpdiA+XG57aXRlbS5jb3VudCAqIGl0ZW0ud2VpZ2h0fVxuPC9kaXY+XG48ZG9yaWMuYnV0dG9uIHRleHQ9e1wiK1hcIn0gZmx1c2ggZmxhdCBwcmltYXJ5IC8+XG48ZG9yaWMuaWNvbkJ1dHRvbiBpY29uPXtcImlvbi10cmFzaC1iXCJ9IGZsdXNoIGZsYXQgZGFuZ2VyIC8+XG48L2l0ZW0tZ3JpZD5cbjwvQ2FyZC5jb250ZW50PlxuPC9DYXJkPjtcbn1cbn07XG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbnJlbmRlcigpIHtcbmNvbnN0IHtcbml0ZW0sXG5pdGVtcyxcbnNvdXJjZSxcbnBhdGhcbn0gPSB0aGlzLnByb3BzO1xucmV0dXJuIDxDYXJkIGNvbnRhaW5lcj5cbjxDYXJkLnRpdGxlIG1haW49e2l0ZW0ubmFtZX0gLz5cbjxDYXJkLmNvbnRlbnQgPlxuPGRpdiA+XG57aXRlbS5ndWlkfVxuPC9kaXY+XG48RXhwYW5kYWJsZSB0aXRsZT17XCJJdGVtc1wifT5cbntpdGVtcy5tYXAoKGluZm8sIGluZGV4KSA9PiB7XG5yZXR1cm4gPERpc3BsYXkgey4uLntcbmluZm86IGluZm8sXG5zb3VyY2U6IHNvdXJjZVxufX0gcGF0aD17YCR7cGF0aH0uJHtpbmRleH1gfSAvPjtcbn0pfVxuPC9FeHBhbmRhYmxlPlxuPC9DYXJkLmNvbnRlbnQ+XG48L0NhcmQ+O1xufVxufTtcbmNsYXNzIERpc3BsYXkgZXh0ZW5kcyBDb21wb25lbnQge1xucmVuZGVyKCkge1xuY29uc3Qge1xuaW5mbyxcbnNvdXJjZSxcbnBhdGhcbn0gPSB0aGlzLnByb3BzO1xuY29uc3QgaXRlbSA9IHNvdXJjZVtpbmZvWzBdXTtcbmlmIChBcnJheS5pc0FycmF5KGluZm9bMV0pID09PSBmYWxzZSkge1xucmV0dXJuIDxJdGVtIHBhdGg9e3BhdGh9IGl0ZW09e3tcbi4uLml0ZW0sXG5jb3VudDogaW5mb1sxXVxufX0gLz47XG59XG5lbHNlIHtcbnJldHVybiA8Q29udGFpbmVyIHsuLi57XG5pdGVtOiBpdGVtLFxuc291cmNlOiBzb3VyY2UsXG5wYXRoOiBwYXRoXG59fSBpdGVtcz17aW5mb1sxXX0gLz47XG59O1xufVxufTtcbmNvbnN0IGl0ZW1BZGRTdHlsZSA9IHtcbnBvc2l0aW9uOiBcImZpeGVkXCIsXG5ib3R0b206IDAsXG5yaWdodDogMCxcbnRvcDogXCJhdXRvXCIsXG5sZWZ0OiBcImF1dG9cIixcbndpZHRoOiA0MCxcbmhlaWdodDogNDBcbn07XG5jbGFzcyBJbnZlbnRvcnkyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5zdGF0aWMgcHJvcExpc3QgPSBbXCJpbnZlbnRvcnlcIl07XG5yZW5kZXIoKSB7XG5jb25zdCB7XG5zdHJ1Y3R1cmUsXG5zb3VyY2Vcbn0gPSB0aGlzLnByb3BzLmludmVudG9yeTtcbnJldHVybiA8ZG9yaWMuYXBwQ29udGFpbmVyIHRpdGxlPXtcIkludmVudG9yeVwifT5cbjxkaXYgc3R5bGU9e3tcbmhlaWdodDogMC4xXG59fSAvPlxue3N0cnVjdHVyZS5tYXAoKGluZm8sIGluZGV4KSA9PiB7XG5yZXR1cm4gPERpc3BsYXkgaW5mbz17aW5mb30gc291cmNlPXtzb3VyY2V9IHBhdGg9e2luZGV4fSAvPjtcbn0pfVxuPGRvcmljLmljb25CdXR0b24gYWN0aW9uIHByaW1hcnkgc3R5bGU9e2l0ZW1BZGRTdHlsZX0gaWNvbj17XCJpb24tcGx1c1wifSAvPlxuPC9kb3JpYy5hcHBDb250YWluZXI+O1xufVxufTtcbmV4cG9ydCBkZWZhdWx0IEludmVudG9yeTI7XG4iLCJpbXBvcnQgUmVhY3QsIHtQdXJlQ29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkb3JpYyBmcm9tIFwiZG9yaWMtY29tcG9uZW50c1wiO1xuaW1wb3J0IHNoZWV0IGZyb20gXCJAY29yZS9zdHlsZS50ZWFcIjtcbmltcG9ydCB5Z2dkcmFzaWwgZnJvbSBcIkBjb3JlL3lnZ2RyYXNpbC50ZWFcIjtcbnNoZWV0LmFkZFN0eWxlcyh7XG5cImRpdi50ZXN0IGRvcmljLWNvbCwgZGl2LnRlc3QgZG9yaWMtYnV0dG9uXCI6IHtcbmhlaWdodDogMzBcbn0sXG5cImRpdi50ZXN0ID4gZG9yaWMtZ3JpZCA+IGRpdjpudGgtY2hpbGQoZXZlbikgPiAqXCI6IHtcbmJhY2tncm91bmRDb2xvcjogXCJsaWdodGdyYXlcIlxufVxufSk7XG5AZG9yaWMuZGlhbG9naWZ5XG5jbGFzcyBJdGVtTGlzdCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuc3RhdGljIHByb3BMaXN0ID0gW1wiaXRlbUxpc3RcIl07XG5yZW5kZXIoKSB7XG5yZXR1cm4gPGRpdiBjbGFzc05hbWU9e1widGVzdFwifT5cbjxkb3JpYy5ncmlkID5cbnt0aGlzLnByb3BzLml0ZW1MaXN0Lm1hcCgoaXRlbSkgPT4ge1xuY29uc3Qgb25UYXAgPSAoKSA9PiB7XG5yZXR1cm4geWdnZHJhc2lsLml0ZW1zLmFkZChpdGVtKTtcbn07XG5yZXR1cm4gPGRpdiBrZXk9e2l0ZW0uaWR9PlxuPGRvcmljLmdyaWQuY29sIHNpemU9ezh9Plxue2l0ZW0ubmFtZX1cbjwvZG9yaWMuZ3JpZC5jb2w+XG48ZG9yaWMuZ3JpZC5jb2wgc2l6ZT17Mn0+XG57aXRlbS5wcmljZX1cbjwvZG9yaWMuZ3JpZC5jb2w+XG48ZG9yaWMuZ3JpZC5jb2wgc2l6ZT17Mn0+XG48ZG9yaWMuaWNvbkJ1dHRvbiBibG9jayBmbHVzaCBpY29uPXtcImlvbi1wbHVzXCJ9IG9uVGFwPXtvblRhcH0gLz5cbjwvZG9yaWMuZ3JpZC5jb2w+XG48L2Rpdj47XG59KX1cbjwvZG9yaWMuZ3JpZD5cbjwvZGl2Pjtcbn1cbn07XG5leHBvcnQgZGVmYXVsdCBJdGVtTGlzdDtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgUHVyZUNvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZG9yaWMgZnJvbSBcImRvcmljLWNvbXBvbmVudHNcIjtcbmltcG9ydCBJbnZlbnRvcnkgZnJvbSBcIkBzY3JlZW4vSW52ZW50b3J5LnRlYVwiO1xuaW1wb3J0IHlnZ2RyYXNpbCBmcm9tIFwiQGNvcmUveWdnZHJhc2lsLnRlYVwiO1xuY29uc3QgY29ubmVjdCA9IChzdG9yZSkgPT4ge1xucmV0dXJuIChQYXJlbnQpID0+IHtcbnZhciBudWxscmVmMDtcblxucmV0dXJuIGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbnN0YXRpYyBkaXNwbGF5TmFtZSA9IGBDb25uZWN0ZWQ8JHsoKG51bGxyZWYwID0gUGFyZW50Lm5hbWUpICE9IG51bGwgPyBudWxscmVmMCA6IFBhcmVudC5kaXNwbGF5TmFtZSl9PmA7XG5jb25zdHJ1Y3Rvcihwcm9wcykge1xuc3VwZXIocHJvcHMpO1xuKHRoaXMuc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpKTtcbnN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG5yZXR1cm4gdGhpcy5zZXRTdGF0ZShzdG9yZS5nZXRTdGF0ZSgpKTtcbn0pO1xufVxucmVuZGVyKCkge1xucmV0dXJuIDxQYXJlbnQgey4uLnRoaXMuc3RhdGV9IC8+O1xufVxufTtcbn07XG59O1xuQGNvbm5lY3QoeWdnZHJhc2lsLnN0b3JlKVxuY2xhc3MgTWFpbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xucmVuZGVyKCkge1xuY29uc3Qge1xuU2NyZWVuPSBJbnZlbnRvcnlcbn0gPSB0aGlzLnByb3BzLnNjcmVlbjtcbmNvbnN0IHByb3BzID0gU2NyZWVuLnByb3BMaXN0LnJlZHVjZSgocCwgbmFtZSkgPT4ge1xucmV0dXJuIHtcbltuYW1lXTogdGhpcy5wcm9wc1tuYW1lXVxufTtcbn0sIHtcblxufSk7XG5yZXR1cm4gPFNjcmVlbiB7Li4ucHJvcHN9IC8+O1xufVxufTtcbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQgdXBkYXRlIGZyb20gXCJpbW11dGFibGUtdXBkYXRlLXZhbHVlc1wiO1xuaW1wb3J0IHtnZW59IGZyb20gXCJyZWR1eC1iYXRjaGluZ1wiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCJAc3RvcmUvc3RvcmUudGVhXCI7XG5jb25zdCB7XG5iYXRjaCxcbmFjdGlvblxufSA9IGdlbihzdG9yZSk7XG5jb25zdCBwYXNzID0gKC4uLm5hbWVzKSA9PiB7XG5yZXR1cm4gKC4uLmFyZ3MpID0+IHtcbnJldHVybiBuYW1lcy5yZWR1Y2UoKGl0ZW0sIG5hbWUsIGluZGV4KSA9PiB7XG5yZXR1cm4ge1xuLi4uaXRlbSxcbltuYW1lXTogYXJnc1tpbmRleF1cbn07XG59LCB7XG5cbn0pO1xufTtcbn07XG5jb25zdCBhY3Rpb25zID0gT2JqZWN0LmVudHJpZXMoe1xuXCJpdGVtcy5hZGRcIjogcGFzcyhcIml0ZW1cIiksXG5cImludmVudG9yeS51cGRhdGUuY291bnRcIjogcGFzcyhcInBhdGhcIiwgXCJ2YWx1ZVwiKSxcblwic2NyZWVuLmNoYW5nZVwiOiBwYXNzKFwic2NyZWVuXCIpXG59KS5yZWR1Y2UoKG1vZCwgW2tleSwgdmFsdWVdKSA9PiB7XG5yZXR1cm4ge1xuLi4ubW9kLFxuW2Ake2tleX0uJHNldGBdOiBhY3Rpb24oa2V5LCB2YWx1ZSlcbn07XG59LCB7XG5cbn0pO1xuZXhwb3J0IGRlZmF1bHQgdXBkYXRlKHtcbmJhdGNoOiBiYXRjaFxufSwgYWN0aW9ucywgdHJ1ZSk7XG4iLCJpbXBvcnQgdXBkYXRlIGZyb20gXCJpbW11dGFibGUtdXBkYXRlLXZhbHVlc1wiO1xuY29uc3QgYiA9IERhdGUubm93KCk7XG5jb25zdCBpdGVtU291cmNlID0ge1xuc291cmNlOiB7XG5bYiArIDFdOiB7XG5uYW1lOiBcIkhlcmJzXCIsXG53ZWlnaHQ6IDAuMjVcbn0sXG5bYiArIDJdOiB7XG5uYW1lOiBcIlN3b3JkXCIsXG53ZWlnaHQ6IDJcbn0sXG5bYiArIDNdOiB7XG5uYW1lOiBcIkJhY2twYWNrXCIsXG53ZWlnaHQ6IG51bGwsXG5saW1pdDogbnVsbFxufSxcbltiICsgNF06IHtcbm5hbWU6IFwiQ2FuZGxlXCIsXG53ZWlnaHQ6IDAuNVxufSxcbltiICsgNV06IHtcbm5hbWU6IFwiQmFnIG9mIEhvbGRpbmdcIixcbndlaWdodDogNSxcbmxpbWl0OiA1MDBcbn0sXG5bYiArIDZdOiB7XG5uYW1lOiBcIktvYm9sZCBTa3VsbFwiLFxud2VpZ2h0OiAwXG59XG59LFxuc3RydWN0dXJlOiBbW2IgKyAxLCA1XSwgW2IgKyAyLCAyXSwgW2IgKyAzLCBbW2IgKyA0LCAzXSwgW2IgKyA1LCBbW2IgKyA2LCAyXV1dXV1dXG59O1xuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaXRlbVNvdXJjZSwgYWN0aW9uKSA9PiB7XG5yZXR1cm4gKCgpID0+e3N3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbmNhc2UgXCJpbnZlbnRvcnkudXBkYXRlLmNvdW50XCI6IHtcbnJldHVybiB1cGRhdGUoc3RhdGUsIHtcbltgc3RydWN0dXJlLiR7YWN0aW9uLnBhdGh9LjEuJGFwcGx5YF06ICh2YWx1ZSkgPT4ge1xucmV0dXJuIHZhbHVlICsgYWN0aW9uLnZhbHVlO1xufVxufSk7XG5icmVhazs7XG59XG5kZWZhdWx0OiB7XG5yZXR1cm4gc3RhdGU7XG59XG59fSkoKTtcbn07XG4iLCJpbXBvcnQge1B1cmVDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB1cGRhdGUgZnJvbSBcImltbXV0YWJsZS11cGRhdGUtdmFsdWVzXCI7XG5pbXBvcnQge2JhdGNoUmVkdWNlcn0gZnJvbSBcInJlZHV4LWJhdGNoaW5nXCI7XG5pbXBvcnQgaXRlbVNvdXJjZSBmcm9tIFwiQGNvcmUvaXRlbXMuanNcIjtcbmltcG9ydCBpbnZlbnRvcnkgZnJvbSBcIkBzdG9yZS9pbnZlbnRvcnkudGVhXCI7XG5jb25zdCBiYXRjaGVkID0gKHRhcmdldCwgbmFtZSwgZGVzYykgPT4ge1xuKGRlc2MudmFsdWUgPSBiYXRjaFJlZHVjZXIoZGVzYy52YWx1ZSkpO1xucmV0dXJuIGRlc2M7XG59O1xuY29uc3QgaXRlbUxpc3QgPSAoc3RhdGUgPSBudWxsLCBhY3Rpb24pID0+IHtcbnZhciBudWxscmVmMDtcblxucmV0dXJuICgobnVsbHJlZjAgPSBzdGF0ZSkgIT0gbnVsbCA/IG51bGxyZWYwIDogaXRlbVNvdXJjZSk7XG59O1xuY29uc3Qgc2NyZWVuID0gKHN0YXRlID0gSW52ZW50b3J5LCBhY3Rpb24pID0+IHtcbnJldHVybiAoKCkgPT4ge1xuaWYgKGFjdGlvbi50eXBlID09PSBcInNjcmVlbi5jaGFuZ2VcIikge1xucmV0dXJuIGFjdGlvbi5zY3JlZW47XG59XG5lbHNlIHtcbnJldHVybiBzdGF0ZTtcbn07XG59KSgpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKGNvbWJpbmVSZWR1Y2Vycyh7XG5AYmF0Y2hlZFxuaW52ZW50b3J5OiBpbnZlbnRvcnksXG5AYmF0Y2hlZFxuaXRlbUxpc3Q6IGl0ZW1MaXN0LFxuQGJhdGNoZWRcbnNjcmVlbjogc2NyZWVuXG59KSk7XG4iLCJpbXBvcnQgc3NqcyBmcm9tIFwic3Nqc1wiO1xuY29uc3Qgc2hlZXQgPSBzc2pzLmNyZWF0ZSgpO1xuc2hlZXQuYWRkU3R5bGVzKHtcblwiaHRtbCwgYm9keVwiOiB7XG5wYWRkaW5nOiAwLFxubWFyZ2luOiAwLFxud2lkdGg6IFwiMTAwJVwiLFxuaGVpZ2h0OiBcIjEwMCVcIixcbmNsZWFyOiBcImJvdGhcIlxufSxcblwiKlwiOiB7XG5ib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiXG59XG59KTtcbmV4cG9ydCBkZWZhdWx0IHNoZWV0O1xuIiwiaW1wb3J0IHN0b3JlIGZyb20gXCJAc3RvcmUvc3RvcmUudGVhXCI7XG5pbXBvcnQgYWN0aW9ucyBmcm9tIFwiQHN0b3JlL2FjdGlvbnMudGVhXCI7XG5leHBvcnQgZGVmYXVsdCB7XG5zdG9yZTogc3RvcmUsXG5pdGVtczoge1xuYWRkOiAoaXRlbSkgPT4ge1xucmV0dXJuIGFjdGlvbnMuYmF0Y2guZGlzcGF0Y2goYWN0aW9ucy5pdGVtcy5hZGQoaXRlbSksIGFjdGlvbnMuc2NyZWVuLmNoYW5nZShudWxsKSk7XG59XG59LFxuc2NyZWVuOiB7XG5jaGFuZ2U6IChzY3JlZW4pID0+IHtcbnJldHVybiBhY3Rpb25zLnNjcmVlbi5jaGFuZ2UuZGlzcGF0Y2goc2NyZWVuKTtcbn1cbn0sXG5cImludmVudG9yeS51cGRhdGUuY291bnRcIjogKHBhdGgsIHZhbHVlKSA9PiB7XG5yZXR1cm4gYWN0aW9ucy5pbnZlbnRvcnkudXBkYXRlLmNvdW50LmRpc3BhdGNoKHBhdGgsIHZhbHVlKTtcbn1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHZlbmRvcl9kNmU1ZTU3MTQ3NWQ4ODcwZDI0ZDsiXSwic291cmNlUm9vdCI6IiJ9