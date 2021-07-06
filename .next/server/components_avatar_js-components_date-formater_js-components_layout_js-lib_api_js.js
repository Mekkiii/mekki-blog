exports.id = "components_avatar_js-components_date-formater_js-components_layout_js-lib_api_js";
exports.ids = ["components_avatar_js-components_date-formater_js-components_layout_js-lib_api_js"];
exports.modules = {

/***/ "./components/alert.js":
/*!*****************************!*\
  !*** ./components/alert.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Alert; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ "./components/container.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\\u4E2A\u4EBA\\mekki-blog\\components\\alert.js";


function Alert({
  preview
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('border-b', {
      'bg-accent-7 border-accent-7 text-white': preview,
      'bg-accent-1 border-accent-2': !preview
    }),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/avatar.js":
/*!******************************!*\
  !*** ./components/avatar.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Avatar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\\u4E2A\u4EBA\\mekki-blog\\components\\avatar.js";
function Avatar({
  name,
  picture
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex items-center",
    children: [picture && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: picture,
      className: "w-12 h-12 rounded-full mr-4",
      alt: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 19
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-xl font-bold",
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/container.js":
/*!*********************************!*\
  !*** ./components/container.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\\u4E2A\u4EBA\\mekki-blog\\components\\container.js";
function Container({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container mx-auto px-5 lg:px-48",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./components/date-formater.js":
/*!*************************************!*\
  !*** ./components/date-formater.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DateFormater; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\\u4E2A\u4EBA\\mekki-blog\\components\\date-formater.js";

function DateFormater({
  dateString
}) {
  const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(dateString);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("time", {
    dateTime: dateString,
    children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, 'MM/dd/yyyy')
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ "./components/container.js");

var _jsxFileName = "D:\\\u4E2A\u4EBA\\mekki-blog\\components\\footer.js";

function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    className: "",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/alert */ "./components/alert.js");
/* harmony import */ var _components_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meta */ "./components/meta.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./components/footer.js");


var _jsxFileName = "D:\\\u4E2A\u4EBA\\mekki-blog\\components\\layout.js";



