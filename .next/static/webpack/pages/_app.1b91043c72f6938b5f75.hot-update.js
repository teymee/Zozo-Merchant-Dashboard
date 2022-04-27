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



var _marked = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postCategory),
    _marked2 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getCategory),
    _marked3 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(deleteCategory),
    _marked4 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);

// import { all, call, put, takeEvery } from "redux-saga/effects";
// import { notification } from "antd";
// import axios from "axios";
// import { API } from "../API/Api";
// import rootSaga from "../rootSaga";
// import {
// 	actionTypes,
//       actionGetAllMechants,
//       actionSuccessGetAllMechants
// } from "./action";
// const config = {
//       headers: {
//             Authorization: "Bearer" + API.TOKEN,
//       },
// };
// const sagaFetchAllMerchant = async()=>{
//       const url = API.BASE_URL + "/merchant";
// 	const data = await axios
// 		.get(url, config)
// 		.then((response) => {
// 			return response.data.merchant;
// 		})
// 		.catch((err) => {
// 			console.log(err + "fetching  merchants");
// 		});
// 	return data;
// }
// function* getAllMerchant (){
//       try{
//             const merchants = yield call(sagaFetchAllMerchant)
//             yield put(actionSuccessGetAllMechants(merchants))
//       }catch(err){
//             console.log(err)
//       }
// }
// // export default funtion* rootSaga(){
// //       yield all([takeEvery(actionTypes.GET_ALL_MERCHANTS, getAllMerchant)]);
// // }     
// export default function* rootSaga() {
// 	yield all([takeEvery(actionTypes.CATEGORY_POST, postCategory)]);
// 	yield all([takeEvery(actionTypes.CATEGORY_GET, getCategory)]);
// 	yield all([takeEvery(actionTypes.CATEGORY_DELETE, deleteCategory)]);
// 	// yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
// }




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
              console.log(err + "adding to category");
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
              console.log(err + "fetching categories");
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
              console.log(err + "deleting categories");
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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(addCategorySuccess(isCateAdded));

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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(fetchCategorySuccess(categories));

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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(deleteCategorySuccess(isDeleted));

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

/***/ }),

/***/ "./store/rootSaga.js":
/*!***************************!*\
  !*** ./store/rootSaga.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _app_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/saga */ "./store/app/saga.js");
/* harmony import */ var _auth_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/saga */ "./store/auth/saga.js");
/* harmony import */ var _category_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/saga */ "./store/category/saga.js");
/* harmony import */ var _product_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/saga */ "./store/product/saga.js");
/* harmony import */ var _bid_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bid/saga */ "./store/bid/saga.js");
/* harmony import */ var _merchant_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merchant/saga */ "./store/merchant/saga.js");


var _marked = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);








