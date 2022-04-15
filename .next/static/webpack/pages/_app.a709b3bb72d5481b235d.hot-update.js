webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/category/saga.js":
/*!********************************!*\
  !*** ./store/category/saga.js ***!
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
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action */ "./store/category/action.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _API_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../API/Api */ "./store/API/Api.js");



var _marked = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postCategory),
    _marked2 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getCategory),
    _marked3 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(deleteCategory),
    _marked4 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);





 // NEW
// ADD CATEGORY

var sagaAddCategory = /*#__PURE__*/function () {
  var _ref = Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(cate) {
    var url, config, data;
    return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].BASE_URL + "/category/create";
            config = {
              headers: {
                Authorization: "Bearer" + _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].TOKEN
              }
            };
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(url, cate, config).then(function (response) {
              return response.data;
            })["catch"](function (err) {
              alert(err + "adding to category");
            });

          case 4:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sagaAddCategory(_x) {
    return _ref.apply(this, arguments);
  };
}(); //FETCH CATEGORIES


var sagaFetchCategories = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var url, config, data;
    return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].BASE_URL + "/category";
            config = {
              headers: {
                Authorization: "Bearer" + _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].TOKEN
              }
            };
            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(url, config).then(function (response) {
              return response.data.category;
            })["catch"](function (err) {
              alert(err + "fetching categories");
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

  return function sagaFetchCategories() {
    return _ref2.apply(this, arguments);
  };
}(); //DELETECATEGORIES


var sagaDeleteCategories = /*#__PURE__*/function () {
  var _ref3 = Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
    var url, config, data;
    return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].BASE_URL + "/category/id/" + id;
            config = {
              headers: {
                Authorization: "Bearer" + _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].TOKEN
              }
            };
            _context3.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_5___default.a["delete"](url, config).then(function (response) {
              return response.data.message;
            })["catch"](function (err) {
              alert(err + "deleting categories");
            });

          case 4:
            data = _context3.sent;
            return _context3.abrupt("return", data);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function sagaDeleteCategories(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

function postCategory(payload) {
  var isCateAdded;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postCategory$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(sagaAddCategory, payload.category);

        case 3:
          isCateAdded = _context4.sent;
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_4__["addCategorySuccess"])(isCateAdded));

        case 6:
          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          alert(_context4.t0);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function getCategory() {
  var categories;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getCategory$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(sagaFetchCategories);

        case 3:
          categories = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_4__["fetchCategorySuccess"])(categories));

        case 6:
          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function deleteCategory(payload) {
  var isDeleted;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deleteCategory$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(sagaDeleteCategories, payload.id);

        case 3:
          isDeleted = _context6.sent;
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_4__["deleteCategorySuccess"])(isDeleted));

        case 6:
          _context6.next = 11;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function rootSaga() {
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].CATEGORY_POST, postCategory)]);

        case 2:
          _context7.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].CATEGORY_GET, getCategory)]);

        case 4:
          _context7.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].CATEGORY_DELETE, deleteCategory)]);

        case 6:
        case "end":
          return _context7.stop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY2F0ZWdvcnkvc2FnYS5qcyJdLCJuYW1lcyI6WyJwb3N0Q2F0ZWdvcnkiLCJnZXRDYXRlZ29yeSIsImRlbGV0ZUNhdGVnb3J5Iiwicm9vdFNhZ2EiLCJzYWdhQWRkQ2F0ZWdvcnkiLCJjYXRlIiwidXJsIiwiQVBJIiwiQkFTRV9VUkwiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIlRPS0VOIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVyciIsImFsZXJ0Iiwic2FnYUZldGNoQ2F0ZWdvcmllcyIsImdldCIsImNhdGVnb3J5Iiwic2FnYURlbGV0ZUNhdGVnb3JpZXMiLCJpZCIsIm1lc3NhZ2UiLCJwYXlsb2FkIiwiY2FsbCIsImlzQ2F0ZUFkZGVkIiwicHV0IiwiYWRkQ2F0ZWdvcnlTdWNjZXNzIiwiY2F0ZWdvcmllcyIsImZldGNoQ2F0ZWdvcnlTdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImlzRGVsZXRlZCIsImRlbGV0ZUNhdGVnb3J5U3VjY2VzcyIsImFsbCIsInRha2VFdmVyeSIsImFjdGlvblR5cGVzIiwiQ0FURUdPUllfUE9TVCIsIkNBVEVHT1JZX0dFVCIsIkNBVEVHT1JZX0RFTEVURSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21NQTRFVUEsWTtvTUFTQUMsVztvTUFTQUMsYztvTUFTZUMsUTs7QUF2R3pCO0FBQ0E7QUFFQTtBQU1BO0NBR0E7QUFDQTs7QUFDQSxJQUFNQyxlQUFlO0FBQUEsZ1lBQUcsaUJBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQyxlQURpQixHQUNYQyw0Q0FBRyxDQUFDQyxRQUFKLEdBQWUsa0JBREo7QUFFakJDLGtCQUZpQixHQUVSO0FBQ2RDLHFCQUFPLEVBQUU7QUFDUkMsNkJBQWEsRUFBRSxXQUFXSiw0Q0FBRyxDQUFDSztBQUR0QjtBQURLLGFBRlE7QUFBQTtBQUFBLG1CQVFKQyw0Q0FBSyxDQUN0QkMsSUFEaUIsQ0FDWlIsR0FEWSxFQUNQRCxJQURPLEVBQ0RJLE1BREMsRUFFakJNLElBRmlCLENBRVosVUFBQ0MsUUFBRCxFQUFjO0FBQ25CLHFCQUFPQSxRQUFRLENBQUNDLElBQWhCO0FBQ0EsYUFKaUIsV0FLWCxVQUFDQyxHQUFELEVBQVM7QUFDZkMsbUJBQUssQ0FBQ0QsR0FBRyxHQUFHLG9CQUFQLENBQUw7QUFDQSxhQVBpQixDQVJJOztBQUFBO0FBUWpCRCxnQkFSaUI7QUFBQSw2Q0FpQmhCQSxJQWpCZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZmIsZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQixDLENBb0JBOzs7QUFDQSxJQUFNZ0IsbUJBQW1CO0FBQUEsaVlBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3JCZCxlQURxQixHQUNmQyw0Q0FBRyxDQUFDQyxRQUFKLEdBQWUsV0FEQTtBQUVyQkMsa0JBRnFCLEdBRVo7QUFDZEMscUJBQU8sRUFBRTtBQUNSQyw2QkFBYSxFQUFFLFdBQVdKLDRDQUFHLENBQUNLO0FBRHRCO0FBREssYUFGWTtBQUFBO0FBQUEsbUJBUVJDLDRDQUFLLENBQ3RCUSxHQURpQixDQUNiZixHQURhLEVBQ1JHLE1BRFEsRUFFakJNLElBRmlCLENBRVosVUFBQ0MsUUFBRCxFQUFjO0FBQ25CLHFCQUFPQSxRQUFRLENBQUNDLElBQVQsQ0FBY0ssUUFBckI7QUFDQSxhQUppQixXQUtYLFVBQUNKLEdBQUQsRUFBUztBQUNmQyxtQkFBSyxDQUFDRCxHQUFHLEdBQUcscUJBQVAsQ0FBTDtBQUNBLGFBUGlCLENBUlE7O0FBQUE7QUFRckJELGdCQVJxQjtBQUFBLDhDQWlCcEJBLElBakJvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFuQkcsbUJBQW1CO0FBQUE7QUFBQTtBQUFBLEdBQXpCLEMsQ0FvQkE7OztBQUNBLElBQU1HLG9CQUFvQjtBQUFBLGlZQUFHLGtCQUFPQyxFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QmxCLGVBRHNCLEdBQ2hCQyw0Q0FBRyxDQUFDQyxRQUFKLEdBQWUsZUFBZixHQUFpQ2dCLEVBRGpCO0FBRXRCZixrQkFGc0IsR0FFYjtBQUNkQyxxQkFBTyxFQUFFO0FBQ1JDLDZCQUFhLEVBQUUsV0FBV0osNENBQUcsQ0FBQ0s7QUFEdEI7QUFESyxhQUZhO0FBQUE7QUFBQSxtQkFRVEMsNENBQUssVUFBTCxDQUNWUCxHQURVLEVBQ0xHLE1BREssRUFFakJNLElBRmlCLENBRVosVUFBQ0MsUUFBRCxFQUFjO0FBQ25CLHFCQUFPQSxRQUFRLENBQUNDLElBQVQsQ0FBY1EsT0FBckI7QUFDQSxhQUppQixXQUtYLFVBQUNQLEdBQUQsRUFBUztBQUNmQyxtQkFBSyxDQUFDRCxHQUFHLEdBQUcscUJBQVAsQ0FBTDtBQUNBLGFBUGlCLENBUlM7O0FBQUE7QUFRdEJELGdCQVJzQjtBQUFBLDhDQWlCckJBLElBakJxQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFwQk0sb0JBQW9CO0FBQUE7QUFBQTtBQUFBLEdBQTFCOztBQW9CQSxTQUFVdkIsWUFBVixDQUF1QjBCLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFc0IsaUJBQU1DLCtEQUFJLENBQUN2QixlQUFELEVBQWtCc0IsT0FBTyxDQUFDSixRQUExQixDQUFWOztBQUZ0QjtBQUVRTSxxQkFGUjtBQUFBO0FBR0UsaUJBQU1DLDhEQUFHLENBQUNDLGtFQUFrQixDQUFDRixXQUFELENBQW5CLENBQVQ7O0FBSEY7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtFVCxlQUFLLGNBQUw7O0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU0EsU0FBVWxCLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVxQixpQkFBTTBCLCtEQUFJLENBQUNQLG1CQUFELENBQVY7O0FBRnJCO0FBRVFXLG9CQUZSO0FBQUE7QUFHRSxpQkFBTUYsOERBQUcsQ0FBQ0csb0VBQW9CLENBQUNELFVBQUQsQ0FBckIsQ0FBVDs7QUFIRjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS0VFLGlCQUFPLENBQUNDLEdBQVI7O0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU0EsU0FBVWhDLGNBQVYsQ0FBeUJ3QixPQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW9CLGlCQUFNQywrREFBSSxDQUFDSixvQkFBRCxFQUF1QkcsT0FBTyxDQUFDRixFQUEvQixDQUFWOztBQUZwQjtBQUVRVyxtQkFGUjtBQUFBO0FBR0UsaUJBQU1OLDhEQUFHLENBQUNPLHFFQUFxQixDQUFDRCxTQUFELENBQXRCLENBQVQ7O0FBSEY7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtFRixpQkFBTyxDQUFDQyxHQUFSOztBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNlLFNBQVUvQixRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkLGlCQUFNa0MsOERBQUcsQ0FBQyxDQUFDQyxvRUFBUyxDQUFDQyxtREFBVyxDQUFDQyxhQUFiLEVBQTRCeEMsWUFBNUIsQ0FBVixDQUFELENBQVQ7O0FBRGM7QUFBQTtBQUVkLGlCQUFNcUMsOERBQUcsQ0FBQyxDQUFDQyxvRUFBUyxDQUFDQyxtREFBVyxDQUFDRSxZQUFiLEVBQTJCeEMsV0FBM0IsQ0FBVixDQUFELENBQVQ7O0FBRmM7QUFBQTtBQUdkLGlCQUFNb0MsOERBQUcsQ0FBQyxDQUFDQyxvRUFBUyxDQUFDQyxtREFBVyxDQUFDRyxlQUFiLEVBQThCeEMsY0FBOUIsQ0FBVixDQUFELENBQVQ7O0FBSGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hNzA5YjNiYjcyZDU0ODFiMjM1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBjYWxsLCBwdXQsIHRha2VFdmVyeSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0YWN0aW9uVHlwZXMsXHJcblx0YWRkQ2F0ZWdvcnlTdWNjZXNzLFxyXG5cdGZldGNoQ2F0ZWdvcnlTdWNjZXNzLFxyXG5cdGRlbGV0ZUNhdGVnb3J5U3VjY2VzcyxcclxufSBmcm9tIFwiLi9hY3Rpb25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vQVBJL0FwaVwiO1xyXG5cclxuLy8gTkVXXHJcbi8vIEFERCBDQVRFR09SWVxyXG5jb25zdCBzYWdhQWRkQ2F0ZWdvcnkgPSBhc3luYyAoY2F0ZSkgPT4ge1xyXG5cdGNvbnN0IHVybCA9IEFQSS5CQVNFX1VSTCArIFwiL2NhdGVnb3J5L2NyZWF0ZVwiO1xyXG5cdGNvbnN0IGNvbmZpZyA9IHtcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogXCJCZWFyZXJcIiArIEFQSS5UT0tFTixcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zXHJcblx0XHQucG9zdCh1cmwsIGNhdGUsIGNvbmZpZylcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRhbGVydChlcnIgKyBcImFkZGluZyB0byBjYXRlZ29yeVwiKTtcclxuXHRcdH0pO1xyXG5cclxuXHRyZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbi8vRkVUQ0ggQ0FURUdPUklFU1xyXG5jb25zdCBzYWdhRmV0Y2hDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xyXG5cdGNvbnN0IHVybCA9IEFQSS5CQVNFX1VSTCArIFwiL2NhdGVnb3J5XCI7XHJcblx0Y29uc3QgY29uZmlnID0ge1xyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBcIkJlYXJlclwiICsgQVBJLlRPS0VOLFxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkYXRhID0gYXdhaXQgYXhpb3NcclxuXHRcdC5nZXQodXJsLCBjb25maWcpXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGEuY2F0ZWdvcnk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0YWxlcnQoZXJyICsgXCJmZXRjaGluZyBjYXRlZ29yaWVzXCIpO1xyXG5cdFx0fSk7XHJcblxyXG5cdHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuLy9ERUxFVEVDQVRFR09SSUVTXHJcbmNvbnN0IHNhZ2FEZWxldGVDYXRlZ29yaWVzID0gYXN5bmMgKGlkKSA9PiB7XHJcblx0Y29uc3QgdXJsID0gQVBJLkJBU0VfVVJMICsgXCIvY2F0ZWdvcnkvaWQvXCIgKyBpZDtcclxuXHRjb25zdCBjb25maWcgPSB7XHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IFwiQmVhcmVyXCIgKyBBUEkuVE9LRU4sXHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvc1xyXG5cdFx0LmRlbGV0ZSh1cmwsIGNvbmZpZylcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdGFsZXJ0KGVyciArIFwiZGVsZXRpbmcgY2F0ZWdvcmllc1wiKTtcclxuXHRcdH0pO1xyXG5cclxuXHRyZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBwb3N0Q2F0ZWdvcnkocGF5bG9hZCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBpc0NhdGVBZGRlZCA9IHlpZWxkIGNhbGwoc2FnYUFkZENhdGVnb3J5LCBwYXlsb2FkLmNhdGVnb3J5KTtcclxuXHRcdHlpZWxkIHB1dChhZGRDYXRlZ29yeVN1Y2Nlc3MoaXNDYXRlQWRkZWQpKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGFsZXJ0KGVycik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiogZ2V0Q2F0ZWdvcnkoKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGNhdGVnb3JpZXMgPSB5aWVsZCBjYWxsKHNhZ2FGZXRjaENhdGVnb3JpZXMpO1xyXG5cdFx0eWllbGQgcHV0KGZldGNoQ2F0ZWdvcnlTdWNjZXNzKGNhdGVnb3JpZXMpKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiogZGVsZXRlQ2F0ZWdvcnkocGF5bG9hZCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBpc0RlbGV0ZWQgPSB5aWVsZCBjYWxsKHNhZ2FEZWxldGVDYXRlZ29yaWVzLCBwYXlsb2FkLmlkKTtcclxuXHRcdHlpZWxkIHB1dChkZWxldGVDYXRlZ29yeVN1Y2Nlc3MoaXNEZWxldGVkKSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkNBVEVHT1JZX1BPU1QsIHBvc3RDYXRlZ29yeSldKTtcclxuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5DQVRFR09SWV9HRVQsIGdldENhdGVnb3J5KV0pO1xyXG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkNBVEVHT1JZX0RFTEVURSwgZGVsZXRlQ2F0ZWdvcnkpXSk7XHJcblx0Ly8geWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuTE9HT1VULCBsb2dPdXRTYWdhKV0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=