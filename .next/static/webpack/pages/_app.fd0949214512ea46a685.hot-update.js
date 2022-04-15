webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/product/reducer.js":
/*!**********************************!*\
  !*** ./store/product/reducer.js ***!
  \**********************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/product/action.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  product: null,
  productPostLoading: true,
  productGetLoading: true,
  productDeleteLoading: true,
  deletedMsg: null
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].PRODUCT_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        productPostLoading: false
      });

    case _action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].MERCHANT_PRODUCT_GET_SUCCESS:
      // console.log(action.product+ " reducer")
      return _objectSpread(_objectSpread({}, state), {
        product: action.merchantProducts,
        productGetLoading: false
      });

    case _action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].PRODUCT_DELETE_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        deletedMsg: action.deletedMsg,
        productDeleteLoading: false
      });

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcHJvZHVjdC9yZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInByb2R1Y3QiLCJwcm9kdWN0UG9zdExvYWRpbmciLCJwcm9kdWN0R2V0TG9hZGluZyIsInByb2R1Y3REZWxldGVMb2FkaW5nIiwiZGVsZXRlZE1zZyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJhY3Rpb25UeXBlcyIsIlBST0RVQ1RfUE9TVF9TVUNDRVNTIiwiTUVSQ0hBTlRfUFJPRFVDVF9HRVRfU1VDQ0VTUyIsIm1lcmNoYW50UHJvZHVjdHMiLCJQUk9EVUNUX0RFTEVURV9TVUNDRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3RCQyxTQUFPLEVBQUUsSUFEYTtBQUUzQkMsb0JBQWtCLEVBQUUsSUFGTztBQUczQkMsbUJBQWlCLEVBQUUsSUFIUTtBQUkzQkMsc0JBQW9CLEVBQUUsSUFKSztBQUszQkMsWUFBVSxFQUFFO0FBTGUsQ0FBckI7O0FBUVAsU0FBU0MsT0FBVCxHQUErQztBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEJQLFlBQXNCO0FBQUEsTUFBUlEsTUFBUTs7QUFDOUMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0MsU0FBS0MsbURBQVcsQ0FBQ0Msb0JBQWpCO0FBQ0MsNkNBQ0lKLEtBREosR0FFSTtBQUFFTCwwQkFBa0IsRUFBRTtBQUF0QixPQUZKOztBQUtELFNBQUtRLG1EQUFXLENBQUNFLDRCQUFqQjtBQUNnQjtBQUNmLDZDQUNJTCxLQURKLEdBRUk7QUFBRU4sZUFBTyxFQUFFTyxNQUFNLENBQUNLLGdCQUFsQjtBQUFvQ1YseUJBQWlCLEVBQUU7QUFBdkQsT0FGSjs7QUFLRCxTQUFLTyxtREFBVyxDQUFDSSxzQkFBakI7QUFDQyw2Q0FDSVAsS0FESixHQUVJO0FBQUVGLGtCQUFVLEVBQUVHLE1BQU0sQ0FBQ0gsVUFBckI7QUFBaUNELDRCQUFvQixFQUFFO0FBQXZELE9BRko7O0FBS0Q7QUFDQyxhQUFPRyxLQUFQO0FBckJGO0FBdUJBOztBQUVjRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmZkMDk0OTIxNDUxMmVhNDZhNjg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gXCIuL2FjdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgcHJvZHVjdDogbnVsbCxcclxuXHRwcm9kdWN0UG9zdExvYWRpbmc6IHRydWUsXHJcblx0cHJvZHVjdEdldExvYWRpbmc6IHRydWUsXHJcblx0cHJvZHVjdERlbGV0ZUxvYWRpbmc6IHRydWUsXHJcblx0ZGVsZXRlZE1zZzogbnVsbCxcclxufVxyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBhY3Rpb25UeXBlcy5QUk9EVUNUX1BPU1RfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHQuLi57IHByb2R1Y3RQb3N0TG9hZGluZzogZmFsc2UgfSxcclxuXHRcdFx0fTtcclxuXHRcdFx0XHJcblx0XHRjYXNlIGFjdGlvblR5cGVzLk1FUkNIQU5UX1BST0RVQ1RfR0VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGlvbi5wcm9kdWN0KyBcIiByZWR1Y2VyXCIpXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Li4ueyBwcm9kdWN0OiBhY3Rpb24ubWVyY2hhbnRQcm9kdWN0cywgcHJvZHVjdEdldExvYWRpbmc6IGZhbHNlIH0sXHJcblx0XHRcdH07XHJcblx0XHRcdFxyXG5cdFx0Y2FzZSBhY3Rpb25UeXBlcy5QUk9EVUNUX0RFTEVURV9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdC4uLnsgZGVsZXRlZE1zZzogYWN0aW9uLmRlbGV0ZWRNc2csIHByb2R1Y3REZWxldGVMb2FkaW5nOiBmYWxzZSB9LFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==