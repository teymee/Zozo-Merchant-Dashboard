webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/merchant/saga.js":
/*!********************************!*\
  !*** ./store/merchant/saga.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action */ "./store/merchant/action.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _API_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../API/Api */ "./store/API/Api.js");



var _marked = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getAllMechants),
    _marked2 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(verifyMerchant),
    _marked3 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);





 // NEW

var config = {
  headers: {
    Authorization: "Bearer" + _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].TOKEN
  }
}; //FETCH ALL MERCHANTS

var sagaFetchMerchants = /*#__PURE__*/function () {
  var _ref = Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var url, data;
    return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].BASE_URL + "/merchant";
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(url, config).then(function (response) {
              return response.data.merchant;
            })["catch"](function (err) {
              console.log(err + "fetching merchants");
            });

          case 3:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sagaFetchMerchants() {
    return _ref.apply(this, arguments);
  };
}(); //FETCH CATEGORIES


var sagaVerifyMerchant = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(merchant_id) {
    var url, merchant, data;
    return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].BASE_URL + "/account/verify";
            merchant = {
              account_id: merchant_id
            };
            console.log(merchant);
            _context2.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(url, merchant, config).then(function (response) {
              console.log(response.data);
              return response.data;
            })["catch"](function (err) {
              console.log(err + "Verify Merchant");
            });

          case 5:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function sagaVerifyMerchant(_x) {
    return _ref2.apply(this, arguments);
  };
}(); // function* postCategory(payload) {
// 	try {
// 		const isCateAdded = yield call(sagaAddCategory, payload.category);
// 		yield put(addCategorySuccess(isCateAdded));
// 	} catch (err) {
// 		console.log(err);
// 	}
// }


function getAllMechants() {
  var merchants;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getAllMechants$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(sagaFetchMerchants);

        case 3:
          merchants = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_4__["actionSuccessGetAllMechants"])(merchants));

        case 6:
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function verifyMerchant(payload) {
  var merchants;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function verifyMerchant$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(sagaVerifyMerchant, payload.merchant_id);

        case 3:
          merchants = _context4.sent;
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_4__["actionSuccessVerifyMechant"])(merchants));

        case 6:
          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
} // function* deleteCategory(payload) {
// 	try {
// 		const isDeleted = yield call(sagaDeleteCategories, payload.id);
// 		yield put(deleteCategorySuccess(isDeleted));
// 	} catch (err) {
// 		console.log(err);
// 	}
// }


