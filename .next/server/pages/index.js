(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
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

/***/ "./components/hero-post.js":
/*!*********************************!*\
  !*** ./components/hero-post.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HeroPost; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/avatar */ "./components/avatar.js");
/* harmony import */ var _components_date_formater__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/date-formater */ "./components/date-formater.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\\u4E2A\u4EBA\\mekki-blog\\components\\hero-post.js";



function HeroPost({
  title,
  date,
  excerpt,
  author,
  slug
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-6 md:mb-8",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "mb-1 text-base lg:text-base leading-tight",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            as: `/posts/${slug}`,
            href: "/posts/[slug]",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "hover:underline",
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "mb-4 md:mb-0 text-xs text-gray-500",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_date_formater__WEBPACK_IMPORTED_MODULE_2__.default, {
            dateString: date
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/intro.js":
/*!*****************************!*\
  !*** ./components/intro.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Intro; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\\u4E2A\u4EBA\\mekki-blog\\components\\intro.js";
function Intro() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "text-6xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8",
      children: "Mekki"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-row items-center flex-no-wrap divide-x mt-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "mailto:mekki@live.cn",
        target: "_blank",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          className: "w-4 mx-2",
          role: "img",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
            children: "Gmail icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            d: "M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://github.com/Mekkiii",
        target: "_blank",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          className: "w-4 mx-2",
          role: "img",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
            children: "GitHub icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_hero_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hero-post */ "./components/hero-post.js");
/* harmony import */ var _components_intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro */ "./components/intro.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var date_fns_compareAsc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/compareAsc */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "D:\\\u4E2A\u4EBA\\mekki-blog\\pages\\index.js";








function sortPosts(posts) {
  return posts.sort((a, b) => (0,date_fns_compareAsc__WEBPACK_IMPORTED_MODULE_7__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.parseISO)(b.date), (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.parseISO)(a.date)));
}

function Index({
  allPosts
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_4__.default, {
      preview: "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_container__WEBPACK_IMPORTED_MODULE_1__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_intro__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this), sortPosts(allPosts).map((post, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero_post__WEBPACK_IMPORTED_MODULE_2__.default, {
          title: post.title,
          date: post.date,
          author: post.author,
          slug: post.slug,
          excerpt: post.excerpt
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
async function getStaticProps() {
  const allPosts = (0,_lib_api__WEBPACK_IMPORTED_MODULE_5__.getAllPosts)(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);
  return {
    props: {
      allPosts
    }
  };
}

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("classnames");;

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("date-fns");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("gray-matter");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

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

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_date-fns_esm_compareAsc_index_js-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NZWtraS1ibG9nLy4vY29tcG9uZW50cy9hbGVydC5qcyIsIndlYnBhY2s6Ly9NZWtraS1ibG9nLy4vY29tcG9uZW50cy9hdmF0YXIuanMiLCJ3ZWJwYWNrOi8vTWVra2ktYmxvZy8uL2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL01la2tpLWJsb2cvLi9jb21wb25lbnRzL2RhdGUtZm9ybWF0ZXIuanMiLCJ3ZWJwYWNrOi8vTWVra2ktYmxvZy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL01la2tpLWJsb2cvLi9jb21wb25lbnRzL2hlcm8tcG9zdC5qcyIsIndlYnBhY2s6Ly9NZWtraS1ibG9nLy4vY29tcG9uZW50cy9pbnRyby5qcyIsIndlYnBhY2s6Ly9NZWtraS1ibG9nLy4vY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vTWVra2ktYmxvZy8uL2NvbXBvbmVudHMvbWV0YS5qcyIsIndlYnBhY2s6Ly9NZWtraS1ibG9nLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9NZWtraS1ibG9nLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vTWVra2ktYmxvZy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly9NZWtraS1ibG9nL2V4dGVybmFsIFwiZGF0ZS1mbnNcIiIsIndlYnBhY2s6Ly9NZWtraS1ibG9nL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9NZWtraS1ibG9nL2V4dGVybmFsIFwiZ3JheS1tYXR0ZXJcIiIsIndlYnBhY2s6Ly9NZWtraS1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL01la2tpLWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vTWVra2ktYmxvZy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL01la2tpLWJsb2cvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vTWVra2ktYmxvZy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vTWVra2ktYmxvZy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vTWVra2ktYmxvZy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL01la2tpLWJsb2cvaWdub3JlZHxEOlxc5Liq5Lq6XFxtZWtraS1ibG9nXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQWxlcnQiLCJwcmV2aWV3IiwiY24iLCJBdmF0YXIiLCJuYW1lIiwicGljdHVyZSIsIkNvbnRhaW5lciIsImNoaWxkcmVuIiwiRGF0ZUZvcm1hdGVyIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJwYXJzZUlTTyIsImZvcm1hdCIsIkZvb3RlciIsIkhlcm9Qb3N0IiwidGl0bGUiLCJleGNlcnB0IiwiYXV0aG9yIiwic2x1ZyIsIkludHJvIiwiTGF5b3V0IiwiTWV0YSIsIl9faHRtbCIsInBvc3RzRGlyZWN0b3J5Iiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJnZXRQb3N0U2x1Z3MiLCJmcyIsImdldFBvc3RCeVNsdWciLCJmaWVsZHMiLCJyZWFsU2x1ZyIsInJlcGxhY2UiLCJmdWxsUGF0aCIsImZpbGVDb250ZW50cyIsImRhdGEiLCJjb250ZW50IiwibWF0dGVyIiwiaXRlbXMiLCJmb3JFYWNoIiwiZmllbGQiLCJnZXRBbGxQb3N0cyIsInNsdWdzIiwibWFwIiwic29ydFBvc3RzIiwicG9zdHMiLCJzb3J0IiwiYSIsImIiLCJjb21wYXJlRGVzYyIsIkluZGV4IiwiYWxsUG9zdHMiLCJwb3N0IiwiaW5kZXgiLCJnZXRTdGF0aWNQcm9wcyIsInByb3BzIl0sIm1hcHBp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QUMvQ0Qsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcidcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGVydCh7IHByZXZpZXcgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y24oJ2JvcmRlci1iJywge1xyXG4gICAgICAgICdiZy1hY2NlbnQtNyBib3JkZXItYWNjZW50LTcgdGV4dC13aGl0ZSc6IHByZXZpZXcsXHJcbiAgICAgICAgJ2JnLWFjY2VudC0xIGJvcmRlci1hY2NlbnQtMic6ICFwcmV2aWV3LFxyXG4gICAgICB9KX1cclxuICAgID5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXZhdGFyKHsgbmFtZSwgcGljdHVyZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAge3BpY3R1cmUgJiYgPGltZyBzcmM9e3BpY3R1cmV9IGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLWZ1bGwgbXItNFwiIGFsdD17bmFtZX0gLz4gfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+e25hbWV9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFpbmVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTUgbGc6cHgtNDhcIj57Y2hpbGRyZW59PC9kaXY+XHJcbn1cclxuIiwiaW1wb3J0IHsgcGFyc2VJU08sIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZUZvcm1hdGVyKHsgZGF0ZVN0cmluZyB9KSB7XHJcbiAgY29uc3QgZGF0ZSA9IHBhcnNlSVNPKGRhdGVTdHJpbmcpXHJcbiAgcmV0dXJuIDx0aW1lIGRhdGVUaW1lPXtkYXRlU3RyaW5nfT57Zm9ybWF0KGRhdGUsICdNTS9kZC95eXl5Jyl9PC90aW1lPlxyXG59XHJcbiIsImltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vY29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgey8qIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsXCIgc3JjPVwiL2Fzc2V0cy9tZS9ob21lLmpwZWdcIj48L2ltZz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxhIHJlbD1cImxpY2Vuc2VcIiBocmVmPVwiaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktbmMvNC4wL1wiPlxyXG4gICAgICAgICAgICBDQyBCWS1OQyA0LjAgXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZm9vdGVyPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbXBvbmVudHMvYXZhdGFyJ1xyXG5pbXBvcnQgRGF0ZUZvcm1hdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZS1mb3JtYXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVyb1Bvc3Qoe1xyXG4gIHRpdGxlLFxyXG4gIGRhdGUsXHJcbiAgZXhjZXJwdCxcclxuICBhdXRob3IsXHJcbiAgc2x1ZyxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpncmlkIG1kOmdyaWQtY29scy0yIG1kOmNvbC1nYXAtMTYgbGc6Y29sLWdhcC04IG1iLTYgbWQ6bWItOFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMSB0ZXh0LWJhc2UgbGc6dGV4dC1iYXNlIGxlYWRpbmctdGlnaHRcIj5cclxuICAgICAgICAgICAgPExpbmsgYXM9e2AvcG9zdHMvJHtzbHVnfWB9IGhyZWY9XCIvcG9zdHMvW3NsdWddXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+e3RpdGxlfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBtZDptYi0wIHRleHQteHMgdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICA8RGF0ZUZvcm1hdGVyIGRhdGVTdHJpbmc9e2RhdGV9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4LWNvbCBtZDpmbGV4LXJvdyBmbGV4IGl0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LWJldHdlZW4gbXQtMTYgbWItMTYgbWQ6bWItMTJcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIG1kOnRleHQtNnhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodGVyIGxlYWRpbmctdGlnaHQgbWQ6cHItOFwiPlxyXG4gICAgICAgIE1la2tpXHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZmxleC1uby13cmFwIGRpdmlkZS14IG10LTRcIj5cclxuICAgICAgICA8YSBocmVmPVwibWFpbHRvOm1la2tpQGxpdmUuY25cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy00IG14LTJcIiByb2xlPVwiaW1nXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgPHRpdGxlPkdtYWlsIGljb248L3RpdGxlPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTI0IDQuNXYxNWMwIC44NS0uNjUgMS41LTEuNSAxLjVIMjFWNy4zODdsLTkgNi40NjMtOS02LjQ2M1YyMUgxLjVDLjY0OSAyMSAwIDIwLjM1IDAgMTkuNXYtMTVjMC0uNDI1LjE2Mi0uOC40MzEtMS4wNjhDLjcgMy4xNiAxLjA3NiAzIDEuNSAzSDJsMTAgNy4yNUwyMiAzaC41Yy40MjUgMCAuOC4xNjIgMS4wNjkuNDMyLjI3LjI2OC40MzEuNjQzLjQzMSAxLjA2OHpcIiAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTWVra2lpaVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgbXgtMlwiIHJvbGU9XCJpbWdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICA8dGl0bGU+R2l0SHViIGljb248L3RpdGxlPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MUM0LjQyMiAxOC4wNyAzLjYzMyAxNy43IDMuNjMzIDE3LjdjLTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxNy0xLjMwNS43Ni0xLjYwNS0yLjY2NS0uMy01LjQ2Ni0xLjMzMi01LjQ2Ni01LjkzIDAtMS4zMS40NjUtMi4zOCAxLjIzNS0zLjIyLS4xMzUtLjMwMy0uNTQtMS41MjMuMTA1LTMuMTc2IDAgMCAxLjAwNS0uMzIyIDMuMyAxLjIzLjk2LS4yNjcgMS45OC0uMzk5IDMtLjQwNSAxLjAyLjAwNiAyLjA0LjEzOCAzIC40MDUgMi4yOC0xLjU1MiAzLjI4NS0xLjIzIDMuMjg1LTEuMjMuNjQ1IDEuNjUzLjI0IDIuODczLjEyIDMuMTc2Ljc2NS44NCAxLjIzIDEuOTEgMS4yMyAzLjIyIDAgNC42MS0yLjgwNSA1LjYyNS01LjQ3NSA1LjkyLjQyLjM2LjgxIDEuMDk2LjgxIDIuMjIgMCAxLjYwNi0uMDE1IDIuODk2LS4wMTUgMy4yODYgMCAuMzE1LjIxLjY5LjgyNS41N0MyMC41NjUgMjIuMDkyIDI0IDE3LjU5MiAyNCAxMi4yOTdjMC02LjYyNy01LjM3My0xMi0xMi0xMlwiIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgQWxlcnQgZnJvbSAnLi4vY29tcG9uZW50cy9hbGVydCdcclxuaW1wb3J0IE1ldGEgZnJvbSAnLi4vY29tcG9uZW50cy9tZXRhJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgcHJldmlldywgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TWV0YSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlblwiPlxyXG4gICAgICAgIDxBbGVydCBwcmV2aWV3PXtwcmV2aWV3fSAvPlxyXG4gICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWV0YSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5NZWtraTwvdGl0bGU+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXHJcbiAgICAgICAgc2l6ZXM9XCIxODB4MTgwXCJcclxuICAgICAgICBocmVmPVwiL2Zhdmljb24vYXBwbGUtdG91Y2gtaWNvbi5wbmdcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cImljb25cIlxyXG4gICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxyXG4gICAgICAgIHNpemVzPVwiMzJ4MzJcIlxyXG4gICAgICAgIGhyZWY9XCIvZmF2aWNvbi9mYXZpY29uLTMyeDMyLnBuZ1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwiaWNvblwiXHJcbiAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXHJcbiAgICAgICAgc2l6ZXM9XCIxNngxNlwiXHJcbiAgICAgICAgaHJlZj1cIi9mYXZpY29uL2Zhdmljb24tMTZ4MTYucG5nXCJcclxuICAgICAgLz5cclxuICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL2Zhdmljb24vc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwibWFzay1pY29uXCJcclxuICAgICAgICBocmVmPVwiL2Zhdmljb24vc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCJcclxuICAgICAgICBjb2xvcj1cIiMwMDAwMDBcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29uL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiMwMDAwMDBcIiAvPlxyXG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1jb25maWdcIiBjb250ZW50PVwiL2Zhdmljb24vYnJvd3NlcmNvbmZpZy54bWxcIiAvPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMFwiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIHR5cGU9XCJhcHBsaWNhdGlvbi9yc3MreG1sXCIgaHJlZj1cIi9mZWVkLnhtbFwiIC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICBjb250ZW50PVwiTWVra2kncyBibG9nIG1haW5seSBmb2N1cyBvbiBmcm9udGVuZC4gTWVra2kg55qE5Y2a5a6i44CCXCJcclxuICAgICAgLz5cclxuICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPVVBLTE2NTgyODU5OS0xXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIF9faHRtbDogYFxyXG4gICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XHJcbiAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xyXG4gIFxyXG4gICAgICAgICAgZ3RhZygnY29uZmlnJywgJ1VBLTE2NTgyODU5OS0xJyk7XHJcbiAgICAgICAgYH1cclxuICAgICAgfT48L3NjcmlwdD5cclxuICAgIDwvSGVhZD5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcclxuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcidcclxuXHJcbmNvbnN0IHBvc3RzRGlyZWN0b3J5ID0gam9pbihwcm9jZXNzLmN3ZCgpLCAnX3Bvc3RzJylcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3N0U2x1Z3MoKSB7XHJcbiAgcmV0dXJuIGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdEJ5U2x1ZyhzbHVnLCBmaWVsZHMgPSBbXSkge1xyXG4gIGNvbnN0IHJlYWxTbHVnID0gc2x1Zy5yZXBsYWNlKC9cXC5tZCQvLCAnJylcclxuICBjb25zdCBmdWxsUGF0aCA9IGpvaW4ocG9zdHNEaXJlY3RvcnksIGAke3JlYWxTbHVnfS5tZGApXHJcbiAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCAndXRmOCcpXHJcbiAgY29uc3QgeyBkYXRhLCBjb250ZW50IH0gPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKVxyXG5cclxuICBjb25zdCBpdGVtcyA9IHt9XHJcblxyXG4gIC8vIEVuc3VyZSBvbmx5IHRoZSBtaW5pbWFsIG5lZWRlZCBkYXRhIGlzIGV4cG9zZWRcclxuICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICBpZiAoZmllbGQgPT09ICdzbHVnJykge1xyXG4gICAgICBpdGVtc1tmaWVsZF0gPSByZWFsU2x1Z1xyXG4gICAgfVxyXG4gICAgaWYgKGZpZWxkID09PSAnY29udGVudCcpIHtcclxuICAgICAgaXRlbXNbZmllbGRdID0gY29udGVudFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhW2ZpZWxkXSkge1xyXG4gICAgICBpdGVtc1tmaWVsZF0gPSBkYXRhW2ZpZWxkXVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBpdGVtc1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUG9zdHMoZmllbGRzID0gW10pIHtcclxuICBjb25zdCBzbHVncyA9IGdldFBvc3RTbHVncygpXHJcbiAgcmV0dXJuIHNsdWdzLm1hcChzbHVnID0+IGdldFBvc3RCeVNsdWcoc2x1ZywgZmllbGRzKSlcclxufVxyXG4iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xyXG5pbXBvcnQgSGVyb1Bvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9oZXJvLXBvc3QnXHJcbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gJy4uL2xpYi9hcGknXHJcbmltcG9ydCBjb21wYXJlRGVzYyBmcm9tICdkYXRlLWZucy9jb21wYXJlQXNjJ1xyXG5pbXBvcnQgeyBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJ1xyXG5cclxuZnVuY3Rpb24gc29ydFBvc3RzKHBvc3RzKSB7XHJcbiAgcmV0dXJuIHBvc3RzLnNvcnQoKGEsIGIpID0+IGNvbXBhcmVEZXNjKHBhcnNlSVNPKGIuZGF0ZSksIHBhcnNlSVNPKGEuZGF0ZSkpKSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoeyBhbGxQb3N0cyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQgcHJldmlldz1cIlwiPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8SW50cm8gLz5cclxuICAgICAgICAgIHtzb3J0UG9zdHMoYWxsUG9zdHMpLm1hcCgocG9zdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPEhlcm9Qb3N0XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgZGF0ZT17cG9zdC5kYXRlfVxyXG4gICAgICAgICAgICAgIGF1dGhvcj17cG9zdC5hdXRob3J9XHJcbiAgICAgICAgICAgICAgc2x1Zz17cG9zdC5zbHVnfVxyXG4gICAgICAgICAgICAgIGV4Y2VycHQ9e3Bvc3QuZXhjZXJwdH1cclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAvPiBcclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IGFsbFBvc3RzID0gZ2V0QWxsUG9zdHMoW1xyXG4gICAgJ3RpdGxlJyxcclxuICAgICdkYXRlJyxcclxuICAgICdzbHVnJyxcclxuICAgICdhdXRob3InLFxyXG4gICAgJ2NvdmVySW1hZ2UnLFxyXG4gICAgJ2V4Y2VycHQnLFxyXG4gIF0pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBhbGxQb3N0cyB9LFxyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXktbWF0dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9