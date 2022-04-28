webpackHotUpdate_N_E("pages/merchants",{

/***/ "./components/shared/tables/table-columns/UserColumn.js":
/*!**************************************************************!*\
  !*** ./components/shared/tables/table-columns/UserColumn.js ***!
  \**************************************************************/
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
/* harmony import */ var _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TableExtraStyles/extraStyles.module.css */ "./components/shared/tables/TableExtraStyles/extraStyles.module.css");
/* harmony import */ var _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_merchant_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/store/merchant/action */ "./store/merchant/action.js");


var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\components\\shared\\tables\\table-columns\\UserColumn.js",
    _s = $RefreshSig$();




 // import { deleteActionCategory } from "~/store/userDetails/action";




function UserColumn(_ref) {
  _s();

  var user = _ref.user,
      num = _ref.num;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var userDetails = user.account;
  var pendingAuction = user.auctions.filter(function (auction) {
    return auction.status = "pending";
  }); // const deleteProduct = () => {
  //   console.log(userDetails.id)
  // 	dispatch(deleteActionCategory(userDetails.id));
  // };

  var verifyUser = function verifyUser() {
    dispatch(Object(_store_merchant_action__WEBPACK_IMPORTED_MODULE_6__["actionVerifyMechant"])(userDetails.id));
  };

  var badgeView;

  if (!userDetails.verified) {
    badgeView = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "ps-badge gray",
      children: "Not Verified"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }, this);
  } else {
    badgeView = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "ps-badge success",
      children: "Verified"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: num + 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "".concat(userDetails.first_name, " ").concat(userDetails.last_name, " ")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: userDetails.phone_number
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: userDetails.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      colSpan: 1,
      children: pendingAuction.length
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: "0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: "0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: badgeView
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.createEventButton,
        onClick: verifyUser,
        children: "Verify"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "userDetails",
        id: userDetails.id
      }, num + 1, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 3
  }, this);
}

