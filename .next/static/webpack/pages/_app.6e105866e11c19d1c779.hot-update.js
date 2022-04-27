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
// function* getAllMerchant(){
//       try{
//             const merchants = yield call(sagaFetchAllMerchant)
//             yield put(actionSuccessGetAllMechants(merchants))
//       }catch(err){
//             console.log(err)
//       }
// }
// export default function* rootSaga() {
//       yield all([takeEvery(actionTypes.GET_ALL_MERCHANTS, getAllMerchant)]);
// }




 // NEW

var config = {
  headers: {
    Authorization: "Bearer" + _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].TOKEN
  }
}; //FETCH CATEGORIES

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
              console.log(err + "fetching categories");
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
}();

function postCategory(payload) {
  var isCateAdded;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postCategory$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(sagaAddCategory, payload.category);

        case 3:
          isCateAdded = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(addCategorySuccess(isCateAdded));

        case 6:
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function getCategory() {
  var categories;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getCategory$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(sagaFetchCategories);

        case 3:
          categories = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(fetchCategorySuccess(categories));

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
  }, _marked2, null, [[0, 8]]);
}

function deleteCategory(payload) {
  var isDeleted;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deleteCategory$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(sagaDeleteCategories, payload.id);

        case 3:
          isDeleted = _context4.sent;
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(deleteCategorySuccess(isDeleted));

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
  }, _marked3, null, [[0, 8]]);
}

