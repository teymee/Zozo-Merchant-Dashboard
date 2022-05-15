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
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_Merchant_dashboard_merchant_dashboard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_Merchant_dashboard_merchant_dashboard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Downloads_Gigs_Zozo_Merchant_dashboard_merchant_dashboard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_Merchant_dashboard_merchant_dashboard_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action */ "./store/auth/action.js");
/* harmony import */ var _API_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../API/Api */ "./store/API/Api.js");



var _marked = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_Merchant_dashboard_merchant_dashboard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loginSaga),
    _marked2 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_Merchant_dashboard_merchant_dashboard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(registerSaga),
    _marked3 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_Merchant_dashboard_merchant_dashboard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOutSaga),
    _marked4 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_Merchant_dashboard_merchant_dashboard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);







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

var modalLoginFailed = function modalLoginFailed(type) {
  antd__WEBPACK_IMPORTED_MODULE_4__["notification"][type]({
    message: "Login Failed",
    description: "Invalid Email or Password"
  });
};

var modalRegistrationSuccess = function modalRegistrationSuccess(type) {
  antd__WEBPACK_IMPORTED_MODULE_4__["notification"][type]({
    message: "Welcome =",
    description: "Registered Successfully"
  });
};

var loginAdmin = /*#__PURE__*/function () {
  var _ref = Object(C_Users_HP_Downloads_Gigs_Zozo_Merchant_dashboard_merchant_dashboard_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_Merchant_dashboard_merchant_dashboard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(loginCred) {
    var url, data;
    return C_Users_HP_Downloads_Gigs_Zozo_Merchant_dashboard_merchant_dashboard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(loginCred);
            url = _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].BASE_URL + "/login";
            console.log(url);
            data = axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, loginCred).then(function (response) {
              console.log(response.data);
              localStorage.setItem("token", response.data.token);
              return response.data;
            })["catch"](function (err) {
              console.log(err);
            });
            return _context.abrupt("return", data);

          case 5:
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
  var _ref2 = Object(C_Users_HP_Downloads_Gigs_Zozo_Merchant_dashboard_merchant_dashboard_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_Merchant_dashboard_merchant_dashboard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(registerCred) {
    var url, data;
    return C_Users_HP_Downloads_Gigs_Zozo_Merchant_dashboard_merchant_dashboard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(registerCred); // const url = "https://zozo-auction.herokuapp.com/api/v1/merchant/create"

            url = _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].MERCHANT_BASE_URL + "/create";
            console.log(url);
            data = axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, registerCred).then(function (response) {
              console.log(response.data.token);
              localStorage.setItem("token", response.data.account.token);
              return response.data;
            })["catch"](function (err) {
              console.log(err);
            });
            return _context2.abrupt("return", data);

          case 5:
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

function loginSaga(_ref3) {
  var payload, isLogin;
  return C_Users_HP_Downloads_Gigs_Zozo_Merchant_dashboard_merchant_dashboard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loginSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          payload = _ref3.payload;
          _context3.prev = 1;
          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(loginAdmin, payload.loginCred);

        case 4:
          isLogin = _context3.sent;

          if (!isLogin) {
            _context3.next = 12;
            break;
          }

          _context3.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_5__["loginSuccess"])(isLogin));

        case 8:
          modalSuccess("success");
          payload.router.push('/'); // setTimeout(()=>{
          // },2000)

          _context3.next = 13;
          break;

        case 12:
          modalLoginFailed("warning");

        case 13:
          _context3.next = 18;
          break;

        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0);

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked, null, [[1, 15]]);
}

function registerSaga(_ref4) {
  var payload, isRegistered;
  return C_Users_HP_Downloads_Gigs_Zozo_Merchant_dashboard_merchant_dashboard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function registerSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          payload = _ref4.payload;
          _context4.prev = 1;
          console.log(payload.registerCred);
          _context4.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(registerAdmin, payload.registerCred);

        case 5:
          isRegistered = _context4.sent;

          if (!isRegistered) {
            _context4.next = 11;
            break;
          }

          _context4.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_5__["registerSuccess"])(isRegistered));

        case 9:
          modalRegistrationSuccess("success");
          setTimeout(function () {
            payload.router.push('/');
          }, 500);

        case 11:
          _context4.next = 16;
          break;

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0);

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked2, null, [[1, 13]]);
}