function rootSaga() {
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].GET_ALL_MERCHANTS, getAllMechants)]);

        case 2:
          _context5.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].VERIFY_MERCHANT, verifyMerchant)]);

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbWVyY2hhbnQvc2FnYS5qcyJdLCJuYW1lcyI6WyJnZXRBbGxNZWNoYW50cyIsInZlcmlmeU1lcmNoYW50Iiwicm9vdFNhZ2EiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkFQSSIsIlRPS0VOIiwic2FnYUZldGNoTWVyY2hhbnRzIiwidXJsIiwiQkFTRV9VUkwiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJtZXJjaGFudCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzYWdhVmVyaWZ5TWVyY2hhbnQiLCJtZXJjaGFudF9pZCIsImFjY291bnRfaWQiLCJwb3N0IiwiY2FsbCIsIm1lcmNoYW50cyIsInB1dCIsImFjdGlvblN1Y2Nlc3NHZXRBbGxNZWNoYW50cyIsInBheWxvYWQiLCJhY3Rpb25TdWNjZXNzVmVyaWZ5TWVjaGFudCIsImFsbCIsInRha2VFdmVyeSIsImFjdGlvblR5cGVzIiwiR0VUX0FMTF9NRVJDSEFOVFMiLCJWRVJJRllfTUVSQ0hBTlQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttTUFrRVVBLGM7b01BU0FDLGM7b01Ba0JlQyxROztBQTdGekI7QUFDQTtBQUVBO0FBTUE7Q0FHQTs7QUFFQSxJQUFNQyxNQUFNLEdBQUc7QUFDZEMsU0FBTyxFQUFFO0FBQ1JDLGlCQUFhLEVBQUUsV0FBV0MsNENBQUcsQ0FBQ0M7QUFEdEI7QUFESyxDQUFmLEMsQ0FLQTs7QUFDQSxJQUFNQyxrQkFBa0I7QUFBQSxnWUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEJDLGVBRG9CLEdBQ2RILDRDQUFHLENBQUNJLFFBQUosR0FBZSxXQUREO0FBQUE7QUFBQSxtQkFHUEMsNENBQUssQ0FDdEJDLEdBRGlCLENBQ2JILEdBRGEsRUFDUk4sTUFEUSxFQUVqQlUsSUFGaUIsQ0FFWixVQUFDQyxRQUFELEVBQWM7QUFDbkIscUJBQU9BLFFBQVEs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YTFmYzFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGNhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRhY3Rpb25UeXBlcyxcclxuXHRhY3Rpb25HZXRBbGxNZWNoYW50cyxcclxuXHRhY3Rpb25TdWNjZXNzR2V0QWxsTWVjaGFudHMsXHJcblx0YWN0aW9uU3VjY2Vzc1ZlcmlmeU1lY2hhbnQsXHJcbn0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL0FQSS9BcGlcIjtcclxuXHJcbi8vIE5FV1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG5cdGhlYWRlcnM6IHtcclxuXHRcdEF1dGhvcml6YXRpb246IFwiQmVhcmVyXCIgKyBBUEkuVE9LRU4sXHJcblx0fSxcclxufTtcclxuLy9GRVRDSCBBTEwgTUVSQ0hBTlRTXHJcbmNvbnN0IHNhZ2FGZXRjaE1lcmNoYW50cyA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zdCB1cmwgPSBBUEkuQkFTRV9VUkwgKyBcIi9tZXJjaGFudFwiO1xyXG5cclxuXHRjb25zdCBkYXRhID0gYXdhaXQgYXhpb3NcclxuXHRcdC5nZXQodXJsLCBjb25maWcpXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGEubWVyY2hhbnQ7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyICsgXCJmZXRjaGluZyBtZXJjaGFudHNcIik7XHJcblx0XHR9KTtcclxuXHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG4vL0ZFVENIIENBVEVHT1JJRVNcclxuY29uc3Qgc2FnYVZlcmlmeU1lcmNoYW50ID0gYXN5bmMgKG1lcmNoYW50X2lkKSA9PiB7XHJcblx0Y29uc3QgdXJsID0gQVBJLkJBU0VfVVJMICsgXCIvYWNjb3VudC92ZXJpZnlcIjtcclxuXHJcblx0XHJcblx0Y29uc3QgbWVyY2hhbnQgPSB7XHJcblx0XHRhY2NvdW50X2lkOiBtZXJjaGFudF9pZFxyXG5cdH1cclxuXHRjb25zb2xlLmxvZyhtZXJjaGFudClcclxuXHRjb25zdCBkYXRhID0gYXdhaXQgYXhpb3NcclxuXHRcdC5wb3N0KHVybCwgbWVyY2hhbnQsIGNvbmZpZylcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnIgKyBcIlZlcmlmeSBNZXJjaGFudFwiKTtcclxuXHRcdH0pO1xyXG5cclxuXHRyZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbi8vIGZ1bmN0aW9uKiBwb3N0Q2F0ZWdvcnkocGF5bG9hZCkge1xyXG4vLyBcdHRyeSB7XHJcbi8vIFx0XHRjb25zdCBpc0NhdGVBZGRlZCA9IHlpZWxkIGNhbGwoc2FnYUFkZENhdGVnb3J5LCBwYXlsb2FkLmNhdGVnb3J5KTtcclxuLy8gXHRcdHlpZWxkIHB1dChhZGRDYXRlZ29yeVN1Y2Nlc3MoaXNDYXRlQWRkZWQpKTtcclxuLy8gXHR9IGNhdGNoIChlcnIpIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKGVycik7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiogZ2V0QWxsTWVjaGFudHMoKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IG1lcmNoYW50cyA9IHlpZWxkIGNhbGwoc2FnYUZldGNoTWVyY2hhbnRzKTtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25TdWNjZXNzR2V0QWxsTWVjaGFudHMobWVyY2hhbnRzKSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHZlcmlmeU1lcmNoYW50KHBheWxvYWQpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgbWVyY2hhbnRzID0geWllbGQgY2FsbChzYWdhVmVyaWZ5TWVyY2hhbnQsIHBheWxvYWQubWVyY2hhbnRfaWQpO1xyXG5cdFx0eWllbGQgcHV0KGFjdGlvblN1Y2Nlc3NWZXJpZnlNZWNoYW50KG1lcmNoYW50cykpO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uKiBkZWxldGVDYXRlZ29yeShwYXlsb2FkKSB7XHJcbi8vIFx0dHJ5IHtcclxuLy8gXHRcdGNvbnN0IGlzRGVsZXRlZCA9IHlpZWxkIGNhbGwoc2FnYURlbGV0ZUNhdGVnb3JpZXMsIHBheWxvYWQuaWQpO1xyXG4vLyBcdFx0eWllbGQgcHV0KGRlbGV0ZUNhdGVnb3J5U3VjY2Vzcyhpc0RlbGV0ZWQpKTtcclxuLy8gXHR9IGNhdGNoIChlcnIpIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKGVycik7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR0VUX0FMTF9NRVJDSEFOVFMsIGdldEFsbE1lY2hhbnRzKV0pO1xyXG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlZFUklGWV9NRVJDSEFOVCwgdmVyaWZ5TWVyY2hhbnQpXSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==