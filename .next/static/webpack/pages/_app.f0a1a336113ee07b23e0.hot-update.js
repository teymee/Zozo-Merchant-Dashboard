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
  merchantscustomermerchantPostLoading: true,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY3VzdG9tZXIvcmVkdWNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtZXJjaGFudHNjdXN0b21lcm1lcmNoYW50UG9zdExvYWRpbmciLCJtZXJjaGFudEdldExvYWRpbmciLCJtZXJjaGFudERlbGV0ZUxvYWRpbmciLCJkZWxldGVkTXNnIiwiaW5pdFN0YXRlIiwiaXNMb2dnZWRJbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJhY3Rpb25UeXBlcyIsIkdFVF9BTExfTUVSQ0hBTlRTX1NVQ0NFU1MiLCJtZXJjaGFudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQzNCQyxzQ0FBb0MsRUFBRSxJQURYO0FBRTNCQyxvQkFBa0IsRUFBRSxJQUZPO0FBRzNCQyx1QkFBcUIsRUFBRSxJQUhJO0FBSTNCQyxZQUFVLEVBQUU7QUFKZSxDQUFyQjtBQU1BLElBQU1DLFNBQVMsR0FBRztBQUN4QkMsWUFBVSxFQUFFO0FBRFksQ0FBbEI7O0FBSVAsU0FBU0MsT0FBVCxHQUErQztBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEJSLFlBQXNCO0FBQUEsTUFBUlMsTUFBUTs7QUFDOUMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLFNBQUtDLG1EQUFXLENBQUNDLHlCQUFqQjtBQUNDLDZDQUNJSixLQURKLEdBRUk7QUFBRUssaUJBQVMsRUFBRUosTUFBTSxDQUFDSSxTQUFwQjtBQUErQlgsMEJBQWtCLEVBQUU7QUFBbkQsT0FGSjtBQUtEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQyxhQUFPTSxLQUFQO0FBcEJGO0FBc0JBOztBQUVjRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmYwYTFhMzM2MTEzZWUwN2IyM2UwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gXCIuL2FjdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRtZXJjaGFudHNjdXN0b21lcm1lcmNoYW50UG9zdExvYWRpbmc6IHRydWUsXHJcblx0bWVyY2hhbnRHZXRMb2FkaW5nOiB0cnVlLFxyXG5cdG1lcmNoYW50RGVsZXRlTG9hZGluZzogdHJ1ZSxcclxuXHRkZWxldGVkTXNnOiBudWxsLFxyXG59O1xyXG5leHBvcnQgY29uc3QgaW5pdFN0YXRlID0ge1xyXG5cdGlzTG9nZ2VkSW46IGZhbHNlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Ly8gY2FzZSBhY3Rpb25UeXBlcy5tZXJjaGFudHNfUE9TVF9TVUNDRVNTOlxyXG5cdFx0Ly8gXHRyZXR1cm4ge1xyXG5cdFx0Ly8gXHRcdC4uLnN0YXRlLFxyXG5cdFx0Ly8gXHRcdC4uLnsgbWVyY2hhbnRQb3N0TG9hZGluZzogZmFsc2UgfSxcclxuXHRcdC8vIFx0fTtcclxuXHRcdFx0XHJcblx0XHRjYXNlIGFjdGlvblR5cGVzLkdFVF9BTExfTUVSQ0hBTlRTX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Li4ueyBtZXJjaGFudHM6IGFjdGlvbi5tZXJjaGFudHMsIG1lcmNoYW50R2V0TG9hZGluZzogZmFsc2UgfSxcclxuXHRcdFx0fTtcclxuXHRcdFx0XHJcblx0XHQvLyBjYXNlIGFjdGlvblR5cGVzLm1lcmNoYW50c19ERUxFVEVfU1VDQ0VTUzpcclxuXHRcdC8vIFx0cmV0dXJuIHtcclxuXHRcdC8vIFx0XHQuLi5zdGF0ZSxcclxuXHRcdC8vIFx0XHQuLi57IGRlbGV0ZWRNc2c6IGFjdGlvbi5kZWxldGVkTXNnLCBtZXJjaGFudERlbGV0ZUxvYWRpbmc6IGZhbHNlIH0sXHJcblx0XHQvLyBcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==