function logOutSaga() {
  return C_Users_HP_Downloads_Gigs_Zozo_Merchant_dashboard_merchant_dashboard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOutSaga$(_context5) {
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
  return C_Users_HP_Downloads_Gigs_Zozo_Merchant_dashboard_merchant_dashboard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context6) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYXV0aC9zYWdhLmpzIl0sIm5hbWVzIjpbImxvZ2luU2FnYSIsInJlZ2lzdGVyU2FnYSIsImxvZ091dFNhZ2EiLCJyb290U2FnYSIsIm1vZGFsU3VjY2VzcyIsInR5cGUiLCJub3RpZmljYXRpb24iLCJtZXNzYWdlIiwiZGVzY3JpcHRpb24iLCJtb2RhbFdhcm5pbmciLCJtb2RhbExvZ2luRmFpbGVkIiwibW9kYWxSZWdpc3RyYXRpb25TdWNjZXNzIiwibG9naW5BZG1pbiIsImxvZ2luQ3JlZCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJBUEkiLCJCQVNFX1VSTCIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJlcnIiLCJyZWdpc3RlckFkbWluIiwicmVnaXN0ZXJDcmVkIiwiTUVSQ0hBTlRfQkFTRV9VUkwiLCJhY2NvdW50IiwicGF5bG9hZCIsImNhbGwiLCJpc0xvZ2luIiwicHV0IiwibG9naW5TdWNjZXNzIiwicm91dGVyIiwicHVzaCIsImlzUmVnaXN0ZXJlZCIsInJlZ2lzdGVyU3VjY2VzcyIsInNldFRpbWVvdXQiLCJsb2dPdXRTdWNjZXNzIiwiYWxsIiwidGFrZUV2ZXJ5IiwiYWN0aW9uVHlwZXMiLCJMT0dJTl9SRVFVRVNUIiwiUkVHSVNURVJfUkVRVUVTVCIsIkxPR09VVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FNQTZFVUEsUztzTUFrQkFDLFk7c01BZ0JBQyxVO3NNQVNlQyxROztBQXhIekI7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFHQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQVU7QUFDOUJDLG1EQUFZLENBQUNELElBQUQsQ0FBWixDQUFtQjtBQUNsQkUsV0FBTyxFQUFFLGNBRFM7QUFFbEJDLGVBQVcsRUFBRTtBQUZLLEdBQW5CO0FBSUEsQ0FMRDs7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRSxpQkFBTWlDLDhEQUFHLENBQUNPLDZEQUFhLEVBQWQsQ0FBVDs7QUFGRjtBQUdFakMsc0JBQVksQ0FBQyxTQUFELENBQVo7QUFIRjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtFSyxpQkFBTyxDQUFDQyxHQUFSOztBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNlLFNBQVVaLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2QsaUJBQU13Qyw4REFBRyxDQUFDLENBQUNDLG9FQUFTLENBQUNDLG1EQUFXLENBQUNDLGFBQWIsRUFBNEI5QyxTQUE1QixDQUFWLENBQUQsQ0FBVDs7QUFEYztBQUFBO0FBRVgsaUJBQU0yQyw4REFBRyxDQUFDLENBQUNDLG9FQUFTLENBQUNDLG1EQUFXLENBQUNFLGdCQUFiLEVBQStCOUMsWUFBL0IsQ0FBVixDQUFELENBQVQ7O0FBRlc7QUFBQTtBQUdkLGlCQUFNMEMsOERBQUcsQ0FBQyxDQUFDQyxvRUFBUyxDQUFDQyxtREFBVyxDQUFDRyxNQUFiLEVBQXFCOUMsVUFBckIsQ0FBVixDQUFELENBQVQ7O0FBSGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xMzg1ZjRjZjhlMDJhZWQ3M2UwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBjYWxsLCBwdXQsIHRha2VFdmVyeSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHsgYWN0aW9uVHlwZXMsIGxvZ2luU3VjY2VzcywgbG9nT3V0U3VjY2VzcywgcmVnaXN0ZXJTdWNjZXNzIH0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi9BUEkvQXBpXCI7XHJcblxyXG5cclxuY29uc3QgbW9kYWxTdWNjZXNzID0gKHR5cGUpID0+IHtcclxuXHRub3RpZmljYXRpb25bdHlwZV0oe1xyXG5cdFx0bWVzc2FnZTogXCJXZWxjb21lIGJhY2tcIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIllvdSBhcmUgbG9naW4gc3VjY2Vzc2Z1bCFcIixcclxuXHR9KTtcclxufTtcclxuXHJcbmNvbnN0IG1vZGFsV2FybmluZyA9ICh0eXBlKSA9PiB7XHJcblx0bm90aWZpY2F0aW9uW3R5cGVdKHtcclxuXHRcdG1lc3NhZ2U6IFwiR29vZCBieWUhXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJZb3VyIGFjY291bnQgaGFzIGJlZW4gbG9nZ2VkIG91dCFcIixcclxuXHR9KTtcclxufTtcclxuXHJcbmNvbnN0IG1vZGFsTG9naW5GYWlsZWQgPSAodHlwZSkgPT4ge1xyXG5cdG5vdGlmaWNhdGlvblt0eXBlXSh7XHJcblx0XHRtZXNzYWdlOiBcIkxvZ2luIEZhaWxlZFwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiSW52YWxpZCBFbWFpbCBvciBQYXNzd29yZFwiLFxyXG5cdH0pO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IG1vZGFsUmVnaXN0cmF0aW9uU3VjY2VzcyA9ICh0eXBlKSA9PiB7XHJcblx0bm90aWZpY2F0aW9uW3R5cGVdKHtcclxuXHRcdG1lc3NhZ2U6IFwiV2VsY29tZSA9XCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJSZWdpc3RlcmVkIFN1Y2Nlc3NmdWxseVwiLFxyXG5cdH0pO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGxvZ2luQWRtaW4gPSBhc3luYyAobG9naW5DcmVkKSA9PiB7XHJcblx0Y29uc29sZS5sb2cobG9naW5DcmVkKTtcclxuXHRjb25zdCB1cmwgPSBBUEkuQkFTRV9VUkwgKyBcIi9sb2dpblwiO1xyXG5cclxuXHRjb25zb2xlLmxvZyh1cmwpXHJcblx0Y29uc3QgZGF0YSA9IGF4aW9zXHJcblx0XHQucG9zdCh1cmwsIGxvZ2luQ3JlZClcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCByZXNwb25zZS5kYXRhLnRva2VuKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHRcdH0pO1xyXG5cdHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuY29uc3QgcmVnaXN0ZXJBZG1pbiA9IGFzeW5jIChyZWdpc3RlckNyZWQpID0+IHtcclxuXHRjb25zb2xlLmxvZyhyZWdpc3RlckNyZWQpO1xyXG5cdC8vIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly96b3pvLWF1Y3Rpb24uaGVyb2t1YXBwLmNvbS9hcGkvdjEvbWVyY2hhbnQvY3JlYXRlXCJcclxuXHRjb25zdCB1cmwgPSBBUEkuTUVSQ0hBTlRfQkFTRV9VUkwgKyBcIi9jcmVhdGVcIjtcclxuXHRjb25zb2xlLmxvZyh1cmwpXHJcblxyXG5cdGNvbnN0IGRhdGEgPSBheGlvc1xyXG5cdFx0LnBvc3QodXJsLCByZWdpc3RlckNyZWQpXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS50b2tlbik7XHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzcG9uc2UuZGF0YS5hY2NvdW50LnRva2VuKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHRcdH0pO1xyXG5cdHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiogbG9naW5TYWdhKHtwYXlsb2FkfSkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBpc0xvZ2luID0geWllbGQgY2FsbChsb2dpbkFkbWluLCBwYXlsb2FkLmxvZ2luQ3JlZCk7XHJcblx0XHRpZiAoaXNMb2dpbikge1xyXG5cdFx0XHR5aWVsZCBwdXQobG9naW5TdWNjZXNzKGlzTG9naW4pKTtcclxuXHRcdFx0bW9kYWxTdWNjZXNzKFwic3VjY2Vzc1wiKTtcclxuXHRcdFx0cGF5bG9hZC5yb3V0ZXIucHVzaCgnLycpXHJcblx0XHRcdC8vIHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHJcblx0XHRcdC8vIH0sMjAwMClcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRtb2RhbExvZ2luRmFpbGVkKFwid2FybmluZ1wiKTtcclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiogcmVnaXN0ZXJTYWdhKHtwYXlsb2FkfSkge1xyXG5cdHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGF5bG9hZC5yZWdpc3RlckNyZWQpXHJcblx0XHRjb25zdCBpc1JlZ2lzdGVyZWQgPSB5aWVsZCBjYWxsKHJlZ2lzdGVyQWRtaW4sIHBheWxvYWQucmVnaXN0ZXJDcmVkKTtcclxuXHRcdGlmIChpc1JlZ2lzdGVyZWQpIHtcclxuXHRcdFx0eWllbGQgcHV0KHJlZ2lzdGVyU3VjY2Vzcyhpc1JlZ2lzdGVyZWQpKTtcclxuXHRcdFx0bW9kYWxSZWdpc3RyYXRpb25TdWNjZXNzKFwic3VjY2Vzc1wiKTtcclxuXHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRwYXlsb2FkLnJvdXRlci5wdXNoKCcvJylcclxuXHR9LDUwMClcclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0U2FnYSgpIHtcclxuXHR0cnkge1xyXG5cdFx0eWllbGQgcHV0KGxvZ091dFN1Y2Nlc3MoKSk7XHJcblx0XHRtb2RhbFdhcm5pbmcoXCJ3YXJuaW5nXCIpO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5MT0dJTl9SRVFVRVNULCBsb2dpblNhZ2EpXSk7XHJcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5SRUdJU1RFUl9SRVFVRVNULCByZWdpc3RlclNhZ2EpXSk7XHJcblx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuTE9HT1VULCBsb2dPdXRTYWdhKV0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=