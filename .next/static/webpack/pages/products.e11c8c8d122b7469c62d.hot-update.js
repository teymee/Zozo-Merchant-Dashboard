webpackHotUpdate_N_E("pages/products",{

/***/ "./store/product/action.js":
/*!*********************************!*\
  !*** ./store/product/action.js ***!
  \*********************************/
/*! exports provided: actionTypes, addProduct, addProductSuccess, getMerchantProduct, getMerchantProductSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProduct", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductSuccess", function() { return addProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMerchantProduct", function() { return getMerchantProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMerchantProductSuccess", function() { return getMerchantProductSuccess; });
var actionTypes = {
  PRODUCT_POST: "PRODUCT_POST",
  PRODUCT_POST_SUCCESS: "PRODUCT_POST_SUCCESS",
  MERCHANT_PRODUCT_GET: "MERCHANT_PRODUCT_GET",
  MERCHANT_PRODUCT_GET_SUCCESS: "MERCHANT_PRODUCT_GET_SUCCESS",
  PRODUCT_DELETE: "PRODUCT_DELETE",
  PRODUCT_DELETE_SUCCESS: "PRODUCT_DELETE_SUCCESS"
};
function addProduct(product) {
  console.log("add product action"); // console.log(product);

  return {
    type: actionTypes.PRODUCT_POST,
    product: product
  };
}
function addProductSuccess(productMsg) {
  var isAddedMsg = " Product added successfully";
  console.log(isAddedMsg);
  return {
    type: actionTypes.PRODUCT_POST_SUCCESS,
    isAddedMsg: isAddedMsg
  };
}
function getMerchantProduct(id) {
  console.log("get specific merchant product action");
  return {
    type: actionTypes.MERCHANT_PRODUCT_GET,
    id: id
  };
}
function getMerchantProductSuccess(merchantProducts) {
  console.log(merchantProducts);
  return {
    type: actionTypes.MERCHANT_PRODUCT_GET_SUCCESS,
    merchantProducts: merchantProducts
  };
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcHJvZHVjdC9hY3Rpb24uanMiXSwibmFtZXMiOlsiYWN0aW9uVHlwZXMiLCJQUk9EVUNUX1BPU1QiLCJQUk9EVUNUX1BPU1RfU1VDQ0VTUyIsIk1FUkNIQU5UX1BST0RVQ1RfR0VUIiwiTUVSQ0hBTlRfUFJPRFVDVF9HRVRfU1VDQ0VTUyIsIlBST0RVQ1RfREVMRVRFIiwiUFJPRFVDVF9ERUxFVEVfU1VDQ0VTUyIsImFkZFByb2R1Y3QiLCJwcm9kdWN0IiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJhZGRQcm9kdWN0U3VjY2VzcyIsInByb2R1Y3RNc2ciLCJpc0FkZGVkTXNnIiwiZ2V0TWVyY2hhbnRQcm9kdWN0IiwiaWQiLCJnZXRNZXJjaGFudFByb2R1Y3RTdWNjZXNzIiwibWVyY2hhbnRQcm9kdWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLFdBQVcsR0FBRztBQUMxQkMsY0FBWSxFQUFFLGNBRFk7QUFFMUJDLHNCQUFvQixFQUFFLHNCQUZJO0FBRzFCQyxzQkFBb0IsRUFBRSxzQkFISTtBQUkxQkMsOEJBQTRCLEVBQUUsOEJBSko7QUFLMUJDLGdCQUFjLEVBQUUsZ0JBTFU7QUFNMUJDLHdCQUFzQixFQUFFO0FBTkUsQ0FBcEI7QUFTQSxTQUFTQyxVQUFULENBQW9CQyxPQUFwQixFQUE2QjtBQUNuQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFEbUMsQ0FFbkM7O0FBQ0EsU0FBTztBQUFFQyxRQUFJLEVBQUVYLFdBQVcsQ0FBQ0MsWUFBcEI7QUFBa0NPLFdBQU8sRUFBUEE7QUFBbEMsR0FBUDtBQUNBO0FBRU0sU0FBU0ksaUJBQVQsQ0FBMkJDLFVBQTNCLEVBQXVDO0FBQzdDLE1BQU1DLFVBQVUsR0FBRyw2QkFBbkI7QUFDQUwsU0FBTyxDQUFDQyxHQUFSLENBQVlJLFVBQVo7QUFFQSxTQUFPO0FBQUVILFFBQUksRUFBRVgsV0FBVyxDQUFDRSxvQkFBcEI7QUFBMENZLGNBQVUsRUFBVkE7QUFBMUMsR0FBUDtBQUNBO0FBRU0sU0FBU0Msa0JBQVQsQ0FBNEJDLEVBQTVCLEVBQWdDO0FBQ3RDUCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxzQ0FBWjtBQUVBLFNBQU87QUFBRUMsUUFBSSxFQUFFWCxXQUFXLENBQUNHLG9CQUFwQjtBQUEwQ2EsTUFBRSxFQUFGQTtBQUExQyxHQUFQO0FBQ0E7QUFFTSxTQUFTQyx5QkFBVCxDQUFtQ0MsZ0JBQW5DLEVBQXFEO0FBQ3REVCxTQUFPLENBQUNDLEdBQVIsQ0FBWVEsZ0JBQVo7QUFDTCxTQUFPO0FBQUVQLFFBQUksRUFBRVgsV0FBVyxDQUFDSSw0QkFBcEI7QUFBa0RjLG9CQUFnQixFQUFoQkE7QUFBbEQsR0FBUDtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzLmUxMWM4YzhkMTIyYjc0NjljNjJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcblx0UFJPRFVDVF9QT1NUOiBcIlBST0RVQ1RfUE9TVFwiLFxyXG5cdFBST0RVQ1RfUE9TVF9TVUNDRVNTOiBcIlBST0RVQ1RfUE9TVF9TVUNDRVNTXCIsXHJcblx0TUVSQ0hBTlRfUFJPRFVDVF9HRVQ6IFwiTUVSQ0hBTlRfUFJPRFVDVF9HRVRcIixcclxuXHRNRVJDSEFOVF9QUk9EVUNUX0dFVF9TVUNDRVNTOiBcIk1FUkNIQU5UX1BST0RVQ1RfR0VUX1NVQ0NFU1NcIixcclxuXHRQUk9EVUNUX0RFTEVURTogXCJQUk9EVUNUX0RFTEVURVwiLFxyXG5cdFBST0RVQ1RfREVMRVRFX1NVQ0NFU1M6IFwiUFJPRFVDVF9ERUxFVEVfU1VDQ0VTU1wiLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2R1Y3QocHJvZHVjdCkge1xyXG5cdGNvbnNvbGUubG9nKFwiYWRkIHByb2R1Y3QgYWN0aW9uXCIpO1xyXG5cdC8vIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xyXG5cdHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlBST0RVQ1RfUE9TVCwgcHJvZHVjdCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvZHVjdFN1Y2Nlc3MocHJvZHVjdE1zZykge1xyXG5cdGNvbnN0IGlzQWRkZWRNc2cgPSBcIiBQcm9kdWN0IGFkZGVkIHN1Y2Nlc3NmdWxseVwiO1xyXG5cdGNvbnNvbGUubG9nKGlzQWRkZWRNc2cpXHJcblxyXG5cdHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlBST0RVQ1RfUE9TVF9TVUNDRVNTLCBpc0FkZGVkTXNnIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXJjaGFudFByb2R1Y3QoaWQpIHtcclxuXHRjb25zb2xlLmxvZyhcImdldCBzcGVjaWZpYyBtZXJjaGFudCBwcm9kdWN0IGFjdGlvblwiKTtcclxuXHJcblx0cmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTUVSQ0hBTlRfUFJPRFVDVF9HRVQsIGlkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXJjaGFudFByb2R1Y3RTdWNjZXNzKG1lcmNoYW50UHJvZHVjdHMpIHtcclxuICAgICAgY29uc29sZS5sb2cobWVyY2hhbnRQcm9kdWN0cylcclxuXHRyZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5NRVJDSEFOVF9QUk9EVUNUX0dFVF9TVUNDRVNTLCBtZXJjaGFudFByb2R1Y3RzIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==