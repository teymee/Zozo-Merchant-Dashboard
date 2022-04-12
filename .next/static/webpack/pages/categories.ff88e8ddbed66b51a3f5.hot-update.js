webpackHotUpdate_N_E("pages/categories",{

/***/ "./components/shared/tables/table-columns/CategoryColum.js":
/*!*****************************************************************!*\
  !*** ./components/shared/tables/table-columns/CategoryColum.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/elements/basic/DropdownAction */ "./components/elements/basic/DropdownAction.jsx");


var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\components\\shared\\tables\\table-columns\\CategoryColum.js",
    _this = undefined;




var CategoryColumn = function CategoryColumn(_ref) {
  var catego = _ref.catego;
  var tableItemsView = customers.map(function (item, index) {
    var badgeView;

    if (item.status) {
      badgeView = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "ps-badge success",
        children: "active"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 25
      }, _this);
    } else {
      badgeView = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "ps-badge gray",
        children: "deactive"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }, _this);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: index
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: item.phone
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: item.balance
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: item.orders
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: badgeView
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this)]
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this);
  });
};

_c = CategoryColumn;
/* harmony default export */ __webpack_exports__["default"] = (CategoryColumn);

var _c;

$RefreshReg$(_c, "CategoryColumn");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL3RhYmxlLWNvbHVtbnMvQ2F0ZWdvcnlDb2x1bS5qcyJdLCJuYW1lcyI6WyJDYXRlZ29yeUNvbHVtbiIsImNhdGVnbyIsInRhYmxlSXRlbXNWaWV3IiwiY3VzdG9tZXJzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiYmFkZ2VWaWV3Iiwic3RhdHVzIiwibmFtZSIsInBob25lIiwiYmFsYW5jZSIsIm9yZGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQWM7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7QUFFakMsTUFBTUMsY0FBYyxHQUFHQyxTQUFTLENBQUNDLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDbEQsUUFBSUMsU0FBSjs7QUFFQSxRQUFJRixJQUFJLENBQUNHLE1BQVQsRUFBaUI7QUFDYkQsZUFBUyxnQkFBRztBQUFNLGlCQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVo7QUFDSCxLQUZELE1BRU87QUFDSEEsZUFBUyxnQkFBRztBQUFNLGlCQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBWjtBQUNIOztBQUVELHdCQUNJO0FBQUEsOEJBQ0k7QUFBQSxrQkFBS0Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBLCtCQUNJO0FBQUEsb0JBQVNELElBQUksQ0FBQ0k7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBS0k7QUFBQSxrQkFBS0osSUFBSSxDQUFDSztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSixlQU1JO0FBQUEsa0JBQUtMLElBQUksQ0FBQ007QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkosZUFPSTtBQUFBLGtCQUFLTixJQUFJLENBQUNPO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKLGVBUUk7QUFBQSxrQkFBS0w7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkosZUFTSTtBQUFBLCtCQUNJLHFFQUFDLGlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEo7QUFBQSxPQUFTRCxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQWVILEdBeEJzQixDQUF2QjtBQTBCSCxDQTVCRDs7S0FBTU4sYztBQThCU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcmllcy5mZjg4ZThkZGJlZDY2YjUxYTNmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERyb3Bkb3duQWN0aW9uIGZyb20gJ34vY29tcG9uZW50cy9lbGVtZW50cy9iYXNpYy9Ecm9wZG93bkFjdGlvbic7XHJcblxyXG5cclxuY29uc3QgQ2F0ZWdvcnlDb2x1bW4gPSAoe2NhdGVnb30pID0+IHtcclxuIFxyXG4gICAgY29uc3QgdGFibGVJdGVtc1ZpZXcgPSBjdXN0b21lcnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGxldCBiYWRnZVZpZXc7XHJcblxyXG4gICAgICAgIGlmIChpdGVtLnN0YXR1cykge1xyXG4gICAgICAgICAgICBiYWRnZVZpZXcgPSA8c3BhbiBjbGFzc05hbWU9XCJwcy1iYWRnZSBzdWNjZXNzXCI+YWN0aXZlPC9zcGFuPjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBiYWRnZVZpZXcgPSA8c3BhbiBjbGFzc05hbWU9XCJwcy1iYWRnZSBncmF5XCI+ZGVhY3RpdmU8L3NwYW4+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPHRkPntpbmRleH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2l0ZW0ubmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ucGhvbmV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5iYWxhbmNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ub3JkZXJzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2JhZGdlVmlld308L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkFjdGlvbi8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeUNvbHVtbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==