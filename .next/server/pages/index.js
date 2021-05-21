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

var _jsxFileName = "D:\\\u4E2A\u4EBA\\blog-site\\components\\alert.js";


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

var _jsxFileName = "D:\\\u4E2A\u4EBA\\blog-site\\components\\avatar.js";
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

var _jsxFileName = "D:\\\u4E2A\u4EBA\\blog-site\\components\\container.js";
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

var _jsxFileName = "D:\\\u4E2A\u4EBA\\blog-site\\components\\date-formater.js";

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

var _jsxFileName = "D:\\\u4E2A\u4EBA\\blog-site\\components\\footer.js";

function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    className: "",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "w-full",
        src: "/assets/me/home.jpeg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "py-2 flex flex-col lg:flex-row items-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          rel: "license",
          href: "http://creativecommons.org/licenses/by-nc/4.0/",
          children: "CC BY-NC 4.0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
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

var _jsxFileName = "D:\\\u4E2A\u4EBA\\blog-site\\components\\hero-post.js";



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

var _jsxFileName = "D:\\\u4E2A\u4EBA\\blog-site\\components\\intro.js";
function Intro() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8",
      children: "Blog."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-row items-center flex-no-wrap divide-x mt-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "mailto:Mekki@live.cn",
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
            lineNumber: 13,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            d: "M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
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
            lineNumber: 19,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
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


var _jsxFileName = "D:\\\u4E2A\u4EBA\\blog-site\\components\\layout.js";



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

var _jsxFileName = "D:\\\u4E2A\u4EBA\\blog-site\\components\\meta.js";

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