_s(UserColumn, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = UserColumn;
/* harmony default export */ __webpack_exports__["default"] = (UserColumn);

var _c;

$RefreshReg$(_c, "UserColumn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL3RhYmxlLWNvbHVtbnMvVXNlckNvbHVtbi5qcyJdLCJuYW1lcyI6WyJVc2VyQ29sdW1uIiwidXNlciIsIm51bSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VyRGV0YWlscyIsImFjY291bnQiLCJwZW5kaW5nQXVjdGlvbiIsImF1Y3Rpb25zIiwiZmlsdGVyIiwiYXVjdGlvbiIsInN0YXR1cyIsInZlcmlmeVVzZXIiLCJhY3Rpb25WZXJpZnlNZWNoYW50IiwiaWQiLCJiYWRnZVZpZXciLCJ2ZXJpZmllZCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJwaG9uZV9udW1iZXIiLCJlbWFpbCIsImxlbmd0aCIsInN0eWxlcyIsImNyZWF0ZUV2ZW50QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsT0FBbUM7QUFBQTs7QUFBQSxNQUFiQyxJQUFhLFFBQWJBLElBQWE7QUFBQSxNQUFQQyxHQUFPLFFBQVBBLEdBQU87QUFDbEMsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLFdBQVcsR0FBR0osSUFBSSxDQUFDSyxPQUF6QjtBQUNBLE1BQU1DLGNBQWMsR0FBR04sSUFBSSxDQUFDTyxRQUFMLENBQWNDLE1BQWQsQ0FBcUIsVUFBQ0MsT0FBRCxFQUFhO0FBQ3hELFdBQVFBLE9BQU8sQ0FBQ0MsTUFBUixHQUFpQixTQUF6QjtBQUNBLEdBRnNCLENBQXZCLENBSGtDLENBT2xDO0FBQ0E7QUFFQTtBQUNBOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEJULFlBQVEsQ0FBQ1Usa0ZBQW1CLENBQUNSLFdBQVcsQ0FBQ1MsRUFBYixDQUFwQixDQUFSO0FBQ0EsR0FGRDs7QUFLQSxNQUFJQyxTQUFKOztBQUNBLE1BQUksQ0FBQ1YsV0FBVyxDQUFDVyxRQUFqQixFQUEyQjtBQUMxQkQsYUFBUyxnQkFBRztBQUFNLGVBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFaO0FBQ0EsR0FGRCxNQUVRO0FBQ1BBLGFBQVMsZ0JBQUc7QUFBTSxlQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVo7QUFDQTs7QUFDRCxzQkFDQztBQUFBLDRCQUNDO0FBQUEsZ0JBQUtiLEdBQUcsR0FBRztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDO0FBQUEsNkJBQ0M7QUFBQSw0QkFBWUcsV0FBVyxDQUFDWSxVQUF4QixjQUFzQ1osV0FBVyxDQUFDYSxTQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQsZUFLQztBQUFBLGdCQUFLYixXQUFXLENBQUNjO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRCxlQU1DO0FBQUEsZ0JBQUtkLFdBQVcsQ0FBQ2U7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5ELGVBT0M7QUFBSSxhQUFPLEVBQUUsQ0FBYjtBQUFBLGdCQUFpQmIsY0FBYyxDQUFDYztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEQsZUFRQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJELGVBU0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURCxlQVVDO0FBQUEsZ0JBQUtOO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZELGVBV0M7QUFBQSw2QkFDQztBQUFRLGlCQUFTLEVBQUVPLCtFQUFNLENBQUNDLGlCQUExQjtBQUE2QyxlQUFPLEVBQUVYLFVBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhELGVBZ0JDO0FBQUEsNkJBQ0MscUVBQUMsaUZBQUQ7QUFBZ0IsWUFBSSxFQUFDLGFBQXJCO0FBQW1DLFVBQUUsRUFBRVAsV0FBVyxDQUFDUztBQUFuRCxTQUE0RFosR0FBRyxHQUFHLENBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBc0JBOztHQTlDUUYsVTtVQUNTSSx1RDs7O0tBRFRKLFU7QUFnRE1BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lcmNoYW50cy45NWY4YWY5NmQ1NzdiZjlhMWYxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgRHJvcGRvd25BY3Rpb24gZnJvbSBcIn4vY29tcG9uZW50cy9lbGVtZW50cy9iYXNpYy9Ecm9wZG93bkFjdGlvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9UYWJsZUV4dHJhU3R5bGVzL2V4dHJhU3R5bGVzLm1vZHVsZS5jc3NcIjtcclxuLy8gaW1wb3J0IHsgZGVsZXRlQWN0aW9uQ2F0ZWdvcnkgfSBmcm9tIFwifi9zdG9yZS91c2VyRGV0YWlscy9hY3Rpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBhY3Rpb25WZXJpZnlNZWNoYW50IH0gZnJvbSBcIn4vc3RvcmUvbWVyY2hhbnQvYWN0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiBVc2VyQ29sdW1uKHsgdXNlciwgbnVtIH0pIHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblx0Y29uc3QgdXNlckRldGFpbHMgPSB1c2VyLmFjY291bnQ7XHJcblx0Y29uc3QgcGVuZGluZ0F1Y3Rpb24gPSB1c2VyLmF1Y3Rpb25zLmZpbHRlcigoYXVjdGlvbikgPT4ge1xyXG5cdFx0cmV0dXJuIChhdWN0aW9uLnN0YXR1cyA9IFwicGVuZGluZ1wiKTtcclxuXHR9KTtcclxuXHJcblx0Ly8gY29uc3QgZGVsZXRlUHJvZHVjdCA9ICgpID0+IHtcclxuXHQvLyAgIGNvbnNvbGUubG9nKHVzZXJEZXRhaWxzLmlkKVxyXG5cclxuXHQvLyBcdGRpc3BhdGNoKGRlbGV0ZUFjdGlvbkNhdGVnb3J5KHVzZXJEZXRhaWxzLmlkKSk7XHJcblx0Ly8gfTtcclxuXHJcblx0Y29uc3QgdmVyaWZ5VXNlciA9ICgpID0+IHtcclxuXHRcdGRpc3BhdGNoKGFjdGlvblZlcmlmeU1lY2hhbnQodXNlckRldGFpbHMuaWQpKTtcclxuXHR9O1xyXG5cclxuXHJcblx0bGV0IGJhZGdlVmlldztcclxuXHRpZiAoIXVzZXJEZXRhaWxzLnZlcmlmaWVkKSB7XHJcblx0XHRiYWRnZVZpZXcgPSA8c3BhbiBjbGFzc05hbWU9XCJwcy1iYWRnZSBncmF5XCI+Tm90IFZlcmlmaWVkPC9zcGFuPjtcclxuXHR9IGVsc2UgIHtcclxuXHRcdGJhZGdlVmlldyA9IDxzcGFuIGNsYXNzTmFtZT1cInBzLWJhZGdlIHN1Y2Nlc3NcIj5WZXJpZmllZDwvc3Bhbj47XHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8dHI+XHJcblx0XHRcdDx0ZD57bnVtICsgMX08L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PHN0cm9uZz57YCR7dXNlckRldGFpbHMuZmlyc3RfbmFtZX0gJHt1c2VyRGV0YWlscy5sYXN0X25hbWV9IGB9PC9zdHJvbmc+XHJcblx0XHRcdDwvdGQ+XHJcblx0XHRcdDx0ZD57dXNlckRldGFpbHMucGhvbmVfbnVtYmVyfTwvdGQ+XHJcblx0XHRcdDx0ZD57dXNlckRldGFpbHMuZW1haWx9PC90ZD5cclxuXHRcdFx0PHRkIGNvbFNwYW49ezF9PntwZW5kaW5nQXVjdGlvbi5sZW5ndGh9PC90ZD5cclxuXHRcdFx0PHRkPjA8L3RkPlxyXG5cdFx0XHQ8dGQ+MDwvdGQ+XHJcblx0XHRcdDx0ZD57YmFkZ2VWaWV3fTwvdGQ+XHJcblx0XHRcdDx0ZD5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZUV2ZW50QnV0dG9ufSBvbkNsaWNrPXt2ZXJpZnlVc2VyfT5cclxuXHRcdFx0XHRcdFZlcmlmeVxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PERyb3Bkb3duQWN0aW9uIHR5cGU9XCJ1c2VyRGV0YWlsc1wiIGlkPXt1c2VyRGV0YWlscy5pZH0ga2V5PXtudW0gKyAxfSAvPlxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0PC90cj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29sdW1uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9