function Layout({
  preview,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meta__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "min-h-screen",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_alert__WEBPACK_IMPORTED_MODULE_1__.default, {
        preview: preview
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/meta.js":
/*!****************************!*\
  !*** ./components/meta.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Meta; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\\u4E2A\u4EBA\\mekki-blog\\components\\meta.js";

function Meta() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: "Mekki"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/favicon-16x16.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "manifest",
      href: "/favicon/site.webmanifest"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "mask-icon",
      href: "/favicon/safari-pinned-tab.svg",
      color: "#000000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "shortcut icon",
      href: "/favicon/favicon.ico"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "msapplication-TileColor",
      content: "#000000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "msapplication-config",
      content: "/favicon/browserconfig.xml"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "theme-color",
      content: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "alternate",
      type: "application/rss+xml",
      href: "/feed.xml"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "description",
      content: "Mekki's blog mainly focus on frontend. Mekki \u7684\u535A\u5BA2\u3002"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=UA-165828599-1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
      dangerouslySetInnerHTML: {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'UA-165828599-1');
        `
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPostSlugs": function() { return /* binding */ getPostSlugs; },
/* harmony export */   "getPostBySlug": function() { return /* binding */ getPostBySlug; },
/* harmony export */   "getAllPosts": function() { return /* binding */ getAllPosts; }
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



const postsDirectory = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), '_posts');
function getPostSlugs() {
  return fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
}
function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(postsDirectory, `${realSlug}.md`);
  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf8');
  const {
    data,
    content
  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
  const items = {}; // Ensure only the minimal needed data is exposed

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}
function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  return slugs.map(slug => getPostBySlug(slug, fields));
}

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NZWtraS1ibG9nLy4vY29tcG9uZW50cy9hbGVydC5qcyIsIndlYnBhY2s6Ly9NZWtraS1ibG9nLy4vY29tcG9uZW50cy9hdmF0YXIuanMiLCJ3ZWJwYWNrOi8vTWVra2ktYmxvZy8uL2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL01la2tpLWJsb2cvLi9jb21wb25lbnRzL2RhdGUtZm9ybWF0ZXIuanMiLCJ3ZWJwYWNrOi8vTWVra2ktYmxvZy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL01la2tpLWJsb2cvLi9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly9NZWtraS1ibG9nLy4vY29tcG9uZW50cy9tZXRhLmpzIiwid2VicGFjazovL01la2tpLWJsb2cvLi9saWIvYXBpLmpzIiwid2VicGFjazovL01la2tpLWJsb2cvaWdub3JlZHxEOlxc5Liq5Lq6XFxtZWtraS1ibG9nXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQWxlcnQiLCJwcmV2aWV3IiwiY24iLCJBdmF0YXIiLCJuYW1lIiwicGljdHVyZSIsIkNvbnRhaW5lciIsImNoaWxkcmVuIiwiRGF0ZUZvcm1hdGVyIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJwYXJzZUlTTyIsImZvcm1hdCIsIkZvb3RlciIsIkxheW91dCIsIk1ldGEiLCJfX2h0bWwiLCJwb3N0c0RpcmVjdG9yeSIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZ2V0UG9zdFNsdWdzIiwiZnMiLCJnZXRQb3N0QnlTbHVnIiwic2x1ZyIsImZpZWxkcyIsInJlYWxTbHVnIiwicmVwbGFjZSIsImZ1bGxQYXRoIiwiZmlsZUNvbnRlbnRzIiwiZGF0YSIsImNvbnRlbnQiLCJtYXR0ZXIiLCJpdGVtcyIsImZvckVhY2giLCJmaWVsZCIsImdldEFsbFBvc3RzIiwic2x1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S0FBRCxDQUFuQjtBQUNEO0FBQ0YsR0FYRDtBQWFBLFNBQU9GLEtBQVA7QUFDRDtBQUVNLFNBQVNHLFdBQVQsQ0FBcUJYLE1BQU0sR0FBRyxFQUE5QixFQUFrQztBQUN2QyxRQUFNWSxLQUFLLEdBQUdoQixZQUFZLEVBQTFCO0FBQ0EsU0FBT2dCLEtBQUssQ0FBQ0MsR0FBTixDQUFVZCxJQUFJLElBQUlELGFBQWEsQ0FBQ0MsSUFBRCxFQUFPQyxNQUFQLENBQS9CLENBQVA7QUFDRCxDOzs7Ozs7Ozs7O0FDdENELGUiLCJmaWxlIjoiY29tcG9uZW50c19hdmF0YXJfanMtY29tcG9uZW50c19kYXRlLWZvcm1hdGVyX2pzLWNvbXBvbmVudHNfbGF5b3V0X2pzLWxpYl9hcGlfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsZXJ0KHsgcHJldmlldyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbignYm9yZGVyLWInLCB7XHJcbiAgICAgICAgJ2JnLWFjY2VudC03IGJvcmRlci1hY2NlbnQtNyB0ZXh0LXdoaXRlJzogcHJldmlldyxcclxuICAgICAgICAnYmctYWNjZW50LTEgYm9yZGVyLWFjY2VudC0yJzogIXByZXZpZXcsXHJcbiAgICAgIH0pfVxyXG4gICAgPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdmF0YXIoeyBuYW1lLCBwaWN0dXJlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICB7cGljdHVyZSAmJiA8aW1nIHNyYz17cGljdHVyZX0gY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQtZnVsbCBtci00XCIgYWx0PXtuYW1lfSAvPiB9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj57bmFtZX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNSBsZzpweC00OFwiPntjaGlsZHJlbn08L2Rpdj5cclxufVxyXG4iLCJpbXBvcnQgeyBwYXJzZUlTTywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlRm9ybWF0ZXIoeyBkYXRlU3RyaW5nIH0pIHtcclxuICBjb25zdCBkYXRlID0gcGFyc2VJU08oZGF0ZVN0cmluZylcclxuICByZXR1cm4gPHRpbWUgZGF0ZVRpbWU9e2RhdGVTdHJpbmd9Pntmb3JtYXQoZGF0ZSwgJ01NL2RkL3l5eXknKX08L3RpbWU+XHJcbn1cclxuIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9jb250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICB7LyogPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBzcmM9XCIvYXNzZXRzL21lL2hvbWUuanBlZ1wiPjwvaW1nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGEgcmVsPVwibGljZW5zZVwiIGhyZWY9XCJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1uYy80LjAvXCI+XHJcbiAgICAgICAgICAgIENDIEJZLU5DIDQuMCBcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBBbGVydCBmcm9tICcuLi9jb21wb25lbnRzL2FsZXJ0J1xyXG5pbXBvcnQgTWV0YSBmcm9tICcuLi9jb21wb25lbnRzL21ldGEnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBwcmV2aWV3LCBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNZXRhIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuXCI+XHJcbiAgICAgICAgPEFsZXJ0IHByZXZpZXc9e3ByZXZpZXd9IC8+XHJcbiAgICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXRhKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPk1la2tpPC90aXRsZT5cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcclxuICAgICAgICBzaXplcz1cIjE4MHgxODBcIlxyXG4gICAgICAgIGhyZWY9XCIvZmF2aWNvbi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwiaWNvblwiXHJcbiAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXHJcbiAgICAgICAgc2l6ZXM9XCIzMngzMlwiXHJcbiAgICAgICAgaHJlZj1cIi9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nXCJcclxuICAgICAgLz5cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJpY29uXCJcclxuICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcclxuICAgICAgICBzaXplcz1cIjE2eDE2XCJcclxuICAgICAgICBocmVmPVwiL2Zhdmljb24vZmF2aWNvbi0xNngxNi5wbmdcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvZmF2aWNvbi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJtYXNrLWljb25cIlxyXG4gICAgICAgIGhyZWY9XCIvZmF2aWNvbi9zYWZhcmktcGlubmVkLXRhYi5zdmdcIlxyXG4gICAgICAgIGNvbG9yPVwiIzAwMDAwMFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24vZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiIzAwMDAwMFwiIC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLWNvbmZpZ1wiIGNvbnRlbnQ9XCIvZmF2aWNvbi9icm93c2VyY29uZmlnLnhtbFwiIC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwXCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgdHlwZT1cImFwcGxpY2F0aW9uL3Jzcyt4bWxcIiBocmVmPVwiL2ZlZWQueG1sXCIgLz5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9XCJNZWtraSdzIGJsb2cgbWFpbmx5IGZvY3VzIG9uIGZyb250ZW5kLiBNZWtraSDnmoTljZrlrqLjgIJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9VUEtMTY1ODI4NTk5LTFcIj48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcclxuICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cclxuICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XHJcbiAgXHJcbiAgICAgICAgICBndGFnKCdjb25maWcnLCAnVUEtMTY1ODI4NTk5LTEnKTtcclxuICAgICAgICBgfVxyXG4gICAgICB9Pjwvc2NyaXB0PlxyXG4gICAgPC9IZWFkPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgZnMgZnJvbSAnZnMnXHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJ1xyXG5cclxuY29uc3QgcG9zdHNEaXJlY3RvcnkgPSBqb2luKHByb2Nlc3MuY3dkKCksICdfcG9zdHMnKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RTbHVncygpIHtcclxuICByZXR1cm4gZnMucmVhZGRpclN5bmMocG9zdHNEaXJlY3RvcnkpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3N0QnlTbHVnKHNsdWcsIGZpZWxkcyA9IFtdKSB7XHJcbiAgY29uc3QgcmVhbFNsdWcgPSBzbHVnLnJlcGxhY2UoL1xcLm1kJC8sICcnKVxyXG4gIGNvbnN0IGZ1bGxQYXRoID0gam9pbihwb3N0c0RpcmVjdG9yeSwgYCR7cmVhbFNsdWd9Lm1kYClcclxuICBjb25zdCBmaWxlQ29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsICd1dGY4JylcclxuICBjb25zdCB7IGRhdGEsIGNvbnRlbnQgfSA9IG1hdHRlcihmaWxlQ29udGVudHMpXHJcblxyXG4gIGNvbnN0IGl0ZW1zID0ge31cclxuXHJcbiAgLy8gRW5zdXJlIG9ubHkgdGhlIG1pbmltYWwgbmVlZGVkIGRhdGEgaXMgZXhwb3NlZFxyXG4gIGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgIGlmIChmaWVsZCA9PT0gJ3NsdWcnKSB7XHJcbiAgICAgIGl0ZW1zW2ZpZWxkXSA9IHJlYWxTbHVnXHJcbiAgICB9XHJcbiAgICBpZiAoZmllbGQgPT09ICdjb250ZW50Jykge1xyXG4gICAgICBpdGVtc1tmaWVsZF0gPSBjb250ZW50XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGFbZmllbGRdKSB7XHJcbiAgICAgIGl0ZW1zW2ZpZWxkXSA9IGRhdGFbZmllbGRdXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIGl0ZW1zXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQb3N0cyhmaWVsZHMgPSBbXSkge1xyXG4gIGNvbnN0IHNsdWdzID0gZ2V0UG9zdFNsdWdzKClcclxuICByZXR1cm4gc2x1Z3MubWFwKHNsdWcgPT4gZ2V0UG9zdEJ5U2x1ZyhzbHVnLCBmaWVsZHMpKVxyXG59XHJcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=