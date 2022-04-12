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
  var category = _ref.category,
      id = _ref.id;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: category.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: category.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: category.createdAt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }, _this); //     const tableItemsView = customers.map((category, index) => {
  //         let badgeView;
  //         if (category.status) {
  //             badgeView = <span className="ps-badge success">active</span>;
  //         } else {
  //             badgeView = <span className="ps-badge gray">deactive</span>;
  //         }
  //         return (
  //             <tr key={index}>
  //                 <td>{index}</td>
  //                 <td>
  //                     <strong>{category.name}</strong>
  //                 </td>
  //                 <td>{category.phone}</td>
  //                 <td>{category.balance}</td>
  //                 <td>{category.orders}</td>
  //                 <td>{badgeView}</td>
  //                 <td>
  //                     <DropdownAction/>
  //                 </td>
  //             </tr>
  //         );
  //     });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL3RhYmxlLWNvbHVtbnMvQ2F0ZWdvcnlDb2x1bS5qcyJdLCJuYW1lcyI6WyJDYXRlZ29yeUNvbHVtbiIsImNhdGVnb3J5IiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJjcmVhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFvQjtBQUFBLE1BQWxCQyxRQUFrQixRQUFsQkEsUUFBa0I7QUFBQSxNQUFSQyxFQUFRLFFBQVJBLEVBQVE7QUFFckMsc0JBQ007QUFBQSw0QkFDSTtBQUFBLGdCQUFLQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUEsNkJBQ0k7QUFBQSxrQkFBU0QsUUFBUSxDQUFDRTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBS0k7QUFBQSxnQkFBS0YsUUFBUSxDQUFDRztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSixlQU1JO0FBQUEsZ0JBQUtILFFBQVEsQ0FBQ0k7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkosZUFTSTtBQUFBLDZCQUNJLHFFQUFDLGlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRE4sQ0FGcUMsQ0FrQjNDO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQyxDQTVDRDs7S0FBTUwsYztBQThDU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcmllcy45ZDViMTUxYWM0NGNiMTAzMWE5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERyb3Bkb3duQWN0aW9uIGZyb20gJ34vY29tcG9uZW50cy9lbGVtZW50cy9iYXNpYy9Ecm9wZG93bkFjdGlvbic7XHJcblxyXG5cclxuY29uc3QgQ2F0ZWdvcnlDb2x1bW4gPSAoe2NhdGVnb3J5LCBpZH0pID0+IHtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD57aWR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntjYXRlZ29yeS5uYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57Y2F0ZWdvcnkuZGVzY3JpcHRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57Y2F0ZWdvcnkuY3JlYXRlZEF0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICB7LyogPHRkPntjYXRlZ29yeS5vcmRlcnN9PC90ZD4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPHRkPntiYWRnZVZpZXd9PC90ZD4gKi99XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duQWN0aW9uLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuIFxyXG4vLyAgICAgY29uc3QgdGFibGVJdGVtc1ZpZXcgPSBjdXN0b21lcnMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcclxuLy8gICAgICAgICBsZXQgYmFkZ2VWaWV3O1xyXG5cclxuLy8gICAgICAgICBpZiAoY2F0ZWdvcnkuc3RhdHVzKSB7XHJcbi8vICAgICAgICAgICAgIGJhZGdlVmlldyA9IDxzcGFuIGNsYXNzTmFtZT1cInBzLWJhZGdlIHN1Y2Nlc3NcIj5hY3RpdmU8L3NwYW4+O1xyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIGJhZGdlVmlldyA9IDxzcGFuIGNsYXNzTmFtZT1cInBzLWJhZGdlIGdyYXlcIj5kZWFjdGl2ZTwvc3Bhbj47XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbi8vICAgICAgICAgICAgICAgICA8dGQ+e2luZGV4fTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICA8dGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57Y2F0ZWdvcnkubmFtZX08L3N0cm9uZz5cclxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICA8dGQ+e2NhdGVnb3J5LnBob25lfTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICA8dGQ+e2NhdGVnb3J5LmJhbGFuY2V9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgIDx0ZD57Y2F0ZWdvcnkub3JkZXJzfTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICA8dGQ+e2JhZGdlVmlld308L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgPHRkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkFjdGlvbi8+XHJcbi8vICAgICAgICAgICAgICAgICA8L3RkPlxyXG4vLyAgICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICB9KTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeUNvbHVtbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==