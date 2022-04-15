webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/product/saga.js":
/*!*******************************!*\
  !*** ./store/product/saga.js ***!
  \*******************************/
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
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action */ "./store/product/action.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _API_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../API/Api */ "./store/API/Api.js");



var _marked = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postProduct),
    _marked2 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getMerchantProduct),
    _marked3 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);





 // POST PRODUCT

var sagaAddProduct = /*#__PURE__*/function () {
  var _ref = Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(product) {
    var url, config, data;
    return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].MERCHANT_BASE_URL + "/product/add";
            config = {
              headers: {
                Authorization: "Bearer" + _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].TOKEN
              }
            };
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(url, product, config).then(function (response) {
              console.log("saga add product" + response);
              return response.data.product.name;
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

  return function sagaAddProduct(_x) {
    return _ref.apply(this, arguments);
  };
}(); //GET SPECIFIC MERCHANT'S PRODUCT


var sagaGetMerchantProducts = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
    var url, config, data;
    return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].MERCHANT_BASE_URL + "/product/all/" + id;
            config = {
              headers: {
                Authorization: "Bearer" + _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].TOKEN
              }
            };
            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(url, config).then(function (response) {
              return response.data.products;
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

  return function sagaGetMerchantProducts(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

function postProduct(payload) {
  var isProductAdded;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postProduct$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(sagaAddProduct, payload.product);

        case 3:
          isProductAdded = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_4__["addProductSuccess"])(isProductAdded));

        case 6:
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          a(_context3.t0 + "adding product saga");

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function getMerchantProduct(payload) {
  var merchantProducts;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getMerchantProduct$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(sagaGetMerchantProducts, payload.id);

        case 3:
          merchantProducts = _context4.sent;
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_4__["getMerchantProductSuccess"])(merchantProducts));

        case 6:
          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0 + "getting merchant product saga"); // alert(err + "getting merchant product saga");

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function rootSaga() {
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].PRODUCT_POST, postProduct)]);

        case 2:
          _context5.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].MERCHANT_PRODUCT_GET, getMerchantProduct)]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcHJvZHVjdC9zYWdhLmpzIl0sIm5hbWVzIjpbInBvc3RQcm9kdWN0IiwiZ2V0TWVyY2hhbnRQcm9kdWN0Iiwicm9vdFNhZ2EiLCJzYWdhQWRkUHJvZHVjdCIsInByb2R1Y3QiLCJ1cmwiLCJBUEkiLCJNRVJDSEFOVF9CQVNFX1VSTCIsImNvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiVE9LRU4iLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm5hbWUiLCJzYWdhR2V0TWVyY2hhbnRQcm9kdWN0cyIsImlkIiwiZ2V0IiwicHJvZHVjdHMiLCJwYXlsb2FkIiwiY2FsbCIsImlzUHJvZHVjdEFkZGVkIiwicHV0IiwiYWRkUHJvZHVjdFN1Y2Nlc3MiLCJhIiwibWVyY2hhbnRQcm9kdWN0cyIsImdldE1lcmNoYW50UHJvZHVjdFN1Y2Nlc3MiLCJhbGwiLCJ0YWtlRXZlcnkiLCJhY3Rpb25UeXBlcyIsIlBST0RVQ1RfUE9TVCIsIk1FUkNIQU5UX1BST0RVQ1RfR0VUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bU1BaURVQSxXO29NQVNBQyxrQjtvTUFVZUMsUTs7QUFwRXpCO0FBQ0E7QUFFQTtBQVFBO0NBR0E7O0FBQ0EsSUFBTUMsY0FBYztBQUFBLGdZQUFHLGlCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQkMsZUFEZ0IsR0FDVkMsNENBQUcsQ0FBQ0MsaUJBQUosR0FBd0IsY0FEZDtBQUVoQkMsa0JBRmdCLEdBRVA7QUFDZEMscUJBQU8sRUFBRTtBQUNSQyw2QkFBYSxFQUFFLFdBQVdKLDRDQUFHLENBQUNLO0FBRHRCO0FBREssYUFGTztBQUFBO0FBQUEsbUJBUUhDLDRDQUFLLENBQ3RCQyxJQURpQixDQUNaUixHQURZLEVBQ1BELE9BRE8sRUFDRUksTUFERixFQUVqQk0sSUFGaUIsQ0FFWixVQUFDQyxRQUFELEVBQWM7QUFDbkJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBcUJGLFFBQWpDO0FBQ0EscUJBQU9BLFFBQVEsQ0FBQ0csSUFBVCxDQUFjZCxPQUFkLENBQXNCZSxJQUE3QjtBQUNBLGFBTGlCLENBUkc7O0FBQUE7QUFRaEJELGdCQVJnQjtBQUFBLDZDQWNmQSxJQWRlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWRmLGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEIsQyxDQWlCQTs7O0FBQ0EsSUFBTWlCLHVCQUF1QjtBQUFBLGlZQUFHLGtCQUFPQyxFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6QmhCLGVBRHlCLEdBQ25CQyw0Q0FBRyxDQUFDQyxpQkFBSixHQUF3QixlQUF4QixHQUEwQ2MsRUFEdkI7QUFFekJiLGtCQUZ5QixHQUVoQjtBQUNkQyxxQkFBTyxFQUFFO0FBQ1JDLDZCQUFhLEVBQUUsV0FBV0osNENBQUcsQ0FBQ0s7QUFEdEI7QUFESyxhQUZnQjtBQUFBO0FBQUEsbUJBUVhDLDRDQUFLLENBQUNVLEdBQU4sQ0FBVWpCLEdBQVYsRUFBZUcsTUFBZixFQUF1Qk0sSUFBdkIsQ0FBNEIsVUFBQ0MsUUFBRCxFQUFZO0FBRWpELHFCQUFPQSxRQUFRLENBQUNHLElBQVQsQ0FBY0ssUUFBckI7QUFDTCxhQUhjLENBUlc7O0FBQUE7QUFRekJMLGdCQVJ5QjtBQUFBLDhDQWFuQkEsSUFibUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBdkJFLHVCQUF1QjtBQUFBO0FBQUE7QUFBQSxHQUE3Qjs7QUFnQkEsU0FBVXBCLFdBQVYsQ0FBc0J3QixPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXlCLGlCQUFNQywrREFBSSxDQUFDdEIsY0FBRCxFQUFpQnFCLE9BQU8sQ0FBQ3BCLE9BQXpCLENBQVY7O0FBRnpCO0FBRVFzQix3QkFGUjtBQUFBO0FBR0UsaUJBQU1DLDhEQUFHLENBQUNDLGlFQUFpQixDQUFDRixjQUFELENBQWxCLENBQVQ7O0FBSEY7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtFRyxXQUFDLENBQUMsZUFBTSxxQkFBUCxDQUFEOztBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNBLFNBQVU1QixrQkFBVixDQUE2QnVCLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFMkIsaUJBQU1DLCtEQUFJLENBQUNMLHVCQUFELEVBQTBCSSxPQUFPLENBQUNILEVBQWxDLENBQVY7O0FBRjNCO0FBRVFTLDBCQUZSO0FBQUE7QUFHRSxpQkFBTUgsOERBQUcsQ0FBQ0kseUVBQXlCLENBQUNELGdCQUFELENBQTFCLENBQVQ7O0FBSEY7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtZZCxpQkFBTyxDQUFDQyxHQUFSLENBQVksZUFBTSwrQkFBbEIsRUFMWixDQU1FOztBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVlLFNBQVVmLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2QsaUJBQU04Qiw4REFBRyxDQUFDLENBQUNDLG9FQUFTLENBQUNDLG1EQUFXLENBQUNDLFlBQWIsRUFBMkJuQyxXQUEzQixDQUFWLENBQUQsQ0FBVDs7QUFEYztBQUFBO0FBRWQsaUJBQU1nQyw4REFBRyxDQUFDLENBQUNDLG9FQUFTLENBQUNDLG1EQUFXLENBQUNFLG9CQUFiLEVBQW1DbkMsa0JBQW5DLENBQVYsQ0FBRCxDQUFUOztBQUZjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYTBmZTE5NDdhNjQzZjFhYTlmY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgY2FsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdGFjdGlvblR5cGVzLFxyXG5cdGFkZFByb2R1Y3QsXHJcblx0YWRkUHJvZHVjdFN1Y2Nlc3MsXHJcblx0ZmV0Y2hQUk9EVUNUU3VjY2VzcyxcclxuXHRkZWxldGVQUk9EVUNUU3VjY2VzcyxcclxuICAgICAgZ2V0TWVyY2hhbnRQcm9kdWN0U3VjY2VzcyxcclxufSBmcm9tIFwiLi9hY3Rpb25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vQVBJL0FwaVwiO1xyXG5cclxuLy8gUE9TVCBQUk9EVUNUXHJcbmNvbnN0IHNhZ2FBZGRQcm9kdWN0ID0gYXN5bmMgKHByb2R1Y3QpID0+IHtcclxuXHRjb25zdCB1cmwgPSBBUEkuTUVSQ0hBTlRfQkFTRV9VUkwgKyBcIi9wcm9kdWN0L2FkZFwiO1xyXG5cdGNvbnN0IGNvbmZpZyA9IHtcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogXCJCZWFyZXJcIiArIEFQSS5UT0tFTixcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zXHJcblx0XHQucG9zdCh1cmwsIHByb2R1Y3QsIGNvbmZpZylcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInNhZ2EgYWRkIHByb2R1Y3RcIiArIHJlc3BvbnNlKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGEucHJvZHVjdC5uYW1lO1xyXG5cdFx0fSlcclxuXHRyZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbi8vR0VUIFNQRUNJRklDIE1FUkNIQU5UJ1MgUFJPRFVDVFxyXG5jb25zdCBzYWdhR2V0TWVyY2hhbnRQcm9kdWN0cyA9IGFzeW5jIChpZCkgPT4ge1xyXG5cdGNvbnN0IHVybCA9IEFQSS5NRVJDSEFOVF9CQVNFX1VSTCArIFwiL3Byb2R1Y3QvYWxsL1wiICsgaWQ7XHJcblx0Y29uc3QgY29uZmlnID0ge1xyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBcIkJlYXJlclwiICsgQVBJLlRPS0VOLFxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkYXRhID0gIGF3YWl0IGF4aW9zLmdldCh1cmwsIGNvbmZpZykudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLnByb2R1Y3RzXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGRhdGFcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBwb3N0UHJvZHVjdChwYXlsb2FkKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGlzUHJvZHVjdEFkZGVkID0geWllbGQgY2FsbChzYWdhQWRkUHJvZHVjdCwgcGF5bG9hZC5wcm9kdWN0KTtcclxuXHRcdHlpZWxkIHB1dChhZGRQcm9kdWN0U3VjY2Vzcyhpc1Byb2R1Y3RBZGRlZCkpO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0YShlcnIgKyBcImFkZGluZyBwcm9kdWN0IHNhZ2FcIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiogZ2V0TWVyY2hhbnRQcm9kdWN0KHBheWxvYWQpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgbWVyY2hhbnRQcm9kdWN0cyA9IHlpZWxkIGNhbGwoc2FnYUdldE1lcmNoYW50UHJvZHVjdHMsIHBheWxvYWQuaWQpO1xyXG5cdFx0eWllbGQgcHV0KGdldE1lcmNoYW50UHJvZHVjdFN1Y2Nlc3MobWVyY2hhbnRQcm9kdWN0cykpO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIgKyBcImdldHRpbmcgbWVyY2hhbnQgcHJvZHVjdCBzYWdhXCIpO1xyXG5cdFx0Ly8gYWxlcnQoZXJyICsgXCJnZXR0aW5nIG1lcmNoYW50IHByb2R1Y3Qgc2FnYVwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5QUk9EVUNUX1BPU1QsIHBvc3RQcm9kdWN0KV0pO1xyXG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLk1FUkNIQU5UX1BST0RVQ1RfR0VULCBnZXRNZXJjaGFudFByb2R1Y3QpXSk7XHJcblx0Ly8geWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuUFJPRFVDVF9ERUxFVEUsIGRlbGV0ZVBST0RVQ1QpXSk7XHJcblx0Ly8geWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuTE9HT1VULCBsb2dPdXRTYWdhKV0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=