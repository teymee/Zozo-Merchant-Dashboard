webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/rootSaga.js":
/*!***************************!*\
  !*** ./store/rootSaga.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _app_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/saga */ "./store/app/saga.js");
/* harmony import */ var _auth_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/saga */ "./store/auth/saga.js");
/* harmony import */ var _category_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/saga */ "./store/category/saga.js");
/* harmony import */ var _product_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/saga */ "./store/product/saga.js");
/* harmony import */ var _bid_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bid/saga */ "./store/bid/saga.js");
/* harmony import */ var _merchant_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merchant/saga */ "./store/merchant/saga.js");
/* harmony import */ var _customer_saga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer/saga */ "./store/customer/saga.js");


var _marked = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);









function rootSaga() {
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_app_saga__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(_auth_saga__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_category_saga__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(_product_saga__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(_bid_saga__WEBPACK_IMPORTED_MODULE_6__["default"])(), Object(_merchant_saga__WEBPACK_IMPORTED_MODULE_7__["default"])(), Object(_customer_saga__WEBPACK_IMPORTED_MODULE_8__["default"])()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcm9vdFNhZ2EuanMiXSwibmFtZXMiOlsicm9vdFNhZ2EiLCJhbGwiLCJBcHBTYWdhIiwiQXV0aFNhZ2EiLCJDYXRlZ29yeVNhZ2EiLCJQcm9kdWN0U2FnYSIsIkJpZFNhZ2EiLCJNZXJjaGFudFNhZ2EiLCJDdXN0b21lclNhZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttTUFTeUJBLFE7O0FBVHpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFVQSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkLGlCQUFNQyw4REFBRyxDQUFDLENBQ1RDLHlEQUFPLEVBREUsRUFFVEMsMERBQVEsRUFGQyxFQUdUQyw4REFBWSxFQUhILEVBSVRDLDZEQUFXLEVBSkYsRUFLVEMseURBQU8sRUFMRSxFQU1UQyw4REFBWSxFQU5ILEVBT1RDLDhEQUFZLEVBUEgsQ0FBRCxDQUFUOztBQURjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmUwM2UxMGZlMDczMGFkYTM2NDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBBcHBTYWdhIGZyb20gXCIuL2FwcC9zYWdhXCI7XG5pbXBvcnQgQXV0aFNhZ2EgZnJvbSBcIi4vYXV0aC9zYWdhXCI7XG5pbXBvcnQgQ2F0ZWdvcnlTYWdhIGZyb20gXCIuL2NhdGVnb3J5L3NhZ2FcIjtcbmltcG9ydCBQcm9kdWN0U2FnYSBmcm9tIFwiLi9wcm9kdWN0L3NhZ2FcIjtcbmltcG9ydCBCaWRTYWdhIGZyb20gXCIuL2JpZC9zYWdhXCI7XG5pbXBvcnQgTWVyY2hhbnRTYWdhIGZyb20gXCIuL21lcmNoYW50L3NhZ2FcIjtcbmltcG9ydCBDdXN0b21lclNhZ2EgZnJvbSBcIi4vY3VzdG9tZXIvc2FnYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG5cdHlpZWxkIGFsbChbXG5cdFx0QXBwU2FnYSgpLFxuXHRcdEF1dGhTYWdhKCksXG5cdFx0Q2F0ZWdvcnlTYWdhKCksXG5cdFx0UHJvZHVjdFNhZ2EoKSxcblx0XHRCaWRTYWdhKCksXG5cdFx0TWVyY2hhbnRTYWdhKCksXG5cdFx0Q3VzdG9tZXJTYWdhKCksXG5cdF0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==