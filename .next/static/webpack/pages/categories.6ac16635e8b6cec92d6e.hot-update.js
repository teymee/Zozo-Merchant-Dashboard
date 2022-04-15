webpackHotUpdate_N_E("pages/categories",{

/***/ "./components/shared/forms/FormCreateCategory.jsx":
/*!********************************************************!*\
  !*** ./components/shared/forms/FormCreateCategory.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_category_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/category/action */ "./store/category/action.js");


var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\components\\shared\\forms\\FormCreateCategory.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var FormCreateCategory = function FormCreateCategory() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var submitCategory = function submitCategory(e) {
    e.preventDefault();
    dispatch(Object(_store_category_action__WEBPACK_IMPORTED_MODULE_3__["addCategory"])({
      name: e.target.category.value,
      description: e.target.description.value
    }));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    className: "ps-form ps-form--new",
    onSubmit: submitCategory,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ps-form__content",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: ["Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("sup", {
            children: "*"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          type: "text",
          placeholder: "Enter category name",
          name: "category"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          className: "form-control",
          rows: "6",
          placeholder: "Enter category description",
          name: "description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ps-form__bottom",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "ps-btn ps-btn--sumbit success",
        children: "Add new"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }, _this);
};

_s(FormCreateCategory, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = FormCreateCategory;
/* harmony default export */ __webpack_exports__["default"] = (FormCreateCategory);

var _c;

$RefreshReg$(_c, "FormCreateCategory");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvZm9ybXMvRm9ybUNyZWF0ZUNhdGVnb3J5LmpzeCJdLCJuYW1lcyI6WyJGb3JtQ3JlYXRlQ2F0ZWdvcnkiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwic3VibWl0Q2F0ZWdvcnkiLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRDYXRlZ29yeSIsIm5hbWUiLCJ0YXJnZXQiLCJjYXRlZ29yeSIsInZhbHVlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUFBOztBQUNoQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzdCQSxLQUFDLENBQUNDLGNBQUY7QUFFQUosWUFBUSxDQUNQSywwRUFBVyxDQUFDO0FBQ1hDLFVBQUksRUFBRUgsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLFFBQVQsQ0FBa0JDLEtBRGI7QUFFWEMsaUJBQVcsRUFBRVAsQ0FBQyxDQUFDSSxNQUFGLENBQVNHLFdBQVQsQ0FBcUJEO0FBRnZCLEtBQUQsQ0FESixDQUFSO0FBTUEsR0FURDs7QUFXQSxzQkFDQztBQUFNLGFBQVMsRUFBQyxzQkFBaEI7QUFBdUMsWUFBUSxFQUFFUCxjQUFqRDtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsOEJBQ0M7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDQztBQUFBLDBDQUNLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUlDO0FBQ0MsbUJBQVMsRUFBQyxjQURYO0FBRUMsY0FBSSxFQUFDLE1BRk47QUFHQyxxQkFBVyxFQUFDLHFCQUhiO0FBSUMsY0FBSSxFQUFDO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQWlDQztBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGdDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBRUM7QUFDQyxtQkFBUyxFQUFDLGNBRFg7QUFFQyxjQUFJLEVBQUMsR0FGTjtBQUdDLHFCQUFXLEVBQUMsNEJBSGI7QUFJQyxjQUFJLEVBQUM7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQTRDQztBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDZCQUVDO0FBQVEsaUJBQVMsRUFBQywrQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBbURBLENBaEVEOztHQUFNSCxrQjtVQUNZRSx1RDs7O0tBRFpGLGtCO0FBa0VTQSxpRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRlZ29yaWVzLjZhYzE2NjM1ZThiNmNlYzkyZDZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYWRkQ2F0ZWdvcnkgfSBmcm9tIFwifi9zdG9yZS9jYXRlZ29yeS9hY3Rpb25cIjtcblxuY29uc3QgRm9ybUNyZWF0ZUNhdGVnb3J5ID0gKCkgPT4ge1xuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cdGNvbnN0IHN1Ym1pdENhdGVnb3J5ID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRkaXNwYXRjaChcblx0XHRcdGFkZENhdGVnb3J5KHtcblx0XHRcdFx0bmFtZTogZS50YXJnZXQuY2F0ZWdvcnkudmFsdWUsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBlLnRhcmdldC5kZXNjcmlwdGlvbi52YWx1ZSxcblx0XHRcdH0pXG5cdFx0KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxmb3JtIGNsYXNzTmFtZT1cInBzLWZvcm0gcHMtZm9ybS0tbmV3XCIgb25TdWJtaXQ9e3N1Ym1pdENhdGVnb3J5fT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHMtZm9ybV9fY29udGVudFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHROYW1lPHN1cD4qPC9zdXA+XG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVudGVyIGNhdGVnb3J5IG5hbWVcIlxuXHRcdFx0XHRcdFx0bmFtZT1cImNhdGVnb3J5XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBTbHVnPHN1cD4qPC9zdXA+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgY2F0ZWdvcnkgc2x1Z1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZvcm0tZ3JvdXAtLXNlbGVjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGFyZW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInBzLXNlbGVjdFwiIHRpdGxlPVwiUGFyZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5QYXJlbnQgMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+UGFyZW50IDI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPlBhcmVudCAzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj5QYXJlbnQgNDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0PGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cblx0XHRcdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRyb3dzPVwiNlwiXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVudGVyIGNhdGVnb3J5IGRlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJkZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0PjwvdGV4dGFyZWE+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBzLWZvcm1fX2JvdHRvbVwiPlxuXHRcdFx0XHR7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJwcy1idG4gcHMtYnRuLS1ncmF5XCI+UmVzZXQ8L2J1dHRvbj4gKi99XG5cdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwicHMtYnRuIHBzLWJ0bi0tc3VtYml0IHN1Y2Nlc3NcIj5BZGQgbmV3PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Zvcm0+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtQ3JlYXRlQ2F0ZWdvcnk7XG4iXSwic291cmNlUm9vdCI6IiJ9