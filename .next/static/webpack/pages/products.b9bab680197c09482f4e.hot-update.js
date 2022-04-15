webpackHotUpdate_N_E("pages/products",{

/***/ "./components/shared/tables/TableProjectItems.jsx":
/*!********************************************************!*\
  !*** ./components/shared/tables/TableProjectItems.jsx ***!
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
/* harmony import */ var _components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/elements/basic/DropdownAction */ "./components/elements/basic/DropdownAction.jsx");
/* harmony import */ var _store_product_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/store/product/action */ "./store/product/action.js");
/* harmony import */ var _table_columns_ProductColumn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table-columns/ProductColumn */ "./components/shared/tables/table-columns/ProductColumn.js");


var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\components\\shared\\tables\\TableProjectItems.jsx",
    _this = undefined,
    _s = $RefreshSig$();








var TableProjectItems = function TableProjectItems() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.product;
  }),
      product = _useSelector.product,
      productGetLoading = _useSelector.productGetLoading;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_store_product_action__WEBPACK_IMPORTED_MODULE_4__["getMerchantProduct"])("1"));
  }, []);
  var products;

  if (!productGetLoading) {
    products = product.map(function (product, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_table_columns_ProductColumn__WEBPACK_IMPORTED_MODULE_5__["default"], {
        product: product,
        num: index
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 24
      }, _this);
    });
  }

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
            lineNumber: 29,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Categories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Bid Status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Create Event"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: !productGetLoading && products
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, _this);
};

_s(TableProjectItems, "rOXFwGrvmf9j+sXSnI6hs8WMO2A=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = TableProjectItems;
/* harmony default export */ __webpack_exports__["default"] = (TableProjectItems);

var _c;

$RefreshReg$(_c, "TableProjectItems");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL1RhYmxlUHJvamVjdEl0ZW1zLmpzeCJdLCJuYW1lcyI6WyJUYWJsZVByb2plY3RJdGVtcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicHJvZHVjdCIsInByb2R1Y3RHZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwiZ2V0TWVyY2hhbnRQcm9kdWN0IiwicHJvZHVjdHMiLCJtYXAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFBQTs7QUFDNUIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFENEIscUJBRVNDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUVBLEtBQUssQ0FBQ0MsT0FBUjtBQUFBLEdBQU4sQ0FGcEI7QUFBQSxNQUVyQkEsT0FGcUIsZ0JBRXJCQSxPQUZxQjtBQUFBLE1BRVpDLGlCQUZZLGdCQUVaQSxpQkFGWTs7QUFLNUJDLHlEQUFTLENBQUMsWUFBTTtBQUNmTixZQUFRLENBQUNPLGdGQUFrQixDQUFDLEdBQUQsQ0FBbkIsQ0FBUjtBQUNBLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxNQUFLQyxRQUFMOztBQUNBLE1BQUcsQ0FBQ0gsaUJBQUosRUFBc0I7QUFDbEJHLFlBQVEsR0FBR0osT0FBTyxDQUFDSyxHQUFSLENBQVksVUFBQ0wsT0FBRCxFQUFVTSxLQUFWLEVBQWtCO0FBQ2pDLDBCQUFPLHFFQUFDLG9FQUFEO0FBQWUsZUFBTyxFQUFFTixPQUF4QjtBQUFpQyxXQUFHLEVBQUVNO0FBQXRDLFNBQWtEQSxLQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxLQUZNLENBQVg7QUFHSDs7QUFFRCxzQkFDSTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBLDJCQUNJO0FBQU8sZUFBUyxFQUFDLGdCQUFqQjtBQUFBLDhCQUNJO0FBQUEsK0JBQ0k7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSixlQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKLGVBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkosZUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSixlQVVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBZUk7QUFBQSxrQkFBUSxDQUFDTCxpQkFBRCxJQUFzQkc7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVCSCxDQXZDRDs7R0FBTVQsaUI7VUFDZUUsdUQsRUFDb0JDLHVEOzs7S0FGbkNILGlCO0FBeUNTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy5iOWJhYjY4MDE5N2MwOTQ4MmY0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgRHJvcGRvd25BY3Rpb24gZnJvbSAnfi9jb21wb25lbnRzL2VsZW1lbnRzL2Jhc2ljL0Ryb3Bkb3duQWN0aW9uJztcbmltcG9ydCB7IGdldE1lcmNoYW50UHJvZHVjdCB9IGZyb20gJ34vc3RvcmUvcHJvZHVjdC9hY3Rpb24nO1xuaW1wb3J0IFByb2R1Y3RDb2x1bW4gZnJvbSAnLi90YWJsZS1jb2x1bW5zL1Byb2R1Y3RDb2x1bW4nO1xuXG5jb25zdCBUYWJsZVByb2plY3RJdGVtcyA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgICBjb25zdCB7cHJvZHVjdCwgcHJvZHVjdEdldExvYWRpbmd9ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLnByb2R1Y3QpXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgIGRpc3BhdGNoKGdldE1lcmNoYW50UHJvZHVjdChcIjFcIikpXG4gICAgfSwgW10pXG4gICAgXG4gICAgbGV0ICBwcm9kdWN0cyBcbiAgICBpZighcHJvZHVjdEdldExvYWRpbmcpe1xuICAgICAgICBwcm9kdWN0cyA9IHByb2R1Y3QubWFwKChwcm9kdWN0LCBpbmRleCk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gPFByb2R1Y3RDb2x1bW4gcHJvZHVjdD17cHJvZHVjdH0gbnVtPXtpbmRleH0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgcHMtdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JRDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNhdGVnb3JpZXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkJpZCBTdGF0dXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNyZWF0ZSBFdmVudDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT57IXByb2R1Y3RHZXRMb2FkaW5nICYmIHByb2R1Y3RzfTwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlUHJvamVjdEl0ZW1zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==