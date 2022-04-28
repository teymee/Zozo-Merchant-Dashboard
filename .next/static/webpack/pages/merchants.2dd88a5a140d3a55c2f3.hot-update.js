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

  console.log(user.verified);
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
  } else if (user.auction.status === "pending") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL3RhYmxlLWNvbHVtbnMvVXNlckNvbHVtbi5qcyJdLCJuYW1lcyI6WyJVc2VyQ29sdW1uIiwidXNlciIsIm51bSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VyRGV0YWlscyIsImFjY291bnQiLCJwZW5kaW5nQXVjdGlvbiIsImF1Y3Rpb25zIiwiZmlsdGVyIiwiYXVjdGlvbiIsInN0YXR1cyIsInZlcmlmeVVzZXIiLCJhY3Rpb25WZXJpZnlNZWNoYW50IiwiaWQiLCJjb25zb2xlIiwibG9nIiwidmVyaWZpZWQiLCJiYWRnZVZpZXciLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicGhvbmVfbnVtYmVyIiwiZW1haWwiLCJsZW5ndGgiLCJzdHlsZXMiLCJjcmVhdGVFdmVudEJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULE9BQW1DO0FBQUE7O0FBQUEsTUFBYkMsSUFBYSxRQUFiQSxJQUFhO0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPO0FBQ2xDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxXQUFXLEdBQUdKLElBQUksQ0FBQ0ssT0FBekI7QUFDQSxNQUFNQyxjQUFjLEdBQUdOLElBQUksQ0FBQ08sUUFBTCxDQUFjQyxNQUFkLENBQXFCLFVBQUNDLE9BQUQsRUFBYTtBQUN4RCxXQUFRQSxPQUFPLENBQUNDLE1BQVIsR0FBaUIsU0FBekI7QUFDQSxHQUZzQixDQUF2QixDQUhrQyxDQU9sQztBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3hCVCxZQUFRLENBQUNVLGtGQUFtQixDQUFDUixXQUFXLENBQUNTLEVBQWIsQ0FBcEIsQ0FBUjtBQUNBLEdBRkQ7O0FBSUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZZixJQUFJLENBQUNnQixRQUFqQjtBQUNBLE1BQUlDLFNBQUo7O0FBQ0EsTUFBSSxDQUFDYixXQUFXLENBQUNZLFFBQWpCLEVBQTJCO0FBQzFCQyxhQUFTLGdCQUFHO0FBQU0sZUFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVo7QUFDQSxHQUZELE1BRU8sSUFBSWpCLElBQUksQ0FBQ1MsT0FBTCxDQUFhQyxNQUFiLEtBQXdCLFNBQTVCLEVBQXVDO0FBQzdDTyxhQUFTLGdCQUFHO0FBQU0sZUFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFaO0FBQ0E7O0FBQ0Qsc0JBQ0M7QUFBQSw0QkFDQztBQUFBLGdCQUFLaEIsR0FBRyxHQUFHO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUM7QUFBQSw2QkFDQztBQUFBLDRCQUFZRyxXQUFXLENBQUNjLFVBQXhCLGNBQXNDZCxXQUFXLENBQUNlLFNBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRCxlQUtDO0FBQUEsZ0JBQUtmLFdBQVcsQ0FBQ2dCO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRCxlQU1DO0FBQUEsZ0JBQUtoQixXQUFXLENBQUNpQjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkQsZUFPQztBQUFJLGFBQU8sRUFBRSxDQUFiO0FBQUEsZ0JBQWlCZixjQUFjLENBQUNnQjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEQsZUFRQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJELGVBU0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURCxlQVVDO0FBQUEsZ0JBQUtMO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZELGVBV0M7QUFBQSw2QkFDQztBQUFRLGlCQUFTLEVBQUVNLCtFQUFNLENBQUNDLGlCQUExQjtBQUE2QyxlQUFPLEVBQUViLFVBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhELGVBZ0JDO0FBQUEsNkJBQ0MscUVBQUMsaUZBQUQ7QUFBZ0IsWUFBSSxFQUFDLGFBQXJCO0FBQW1DLFVBQUUsRUFBRVAsV0FBVyxDQUFDUztBQUFuRCxTQUE0RFosR0FBRyxHQUFHLENBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBc0JBOztHQTlDUUYsVTtVQUNTSSx1RDs7O0tBRFRKLFU7QUFnRE1BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lcmNoYW50cy4yZGQ4OGE1YTE0MGQzYTU1YzJmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgRHJvcGRvd25BY3Rpb24gZnJvbSBcIn4vY29tcG9uZW50cy9lbGVtZW50cy9iYXNpYy9Ecm9wZG93bkFjdGlvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9UYWJsZUV4dHJhU3R5bGVzL2V4dHJhU3R5bGVzLm1vZHVsZS5jc3NcIjtcclxuLy8gaW1wb3J0IHsgZGVsZXRlQWN0aW9uQ2F0ZWdvcnkgfSBmcm9tIFwifi9zdG9yZS91c2VyRGV0YWlscy9hY3Rpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBhY3Rpb25WZXJpZnlNZWNoYW50IH0gZnJvbSBcIn4vc3RvcmUvbWVyY2hhbnQvYWN0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiBVc2VyQ29sdW1uKHsgdXNlciwgbnVtIH0pIHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblx0Y29uc3QgdXNlckRldGFpbHMgPSB1c2VyLmFjY291bnQ7XHJcblx0Y29uc3QgcGVuZGluZ0F1Y3Rpb24gPSB1c2VyLmF1Y3Rpb25zLmZpbHRlcigoYXVjdGlvbikgPT4ge1xyXG5cdFx0cmV0dXJuIChhdWN0aW9uLnN0YXR1cyA9IFwicGVuZGluZ1wiKTtcclxuXHR9KTtcclxuXHJcblx0Ly8gY29uc3QgZGVsZXRlUHJvZHVjdCA9ICgpID0+IHtcclxuXHQvLyAgIGNvbnNvbGUubG9nKHVzZXJEZXRhaWxzLmlkKVxyXG5cclxuXHQvLyBcdGRpc3BhdGNoKGRlbGV0ZUFjdGlvbkNhdGVnb3J5KHVzZXJEZXRhaWxzLmlkKSk7XHJcblx0Ly8gfTtcclxuXHJcblx0Y29uc3QgdmVyaWZ5VXNlciA9ICgpID0+IHtcclxuXHRcdGRpc3BhdGNoKGFjdGlvblZlcmlmeU1lY2hhbnQodXNlckRldGFpbHMuaWQpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zb2xlLmxvZyh1c2VyLnZlcmlmaWVkKVxyXG5cdGxldCBiYWRnZVZpZXc7XHJcblx0aWYgKCF1c2VyRGV0YWlscy52ZXJpZmllZCkge1xyXG5cdFx0YmFkZ2VWaWV3ID0gPHNwYW4gY2xhc3NOYW1lPVwicHMtYmFkZ2UgZ3JheVwiPk5vdCBWZXJpZmllZDwvc3Bhbj47XHJcblx0fSBlbHNlIGlmICh1c2VyLmF1Y3Rpb24uc3RhdHVzID09PSBcInBlbmRpbmdcIikge1xyXG5cdFx0YmFkZ2VWaWV3ID0gPHNwYW4gY2xhc3NOYW1lPVwicHMtYmFkZ2Ugc3VjY2Vzc1wiPlZlcmlmaWVkPC9zcGFuPjtcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDx0cj5cclxuXHRcdFx0PHRkPntudW0gKyAxfTwvdGQ+XHJcblx0XHRcdDx0ZD5cclxuXHRcdFx0XHQ8c3Ryb25nPntgJHt1c2VyRGV0YWlscy5maXJzdF9uYW1lfSAke3VzZXJEZXRhaWxzLmxhc3RfbmFtZX0gYH08L3N0cm9uZz5cclxuXHRcdFx0PC90ZD5cclxuXHRcdFx0PHRkPnt1c2VyRGV0YWlscy5waG9uZV9udW1iZXJ9PC90ZD5cclxuXHRcdFx0PHRkPnt1c2VyRGV0YWlscy5lbWFpbH08L3RkPlxyXG5cdFx0XHQ8dGQgY29sU3Bhbj17MX0+e3BlbmRpbmdBdWN0aW9uLmxlbmd0aH08L3RkPlxyXG5cdFx0XHQ8dGQ+MDwvdGQ+XHJcblx0XHRcdDx0ZD4wPC90ZD5cclxuXHRcdFx0PHRkPntiYWRnZVZpZXd9PC90ZD5cclxuXHRcdFx0PHRkPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlRXZlbnRCdXR0b259IG9uQ2xpY2s9e3ZlcmlmeVVzZXJ9PlxyXG5cdFx0XHRcdFx0VmVyaWZ5XHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDwvdGQ+XHJcblx0XHRcdDx0ZD5cclxuXHRcdFx0XHQ8RHJvcGRvd25BY3Rpb24gdHlwZT1cInVzZXJEZXRhaWxzXCIgaWQ9e3VzZXJEZXRhaWxzLmlkfSBrZXk9e251bSArIDF9IC8+XHJcblx0XHRcdDwvdGQ+XHJcblx0XHQ8L3RyPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJDb2x1bW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=