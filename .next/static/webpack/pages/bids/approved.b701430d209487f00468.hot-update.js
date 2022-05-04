webpackHotUpdate_N_E("pages/bids/approved",{

/***/ "./components/shared/tables/table-columns/BidColumn.js":
/*!*************************************************************!*\
  !*** ./components/shared/tables/table-columns/BidColumn.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/elements/basic/DropdownAction */ "./components/elements/basic/DropdownAction.jsx");
/* harmony import */ var _store_API_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/store/API/Api */ "./store/API/Api.js");
/* harmony import */ var _store_bid_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/store/bid/action */ "./store/bid/action.js");
/* harmony import */ var _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TableExtraStyles/extraStyles.module.css */ "./components/shared/tables/TableExtraStyles/extraStyles.module.css");
/* harmony import */ var _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\Merchant dashboard\\merchant dashboard\\components\\shared\\tables\\table-columns\\BidColumn.js",
    _s = $RefreshSig$();








function BidColumn(_ref) {
  _s();

  var bidEvent = _ref.bidEvent,
      num = _ref.num,
      type = _ref.type;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  console.log(bidEvent);

  var approveEvent = function approveEvent() {
    console.log('approve event');
    dispatch(Object(_store_bid_action__WEBPACK_IMPORTED_MODULE_5__["actionApproveEvent"])(bidEvent.id));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: num + 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: bidEvent.product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: Object(_store_API_Api__WEBPACK_IMPORTED_MODULE_4__["dateFormat"])(bidEvent.start_time)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: bidEvent.access_amount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: bidEvent.minimum_amount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: Object(_store_API_Api__WEBPACK_IMPORTED_MODULE_4__["dateFormat"])(bidEvent.createdAt)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: approveEvent,
        className: _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.createEventButton,
        children: "Approve"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: approveEvent,
        className: _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.declineEventButton,
        children: "Delcine"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "bidEvent",
        id: bidEvent.id
      }, num + 1, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }, this);
}

_s(BidColumn, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = BidColumn;
/* harmony default export */ __webpack_exports__["default"] = (BidColumn);

var _c;

$RefreshReg$(_c, "BidColumn");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./store/API/Api.js":
/*!**************************!*\
  !*** ./store/API/Api.js ***!
  \**************************/
/*! exports provided: API, dateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormat", function() { return dateFormat; });
var API = {
  ADMIN_BASE_URL: "http://smart-park.xyz/api/v1/admin",
  BASE_URL: "http://smart-park.xyz/api/v1",
  MERCHANT_ADMIN_BASE_URL: "http://smart-park.xyz/api/v1/merchant",
  TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGdtYWlsLmNvbSIsImFjY291bnRfdHlwZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjQ3NTU3MjM3LCJleHAiOjE2NDc1NjQ0Mzd9.6FEDmVDucC6iiRM4LaYWco5suG8J_QLx9rgqnrVr89E"
};
var dateFormat = function dateFormat(timeFormat) {
  var event = new Date(timeFormat);
  var time = event.toString();
  var totalStringLength = time.length;
  var stringToSlice = time.indexOf("G");
  var finalDate = time.slice(0, stringToSlice);
  console.log(totalStringLength);
  console.log(time);
  console.log(stringToSlice);
  return finalDate;
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

/***/ }),

/***/ "./store/bid/action.js":
/*!*****************************!*\
  !*** ./store/bid/action.js ***!
  \*****************************/
