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
  var userDetails = userDetails.account;
  var auction = userDetails.account; // const deleteProduct = () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL3RhYmxlLWNvbHVtbnMvVXNlckNvbHVtbi5qcyJdLCJuYW1lcyI6WyJVc2VyQ29sdW1uIiwidXNlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VyRGV0YWlscyIsImFjY291bnQiLCJhdWN0aW9uIiwiYmFkZ2VWaWV3Iiwic3RhdHVzIiwibnVtIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInBob25lX251bWJlciIsImVtYWlsIiwiY3JlYXRlZEF0IiwiaWQiLCJzdHlsZXMiLCJjcmVhdGVFdmVudEJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTs7QUFFQSxTQUFTQSxVQUFULE9BQTZCO0FBQUE7O0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBQzVCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxXQUFXLEdBQUdBLFdBQVcsQ0FBQ0MsT0FBaEM7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLFdBQVcsQ0FBQ0MsT0FBNUIsQ0FINEIsQ0FLNUI7QUFDQTtBQUVBO0FBQ0E7O0FBQ0EsTUFBSUUsU0FBSjs7QUFDQSxNQUFJSCxXQUFXLENBQUNFLE9BQVosS0FBd0IsSUFBNUIsRUFBa0M7QUFDakNDLGFBQVMsZ0JBQUc7QUFBTSxlQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBWjtBQUNBLEdBRkQsTUFFTyxJQUFJSCxXQUFXLENBQUNFLE9BQVosQ0FBb0JFLE1BQXBCLEtBQStCLFNBQW5DLEVBQThDO0FBQ3BERCxhQUFTLGdCQUFHO0FBQU0sZUFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFaO0FBQ0E7O0FBQ0Qsc0JBQ0M7QUFBQSw0QkFDQztBQUFBLGdCQUFLRSxHQUFHLEdBQUc7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFBLDZCQUNDO0FBQUEsNEJBQVlMLFdBQVcsQ0FBQ00sVUFBeEIsY0FBc0NOLFdBQVcsQ0FBQ08sU0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZELGVBS0M7QUFBQSxnQkFBS1AsV0FBVyxDQUFDUTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEQsZUFNQztBQUFBLGdCQUFLUixXQUFXLENBQUNTO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORCxlQU9DO0FBQUEsZ0JBQUtULFdBQVcsQ0FBQ1U7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBELGVBUUM7QUFBQSxnQkFBS1A7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkQsZUFTQztBQUFBLDZCQUNDLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFFLHNCQUFvQkgsV0FBVyxDQUFDVyxFQUE1QztBQUFBLCtCQUNDO0FBQVEsbUJBQVMsRUFBRUMsK0VBQU0sQ0FBQ0MsaUJBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURCxlQWNDO0FBQUEsNkJBQ0MscUVBQUMsaUZBQUQ7QUFBZ0IsWUFBSSxFQUFDLGFBQXJCO0FBQW1DLFVBQUUsRUFBRWIsV0FBVyxDQUFDVztBQUFuRCxTQUE0RE4sR0FBRyxHQUFHLENBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFvQkE7O0dBcENRVCxVO1VBQ1NHLHVEOzs7S0FEVEgsVTtBQXNDTUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVyY2hhbnRzLjJhNDRmZWU1MGM2NDg2ZTFlMzZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBEcm9wZG93bkFjdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2VsZW1lbnRzL2Jhc2ljL0Ryb3Bkb3duQWN0aW9uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL1RhYmxlRXh0cmFTdHlsZXMvZXh0cmFTdHlsZXMubW9kdWxlLmNzc1wiO1xyXG4vLyBpbXBvcnQgeyBkZWxldGVBY3Rpb25DYXRlZ29yeSB9IGZyb20gXCJ+L3N0b3JlL3VzZXJEZXRhaWxzL2FjdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5mdW5jdGlvbiBVc2VyQ29sdW1uKHsgdXNlcn0pIHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblx0Y29uc3QgdXNlckRldGFpbHMgPSB1c2VyRGV0YWlscy5hY2NvdW50XHJcblx0Y29uc3QgYXVjdGlvbiA9IHVzZXJEZXRhaWxzLmFjY291bnRcclxuXHRcclxuXHQvLyBjb25zdCBkZWxldGVQcm9kdWN0ID0gKCkgPT4ge1xyXG5cdC8vICAgY29uc29sZS5sb2codXNlckRldGFpbHMuaWQpXHJcblxyXG5cdC8vIFx0ZGlzcGF0Y2goZGVsZXRlQWN0aW9uQ2F0ZWdvcnkodXNlckRldGFpbHMuaWQpKTtcclxuXHQvLyB9O1xyXG5cdGxldCBiYWRnZVZpZXc7XHJcblx0aWYgKHVzZXJEZXRhaWxzLmF1Y3Rpb24gPT09IG51bGwpIHtcclxuXHRcdGJhZGdlVmlldyA9IDxzcGFuIGNsYXNzTmFtZT1cInBzLWJhZGdlIGdyYXlcIj5ObyBFdmVudDwvc3Bhbj47XHJcblx0fSBlbHNlIGlmICh1c2VyRGV0YWlscy5hdWN0aW9uLnN0YXR1cyA9PT0gXCJwZW5kaW5nXCIpIHtcclxuXHRcdGJhZGdlVmlldyA9IDxzcGFuIGNsYXNzTmFtZT1cInBzLWJhZGdlIHN1Y2Nlc3NcIj5PbmdvaW5nPC9zcGFuPjtcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDx0cj5cclxuXHRcdFx0PHRkPntudW0gKyAxfTwvdGQ+XHJcblx0XHRcdDx0ZD5cclxuXHRcdFx0XHQ8c3Ryb25nPntgJHt1c2VyRGV0YWlscy5maXJzdF9uYW1lfSAke3VzZXJEZXRhaWxzLmxhc3RfbmFtZX0gYH08L3N0cm9uZz5cclxuXHRcdFx0PC90ZD5cclxuXHRcdFx0PHRkPnt1c2VyRGV0YWlscy5waG9uZV9udW1iZXJ9PC90ZD5cclxuXHRcdFx0PHRkPnt1c2VyRGV0YWlscy5lbWFpbH08L3RkPlxyXG5cdFx0XHQ8dGQ+e3VzZXJEZXRhaWxzLmNyZWF0ZWRBdH08L3RkPlxyXG5cdFx0XHQ8dGQ+e2JhZGdlVmlld308L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PExpbmsgaHJlZj17XCIvYmlkcy9jcmVhdGUtYmlkL1wiK3VzZXJEZXRhaWxzLmlkfT5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlRXZlbnRCdXR0b259PkNyZWF0ZSBFdmVudDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0PC90ZD5cclxuXHRcdFx0PHRkPlxyXG5cdFx0XHRcdDxEcm9wZG93bkFjdGlvbiB0eXBlPVwidXNlckRldGFpbHNcIiBpZD17dXNlckRldGFpbHMuaWR9IGtleT17bnVtICsgMX0gLz5cclxuXHRcdFx0PC90ZD5cclxuXHRcdDwvdHI+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNvbHVtbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==