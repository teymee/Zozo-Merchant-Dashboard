webpackHotUpdate_N_E("pages/customers",{

/***/ "./pages/customers/index.jsx":
/*!***********************************!*\
  !*** ./pages/customers/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/layouts/ContainerDefault */ "./components/layouts/ContainerDefault.jsx");
/* harmony import */ var _components_elements_basic_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/elements/basic/Pagination */ "./components/elements/basic/Pagination.jsx");
/* harmony import */ var _components_shared_tables_TableCustomerItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/tables/TableCustomerItems */ "./components/shared/tables/TableCustomerItems.jsx");
/* harmony import */ var _components_shared_forms_FormSearchSimple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/shared/forms/FormSearchSimple */ "./components/shared/forms/FormSearchSimple.jsx");
/* harmony import */ var _components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/shared/headers/HeaderDashboard */ "./components/shared/headers/HeaderDashboard.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_app_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/store/app/action */ "./store/app/action.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _store_customer_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/store/customer/action */ "./store/customer/action.js");


var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\pages\\customers\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();











var Option = antd__WEBPACK_IMPORTED_MODULE_9__["Select"].Option;

var CustomersPage = function CustomersPage() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_store_customer_action__WEBPACK_IMPORTED_MODULE_10__["actionGetAllCustomers"])());
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Customers",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Customers",
      description: "Martfury Customer Listing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "ps-items-listing",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "ps-section__header simple"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "ps-section__header",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "ps-section__filter",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            className: "ps-form--filter",
            action: "index.html",
            method: "get",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "ps-form__left",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "form-group",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_9__["Select"], {
                  placeholder: "Select Category",
                  className: "ps-ant-dropdown",
                  listItemHeight: 20,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option, {
                    value: "clothing-and-apparel",
                    children: "Clothing & Apparel"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option, {
                    value: "garden-and-kitchen",
                    children: "Garden & Kitchen"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "form-group",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_9__["Select"], {
                  placeholder: "Select Category",
                  className: "ps-ant-dropdown",
                  listItemHeight: 20,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option, {
                    value: "simple-product",
                    children: "Simple Product"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option, {
                    value: "groupped-product",
                    children: "Groupped product"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "form-group",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_9__["Select"], {
                  placeholder: "Status",
                  className: "ps-ant-dropdown",
                  listItemHeight: 20,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option, {
                    value: "active",
                    children: "Active"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option, {
                    value: "in-active",
                    children: "InActive"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "ps-form__right",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "ps-btn ps-btn--gray",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "icon icon-funnel mr-2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 37
                }, _this), "Filter"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "ps-section__search",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            className: "ps-form--search-simple",
            action: "index.html",
            method: "get",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              className: "form-control",
              type: "text",
              placeholder: "Search product"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "icon icon-magnifier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "ps-section__content",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_tables_TableCustomerItems__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "ps-section__footer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Show 10 in 30 items."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_elements_basic_Pagination__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, _this);
};

_s(CustomersPage, "rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"]];
});

_c = CustomersPage;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (state) {
  return state.app;
})(CustomersPage));

var _c;

$RefreshReg$(_c, "CustomersPage");

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

/***/ "./store/customer/action.js":
/*!**********************************!*\
  !*** ./store/customer/action.js ***!
  \**********************************/
/*! exports provided: actionTypes, actionGetAllCustomers, actionSuccessGetAllCustomers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionGetAllCustomers", function() { return actionGetAllCustomers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSuccessGetAllCustomers", function() { return actionSuccessGetAllCustomers; });
var actionTypes = {
  GET_ALL_CUSTOMERS: "GET_ALL_CUSTOMERS",
  GET_ALL_CUSTOMERS_SUCCESS: "GET_ALL_CUSTOMERS_SUCCESS"
};
var actionGetAllCustomers = function actionGetAllCustomers() {
  return {
    type: actionTypes.GET_ALL_CUSTOMERS
  };
};
var actionSuccessGetAllCustomers = function actionSuccessGetAllCustomers(customers) {
  console.log(customers);
  return {
    type: actionTypes.GET_ALL_CUSTOMERS_SUCCESS,
    customers: customers
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXJzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY3VzdG9tZXIvYWN0aW9uLmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIkN1c3RvbWVyc1BhZ2UiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiYWN0aW9uR2V0QWxsQ3VzdG9tZXJzIiwiY29ubmVjdCIsInN0YXRlIiwiYXBwIiwiYWN0aW9uVHlwZXMiLCJHRVRfQUxMX0NVU1RPTUVSUyIsIkdFVF9BTExfQ1VTVE9NRVJTX1NVQ0NFU1MiLCJ0eXBlIiwiYWN0aW9uU3VjY2Vzc0dldEFsbEN1c3RvbWVycyIsImN1c3RvbWVycyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLE0sR0FBV0MsMkMsQ0FBWEQsTTs7QUFDUixJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFDeEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDWkYsWUFBUSxDQUFDRyxxRkFBcUIsRUFBdEIsQ0FBUjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxzQkFDSSxxRUFBQyw0RUFBRDtBQUFrQixTQUFLLEVBQUMsV0FBeEI7QUFBQSw0QkFDSSxxRUFBQyxrRkFBRDtBQUNJLFdBQUssRUFBQyxXQURWO0FBRUksaUJBQVcsRUFBQztBQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFLSTtBQUFTLGVBQVMsRUFBQyxrQkFBbkI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFhSTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFB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YWUzOWY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnRhaW5lckRlZmF1bHQgZnJvbSAnfi9jb21wb25lbnRzL2xheW91dHMvQ29udGFpbmVyRGVmYXVsdCc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICd+L2NvbXBvbmVudHMvZWxlbWVudHMvYmFzaWMvUGFnaW5hdGlvbic7XG5pbXBvcnQgVGFibGVDdXN0b21lckl0ZW1zIGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL1RhYmxlQ3VzdG9tZXJJdGVtcyc7XG5pbXBvcnQgRm9ybVNlYXJjaFNpbXBsZSBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL2Zvcm1zL0Zvcm1TZWFyY2hTaW1wbGUnO1xuaW1wb3J0IEhlYWRlckRhc2hib2FyZCBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvSGVhZGVyRGFzaGJvYXJkJztcbmltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdG9nZ2xlRHJhd2VyTWVudSB9IGZyb20gJ34vc3RvcmUvYXBwL2FjdGlvbic7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGFjdGlvbkdldEFsbEN1c3RvbWVycyB9IGZyb20gJ34vc3RvcmUvY3VzdG9tZXIvYWN0aW9uJztcblxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcbmNvbnN0IEN1c3RvbWVyc1BhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGFjdGlvbkdldEFsbEN1c3RvbWVycygpKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lckRlZmF1bHQgdGl0bGU9XCJDdXN0b21lcnNcIj5cbiAgICAgICAgICAgIDxIZWFkZXJEYXNoYm9hcmRcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkN1c3RvbWVyc1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJNYXJ0ZnVyeSBDdXN0b21lciBMaXN0aW5nXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcy1pdGVtcy1saXN0aW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1zZWN0aW9uX19oZWFkZXIgc2ltcGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInBzLXNlY3Rpb25fX2ZpbHRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TZWFyY2hTaW1wbGUgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtc2VjdGlvbl9fYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHMtYnRuIHN1Y2Nlc3NcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1wbHVzIG1yLTJcIj48L2k+QWRkIEN1c3RvbWVyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1zZWN0aW9uX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1zZWN0aW9uX19maWx0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHMtZm9ybS0tZmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249XCJpbmRleC5odG1sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q9XCJnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWZvcm1fX2xlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBzLWFudC1kcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW1IZWlnaHQ9ezIwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiY2xvdGhpbmctYW5kLWFwcGFyZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xvdGhpbmcgJiBBcHBhcmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImdhcmRlbi1hbmQta2l0Y2hlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYXJkZW4gJiBLaXRjaGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IENhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1hbnQtZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtSGVpZ2h0PXsyMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInNpbXBsZS1wcm9kdWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpbXBsZSBQcm9kdWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImdyb3VwcGVkLXByb2R1Y3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JvdXBwZWQgcHJvZHVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHMtYW50LWRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbUhlaWdodD17MjB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJhY3RpdmVcIj5BY3RpdmU8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiaW4tYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1mb3JtX19yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBzLWJ0biBwcy1idG4tLWdyYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1mdW5uZWwgbXItMlwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtc2VjdGlvbl9fc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBzLWZvcm0tLXNlYXJjaC1zaW1wbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj1cImluZGV4Lmh0bWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZD1cImdldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHByb2R1Y3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1hZ25pZmllclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1zZWN0aW9uX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUN1c3RvbWVySXRlbXMgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXNlY3Rpb25fX2Zvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5TaG93IDEwIGluIDMwIGl0ZW1zLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9Db250YWluZXJEZWZhdWx0PlxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlLmFwcCkoQ3VzdG9tZXJzUGFnZSk7XG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPXtcclxuICAgICAgR0VUX0FMTF9DVVNUT01FUlM6IFwiR0VUX0FMTF9DVVNUT01FUlNcIixcclxuICAgICAgR0VUX0FMTF9DVVNUT01FUlNfU1VDQ0VTUzogXCJHRVRfQUxMX0NVU1RPTUVSU19TVUNDRVNTXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25HZXRBbGxDdXN0b21lcnMgPSAoKT0+e1xyXG4gICAgICByZXR1cm4ge3R5cGU6IGFjdGlvblR5cGVzLkdFVF9BTExfQ1VTVE9NRVJTfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uU3VjY2Vzc0dldEFsbEN1c3RvbWVycyA9IChjdXN0b21lcnMpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGN1c3RvbWVycylcclxuICAgICAgcmV0dXJuIHt0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQUxMX0NVU1RPTUVSU19TVUNDRVNTLGN1c3RvbWVyc31cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9