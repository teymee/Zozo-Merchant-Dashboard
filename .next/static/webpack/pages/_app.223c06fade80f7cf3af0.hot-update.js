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
          console.log(_context3.t0 + "adding product saga");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcHJvZHVjdC9zYWdhLmpzIl0sIm5hbWVzIjpbInBvc3RQcm9kdWN0IiwiZ2V0TWVyY2hhbnRQcm9kdWN0Iiwicm9vdFNhZ2EiLCJzYWdhQWRkUHJvZHVjdCIsInByb2R1Y3QiLCJ1cmwiLCJBUEkiLCJNRVJDSEFOVF9CQVNFX1VSTCIsImNvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiVE9LRU4iLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm5hbWUiLCJzYWdhR2V0TWVyY2hhbnRQcm9kdWN0cyIsImlkIiwiZ2V0IiwicHJvZHVjdHMiLCJwYXlsb2FkIiwiY2FsbCIsImlzUHJvZHVjdEFkZGVkIiwicHV0IiwiYWRkUHJvZHVjdFN1Y2Nlc3MiLCJtZXJjaGFudFByb2R1Y3RzIiwiZ2V0TWVyY2hhbnRQcm9kdWN0U3VjY2VzcyIsImFsbCIsInRha2VFdmVyeSIsImFjdGlvblR5cGVzIiwiUFJPRFVDVF9QT1NUIiwiTUVSQ0hBTlRfUFJPRFVDVF9HRVQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttTUFpRFVBLFc7b01BU0FDLGtCO29NQVVlQyxROztBQXBFekI7QUFDQTtBQUVBO0FBUUE7Q0FHQTs7QUFDQSxJQUFNQyxjQUFjO0FBQUEsZ1lBQUcsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCQyxlQURnQixHQUNWQyw0Q0FBRyxDQUFDQyxpQkFBSixHQUF3QixjQURkO0FBRWhCQyxrQkFGZ0IsR0FFUDtBQUNkQyxxQkFBTyxFQUFFO0FBQ1JDLDZCQUFhLEVBQUUsV0FBV0osNENBQUcsQ0FBQ0s7QUFEdEI7QUFESyxhQUZPO0FBQUE7QUFBQSxtQkFRSEMsNENBQUssQ0FDdEJDLElBRGlCLENBQ1pSLEdBRFksRUFDUEQsT0FETyxFQUNFSSxNQURGLEVBRWpCTSxJQUZpQixDQUVaLFVBQUNDLFFBQUQsRUFBYztBQUNuQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFxQkYsUUFBakM7QUFDQSxxQkFBT0EsUUFBUSxDQUFDRyxJQUFULENBQWNkLE9BQWQsQ0FBc0JlLElBQTdCO0FBQ0EsYUFMaUIsQ0FSRzs7QUFBQTtBQVFoQkQsZ0JBUmdCO0FBQUEsNkNBY2ZBLElBZGU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZGYsY0FBYztBQUFBO0FBQUE7QUFBQSxHQUFwQixDLENBaUJBOzs7QUFDQSxJQUFNaUIsdUJBQXVCO0FBQUEsaVlBQUcsa0JBQU9DLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pCaEIsZUFEeUIsR0FDbkJDLDRDQUFHLENBQUNDLGlCQUFKLEdBQXdCLGVBQXhCLEdBQTBDYyxFQUR2QjtBQUV6QmIsa0JBRnlCLEdBRWhCO0FBQ2RDLHFCQUFPLEVBQUU7QUFDUkMsNkJBQWEsRUFBRSxXQUFXSiw0Q0FBRyxDQUFDSztBQUR0QjtBQURLLGFBRmdCO0FBQUE7QUFBQSxtQkFRWEMsNENBQUssQ0FBQ1UsR0FBTixDQUFVakIsR0FBVixFQUFlRyxNQUFmLEVBQXVCTSxJQUF2QixDQUE0QixVQUFDQyxRQUFELEVBQVk7QUFFakQscUJBQU9BLFFBQVEsQ0FBQ0csSUFBVCxDQUFjSyxRQUFyQjtBQUNMLGFBSGMsQ0FSVzs7QUFBQTtBQVF6QkwsZ0JBUnlCO0FBQUEsOENBYW5CQSxJQWJtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUF2QkUsdUJBQXVCO0FBQUE7QUFBQTtBQUFBLEdBQTdCOztBQWdCQSxTQUFVcEIsV0FBVixDQUFzQndCLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFeUIsaUJBQU1DLCtEQUFJLENBQUN0QixjQUFELEVBQWlCcUIsT0FBTyxDQUFDcEIsT0FBekIsQ0FBVjs7QUFGekI7QUFFUXNCLHdCQUZSO0FBQUE7QUFHRSxpQkFBTUMsOERBQUcsQ0FBQ0MsaUVBQWlCLENBQUNGLGNBQUQsQ0FBbEIsQ0FBVDs7QUFIRjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS0VWLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFNLHFCQUFsQjs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTQSxTQUFVaEIsa0JBQVYsQ0FBNkJ1QixPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRTJCLGlCQUFNQywrREFBSSxDQUFDTCx1QkFBRCxFQUEwQkksT0FBTyxDQUFDSCxFQUFsQyxDQUFWOztBQUYzQjtBQUVRUSwwQkFGUjtBQUFBO0FBR0UsaUJBQU1GLDhEQUFHLENBQUNHLHlFQUF5QixDQUFDRCxnQkFBRCxDQUExQixDQUFUOztBQUhGO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFLWWIsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQU0sK0JBQWxCLEVBTFosQ0FNRTs7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVZSxTQUFVZixRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkLGlCQUFNNkIsOERBQUcsQ0FBQyxDQUFDQyxvRUFBUyxDQUFDQyxtREFBVyxDQUFDQyxZQUFiLEVBQTJCbEMsV0FBM0IsQ0FBVixDQUFELENBQVQ7O0FBRGM7QUFBQTtBQUVkLGlCQUFNK0IsOERBQUcsQ0FBQyxDQUFDQyxvRUFBUyxDQUFDQyxtREFBVyxDQUFDRSxvQkFBYixFQUFtQ2xDLGtCQUFuQyxDQUFWLENBQUQsQ0FBVDs7QUFGYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjIyM2MwNmZhZGU4MGY3Y2YzYWYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGNhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRhY3Rpb25UeXBlcyxcclxuXHRhZGRQcm9kdWN0LFxyXG5cdGFkZFByb2R1Y3RTdWNjZXNzLFxyXG5cdGZldGNoUFJPRFVDVFN1Y2Nlc3MsXHJcblx0ZGVsZXRlUFJPRFVDVFN1Y2Nlc3MsXHJcbiAgICAgIGdldE1lcmNoYW50UHJvZHVjdFN1Y2Nlc3MsXHJcbn0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL0FQSS9BcGlcIjtcclxuXHJcbi8vIFBPU1QgUFJPRFVDVFxyXG5jb25zdCBzYWdhQWRkUHJvZHVjdCA9IGFzeW5jIChwcm9kdWN0KSA9PiB7XHJcblx0Y29uc3QgdXJsID0gQVBJLk1FUkNIQU5UX0JBU0VfVVJMICsgXCIvcHJvZHVjdC9hZGRcIjtcclxuXHRjb25zdCBjb25maWcgPSB7XHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IFwiQmVhcmVyXCIgKyBBUEkuVE9LRU4sXHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvc1xyXG5cdFx0LnBvc3QodXJsLCBwcm9kdWN0LCBjb25maWcpXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJzYWdhIGFkZCBwcm9kdWN0XCIgKyByZXNwb25zZSk7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhLnByb2R1Y3QubmFtZTtcclxuXHRcdH0pXHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG4vL0dFVCBTUEVDSUZJQyBNRVJDSEFOVCdTIFBST0RVQ1RcclxuY29uc3Qgc2FnYUdldE1lcmNoYW50UHJvZHVjdHMgPSBhc3luYyAoaWQpID0+IHtcclxuXHRjb25zdCB1cmwgPSBBUEkuTUVSQ0hBTlRfQkFTRV9VUkwgKyBcIi9wcm9kdWN0L2FsbC9cIiArIGlkO1xyXG5cdGNvbnN0IGNvbmZpZyA9IHtcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogXCJCZWFyZXJcIiArIEFQSS5UT0tFTixcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGF0YSA9ICBhd2FpdCBheGlvcy5nZXQodXJsLCBjb25maWcpLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5wcm9kdWN0c1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBkYXRhXHJcbn07XHJcblxyXG5mdW5jdGlvbiogcG9zdFByb2R1Y3QocGF5bG9hZCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBpc1Byb2R1Y3RBZGRlZCA9IHlpZWxkIGNhbGwoc2FnYUFkZFByb2R1Y3QsIHBheWxvYWQucHJvZHVjdCk7XHJcblx0XHR5aWVsZCBwdXQoYWRkUHJvZHVjdFN1Y2Nlc3MoaXNQcm9kdWN0QWRkZWQpKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVyciArIFwiYWRkaW5nIHByb2R1Y3Qgc2FnYVwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBnZXRNZXJjaGFudFByb2R1Y3QocGF5bG9hZCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBtZXJjaGFudFByb2R1Y3RzID0geWllbGQgY2FsbChzYWdhR2V0TWVyY2hhbnRQcm9kdWN0cywgcGF5bG9hZC5pZCk7XHJcblx0XHR5aWVsZCBwdXQoZ2V0TWVyY2hhbnRQcm9kdWN0U3VjY2VzcyhtZXJjaGFudFByb2R1Y3RzKSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyciArIFwiZ2V0dGluZyBtZXJjaGFudCBwcm9kdWN0IHNhZ2FcIik7XHJcblx0XHQvLyBhbGVydChlcnIgKyBcImdldHRpbmcgbWVyY2hhbnQgcHJvZHVjdCBzYWdhXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlBST0RVQ1RfUE9TVCwgcG9zdFByb2R1Y3QpXSk7XHJcblx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuTUVSQ0hBTlRfUFJPRFVDVF9HRVQsIGdldE1lcmNoYW50UHJvZHVjdCldKTtcclxuXHQvLyB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5QUk9EVUNUX0RFTEVURSwgZGVsZXRlUFJPRFVDVCldKTtcclxuXHQvLyB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5MT0dPVVQsIGxvZ091dFNhZ2EpXSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==