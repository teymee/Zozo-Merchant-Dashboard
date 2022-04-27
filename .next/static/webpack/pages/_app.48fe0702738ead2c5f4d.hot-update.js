webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcm9vdFJlZHVjZXIuanMiXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwiYXV0aCIsImFwcCIsImNhdGVnb3J5IiwicHJvZHVjdCIsImJpZCIsIm1lcmNoYW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZUEsNEhBQWUsQ0FBQztBQUMzQkMsTUFBSSxFQUFKQSxxREFEMkI7QUFFM0JDLEtBQUcsRUFBSEEsb0RBRjJCO0FBRzNCQyxVQUFRLEVBQVJBLHlEQUgyQjtBQUkzQkMsU0FBTyxFQUFQQSx3REFKMkI7QUFLM0JDLEtBQUcsRUFBSEEsb0RBTDJCO0FBTTNCQyxVQUFRLEVBQVJBLHlEQUFRQTtBQU5tQixDQUFELENBQTlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDhmZTA3MDI3MzhlYWQyYzVmNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoL3JlZHVjZXInO1xuaW1wb3J0IGFwcCBmcm9tICcuL2FwcC9yZWR1Y2VyJztcbmltcG9ydCBjYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5L3JlZHVjZXInO1xuaW1wb3J0IHByb2R1Y3QgZnJvbSAnLi9wcm9kdWN0L3JlZHVjZXInO1xuaW1wb3J0IGJpZCBmcm9tICcuL2JpZC9yZWR1Y2VyJztcbmltcG9ydCBtZXJjaGFudCBmcm9tICcuL21lcmNoYW50L3JlZHVjZXInO1xuaW1wb3J0IGN1c3RvbWVyIGZyb20gJy4vbWVyY2hhbnQvcmVkdWNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgYXV0aCxcbiAgICBhcHAsXG4gICAgY2F0ZWdvcnksXG4gICAgcHJvZHVjdCxcbiAgICBiaWQsXG4gICAgbWVyY2hhbnRcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==