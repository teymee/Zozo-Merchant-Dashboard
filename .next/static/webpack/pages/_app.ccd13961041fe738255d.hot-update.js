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
  category: [],
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
      console.log(action.categories);
      return _objectSpread(_objectSpread({}, state), {
        category: action.categories,
        cateGetLoading: false
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY2F0ZWdvcnkvcmVkdWNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJjYXRlZ29yeSIsImNhdGVQb3N0TG9hZGluZyIsImNhdGVHZXRMb2FkaW5nIiwiaW5pdFN0YXRlIiwiaXNMb2dnZWRJbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJhY3Rpb25UeXBlcyIsIkNBVEVHT1JZX1BPU1RfU1VDQ0VTUyIsIkNBVEVHT1JZX0dFVF9TVUNDRVNTIiwiY29uc29sZSIsImxvZyIsImNhdGVnb3JpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3RCQyxVQUFRLEVBQUUsRUFEWTtBQUV0QkMsaUJBQWUsRUFBRSxJQUZLO0FBR3RCQyxnQkFBYyxFQUFFO0FBSE0sQ0FBckI7QUFLQSxJQUFNQyxTQUFTLEdBQUc7QUFDbkJDLFlBQVUsRUFBRTtBQURPLENBQWxCOztBQUlOLFNBQVNDLE9BQVQsR0FBOEM7QUFBQSxNQUE3QkMsS0FBNkIsdUVBQXJCUCxZQUFxQjtBQUFBLE1BQVBRLE1BQU87O0FBRXpDLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNNLFNBQUtDLG1EQUFXLENBQUNDLHFCQUFqQjtBQUNNLDZDQUNTSixLQURULEdBRVM7QUFBQ0wsdUJBQWUsRUFBQztBQUFqQixPQUZUOztBQUlBLFNBQUtRLG1EQUFXLENBQUNFLG9CQUFqQjtBQUNNQyxhQUFPLENBQUNDLEdBQVIsQ0FBWU4sTUFBTSxDQUFDTyxVQUFuQjtBQUNBLDZDQUNTUixLQURULEdBRVM7QUFBQ04sZ0JBQVEsRUFBQ08sTUFBTSxDQUFDTyxVQUFqQjtBQUE4Qlosc0JBQWMsRUFBRTtBQUE5QyxPQUZUO0FBUmxCO0FBYUw7O0FBRWNHLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuY2NkMTM5NjEwNDFmZTczODI1NWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICBjYXRlZ29yeTogW10sXHJcbiAgICAgIGNhdGVQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgY2F0ZUdldExvYWRpbmc6IHRydWVcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdFN0YXRlID0ge1xyXG4gICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICB9O1xyXG5cclxuIGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbil7XHJcbiAgICAgICBcclxuICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5DQVRFR09SWV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLntjYXRlUG9zdExvYWRpbmc6ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuQ0FURUdPUllfR0VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5jYXRlZ29yaWVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi57Y2F0ZWdvcnk6YWN0aW9uLmNhdGVnb3JpZXMsICBjYXRlR2V0TG9hZGluZzogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=