webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/category/action.js":
/*!**********************************!*\
  !*** ./store/category/action.js ***!
  \**********************************/
/*! exports provided: actionTypes, addCategory, addCategorySuccess, fetchCategory, fetchCategorySuccess, deleteActionCategory, deleteCategorySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCategory", function() { return addCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCategorySuccess", function() { return addCategorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCategory", function() { return fetchCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCategorySuccess", function() { return fetchCategorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteActionCategory", function() { return deleteActionCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCategorySuccess", function() { return deleteCategorySuccess; });
var actionTypes = {
  CATEGORY_POST: "CATEGORY_POST",
  CATEGORY_POST_SUCCESS: "CATEGORY_POST_SUCCESS",
  CATEGORY_GET: "CATEGORY_GET",
  CATEGORY_GET_SUCCESS: "CATEGORY_GET_SUCCESS",
  CATEGORY_DELETE: "CATEGORY_DELETE",
  CATEGORY_DELETE_SUCCESS: "CATEGORY_DELETE_SUCCESS"
};
function addCategory(category) {
  return {
    type: actionTypes.CATEGORY_POST,
    category: category
  };
}
function addCategorySuccess() {
  console.log();
  return {
    type: actionTypes.CATEGORY_POST_SUCCESS
  };
}
function fetchCategory() {
  return {
    type: actionTypes.CATEGORY_GET
  };
}
function fetchCategorySuccess(categories) {
  console.log(categories);
  return {
    type: actionTypes.CATEGORY_GET_SUCCESS,
    categories: categories
  };
}
function deleteActionCategory(id) {
  console.log(id);
  return {
    type: actionTypes.CATEGORY_DELETE,
    id: id
  };
}
function deleteCategorySuccess(deletedMsg) {
  console.log(deletedMsg);
  return {
    type: actionTypes.CATEGORY_DELETE_SUCCESS,
    deletedMsg: deletedMsg
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY2F0ZWdvcnkvYWN0aW9uLmpzIl0sIm5hbWVzIjpbImFjdGlvblR5cGVzIiwiQ0FURUdPUllfUE9TVCIsIkNBVEVHT1JZX1BPU1RfU1VDQ0VTUyIsIkNBVEVHT1JZX0dFVCIsIkNBVEVHT1JZX0dFVF9TVUNDRVNTIiwiQ0FURUdPUllfREVMRVRFIiwiQ0FURUdPUllfREVMRVRFX1NVQ0NFU1MiLCJhZGRDYXRlZ29yeSIsImNhdGVnb3J5IiwidHlwZSIsImFkZENhdGVnb3J5U3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaENhdGVnb3J5IiwiZmV0Y2hDYXRlZ29yeVN1Y2Nlc3MiLCJjYXRlZ29yaWVzIiwiZGVsZXRlQWN0aW9uQ2F0ZWdvcnkiLCJpZCIsImRlbGV0ZUNhdGVnb3J5U3VjY2VzcyIsImRlbGV0ZWRNc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsV0FBVyxHQUFHO0FBQzFCQyxlQUFhLEVBQUUsZUFEVztBQUUxQkMsdUJBQXFCLEVBQUUsdUJBRkc7QUFHMUJDLGNBQVksRUFBRSxjQUhZO0FBSTFCQyxzQkFBb0IsRUFBRSxzQkFKSTtBQUsxQkMsaUJBQWUsRUFBRSxpQkFMUztBQU0xQkMseUJBQXVCLEVBQUU7QUFOQyxDQUFwQjtBQVNBLFNBQVNDLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQStCO0FBQ3JDLFNBQU87QUFBRUMsUUFBSSxFQUFFVCxXQUFXLENBQUNDLGFBQXBCO0FBQW1DTyxZQUFRLEVBQVJBO0FBQW5DLEdBQVA7QUFDQTtBQUVNLFNBQVNFLGtCQUFULEdBQThCO0FBQ3BDQyxTQUFPLENBQUNDLEdBQVI7QUFDQSxTQUFPO0FBQUVILFFBQUksRUFBRVQsV0FBVyxDQUFDRTtBQUFwQixHQUFQO0FBQ0E7QUFFTSxTQUFTVyxhQUFULEdBQXlCO0FBQy9CLFNBQU87QUFBRUosUUFBSSxFQUFFVCxXQUFXLENBQUNHO0FBQXBCLEdBQVA7QUFDQTtBQUVNLFNBQVNXLG9CQUFULENBQThCQyxVQUE5QixFQUEwQztBQUNoREosU0FBTyxDQUFDQyxHQUFSLENBQVlHLFVBQVo7QUFDQSxTQUFPO0FBQUVOLFFBQUksRUFBRVQsV0FBVyxDQUFDSSxvQkFBcEI7QUFBMENXLGNBQVUsRUFBVkE7QUFBMUMsR0FBUDtBQUNBO0FBRU0sU0FBU0Msb0JBQVQsQ0FBOEJDLEVBQTlCLEVBQWtDO0FBQ3hDTixTQUFPLENBQUNDLEdBQVIsQ0FBWUssRUFBWjtBQUNBLFNBQU87QUFBRVIsUUFBSSxFQUFFVCxXQUFXLENBQUNLLGVBQXBCO0FBQXFDWSxNQUFFLEVBQUZBO0FBQXJDLEdBQVA7QUFDQTtBQUVNLFNBQVNDLHFCQUFULENBQStCQyxVQUEvQixFQUEyQztBQUNqRFIsU0FBTyxDQUFDQyxHQUFSLENBQVlPLFVBQVo7QUFDQSxTQUFPO0FBQUVWLFFBQUksRUFBRVQsV0FBVyxDQUFDTSx1QkFBcEI7QUFBNkNhLGNBQVUsRUFBVkE7QUFBN0MsR0FBUDtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZTIyY2Y4Yjg0YzhmNDEyNjEzMWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuXHRDQVRFR09SWV9QT1NUOiBcIkNBVEVHT1JZX1BPU1RcIixcclxuXHRDQVRFR09SWV9QT1NUX1NVQ0NFU1M6IFwiQ0FURUdPUllfUE9TVF9TVUNDRVNTXCIsXHJcblx0Q0FURUdPUllfR0VUOiBcIkNBVEVHT1JZX0dFVFwiLFxyXG5cdENBVEVHT1JZX0dFVF9TVUNDRVNTOiBcIkNBVEVHT1JZX0dFVF9TVUNDRVNTXCIsXHJcblx0Q0FURUdPUllfREVMRVRFOiBcIkNBVEVHT1JZX0RFTEVURVwiLFxyXG5cdENBVEVHT1JZX0RFTEVURV9TVUNDRVNTOiBcIkNBVEVHT1JZX0RFTEVURV9TVUNDRVNTXCIsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcclxuXHRyZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5DQVRFR09SWV9QT1NULCBjYXRlZ29yeSB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2F0ZWdvcnlTdWNjZXNzKCkge1xyXG5cdGNvbnNvbGUubG9nKClcclxuXHRyZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5DQVRFR09SWV9QT1NUX1NVQ0NFU1MgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ2F0ZWdvcnkoKSB7XHJcblx0cmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuQ0FURUdPUllfR0VUIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENhdGVnb3J5U3VjY2VzcyhjYXRlZ29yaWVzKSB7XHJcblx0Y29uc29sZS5sb2coY2F0ZWdvcmllcyk7XHJcblx0cmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuQ0FURUdPUllfR0VUX1NVQ0NFU1MsIGNhdGVnb3JpZXMgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUFjdGlvbkNhdGVnb3J5KGlkKSB7XHJcblx0Y29uc29sZS5sb2coaWQpO1xyXG5cdHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkNBVEVHT1JZX0RFTEVURSwgaWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUNhdGVnb3J5U3VjY2VzcyhkZWxldGVkTXNnKSB7XHJcblx0Y29uc29sZS5sb2coZGVsZXRlZE1zZyk7XHJcblx0cmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuQ0FURUdPUllfREVMRVRFX1NVQ0NFU1MsIGRlbGV0ZWRNc2cgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9