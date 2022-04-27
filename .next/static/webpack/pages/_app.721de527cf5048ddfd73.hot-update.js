webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/customer/reducer.js":
/*!***********************************!*\
  !*** ./store/customer/reducer.js ***!
  \***********************************/
/*! exports provided: initialState, initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/customer/action.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  merchants: null,
  merchantPostLoading: true,
  merchantGetLoading: true,
  merchantDeleteLoading: true,
  deletedMsg: null
};
var initState = {
  isLoggedIn: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    // case actionTypes.merchants_POST_SUCCESS:
    // 	return {
    // 		...state,
    // 		...{ merchantPostLoading: false },
    // 	};
    case _action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_ALL_MERCHANTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        merchants: action.merchants,
        merchantGetLoading: false
      });
    // case actionTypes.merchants_DELETE_SUCCESS:
    // 	return {
    // 		...state,
    // 		...{ deletedMsg: action.deletedMsg, merchantDeleteLoading: false },
    // 	};

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./store/rootReducer.js":
/*!******************************!*\
  !*** ./store/rootReducer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/reducer */ "./store/auth/reducer.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/reducer */ "./store/app/reducer.js");
/* harmony import */ var _category_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category/reducer */ "./store/category/reducer.js");
/* harmony import */ var _product_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/reducer */ "./store/product/reducer.js");
/* harmony import */ var _bid_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bid/reducer */ "./store/bid/reducer.js");
/* harmony import */ var _merchant_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./merchant/reducer */ "./store/merchant/reducer.js");
/* harmony import */ var _customer_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer/reducer */ "./store/customer/reducer.js");








/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  app: _app_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  category: _category_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  product: _product_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  bid: _bid_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  merchant: _merchant_reducer__WEBPACK_IMPORTED_MODULE_6__["default"]
}));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY3VzdG9tZXIvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcm9vdFJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWVyY2hhbnRzIiwibWVyY2hhbnRQb3N0TG9hZGluZyIsIm1lcmNoYW50R2V0TG9hZGluZyIsIm1lcmNoYW50RGVsZXRlTG9hZGluZyIsImRlbGV0ZWRNc2ciLCJpbml0U3RhdGUiLCJpc0xvZ2dlZEluIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImFjdGlvblR5cGVzIiwiR0VUX0FMTF9NRVJDSEFOVFNfU1VDQ0VTUyIsImNvbWJpbmVSZWR1Y2VycyIsImF1dGgiLCJhcHAiLCJjYXRlZ29yeSIsInByb2R1Y3QiLCJiaWQiLCJtZXJjaGFudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDM0JDLFdBQVMsRUFBRSxJQURnQjtBQUUzQkMscUJBQW1CLEVBQUUsSUFGTTtBQUczQkMsb0JBQWtCLEVBQUUsSUFITztBQUkzQkMsdUJBQXFCLEVBQUUsSUFKSTtBQUszQkMsWUFBVSxFQUFFO0FBTGUsQ0FBckI7QUFPQSxJQUFNQyxTQUFTLEdBQUc7QUFDeEJDLFlBQVUsRUFBRTtBQURZLENBQWxCOztBQUlQLFNBQVNDLE9BQVQsR0FBK0M7QUFBQSxNQUE5QkMsS0FBOEIsdUVBQXRCVCxZQUFzQjtBQUFBLE1BQVJVLE1BQVE7O0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxTQUFLQyxtREFBVyxDQUFDQyx5QkFBakI7QUFDQyw2Q0FDSUosS0FESixHQUVJO0FBQUVSLGlCQUFTLEVBQUVTLE1BQU0sQ0FBQ1QsU0FBcEI7QUFBK0JFLDBCQUFrQixFQUFFO0FBQW5ELE9BRko7QUFLRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0MsYUFBT00sS0FBUDtBQXBCRjtBQXNCQTs7QUFFY0Qsc0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWVNLDRIQUFlLENBQUM7QUFDM0JDLE1BQUksRUFBSkEscURBRDJCO0FBRTNCQyxLQUFHLEVBQUhBLG9EQUYyQjtBQUczQkMsVUFBUSxFQUFSQSx5REFIMkI7QUFJM0JDLFNBQU8sRUFBUEEsd0RBSjJCO0FBSzNCQyxLQUFHLEVBQUhBLG9EQUwyQjtBQU0zQkMsVUFBUSxFQUFSQSx5REFBUUE7QUFObUIsQ0FBRCxDQUE5QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjcyMWRlNTI3Y2Y1MDQ4ZGRmZDczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gXCIuL2FjdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRtZXJjaGFudHM6IG51bGwsXHJcblx0bWVyY2hhbnRQb3N0TG9hZGluZzogdHJ1ZSxcclxuXHRtZXJjaGFudEdldExvYWRpbmc6IHRydWUsXHJcblx0bWVyY2hhbnREZWxldGVMb2FkaW5nOiB0cnVlLFxyXG5cdGRlbGV0ZWRNc2c6IG51bGwsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBpbml0U3RhdGUgPSB7XHJcblx0aXNMb2dnZWRJbjogZmFsc2UsXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHQvLyBjYXNlIGFjdGlvblR5cGVzLm1lcmNoYW50c19QT1NUX1NVQ0NFU1M6XHJcblx0XHQvLyBcdHJldHVybiB7XHJcblx0XHQvLyBcdFx0Li4uc3RhdGUsXHJcblx0XHQvLyBcdFx0Li4ueyBtZXJjaGFudFBvc3RMb2FkaW5nOiBmYWxzZSB9LFxyXG5cdFx0Ly8gXHR9O1xyXG5cdFx0XHRcclxuXHRcdGNhc2UgYWN0aW9uVHlwZXMuR0VUX0FMTF9NRVJDSEFOVFNfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHQuLi57IG1lcmNoYW50czogYWN0aW9uLm1lcmNoYW50cywgbWVyY2hhbnRHZXRMb2FkaW5nOiBmYWxzZSB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRcclxuXHRcdC8vIGNhc2UgYWN0aW9uVHlwZXMubWVyY2hhbnRzX0RFTEVURV9TVUNDRVNTOlxyXG5cdFx0Ly8gXHRyZXR1cm4ge1xyXG5cdFx0Ly8gXHRcdC4uLnN0YXRlLFxyXG5cdFx0Ly8gXHRcdC4uLnsgZGVsZXRlZE1zZzogYWN0aW9uLmRlbGV0ZWRNc2csIG1lcmNoYW50RGVsZXRlTG9hZGluZzogZmFsc2UgfSxcclxuXHRcdC8vIFx0fTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBhdXRoIGZyb20gJy4vYXV0aC9yZWR1Y2VyJztcbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAvcmVkdWNlcic7XG5pbXBvcnQgY2F0ZWdvcnkgZnJvbSAnLi9jYXRlZ29yeS9yZWR1Y2VyJztcbmltcG9ydCBwcm9kdWN0IGZyb20gJy4vcHJvZHVjdC9yZWR1Y2VyJztcbmltcG9ydCBiaWQgZnJvbSAnLi9iaWQvcmVkdWNlcic7XG5pbXBvcnQgbWVyY2hhbnQgZnJvbSAnLi9tZXJjaGFudC9yZWR1Y2VyJztcbmltcG9ydCBjdXN0b21lciBmcm9tICcuL2N1c3RvbWVyL3JlZHVjZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGF1dGgsXG4gICAgYXBwLFxuICAgIGNhdGVnb3J5LFxuICAgIHByb2R1Y3QsXG4gICAgYmlkLFxuICAgIG1lcmNoYW50XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=