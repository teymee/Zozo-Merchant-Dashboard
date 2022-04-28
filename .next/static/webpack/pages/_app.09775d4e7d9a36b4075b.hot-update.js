webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbWVyY2hhbnQvYWN0aW9uLmpzIl0sIm5hbWVzIjpbImFjdGlvblR5cGVzIiwiR0VUX0FMTF9NRVJDSEFOVFMiLCJHRVRfQUxMX01FUkNIQU5UU19TVUNDRVNTIiwiVkVSSUZZX01FUkNIQU5UIiwiVkVSSUZZX01FUkNIQU5UX1NVQ0NFU1MiLCJhY3Rpb25HZXRBbGxNZWNoYW50cyIsInR5cGUiLCJhY3Rpb25TdWNjZXNzR2V0QWxsTWVjaGFudHMiLCJtZXJjaGFudHMiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9uVmVyaWZ5TWVjaGFudCIsIm1lcmNoYW50X2lkIiwiYWN0aW9uU3VjY2Vzc1ZlcmlmeU1lY2hhbnQiLCJpc1ZlcmlmZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxXQUFXLEdBQUU7QUFDcEJDLG1CQUFpQixFQUFFLG1CQURDO0FBRXBCQywyQkFBeUIsRUFBRSwyQkFGUDtBQUdwQkMsaUJBQWUsRUFBRSxpQkFIRztBQUlwQkMseUJBQXVCLEVBQUU7QUFKTCxDQUFuQjtBQU9BLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBSTtBQUNsQyxTQUFPO0FBQUNDLFFBQUksRUFBRU4sV0FBVyxDQUFDQztBQUFuQixHQUFQO0FBQ0wsQ0FGTTtBQUlBLElBQU1NLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBOEIsQ0FBQ0MsU0FBRCxFQUFhO0FBQ2xEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsU0FBWjtBQUNBLFNBQU87QUFBQ0YsUUFBSSxFQUFFTixXQUFXLENBQUNFLHlCQUFuQjtBQUE4Q00sYUFBUyxFQUFUQTtBQUE5QyxHQUFQO0FBQ0wsQ0FITTtBQUtBLElBQU1HLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsV0FBRCxFQUFlO0FBQzVDSCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBLFNBQU87QUFBQ0osUUFBSSxFQUFFTixXQUFXLENBQUNDLGlCQUFuQjtBQUFzQ1csZUFBVyxFQUFYQTtBQUF0QyxHQUFQO0FBQ0wsQ0FITTtBQUtBLElBQU1DLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBNkIsQ0FBQ0MsU0FBRCxFQUFhO0FBQ2pETCxTQUFPLENBQUNDLEdBQVIsQ0FBWUksU0FBWjtBQUNBLFNBQU87QUFBQ1IsUUFBSSxFQUFFTixXQUFXLENBQUNJLHVCQUFuQjtBQUE0Q1UsYUFBUyxFQUFUQTtBQUE1QyxHQUFQO0FBQ0wsQ0FITSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjA5Nzc1ZDRlN2Q5YTM2YjQwNzViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPXtcclxuICAgICAgR0VUX0FMTF9NRVJDSEFOVFM6IFwiR0VUX0FMTF9NRVJDSEFOVFNcIixcclxuICAgICAgR0VUX0FMTF9NRVJDSEFOVFNfU1VDQ0VTUzogXCJHRVRfQUxMX01FUkNIQU5UU19TVUNDRVNTXCIsXHJcbiAgICAgIFZFUklGWV9NRVJDSEFOVDogXCJWRVJJRllfTUVSQ0hBTlRcIixcclxuICAgICAgVkVSSUZZX01FUkNIQU5UX1NVQ0NFU1M6IFwiVkVSSUZZX01FUkNIQU5UX1NVQ0NFU1NcIixcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkdldEFsbE1lY2hhbnRzID0gKCk9PntcclxuICAgICAgcmV0dXJuIHt0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQUxMX01FUkNIQU5UU31cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblN1Y2Nlc3NHZXRBbGxNZWNoYW50cyA9IChtZXJjaGFudHMpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKG1lcmNoYW50cylcclxuICAgICAgcmV0dXJuIHt0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQUxMX01FUkNIQU5UU19TVUNDRVNTLCBtZXJjaGFudHN9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25WZXJpZnlNZWNoYW50ID0gKG1lcmNoYW50X2lkKT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhcImFjdGlvblZlcmlmeU1lY2hhbnRcIilcclxuICAgICAgcmV0dXJuIHt0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQUxMX01FUkNIQU5UUywgbWVyY2hhbnRfaWR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25TdWNjZXNzVmVyaWZ5TWVjaGFudCA9IChpc1ZlcmlmZWQpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGlzVmVyaWZlZClcclxuICAgICAgcmV0dXJuIHt0eXBlOiBhY3Rpb25UeXBlcy5WRVJJRllfTUVSQ0hBTlRfU1VDQ0VTUywgaXNWZXJpZmVkfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==