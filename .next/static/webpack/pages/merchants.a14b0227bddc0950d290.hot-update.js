webpackHotUpdate_N_E("pages/merchants",{

/***/ "./components/shared/tables/TableCustomerItems.jsx":
/*!*********************************************************!*\
  !*** ./components/shared/tables/TableCustomerItems.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/elements/basic/DropdownAction */ "./components/elements/basic/DropdownAction.jsx");


var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\components\\shared\\tables\\TableCustomerItems.jsx",
    _this = undefined;




var TableCustomerItems = function TableCustomerItems() {
  var customers = [{
    name: 'Jenny Simmonds',
    phone: '(+921) 211-32-1145',
    balance: '$211.00',
    orders: '10',
    status: 'true'
  }, {
    name: 'Ammara Molloy',
    phone: '(+921) 916-971-217',
    balance: '$211.00',
    orders: '10',
    status: 'true'
  }, {
    name: 'Anisa Forster',
    phone: '(+921) 319-176-113',
    balance: '$211.00',
    orders: '10',
    status: 'true'
  }, {
    name: 'Hashir Wilson',
    phone: '(+921) 393-112-298',
    balance: '$211.00',
    orders: '10',
    status: 'false'
  }, {
    name: 'Grover Sampson',
    phone: '(+921) 393-872-137',
    balance: '$211.00',
    orders: '10',
    status: 'true'
  }, {
    name: 'Nelson Mckeown',
    phone: '(+921) 393-872-998',
    balance: '$211.00',
    orders: '10',
    status: 'false'
  }, {
    name: 'Zunaira Akhtar',
    phone: '(+921) 393-872-145',
    balance: '$211.00',
    orders: '10',
    status: 'true'
  }, {
    name: 'Natan Kramer',
    phone: '(+921) 293-872-145',
    balance: '$211.00',
    orders: '10',
    status: 'false'
  }, {
    name: 'Jesse Pollard',
    phone: '(+921) 291-32-145',
    balance: '$211.00',
    orders: '10',
    status: 'true'
  }];
  var tableItemsView = customers.map(function (item, index) {
    var badgeView;

    if (item.status) {
      badgeView = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "ps-badge success",
        children: "active"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }, _this);
    } else {
      badgeView = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "ps-badge gray",
        children: "deactive"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 25
      }, _this);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: index
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: item.phone
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: item.balance
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: item.orders
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: badgeView
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, _this)]
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "table-responsive",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: "table ps-table",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Phone Number"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Balances"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Total orders"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: tableItemsView
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 9
  }, _this);
};

_c = TableCustomerItems;
/* harmony default export */ __webpack_exports__["default"] = (TableCustomerItems);

var _c;

