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

  var user = _ref.user,
      num = _ref.num;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var userDetails = user.account;
  var auction = user.auctions; // const deleteProduct = () => {
  //   console.log(userDetails.id)
  // 	dispatch(deleteActionCategory(userDetails.id));
  // };

  var badgeView = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: "ps-badge success",
    children: "Ongoing"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 17
  }, this); // if (user.auction === null) {
  // 	badgeView = <span className="ps-badge gray">No Event</span>;
  // } else if (user.auction.status === "pending") {
  // 	badgeView = <span className="ps-badge success">Ongoing</span>;
  // }


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: num + 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "".concat(userDetails.first_name, " ").concat(userDetails.last_name, " ")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: userDetails.phone_number
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: userDetails.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: auction.length()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: badgeView
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/bids/create-bid/" + userDetails.id,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.createEventButton,
          children: "Create Event"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "userDetails",
        id: userDetails.id
      }, num + 1, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL3RhYmxlLWNvbHVtbnMvVXNlckNvbHVtbi5qcyJdLCJuYW1lcyI6WyJVc2VyQ29sdW1uIiwidXNlciIsIm51bSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VyRGV0YWlscyIsImFjY291bnQiLCJhdWN0aW9uIiwiYXVjdGlvbnMiLCJiYWRnZVZpZXciLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicGhvbmVfbnVtYmVyIiwiZW1haWwiLCJsZW5ndGgiLCJpZCIsInN0eWxlcyIsImNyZWF0ZUV2ZW50QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUNBOztBQUVBLFNBQVNBLFVBQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFBQSxNQUFOQyxHQUFNLFFBQU5BLEdBQU07QUFDaEMsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLFdBQVcsR0FBR0osSUFBSSxDQUFDSyxPQUF6QjtBQUNBLE1BQU1DLE9BQU8sR0FBR04sSUFBSSxDQUFDTyxRQUFyQixDQUhnQyxDQUtoQztBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFJQyxTQUFTLGdCQUFFO0FBQU0sYUFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFmLENBWGdDLENBWWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLHNCQUNDO0FBQUEsNEJBQ0M7QUFBQSxnQkFBS1AsR0FBRyxHQUFHO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUM7QUFBQSw2QkFDQztBQUFBLDRCQUFZRyxXQUFXLENBQUNLLFVBQXhCLGNBQXNDTCxXQUFXLENBQUNNLFNBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRCxlQUtDO0FBQUEsZ0JBQUtOLFdBQVcsQ0FBQ087QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxELGVBTUM7QUFBQSxnQkFBS1AsV0FBVyxDQUFDUTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkQsZUFPQztBQUFBLGdCQUFLTixPQUFPLENBQUNPLE1BQVI7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEQsZUFRQztBQUFBLGdCQUFLTDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRCxlQVNDO0FBQUEsNkJBQ0MscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUUsc0JBQW9CSixXQUFXLENBQUNVLEVBQTVDO0FBQUEsK0JBQ0M7QUFBUSxtQkFBUyxFQUFFQywrRUFBTSxDQUFDQyxpQkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRELGVBY0M7QUFBQSw2QkFDQyxxRUFBQyxpRkFBRDtBQUFnQixZQUFJLEVBQUMsYUFBckI7QUFBbUMsVUFBRSxFQUFFWixXQUFXLENBQUNVO0FBQW5ELFNBQTREYixHQUFHLEdBQUcsQ0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW9CQTs7R0FyQ1FGLFU7VUFDU0ksdUQ7OztLQURUSixVO0FBdUNNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXJjaGFudHMuYzNiN2MxNDMxNWZjMmM5MTVmN2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IERyb3Bkb3duQWN0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZWxlbWVudHMvYmFzaWMvRHJvcGRvd25BY3Rpb25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vVGFibGVFeHRyYVN0eWxlcy9leHRyYVN0eWxlcy5tb2R1bGUuY3NzXCI7XHJcbi8vIGltcG9ydCB7IGRlbGV0ZUFjdGlvbkNhdGVnb3J5IH0gZnJvbSBcIn4vc3RvcmUvdXNlckRldGFpbHMvYWN0aW9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmZ1bmN0aW9uIFVzZXJDb2x1bW4oeyB1c2VyLG51bX0pIHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblx0Y29uc3QgdXNlckRldGFpbHMgPSB1c2VyLmFjY291bnRcclxuXHRjb25zdCBhdWN0aW9uID0gdXNlci5hdWN0aW9uc1xyXG5cdFxyXG5cdC8vIGNvbnN0IGRlbGV0ZVByb2R1Y3QgPSAoKSA9PiB7XHJcblx0Ly8gICBjb25zb2xlLmxvZyh1c2VyRGV0YWlscy5pZClcclxuXHJcblx0Ly8gXHRkaXNwYXRjaChkZWxldGVBY3Rpb25DYXRlZ29yeSh1c2VyRGV0YWlscy5pZCkpO1xyXG5cdC8vIH07XHJcblxyXG5cdGxldCBiYWRnZVZpZXc9IDxzcGFuIGNsYXNzTmFtZT1cInBzLWJhZGdlIHN1Y2Nlc3NcIj5PbmdvaW5nPC9zcGFuPjtcclxuXHQvLyBpZiAodXNlci5hdWN0aW9uID09PSBudWxsKSB7XHJcblx0Ly8gXHRiYWRnZVZpZXcgPSA8c3BhbiBjbGFzc05hbWU9XCJwcy1iYWRnZSBncmF5XCI+Tm8gRXZlbnQ8L3NwYW4+O1xyXG5cdC8vIH0gZWxzZSBpZiAodXNlci5hdWN0aW9uLnN0YXR1cyA9PT0gXCJwZW5kaW5nXCIpIHtcclxuXHQvLyBcdGJhZGdlVmlldyA9IDxzcGFuIGNsYXNzTmFtZT1cInBzLWJhZGdlIHN1Y2Nlc3NcIj5PbmdvaW5nPC9zcGFuPjtcclxuXHQvLyB9XHJcblx0cmV0dXJuIChcclxuXHRcdDx0cj5cclxuXHRcdFx0PHRkPntudW0gKyAxfTwvdGQ+XHJcblx0XHRcdDx0ZD5cclxuXHRcdFx0XHQ8c3Ryb25nPntgJHt1c2VyRGV0YWlscy5maXJzdF9uYW1lfSAke3VzZXJEZXRhaWxzLmxhc3RfbmFtZX0gYH08L3N0cm9uZz5cclxuXHRcdFx0PC90ZD5cclxuXHRcdFx0PHRkPnt1c2VyRGV0YWlscy5waG9uZV9udW1iZXJ9PC90ZD5cclxuXHRcdFx0PHRkPnt1c2VyRGV0YWlscy5lbWFpbH08L3RkPlxyXG5cdFx0XHQ8dGQ+e2F1Y3Rpb24ubGVuZ3RoKCl9PC90ZD5cclxuXHRcdFx0PHRkPntiYWRnZVZpZXd9PC90ZD5cclxuXHRcdFx0PHRkPlxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9e1wiL2JpZHMvY3JlYXRlLWJpZC9cIit1c2VyRGV0YWlscy5pZH0+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZUV2ZW50QnV0dG9ufT5DcmVhdGUgRXZlbnQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdDwvdGQ+XHJcblx0XHRcdDx0ZD5cclxuXHRcdFx0XHQ8RHJvcGRvd25BY3Rpb24gdHlwZT1cInVzZXJEZXRhaWxzXCIgaWQ9e3VzZXJEZXRhaWxzLmlkfSBrZXk9e251bSArIDF9IC8+XHJcblx0XHRcdDwvdGQ+XHJcblx0XHQ8L3RyPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJDb2x1bW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=