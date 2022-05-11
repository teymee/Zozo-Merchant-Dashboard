webpackHotUpdate_N_E("pages/products",{

/***/ "./components/shared/menus/MenuSidebar.jsx":
/*!*************************************************!*\
  !*** ./components/shared/menus/MenuSidebar.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\Merchant dashboard\\merchant dashboard\\components\\shared\\menus\\MenuSidebar.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var MenuSidebar = function MenuSidebar() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var menuItems = [{
    text: "Dashboard",
    url: "/",
    icon: "icon-home"
  }, // {
  // 	text: "Categories",
  // 	url: "/categories",
  // 	icon: "icon-users2",
  // },
  {
    text: "Products",
    url: "/products",
    icon: "icon-database"
  }, {
    text: "Pending Auctions",
    url: "/bids/pending",
    icon: "icon-cog"
  }, {
    text: "Approved Auctions",
    url: "/bids/approved",
    icon: "icon-cog"
  }, {
    text: "Ongoing Auctions",
    url: "/bids/ongoing",
    icon: "icon-cog"
  }, {
    text: "Completed Auctions",
    url: "/bids/completed",
    icon: "icon-cog"
  }, {
    text: "Orders",
    url: "/orders",
    icon: "icon-bag2"
  }, // {
  // 	text: "Customers",
  // 	url: "/customers",
  // 	icon: "icon-users2",
  // },
  {
    text: "Merchants",
    url: "/merchants",
    icon: "icon-users2"
  }, {
    text: "Shipping",
    url: "/shipping",
    icon: "icon-cog"
  }, // {
  // 	text: "Cashout Requests",
  // 	url: "/cashout_requests",
  // 	icon: "icon-cog",
  // },
  // {
  // 	text: "Approved Cashouts",
  // 	url: "/approved_cashouts",
  // 	icon: "icon-cog",
  // },
  {
    text: "Settings",
    url: "/settings",
    icon: "icon-cog"
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: "menu",
    children: menuItems.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: router.pathname === item.url ? "active" : "",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: item.url,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: item.icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 8
            }, _this), item.text]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 6
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 5
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 3
  }, _this);
};

_s(MenuSidebar, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = MenuSidebar;
/* harmony default export */ __webpack_exports__["default"] = (MenuSidebar);

var _c;

$RefreshReg$(_c, "MenuSidebar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvbWVudXMvTWVudVNpZGViYXIuanN4Il0sIm5hbWVzIjpbIk1lbnVTaWRlYmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwibWVudUl0ZW1zIiwidGV4dCIsInVybCIsImljb24iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsQ0FDakI7QUFDQ0MsUUFBSSxFQUFFLFdBRFA7QUFFQ0MsT0FBRyxFQUFFLEdBRk47QUFHQ0MsUUFBSSxFQUFFO0FBSFAsR0FEaUIsRUFPakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0NGLFFBQUksRUFBRSxVQURQO0FBRUNDLE9BQUcsRUFBRSxXQUZOO0FBR0NDLFFBQUksRUFBRTtBQUhQLEdBWmlCLEVBa0JqQjtBQUNDRixRQUFJLEVBQUUsa0JBRFA7QUFFQ0MsT0FBRyxFQUFFLGVBRk47QUFHQ0MsUUFBSSxFQUFFO0FBSFAsR0FsQmlCLEVBdUJqQjtBQUNDRixRQUFJLEVBQUUsbUJBRFA7QUFFQ0MsT0FBRyxFQUFFLGdCQUZOO0FBR0NDLFFBQUksRUFBRTtBQUhQLEdBdkJpQixFQTRCakI7QUFDQ0YsUUFBSSxFQUFFLGtCQURQO0FBRUNDLE9BQUcsRUFBRSxlQUZOO0FBR0NDLFFBQUksRUFBRTtBQUhQLEdBNUJpQixFQWlDakI7QUFDQ0YsUUFBSSxFQUFFLG9CQURQO0FBRUNDLE9BQUcsRUFBRSxpQkFGTjtBQUdDQyxRQUFJLEVBQUU7QUFIUCxHQWpDaUIsRUF3Q2pCO0FBQ0NGLFFBQUksRUFBRSxRQURQO0FBRUNDLE9BQUcsRUFBRSxTQUZOO0FBR0NDLFFBQUksRUFBRTtBQUhQLEdBeENpQixFQTZDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0NGLFFBQUksRUFBRSxXQURQO0FBRUNDLE9BQUcsRUFBRSxZQUZOO0FBR0NDLFFBQUksRUFBRTtBQUhQLEdBbERpQixFQXVEakI7QUFDQ0YsUUFBSSxFQUFFLFVBRFA7QUFFQ0MsT0FBRyxFQUFFLFdBRk47QUFHQ0MsUUFBSSxFQUFFO0FBSFAsR0F2RGlCLEVBNkRqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0NGLFFBQUksRUFBRSxVQURQO0FBRUNDLE9BQUcsRUFBRSxXQUZOO0FBR0NDLFFBQUksRUFBRTtBQUhQLEdBeEVpQixDQUFsQjtBQStFQSxzQkFDQztBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUEsY0FDRUgsU0FBUyxDQUFDSSxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsMEJBQ2Q7QUFFQyxpQkFBUyxFQUFFUixNQUFNLENBQUNTLFFBQVAsS0FBb0JGLElBQUksQ0FBQ0gsR0FBekIsR0FBK0IsUUFBL0IsR0FBMEMsRUFGdEQ7QUFBQSwrQkFJQyxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBRUcsSUFBSSxDQUFDSCxHQUFqQjtBQUFBLGlDQUNDO0FBQUEsb0NBQ0M7QUFBRyx1QkFBUyxFQUFFRyxJQUFJLENBQUNGO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsRUFFRUUsSUFBSSxDQUFDSixJQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRCxTQUNNSyxLQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYztBQUFBLEtBQWQ7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFpQkEsQ0FsR0Q7O0dBQU1ULFc7VUFDVUUscUQ7OztLQURWRixXO0FBb0dTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy5kZTgyMDYzNTY5M2I3MGZhOWVjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IE1lbnVTaWRlYmFyID0gKCkgPT4ge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgbWVudUl0ZW1zID0gW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiRGFzaGJvYXJkXCIsXG5cdFx0XHR1cmw6IFwiL1wiLFxuXHRcdFx0aWNvbjogXCJpY29uLWhvbWVcIixcblx0XHR9LFxuXHRcdFxuXHRcdC8vIHtcblx0XHQvLyBcdHRleHQ6IFwiQ2F0ZWdvcmllc1wiLFxuXHRcdC8vIFx0dXJsOiBcIi9jYXRlZ29yaWVzXCIsXG5cdFx0Ly8gXHRpY29uOiBcImljb24tdXNlcnMyXCIsXG5cdFx0Ly8gfSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlByb2R1Y3RzXCIsXG5cdFx0XHR1cmw6IFwiL3Byb2R1Y3RzXCIsXG5cdFx0XHRpY29uOiBcImljb24tZGF0YWJhc2VcIixcblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJQZW5kaW5nIEF1Y3Rpb25zXCIsXG5cdFx0XHR1cmw6IFwiL2JpZHMvcGVuZGluZ1wiLFxuXHRcdFx0aWNvbjogXCJpY29uLWNvZ1wiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJBcHByb3ZlZCBBdWN0aW9uc1wiLFxuXHRcdFx0dXJsOiBcIi9iaWRzL2FwcHJvdmVkXCIsXG5cdFx0XHRpY29uOiBcImljb24tY29nXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIk9uZ29pbmcgQXVjdGlvbnNcIixcblx0XHRcdHVybDogXCIvYmlkcy9vbmdvaW5nXCIsXG5cdFx0XHRpY29uOiBcImljb24tY29nXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkNvbXBsZXRlZCBBdWN0aW9uc1wiLFxuXHRcdFx0dXJsOiBcIi9iaWRzL2NvbXBsZXRlZFwiLFxuXHRcdFx0aWNvbjogXCJpY29uLWNvZ1wiLFxuXHRcdH0sXG5cdFxuXHRcdFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiT3JkZXJzXCIsXG5cdFx0XHR1cmw6IFwiL29yZGVyc1wiLFxuXHRcdFx0aWNvbjogXCJpY29uLWJhZzJcIixcblx0XHR9LFxuXHRcdC8vIHtcblx0XHQvLyBcdHRleHQ6IFwiQ3VzdG9tZXJzXCIsXG5cdFx0Ly8gXHR1cmw6IFwiL2N1c3RvbWVyc1wiLFxuXHRcdC8vIFx0aWNvbjogXCJpY29uLXVzZXJzMlwiLFxuXHRcdC8vIH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJNZXJjaGFudHNcIixcblx0XHRcdHVybDogXCIvbWVyY2hhbnRzXCIsXG5cdFx0XHRpY29uOiBcImljb24tdXNlcnMyXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlNoaXBwaW5nXCIsXG5cdFx0XHR1cmw6IFwiL3NoaXBwaW5nXCIsXG5cdFx0XHRpY29uOiBcImljb24tY29nXCIsXG5cdFx0fSxcblx0XHRcblx0XHQvLyB7XG5cdFx0Ly8gXHR0ZXh0OiBcIkNhc2hvdXQgUmVxdWVzdHNcIixcblx0XHQvLyBcdHVybDogXCIvY2FzaG91dF9yZXF1ZXN0c1wiLFxuXHRcdC8vIFx0aWNvbjogXCJpY29uLWNvZ1wiLFxuXHRcdC8vIH0sXG5cdFx0Ly8ge1xuXHRcdC8vIFx0dGV4dDogXCJBcHByb3ZlZCBDYXNob3V0c1wiLFxuXHRcdC8vIFx0dXJsOiBcIi9hcHByb3ZlZF9jYXNob3V0c1wiLFxuXHRcdC8vIFx0aWNvbjogXCJpY29uLWNvZ1wiLFxuXHRcdC8vIH0sXG5cdFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiU2V0dGluZ3NcIixcblx0XHRcdHVybDogXCIvc2V0dGluZ3NcIixcblx0XHRcdGljb246IFwiaWNvbi1jb2dcIixcblx0XHR9LFxuXHRdO1xuXG5cdHJldHVybiAoXG5cdFx0PHVsIGNsYXNzTmFtZT1cIm1lbnVcIj5cblx0XHRcdHttZW51SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuXHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRrZXk9e2luZGV4fVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBpdGVtLnVybCA/IFwiYWN0aXZlXCIgOiBcIlwifVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj17aXRlbS51cmx9PlxuXHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT17aXRlbS5pY29ufT48L2k+XG5cdFx0XHRcdFx0XHRcdHtpdGVtLnRleHR9XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0KSl9XG5cdFx0PC91bD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVTaWRlYmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==