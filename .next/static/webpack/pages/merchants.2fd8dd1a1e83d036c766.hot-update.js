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
  var pendingAuction = user.auctions.filter(function (auction) {}); // const deleteProduct = () => {
  //   console.log(userDetails.id)
  // 	dispatch(deleteActionCategory(userDetails.id));
  // };

  var badgeView = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: "ps-badge success",
    children: "Ongoing"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
      lineNumber: 29,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "".concat(userDetails.first_name, " ").concat(userDetails.last_name, " ")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: userDetails.phone_number
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: userDetails.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: auction
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: badgeView
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/bids/create-bid/" + userDetails.id,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.createEventButton,
          children: "Create Event"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "userDetails",
        id: userDetails.id
      }, num + 1, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL3RhYmxlLWNvbHVtbnMvVXNlckNvbHVtbi5qcyJdLCJuYW1lcyI6WyJVc2VyQ29sdW1uIiwidXNlciIsIm51bSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VyRGV0YWlscyIsImFjY291bnQiLCJwZW5kaW5nQXVjdGlvbiIsImF1Y3Rpb25zIiwiZmlsdGVyIiwiYXVjdGlvbiIsImJhZGdlVmlldyIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJwaG9uZV9udW1iZXIiLCJlbWFpbCIsImlkIiwic3R5bGVzIiwiY3JlYXRlRXZlbnRCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxPQUFpQztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUFBLE1BQU5DLEdBQU0sUUFBTkEsR0FBTTtBQUNoQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHSixJQUFJLENBQUNLLE9BQXpCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHTixJQUFJLENBQUNPLFFBQUwsQ0FBY0MsTUFBZCxDQUFxQixVQUFDQyxPQUFELEVBQVcsQ0FFdEQsQ0FGc0IsQ0FBdkIsQ0FIZ0MsQ0FPaEM7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsTUFBSUMsU0FBUyxnQkFBRTtBQUFNLGFBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBZixDQWJnQyxDQWNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxzQkFDQztBQUFBLDRCQUNDO0FBQUEsZ0JBQUtULEdBQUcsR0FBRztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDO0FBQUEsNkJBQ0M7QUFBQSw0QkFBWUcsV0FBVyxDQUFDTyxVQUF4QixjQUFzQ1AsV0FBVyxDQUFDUSxTQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQsZUFLQztBQUFBLGdCQUFLUixXQUFXLENBQUNTO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRCxlQU1DO0FBQUEsZ0JBQUtULFdBQVcsQ0FBQ1U7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5ELGVBT0M7QUFBQSxnQkFBS0w7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEQsZUFRQztBQUFBLGdCQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRCxlQVNDO0FBQUEsNkJBQ0MscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUUsc0JBQW9CTixXQUFXLENBQUNXLEVBQTVDO0FBQUEsK0JBQ0M7QUFBUSxtQkFBUyxFQUFFQywrRUFBTSxDQUFDQyxpQkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRELGVBY0M7QUFBQSw2QkFDQyxxRUFBQyxpRkFBRDtBQUFnQixZQUFJLEVBQUMsYUFBckI7QUFBbUMsVUFBRSxFQUFFYixXQUFXLENBQUNXO0FBQW5ELFNBQTREZCxHQUFHLEdBQUcsQ0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW9CQTs7R0F2Q1FGLFU7VUFDU0ksdUQ7OztLQURUSixVO0FBeUNNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXJjaGFudHMuMmZkOGRkMWExZTgzZDAzNmM3NjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IERyb3Bkb3duQWN0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZWxlbWVudHMvYmFzaWMvRHJvcGRvd25BY3Rpb25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vVGFibGVFeHRyYVN0eWxlcy9leHRyYVN0eWxlcy5tb2R1bGUuY3NzXCI7XHJcbi8vIGltcG9ydCB7IGRlbGV0ZUFjdGlvbkNhdGVnb3J5IH0gZnJvbSBcIn4vc3RvcmUvdXNlckRldGFpbHMvYWN0aW9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmZ1bmN0aW9uIFVzZXJDb2x1bW4oeyB1c2VyLG51bX0pIHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblx0Y29uc3QgdXNlckRldGFpbHMgPSB1c2VyLmFjY291bnRcclxuXHRjb25zdCBwZW5kaW5nQXVjdGlvbiA9IHVzZXIuYXVjdGlvbnMuZmlsdGVyKChhdWN0aW9uKT0+e1xyXG5cdFx0XHJcblx0fSlcclxuXHRcclxuXHQvLyBjb25zdCBkZWxldGVQcm9kdWN0ID0gKCkgPT4ge1xyXG5cdC8vICAgY29uc29sZS5sb2codXNlckRldGFpbHMuaWQpXHJcblxyXG5cdC8vIFx0ZGlzcGF0Y2goZGVsZXRlQWN0aW9uQ2F0ZWdvcnkodXNlckRldGFpbHMuaWQpKTtcclxuXHQvLyB9O1xyXG5cclxuXHRsZXQgYmFkZ2VWaWV3PSA8c3BhbiBjbGFzc05hbWU9XCJwcy1iYWRnZSBzdWNjZXNzXCI+T25nb2luZzwvc3Bhbj47XHJcblx0Ly8gaWYgKHVzZXIuYXVjdGlvbiA9PT0gbnVsbCkge1xyXG5cdC8vIFx0YmFkZ2VWaWV3ID0gPHNwYW4gY2xhc3NOYW1lPVwicHMtYmFkZ2UgZ3JheVwiPk5vIEV2ZW50PC9zcGFuPjtcclxuXHQvLyB9IGVsc2UgaWYgKHVzZXIuYXVjdGlvbi5zdGF0dXMgPT09IFwicGVuZGluZ1wiKSB7XHJcblx0Ly8gXHRiYWRnZVZpZXcgPSA8c3BhbiBjbGFzc05hbWU9XCJwcy1iYWRnZSBzdWNjZXNzXCI+T25nb2luZzwvc3Bhbj47XHJcblx0Ly8gfVxyXG5cdHJldHVybiAoXHJcblx0XHQ8dHI+XHJcblx0XHRcdDx0ZD57bnVtICsgMX08L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PHN0cm9uZz57YCR7dXNlckRldGFpbHMuZmlyc3RfbmFtZX0gJHt1c2VyRGV0YWlscy5sYXN0X25hbWV9IGB9PC9zdHJvbmc+XHJcblx0XHRcdDwvdGQ+XHJcblx0XHRcdDx0ZD57dXNlckRldGFpbHMucGhvbmVfbnVtYmVyfTwvdGQ+XHJcblx0XHRcdDx0ZD57dXNlckRldGFpbHMuZW1haWx9PC90ZD5cclxuXHRcdFx0PHRkPnthdWN0aW9ufTwvdGQ+XHJcblx0XHRcdDx0ZD57YmFkZ2VWaWV3fTwvdGQ+XHJcblx0XHRcdDx0ZD5cclxuXHRcdFx0XHQ8TGluayBocmVmPXtcIi9iaWRzL2NyZWF0ZS1iaWQvXCIrdXNlckRldGFpbHMuaWR9PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVFdmVudEJ1dHRvbn0+Q3JlYXRlIEV2ZW50PC9idXR0b24+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PERyb3Bkb3duQWN0aW9uIHR5cGU9XCJ1c2VyRGV0YWlsc1wiIGlkPXt1c2VyRGV0YWlscy5pZH0ga2V5PXtudW0gKyAxfSAvPlxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0PC90cj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29sdW1uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9