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
      children: category.balance
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL3RhYmxlLWNvbHVtbnMvQ2F0ZWdvcnlDb2x1bS5qcyJdLCJuYW1lcyI6WyJDYXRlZ29yeUNvbHVtbiIsImNhdGVnb3J5IiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJiYWxhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBb0I7QUFBQSxNQUFsQkMsUUFBa0IsUUFBbEJBLFFBQWtCO0FBQUEsTUFBUkMsRUFBUSxRQUFSQSxFQUFRO0FBRXJDLHNCQUNNO0FBQUEsNEJBQ0k7QUFBQSxnQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFBLDZCQUNJO0FBQUEsa0JBQVNELFFBQVEsQ0FBQ0U7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUtJO0FBQUEsZ0JBQUtGLFFBQVEsQ0FBQ0c7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosZUFNSTtBQUFBLGdCQUFLSCxRQUFRLENBQUNJO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KLGVBU0k7QUFBQSw2QkFDSSxxRUFBQyxpRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUROLENBRnFDLENBa0IzQztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUMsQ0E1Q0Q7O0tBQU1MLGM7QUE4Q1NBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGVnb3JpZXMuOTUxYTQ1NmQ0ZTRlNDU1MGNkMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBEcm9wZG93bkFjdGlvbiBmcm9tICd+L2NvbXBvbmVudHMvZWxlbWVudHMvYmFzaWMvRHJvcGRvd25BY3Rpb24nO1xyXG5cclxuXHJcbmNvbnN0IENhdGVnb3J5Q29sdW1uID0gKHtjYXRlZ29yeSwgaWR9KSA9PiB7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2lkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57Y2F0ZWdvcnkubmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2NhdGVnb3J5LmRlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2NhdGVnb3J5LmJhbGFuY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgIHsvKiA8dGQ+e2NhdGVnb3J5Lm9yZGVyc308L3RkPiAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8dGQ+e2JhZGdlVmlld308L3RkPiAqL31cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25BY3Rpb24vPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gXHJcbi8vICAgICBjb25zdCB0YWJsZUl0ZW1zVmlldyA9IGN1c3RvbWVycy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4ge1xyXG4vLyAgICAgICAgIGxldCBiYWRnZVZpZXc7XHJcblxyXG4vLyAgICAgICAgIGlmIChjYXRlZ29yeS5zdGF0dXMpIHtcclxuLy8gICAgICAgICAgICAgYmFkZ2VWaWV3ID0gPHNwYW4gY2xhc3NOYW1lPVwicHMtYmFkZ2Ugc3VjY2Vzc1wiPmFjdGl2ZTwvc3Bhbj47XHJcbi8vICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgYmFkZ2VWaWV3ID0gPHNwYW4gY2xhc3NOYW1lPVwicHMtYmFkZ2UgZ3JheVwiPmRlYWN0aXZlPC9zcGFuPjtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuLy8gICAgICAgICAgICAgICAgIDx0ZD57aW5kZXh9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntjYXRlZ29yeS5uYW1lfTwvc3Ryb25nPlxyXG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cclxuLy8gICAgICAgICAgICAgICAgIDx0ZD57Y2F0ZWdvcnkucGhvbmV9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgIDx0ZD57Y2F0ZWdvcnkuYmFsYW5jZX08L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgPHRkPntjYXRlZ29yeS5vcmRlcnN9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgIDx0ZD57YmFkZ2VWaWV3fTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICA8dGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duQWN0aW9uLz5cclxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XHJcbi8vICAgICAgICAgICAgIDwvdHI+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgIH0pO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5Q29sdW1uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9