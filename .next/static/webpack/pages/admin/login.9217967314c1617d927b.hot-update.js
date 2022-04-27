webpackHotUpdate_N_E("pages/admin/login",{

/***/ "./pages/admin/login.js":
/*!******************************!*\
  !*** ./pages/admin/login.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_auth_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/auth/action */ "./store/auth/action.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _auth_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.module.css */ "./pages/admin/auth.module.css");
/* harmony import */ var _auth_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_auth_module_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\pages\\admin\\login.js",
    _s = $RefreshSig$();







function LoginAdmin() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.auth;
  }),
      isLoggedIn = _useSelector.isLoggedIn;

  var loginAdmin = function loginAdmin(e) {
    e.preventDefault();
    var loginCred = {
      email: e.target.email.value,
      password: e.target.password.value
    };
    console.log('Admin Login');
    dispatch(Object(_store_auth_action__WEBPACK_IMPORTED_MODULE_3__["login"])(loginCred));
    console.log(isLoggedIn);

    if (isLoggedIn) {
      history.push('/');
      console.log("push to dashboard");
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _auth_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.authForm,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _auth_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "LOGIN"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: loginAdmin,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Email:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "email",
            required: true,
            name: "email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Password:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "password",
            required: true,
            name: "password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 31
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 3
  }, this);
}

_s(LoginAdmin, "TVrIY+JHafpy4NUzuEj84yd3tm8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = LoginAdmin;
/* harmony default export */ __webpack_exports__["default"] = (LoginAdmin);

var _c;

$RefreshReg$(_c, "LoginAdmin");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW5BZG1pbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsImlzTG9nZ2VkSW4iLCJsb2dpbkFkbWluIiwiZSIsInByZXZlbnREZWZhdWx0IiwibG9naW5DcmVkIiwiZW1haWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImxvZ2luIiwiaGlzdG9yeSIsInB1c2giLCJzdHlsZXMiLCJhdXRoRm9ybSIsImNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsR0FBc0I7QUFBQTs7QUFFaEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGZ0IscUJBR0FDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUVBLEtBQUssQ0FBQ0MsSUFBUjtBQUFBLEdBQU4sQ0FIWDtBQUFBLE1BR2RDLFVBSGMsZ0JBR2RBLFVBSGM7O0FBSWhCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBSztBQUNsQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsUUFBTUMsU0FBUyxHQUFFO0FBQ1hDLFdBQUssRUFBRUgsQ0FBQyxDQUFDSSxNQUFGLENBQVNELEtBQVQsQ0FBZUUsS0FEWDtBQUVYQyxjQUFRLEVBQUNOLENBQUMsQ0FBQ0ksTUFBRixDQUFTRSxRQUFULENBQWtCRDtBQUZoQixLQUFqQjtBQUlBRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FmLFlBQVEsQ0FBQ2dCLGdFQUFLLENBQUNQLFNBQUQsQ0FBTixDQUFSO0FBQ1ZLLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixVQUFaOztBQUNBLFFBQUdBLFVBQUgsRUFBYztBQUNiWSxhQUFPLENBQUNDLElBQVIsQ0FBYSxHQUFiO0FBQ0FKLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0E7QUFDSSxHQWJEOztBQWVMLHNCQUNDO0FBQUssYUFBUyxFQUFFSSx1REFBTSxDQUFDQyxRQUF2QjtBQUFBLDJCQUNDO0FBQUssZUFBUyxFQUFFRCx1REFBTSxDQUFDRSxTQUF2QjtBQUFBLDhCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFFQztBQUFNLGdCQUFRLEVBQUVmLFVBQWhCO0FBQUEsZ0NBQ0M7QUFBQSxrQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUVDO0FBQU8sZ0JBQUksRUFBQyxPQUFaO0FBQW9CLG9CQUFRLE1BQTVCO0FBQTZCLGdCQUFJLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFNQztBQUFBLGtDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBRUM7QUFBTyxnQkFBSSxFQUFDLFVBQVo7QUFBdUIsb0JBQVEsTUFBL0I7QUFBZ0MsZ0JBQUksRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORCxlQVcwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBb0JBOztHQXZDUVAsVTtVQUVjRSx1RCxFQUNEQyx1RDs7O0tBSGJILFU7QUF5Q01BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2xvZ2luLjkyMTc5NjczMTRjMTYxN2Q5MjdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gXCJ+L3N0b3JlL2F1dGgvYWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2F1dGgubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gTG9naW5BZG1pbigpIHtcclxuXHJcbiAgICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cdGNvbnN0IHtpc0xvZ2dlZElufSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZS5hdXRoKVxyXG4gICAgICBjb25zdCBsb2dpbkFkbWluID0gKGUpPT57XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBjb25zdCBsb2dpbkNyZWQ9IHtcclxuICAgICAgICAgICAgICAgICAgZW1haWw6IGUudGFyZ2V0LmVtYWlsLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICBwYXNzd29yZDplLnRhcmdldC5wYXNzd29yZC52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZG1pbiBMb2dpbicpXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luKGxvZ2luQ3JlZCkpXHJcblx0XHRjb25zb2xlLmxvZyhpc0xvZ2dlZEluKVxyXG5cdFx0aWYoaXNMb2dnZWRJbil7XHJcblx0XHRcdGhpc3RvcnkucHVzaCgnLycpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwicHVzaCB0byBkYXNoYm9hcmRcIilcclxuXHRcdH1cclxuICAgICAgfVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRoRm9ybX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuXHRcdFx0XHQ8aDI+TE9HSU48L2gyPlxyXG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtsb2dpbkFkbWlufT5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5FbWFpbDo8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImVtYWlsXCIgcmVxdWlyZWQgbmFtZT1cImVtYWlsXCIgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5QYXNzd29yZDo8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQgbmFtZT1cInBhc3N3b3JkXCIgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5Mb2dpbjwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkFkbWluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9