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
    _marked2 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);

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
}(); // function* postCategory(payload) {
// 	try {
// 		const isCateAdded = yield call(sagaAddCategory, payload.category);
// 		yield put(addCategorySuccess(isCateAdded));
// 	} catch (err) {
// 		console.log(err);
// 	}
// }


function getAllMechants() {
  var categories;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getAllMechants$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(sagaFetchCategories);

        case 3:
          categories = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(fetchCategorySuccess(categories));

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
} // function* deleteCategory(payload) {
// 	try {
// 		const isDeleted = yield call(sagaDeleteCategories, payload.id);
// 		yield put(deleteCategorySuccess(isDeleted));
// 	} catch (err) {
// 		console.log(err);
// 	}
// }


function rootSaga() {
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].GET_ALL_MERCHANTS, getAllMechants)]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbWVyY2hhbnQvc2FnYS5qcyJdLCJuYW1lcyI6WyJnZXRBbGxNZWNoYW50cyIsInJvb3RTYWdhIiwiY29uZmlnIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJBUEkiLCJUT0tFTiIsInNhZ2FGZXRjaE1lcmNoYW50cyIsInVybCIsIkJBU0VfVVJMIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibWVyY2hhbnQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiY2FsbCIsInNhZ2FGZXRjaENhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwicHV0IiwiZmV0Y2hDYXRlZ29yeVN1Y2Nlc3MiLCJhbGwiLCJ0YWtlRXZlcnkiLCJhY3Rpb25UeXBlcyIsIkdFVF9BTExfTUVSQ0hBTlRTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bU1Bb0dVQSxjO29NQWtCZUMsUTs7QUF0SHpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFLQTtDQUdBOztBQUVBLElBQU1DLE1BQU0sR0FBRztBQUNUQyxTQUFPLEVBQUU7QUFDSEMsaUJBQWEsRUFBRSxXQUFXQyw0Q0FBRyxDQUFDQztBQUQzQjtBQURBLENBQWYsQyxDQUtBOztBQUNBLElBQU1DLGtCQUFrQjtBQUFBLGdZQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQkMsZUFEb0IsR0FDZEgsNENBQUcsQ0FBQ0ksUUFBSixHQUFlLFdBREQ7QUFBQTtBQUFBLG1CQUlQQyw0Q0FBSyxDQUN0QkMsR0FEaUIsQ0FDYkgsR0FEYSxFQUNSTixNQURRLEVBRWpCVSxJQUZpQixDQUVaLFVBQUNDLFFBQUQsRUFBYztBQUNuQixxQkFBT0EsUUFBUSxDQUFDQyxJQUFULENBQWNDLFFBQXJCO0FBQ0EsYUFKaUIsV0FLWCxVQUFDQyxHQUFELEVBQVM7QUFDZkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLEdBQUcsb0JBQWxCO0FBQ0EsYUFQaUIsQ0FKTzs7QUFBQTtBQUlwQkYsZ0JBSm9CO0FBQUEsNkNBYW5CQSxJQWJtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFsQlAsa0JBQWtCO0FBQUE7QUFBQTtBQUFBLEdBQXhCLEMsQ0FrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBVVAsY0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXFCLGlCQUFNbUIsK0RBQUksQ0FBQ0MsbUJBQUQsQ0FBVjs7QUFGckI7QUFFUUMsb0JBRlI7QUFBQTtBQUdFLGlCQUFNQyw4REFBRyxDQUFDQyxvQkFBb0IsQ0FBQ0YsVUFBRCxDQUFyQixDQUFUOztBQUhGO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFLRUosaUJBQU8sQ0FBQ0MsR0FBUjs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDLENBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBVWpCLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWQsaUJBQU11Qiw4REFBRyxDQUFDLENBQUNDLG9FQUFTLENBQUNDLG1EQUFXLENBQUNDLGlCQUFiLEVBQWdDM0IsY0FBaEMsQ0FBVixDQUFELENBQVQ7O0FBRmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yMzhjNmMzZTNiNDMxMTI2MzhhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgYWxsLCBjYWxsLCBwdXQsIHRha2VFdmVyeSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuLy8gaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSBcImFudGRcIjtcclxuLy8gaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4vLyBpbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vQVBJL0FwaVwiO1xyXG4vLyBpbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL3Jvb3RTYWdhXCI7XHJcbi8vIGltcG9ydCB7XHJcbi8vIFx0YWN0aW9uVHlwZXMsXHJcbi8vICAgICAgIGFjdGlvbkdldEFsbE1lY2hhbnRzLFxyXG4vLyAgICAgICBhY3Rpb25TdWNjZXNzR2V0QWxsTWVjaGFudHNcclxuLy8gfSBmcm9tIFwiLi9hY3Rpb25cIjtcclxuXHJcbi8vIGNvbnN0IGNvbmZpZyA9IHtcclxuLy8gICAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlclwiICsgQVBJLlRPS0VOLFxyXG4vLyAgICAgICB9LFxyXG4vLyB9O1xyXG5cclxuLy8gY29uc3Qgc2FnYUZldGNoQWxsTWVyY2hhbnQgPSBhc3luYygpPT57XHJcblxyXG4vLyAgICAgICBjb25zdCB1cmwgPSBBUEkuQkFTRV9VUkwgKyBcIi9tZXJjaGFudFwiO1xyXG5cdFxyXG5cclxuLy8gXHRjb25zdCBkYXRhID0gYXdhaXQgYXhpb3NcclxuLy8gXHRcdC5nZXQodXJsLCBjb25maWcpXHJcbi8vIFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuLy8gXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGEubWVyY2hhbnQ7XHJcbi8vIFx0XHR9KVxyXG4vLyBcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuLy8gXHRcdFx0Y29uc29sZS5sb2coZXJyICsgXCJmZXRjaGluZyAgbWVyY2hhbnRzXCIpO1xyXG4vLyBcdFx0fSk7XHJcblxyXG4vLyBcdHJldHVybiBkYXRhO1xyXG4vLyB9XHJcblxyXG5cclxuLy8gZnVuY3Rpb24qIGdldEFsbE1lcmNoYW50KCl7XHJcbi8vICAgICAgIHRyeXtcclxuXHJcbi8vICAgICAgICAgICAgIGNvbnN0IG1lcmNoYW50cyA9IHlpZWxkIGNhbGwoc2FnYUZldGNoQWxsTWVyY2hhbnQpXHJcbi8vICAgICAgICAgICAgIHlpZWxkIHB1dChhY3Rpb25TdWNjZXNzR2V0QWxsTWVjaGFudHMobWVyY2hhbnRzKSlcclxuLy8gICAgICAgfWNhdGNoKGVycil7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuLy8gICAgICAgfVxyXG5cclxuLy8gfVxyXG5cclxuIFxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbi8vICAgICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9BTExfTUVSQ0hBTlRTLCBnZXRBbGxNZXJjaGFudCldKTtcclxuXHJcbi8vIH1cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgYWxsLCBjYWxsLCBwdXQsIHRha2VFdmVyeSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0YWN0aW9uVHlwZXMsXHJcblx0YWN0aW9uR2V0QWxsTWVjaGFudHMsXHJcbiAgICAgIGFjdGlvblN1Y2Nlc3NHZXRBbGxNZWNoYW50c1xyXG59IGZyb20gXCIuL2FjdGlvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi9BUEkvQXBpXCI7XHJcblxyXG4vLyBORVdcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlclwiICsgQVBJLlRPS0VOLFxyXG4gICAgICB9LFxyXG59O1xyXG4vL0ZFVENIIENBVEVHT1JJRVNcclxuY29uc3Qgc2FnYUZldGNoTWVyY2hhbnRzID0gYXN5bmMgKCkgPT4ge1xyXG5cdGNvbnN0IHVybCA9IEFQSS5CQVNFX1VSTCArIFwiL21lcmNoYW50XCI7XHJcblxyXG5cclxuXHRjb25zdCBkYXRhID0gYXdhaXQgYXhpb3NcclxuXHRcdC5nZXQodXJsLCBjb25maWcpXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGEubWVyY2hhbnQ7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyICsgXCJmZXRjaGluZyBtZXJjaGFudHNcIik7XHJcblx0XHR9KTtcclxuXHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uKiBwb3N0Q2F0ZWdvcnkocGF5bG9hZCkge1xyXG4vLyBcdHRyeSB7XHJcbi8vIFx0XHRjb25zdCBpc0NhdGVBZGRlZCA9IHlpZWxkIGNhbGwoc2FnYUFkZENhdGVnb3J5LCBwYXlsb2FkLmNhdGVnb3J5KTtcclxuLy8gXHRcdHlpZWxkIHB1dChhZGRDYXRlZ29yeVN1Y2Nlc3MoaXNDYXRlQWRkZWQpKTtcclxuLy8gXHR9IGNhdGNoIChlcnIpIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKGVycik7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiogZ2V0QWxsTWVjaGFudHMoKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGNhdGVnb3JpZXMgPSB5aWVsZCBjYWxsKHNhZ2FGZXRjaENhdGVnb3JpZXMpO1xyXG5cdFx0eWllbGQgcHV0KGZldGNoQ2F0ZWdvcnlTdWNjZXNzKGNhdGVnb3JpZXMpKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0fVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiogZGVsZXRlQ2F0ZWdvcnkocGF5bG9hZCkge1xyXG4vLyBcdHRyeSB7XHJcbi8vIFx0XHRjb25zdCBpc0RlbGV0ZWQgPSB5aWVsZCBjYWxsKHNhZ2FEZWxldGVDYXRlZ29yaWVzLCBwYXlsb2FkLmlkKTtcclxuLy8gXHRcdHlpZWxkIHB1dChkZWxldGVDYXRlZ29yeVN1Y2Nlc3MoaXNEZWxldGVkKSk7XHJcbi8vIFx0fSBjYXRjaCAoZXJyKSB7XHJcbi8vIFx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG5cdC8vIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkNBVEVHT1JZX1BPU1QsIHBvc3RDYXRlZ29yeSldKTtcclxuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5HRVRfQUxMX01FUkNIQU5UUywgZ2V0QWxsTWVjaGFudHMpXSk7XHJcblx0Ly8geWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuQ0FURUdPUllfREVMRVRFLCBkZWxldGVDYXRlZ29yeSldKTtcclxuXHQvLyB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5MT0dPVVQsIGxvZ091dFNhZ2EpXSk7XHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==