var _jsxFileName = "D:\\\u4E2A\u4EBA\\blog-site\\pages\\index.js";








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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXV1eS1ibG9nLy4vY29tcG9uZW50cy9hbGVydC5qcyIsIndlYnBhY2s6Ly9saXV1eS1ibG9nLy4vY29tcG9uZW50cy9hdmF0YXIuanMiLCJ3ZWJwYWNrOi8vbGl1dXktYmxvZy8uL2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL2xpdXV5LWJsb2cvLi9jb21wb25lbnRzL2RhdGUtZm9ybWF0ZXIuanMiLCJ3ZWJwYWNrOi8vbGl1dXktYmxvZy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2xpdXV5LWJsb2cvLi9jb21wb25lbnRzL2hlcm8tcG9zdC5qcyIsIndlYnBhY2s6Ly9saXV1eS1ibG9nLy4vY29tcG9uZW50cy9pbnRyby5qcyIsIndlYnBhY2s6Ly9saXV1eS1ibG9nLy4vY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbGl1dXktYmxvZy8uL2NvbXBvbmVudHMvbWV0YS5qcyIsIndlYnBhY2s6Ly9saXV1eS1ibG9nLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9saXV1eS1ibG9nLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGl1dXktYmxvZy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly9saXV1eS1ibG9nL2V4dGVybmFsIFwiZGF0ZS1mbnNcIiIsIndlYnBhY2s6Ly9saXV1eS1ibG9nL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9saXV1eS1ibG9nL2V4dGVybmFsIFwiZ3JheS1tYXR0ZXJcIiIsIndlYnBhY2s6Ly9saXV1eS1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2xpdXV5LWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbGl1dXktYmxvZy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2xpdXV5LWJsb2cvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vbGl1dXktYmxvZy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbGl1dXktYmxvZy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbGl1dXktYmxvZy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2xpdXV5LWJsb2cvaWdub3JlZHxEOlxc5Liq5Lq6XFxibG9nLXNpdGVcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJBbGVydCIsInByZXZpZXciLCJjbiIsIkF2YXRhciIsIm5hbWUiLCJwaWN0dXJlIiwiQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJEYXRlRm9ybWF0ZXIiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsInBhcnNlSVNPIiwiZm9ybWF0IiwiRm9vdGVyIiwiSGVyb1Bvc3QiLCJ0aXRsZSIsImV4Y2VycHQiLCJhdXRob3IiLCJzbHVnIiwiSW50cm8iLCJMYXlvdXQiLCJNZXRhIiwiX19odG1sIiwicG9zdHNEaXJlY3RvcnkiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImdldFBvc3RTbHVncyIsImZzIiwiZ2V0UG9zdEJ5U2x1ZyIsImZpZWxkcyIsInJlYWxTbHVnIiwicmVwbGFjZSIsImZ1bGxQYXRoIiwiZmlsZUNvbnRlbnRzIiwiZGF0YSIsImNvbnRlbnQiLCJtYXR0ZXIiLCJpdGVtcyIsImZvckVhY2giLCJmaWVsZCIsImdldEFsbFBvc3RzIiwic2x1Z3MiLCJtYXAiLCJzb3J0UG9zdHMiLCJwb3N0cyIsInNvcnQiLCJhIiwiYiIsImNvbXBhcmVEZXNjIiwiSW5kZXgiLCJhbGxQb3N0cyIsInBvc3QiLCJpbmRleCIsImdldFN0YXRpY1Byb3BzIiwicHJvcHMiXSwibWFwcGlu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QUFBO0FBREYsbUJBREY7QUFtQkQ7QUFFTSxlQUFlQyxjQUFmLEdBQWdDO0FBQ3JDLFFBQU1ILFFBQVEsR0FBR1YscURBQVcsQ0FBQyxDQUMzQixPQUQyQixFQUUzQixNQUYyQixFQUczQixNQUgyQixFQUkzQixRQUoyQixFQUszQixZQUwyQixFQU0zQixTQU4yQixDQUFELENBQTVCO0FBU0EsU0FBTztBQUNMYyxTQUFLLEVBQUU7QUFBRUo7QUFBRjtBQURGLEdBQVA7QUFHRCxDOzs7Ozs7Ozs7OztBQy9DRCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsZXJ0KHsgcHJldmlldyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbignYm9yZGVyLWInLCB7XHJcbiAgICAgICAgJ2JnLWFjY2VudC03IGJvcmRlci1hY2NlbnQtNyB0ZXh0LXdoaXRlJzogcHJldmlldyxcclxuICAgICAgICAnYmctYWNjZW50LTEgYm9yZGVyLWFjY2VudC0yJzogIXByZXZpZXcsXHJcbiAgICAgIH0pfVxyXG4gICAgPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdmF0YXIoeyBuYW1lLCBwaWN0dXJlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICB7cGljdHVyZSAmJiA8aW1nIHNyYz17cGljdHVyZX0gY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQtZnVsbCBtci00XCIgYWx0PXtuYW1lfSAvPiB9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj57bmFtZX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNSBsZzpweC00OFwiPntjaGlsZHJlbn08L2Rpdj5cclxufVxyXG4iLCJpbXBvcnQgeyBwYXJzZUlTTywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlRm9ybWF0ZXIoeyBkYXRlU3RyaW5nIH0pIHtcclxuICBjb25zdCBkYXRlID0gcGFyc2VJU08oZGF0ZVN0cmluZylcclxuICByZXR1cm4gPHRpbWUgZGF0ZVRpbWU9e2RhdGVTdHJpbmd9Pntmb3JtYXQoZGF0ZSwgJ01NL2RkL3l5eXknKX08L3RpbWU+XHJcbn1cclxuIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9jb250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctZnVsbFwiIHNyYz1cIi9hc3NldHMvbWUvaG9tZS5qcGVnXCI+PC9pbWc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8YSByZWw9XCJsaWNlbnNlXCIgaHJlZj1cImh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LW5jLzQuMC9cIj5cclxuICAgICAgICAgICAgQ0MgQlktTkMgNC4wIFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZm9vdGVyPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbXBvbmVudHMvYXZhdGFyJ1xyXG5pbXBvcnQgRGF0ZUZvcm1hdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZS1mb3JtYXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVyb1Bvc3Qoe1xyXG4gIHRpdGxlLFxyXG4gIGRhdGUsXHJcbiAgZXhjZXJwdCxcclxuICBhdXRob3IsXHJcbiAgc2x1ZyxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpncmlkIG1kOmdyaWQtY29scy0yIG1kOmNvbC1nYXAtMTYgbGc6Y29sLWdhcC04IG1iLTYgbWQ6bWItOFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMSB0ZXh0LWJhc2UgbGc6dGV4dC1iYXNlIGxlYWRpbmctdGlnaHRcIj5cclxuICAgICAgICAgICAgPExpbmsgYXM9e2AvcG9zdHMvJHtzbHVnfWB9IGhyZWY9XCIvcG9zdHMvW3NsdWddXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+e3RpdGxlfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBtZDptYi0wIHRleHQteHMgdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICA8RGF0ZUZvcm1hdGVyIGRhdGVTdHJpbmc9e2RhdGV9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4LWNvbCBtZDpmbGV4LXJvdyBmbGV4IGl0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LWJldHdlZW4gbXQtMTYgbWItMTYgbWQ6bWItMTJcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIG1kOnRleHQtOHhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodGVyIGxlYWRpbmctdGlnaHQgbWQ6cHItOFwiPlxyXG4gICAgICAgIEJsb2cuXHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZmxleC1uby13cmFwIGRpdmlkZS14IG10LTRcIj5cclxuICAgICAgICB7LyogPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1kOnRleHQtbGVmdCB0ZXh0LXNtIHB4LTJcIj7miJE8L2g0PlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQgdGV4dC1zbSBweC0yXCI+5YiY5a6HPC9oND5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0IHRleHQtc20gcHgtMlwiPk1la2tpPC9oND4gKi99XHJcbiAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpNZWtraUBsaXZlLmNuXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBteC0yXCIgcm9sZT1cImltZ1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgIDx0aXRsZT5HbWFpbCBpY29uPC90aXRsZT5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0yNCA0LjV2MTVjMCAuODUtLjY1IDEuNS0xLjUgMS41SDIxVjcuMzg3bC05IDYuNDYzLTktNi40NjNWMjFIMS41Qy42NDkgMjEgMCAyMC4zNSAwIDE5LjV2LTE1YzAtLjQyNS4xNjItLjguNDMxLTEuMDY4Qy43IDMuMTYgMS4wNzYgMyAxLjUgM0gybDEwIDcuMjVMMjIgM2guNWMuNDI1IDAgLjguMTYyIDEuMDY5LjQzMi4yNy4yNjguNDMxLjY0My40MzEgMS4wNjh6XCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL01la2tpaWlcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy00IG14LTJcIiByb2xlPVwiaW1nXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgPHRpdGxlPkdpdEh1YiBpY29uPC90aXRsZT5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAuMjk3Yy02LjYzIDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMyAzLjQzOCA5LjggOC4yMDUgMTEuMzg1LjYuMTEzLjgyLS4yNTguODItLjU3NyAwLS4yODUtLjAxLTEuMDQtLjAxNS0yLjA0LTMuMzM4LjcyNC00LjA0Mi0xLjYxLTQuMDQyLTEuNjFDNC40MjIgMTguMDcgMy42MzMgMTcuNyAzLjYzMyAxNy43Yy0xLjA4Ny0uNzQ0LjA4NC0uNzI5LjA4NC0uNzI5IDEuMjA1LjA4NCAxLjgzOCAxLjIzNiAxLjgzOCAxLjIzNiAxLjA3IDEuODM1IDIuODA5IDEuMzA1IDMuNDk1Ljk5OC4xMDgtLjc3Ni40MTctMS4zMDUuNzYtMS42MDUtMi42NjUtLjMtNS40NjYtMS4zMzItNS40NjYtNS45MyAwLTEuMzEuNDY1LTIuMzggMS4yMzUtMy4yMi0uMTM1LS4zMDMtLjU0LTEuNTIzLjEwNS0zLjE3NiAwIDAgMS4wMDUtLjMyMiAzLjMgMS4yMy45Ni0uMjY3IDEuOTgtLjM5OSAzLS40MDUgMS4wMi4wMDYgMi4wNC4xMzggMyAuNDA1IDIuMjgtMS41NTIgMy4yODUtMS4yMyAzLjI4NS0xLjIzLjY0NSAxLjY1My4yNCAyLjg3My4xMiAzLjE3Ni43NjUuODQgMS4yMyAxLjkxIDEuMjMgMy4yMiAwIDQuNjEtMi44MDUgNS42MjUtNS40NzUgNS45Mi40Mi4zNi44MSAxLjA5Ni44MSAyLjIyIDAgMS42MDYtLjAxNSAyLjg5Ni0uMDE1IDMuMjg2IDAgLjMxNS4yMS42OS44MjUuNTdDMjAuNTY1IDIyLjA5MiAyNCAxNy41OTIgMjQgMTIuMjk3YzAtNi42MjctNS4zNzMtMTItMTItMTJcIiAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IEFsZXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvYWxlcnQnXHJcbmltcG9ydCBNZXRhIGZyb20gJy4uL2NvbXBvbmVudHMvbWV0YSdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3RlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IHByZXZpZXcsIGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1ldGEgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW5cIj5cclxuICAgICAgICA8QWxlcnQgcHJldmlldz17cHJldmlld30gLz5cclxuICAgICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1ldGEoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+TWVra2k8L3RpdGxlPlxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxyXG4gICAgICAgIHNpemVzPVwiMTgweDE4MFwiXHJcbiAgICAgICAgaHJlZj1cIi9mYXZpY29uL2FwcGxlLXRvdWNoLWljb24ucG5nXCJcclxuICAgICAgLz5cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJpY29uXCJcclxuICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcclxuICAgICAgICBzaXplcz1cIjMyeDMyXCJcclxuICAgICAgICBocmVmPVwiL2Zhdmljb24vZmF2aWNvbi0zMngzMi5wbmdcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cImljb25cIlxyXG4gICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxyXG4gICAgICAgIHNpemVzPVwiMTZ4MTZcIlxyXG4gICAgICAgIGhyZWY9XCIvZmF2aWNvbi9mYXZpY29uLTE2eDE2LnBuZ1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9mYXZpY29uL3NpdGUud2VibWFuaWZlc3RcIiAvPlxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cIm1hc2staWNvblwiXHJcbiAgICAgICAgaHJlZj1cIi9mYXZpY29uL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiXHJcbiAgICAgICAgY29sb3I9XCIjMDAwMDAwXCJcclxuICAgICAgLz5cclxuICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjMDAwMDAwXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tY29uZmlnXCIgY29udGVudD1cIi9mYXZpY29uL2Jyb3dzZXJjb25maWcueG1sXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDBcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiB0eXBlPVwiYXBwbGljYXRpb24vcnNzK3htbFwiIGhyZWY9XCIvZmVlZC54bWxcIiAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY29udGVudD1cIk1la2tpJ3MgYmxvZyBtYWlubHkgZm9jdXMgb24gZnJvbnRlbmQuIE1la2tpIOeahOWNmuWuouOAglwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1VQS0xNjU4Mjg1OTktMVwiPjwvc2NyaXB0PlxyXG4gICAgICA8c2NyaXB0IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBfX2h0bWw6IGBcclxuICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4gICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxyXG4gICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcclxuICBcclxuICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICdVQS0xNjU4Mjg1OTktMScpO1xyXG4gICAgICAgIGB9XHJcbiAgICAgIH0+PC9zY3JpcHQ+XHJcbiAgICA8L0hlYWQ+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBmcyBmcm9tICdmcydcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInXHJcblxyXG5jb25zdCBwb3N0c0RpcmVjdG9yeSA9IGpvaW4ocHJvY2Vzcy5jd2QoKSwgJ19wb3N0cycpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdFNsdWdzKCkge1xyXG4gIHJldHVybiBmcy5yZWFkZGlyU3luYyhwb3N0c0RpcmVjdG9yeSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RCeVNsdWcoc2x1ZywgZmllbGRzID0gW10pIHtcclxuICBjb25zdCByZWFsU2x1ZyA9IHNsdWcucmVwbGFjZSgvXFwubWQkLywgJycpXHJcbiAgY29uc3QgZnVsbFBhdGggPSBqb2luKHBvc3RzRGlyZWN0b3J5LCBgJHtyZWFsU2x1Z30ubWRgKVxyXG4gIGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhmdWxsUGF0aCwgJ3V0ZjgnKVxyXG4gIGNvbnN0IHsgZGF0YSwgY29udGVudCB9ID0gbWF0dGVyKGZpbGVDb250ZW50cylcclxuXHJcbiAgY29uc3QgaXRlbXMgPSB7fVxyXG5cclxuICAvLyBFbnN1cmUgb25seSB0aGUgbWluaW1hbCBuZWVkZWQgZGF0YSBpcyBleHBvc2VkXHJcbiAgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgaWYgKGZpZWxkID09PSAnc2x1ZycpIHtcclxuICAgICAgaXRlbXNbZmllbGRdID0gcmVhbFNsdWdcclxuICAgIH1cclxuICAgIGlmIChmaWVsZCA9PT0gJ2NvbnRlbnQnKSB7XHJcbiAgICAgIGl0ZW1zW2ZpZWxkXSA9IGNvbnRlbnRcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YVtmaWVsZF0pIHtcclxuICAgICAgaXRlbXNbZmllbGRdID0gZGF0YVtmaWVsZF1cclxuICAgIH1cclxuICB9KVxyXG5cclxuICByZXR1cm4gaXRlbXNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFBvc3RzKGZpZWxkcyA9IFtdKSB7XHJcbiAgY29uc3Qgc2x1Z3MgPSBnZXRQb3N0U2x1Z3MoKVxyXG4gIHJldHVybiBzbHVncy5tYXAoc2x1ZyA9PiBnZXRQb3N0QnlTbHVnKHNsdWcsIGZpZWxkcykpXHJcbn1cclxuIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcclxuaW1wb3J0IEhlcm9Qb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvaGVyby1wb3N0J1xyXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tICcuLi9saWIvYXBpJ1xyXG5pbXBvcnQgY29tcGFyZURlc2MgZnJvbSAnZGF0ZS1mbnMvY29tcGFyZUFzYydcclxuaW1wb3J0IHsgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucydcclxuXHJcbmZ1bmN0aW9uIHNvcnRQb3N0cyhwb3N0cykge1xyXG4gIHJldHVybiBwb3N0cy5zb3J0KChhLCBiKSA9PiBjb21wYXJlRGVzYyhwYXJzZUlTTyhiLmRhdGUpLCBwYXJzZUlTTyhhLmRhdGUpKSkgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHsgYWxsUG9zdHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGF5b3V0IHByZXZpZXc9XCJcIj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEludHJvIC8+XHJcbiAgICAgICAgICB7c29ydFBvc3RzKGFsbFBvc3RzKS5tYXAoKHBvc3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxIZXJvUG9zdFxyXG4gICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgIGRhdGU9e3Bvc3QuZGF0ZX1cclxuICAgICAgICAgICAgICBhdXRob3I9e3Bvc3QuYXV0aG9yfVxyXG4gICAgICAgICAgICAgIHNsdWc9e3Bvc3Quc2x1Z31cclxuICAgICAgICAgICAgICBleGNlcnB0PXtwb3N0LmV4Y2VycHR9XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBhbGxQb3N0cyA9IGdldEFsbFBvc3RzKFtcclxuICAgICd0aXRsZScsXHJcbiAgICAnZGF0ZScsXHJcbiAgICAnc2x1ZycsXHJcbiAgICAnYXV0aG9yJyxcclxuICAgICdjb3ZlckltYWdlJyxcclxuICAgICdleGNlcnB0JyxcclxuICBdKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgYWxsUG9zdHMgfSxcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmF5LW1hdHRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==