function rootSaga() {
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_app_saga__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(_auth_saga__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_category_saga__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(_product_saga__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(_bid_saga__WEBPACK_IMPORTED_MODULE_6__["default"])(), Object(_merchant_saga__WEBPACK_IMPORTED_MODULE_7__["default"])()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbWVyY2hhbnQvc2FnYS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcm9vdFNhZ2EuanMiXSwibmFtZXMiOlsicG9zdENhdGVnb3J5IiwiZ2V0Q2F0ZWdvcnkiLCJkZWxldGVDYXRlZ29yeSIsInJvb3RTYWdhIiwic2FnYUFkZENhdGVnb3J5IiwiY2F0ZSIsInVybCIsIkFQSSIsIkJBU0VfVVJMIiwiY29uZmlnIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJUT0tFTiIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic2FnYUZldGNoQ2F0ZWdvcmllcyIsImdldCIsImNhdGVnb3J5Iiwic2FnYURlbGV0ZUNhdGVnb3JpZXMiLCJpZCIsIm1lc3NhZ2UiLCJwYXlsb2FkIiwiY2FsbCIsImlzQ2F0ZUFkZGVkIiwicHV0IiwiYWRkQ2F0ZWdvcnlTdWNjZXNzIiwiY2F0ZWdvcmllcyIsImZldGNoQ2F0ZWdvcnlTdWNjZXNzIiwiaXNEZWxldGVkIiwiZGVsZXRlQ2F0ZWdvcnlTdWNjZXNzIiwiYWxsIiwidGFrZUV2ZXJ5IiwiYWN0aW9uVHlwZXMiLCJDQVRFR09SWV9QT1NUIiwiQ0FURUdPUllfR0VUIiwiQ0FURUdPUllfREVMRVRFIiwiQXBwU2FnYSIsIkF1dGhTYWdhIiwiQ2F0ZWdvcnlTYWdhIiwiUHJvZHVjdFNhZ2EiLCJCaWRTYWdhIiwiTWVyY2hhbnRTYWdhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bU1BbUlVQSxZO29NQVNBQyxXO29NQVNBQyxjO29NQVNlQyxROztBQTlKekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FB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QyxvRUFBUyxDQUFDQyxtREFBVyxDQUFDQyxhQUFiLEVBQTRCdkMsWUFBNUIsQ0FBVixDQUFELENBQVQ7O0FBRGM7QUFBQTtBQUVkLGlCQUFNb0MsOERBQUcsQ0FBQyxDQUFDQyxvRUFBUyxDQUFDQyxtREFBVyxDQUFDRSxZQUFiLEVBQTJCdkMsV0FBM0IsQ0FBVixDQUFELENBQVQ7O0FBRmM7QUFBQTtBQUdkLGlCQUFNbUMsOERBQUcsQ0FBQyxDQUFDQyxvRUFBUyxDQUFDQyxtREFBVyxDQUFDRyxlQUFiLEVBQThCdkMsY0FBOUIsQ0FBVixDQUFELENBQVQ7O0FBSGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bU1DdEpVQyxROztBQVJ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVVBLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2QsaUJBQU1pQyw4REFBRyxDQUFDLENBQUNNLHlEQUFPLEVBQVIsRUFBWUMsMERBQVEsRUFBcEIsRUFBd0JDLDhEQUFZLEVBQXBDLEVBQXdDQyw2REFBVyxFQUFuRCxFQUF1REMseURBQU8sRUFBOUQsRUFBa0VDLDhEQUFZLEVBQTlFLENBQUQsQ0FBVDs7QUFEYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjFiOTEwNDNjNzJmNjkzOGI1Zjc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBhbGwsIGNhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG4vLyBpbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tIFwiYW50ZFwiO1xyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vIGltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi9BUEkvQXBpXCI7XHJcbi8vIGltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vcm9vdFNhZ2FcIjtcclxuLy8gaW1wb3J0IHtcclxuLy8gXHRhY3Rpb25UeXBlcyxcclxuLy8gICAgICAgYWN0aW9uR2V0QWxsTWVjaGFudHMsXHJcbi8vICAgICAgIGFjdGlvblN1Y2Nlc3NHZXRBbGxNZWNoYW50c1xyXG4vLyB9IGZyb20gXCIuL2FjdGlvblwiO1xyXG5cclxuLy8gY29uc3QgY29uZmlnID0ge1xyXG4vLyAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyXCIgKyBBUEkuVE9LRU4sXHJcbi8vICAgICAgIH0sXHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBzYWdhRmV0Y2hBbGxNZXJjaGFudCA9IGFzeW5jKCk9PntcclxuXHJcbi8vICAgICAgIGNvbnN0IHVybCA9IEFQSS5CQVNFX1VSTCArIFwiL21lcmNoYW50XCI7XHJcblx0XHJcblxyXG4vLyBcdGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvc1xyXG4vLyBcdFx0LmdldCh1cmwsIGNvbmZpZylcclxuLy8gXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4vLyBcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YS5tZXJjaGFudDtcclxuLy8gXHRcdH0pXHJcbi8vIFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG4vLyBcdFx0XHRjb25zb2xlLmxvZyhlcnIgKyBcImZldGNoaW5nICBtZXJjaGFudHNcIik7XHJcbi8vIFx0XHR9KTtcclxuXHJcbi8vIFx0cmV0dXJuIGRhdGE7XHJcbi8vIH1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiogZ2V0QWxsTWVyY2hhbnQgKCl7XHJcbi8vICAgICAgIHRyeXtcclxuXHJcbi8vICAgICAgICAgICAgIGNvbnN0IG1lcmNoYW50cyA9IHlpZWxkIGNhbGwoc2FnYUZldGNoQWxsTWVyY2hhbnQpXHJcbi8vICAgICAgICAgICAgIHlpZWxkIHB1dChhY3Rpb25TdWNjZXNzR2V0QWxsTWVjaGFudHMobWVyY2hhbnRzKSlcclxuLy8gICAgICAgfWNhdGNoKGVycil7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuLy8gICAgICAgfVxyXG5cclxuLy8gfVxyXG5cclxuLy8gLy8gZXhwb3J0IGRlZmF1bHQgZnVudGlvbiogcm9vdFNhZ2EoKXtcclxuLy8gLy8gICAgICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR0VUX0FMTF9NRVJDSEFOVFMsIGdldEFsbE1lcmNoYW50KV0pO1xyXG4vLyAvLyB9ICAgICBcclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4vLyBcdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkNBVEVHT1JZX1BPU1QsIHBvc3RDYXRlZ29yeSldKTtcclxuLy8gXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5DQVRFR09SWV9HRVQsIGdldENhdGVnb3J5KV0pO1xyXG4vLyBcdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkNBVEVHT1JZX0RFTEVURSwgZGVsZXRlQ2F0ZWdvcnkpXSk7XHJcbi8vIFx0Ly8geWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuTE9HT1VULCBsb2dPdXRTYWdhKV0pO1xyXG4vLyB9XHJcblxyXG5pbXBvcnQgeyBhbGwsIGNhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRhY3Rpb25UeXBlcyxcclxuICAgICAgYWN0aW9uR2V0QWxsTWVjaGFudHMsXHJcbiAgICAgIGFjdGlvblN1Y2Nlc3NHZXRBbGxNZWNoYW50c1xyXG59IGZyb20gXCIuL2FjdGlvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi9BUEkvQXBpXCI7XHJcblxyXG4vLyBORVdcclxuLy8gQUREIENBVEVHT1JZXHJcbmNvbnN0IHNhZ2FBZGRDYXRlZ29yeSA9IGFzeW5jIChjYXRlKSA9PiB7XHJcblx0Y29uc3QgdXJsID0gQVBJLkJBU0VfVVJMICsgXCIvY2F0ZWdvcnkvY3JlYXRlXCI7XHJcblx0Y29uc3QgY29uZmlnID0ge1xyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBcIkJlYXJlclwiICsgQVBJLlRPS0VOLFxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkYXRhID0gYXdhaXQgYXhpb3NcclxuXHRcdC5wb3N0KHVybCwgY2F0ZSwgY29uZmlnKVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVyciArIFwiYWRkaW5nIHRvIGNhdGVnb3J5XCIpO1xyXG5cdFx0fSk7XHJcblxyXG5cdHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuLy9GRVRDSCBDQVRFR09SSUVTXHJcbmNvbnN0IHNhZ2FGZXRjaENhdGVnb3JpZXMgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3QgdXJsID0gQVBJLkJBU0VfVVJMICsgXCIvY2F0ZWdvcnlcIjtcclxuXHRjb25zdCBjb25maWcgPSB7XHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IFwiQmVhcmVyXCIgKyBBUEkuVE9LRU4sXHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvc1xyXG5cdFx0LmdldCh1cmwsIGNvbmZpZylcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YS5jYXRlZ29yeTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnIgKyBcImZldGNoaW5nIGNhdGVnb3JpZXNcIik7XHJcblx0XHR9KTtcclxuXHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG4vL0RFTEVURUNBVEVHT1JJRVNcclxuY29uc3Qgc2FnYURlbGV0ZUNhdGVnb3JpZXMgPSBhc3luYyAoaWQpID0+IHtcclxuXHRjb25zdCB1cmwgPSBBUEkuQkFTRV9VUkwgKyBcIi9jYXRlZ29yeS9pZC9cIiArIGlkO1xyXG5cdGNvbnN0IGNvbmZpZyA9IHtcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogXCJCZWFyZXJcIiArIEFQSS5UT0tFTixcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zXHJcblx0XHQuZGVsZXRlKHVybCwgY29uZmlnKVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhLm1lc3NhZ2U7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyICsgXCJkZWxldGluZyBjYXRlZ29yaWVzXCIpO1xyXG5cdFx0fSk7XHJcblxyXG5cdHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIHBvc3RDYXRlZ29yeShwYXlsb2FkKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGlzQ2F0ZUFkZGVkID0geWllbGQgY2FsbChzYWdhQWRkQ2F0ZWdvcnksIHBheWxvYWQuY2F0ZWdvcnkpO1xyXG5cdFx0eWllbGQgcHV0KGFkZENhdGVnb3J5U3VjY2Vzcyhpc0NhdGVBZGRlZCkpO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBnZXRDYXRlZ29yeSgpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgY2F0ZWdvcmllcyA9IHlpZWxkIGNhbGwoc2FnYUZldGNoQ2F0ZWdvcmllcyk7XHJcblx0XHR5aWVsZCBwdXQoZmV0Y2hDYXRlZ29yeVN1Y2Nlc3MoY2F0ZWdvcmllcykpO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBkZWxldGVDYXRlZ29yeShwYXlsb2FkKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGlzRGVsZXRlZCA9IHlpZWxkIGNhbGwoc2FnYURlbGV0ZUNhdGVnb3JpZXMsIHBheWxvYWQuaWQpO1xyXG5cdFx0eWllbGQgcHV0KGRlbGV0ZUNhdGVnb3J5U3VjY2Vzcyhpc0RlbGV0ZWQpKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuQ0FURUdPUllfUE9TVCwgcG9zdENhdGVnb3J5KV0pO1xyXG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkNBVEVHT1JZX0dFVCwgZ2V0Q2F0ZWdvcnkpXSk7XHJcblx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuQ0FURUdPUllfREVMRVRFLCBkZWxldGVDYXRlZ29yeSldKTtcclxuXHQvLyB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5MT0dPVVQsIGxvZ091dFNhZ2EpXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IEFwcFNhZ2EgZnJvbSBcIi4vYXBwL3NhZ2FcIjtcbmltcG9ydCBBdXRoU2FnYSBmcm9tIFwiLi9hdXRoL3NhZ2FcIjtcbmltcG9ydCBDYXRlZ29yeVNhZ2EgZnJvbSBcIi4vY2F0ZWdvcnkvc2FnYVwiO1xuaW1wb3J0IFByb2R1Y3RTYWdhIGZyb20gXCIuL3Byb2R1Y3Qvc2FnYVwiO1xuaW1wb3J0IEJpZFNhZ2EgZnJvbSBcIi4vYmlkL3NhZ2FcIjtcbmltcG9ydCBNZXJjaGFudFNhZ2EgZnJvbSBcIi4vbWVyY2hhbnQvc2FnYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG5cdHlpZWxkIGFsbChbQXBwU2FnYSgpLCBBdXRoU2FnYSgpLCBDYXRlZ29yeVNhZ2EoKSwgUHJvZHVjdFNhZ2EoKSwgQmlkU2FnYSgpLCBNZXJjaGFudFNhZ2EoKV0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==