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
    _marked2 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getAllMechantsCategory),
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

function getAllMechantsCategory() {
  var categories;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getAllMechantsCategory$(_context3) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbWVyY2hhbnQvc2FnYS5qcyJdLCJuYW1lcyI6WyJwb3N0Q2F0ZWdvcnkiLCJnZXRBbGxNZWNoYW50c0NhdGVnb3J5IiwiZGVsZXRlQ2F0ZWdvcnkiLCJyb290U2FnYSIsImNvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiQVBJIiwiVE9LRU4iLCJzYWdhRmV0Y2hNZXJjaGFudHMiLCJ1cmwiLCJCQVNFX1VSTCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIm1lcmNoYW50IiwiZXJyIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjYWxsIiwic2FnYUFkZENhdGVnb3J5IiwiY2F0ZWdvcnkiLCJpc0NhdGVBZGRlZCIsInB1dCIsImFkZENhdGVnb3J5U3VjY2VzcyIsInNhZ2FGZXRjaENhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwiZmV0Y2hDYXRlZ29yeVN1Y2Nlc3MiLCJzYWdhRGVsZXRlQ2F0ZWdvcmllcyIsImlkIiwiaXNEZWxldGVkIiwiZGVsZXRlQ2F0ZWdvcnlTdWNjZXNzIiwiYWxsIiwidGFrZUV2ZXJ5IiwiYWN0aW9uVHlwZXMiLCJDQVRFR09SWV9QT1NUIiwiQ0FURUdPUllfR0VUIiwiZ2V0Q2F0ZWdvcnkiLCJDQVRFR09SWV9ERUxFVEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttTUEyRlVBLFk7b01BU0FDLHNCO29NQVNBQyxjO29NQVNlQyxROztBQXRIekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUtBO0NBR0E7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MDU1MDRiMzhhMTU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBhbGwsIGNhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG4vLyBpbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tIFwiYW50ZFwiO1xyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vIGltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi9BUEkvQXBpXCI7XHJcbi8vIGltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vcm9vdFNhZ2FcIjtcclxuLy8gaW1wb3J0IHtcclxuLy8gXHRhY3Rpb25UeXBlcyxcclxuLy8gICAgICAgYWN0aW9uR2V0QWxsTWVjaGFudHMsXHJcbi8vICAgICAgIGFjdGlvblN1Y2Nlc3NHZXRBbGxNZWNoYW50c1xyXG4vLyB9IGZyb20gXCIuL2FjdGlvblwiO1xyXG5cclxuLy8gY29uc3QgY29uZmlnID0ge1xyXG4vLyAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyXCIgKyBBUEkuVE9LRU4sXHJcbi8vICAgICAgIH0sXHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBzYWdhRmV0Y2hBbGxNZXJjaGFudCA9IGFzeW5jKCk9PntcclxuXHJcbi8vICAgICAgIGNvbnN0IHVybCA9IEFQSS5CQVNFX1VSTCArIFwiL21lcmNoYW50XCI7XHJcblx0XHJcblxyXG4vLyBcdGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvc1xyXG4vLyBcdFx0LmdldCh1cmwsIGNvbmZpZylcclxuLy8gXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4vLyBcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YS5tZXJjaGFudDtcclxuLy8gXHRcdH0pXHJcbi8vIFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG4vLyBcdFx0XHRjb25zb2xlLmxvZyhlcnIgKyBcImZldGNoaW5nICBtZXJjaGFudHNcIik7XHJcbi8vIFx0XHR9KTtcclxuXHJcbi8vIFx0cmV0dXJuIGRhdGE7XHJcbi8vIH1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiogZ2V0QWxsTWVyY2hhbnQoKXtcclxuLy8gICAgICAgdHJ5e1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc3QgbWVyY2hhbnRzID0geWllbGQgY2FsbChzYWdhRmV0Y2hBbGxNZXJjaGFudClcclxuLy8gICAgICAgICAgICAgeWllbGQgcHV0KGFjdGlvblN1Y2Nlc3NHZXRBbGxNZWNoYW50cyhtZXJjaGFudHMpKVxyXG4vLyAgICAgICB9Y2F0Y2goZXJyKXtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4vLyAgICAgICB9XHJcblxyXG4vLyB9XHJcblxyXG4gXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuLy8gICAgICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR0VUX0FMTF9NRVJDSEFOVFMsIGdldEFsbE1lcmNoYW50KV0pO1xyXG5cclxuLy8gfVxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBhbGwsIGNhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRhY3Rpb25UeXBlcyxcclxuXHRhY3Rpb25HZXRBbGxNZWNoYW50cyxcclxuICAgICAgYWN0aW9uU3VjY2Vzc0dldEFsbE1lY2hhbnRzXHJcbn0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL0FQSS9BcGlcIjtcclxuXHJcbi8vIE5FV1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyXCIgKyBBUEkuVE9LRU4sXHJcbiAgICAgIH0sXHJcbn07XHJcbi8vRkVUQ0ggQ0FURUdPUklFU1xyXG5jb25zdCBzYWdhRmV0Y2hNZXJjaGFudHMgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3QgdXJsID0gQVBJLkJBU0VfVVJMICsgXCIvbWVyY2hhbnRcIjtcclxuXHJcblxyXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvc1xyXG5cdFx0LmdldCh1cmwsIGNvbmZpZylcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YS5tZXJjaGFudDtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnIgKyBcImZldGNoaW5nIG1lcmNoYW50c1wiKTtcclxuXHRcdH0pO1xyXG5cclxuXHRyZXR1cm4gZGF0YTtcclxufTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24qIHBvc3RDYXRlZ29yeShwYXlsb2FkKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGlzQ2F0ZUFkZGVkID0geWllbGQgY2FsbChzYWdhQWRkQ2F0ZWdvcnksIHBheWxvYWQuY2F0ZWdvcnkpO1xyXG5cdFx0eWllbGQgcHV0KGFkZENhdGVnb3J5U3VjY2Vzcyhpc0NhdGVBZGRlZCkpO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBnZXRBbGxNZWNoYW50c0NhdGVnb3J5KCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBjYXRlZ29yaWVzID0geWllbGQgY2FsbChzYWdhRmV0Y2hDYXRlZ29yaWVzKTtcclxuXHRcdHlpZWxkIHB1dChmZXRjaENhdGVnb3J5U3VjY2VzcyhjYXRlZ29yaWVzKSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGRlbGV0ZUNhdGVnb3J5KHBheWxvYWQpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgaXNEZWxldGVkID0geWllbGQgY2FsbChzYWdhRGVsZXRlQ2F0ZWdvcmllcywgcGF5bG9hZC5pZCk7XHJcblx0XHR5aWVsZCBwdXQoZGVsZXRlQ2F0ZWdvcnlTdWNjZXNzKGlzRGVsZXRlZCkpO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5DQVRFR09SWV9QT1NULCBwb3N0Q2F0ZWdvcnkpXSk7XHJcblx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuQ0FURUdPUllfR0VULCBnZXRDYXRlZ29yeSldKTtcclxuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5DQVRFR09SWV9ERUxFVEUsIGRlbGV0ZUNhdGVnb3J5KV0pO1xyXG5cdC8vIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkxPR09VVCwgbG9nT3V0U2FnYSldKTtcclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9