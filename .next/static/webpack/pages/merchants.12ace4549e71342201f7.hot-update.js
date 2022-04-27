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


var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\components\\shared\\tables\\table-columns\\UserColumn.js",
    _s = $RefreshSig$();




 // import { deleteActionCategory } from "~/store/userDetails/action";



function UserColumn(_ref) {
  _s();

  var user = _ref.user;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var userDetails = userDetails.account; // const deleteProduct = () => {
  //   console.log(userDetails.id)
  // 	dispatch(deleteActionCategory(userDetails.id));
  // };

  var badgeView;

  if (userDetails.auction === null) {
    badgeView = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "ps-badge gray",
      children: "No Event"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }, this);
  } else if (userDetails.auction.status === "pending") {
    badgeView = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "ps-badge success",
      children: "Ongoing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: num + 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "".concat(userDetails.first_name, " ").concat(userDetails.last_name, " ")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: userDetails.phone_number
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: userDetails.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: userDetails.createdAt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: badgeView
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/bids/create-bid/" + userDetails.id,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.createEventButton,
          children: "Create Event"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "userDetails",
        id: userDetails.id
      }, num + 1, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL3RhYmxlLWNvbHVtbnMvVXNlckNvbHVtbi5qcyJdLCJuYW1lcyI6WyJVc2VyQ29sdW1uIiwidXNlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VyRGV0YWlscyIsImFjY291bnQiLCJiYWRnZVZpZXciLCJhdWN0aW9uIiwic3RhdHVzIiwibnVtIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInBob25lX251bWJlciIsImVtYWlsIiwiY3JlYXRlZEF0IiwiaWQiLCJzdHlsZXMiLCJjcmVhdGVFdmVudEJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTs7QUFFQSxTQUFTQSxVQUFULE9BQTZCO0FBQUE7O0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBQzVCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxXQUFXLEdBQUdBLFdBQVcsQ0FBQ0MsT0FBaEMsQ0FGNEIsQ0FLNUI7QUFDQTtBQUVBO0FBQ0E7O0FBQ0EsTUFBSUMsU0FBSjs7QUFDQSxNQUFJRixXQUFXLENBQUNHLE9BQVosS0FBd0IsSUFBNUIsRUFBa0M7QUFDakNELGFBQVMsZ0JBQUc7QUFBTSxlQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBWjtBQUNBLEdBRkQsTUFFTyxJQUFJRixXQUFXLENBQUNHLE9BQVosQ0FBb0JDLE1BQXBCLEtBQStCLFNBQW5DLEVBQThDO0FBQ3BERixhQUFTLGdCQUFHO0FBQU0sZUFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFaO0FBQ0E7O0FBQ0Qsc0JBQ0M7QUFBQSw0QkFDQztBQUFBLGdCQUFLRyxHQUFHLEdBQUc7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFBLDZCQUNDO0FBQUEsNEJBQVlMLFdBQVcsQ0FBQ00sVUFBeEIsY0FBc0NOLFdBQVcsQ0FBQ08sU0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZELGVBS0M7QUFBQSxnQkFBS1AsV0FBVyxDQUFDUTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEQsZUFNQztBQUFBLGdCQUFLUixXQUFXLENBQUNTO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORCxlQU9DO0FBQUEsZ0JBQUtULFdBQVcsQ0FBQ1U7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBELGVBUUM7QUFBQSxnQkFBS1I7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkQsZUFTQztBQUFBLDZCQUNDLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFFLHNCQUFvQkYsV0FBVyxDQUFDVyxFQUE1QztBQUFBLCtCQUNDO0FBQVEsbUJBQVMsRUFBRUMsK0VBQU0sQ0FBQ0MsaUJBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURCxlQWNDO0FBQUEsNkJBQ0MscUVBQUMsaUZBQUQ7QUFBZ0IsWUFBSSxFQUFDLGFBQXJCO0FBQW1DLFVBQUUsRUFBRWIsV0FBVyxDQUFDVztBQUFuRCxTQUE0RE4sR0FBRyxHQUFHLENBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFvQkE7O0dBcENRVCxVO1VBQ1NHLHVEOzs7S0FEVEgsVTtBQXNDTUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVyY2hhbnRzLjEyYWNlNDU0OWU3MTM0MjIwMWY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBEcm9wZG93bkFjdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2VsZW1lbnRzL2Jhc2ljL0Ryb3Bkb3duQWN0aW9uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL1RhYmxlRXh0cmFTdHlsZXMvZXh0cmFTdHlsZXMubW9kdWxlLmNzc1wiO1xyXG4vLyBpbXBvcnQgeyBkZWxldGVBY3Rpb25DYXRlZ29yeSB9IGZyb20gXCJ+L3N0b3JlL3VzZXJEZXRhaWxzL2FjdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5mdW5jdGlvbiBVc2VyQ29sdW1uKHsgdXNlcn0pIHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblx0Y29uc3QgdXNlckRldGFpbHMgPSB1c2VyRGV0YWlscy5hY2NvdW50XHJcblx0XHJcblx0XHJcblx0Ly8gY29uc3QgZGVsZXRlUHJvZHVjdCA9ICgpID0+IHtcclxuXHQvLyAgIGNvbnNvbGUubG9nKHVzZXJEZXRhaWxzLmlkKVxyXG5cclxuXHQvLyBcdGRpc3BhdGNoKGRlbGV0ZUFjdGlvbkNhdGVnb3J5KHVzZXJEZXRhaWxzLmlkKSk7XHJcblx0Ly8gfTtcclxuXHRsZXQgYmFkZ2VWaWV3O1xyXG5cdGlmICh1c2VyRGV0YWlscy5hdWN0aW9uID09PSBudWxsKSB7XHJcblx0XHRiYWRnZVZpZXcgPSA8c3BhbiBjbGFzc05hbWU9XCJwcy1iYWRnZSBncmF5XCI+Tm8gRXZlbnQ8L3NwYW4+O1xyXG5cdH0gZWxzZSBpZiAodXNlckRldGFpbHMuYXVjdGlvbi5zdGF0dXMgPT09IFwicGVuZGluZ1wiKSB7XHJcblx0XHRiYWRnZVZpZXcgPSA8c3BhbiBjbGFzc05hbWU9XCJwcy1iYWRnZSBzdWNjZXNzXCI+T25nb2luZzwvc3Bhbj47XHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8dHI+XHJcblx0XHRcdDx0ZD57bnVtICsgMX08L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PHN0cm9uZz57YCR7dXNlckRldGFpbHMuZmlyc3RfbmFtZX0gJHt1c2VyRGV0YWlscy5sYXN0X25hbWV9IGB9PC9zdHJvbmc+XHJcblx0XHRcdDwvdGQ+XHJcblx0XHRcdDx0ZD57dXNlckRldGFpbHMucGhvbmVfbnVtYmVyfTwvdGQ+XHJcblx0XHRcdDx0ZD57dXNlckRldGFpbHMuZW1haWx9PC90ZD5cclxuXHRcdFx0PHRkPnt1c2VyRGV0YWlscy5jcmVhdGVkQXR9PC90ZD5cclxuXHRcdFx0PHRkPntiYWRnZVZpZXd9PC90ZD5cclxuXHRcdFx0PHRkPlxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9e1wiL2JpZHMvY3JlYXRlLWJpZC9cIit1c2VyRGV0YWlscy5pZH0+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZUV2ZW50QnV0dG9ufT5DcmVhdGUgRXZlbnQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdDwvdGQ+XHJcblx0XHRcdDx0ZD5cclxuXHRcdFx0XHQ8RHJvcGRvd25BY3Rpb24gdHlwZT1cInVzZXJEZXRhaWxzXCIgaWQ9e3VzZXJEZXRhaWxzLmlkfSBrZXk9e251bSArIDF9IC8+XHJcblx0XHRcdDwvdGQ+XHJcblx0XHQ8L3RyPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJDb2x1bW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=