$RefreshReg$(_c, "TableCustomerItems");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL1RhYmxlQ3VzdG9tZXJJdGVtcy5qc3giXSwibmFtZXMiOlsiVGFibGVDdXN0b21lckl0ZW1zIiwiY3VzdG9tZXJzIiwibmFtZSIsInBob25lIiwiYmFsYW5jZSIsIm9yZGVycyIsInN0YXR1cyIsInRhYmxlSXRlbXNWaWV3IiwibWFwIiwiaXRlbSIsImluZGV4IiwiYmFkZ2VWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUM3QixNQUFNQyxTQUFTLEdBQUcsQ0FDZDtBQUNJQyxRQUFJLEVBQUUsZ0JBRFY7QUFFSUMsU0FBSyxFQUFFLG9CQUZYO0FBR0lDLFdBQU8sRUFBRSxTQUhiO0FBSUlDLFVBQU0sRUFBRSxJQUpaO0FBS0lDLFVBQU0sRUFBRTtBQUxaLEdBRGMsRUFRZDtBQUNJSixRQUFJLEVBQUUsZUFEVjtBQUVJQyxTQUFLLEVBQUUsb0JBRlg7QUFHSUMsV0FBTyxFQUFFLFNBSGI7QUFJSUMsVUFBTSxFQUFFLElBSlo7QUFLSUMsVUFBTSxFQUFFO0FBTFosR0FSYyxFQWVkO0FBQ0lKLFFBQUksRUFBRSxlQURWO0FBRUlDLFNBQUssRUFBRSxvQkFGWDtBQUdJQyxXQUFPLEVBQUUsU0FIYjtBQUlJQyxVQUFNLEVBQUUsSUFKWjtBQUtJQyxVQUFNLEVBQUU7QUFMWixHQWZjLEVBc0JkO0FBQ0lKLFFBQUksRUFBRSxlQURWO0FBRUlDLFNBQUssRUFBRSxvQkFGWDtBQUdJQyxXQUFPLEVBQUUsU0FIYjtBQUlJQyxVQUFNLEVBQUUsSUFKWjtBQUtJQyxVQUFNLEVBQUU7QUFMWixHQXRCYyxFQTZCZDtBQUNJSixRQUFJLEVBQUUsZ0JBRFY7QUFFSUMsU0FBSyxFQUFFLG9CQUZYO0FBR0lDLFdBQU8sRUFBRSxTQUhiO0FBSUlDLFVBQU0sRUFBRSxJQUpaO0FBS0lD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QUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrQkgsQ0EvR0Q7O0tBQU1QLGtCO0FBaUhTQSxpRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXJjaGFudHMuYTE0YjAyMjdiZGRjMDk1MGQyOTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRHJvcGRvd25BY3Rpb24gZnJvbSAnfi9jb21wb25lbnRzL2VsZW1lbnRzL2Jhc2ljL0Ryb3Bkb3duQWN0aW9uJztcblxuY29uc3QgVGFibGVDdXN0b21lckl0ZW1zID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1c3RvbWVycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0plbm55IFNpbW1vbmRzJyxcbiAgICAgICAgICAgIHBob25lOiAnKCs5MjEpIDIxMS0zMi0xMTQ1JyxcbiAgICAgICAgICAgIGJhbGFuY2U6ICckMjExLjAwJyxcbiAgICAgICAgICAgIG9yZGVyczogJzEwJyxcbiAgICAgICAgICAgIHN0YXR1czogJ3RydWUnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnQW1tYXJhIE1vbGxveScsXG4gICAgICAgICAgICBwaG9uZTogJygrOTIxKSA5MTYtOTcxLTIxNycsXG4gICAgICAgICAgICBiYWxhbmNlOiAnJDIxMS4wMCcsXG4gICAgICAgICAgICBvcmRlcnM6ICcxMCcsXG4gICAgICAgICAgICBzdGF0dXM6ICd0cnVlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0FuaXNhIEZvcnN0ZXInLFxuICAgICAgICAgICAgcGhvbmU6ICcoKzkyMSkgMzE5LTE3Ni0xMTMnLFxuICAgICAgICAgICAgYmFsYW5jZTogJyQyMTEuMDAnLFxuICAgICAgICAgICAgb3JkZXJzOiAnMTAnLFxuICAgICAgICAgICAgc3RhdHVzOiAndHJ1ZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdIYXNoaXIgV2lsc29uJyxcbiAgICAgICAgICAgIHBob25lOiAnKCs5MjEpIDM5My0xMTItMjk4JyxcbiAgICAgICAgICAgIGJhbGFuY2U6ICckMjExLjAwJyxcbiAgICAgICAgICAgIG9yZGVyczogJzEwJyxcbiAgICAgICAgICAgIHN0YXR1czogJ2ZhbHNlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0dyb3ZlciBTYW1wc29uJyxcbiAgICAgICAgICAgIHBob25lOiAnKCs5MjEpIDM5My04NzItMTM3JyxcbiAgICAgICAgICAgIGJhbGFuY2U6ICckMjExLjAwJyxcbiAgICAgICAgICAgIG9yZGVyczogJzEwJyxcbiAgICAgICAgICAgIHN0YXR1czogJ3RydWUnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnTmVsc29uIE1ja2Vvd24nLFxuICAgICAgICAgICAgcGhvbmU6ICcoKzkyMSkgMzkzLTg3Mi05OTgnLFxuICAgICAgICAgICAgYmFsYW5jZTogJyQyMTEuMDAnLFxuICAgICAgICAgICAgb3JkZXJzOiAnMTAnLFxuICAgICAgICAgICAgc3RhdHVzOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnWnVuYWlyYSBBa2h0YXInLFxuICAgICAgICAgICAgcGhvbmU6ICcoKzkyMSkgMzkzLTg3Mi0xNDUnLFxuICAgICAgICAgICAgYmFsYW5jZTogJyQyMTEuMDAnLFxuICAgICAgICAgICAgb3JkZXJzOiAnMTAnLFxuICAgICAgICAgICAgc3RhdHVzOiAndHJ1ZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdOYXRhbiBLcmFtZXInLFxuICAgICAgICAgICAgcGhvbmU6ICcoKzkyMSkgMjkzLTg3Mi0xNDUnLFxuICAgICAgICAgICAgYmFsYW5jZTogJyQyMTEuMDAnLFxuICAgICAgICAgICAgb3JkZXJzOiAnMTAnLFxuICAgICAgICAgICAgc3RhdHVzOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnSmVzc2UgUG9sbGFyZCcsXG4gICAgICAgICAgICBwaG9uZTogJygrOTIxKSAyOTEtMzItMTQ1JyxcbiAgICAgICAgICAgIGJhbGFuY2U6ICckMjExLjAwJyxcbiAgICAgICAgICAgIG9yZGVyczogJzEwJyxcbiAgICAgICAgICAgIHN0YXR1czogJ3RydWUnLFxuICAgICAgICB9LFxuICAgIF07XG4gICAgY29uc3QgdGFibGVJdGVtc1ZpZXcgPSBjdXN0b21lcnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgYmFkZ2VWaWV3O1xuXG4gICAgICAgIGlmIChpdGVtLnN0YXR1cykge1xuICAgICAgICAgICAgYmFkZ2VWaWV3ID0gPHNwYW4gY2xhc3NOYW1lPVwicHMtYmFkZ2Ugc3VjY2Vzc1wiPmFjdGl2ZTwvc3Bhbj47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiYWRnZVZpZXcgPSA8c3BhbiBjbGFzc05hbWU9XCJwcy1iYWRnZSBncmF5XCI+ZGVhY3RpdmU8L3NwYW4+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8dGQ+e2luZGV4fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntpdGVtLm5hbWV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ucGhvbmV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uYmFsYW5jZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5vcmRlcnN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2JhZGdlVmlld308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duQWN0aW9uIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgfSk7XG5cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmVcIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBwcy10YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QaG9uZSBOdW1iZXI8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkJhbGFuY2VzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBvcmRlcnM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT57dGFibGVJdGVtc1ZpZXd9PC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUN1c3RvbWVySXRlbXM7XG4iXSwic291cmNlUm9vdCI6IiJ9