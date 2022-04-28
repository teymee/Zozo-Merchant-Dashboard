webpackHotUpdate_N_E("pages/merchants",{

/***/ "./store/merchant/action.js":
/*!**********************************!*\
  !*** ./store/merchant/action.js ***!
  \**********************************/
/*! exports provided: actionTypes, actionGetAllMechants, actionSuccessGetAllMechants, actionVerifyMechant, actionSuccessVerifyMechant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionGetAllMechants", function() { return actionGetAllMechants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSuccessGetAllMechants", function() { return actionSuccessGetAllMechants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionVerifyMechant", function() { return actionVerifyMechant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSuccessVerifyMechant", function() { return actionSuccessVerifyMechant; });
var actionTypes = {
  GET_ALL_MERCHANTS: "GET_ALL_MERCHANTS",
  GET_ALL_MERCHANTS_SUCCESS: "GET_ALL_MERCHANTS_SUCCESS",
  VERIFY_MERCHANT: "VERIFY_MERCHANT",
  VERIFY_MERCHANT_SUCCESS: "VERIFY_MERCHANT_SUCCESS"
};
var actionGetAllMechants = function actionGetAllMechants() {
  return {
    type: actionTypes.GET_ALL_MERCHANTS
  };
};
var actionSuccessGetAllMechants = function actionSuccessGetAllMechants(merchants) {
  console.log(merchants);
  return {
    type: actionTypes.GET_ALL_MERCHANTS_SUCCESS,
    merchants: merchants
  };
};
var actionVerifyMechant = function actionVerifyMechant(merchant_id) {
  console.log("actionVerifyMechant");
  return {
    type: actionTypes.GET_ALL_MERCHANTS,
    merchant_id: merchant_id
  };
};
var actionSuccessVerifyMechant = function actionSuccessVerifyMechant(isVerifed) {
  console.log(isVerifed);
  return {
    type: actionTypes.VERIFY_MERCHANT_SUCCESS,
    isVerifed: isVerifed
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbWVyY2hhbnQvYWN0aW9uLmpzIl0sIm5hbWVzIjpbImFjdGlvblR5cGVzIiwiR0VUX0FMTF9NRVJDSEFOVFMiLCJHRVRfQUxMX01FUkNIQU5UU19TVUNDRVNTIiwiVkVSSUZZX01FUkNIQU5UIiwiVkVSSUZZX01FUkNIQU5UX1NVQ0NFU1MiLCJhY3Rpb25HZXRBbGxNZWNoYW50cyIsInR5cGUiLCJhY3Rpb25TdWNjZXNzR2V0QWxsTWVjaGFudHMiLCJtZXJjaGFudHMiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9uVmVyaWZ5TWVjaGFudCIsIm1lcmNoYW50X2lkIiwiYWN0aW9uU3VjY2Vzc1ZlcmlmeU1lY2hhbnQiLCJpc1ZlcmlmZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxXQUFXLEdBQUU7QUFDcEJDLG1CQUFpQixFQUFFLG1CQURDO0FBRXBCQywyQkFBeUIsRUFBRSwyQkFGUDtBQUdwQkMsaUJBQWUsRUFBRSxpQkFIRztBQUlwQkMseUJBQXVCLEVBQUU7QUFKTCxDQUFuQjtBQU9BLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBSTtBQUNsQyxTQUFPO0FBQUNDLFFBQUksRUFBRU4sV0FBVyxDQUFDQztBQUFuQixHQUFQO0FBQ0wsQ0FGTTtBQUlBLElBQU1NLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBOEIsQ0FBQ0MsU0FBRCxFQUFhO0FBQ2xEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsU0FBWjtBQUNBLFNBQU87QUFBQ0YsUUFBSSxFQUFFTixXQUFXLENBQUNFLHlCQUFuQjtBQUE4Q00sYUFBUyxFQUFUQTtBQUE5QyxHQUFQO0FBQ0wsQ0FITTtBQUtBLElBQU1HLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsV0FBRCxFQUFlO0FBQzVDSCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBLFNBQU87QUFBQ0osUUFBSSxFQUFFTixXQUFXLENBQUNDLGlCQUFuQjtBQUFzQ1csZUFBVyxFQUFYQTtBQUF0QyxHQUFQO0FBQ0wsQ0FITTtBQUtBLElBQU1DLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBNkIsQ0FBQ0MsU0FBRCxFQUFhO0FBQ2pETCxTQUFPLENBQUNDLEdBQVIsQ0FBWUksU0FBWjtBQUNBLFNBQU87QUFBQ1IsUUFBSSxFQUFFTixXQUFXLENBQUNJLHVCQUFuQjtBQUE0Q1UsYUFBUyxFQUFUQTtBQUE1QyxHQUFQO0FBQ0wsQ0FITSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXJjaGFudHMuMDk3NzVkNGU3ZDlhMzZiNDA3NWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9e1xyXG4gICAgICBHRVRfQUxMX01FUkNIQU5UUzogXCJHRVRfQUxMX01FUkNIQU5UU1wiLFxyXG4gICAgICBHRVRfQUxMX01FUkNIQU5UU19TVUNDRVNTOiBcIkdFVF9BTExfTUVSQ0hBTlRTX1NVQ0NFU1NcIixcclxuICAgICAgVkVSSUZZX01FUkNIQU5UOiBcIlZFUklGWV9NRVJDSEFOVFwiLFxyXG4gICAgICBWRVJJRllfTUVSQ0hBTlRfU1VDQ0VTUzogXCJWRVJJRllfTUVSQ0hBTlRfU1VDQ0VTU1wiLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uR2V0QWxsTWVjaGFudHMgPSAoKT0+e1xyXG4gICAgICByZXR1cm4ge3R5cGU6IGFjdGlvblR5cGVzLkdFVF9BTExfTUVSQ0hBTlRTfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uU3VjY2Vzc0dldEFsbE1lY2hhbnRzID0gKG1lcmNoYW50cyk9PntcclxuICAgICAgY29uc29sZS5sb2cobWVyY2hhbnRzKVxyXG4gICAgICByZXR1cm4ge3R5cGU6IGFjdGlvblR5cGVzLkdFVF9BTExfTUVSQ0hBTlRTX1NVQ0NFU1MsIG1lcmNoYW50c31cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblZlcmlmeU1lY2hhbnQgPSAobWVyY2hhbnRfaWQpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYWN0aW9uVmVyaWZ5TWVjaGFudFwiKVxyXG4gICAgICByZXR1cm4ge3R5cGU6IGFjdGlvblR5cGVzLkdFVF9BTExfTUVSQ0hBTlRTLCBtZXJjaGFudF9pZH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblN1Y2Nlc3NWZXJpZnlNZWNoYW50ID0gKGlzVmVyaWZlZCk9PntcclxuICAgICAgY29uc29sZS5sb2coaXNWZXJpZmVkKVxyXG4gICAgICByZXR1cm4ge3R5cGU6IGFjdGlvblR5cGVzLlZFUklGWV9NRVJDSEFOVF9TVUNDRVNTLCBpc1ZlcmlmZWR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9