webpackHotUpdate_N_E("pages/products/create-product",{

/***/ "./pages/products/create-product.jsx":
/*!*******************************************!*\
  !*** ./pages/products/create-product.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/layouts/ContainerDefault */ "./components/layouts/ContainerDefault.jsx");
/* harmony import */ var _components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/shared/headers/HeaderDashboard */ "./components/shared/headers/HeaderDashboard.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_app_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/store/app/action */ "./store/app/action.js");
/* harmony import */ var _store_product_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/store/product/action */ "./store/product/action.js");


var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\pages\\products\\create-product.jsx",
    _this = undefined,
    _s = $RefreshSig$();









var CreateProductPage = function CreateProductPage() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.category;
  }),
      category = _useSelector.category,
      cateGetLoading = _useSelector.cateGetLoading;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_store_app_action__WEBPACK_IMPORTED_MODULE_5__["toggleDrawerMenu"])(false));
  }, []);
  var categories;

  if (!cateGetLoading) {
    categories = category.map(function (cate, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: cate.id,
        children: [" ", cate.name]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, _this);
    });
  }

  var submitProduct = function submitProduct(e) {
    e.preventDefault();
    console.log("product submitted");
    var categoryy = e.target.category.value;
    console.log(catego);
    var product = {
      name: e.target.product.value,
      description: e.target.description.value,
      category: ["1"],
      price: e.target.price.value,
      features: {
        width: e.target.width.value,
        height: e.target.height.value,
        color: e.target.color.value,
        weigth: e.target.weight.value
      },
      images: {
        main: e.target.image.value
      },
      merchant_id: "1"
    };
    dispatch(Object(_store_product_action__WEBPACK_IMPORTED_MODULE_6__["addProduct"])(product));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Create new product",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Create Product",
      description: "Martfury Create New Product "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "ps-new-item",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: "ps-form ps-form--new-product",
        onSubmit: submitProduct,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "ps-form__content",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
                className: "ps-block--form-box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figcaption", {
                  children: "General"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "ps-block__content",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      children: ["Product Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 65,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 12
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "Enter product name...",
                      name: "product"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 67,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      children: ["Product Description", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 32
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 12
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                      className: "form-control",
                      rows: "6",
                      name: "description"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      children: ["Category", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 21
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 12
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                      className: "form-control",
                      name: "category",
                      multiple: true,
                      children: !cateGetLoading && categories
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      children: ["Price", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 97,
                        columnNumber: 18
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 12
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "number",
                      placeholder: "Price of Product",
                      name: "price"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      children: ["Width", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 109,
                        columnNumber: 18
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 12
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "Width",
                      name: "width"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      children: ["Height", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 121,
                        columnNumber: 19
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 120,
                      columnNumber: 12
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "Height",
                      name: "height"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 123,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      children: ["Color", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 133,
                        columnNumber: 18
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 132,
                      columnNumber: 12
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "Color",
                      name: "color"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 135,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      children: ["Weight", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 145,
                        columnNumber: 19
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 12
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "Weight",
                      name: "weight"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
                className: "ps-block--form-box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figcaption", {
                  children: "Product Images"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "ps-block__content",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      children: "Product Thumbnail"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 220,
                      columnNumber: 12
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "form-group--nest",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "form-control mb-1",
                        type: "text",
                        placeholder: "",
                        name: "image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 222,
                        columnNumber: 13
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        className: "ps-btn ps-btn--sm",
                        children: "Choose"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 228,
                        columnNumber: 13
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 219,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      children: "Product Gallery"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 232,
                      columnNumber: 12
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "form-group--nest",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "form-control mb-1",
                        type: "text",
                        placeholder: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 234,
                        columnNumber: 13
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        className: "ps-btn ps-btn--sm",
                        children: "Choose"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 239,
                        columnNumber: 13
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 233,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-group form-group--nest",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      className: "form-control mb-1",
                      type: "text",
                      placeholder: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 243,
                      columnNumber: 12
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      className: "ps-btn ps-btn--sm",
                      children: "Choose"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 248,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 242,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      children: "Video (optional)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 251,
                      columnNumber: 12
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      className: "form-control",
                      type: "text",
                      placeholder: "Enter video URL"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 252,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 250,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "ps-form__bottom",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "ps-btn ps-btn--black",
            href: "products.html",
            children: "Back"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "ps-btn",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 3
  }, _this);
};

_s(CreateProductPage, "U5Rm7PHyWNM59kkzV2BZFfFQ86s=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = CreateProductPage;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(function (state) {
  return state.app;
})(CreateProductPage));

var _c;

$RefreshReg$(_c, "CreateProductPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvY3JlYXRlLXByb2R1Y3QuanN4Il0sIm5hbWVzIjpbIkNyZWF0ZVByb2R1Y3RQYWdlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjYXRlZ29yeSIsImNhdGVHZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwidG9nZ2xlRHJhd2VyTWVudSIsImNhdGVnb3JpZXMiLCJtYXAiLCJjYXRlIiwiaW5kZXgiLCJpZCIsIm5hbWUiLCJzdWJtaXRQcm9kdWN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImNhdGVnb3J5eSIsInRhcmdldCIsInZhbHVlIiwiY2F0ZWdvIiwicHJvZHVjdCIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJmZWF0dXJlcyIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJ3ZWlndGgiLCJ3ZWlnaHQiLCJpbWFnZXMiLCJtYWluIiwiaW1hZ2UiLCJtZXJjaGFudF9pZCIsImFkZFByb2R1Y3QiLCJjb25uZWN0IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFBOztBQUMvQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUQrQixxQkFFTUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxRQUFqQjtBQUFBLEdBQUQsQ0FGakI7QUFBQSxNQUV2QkEsUUFGdUIsZ0JBRXZCQSxRQUZ1QjtBQUFBLE1BRWJDLGNBRmEsZ0JBRWJBLGNBRmE7O0FBRy9CQyx5REFBUyxDQUFDLFlBQU07QUFDZk4sWUFBUSxDQUFDTywwRUFBZ0IsQ0FBQyxLQUFELENBQWpCLENBQVI7QUFDQSxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBS0EsTUFBSUMsVUFBSjs7QUFFQSxNQUFHLENBQUNILGNBQUosRUFBbUI7QUFDbEJHLGNBQVUsR0FBR0osUUFBUSxDQUFDSyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWU7QUFDeEMsMEJBQU87QUFBb0IsYUFBSyxFQUFFRCxJQUFJLENBQUNFLEVBQWhDO0FBQUEsd0JBQXNDRixJQUFJLENBQUNHLElBQTNDO0FBQUEsU0FBYUYsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDQSxLQUZZLENBQWI7QUFHQTs7QUFFRCxNQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBTztBQUM1QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0EsUUFBTUMsU0FBUyxHQUFHSixDQUFDLENBQUNLLE1BQUYsQ0FBU2hCLFFBQVQsQ0FBa0JpQixLQUFwQztBQUNBSixXQUFPLENBQUNDLEdBQVIsQ0FBWUksTUFBWjtBQUNBLFFBQU1DLE9BQU8sR0FBRztBQUNmVixVQUFJLEVBQUVFLENBQUMsQ0FBQ0ssTUFBRixDQUFTRyxPQUFULENBQWlCRixLQURSO0FBRWZHLGlCQUFXLEVBQUVULENBQUMsQ0FBQ0ssTUFBRixDQUFTSSxXQUFULENBQXFCSCxLQUZuQjtBQUdmakIsY0FBUSxFQUFFLENBQUMsR0FBRCxDQUhLO0FBSWZxQixXQUFLLEVBQUVWLENBQUMsQ0FBQ0ssTUFBRixDQUFTSyxLQUFULENBQWVKLEtBSlA7QUFLZkssY0FBUSxFQUFFO0FBQ1RDLGFBQUssRUFBRVosQ0FBQyxDQUFDSyxNQUFGLENBQVNPLEtBQVQsQ0FBZU4sS0FEYjtBQUVUTyxjQUFNLEVBQUViLENBQUMsQ0FBQ0ssTUFBRixDQUFTUSxNQUFULENBQWdCUCxLQUZmO0FBR1RRLGFBQUssRUFBRWQsQ0FBQyxDQUFDSyxNQUFGLENBQVNTLEtBQVQsQ0FBZVIsS0FIYjtBQUlUUyxjQUFNLEVBQUVmLENBQUMsQ0FBQ0ssTUFBRixDQUFTVyxNQUFULENBQWdCVjtBQUpmLE9BTEs7QUFXZlcsWUFBTSxFQUFFO0FBQ1BDLFlBQUksRUFBRWxCLENBQUMsQ0FBQ0ssTUFBRixDQUFTYyxLQUFULENBQWViO0FBRGQsT0FYTztBQWNmYyxpQkFBVyxFQUFFO0FBZEUsS0FBaEI7QUFnQkFuQyxZQUFRLENBQUNvQyx3RUFBVSxDQUFDYixPQUFELENBQVgsQ0FBUjtBQUNBLEdBdEJEOztBQXdCQSxzQkFDQyxxRUFBQyw0RUFBRDtBQUFrQixTQUFLLEVBQUMsb0JBQXhCO0FBQUEsNEJBQ0MscUVBQUMsa0ZBQUQ7QUFDQyxXQUFLLEVBQUMsZ0JBRFA7QUFFQyxpQkFBVyxFQUFDO0FBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBS0M7QUFBUyxlQUFTLEVBQUMsYUFBbkI7QUFBQSw2QkFDQztBQUFNLGlCQUFTLEVBQUMsOEJBQWhCO0FBQStDLGdCQUFRLEVBQUVULGFBQXpEO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsaUNBQ0M7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxvQ0FDQztBQUFLLHVCQUFTLEVBQUMsOENBQWY7QUFBQSxxQ0FDQztBQUFRLHlCQUFTLEVBQUMsb0JBQWxCO0FBQUEsd0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQsZUFFQztBQUFLLDJCQUFTLEVBQUMsbUJBQWY7QUFBQSwwQ0FDQztBQUFLLDZCQUFTLEVBQUMsWUFBZjtBQUFBLDRDQUNDO0FBQUEsOERBQ2E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURELGVBSUM7QUFDQywrQkFBUyxFQUFDLGNBRFg7QUFFQywwQkFBSSxFQUFDLE1BRk47QUFHQyxpQ0FBVyxFQUFDLHVCQUhiO0FBSUMsMEJBQUksRUFBQztBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURELGVBYUM7QUFBSyw2QkFBUyxFQUFDLFlBQWY7QUFBQSw0Q0FDQztBQUFBLHFFQUNvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURELGVBSUM7QUFDQywrQkFBUyxFQUFDLGNBRFg7QUFFQywwQkFBSSxFQUFDLEdBRk47QUFHQywwQkFBSSxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBYkQsZUF3QkM7QUFBSyw2QkFBUyxFQUFDLFlBQWY7QUFBQSw0Q0FDQztBQUFBLDBEQUNTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERCxlQUlDO0FBQVEsK0JBQVMsRUFBQyxjQUFsQjtBQUFpQywwQkFBSSxFQUFDLFVBQXRDO0FBQWlELDhCQUFRLE1BQXpEO0FBQUEsZ0NBQ0UsQ0FBQ1QsY0FBRCxJQUFtQkc7QUFEckI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBeEJELGVBaUNDO0FBQUssNkJBQVMsRUFBQyxZQUFmO0FBQUEsNENBQ0M7QUFBQSx1REFDTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREQsZUFJQztBQUNDLCtCQUFTLEVBQUMsY0FEWDtBQUVDLDBCQUFJLEVBQUMsUUFGTjtBQUdDLGlDQUFXLEVBQUMsa0JBSGI7QUFJQywwQkFBSSxFQUFDO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBakNELGVBNkNDO0FBQUEsNENBQ0M7QUFBQSx1REFDTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREQsZUFJQztBQUNDLCtCQUFTLEVBQUMsY0FEWDtBQUVDLDBCQUFJLEVBQUMsTUFGTjtBQUdDLGlDQUFXLEVBQUMsT0FIYjtBQUlDLDBCQUFJLEVBQUM7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkE3Q0QsZUF5REM7QUFBSyw2QkFBUyxFQUFDLFlBQWY7QUFBQSw0Q0FDQztBQUFBLHdEQUNPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERCxlQUlDO0FBQ0MsK0JBQVMsRUFBQyxjQURYO0FBRUMsMEJBQUksRUFBQyxNQUZOO0FBR0MsaUNBQVcsRUFBQyxRQUhiO0FBSUMsMEJBQUksRUFBQztBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQXpERCxlQXFFQztBQUFLLDZCQUFTLEVBQUMsWUFBZjtBQUFBLDRDQUNDO0FBQUEsdURBQ007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURELGVBSUM7QUFDQywrQkFBUyxFQUFDLGNBRFg7QUFFQywwQkFBSSxFQUFDLE1BRk47QUFHQyxpQ0FBVyxFQUFDLE9BSGI7QUFJQywwQkFBSSxFQUFDO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBckVELGVBaUZDO0FBQUssNkJBQVMsRUFBQyxZQUFmO0FBQUEsNENBQ0M7QUFBQSx3REFDTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREQsZUFJQztBQUNDLCtCQUFTLEVBQUMsY0FEWDtBQUVDLDBCQUFJLEVBQUMsTUFGTjtBQUdDLGlDQUFXLEVBQUMsUUFIYjtBQUlDLDBCQUFJLEVBQUM7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFqRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUE2SkM7QUFBSyx1QkFBUyxFQUFDLDhDQUFmO0FBQUEscUNBQ0M7QUFBUSx5QkFBUyxFQUFDLG9CQUFsQjtBQUFBLHdDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURELGVBRUM7QUFBSywyQkFBUyxFQUFDLG1CQUFmO0FBQUEsMENBQ0M7QUFBSyw2QkFBUyxFQUFDLFlBQWY7QUFBQSw0Q0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERCxlQUVDO0FBQUssK0JBQVMsRUFBQyxrQkFBZjtBQUFBLDhDQUNDO0FBQ0MsaUNBQVMsRUFBQyxtQkFEWDtBQUVDLDRCQUFJLEVBQUMsTUFGTjtBQUdDLG1DQUFXLEVBQUMsRUFIYjtBQUlDLDRCQUFJLEVBQUM7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURELGVBT0M7QUFBUSxpQ0FBUyxFQUFDLG1CQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURELGVBYUM7QUFBSyw2QkFBUyxFQUFDLFlBQWY7QUFBQSw0Q0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERCxlQUVDO0FBQUssK0JBQVMsRUFBQyxrQkFBZjtBQUFBLDhDQUNDO0FBQ0MsaUNBQVMsRUFBQyxtQkFEWDtBQUVDLDRCQUFJLEVBQUMsTUFGTjtBQUdDLG1DQUFXLEVBQUM7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURELGVBTUM7QUFBUSxpQ0FBUyxFQUFDLG1CQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWJELGVBd0JDO0FBQUssNkJBQVMsRUFBQyw2QkFBZjtBQUFBLDRDQUNDO0FBQ0MsK0JBQVMsRUFBQyxtQkFEWDtBQUVDLDBCQUFJLEVBQUMsTUFGTjtBQUdDLGlDQUFXLEVBQUM7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURELGVBTUM7QUFBUSwrQkFBUyxFQUFDLG1CQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBeEJELGVBZ0NDO0FBQUssNkJBQVMsRUFBQyxZQUFmO0FBQUEsNENBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREQsZUFFQztBQUNDLCtCQUFTLEVBQUMsY0FEWDtBQUVDLDBCQUFJLEVBQUMsTUFGTjtBQUdDLGlDQUFXLEVBQUM7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFoQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBN0pEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUF1UkM7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsa0NBQ0M7QUFBRyxxQkFBUyxFQUFDLHNCQUFiO0FBQW9DLGdCQUFJLEVBQUMsZUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFLQztBQUFRLHFCQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUF5U0EsQ0FqVkQ7O0dBQU1ULGlCO1VBQ1lFLHVELEVBQ29CQyx1RDs7O0tBRmhDSCxpQjtBQWtWU3NDLDBIQUFPLENBQUMsVUFBQ2xDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNtQyxHQUFqQjtBQUFBLENBQUQsQ0FBUCxDQUE4QnZDLGlCQUE5QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzL2NyZWF0ZS1wcm9kdWN0LjFkZjU0YTFkMGM3N2JiM2I2NTgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGFpbmVyRGVmYXVsdCBmcm9tIFwifi9jb21wb25lbnRzL2xheW91dHMvQ29udGFpbmVyRGVmYXVsdFwiO1xuaW1wb3J0IEhlYWRlckRhc2hib2FyZCBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL0hlYWRlckRhc2hib2FyZFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHRvZ2dsZURyYXdlck1lbnUgfSBmcm9tIFwifi9zdG9yZS9hcHAvYWN0aW9uXCI7XG5pbXBvcnQgeyBhZGRQcm9kdWN0IH0gZnJvbSBcIn4vc3RvcmUvcHJvZHVjdC9hY3Rpb25cIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IENyZWF0ZVByb2R1Y3RQYWdlID0gKCkgPT4ge1xuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cdGNvbnN0IHsgY2F0ZWdvcnksIGNhdGVHZXRMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhdGVnb3J5KTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRkaXNwYXRjaCh0b2dnbGVEcmF3ZXJNZW51KGZhbHNlKSk7XG5cdH0sIFtdKTtcblxuXHRcblx0bGV0IGNhdGVnb3JpZXMgXG5cblx0aWYoIWNhdGVHZXRMb2FkaW5nKXtcblx0XHRjYXRlZ29yaWVzID0gY2F0ZWdvcnkubWFwKChjYXRlLCBpbmRleCk9Pntcblx0XHRcdHJldHVybiA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtjYXRlLmlkfT4ge2NhdGUubmFtZX08L29wdGlvbj5cblx0XHR9KVxuXHR9XG5cblx0Y29uc3Qgc3VibWl0UHJvZHVjdCA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnNvbGUubG9nKFwicHJvZHVjdCBzdWJtaXR0ZWRcIik7XG5cdFx0Y29uc3QgY2F0ZWdvcnl5ID0gZS50YXJnZXQuY2F0ZWdvcnkudmFsdWU7XG5cdFx0Y29uc29sZS5sb2coY2F0ZWdvKVxuXHRcdGNvbnN0IHByb2R1Y3QgPSB7XG5cdFx0XHRuYW1lOiBlLnRhcmdldC5wcm9kdWN0LnZhbHVlLFxuXHRcdFx0ZGVzY3JpcHRpb246IGUudGFyZ2V0LmRlc2NyaXB0aW9uLnZhbHVlLFxuXHRcdFx0Y2F0ZWdvcnk6IFtcIjFcIl0sXG5cdFx0XHRwcmljZTogZS50YXJnZXQucHJpY2UudmFsdWUsXG5cdFx0XHRmZWF0dXJlczoge1xuXHRcdFx0XHR3aWR0aDogZS50YXJnZXQud2lkdGgudmFsdWUsXG5cdFx0XHRcdGhlaWdodDogZS50YXJnZXQuaGVpZ2h0LnZhbHVlLFxuXHRcdFx0XHRjb2xvcjogZS50YXJnZXQuY29sb3IudmFsdWUsXG5cdFx0XHRcdHdlaWd0aDogZS50YXJnZXQud2VpZ2h0LnZhbHVlLFxuXHRcdFx0fSxcblx0XHRcdGltYWdlczoge1xuXHRcdFx0XHRtYWluOiBlLnRhcmdldC5pbWFnZS52YWx1ZSxcblx0XHRcdH0sXG5cdFx0XHRtZXJjaGFudF9pZDogXCIxXCIsXG5cdFx0fTtcblx0XHRkaXNwYXRjaChhZGRQcm9kdWN0KHByb2R1Y3QpKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxDb250YWluZXJEZWZhdWx0IHRpdGxlPVwiQ3JlYXRlIG5ldyBwcm9kdWN0XCI+XG5cdFx0XHQ8SGVhZGVyRGFzaGJvYXJkXG5cdFx0XHRcdHRpdGxlPVwiQ3JlYXRlIFByb2R1Y3RcIlxuXHRcdFx0XHRkZXNjcmlwdGlvbj1cIk1hcnRmdXJ5IENyZWF0ZSBOZXcgUHJvZHVjdCBcIlxuXHRcdFx0Lz5cblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInBzLW5ldy1pdGVtXCI+XG5cdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT1cInBzLWZvcm0gcHMtZm9ybS0tbmV3LXByb2R1Y3RcIiBvblN1Ym1pdD17c3VibWl0UHJvZHVjdH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcy1mb3JtX19jb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02IGNvbC1sZy02IGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwcy1ibG9jay0tZm9ybS1ib3hcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxmaWdjYXB0aW9uPkdlbmVyYWw8L2ZpZ2NhcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBzLWJsb2NrX19jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFByb2R1Y3QgTmFtZTxzdXA+Kjwvc3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbnRlciBwcm9kdWN0IG5hbWUuLi5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cInByb2R1Y3RcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFByb2R1Y3QgRGVzY3JpcHRpb248c3VwPio8L3N1cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI2XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvdGV4dGFyZWE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdENhdGVnb3J5PHN1cD4qPC9zdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJjYXRlZ29yeVwiIG11bHRpcGxlPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyFjYXRlR2V0TG9hZGluZyAmJiBjYXRlZ29yaWVzfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRQcmljZTxzdXA+Kjwvc3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlByaWNlIG9mIFByb2R1Y3RcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cInByaWNlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFdpZHRoPHN1cD4qPC9zdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIldpZHRoXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJ3aWR0aFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0SGVpZ2h0PHN1cD4qPC9zdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkhlaWdodFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiaGVpZ2h0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRDb2xvcjxzdXA+Kjwvc3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJDb2xvclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiY29sb3JcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFdlaWdodDxzdXA+Kjwvc3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJXZWlnaHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cIndlaWdodFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFJlZmVyZW5jZTxzdXA+Kjwvc3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbnRlciBwcm9kdWN0IFJlZmVyZW5jZS4uLlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+ICovfVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRQcm9kdWN0IFN1bW1hcnk8c3VwPio8L3N1cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI2XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW50ZXIgcHJvZHVjdCBkZXNjcmlwdGlvbi4uLlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvdGV4dGFyZWE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U2FsZSBQcmljZTxzdXA+Kjwvc3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNhbGUgUXVhbnRpdHk8c3VwPio8L3N1cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTb2xkIEl0ZW1zPHN1cD4qPC9zdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdHsvKiBQUk9EVUNUIElNQUdFICovfVxuXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTYgY29sLWxnLTYgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBzLWJsb2NrLS1mb3JtLWJveFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGZpZ2NhcHRpb24+UHJvZHVjdCBJbWFnZXM8L2ZpZ2NhcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBzLWJsb2NrX19jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5Qcm9kdWN0IFRodW1ibmFpbDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwLS1uZXN0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInBzLWJ0biBwcy1idG4tLXNtXCI+Q2hvb3NlPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+UHJvZHVjdCBHYWxsZXJ5PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAtLW5lc3RcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwicHMtYnRuIHBzLWJ0bi0tc21cIj5DaG9vc2U8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmb3JtLWdyb3VwLS1uZXN0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInBzLWJ0biBwcy1idG4tLXNtXCI+Q2hvb3NlPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+VmlkZW8gKG9wdGlvbmFsKTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbnRlciB2aWRlbyBVUkxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cblx0XHRcdFx0XHRcdFx0XHR7LyogUFJPRFVDVCBGRUFUVVJFUyAqL31cblx0XHRcdFx0XHRcdFx0XHR7LyogPGZpZ3VyZSBjbGFzc05hbWU9XCJwcy1ibG9jay0tZm9ybS1ib3hcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxmaWdjYXB0aW9uPlByb2R1Y3QgRmVhdHVyZXM8L2ZpZ2NhcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBzLWJsb2NrX19jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFdpZHRoPHN1cD4qPC9zdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0SGVpZ2h0PHN1cD4qPC9zdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Q29sb3I8c3VwPio8L3N1cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRXZWlnaHQ8c3VwPio8L3N1cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwcy1ibG9jay0tZm9ybS1ib3hcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxmaWdjYXB0aW9uPk1ldGE8L2ZpZ2NhcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBzLWJsb2NrX19jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmb3JtLWdyb3VwLS1zZWxlY3RcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+QnJhbmQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cF9fY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWU9XCJwcy1zZWxlY3RcIiB0aXRsZT1cIkJyYW5kXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxXCI+QnJhbmQgMTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMlwiPkJyYW5kIDI8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjNcIj5CcmFuZCAzPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCI0XCI+QnJhbmQgNDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+VGFnczwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT4gKi99XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcy1mb3JtX19ib3R0b21cIj5cblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cInBzLWJ0biBwcy1idG4tLWJsYWNrXCIgaHJlZj1cInByb2R1Y3RzLmh0bWxcIj5cblx0XHRcdFx0XHRcdFx0QmFja1xuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0ey8qIDxidXR0b24gY2xhc3NOYW1lPVwicHMtYnRuIHBzLWJ0bi0tZ3JheVwiPkNhbmNlbDwvYnV0dG9uPiAqL31cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwicHMtYnRuXCI+U3VibWl0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQ8L0NvbnRhaW5lckRlZmF1bHQ+XG5cdCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlLmFwcCkoQ3JlYXRlUHJvZHVjdFBhZ2UpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==