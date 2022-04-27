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
  var auction = user.auctions.length;
  console.log(user.auctions.length); // const deleteProduct = () => {
  //   console.log(userDetails.id)
  // 	dispatch(deleteActionCategory(userDetails.id));
  // };

  var badgeView = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: "ps-badge success",
    children: "Ongoing"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
      lineNumber: 28,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "".concat(userDetails.first_name, " ").concat(userDetails.last_name, " ")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: userDetails.phone_number
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: userDetails.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: "2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: badgeView
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/bids/create-bid/" + userDetails.id,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.createEventButton,
          children: "Create Event"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 6
        }, this)
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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "userDetails",
        id: userDetails.id
      }, num + 1, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL3RhYmxlLWNvbHVtbnMvVXNlckNvbHVtbi5qcyJdLCJuYW1lcyI6WyJVc2VyQ29sdW1uIiwidXNlciIsIm51bSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VyRGV0YWlscyIsImFjY291bnQiLCJhdWN0aW9uIiwiYXVjdGlvbnMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiYmFkZ2VWaWV3IiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInBob25lX251bWJlciIsImVtYWlsIiwiaWQiLCJzdHlsZXMiLCJjcmVhdGVFdmVudEJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTs7QUFFQSxTQUFTQSxVQUFULE9BQWlDO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQUEsTUFBTkMsR0FBTSxRQUFOQSxHQUFNO0FBQ2hDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxXQUFXLEdBQUdKLElBQUksQ0FBQ0ssT0FBekI7QUFDQSxNQUFNQyxPQUFPLEdBQUdOLElBQUksQ0FBQ08sUUFBTCxDQUFjQyxNQUE5QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVYsSUFBSSxDQUFDTyxRQUFMLENBQWNDLE1BQTFCLEVBSmdDLENBTWhDO0FBQ0E7QUFFQTtBQUNBOztBQUVBLE1BQUlHLFNBQVMsZ0JBQUU7QUFBTSxhQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWYsQ0FaZ0MsQ0FhaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0Esc0JBQ0M7QUFBQSw0QkFDQztBQUFBLGdCQUFLVixHQUFHLEdBQUc7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFBLDZCQUNDO0FBQUEsNEJBQVlHLFdBQVcsQ0FBQ1EsVUFBeEIsY0FBc0NSLFdBQVcsQ0FBQ1MsU0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZELGVBS0M7QUFBQSxnQkFBS1QsV0FBVyxDQUFDVTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEQsZUFNQztBQUFBLGdCQUFLVixXQUFXLENBQUNXO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORCxlQU9DO0FBQUEsZ0JBQUs7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEQsZUFRQztBQUFBLGdCQUFLSjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRCxlQVNDO0FBQUEsNkJBQ0MscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUUsc0JBQW9CUCxXQUFXLENBQUNZLEVBQTVDO0FBQUEsK0JBQ0M7QUFBUSxtQkFBUyxFQUFFQywrRUFBTSxDQUFDQyxpQkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRELGVBY0M7QUFBQSw2QkFDQyxxRUFBQyxpRkFBRDtBQUFnQixZQUFJLEVBQUMsYUFBckI7QUFBbUMsVUFBRSxFQUFFZCxXQUFXLENBQUNZO0FBQW5ELFNBQTREZixHQUFHLEdBQUcsQ0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW9CQTs7R0F0Q1FGLFU7VUFDU0ksdUQ7OztLQURUSixVO0FBd0NNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXJjaGFudHMuNjY5OTA4ZDIwYWE3NjAzMDMyZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IERyb3Bkb3duQWN0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZWxlbWVudHMvYmFzaWMvRHJvcGRvd25BY3Rpb25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vVGFibGVFeHRyYVN0eWxlcy9leHRyYVN0eWxlcy5tb2R1bGUuY3NzXCI7XHJcbi8vIGltcG9ydCB7IGRlbGV0ZUFjdGlvbkNhdGVnb3J5IH0gZnJvbSBcIn4vc3RvcmUvdXNlckRldGFpbHMvYWN0aW9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmZ1bmN0aW9uIFVzZXJDb2x1bW4oeyB1c2VyLG51bX0pIHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblx0Y29uc3QgdXNlckRldGFpbHMgPSB1c2VyLmFjY291bnRcclxuXHRjb25zdCBhdWN0aW9uID0gdXNlci5hdWN0aW9ucy5sZW5ndGhcclxuXHRjb25zb2xlLmxvZyh1c2VyLmF1Y3Rpb25zLmxlbmd0aClcclxuXHRcclxuXHQvLyBjb25zdCBkZWxldGVQcm9kdWN0ID0gKCkgPT4ge1xyXG5cdC8vICAgY29uc29sZS5sb2codXNlckRldGFpbHMuaWQpXHJcblxyXG5cdC8vIFx0ZGlzcGF0Y2goZGVsZXRlQWN0aW9uQ2F0ZWdvcnkodXNlckRldGFpbHMuaWQpKTtcclxuXHQvLyB9O1xyXG5cclxuXHRsZXQgYmFkZ2VWaWV3PSA8c3BhbiBjbGFzc05hbWU9XCJwcy1iYWRnZSBzdWNjZXNzXCI+T25nb2luZzwvc3Bhbj47XHJcblx0Ly8gaWYgKHVzZXIuYXVjdGlvbiA9PT0gbnVsbCkge1xyXG5cdC8vIFx0YmFkZ2VWaWV3ID0gPHNwYW4gY2xhc3NOYW1lPVwicHMtYmFkZ2UgZ3JheVwiPk5vIEV2ZW50PC9zcGFuPjtcclxuXHQvLyB9IGVsc2UgaWYgKHVzZXIuYXVjdGlvbi5zdGF0dXMgPT09IFwicGVuZGluZ1wiKSB7XHJcblx0Ly8gXHRiYWRnZVZpZXcgPSA8c3BhbiBjbGFzc05hbWU9XCJwcy1iYWRnZSBzdWNjZXNzXCI+T25nb2luZzwvc3Bhbj47XHJcblx0Ly8gfVxyXG5cdHJldHVybiAoXHJcblx0XHQ8dHI+XHJcblx0XHRcdDx0ZD57bnVtICsgMX08L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PHN0cm9uZz57YCR7dXNlckRldGFpbHMuZmlyc3RfbmFtZX0gJHt1c2VyRGV0YWlscy5sYXN0X25hbWV9IGB9PC9zdHJvbmc+XHJcblx0XHRcdDwvdGQ+XHJcblx0XHRcdDx0ZD57dXNlckRldGFpbHMucGhvbmVfbnVtYmVyfTwvdGQ+XHJcblx0XHRcdDx0ZD57dXNlckRldGFpbHMuZW1haWx9PC90ZD5cclxuXHRcdFx0PHRkPntcIjJcIn08L3RkPlxyXG5cdFx0XHQ8dGQ+e2JhZGdlVmlld308L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PExpbmsgaHJlZj17XCIvYmlkcy9jcmVhdGUtYmlkL1wiK3VzZXJEZXRhaWxzLmlkfT5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlRXZlbnRCdXR0b259PkNyZWF0ZSBFdmVudDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0PC90ZD5cclxuXHRcdFx0PHRkPlxyXG5cdFx0XHRcdDxEcm9wZG93bkFjdGlvbiB0eXBlPVwidXNlckRldGFpbHNcIiBpZD17dXNlckRldGFpbHMuaWR9IGtleT17bnVtICsgMX0gLz5cclxuXHRcdFx0PC90ZD5cclxuXHRcdDwvdHI+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNvbHVtbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==