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
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/category/action.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


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
    case _action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CATEGORY_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        catePostLoading: false
      });

    case _action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CATEGORY_GET_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        category: action.categories,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY2F0ZWdvcnkvcmVkdWNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJjYXRlZ29yeSIsImNhdGVQb3N0TG9hZGluZyIsImNhdGVHZXRMb2FkaW5nIiwiaW5pdFN0YXRlIiwiaXNMb2dnZWRJbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJhY3Rpb25UeXBlcyIsIkNBVEVHT1JZX1BPU1RfU1VDQ0VTUyIsIkNBVEVHT1JZX0dFVF9TVUNDRVNTIiwiY2F0ZWdvcmllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDM0JDLFVBQVEsRUFBRSxJQURpQjtBQUUzQkMsaUJBQWUsRUFBRSxJQUZVO0FBRzNCQyxnQkFBYyxFQUFFO0FBSFcsQ0FBckI7QUFLQSxJQUFNQyxTQUFTLEdBQUc7QUFDeEJDLFlBQVUsRUFBRTtBQURZLENBQWxCOztBQUlQLFNBQVNDLE9BQVQsR0FBK0M7QUFBQSxNQUE5QkMsS0FBOEIsdUVBQXRCUCxZQUFzQjtBQUFBLE1BQVJRLE1BQVE7O0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNDLFNBQUtDLG1EQUFXLENBQUNDLHFCQUFqQjtBQUNDLDZDQUNJSixLQURKLEdBRUk7QUFBRUwsdUJBQWUsRUFBRTtBQUFuQixPQUZKOztBQUlELFNBQUtRLG1EQUFXLENBQUNFLG9CQUFqQjtBQUVDLDZDQUNJTCxLQURKLEdBRUk7QUFBRU4sZ0JBQVEsRUFBRU8sTUFBTSxDQUFDSyxVQUFuQjtBQUErQlYsc0JBQWMsRUFBRTtBQUEvQyxPQUZKOztBQUlEO0FBQ0MsYUFBT0ksS0FBUDtBQWJGO0FBZUE7O0FBRWNELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZGE2ZjAwMTBjNzM5NjMzNTU0OGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdGNhdGVnb3J5OiBudWxsLFxyXG5cdGNhdGVQb3N0TG9hZGluZzogdHJ1ZSxcclxuXHRjYXRlR2V0TG9hZGluZzogdHJ1ZSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGluaXRTdGF0ZSA9IHtcclxuXHRpc0xvZ2dlZEluOiBmYWxzZSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgYWN0aW9uVHlwZXMuQ0FURUdPUllfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdC4uLnsgY2F0ZVBvc3RMb2FkaW5nOiBmYWxzZSB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBhY3Rpb25UeXBlcy5DQVRFR09SWV9HRVRfU1VDQ0VTUzpcclxuXHRcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHQuLi57IGNhdGVnb3J5OiBhY3Rpb24uY2F0ZWdvcmllcywgY2F0ZUdldExvYWRpbmc6IGZhbHNlIH0sXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9