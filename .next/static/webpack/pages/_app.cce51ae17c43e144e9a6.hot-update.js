webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/merchant/saga.js":
/*!********************************!*\
  !*** ./store/merchant/saga.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// import { all, call, put, takeEvery } from "redux-saga/effects";
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

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
/* harmony import */ var _merchant_saga__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_merchant_saga__WEBPACK_IMPORTED_MODULE_7__);


var _marked = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);








function rootSaga() {
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_app_saga__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(_auth_saga__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_category_saga__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(_product_saga__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(_bid_saga__WEBPACK_IMPORTED_MODULE_6__["default"])(), _merchant_saga__WEBPACK_IMPORTED_MODULE_7___default()()]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbWVyY2hhbnQvc2FnYS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcm9vdFNhZ2EuanMiXSwibmFtZXMiOlsicm9vdFNhZ2EiLCJhbGwiLCJBcHBTYWdhIiwiQXV0aFNhZ2EiLCJDYXRlZ29yeVNhZ2EiLCJQcm9kdWN0U2FnYSIsIkJpZFNhZ2EiLCJNZXJjaGFudFNhZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21NQzFDeUJBLFE7O0FBUnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBVUEsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZCxpQkFBTUMsOERBQUcsQ0FBQyxDQUFDQyx5REFBTyxFQUFSLEVBQ1JDLDBEQUFRLEVBREEsRUFDSUMsOERBQVksRUFEaEIsRUFDb0JDLDZEQUFXLEVBRC9CLEVBRVJDLHlEQUFPLEVBRkMsRUFHVEMscURBQVksRUFISCxDQUFELENBQVQ7O0FBRGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jY2U1MWFlMTdjNDNlMTQ0ZTlhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgYWxsLCBjYWxsLCBwdXQsIHRha2VFdmVyeSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuLy8gaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSBcImFudGRcIjtcclxuLy8gaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4vLyBpbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vQVBJL0FwaVwiO1xyXG4vLyBpbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL3Jvb3RTYWdhXCI7XHJcbi8vIGltcG9ydCB7XHJcbi8vIFx0YWN0aW9uVHlwZXMsXHJcbi8vICAgICAgIGFjdGlvbkdldEFsbE1lY2hhbnRzLFxyXG4vLyAgICAgICBhY3Rpb25TdWNjZXNzR2V0QWxsTWVjaGFudHNcclxuLy8gfSBmcm9tIFwiLi9hY3Rpb25cIjtcclxuXHJcbi8vIGNvbnN0IGNvbmZpZyA9IHtcclxuLy8gICAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlclwiICsgQVBJLlRPS0VOLFxyXG4vLyAgICAgICB9LFxyXG4vLyB9O1xyXG5cclxuLy8gY29uc3Qgc2FnYUZldGNoQWxsTWVyY2hhbnQgPSBhc3luYygpPT57XHJcblxyXG4vLyAgICAgICBjb25zdCB1cmwgPSBBUEkuQkFTRV9VUkwgKyBcIi9tZXJjaGFudFwiO1xyXG5cdFxyXG5cclxuLy8gXHRjb25zdCBkYXRhID0gYXdhaXQgYXhpb3NcclxuLy8gXHRcdC5nZXQodXJsLCBjb25maWcpXHJcbi8vIFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuLy8gXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGEubWVyY2hhbnQ7XHJcbi8vIFx0XHR9KVxyXG4vLyBcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuLy8gXHRcdFx0Y29uc29sZS5sb2coZXJyICsgXCJmZXRjaGluZyAgbWVyY2hhbnRzXCIpO1xyXG4vLyBcdFx0fSk7XHJcblxyXG4vLyBcdHJldHVybiBkYXRhO1xyXG4vLyB9XHJcblxyXG5cclxuLy8gZnVuY3Rpb24qIGdldEFsbE1lcmNoYW50KCl7XHJcbi8vICAgICAgIHRyeXtcclxuXHJcbi8vICAgICAgICAgICAgIGNvbnN0IG1lcmNoYW50cyA9IHlpZWxkIGNhbGwoc2FnYUZldGNoQWxsTWVyY2hhbnQpXHJcbi8vICAgICAgICAgICAgIHlpZWxkIHB1dChhY3Rpb25TdWNjZXNzR2V0QWxsTWVjaGFudHMobWVyY2hhbnRzKSlcclxuLy8gICAgICAgfWNhdGNoKGVycil7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuLy8gICAgICAgfVxyXG5cclxuLy8gfVxyXG5cclxuIFxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbi8vICAgICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9BTExfTUVSQ0hBTlRTLCBnZXRBbGxNZXJjaGFudCldKTtcclxuXHJcbi8vIH1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgQXBwU2FnYSBmcm9tIFwiLi9hcHAvc2FnYVwiO1xuaW1wb3J0IEF1dGhTYWdhIGZyb20gXCIuL2F1dGgvc2FnYVwiO1xuaW1wb3J0IENhdGVnb3J5U2FnYSBmcm9tIFwiLi9jYXRlZ29yeS9zYWdhXCI7XG5pbXBvcnQgUHJvZHVjdFNhZ2EgZnJvbSBcIi4vcHJvZHVjdC9zYWdhXCI7XG5pbXBvcnQgQmlkU2FnYSBmcm9tIFwiLi9iaWQvc2FnYVwiO1xuaW1wb3J0IE1lcmNoYW50U2FnYSBmcm9tIFwiLi9tZXJjaGFudC9zYWdhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcblx0eWllbGQgYWxsKFtBcHBTYWdhKCksXG5cdFx0IEF1dGhTYWdhKCksIENhdGVnb3J5U2FnYSgpLCBQcm9kdWN0U2FnYSgpLCBcblx0XHQgQmlkU2FnYSgpLCBcblx0XHRNZXJjaGFudFNhZ2EoKV0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==