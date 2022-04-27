webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/auth/saga.js":
/*!****************************!*\
  !*** ./store/auth/saga.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action */ "./store/auth/action.js");
/* harmony import */ var _API_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../API/Api */ "./store/API/Api.js");



var _marked = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loginSaga),
    _marked2 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(registerSaga),
    _marked3 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOutSaga),
    _marked4 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);







var modalSuccess = function modalSuccess(type) {
  antd__WEBPACK_IMPORTED_MODULE_4__["notification"][type]({
    message: "Welcome back",
    description: "You are login successful!"
  });
};

var modalWarning = function modalWarning(type) {
  antd__WEBPACK_IMPORTED_MODULE_4__["notification"][type]({
    message: "Good bye!",
    description: "Your account has been logged out!"
  });
};

var loginAdmin = /*#__PURE__*/function () {
  var _ref = Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(loginCred) {
    var url, data;
    return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(loginCred);
            url = "https://zozo-auction.herokuapp.com/api/v1/login";
            data = axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, loginCred).then(function (response) {
              console.log(response.data);
              localStorage.setItem("token", JSON.stringify(response.data.token));
              return response.data;
            })["catch"](function (err) {
              console.log(err);
            });
            return _context.abrupt("return", data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loginAdmin(_x) {
    return _ref.apply(this, arguments);
  };
}();

var registerAdmin = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(registerCred) {
    var url, data;
    return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(registerCred);
            url = "https://zozo-auction.herokuapp.com/api/v1/register";
            data = axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, registerCred).then(function (response) {
              console.log(response.data);
              localStorage.setItem("token", JSON.stringify(response.data.token));
              return response.data;
            })["catch"](function (err) {
              console.log(err);
            });
            return _context2.abrupt("return", data);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function registerAdmin(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

function loginSaga(payload) {
  var isLogin;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loginSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(loginAdmin, payload.loginCred);

        case 3:
          isLogin = _context3.sent;

          if (!isLogin) {
            _context3.next = 8;
            break;
          }

          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_5__["loginSuccess"])());

        case 7:
          modalSuccess("success");

        case 8:
          _context3.next = 13;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

function registerSaga(payload) {
  var isRegistered;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function registerSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          console.log(payload.registerCred);
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(registerAdmin, payload.registerCred);

        case 4:
          isRegistered = _context4.sent;

          if (!isRegistered) {
            _context4.next = 9;
            break;
          }

          _context4.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_5__["registerSuccess"])());

        case 8:
          modalSuccess("success");

        case 9:
          _context4.next = 14;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked2, null, [[0, 11]]);
}

function logOutSaga() {
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOutSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_5__["logOutSuccess"])());

        case 3:
          modalWarning("warning");
          _context5.next = 9;
          break;

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked3, null, [[0, 6]]);
}

