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
            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(url, merchant, config).then(function (response) {
              console.log(response.data);
              return response.data;
            })["catch"](function (err) {
              console.log(err + "Verify Merchant");
            });

          case 4:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 6:
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

function verifyMerchant() {
  var merchants;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function verifyMerchant$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(sagaVerifyMerchant);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbWVyY2hhbnQvc2FnYS5qcyJdLCJuYW1lcyI6WyJnZXRBbGxNZWNoYW50cyIsInZlcmlmeU1lcmNoYW50Iiwicm9vdFNhZ2EiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkFQSSIsIlRPS0VOIiwic2FnYUZldGNoTWVyY2hhbnRzIiwidXJsIiwiQkFTRV9VUkwiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJtZXJjaGFudCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzYWdhVmVyaWZ5TWVyY2hhbnQiLCJtZXJjaGFudF9pZCIsImFjY291bnRfaWQiLCJwb3N0IiwiY2FsbCIsIm1lcmNoYW50cyIsInB1dCIsImFjdGlvblN1Y2Nlc3NHZXRBbGxNZWNoYW50cyIsImFjdGlvblN1Y2Nlc3NWZXJpZnlNZWNoYW50IiwiYWxsIiwidGFrZUV2ZXJ5IiwiYWN0aW9uVHlwZXMiLCJHRVRfQUxMX01FUkNIQU5UUyIsIlZFUklGWV9NRVJDSEFOVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21NQWlFVUEsYztvTUFTQUMsYztvTUFrQmVDLFE7O0FBNUZ6QjtBQUNBO0FBRUE7QUFNQTtDQUdBOztBQUVBLElBQU1DLE1BQU0sR0FBRztBQUNkQyxTQUFPLEVBQUU7QUFDUkMsaUJBQWEsRUFBRSxXQUFXQyw0Q0FBRyxDQUFDQztBQUR0QjtBQURLLENBQWYsQyxDQUtBOztBQUNBLElBQU1DLGtCQUFrQjtBQUFBLGdZQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQkMsZUFEb0IsR0FDZEgsNENBQUcsQ0FBQ0ksUUFBSixHQUFlLFdBREQ7QUFBQTtBQUFBLG1CQUdQQyw0Q0FBSyxDQUN0QkMsR0FEaUIsQ0FDYkgsR0FEYSxFQUNSTixNQURRLEVBRWpCVSxJQUZpQixDQUVaLFVBQUNDLFFBQUQsRUFBYztBQUNuQixxQkFBT0EsUUFBUSxDQUFDQyxJQUFULENBQWNDLFFBQXJCO0FBQ0EsYUFKaUIsV0FLWCxVQUFDQyxHQUFELEVBQVM7QUFDZkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLEdBQUcsb0JBQWxCO0FBQ0EsYUFQaUIsQ0FITzs7QUFBQTtBQUdwQkYsZ0JBSG9CO0FBQUEsNkNBWW5CQSxJQVptQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFsQlAsa0JBQWtCO0FBQUE7QUFBQTtBQUFBLEdBQXhCLEMsQ0FlQTs7O0FBQ0EsSUFBTVksa0JBQWtCO0FBQUEsaVlBQUcsa0JBQU9DLFdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3BCWixlQURvQixHQUNkSCw0Q0FBRyxDQUFDSSxRQUFKLEdBQWUsaUJBREQ7QUFJcEJNLG9CQUpvQixHQUlUO0FBQ2hCTSx3QkFBVSxFQUFFRDtBQURJLGFBSlM7QUFBQTtBQUFBLG1CQU9QViw0Q0FBSyxDQUN0QlksSUFEaUIsQ0FDWmQsR0FEWSxFQUNQTyxRQURPLEVBQ0diLE1BREgsRUFFakJVLElBRmlCLENBRVosVUFBQ0MsUUFBRCxFQUFjO0FBQ25CSSxxQkFBTyxDQUFDQyxHQUFSLENBQVlMLFFBQVEsQ0FBQ0MsSUFBckI7QUFDQSxxQkFBT0QsUUFBUSxDQUFDQyxJQUFoQjtBQUNBLGFBTGlCLFdBTVgsVUFBQ0UsR0FBRCxFQUFTO0FBQ2ZDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxHQUFHLGlCQUFsQjtBQUNBLGFBUmlCLENBUE87O0FBQUE7QUFPcEJGLGdCQVBvQjtBQUFBLDhDQWlCbkJBLElBakJtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFsQkssa0JBQWtCO0FBQUE7QUFBQTtBQUFBLEdBQXhCLEMsQ0FvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBVXBCLGNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVvQixpQkFBTXdCLCtEQUFJLENBQUNoQixrQkFBRCxDQUFWOztBQUZwQjtBQUVRaUIsbUJBRlI7QUFBQTtBQUdFLGlCQUFNQyw4REFBRyxDQUFDQywyRUFBMkIsQ0FBQ0YsU0FBRCxDQUE1QixDQUFUOztBQUhGO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFLRVAsaUJBQU8sQ0FBQ0MsR0FBUjs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTQSxTQUFVbEIsY0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW9CLGlCQUFNdUIsK0RBQUksQ0FBQ0osa0JBQUQsQ0FBVjs7QUFGcEI7QUFFUUssbUJBRlI7QUFBQTtBQUdFLGlCQUFNQyw4REFBRyxDQUFDRSwwRUFBMEIsQ0FBQ0gsU0FBRCxDQUEzQixDQUFUOztBQUhGO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFLRVAsaUJBQU8sQ0FBQ0MsR0FBUjs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDLENBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBVWpCLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2QsaUJBQU0yQiw4REFBRyxDQUFDLENBQUNDLG9FQUFTLENBQUNDLG1EQUFXLENBQUNDLGlCQUFiLEVBQWdDaEMsY0FBaEMsQ0FBVixDQUFELENBQVQ7O0FBRGM7QUFBQTtBQUVkLGlCQUFNNkIsOERBQUcsQ0FBQyxDQUFDQyxvRUFBUyxDQUFDQyxtREFBVyxDQUFDRSxlQUFiLEVBQThCaEMsY0FBOUIsQ0FBVixDQUFELENBQVQ7O0FBRmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lMmRkMTYxMDFhYzE5ZWFjM2EyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBjYWxsLCBwdXQsIHRha2VFdmVyeSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0YWN0aW9uVHlwZXMsXHJcblx0YWN0aW9uR2V0QWxsTWVjaGFudHMsXHJcblx0YWN0aW9uU3VjY2Vzc0dldEFsbE1lY2hhbnRzLFxyXG5cdGFjdGlvblN1Y2Nlc3NWZXJpZnlNZWNoYW50LFxyXG59IGZyb20gXCIuL2FjdGlvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi9BUEkvQXBpXCI7XHJcblxyXG4vLyBORVdcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuXHRoZWFkZXJzOiB7XHJcblx0XHRBdXRob3JpemF0aW9uOiBcIkJlYXJlclwiICsgQVBJLlRPS0VOLFxyXG5cdH0sXHJcbn07XHJcbi8vRkVUQ0ggQUxMIE1FUkNIQU5UU1xyXG5jb25zdCBzYWdhRmV0Y2hNZXJjaGFudHMgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3QgdXJsID0gQVBJLkJBU0VfVVJMICsgXCIvbWVyY2hhbnRcIjtcclxuXHJcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zXHJcblx0XHQuZ2V0KHVybCwgY29uZmlnKVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhLm1lcmNoYW50O1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVyciArIFwiZmV0Y2hpbmcgbWVyY2hhbnRzXCIpO1xyXG5cdFx0fSk7XHJcblxyXG5cdHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuLy9GRVRDSCBDQVRFR09SSUVTXHJcbmNvbnN0IHNhZ2FWZXJpZnlNZXJjaGFudCA9IGFzeW5jIChtZXJjaGFudF9pZCkgPT4ge1xyXG5cdGNvbnN0IHVybCA9IEFQSS5CQVNFX1VSTCArIFwiL2FjY291bnQvdmVyaWZ5XCI7XHJcblxyXG5cdFxyXG5cdGNvbnN0IG1lcmNoYW50ID0ge1xyXG5cdFx0YWNjb3VudF9pZDogbWVyY2hhbnRfaWRcclxuXHR9XHJcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zXHJcblx0XHQucG9zdCh1cmwsIG1lcmNoYW50LCBjb25maWcpXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyICsgXCJWZXJpZnkgTWVyY2hhbnRcIik7XHJcblx0XHR9KTtcclxuXHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG4vLyBmdW5jdGlvbiogcG9zdENhdGVnb3J5KHBheWxvYWQpIHtcclxuLy8gXHR0cnkge1xyXG4vLyBcdFx0Y29uc3QgaXNDYXRlQWRkZWQgPSB5aWVsZCBjYWxsKHNhZ2FBZGRDYXRlZ29yeSwgcGF5bG9hZC5jYXRlZ29yeSk7XHJcbi8vIFx0XHR5aWVsZCBwdXQoYWRkQ2F0ZWdvcnlTdWNjZXNzKGlzQ2F0ZUFkZGVkKSk7XHJcbi8vIFx0fSBjYXRjaCAoZXJyKSB7XHJcbi8vIFx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuZnVuY3Rpb24qIGdldEFsbE1lY2hhbnRzKCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBtZXJjaGFudHMgPSB5aWVsZCBjYWxsKHNhZ2FGZXRjaE1lcmNoYW50cyk7XHJcblx0XHR5aWVsZCBwdXQoYWN0aW9uU3VjY2Vzc0dldEFsbE1lY2hhbnRzKG1lcmNoYW50cykpO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB2ZXJpZnlNZXJjaGFudCgpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgbWVyY2hhbnRzID0geWllbGQgY2FsbChzYWdhVmVyaWZ5TWVyY2hhbnQpO1xyXG5cdFx0eWllbGQgcHV0KGFjdGlvblN1Y2Nlc3NWZXJpZnlNZWNoYW50KG1lcmNoYW50cykpO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uKiBkZWxldGVDYXRlZ29yeShwYXlsb2FkKSB7XHJcbi8vIFx0dHJ5IHtcclxuLy8gXHRcdGNvbnN0IGlzRGVsZXRlZCA9IHlpZWxkIGNhbGwoc2FnYURlbGV0ZUNhdGVnb3JpZXMsIHBheWxvYWQuaWQpO1xyXG4vLyBcdFx0eWllbGQgcHV0KGRlbGV0ZUNhdGVnb3J5U3VjY2Vzcyhpc0RlbGV0ZWQpKTtcclxuLy8gXHR9IGNhdGNoIChlcnIpIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKGVycik7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR0VUX0FMTF9NRVJDSEFOVFMsIGdldEFsbE1lY2hhbnRzKV0pO1xyXG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlZFUklGWV9NRVJDSEFOVCwgdmVyaWZ5TWVyY2hhbnQpXSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==