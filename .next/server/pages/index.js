(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_date-fns_esm_compareAsc_index_js","components_avatar_js-components_date-formater_js-components_layout_js-lib_api_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NZWtraS1ibG9nLy4vY29tcG9uZW50cy9oZXJvLXBvc3QuanMiLCJ3ZWJwYWNrOi8vTWVra2ktYmxvZy8uL2NvbXBvbmVudHMvaW50cm8uanMiLCJ3ZWJwYWNrOi8vTWVra2ktYmxvZy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL01la2tpLWJsb2cvZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vTWVra2ktYmxvZy9leHRlcm5hbCBcImRhdGUtZm5zXCIiLCJ3ZWJwYWNrOi8vTWVra2ktYmxvZy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vTWVra2ktYmxvZy9leHRlcm5hbCBcImdyYXktbWF0dGVyXCIiLCJ3ZWJwYWNrOi8vTWVra2ktYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9NZWtraS1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL01la2tpLWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9NZWtraS1ibG9nL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL01la2tpLWJsb2cvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL01la2tpLWJsb2cvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL01la2tpLWJsb2cvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJIZXJvUG9zdCIsInRpdGxlIiwiZGF0ZSIsImV4Y2VycHQiLCJhdXRob3IiLCJzbHVnIiwiSW50cm8iLCJzb3J0UG9zdHMiLCJwb3N0cyIsInNvcnQiLCJhIiwiYiIsImNvbXBhcmVEZXNjIiwicGFyc2VJU08iLCJJbmRleCIsImFsbFBvc3RzIiwibWFwIiwicG9zdCIsImluZGV4IiwiZ2V0U3RhdGljUHJvcHMiLCJnZXRBbGxQb3N0cyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxDQUFrQjtBQUMvQkMsT0FEK0I7QUFFL0JDLE1BRitCO0FBRy9CQyxTQUgrQjtBQUkvQkMsUUFKK0I7QUFLL0JDO0FBTCtCLENBQWxCLEVBTVo7QUFDRCxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGdFQUFmO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsMkNBQWQ7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUFNLGNBQUUsRUFBRyxVQUFTQSxJQUFLLEVBQXpCO0FBQTRCLGdCQUFJLEVBQUMsZUFBakM7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUMsaUJBQWI7QUFBQSx3QkFBZ0NKO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU1FO0FBQUssbUJBQVMsRUFBQyxvQ0FBZjtBQUFBLGlDQUNFLDhEQUFDLDhEQUFEO0FBQWMsc0JBQVUsRUFBRUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JjLFNBQVNJLEtBQVQsR0FBaUI7QUFDOUIsc0JBQ0U7QUFBUyxhQUFTLEVBQUMsZ0ZBQW5CO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsdUVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUssZUFBUyxFQUFDLHVEQUFmO0FBQUEsOEJBQ0U7QUFB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Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tcG9uZW50cy9hdmF0YXInXHJcbmltcG9ydCBEYXRlRm9ybWF0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlLWZvcm1hdGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvUG9zdCh7XHJcbiAgdGl0bGUsXHJcbiAgZGF0ZSxcclxuICBleGNlcnB0LFxyXG4gIGF1dGhvcixcclxuICBzbHVnLFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTIgbWQ6Y29sLWdhcC0xNiBsZzpjb2wtZ2FwLTggbWItNiBtZDptYi04XCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0xIHRleHQtYmFzZSBsZzp0ZXh0LWJhc2UgbGVhZGluZy10aWdodFwiPlxyXG4gICAgICAgICAgICA8TGluayBhcz17YC9wb3N0cy8ke3NsdWd9YH0gaHJlZj1cIi9wb3N0cy9bc2x1Z11cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmVcIj57dGl0bGV9PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IG1kOm1iLTAgdGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgIDxEYXRlRm9ybWF0ZXIgZGF0ZVN0cmluZz17ZGF0ZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50cm8oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXgtY29sIG1kOmZsZXgtcm93IGZsZXggaXRlbXMtY2VudGVyIG1kOmp1c3RpZnktYmV0d2VlbiBtdC0xNiBtYi0xNiBtZDptYi0xMlwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgbWQ6dGV4dC02eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0ZXIgbGVhZGluZy10aWdodCBtZDpwci04XCI+XHJcbiAgICAgICAgTWVra2lcclxuICAgICAgPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBmbGV4LW5vLXdyYXAgZGl2aWRlLXggbXQtNFwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCJtYWlsdG86bWVra2lAbGl2ZS5jblwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgbXgtMlwiIHJvbGU9XCJpbWdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICA8dGl0bGU+R21haWwgaWNvbjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjQgNC41djE1YzAgLjg1LS42NSAxLjUtMS41IDEuNUgyMVY3LjM4N2wtOSA2LjQ2My05LTYuNDYzVjIxSDEuNUMuNjQ5IDIxIDAgMjAuMzUgMCAxOS41di0xNWMwLS40MjUuMTYyLS44LjQzMS0xLjA2OEMuNyAzLjE2IDEuMDc2IDMgMS41IDNIMmwxMCA3LjI1TDIyIDNoLjVjLjQyNSAwIC44LjE2MiAxLjA2OS40MzIuMjcuMjY4LjQzMS42NDMuNDMxIDEuMDY4elwiIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9NZWtraWlpXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBteC0yXCIgcm9sZT1cImltZ1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgIDx0aXRsZT5HaXRIdWIgaWNvbjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgLjI5N2MtNi42MyAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDMgMy40MzggOS44IDguMjA1IDExLjM4NS42LjExMy44Mi0uMjU4LjgyLS41NzcgMC0uMjg1LS4wMS0xLjA0LS4wMTUtMi4wNC0zLjMzOC43MjQtNC4wNDItMS42MS00LjA0Mi0xLjYxQzQuNDIyIDE4LjA3IDMuNjMzIDE3LjcgMy42MzMgMTcuN2MtMS4wODctLjc0NC4wODQtLjcyOS4wODQtLjcyOSAxLjIwNS4wODQgMS44MzggMS4yMzYgMS44MzggMS4yMzYgMS4wNyAxLjgzNSAyLjgwOSAxLjMwNSAzLjQ5NS45OTguMTA4LS43NzYuNDE3LTEuMzA1Ljc2LTEuNjA1LTIuNjY1LS4zLTUuNDY2LTEuMzMyLTUuNDY2LTUuOTMgMC0xLjMxLjQ2NS0yLjM4IDEuMjM1LTMuMjItLjEzNS0uMzAzLS41NC0xLjUyMy4xMDUtMy4xNzYgMCAwIDEuMDA1LS4zMjIgMy4zIDEuMjMuOTYtLjI2NyAxLjk4LS4zOTkgMy0uNDA1IDEuMDIuMDA2IDIuMDQuMTM4IDMgLjQwNSAyLjI4LTEuNTUyIDMuMjg1LTEuMjMgMy4yODUtMS4yMy42NDUgMS42NTMuMjQgMi44NzMuMTIgMy4xNzYuNzY1Ljg0IDEuMjMgMS45MSAxLjIzIDMuMjIgMCA0LjYxLTIuODA1IDUuNjI1LTUuNDc1IDUuOTIuNDIuMzYuODEgMS4wOTYuODEgMi4yMiAwIDEuNjA2LS4wMTUgMi44OTYtLjAxNSAzLjI4NiAwIC4zMTUuMjEuNjkuODI1LjU3QzIwLjU2NSAyMi4wOTIgMjQgMTcuNTkyIDI0IDEyLjI5N2MwLTYuNjI3LTUuMzczLTEyLTEyLTEyXCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXHJcbmltcG9ydCBIZXJvUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL2hlcm8tcG9zdCdcclxuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSAnLi4vbGliL2FwaSdcclxuaW1wb3J0IGNvbXBhcmVEZXNjIGZyb20gJ2RhdGUtZm5zL2NvbXBhcmVBc2MnXHJcbmltcG9ydCB7IHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnXHJcblxyXG5mdW5jdGlvbiBzb3J0UG9zdHMocG9zdHMpIHtcclxuICByZXR1cm4gcG9zdHMuc29ydCgoYSwgYikgPT4gY29tcGFyZURlc2MocGFyc2VJU08oYi5kYXRlKSwgcGFyc2VJU08oYS5kYXRlKSkpIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7IGFsbFBvc3RzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dCBwcmV2aWV3PVwiXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxJbnRybyAvPlxyXG4gICAgICAgICAge3NvcnRQb3N0cyhhbGxQb3N0cykubWFwKChwb3N0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8SGVyb1Bvc3RcclxuICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICBkYXRlPXtwb3N0LmRhdGV9XHJcbiAgICAgICAgICAgICAgYXV0aG9yPXtwb3N0LmF1dGhvcn1cclxuICAgICAgICAgICAgICBzbHVnPXtwb3N0LnNsdWd9XHJcbiAgICAgICAgICAgICAgZXhjZXJwdD17cG9zdC5leGNlcnB0fVxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIC8+IFxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgYWxsUG9zdHMgPSBnZXRBbGxQb3N0cyhbXHJcbiAgICAndGl0bGUnLFxyXG4gICAgJ2RhdGUnLFxyXG4gICAgJ3NsdWcnLFxyXG4gICAgJ2F1dGhvcicsXHJcbiAgICAnY292ZXJJbWFnZScsXHJcbiAgICAnZXhjZXJwdCcsXHJcbiAgXSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGFsbFBvc3RzIH0sXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JheS1tYXR0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=