function rootSaga() {
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].CATEGORY_POST, postCategory)]);

        case 2:
          _context5.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].CATEGORY_GET, getCategory)]);

        case 4:
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].CATEGORY_DELETE, deleteCategory)]);

        case 6:
        case "end":
          return _context5.stop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbWVyY2hhbnQvc2FnYS5qcyJdLCJuYW1lcyI6WyJwb3N0Q2F0ZWdvcnkiLCJnZXRDYXRlZ29yeSIsImRlbGV0ZUNhdGVnb3J5Iiwicm9vdFNhZ2EiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkFQSSIsIlRPS0VOIiwic2FnYUZldGNoTWVyY2hhbnRzIiwidXJsIiwiQkFTRV9VUkwiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJtZXJjaGFudCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiY2FsbCIsInNhZ2FBZGRDYXRlZ29yeSIsImNhdGVnb3J5IiwiaXNDYXRlQWRkZWQiLCJwdXQiLCJhZGRDYXRlZ29yeVN1Y2Nlc3MiLCJzYWdhRmV0Y2hDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsImZldGNoQ2F0ZWdvcnlTdWNjZXNzIiwic2FnYURlbGV0ZUNhdGVnb3JpZXMiLCJpZCIsImlzRGVsZXRlZCIsImRlbGV0ZUNhdGVnb3J5U3VjY2VzcyIsImFsbCIsInRha2VFdmVyeSIsImFjdGlvblR5cGVzIiwiQ0FURUdPUllfUE9TVCIsIkNBVEVHT1JZX0dFVCIsIkNBVEVHT1JZX0RFTEVURSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21NQTJGVUEsWTtvTUFTQUMsVztvTUFTQUMsYztvTUFTZUMsUTs7QUF0SHpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFLQTtDQUdBOztBQUVBLElBQU1DLE1BQU0sR0FBRztBQUNUQyxTQUFPLEVBQUU7QUFDSEMsaUJBQWEsRUFBRSxXQUFXQyw0Q0FBRyxDQUFDQztBQUQzQjtBQURBLENBQWYsQyxDQUtBOztBQUNBLElBQU1DLGtCQUFrQjtBQUFBLGdZQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQkMsZUFEb0IsR0FDZEgsNENBQUcsQ0FBQ0ksUUFBSixHQUFlLFdBREQ7QUFBQTtBQUFBLG1CQUlQQyw0Q0FBSyxDQUN0QkMsR0FEaUIsQ0FDYkgsR0FEYSxFQUNSTixNQURRLEVBRWpCVSxJQUZpQixDQUVaLFVBQUNDLFFBQUQsRUFBYztBQUNuQixxQkFBT0EsUUFBUSxDQUFDQyxJQUFULENBQWNDLFFBQXJCO0FBQ0EsYUFKaUIsV0FLWCxVQUFDQyxHQUFELEVBQVM7QUFDZkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLEdBQUcscUJBQWxCO0FBQ0EsYUFQaUIsQ0FKTzs7QUFBQTtBQUlwQkYsZ0JBSm9CO0FBQUEsNkNBYW5CQSxJQWJtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFsQlAsa0JBQWtCO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQWtCQSxTQUFVVCxZQUFWLENBQXVCcUIsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVzQixpQkFBTUMsK0RBQUksQ0FBQ0MsZUFBRCxFQUFrQkYsT0FBTyxDQUFDRyxRQUExQixDQUFWOztBQUZ0QjtBQUVRQyxxQkFGUjtBQUFBO0FBR0UsaUJBQU1DLDhEQUFHLENBQUNDLGtCQUFrQixDQUFDRixXQUFELENBQW5CLENBQVQ7O0FBSEY7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtFTixpQkFBTyxDQUFDQyxHQUFSOztBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNBLFNBQVVuQixXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFcUIsaUJBQU1xQiwrREFBSSxDQUFDTSxtQkFBRCxDQUFWOztBQUZyQjtBQUVRQyxvQkFGUjtBQUFBO0FBR0UsaUJBQU1ILDhEQUFHLENBQUNJLG9CQUFvQixDQUFDRCxVQUFELENBQXJCLENBQVQ7O0FBSEY7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtFVixpQkFBTyxDQUFDQyxHQUFSOztBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNBLFNBQVVsQixjQUFWLENBQXlCbUIsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVvQixpQkFBTUMsK0RBQUksQ0FBQ1Msb0JBQUQsRUFBdUJWLE9BQU8sQ0FBQ1csRUFBL0IsQ0FBVjs7QUFGcEI7QUFFUUMsbUJBRlI7QUFBQTtBQUdFLGlCQUFNUCw4REFBRyxDQUFDUSxxQkFBcUIsQ0FBQ0QsU0FBRCxDQUF0QixDQUFUOztBQUhGO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFLRWQsaUJBQU8sQ0FBQ0MsR0FBUjs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTZSxTQUFVakIsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZCxpQkFBTWdDLDhEQUFHLENBQUMsQ0FBQ0Msb0VBQVMsQ0FBQ0MsbURBQVcsQ0FBQ0MsYUFBYixFQUE0QnRDLFlBQTVCLENBQVYsQ0FBRCxDQUFUOztBQURjO0FBQUE7QUFFZCxpQkFBTW1DLDhEQUFHLENBQUMsQ0FBQ0Msb0VBQVMsQ0FBQ0MsbURBQVcsQ0FBQ0UsWUFBYixFQUEyQnRDLFdBQTNCLENBQVYsQ0FBRCxDQUFUOztBQUZjO0FBQUE7QUFHZCxpQkFBTWtDLDhEQUFHLENBQUMsQ0FBQ0Msb0VBQVMsQ0FBQ0MsbURBQVcsQ0FBQ0csZUFBYixFQUE4QnRDLGNBQTlCLENBQVYsQ0FBRCxDQUFUOztBQUhjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNmUxMDU4NjZlMTFjMTlkMWM3NzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGFsbCwgY2FsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbi8vIGltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gXCJhbnRkXCI7XHJcbi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuLy8gaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL0FQSS9BcGlcIjtcclxuLy8gaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9yb290U2FnYVwiO1xyXG4vLyBpbXBvcnQge1xyXG4vLyBcdGFjdGlvblR5cGVzLFxyXG4vLyAgICAgICBhY3Rpb25HZXRBbGxNZWNoYW50cyxcclxuLy8gICAgICAgYWN0aW9uU3VjY2Vzc0dldEFsbE1lY2hhbnRzXHJcbi8vIH0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcblxyXG4vLyBjb25zdCBjb25maWcgPSB7XHJcbi8vICAgICAgIGhlYWRlcnM6IHtcclxuLy8gICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXJcIiArIEFQSS5UT0tFTixcclxuLy8gICAgICAgfSxcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IHNhZ2FGZXRjaEFsbE1lcmNoYW50ID0gYXN5bmMoKT0+e1xyXG5cclxuLy8gICAgICAgY29uc3QgdXJsID0gQVBJLkJBU0VfVVJMICsgXCIvbWVyY2hhbnRcIjtcclxuXHRcclxuXHJcbi8vIFx0Y29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zXHJcbi8vIFx0XHQuZ2V0KHVybCwgY29uZmlnKVxyXG4vLyBcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbi8vIFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhLm1lcmNoYW50O1xyXG4vLyBcdFx0fSlcclxuLy8gXHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcbi8vIFx0XHRcdGNvbnNvbGUubG9nKGVyciArIFwiZmV0Y2hpbmcgIG1lcmNoYW50c1wiKTtcclxuLy8gXHRcdH0pO1xyXG5cclxuLy8gXHRyZXR1cm4gZGF0YTtcclxuLy8gfVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uKiBnZXRBbGxNZXJjaGFudCgpe1xyXG4vLyAgICAgICB0cnl7XHJcblxyXG4vLyAgICAgICAgICAgICBjb25zdCBtZXJjaGFudHMgPSB5aWVsZCBjYWxsKHNhZ2FGZXRjaEFsbE1lcmNoYW50KVxyXG4vLyAgICAgICAgICAgICB5aWVsZCBwdXQoYWN0aW9uU3VjY2Vzc0dldEFsbE1lY2hhbnRzKG1lcmNoYW50cykpXHJcbi8vICAgICAgIH1jYXRjaChlcnIpe1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbi8vICAgICAgIH1cclxuXHJcbi8vIH1cclxuXHJcbiBcclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4vLyAgICAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5HRVRfQUxMX01FUkNIQU5UUywgZ2V0QWxsTWVyY2hhbnQpXSk7XHJcblxyXG4vLyB9XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IGFsbCwgY2FsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdGFjdGlvblR5cGVzLFxyXG5cdGFjdGlvbkdldEFsbE1lY2hhbnRzLFxyXG4gICAgICBhY3Rpb25TdWNjZXNzR2V0QWxsTWVjaGFudHNcclxufSBmcm9tIFwiLi9hY3Rpb25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vQVBJL0FwaVwiO1xyXG5cclxuLy8gTkVXXHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXJcIiArIEFQSS5UT0tFTixcclxuICAgICAgfSxcclxufTtcclxuLy9GRVRDSCBDQVRFR09SSUVTXHJcbmNvbnN0IHNhZ2FGZXRjaE1lcmNoYW50cyA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zdCB1cmwgPSBBUEkuQkFTRV9VUkwgKyBcIi9tZXJjaGFudFwiO1xyXG5cclxuXHJcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zXHJcblx0XHQuZ2V0KHVybCwgY29uZmlnKVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhLm1lcmNoYW50O1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVyciArIFwiZmV0Y2hpbmcgY2F0ZWdvcmllc1wiKTtcclxuXHRcdH0pO1xyXG5cclxuXHRyZXR1cm4gZGF0YTtcclxufTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24qIHBvc3RDYXRlZ29yeShwYXlsb2FkKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGlzQ2F0ZUFkZGVkID0geWllbGQgY2FsbChzYWdhQWRkQ2F0ZWdvcnksIHBheWxvYWQuY2F0ZWdvcnkpO1xyXG5cdFx0eWllbGQgcHV0KGFkZENhdGVnb3J5U3VjY2Vzcyhpc0NhdGVBZGRlZCkpO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBnZXRDYXRlZ29yeSgpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgY2F0ZWdvcmllcyA9IHlpZWxkIGNhbGwoc2FnYUZldGNoQ2F0ZWdvcmllcyk7XHJcblx0XHR5aWVsZCBwdXQoZmV0Y2hDYXRlZ29yeVN1Y2Nlc3MoY2F0ZWdvcmllcykpO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBkZWxldGVDYXRlZ29yeShwYXlsb2FkKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGlzRGVsZXRlZCA9IHlpZWxkIGNhbGwoc2FnYURlbGV0ZUNhdGVnb3JpZXMsIHBheWxvYWQuaWQpO1xyXG5cdFx0eWllbGQgcHV0KGRlbGV0ZUNhdGVnb3J5U3VjY2Vzcyhpc0RlbGV0ZWQpKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuQ0FURUdPUllfUE9TVCwgcG9zdENhdGVnb3J5KV0pO1xyXG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkNBVEVHT1JZX0dFVCwgZ2V0Q2F0ZWdvcnkpXSk7XHJcblx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuQ0FURUdPUllfREVMRVRFLCBkZWxldGVDYXRlZ29yeSldKTtcclxuXHQvLyB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5MT0dPVVQsIGxvZ091dFNhZ2EpXSk7XHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==