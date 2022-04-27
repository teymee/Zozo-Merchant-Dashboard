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
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ "./store/merchant/action.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _API_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../API/Api */ "./store/API/Api.js");


var _marked = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);

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
// function* postCategory(payload) {
// 	try {
// 		const isCateAdded = yield call(sagaAddCategory, payload.category);
// 		yield put(addCategorySuccess(isCateAdded));
// 	} catch (err) {
// 		console.log(err);
// 	}
// }
// function* getCategory() {
// 	try {
// 		const categories = yield call(sagaFetchCategories);
// 		yield put(fetchCategorySuccess(categories));
// 	} catch (err) {
// 		console.log(err);
// 	}
// }
// function* deleteCategory(payload) {
// 	try {
// 		const isDeleted = yield call(sagaDeleteCategories, payload.id);
// 		yield put(deleteCategorySuccess(isDeleted));
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

function rootSaga() {
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].CATEGORY_POST, postCategory)]);

        case 2:
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].CATEGORY_GET, getCategory)]);

        case 4:
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].CATEGORY_DELETE, deleteCategory)]);

        case 6:
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbWVyY2hhbnQvc2FnYS5qcyJdLCJuYW1lcyI6WyJyb290U2FnYSIsImFsbCIsInRha2VFdmVyeSIsImFjdGlvblR5cGVzIiwiQ0FURUdPUllfUE9TVCIsInBvc3RDYXRlZ29yeSIsIkNBVEVHT1JZX0dFVCIsImdldENhdGVnb3J5IiwiQ0FURUdPUllfREVMRVRFIiwiZGVsZXRlQ2F0ZWdvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bU1BaUd5QkEsUTs7QUFqR3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFLQTtDQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBVUEsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZCxpQkFBTUMsOERBQUcsQ0FBQyxDQUFDQyxvRUFBUyxDQUFDQyxtREFBVyxDQUFDQyxhQUFiLEVBQTRCQyxZQUE1QixDQUFWLENBQUQsQ0FBVDs7QUFEYztBQUFBO0FBRWQsaUJBQU1KLDhEQUFHLENBQUMsQ0FBQ0Msb0VBQVMsQ0FBQ0MsbURBQVcsQ0FBQ0csWUFBYixFQUEyQkMsV0FBM0IsQ0FBVixDQUFELENBQVQ7O0FBRmM7QUFBQTtBQUdkLGlCQUFNTiw4REFBRyxDQUFDLENBQUNDLG9FQUFTLENBQUNDLG1EQUFXLENBQUNLLGVBQWIsRUFBOEJDLGNBQTlCLENBQVYsQ0FBRCxDQUFUOztBQUhjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjVmMjA5MjM0NjRiNWMzYmZlOWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGFsbCwgY2FsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbi8vIGltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gXCJhbnRkXCI7XHJcbi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuLy8gaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL0FQSS9BcGlcIjtcclxuLy8gaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9yb290U2FnYVwiO1xyXG4vLyBpbXBvcnQge1xyXG4vLyBcdGFjdGlvblR5cGVzLFxyXG4vLyAgICAgICBhY3Rpb25HZXRBbGxNZWNoYW50cyxcclxuLy8gICAgICAgYWN0aW9uU3VjY2Vzc0dldEFsbE1lY2hhbnRzXHJcbi8vIH0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcblxyXG4vLyBjb25zdCBjb25maWcgPSB7XHJcbi8vICAgICAgIGhlYWRlcnM6IHtcclxuLy8gICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXJcIiArIEFQSS5UT0tFTixcclxuLy8gICAgICAgfSxcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IHNhZ2FGZXRjaEFsbE1lcmNoYW50ID0gYXN5bmMoKT0+e1xyXG5cclxuLy8gICAgICAgY29uc3QgdXJsID0gQVBJLkJBU0VfVVJMICsgXCIvbWVyY2hhbnRcIjtcclxuXHRcclxuXHJcbi8vIFx0Y29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zXHJcbi8vIFx0XHQuZ2V0KHVybCwgY29uZmlnKVxyXG4vLyBcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbi8vIFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhLm1lcmNoYW50O1xyXG4vLyBcdFx0fSlcclxuLy8gXHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcbi8vIFx0XHRcdGNvbnNvbGUubG9nKGVyciArIFwiZmV0Y2hpbmcgIG1lcmNoYW50c1wiKTtcclxuLy8gXHRcdH0pO1xyXG5cclxuLy8gXHRyZXR1cm4gZGF0YTtcclxuLy8gfVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uKiBnZXRBbGxNZXJjaGFudCAoKXtcclxuLy8gICAgICAgdHJ5e1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc3QgbWVyY2hhbnRzID0geWllbGQgY2FsbChzYWdhRmV0Y2hBbGxNZXJjaGFudClcclxuLy8gICAgICAgICAgICAgeWllbGQgcHV0KGFjdGlvblN1Y2Nlc3NHZXRBbGxNZWNoYW50cyhtZXJjaGFudHMpKVxyXG4vLyAgICAgICB9Y2F0Y2goZXJyKXtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4vLyAgICAgICB9XHJcblxyXG4vLyB9XHJcblxyXG4vLyAvLyBleHBvcnQgZGVmYXVsdCBmdW50aW9uKiByb290U2FnYSgpe1xyXG4vLyAvLyAgICAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5HRVRfQUxMX01FUkNIQU5UUywgZ2V0QWxsTWVyY2hhbnQpXSk7XHJcbi8vIC8vIH0gICAgIFxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbi8vIFx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuQ0FURUdPUllfUE9TVCwgcG9zdENhdGVnb3J5KV0pO1xyXG4vLyBcdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkNBVEVHT1JZX0dFVCwgZ2V0Q2F0ZWdvcnkpXSk7XHJcbi8vIFx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuQ0FURUdPUllfREVMRVRFLCBkZWxldGVDYXRlZ29yeSldKTtcclxuLy8gXHQvLyB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5MT0dPVVQsIGxvZ091dFNhZ2EpXSk7XHJcbi8vIH1cclxuXHJcbmltcG9ydCB7IGFsbCwgY2FsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdGFjdGlvblR5cGVzLFxyXG4gICAgICBhY3Rpb25HZXRBbGxNZWNoYW50cyxcclxuICAgICAgYWN0aW9uU3VjY2Vzc0dldEFsbE1lY2hhbnRzXHJcbn0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL0FQSS9BcGlcIjtcclxuXHJcbi8vIE5FV1xyXG4vLyBBREQgQ0FURUdPUllcclxuXHJcbi8vIGZ1bmN0aW9uKiBwb3N0Q2F0ZWdvcnkocGF5bG9hZCkge1xyXG4vLyBcdHRyeSB7XHJcbi8vIFx0XHRjb25zdCBpc0NhdGVBZGRlZCA9IHlpZWxkIGNhbGwoc2FnYUFkZENhdGVnb3J5LCBwYXlsb2FkLmNhdGVnb3J5KTtcclxuLy8gXHRcdHlpZWxkIHB1dChhZGRDYXRlZ29yeVN1Y2Nlc3MoaXNDYXRlQWRkZWQpKTtcclxuLy8gXHR9IGNhdGNoIChlcnIpIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKGVycik7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiogZ2V0Q2F0ZWdvcnkoKSB7XHJcbi8vIFx0dHJ5IHtcclxuLy8gXHRcdGNvbnN0IGNhdGVnb3JpZXMgPSB5aWVsZCBjYWxsKHNhZ2FGZXRjaENhdGVnb3JpZXMpO1xyXG4vLyBcdFx0eWllbGQgcHV0KGZldGNoQ2F0ZWdvcnlTdWNjZXNzKGNhdGVnb3JpZXMpKTtcclxuLy8gXHR9IGNhdGNoIChlcnIpIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKGVycik7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiogZGVsZXRlQ2F0ZWdvcnkocGF5bG9hZCkge1xyXG4vLyBcdHRyeSB7XHJcbi8vIFx0XHRjb25zdCBpc0RlbGV0ZWQgPSB5aWVsZCBjYWxsKHNhZ2FEZWxldGVDYXRlZ29yaWVzLCBwYXlsb2FkLmlkKTtcclxuLy8gXHRcdHlpZWxkIHB1dChkZWxldGVDYXRlZ29yeVN1Y2Nlc3MoaXNEZWxldGVkKSk7XHJcbi8vIFx0fSBjYXRjaCAoZXJyKSB7XHJcbi8vIFx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkNBVEVHT1JZX1BPU1QsIHBvc3RDYXRlZ29yeSldKTtcclxuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5DQVRFR09SWV9HRVQsIGdldENhdGVnb3J5KV0pO1xyXG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkNBVEVHT1JZX0RFTEVURSwgZGVsZXRlQ2F0ZWdvcnkpXSk7XHJcblx0Ly8geWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuTE9HT1VULCBsb2dPdXRTYWdhKV0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=