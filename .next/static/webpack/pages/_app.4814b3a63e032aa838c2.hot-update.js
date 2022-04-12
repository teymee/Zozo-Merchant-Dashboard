webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/category/reducer.js":
/*!***********************************!*\
  !*** ./store/category/reducer.js ***!
  \***********************************/
/*! exports provided: initialState, initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./store/category/action.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  category: null,
  catePostLoading: true,
  cateGetLoading: true
};
var initState = {
  isLoggedIn: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].CATEGORY_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        catePostLoading: false
      });

    case _action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].CATEGORY_GET_SUCCESS:
      console.log(action.categories);
      return _objectSpread(_objectSpread({}, state), {
        category: Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(action.categories),
        cateGetLoading: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY2F0ZWdvcnkvcmVkdWNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJjYXRlZ29yeSIsImNhdGVQb3N0TG9hZGluZyIsImNhdGVHZXRMb2FkaW5nIiwiaW5pdFN0YXRlIiwiaXNMb2dnZWRJbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJhY3Rpb25UeXBlcyIsIkNBVEVHT1JZX1BPU1RfU1VDQ0VTUyIsIkNBVEVHT1JZX0dFVF9TVUNDRVNTIiwiY29uc29sZSIsImxvZyIsImNhdGVnb3JpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDM0JDLFVBQVEsRUFBRSxJQURpQjtBQUUzQkMsaUJBQWUsRUFBRSxJQUZVO0FBRzNCQyxnQkFBYyxFQUFFO0FBSFcsQ0FBckI7QUFLQSxJQUFNQyxTQUFTLEdBQUc7QUFDeEJDLFlBQVUsRUFBRTtBQURZLENBQWxCOztBQUlQLFNBQVNDLE9BQVQsR0FBK0M7QUFBQSxNQUE5QkMsS0FBOEIsdUVBQXRCUCxZQUFzQjtBQUFBLE1BQVJRLE1BQVE7O0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNDLFNBQUtDLG1EQUFXLENBQUNDLHFCQUFqQjtBQUNDLDZDQUNJSixLQURKLEdBRUk7QUFBRUwsdUJBQWUsRUFBRTtBQUFuQixPQUZKOztBQUlELFNBQUtRLG1EQUFXLENBQUNFLG9CQUFqQjtBQUNDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWU4sTUFBTSxDQUFDTyxVQUFuQjtBQUNBLDZDQUNJUixLQURKLEdBRUk7QUFBRU4sZ0JBQVEsRUFBRSw4TEFBSU8sTUFBTSxDQUFDTyxVQUFiLENBQVY7QUFBb0NaLHNCQUFjLEVBQUU7QUFBcEQsT0FGSjs7QUFJRDtBQUNDLGFBQU9JLEtBQVA7QUFiRjtBQWVBOztBQUVjRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQ4MTRiM2E2M2UwMzJhYTgzOGMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gXCIuL2FjdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRjYXRlZ29yeTogbnVsbCxcclxuXHRjYXRlUG9zdExvYWRpbmc6IHRydWUsXHJcblx0Y2F0ZUdldExvYWRpbmc6IHRydWUsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBpbml0U3RhdGUgPSB7XHJcblx0aXNMb2dnZWRJbjogZmFsc2UsXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIGFjdGlvblR5cGVzLkNBVEVHT1JZX1BPU1RfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHQuLi57IGNhdGVQb3N0TG9hZGluZzogZmFsc2UgfSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgYWN0aW9uVHlwZXMuQ0FURUdPUllfR0VUX1NVQ0NFU1M6XHJcblx0XHRcdGNvbnNvbGUubG9nKGFjdGlvbi5jYXRlZ29yaWVzKTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHQuLi57IGNhdGVnb3J5OiBbLi4uYWN0aW9uLmNhdGVnb3JpZXNdLCBjYXRlR2V0TG9hZGluZzogZmFsc2UgfSxcclxuXHRcdFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=