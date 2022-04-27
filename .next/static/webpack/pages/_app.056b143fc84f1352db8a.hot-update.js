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

function postCategory(payload) {
  var isCateAdded;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postCategory$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(sagaAddCategory, payload.category);

        case 3:
          isCateAdded = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(addCategorySuccess(isCateAdded));

        case 6:
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function getCategory() {
  var categories;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getCategory$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(sagaFetchCategories);

        case 3:
          categories = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(fetchCategorySuccess(categories));

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
  }, _marked2, null, [[0, 8]]);
}

function deleteCategory(payload) {
  var isDeleted;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deleteCategory$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(sagaDeleteCategories, payload.id);

        case 3:
          isDeleted = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(deleteCategorySuccess(isDeleted));

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
  }, _marked3, null, [[0, 8]]);
}

function rootSaga() {
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].CATEGORY_POST, postCategory)]);

        case 2:
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].CATEGORY_GET, getCategory)]);

        case 4:
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].CATEGORY_DELETE, deleteCategory)]);

        case 6:
        case "end":
          return _context4.stop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbWVyY2hhbnQvc2FnYS5qcyJdLCJuYW1lcyI6WyJwb3N0Q2F0ZWdvcnkiLCJnZXRDYXRlZ29yeSIsImRlbGV0ZUNhdGVnb3J5Iiwicm9vdFNhZ2EiLCJwYXlsb2FkIiwiY2FsbCIsInNhZ2FBZGRDYXRlZ29yeSIsImNhdGVnb3J5IiwiaXNDYXRlQWRkZWQiLCJwdXQiLCJhZGRDYXRlZ29yeVN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwic2FnYUZldGNoQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJmZXRjaENhdGVnb3J5U3VjY2VzcyIsInNhZ2FEZWxldGVDYXRlZ29yaWVzIiwiaWQiLCJpc0RlbGV0ZWQiLCJkZWxldGVDYXRlZ29yeVN1Y2Nlc3MiLCJhbGwiLCJ0YWtlRXZlcnkiLCJhY3Rpb25UeXBlcyIsIkNBVEVHT1JZX1BPU1QiLCJDQVRFR09SWV9HRVQiLCJDQVRFR09SWV9ERUxFVEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bU1Bc0VVQSxZO29NQVNBQyxXO29NQVNBQyxjO29NQVNlQyxROztBQWpHekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0NBR0E7QUFDQTs7QUFFQSxTQUFVSCxZQUFWLENBQXVCSSxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXNCLGlCQUFNQywrREFBSSxDQUFDQyxlQUFELEVBQWtCRixPQUFPLENBQUNHLFFBQTFCLENBQVY7O0FBRnRCO0FBRVFDLHFCQUZSO0FBQUE7QUFHRSxpQkFBTUMsOERBQUcsQ0FBQ0Msa0JBQWtCLENBQUNGLFdBQUQsQ0FBbkIsQ0FBVDs7QUFIRjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS0VHLGlCQUFPLENBQUNDLEdBQVI7O0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU0EsU0FBVVgsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXFCLGlCQUFNSSwrREFBSSxDQUFDUSxtQkFBRCxDQUFWOztBQUZyQjtBQUVRQyxvQkFGUjtBQUFBO0FBR0UsaUJBQU1MLDhEQUFHLENBQUNNLG9CQUFvQixDQUFDRCxVQUFELENBQXJCLENBQVQ7O0FBSEY7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtFSCxpQkFBTyxDQUFDQyxHQUFSOztBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNBLFNBQVVWLGNBQVYsQ0FBeUJFLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFb0IsaUJBQU1DLCtEQUFJLENBQUNXLG9CQUFELEVBQXVCWixPQUFPLENBQUNhLEVBQS9CLENBQVY7O0FBRnBCO0FBRVFDLG1CQUZSO0FBQUE7QUFHRSxpQkFBTVQsOERBQUcsQ0FBQ1UscUJBQXFCLENBQUNELFNBQUQsQ0FBdEIsQ0FBVDs7QUFIRjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS0VQLGlCQUFPLENBQUNDLEdBQVI7O0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU2UsU0FBVVQsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZCxpQkFBTWlCLDhEQUFHLENBQUMsQ0FBQ0Msb0VBQVMsQ0FBQ0MsbURBQVcsQ0FBQ0MsYUFBYixFQUE0QnZCLFlBQTVCLENBQVYsQ0FBRCxDQUFUOztBQURjO0FBQUE7QUFFZCxpQkFBTW9CLDhEQUFHLENBQUMsQ0FBQ0Msb0VBQVMsQ0FBQ0MsbURBQVcsQ0FBQ0UsWUFBYixFQUEyQnZCLFdBQTNCLENBQVYsQ0FBRCxDQUFUOztBQUZjO0FBQUE7QUFHZCxpQkFBTW1CLDhEQUFHLENBQUMsQ0FBQ0Msb0VBQVMsQ0FBQ0MsbURBQVcsQ0FBQ0csZUFBYixFQUE4QnZCLGNBQTlCLENBQVYsQ0FBRCxDQUFUOztBQUhjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDU2YjE0M2ZjODRmMTM1MmRiOGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGFsbCwgY2FsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbi8vIGltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gXCJhbnRkXCI7XHJcbi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuLy8gaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL0FQSS9BcGlcIjtcclxuLy8gaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9yb290U2FnYVwiO1xyXG4vLyBpbXBvcnQge1xyXG4vLyBcdGFjdGlvblR5cGVzLFxyXG4vLyAgICAgICBhY3Rpb25HZXRBbGxNZWNoYW50cyxcclxuLy8gICAgICAgYWN0aW9uU3VjY2Vzc0dldEFsbE1lY2hhbnRzXHJcbi8vIH0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcblxyXG4vLyBjb25zdCBjb25maWcgPSB7XHJcbi8vICAgICAgIGhlYWRlcnM6IHtcclxuLy8gICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXJcIiArIEFQSS5UT0tFTixcclxuLy8gICAgICAgfSxcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IHNhZ2FGZXRjaEFsbE1lcmNoYW50ID0gYXN5bmMoKT0+e1xyXG5cclxuLy8gICAgICAgY29uc3QgdXJsID0gQVBJLkJBU0VfVVJMICsgXCIvbWVyY2hhbnRcIjtcclxuXHRcclxuXHJcbi8vIFx0Y29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zXHJcbi8vIFx0XHQuZ2V0KHVybCwgY29uZmlnKVxyXG4vLyBcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbi8vIFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhLm1lcmNoYW50O1xyXG4vLyBcdFx0fSlcclxuLy8gXHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcbi8vIFx0XHRcdGNvbnNvbGUubG9nKGVyciArIFwiZmV0Y2hpbmcgIG1lcmNoYW50c1wiKTtcclxuLy8gXHRcdH0pO1xyXG5cclxuLy8gXHRyZXR1cm4gZGF0YTtcclxuLy8gfVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uKiBnZXRBbGxNZXJjaGFudCAoKXtcclxuLy8gICAgICAgdHJ5e1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc3QgbWVyY2hhbnRzID0geWllbGQgY2FsbChzYWdhRmV0Y2hBbGxNZXJjaGFudClcclxuLy8gICAgICAgICAgICAgeWllbGQgcHV0KGFjdGlvblN1Y2Nlc3NHZXRBbGxNZWNoYW50cyhtZXJjaGFudHMpKVxyXG4vLyAgICAgICB9Y2F0Y2goZXJyKXtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4vLyAgICAgICB9XHJcblxyXG4vLyB9XHJcblxyXG4vLyAvLyBleHBvcnQgZGVmYXVsdCBmdW50aW9uKiByb290U2FnYSgpe1xyXG4vLyAvLyAgICAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5HRVRfQUxMX01FUkNIQU5UUywgZ2V0QWxsTWVyY2hhbnQpXSk7XHJcbi8vIC8vIH0gICAgIFxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbi8vIFx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuQ0FURUdPUllfUE9TVCwgcG9zdENhdGVnb3J5KV0pO1xyXG4vLyBcdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkNBVEVHT1JZX0dFVCwgZ2V0Q2F0ZWdvcnkpXSk7XHJcbi8vIFx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuQ0FURUdPUllfREVMRVRFLCBkZWxldGVDYXRlZ29yeSldKTtcclxuLy8gXHQvLyB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5MT0dPVVQsIGxvZ091dFNhZ2EpXSk7XHJcbi8vIH1cclxuXHJcbmltcG9ydCB7IGFsbCwgY2FsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdGFjdGlvblR5cGVzLFxyXG4gICAgICBhY3Rpb25HZXRBbGxNZWNoYW50cyxcclxuICAgICAgYWN0aW9uU3VjY2Vzc0dldEFsbE1lY2hhbnRzXHJcbn0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL0FQSS9BcGlcIjtcclxuXHJcbi8vIE5FV1xyXG4vLyBBREQgQ0FURUdPUllcclxuXHJcbmZ1bmN0aW9uKiBwb3N0Q2F0ZWdvcnkocGF5bG9hZCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBpc0NhdGVBZGRlZCA9IHlpZWxkIGNhbGwoc2FnYUFkZENhdGVnb3J5LCBwYXlsb2FkLmNhdGVnb3J5KTtcclxuXHRcdHlpZWxkIHB1dChhZGRDYXRlZ29yeVN1Y2Nlc3MoaXNDYXRlQWRkZWQpKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiogZ2V0Q2F0ZWdvcnkoKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGNhdGVnb3JpZXMgPSB5aWVsZCBjYWxsKHNhZ2FGZXRjaENhdGVnb3JpZXMpO1xyXG5cdFx0eWllbGQgcHV0KGZldGNoQ2F0ZWdvcnlTdWNjZXNzKGNhdGVnb3JpZXMpKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiogZGVsZXRlQ2F0ZWdvcnkocGF5bG9hZCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBpc0RlbGV0ZWQgPSB5aWVsZCBjYWxsKHNhZ2FEZWxldGVDYXRlZ29yaWVzLCBwYXlsb2FkLmlkKTtcclxuXHRcdHlpZWxkIHB1dChkZWxldGVDYXRlZ29yeVN1Y2Nlc3MoaXNEZWxldGVkKSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkNBVEVHT1JZX1BPU1QsIHBvc3RDYXRlZ29yeSldKTtcclxuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5DQVRFR09SWV9HRVQsIGdldENhdGVnb3J5KV0pO1xyXG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkNBVEVHT1JZX0RFTEVURSwgZGVsZXRlQ2F0ZWdvcnkpXSk7XHJcblx0Ly8geWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuTE9HT1VULCBsb2dPdXRTYWdhKV0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=