/*! exports provided: actionTypes, actionCreateBidEvent, actionCreateBidEventSuccess, actionAdminFetchAuctions, actionAdminFetchAuctionsSuccess, actionApproveEvent, actionApproveEventSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionCreateBidEvent", function() { return actionCreateBidEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionCreateBidEventSuccess", function() { return actionCreateBidEventSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionAdminFetchAuctions", function() { return actionAdminFetchAuctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionAdminFetchAuctionsSuccess", function() { return actionAdminFetchAuctionsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionApproveEvent", function() { return actionApproveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionApproveEventSuccess", function() { return actionApproveEventSuccess; });
var actionTypes = {
  CREATE_BID_EVENT: "CREATE_BID_EVENT",
  CREATE_BID_EVENT_SUCCESS: "CREATE_BID_EVENT_SUCCESS",
  ADMIN_FETCH_BID_EVENTS: "ADMIN_FETCH_BID_EVENTS",
  ADMIN_FETCH_BID_EVENTS_SUCCESS: "ADMIN_FETCH_BID_EVENTS_SUCCESS",
  APPROVE_BID_EVENT: "APPROVE_BID_EVENT",
  APPROVE_BID_EVENT_SUCCESS: "APPROVE_BID_EVENT_SUCCESS"
};
function actionCreateBidEvent(event) {
  return {
    type: actionTypes.CREATE_BID_EVENT,
    event: event
  };
}
function actionCreateBidEventSuccess(isCreated) {
  console.log('created bid' + isCreated);
  return {
    type: actionTypes.CREATE_BID_EVENT_SUCCESS
  };
} //ADMIN

function actionAdminFetchAuctions(status) {
  return {
    type: actionTypes.ADMIN_FETCH_BID_EVENTS,
    status: status
  };
}
function actionAdminFetchAuctionsSuccess(auctions) {
  console.log(auctions);
  return {
    type: actionTypes.ADMIN_FETCH_BID_EVENTS_SUCCESS,
    auctions: auctions
  };
}
function actionApproveEvent(event_id) {
  console.log(event_id);
  return {
    type: actionTypes.APPROVE_BID_EVENT,
    event_id: event_id
  };
}
function actionApproveEventSuccess(isApproved) {
  console.log(isApproved);
  return {
    type: actionTypes.APPROVE_BID_EVENT_SUCCESS,
    isApproved: isApproved
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL3RhYmxlLWNvbHVtbnMvQmlkQ29sdW1uLmpzIiwid2VicGFjazovL19OX0UvLi9zdG9yZS9BUEkvQXBpLmpzIiwid2VicGFjazovL19OX0UvLi9zdG9yZS9iaWQvYWN0aW9uLmpzIl0sIm5hbWVzIjpbIkJpZENvbHVtbiIsImJpZEV2ZW50IiwibnVtIiwidHlwZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiYXBwcm92ZUV2ZW50IiwiYWN0aW9uQXBwcm92ZUV2ZW50IiwiaWQiLCJwcm9kdWN0IiwibmFtZSIsImRhdGVGb3JtYXQiLCJzdGFydF90aW1lIiwiYWNjZXNzX2Ftb3VudCIsIm1pbmltdW1fYW1vdW50IiwiY3JlYXRlZEF0Iiwic3R5bGVzIiwiY3JlYXRlRXZlbnRCdXR0b24iLCJkZWNsaW5lRXZlbnRCdXR0b24iLCJBUEkiLCJBRE1JTl9CQVNFX1VSTCIsIkJBU0VfVVJMIiwiTUVSQ0hBTlRfQURNSU5fQkFTRV9VUkwiLCJUT0tFTiIsInRpbWVGb3JtYXQiLCJldmVudCIsIkRhdGUiLCJ0aW1lIiwidG9TdHJpbmciLCJ0b3RhbFN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInN0cmluZ1RvU2xpY2UiLCJpbmRleE9mIiwiZmluYWxEYXRlIiwic2xpY2UiLCJhY3Rpb25UeXBlcyIsIkNSRUFURV9CSURfRVZFTlQiLCJDUkVBVEVfQklEX0VWRU5UX1NVQ0NFU1MiLCJBRE1JTl9GRVRDSF9CSURfRVZFTlRTIiwiQURNSU5fRkVUQ0hfQklEX0VWRU5UU19TVUNDRVNTIiwiQVBQUk9WRV9CSURfRVZFTlQiLCJBUFBST1ZFX0JJRF9FVkVOVF9TVUNDRVNTIiwiYWN0aW9uQ3JlYXRlQmlkRXZlbnQiLCJhY3Rpb25DcmVhdGVCaWRFdmVudFN1Y2Nlc3MiLCJpc0NyZWF0ZWQiLCJhY3Rpb25BZG1pbkZldGNoQXVjdGlvbnMiLCJzdGF0dXMiLCJhY3Rpb25BZG1pbkZldGNoQXVjdGlvbnNTdWNjZXNzIiwiYXVjdGlvbnMiLCJldmVudF9pZCIsImFjdGlvbkFwcHJvdmVFdmVudFN1Y2Nlc3MiLCJpc0FwcHJvdmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULE9BQTBDO0FBQUE7O0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLE1BQVpDLEdBQVksUUFBWkEsR0FBWTtBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUN6QyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixRQUFaOztBQUVLLE1BQU1PLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQUk7QUFDbkJGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQUgsWUFBUSxDQUFDSyw0RUFBa0IsQ0FBQ1IsUUFBUSxDQUFDUyxFQUFWLENBQW5CLENBQVI7QUFDTCxHQUhEOztBQU9MLHNCQUNDO0FBQUEsNEJBQ0M7QUFBQSxnQkFBS1IsR0FBRyxHQUFHO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUM7QUFBQSw2QkFDQztBQUFBLGtCQUFTRCxRQUFRLENBQUNVLE9BQVQsQ0FBaUJDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQsZUFLQztBQUFBLGdCQUFLQyxpRUFBVSxDQUFDWixRQUFRLENBQUNhLFVBQVY7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEQsZUFNQztBQUFBLGdCQUFLYixRQUFRLENBQUNjO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5ELGVBT0M7QUFBQSxnQkFBS2QsUUFBUSxDQUFDZTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRCxlQVFDO0FBQUEsZ0JBQUtILGlFQUFVLENBQUNaLFFBQVEsQ0FBQ2dCLFNBQVY7QUFB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Q0csc0JBQWxCO0FBQTBDUSxVQUFNLEVBQU5BO0FBQTFDLEdBQVA7QUFDTDtBQUVNLFNBQVNDLCtCQUFULENBQTBDQyxRQUExQyxFQUFtRDtBQUNwRDVDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZMkMsUUFBWjtBQUNBLFNBQU87QUFBQy9DLFFBQUksRUFBQ2tDLFdBQVcsQ0FBQ0ksOEJBQWxCO0FBQWtEUyxZQUFRLEVBQVJBO0FBQWxELEdBQVA7QUFDTDtBQUVNLFNBQVN6QyxrQkFBVCxDQUE2QjBDLFFBQTdCLEVBQXNDO0FBQ3ZDN0MsU0FBTyxDQUFDQyxHQUFSLENBQVk0QyxRQUFaO0FBQ0EsU0FBTztBQUFDaEQsUUFBSSxFQUFDa0MsV0FBVyxDQUFDSyxpQkFBbEI7QUFBcUNTLFlBQVEsRUFBUkE7QUFBckMsR0FBUDtBQUNMO0FBRU0sU0FBU0MseUJBQVQsQ0FBb0NDLFVBQXBDLEVBQStDO0FBQ2hEL0MsU0FBTyxDQUFDQyxHQUFSLENBQVk4QyxVQUFaO0FBQ0EsU0FBTztBQUFDbEQsUUFBSSxFQUFDa0MsV0FBVyxDQUFDTSx5QkFBbEI7QUFBNkNVLGNBQVUsRUFBVkE7QUFBN0MsR0FBUDtBQUNMIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JpZHMvYXBwcm92ZWQuYjcwMTQzMGQyMDk0ODdmMDA0NjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IERyb3Bkb3duQWN0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZWxlbWVudHMvYmFzaWMvRHJvcGRvd25BY3Rpb25cIjtcclxuaW1wb3J0IHsgZGF0ZUZvcm1hdCB9IGZyb20gXCJ+L3N0b3JlL0FQSS9BcGlcIjtcclxuaW1wb3J0IHsgYWN0aW9uQXBwcm92ZUV2ZW50IH0gZnJvbSBcIn4vc3RvcmUvYmlkL2FjdGlvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9UYWJsZUV4dHJhU3R5bGVzL2V4dHJhU3R5bGVzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIEJpZENvbHVtbih7YmlkRXZlbnQsIG51bSwgdHlwZX0pIHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblx0Y29uc29sZS5sb2coYmlkRXZlbnQpXHJcblxyXG4gICAgICBjb25zdCBhcHByb3ZlRXZlbnQgPSAoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXBwcm92ZSBldmVudCcpXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbkFwcHJvdmVFdmVudChiaWRFdmVudC5pZCkpXHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PHRyPlxyXG5cdFx0XHQ8dGQ+e251bSArIDF9PC90ZD5cclxuXHRcdFx0PHRkPlxyXG5cdFx0XHRcdDxzdHJvbmc+e2JpZEV2ZW50LnByb2R1Y3QubmFtZX08L3N0cm9uZz5cclxuXHRcdFx0PC90ZD5cclxuXHRcdFx0PHRkPntkYXRlRm9ybWF0KGJpZEV2ZW50LnN0YXJ0X3RpbWUpfTwvdGQ+XHJcblx0XHRcdDx0ZD57YmlkRXZlbnQuYWNjZXNzX2Ftb3VudH08L3RkPlxyXG5cdFx0XHQ8dGQ+e2JpZEV2ZW50Lm1pbmltdW1fYW1vdW50fTwvdGQ+XHJcblx0XHRcdDx0ZD57ZGF0ZUZvcm1hdChiaWRFdmVudC5jcmVhdGVkQXQpfTwvdGQ+XHJcblx0XHRcdHsvKiA8dGQ+e2JhZGdlVmlld308L3RkPiAqL31cclxuXHRcdFx0PHRkPlxyXG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17YXBwcm92ZUV2ZW50fSBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVFdmVudEJ1dHRvbn0+QXBwcm92ZTwvYnV0dG9uPlxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXthcHByb3ZlRXZlbnR9IGNsYXNzTmFtZT17c3R5bGVzLmRlY2xpbmVFdmVudEJ1dHRvbn0+RGVsY2luZTwvYnV0dG9uPlxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PERyb3Bkb3duQWN0aW9uIHR5cGU9XCJiaWRFdmVudFwiIGlkPXtiaWRFdmVudC5pZH0ga2V5PXtudW0gKyAxfSAvPlxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0PC90cj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaWRDb2x1bW47XHJcbiIsImV4cG9ydCBjb25zdCBBUEkgPSB7XHJcblx0QURNSU5fQkFTRV9VUkw6IFwiaHR0cDovL3NtYXJ0LXBhcmsueHl6L2FwaS92MS9hZG1pblwiLFxyXG5cdEJBU0VfVVJMOiBcImh0dHA6Ly9zbWFydC1wYXJrLnh5ei9hcGkvdjFcIixcclxuXHRNRVJDSEFOVF9BRE1JTl9CQVNFX1VSTDogXCJodHRwOi8vc21hcnQtcGFyay54eXovYXBpL3YxL21lcmNoYW50XCIsXHJcblx0VE9LRU46XHJcblx0XHRcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNk1Td2laVzFoYVd3aU9pSnFiMmh1Wkc5bFFHZHRZV2xzTG1OdmJTSXNJbUZqWTI5MWJuUmZkSGx3WlNJNkltTjFjM1J2YldWeUlpd2lhV0YwSWpveE5qUTNOVFUzTWpNM0xDSmxlSEFpT2pFMk5EYzFOalEwTXpkOS42RkVEbVZEdWNDNmlpUk00TGFZV2NvNXN1RzhKX1FMeDlyZ3FuclZyODlFXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGF0ZUZvcm1hdCA9ICh0aW1lRm9ybWF0KSA9PiB7XHJcblx0Y29uc3QgZXZlbnQgPSBuZXcgRGF0ZSh0aW1lRm9ybWF0KTtcclxuIGNvbnN0IHRpbWU9IGV2ZW50LnRvU3RyaW5nKCk7XHJcblxyXG5cdGNvbnN0IHRvdGFsU3RyaW5nTGVuZ3RoID0gdGltZS5sZW5ndGg7XHJcblx0Y29uc3Qgc3RyaW5nVG9TbGljZSA9IHRpbWUuaW5kZXhPZihcIkdcIik7XHJcblx0Y29uc3QgZmluYWxEYXRlID0gdGltZS5zbGljZSgwLCBzdHJpbmdUb1NsaWNlKTtcclxuXHRjb25zb2xlLmxvZyh0b3RhbFN0cmluZ0xlbmd0aCk7XHJcblx0Y29uc29sZS5sb2codGltZSk7XHJcblx0Y29uc29sZS5sb2coc3RyaW5nVG9TbGljZSk7XHJcblxyXG5cdHJldHVybiBmaW5hbERhdGU7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICAgICAgQ1JFQVRFX0JJRF9FVkVOVDogXCJDUkVBVEVfQklEX0VWRU5UXCIsXHJcbiAgICAgIENSRUFURV9CSURfRVZFTlRfU1VDQ0VTUzogXCJDUkVBVEVfQklEX0VWRU5UX1NVQ0NFU1NcIixcclxuICAgICAgQURNSU5fRkVUQ0hfQklEX0VWRU5UUzogXCJBRE1JTl9GRVRDSF9CSURfRVZFTlRTXCIsXHJcbiAgICAgIEFETUlOX0ZFVENIX0JJRF9FVkVOVFNfU1VDQ0VTUzogXCJBRE1JTl9GRVRDSF9CSURfRVZFTlRTX1NVQ0NFU1NcIixcclxuICAgICAgQVBQUk9WRV9CSURfRVZFTlQ6IFwiQVBQUk9WRV9CSURfRVZFTlRcIixcclxuICAgICAgQVBQUk9WRV9CSURfRVZFTlRfU1VDQ0VTUzogXCJBUFBST1ZFX0JJRF9FVkVOVF9TVUNDRVNTXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25DcmVhdGVCaWRFdmVudCAoZXZlbnQpe1xyXG4gICAgICByZXR1cm57dHlwZTphY3Rpb25UeXBlcy5DUkVBVEVfQklEX0VWRU5ULCBldmVudH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkNyZWF0ZUJpZEV2ZW50U3VjY2VzcyAoaXNDcmVhdGVkKXtcclxuICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZWQgYmlkJyArIGlzQ3JlYXRlZClcclxuICAgICAgcmV0dXJue3R5cGU6YWN0aW9uVHlwZXMuQ1JFQVRFX0JJRF9FVkVOVF9TVUNDRVNTfVxyXG59XHJcblxyXG4vL0FETUlOXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25BZG1pbkZldGNoQXVjdGlvbnMgKHN0YXR1cyl7XHJcbiAgICAgIHJldHVybiB7dHlwZTphY3Rpb25UeXBlcy5BRE1JTl9GRVRDSF9CSURfRVZFTlRTLCBzdGF0dXN9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25BZG1pbkZldGNoQXVjdGlvbnNTdWNjZXNzIChhdWN0aW9ucyl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGF1Y3Rpb25zKVxyXG4gICAgICByZXR1cm4ge3R5cGU6YWN0aW9uVHlwZXMuQURNSU5fRkVUQ0hfQklEX0VWRU5UU19TVUNDRVNTLCBhdWN0aW9uc31cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkFwcHJvdmVFdmVudCAoZXZlbnRfaWQpe1xyXG4gICAgICBjb25zb2xlLmxvZyhldmVudF9pZClcclxuICAgICAgcmV0dXJuIHt0eXBlOmFjdGlvblR5cGVzLkFQUFJPVkVfQklEX0VWRU5ULCBldmVudF9pZH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkFwcHJvdmVFdmVudFN1Y2Nlc3MgKGlzQXBwcm92ZWQpe1xyXG4gICAgICBjb25zb2xlLmxvZyhpc0FwcHJvdmVkKVxyXG4gICAgICByZXR1cm4ge3R5cGU6YWN0aW9uVHlwZXMuQVBQUk9WRV9CSURfRVZFTlRfU1VDQ0VTUywgaXNBcHByb3ZlZH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=