function rootSaga() {
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].LOGIN_REQUEST, loginSaga)]);

        case 2:
          _context6.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].REGISTER_REQUEST, registerSaga)]);

        case 4:
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].LOGOUT, logOutSaga)]);

        case 6:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked4);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYXV0aC9zYWdhLmpzIl0sIm5hbWVzIjpbImxvZ2luU2FnYSIsInJlZ2lzdGVyU2FnYSIsImxvZ091dFNhZ2EiLCJyb290U2FnYSIsIm1vZGFsU3VjY2VzcyIsInR5cGUiLCJub3RpZmljYXRpb24iLCJtZXNzYWdlIiwiZGVzY3JpcHRpb24iLCJtb2RhbFdhcm5pbmciLCJsb2dpbkFkbWluIiwibG9naW5DcmVkIiwiY29uc29sZSIsImxvZyIsInVybCIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuIiwiZXJyIiwicmVnaXN0ZXJBZG1pbiIsInJlZ2lzdGVyQ3JlZCIsInBheWxvYWQiLCJjYWxsIiwiaXNMb2dpbiIsInB1dCIsImxvZ2luU3VjY2VzcyIsImlzUmVnaXN0ZXJlZCIsInJlZ2lzdGVyU3VjY2VzcyIsImxvZ091dFN1Y2Nlc3MiLCJhbGwiLCJ0YWtlRXZlcnkiLCJhY3Rpb25UeXBlcyIsIkxPR0lOX1JFUVVFU1QiLCJSRUdJU1RFUl9SRVFVRVNUIiwiTE9HT1VUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bU1BeURVQSxTO29NQVlBQyxZO29NQWFBQyxVO29NQVNlQyxROztBQTNGekI7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQVU7QUFDOUJDLG1EQUFZLENBQUNELElBQUQsQ0FBWixDQUFtQjtBQUNsQkUsV0FBTyxFQUFFLGNBRFM7QUFFbEJDLGVBQVcsRUFBRTtBQUZLLEdBQW5CO0FBSUEsQ0FMRDs7QUFPQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDSixJQUFELEVBQVU7QUFDOUJDLG1EQUFZLENBQUNELElBQUQsQ0FBWixDQUFtQjtBQUNsQkUsV0FBTyxFQUFFLFdBRFM7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LHNCQUFZLENBQUMsU0FBRCxDQUFaOztBQU5IO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTRVEsaUJBQU8sQ0FBQ0MsR0FBUjs7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFhQSxTQUFVWCxVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUUsaUJBQU02Qiw4REFBRyxDQUFDSSw2REFBYSxFQUFkLENBQVQ7O0FBRkY7QUFHRTFCLHNCQUFZLENBQUMsU0FBRCxDQUFaO0FBSEY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFLRUcsaUJBQU8sQ0FBQ0MsR0FBUjs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTZSxTQUFVVixRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkLGlCQUFNaUMsOERBQUcsQ0FBQyxDQUFDQyxvRUFBUyxDQUFDQyxtREFBVyxDQUFDQyxhQUFiLEVBQTRCdkMsU0FBNUIsQ0FBVixDQUFELENBQVQ7O0FBRGM7QUFBQTtBQUVYLGlCQUFNb0MsOERBQUcsQ0FBQyxDQUFDQyxvRUFBUyxDQUFDQyxtREFBVyxDQUFDRSxnQkFBYixFQUErQnZDLFlBQS9CLENBQVYsQ0FBRCxDQUFUOztBQUZXO0FBQUE7QUFHZCxpQkFBTW1DLDhEQUFHLENBQUMsQ0FBQ0Msb0VBQVMsQ0FBQ0MsbURBQVcsQ0FBQ0csTUFBYixFQUFxQnZDLFVBQXJCLENBQVYsQ0FBRCxDQUFUOztBQUhjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYTdkM2I5ZjI0MWIzZjM0MzAzYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgY2FsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgeyBhY3Rpb25UeXBlcywgbG9naW5TdWNjZXNzLCBsb2dPdXRTdWNjZXNzLCByZWdpc3RlclN1Y2Nlc3MgfSBmcm9tIFwiLi9hY3Rpb25cIjtcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi9BUEkvQXBpXCI7XG5cbmNvbnN0IG1vZGFsU3VjY2VzcyA9ICh0eXBlKSA9PiB7XG5cdG5vdGlmaWNhdGlvblt0eXBlXSh7XG5cdFx0bWVzc2FnZTogXCJXZWxjb21lIGJhY2tcIixcblx0XHRkZXNjcmlwdGlvbjogXCJZb3UgYXJlIGxvZ2luIHN1Y2Nlc3NmdWwhXCIsXG5cdH0pO1xufTtcblxuY29uc3QgbW9kYWxXYXJuaW5nID0gKHR5cGUpID0+IHtcblx0bm90aWZpY2F0aW9uW3R5cGVdKHtcblx0XHRtZXNzYWdlOiBcIkdvb2QgYnllIVwiLFxuXHRcdGRlc2NyaXB0aW9uOiBcIllvdXIgYWNjb3VudCBoYXMgYmVlbiBsb2dnZWQgb3V0IVwiLFxuXHR9KTtcbn07XG5cbmNvbnN0IGxvZ2luQWRtaW4gPSBhc3luYyAobG9naW5DcmVkKSA9PiB7XG5cdGNvbnNvbGUubG9nKGxvZ2luQ3JlZCk7XG5cdGNvbnN0IHVybCA9IFwiaHR0cHM6Ly96b3pvLWF1Y3Rpb24uaGVyb2t1YXBwLmNvbS9hcGkvdjEvbG9naW5cIjtcblxuXHRjb25zdCBkYXRhID0gYXhpb3Ncblx0XHQucG9zdCh1cmwsIGxvZ2luQ3JlZClcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhLnRva2VuKSk7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IHJlZ2lzdGVyQWRtaW4gPSBhc3luYyAocmVnaXN0ZXJDcmVkKSA9PiB7XG5cdGNvbnNvbGUubG9nKHJlZ2lzdGVyQ3JlZCk7XG5cdGNvbnN0IHVybCA9IFwiaHR0cHM6Ly96b3pvLWF1Y3Rpb24uaGVyb2t1YXBwLmNvbS9hcGkvdjEvcmVnaXN0ZXJcIjtcblxuXHRjb25zdCBkYXRhID0gYXhpb3Ncblx0XHQucG9zdCh1cmwsIHJlZ2lzdGVyQ3JlZClcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhLnRva2VuKSk7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGF0YTtcbn07XG5cblxuXG5mdW5jdGlvbiogbG9naW5TYWdhKHBheWxvYWQpIHtcblx0dHJ5IHtcblx0XHRjb25zdCBpc0xvZ2luID0geWllbGQgY2FsbChsb2dpbkFkbWluLCBwYXlsb2FkLmxvZ2luQ3JlZCk7XG5cdFx0aWYgKGlzTG9naW4pIHtcblx0XHRcdHlpZWxkIHB1dChsb2dpblN1Y2Nlc3MoKSk7XG5cdFx0XHRtb2RhbFN1Y2Nlc3MoXCJzdWNjZXNzXCIpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyKTtcblx0fVxufVxuXG5mdW5jdGlvbiogcmVnaXN0ZXJTYWdhKHBheWxvYWQpIHtcblx0dHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2cocGF5bG9hZC5yZWdpc3RlckNyZWQpXG5cdFx0Y29uc3QgaXNSZWdpc3RlcmVkID0geWllbGQgY2FsbChyZWdpc3RlckFkbWluLCBwYXlsb2FkLnJlZ2lzdGVyQ3JlZCk7XG5cdFx0aWYgKGlzUmVnaXN0ZXJlZCkge1xuXHRcdFx0eWllbGQgcHV0KHJlZ2lzdGVyU3VjY2VzcygpKTtcblx0XHRcdG1vZGFsU3VjY2VzcyhcInN1Y2Nlc3NcIik7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uKiBsb2dPdXRTYWdhKCkge1xuXHR0cnkge1xuXHRcdHlpZWxkIHB1dChsb2dPdXRTdWNjZXNzKCkpO1xuXHRcdG1vZGFsV2FybmluZyhcIndhcm5pbmdcIik7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUubG9nKGVycik7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5MT0dJTl9SRVFVRVNULCBsb2dpblNhZ2EpXSk7XG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuUkVHSVNURVJfUkVRVUVTVCwgcmVnaXN0ZXJTYWdhKV0pO1xuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5MT0dPVVQsIGxvZ091dFNhZ2EpXSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9