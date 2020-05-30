webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ "./components/container.tsx");
/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/more-stories */ "./components/more-stories.tsx");
/* harmony import */ var _components_hero_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hero-post */ "./components/hero-post.tsx");
/* harmony import */ var _components_intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/intro */ "./components/intro.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/constants */ "./lib/constants.ts");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _this = undefined,
    _jsxFileName = "D:\\workspace_nextjs\\myblog-bynextjs\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Index = function Index(_ref) {
  _s();

  var allPosts = _ref.allPosts;
  var heroPost = allPosts[0];
  var morePosts = allPosts.slice(1);
  var cmsurl = "https://myblog-nextjs.microcms.io/api/v1/blog";
  /*    contents: {
      id: string,
      createdAt: string,
      updatedAt: string,
      title: string,
      excerpt: string,
      date: string,
      slug: string,
      blogtext: string,
    }[]
    */

  var fetcher = function fetcher() {
    return fetch(cmsurl, {
      method: "GET",
      headers: {
        "X-API-KEY": "c2bf30d3-1da2-45a3-8327-b992b9006af3"
      }
    }).then(function (res) {
      return res.json();
    });
  };

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_8__["default"])(cmsurl, fetcher),
      data = _useSWR.data,
      error = _useSWR.error;
  /*
  const fetcher = (
    url : string
  ) => fetch("https://api.github.com/users/facebook/repos").then(res => res.json());
  const {data, error} = useSWR("https://api.github.com/users/facebook/repos", fetcher)
  */


  if (error) return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, "error");
  if (!data) return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, "loading...");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, "Next.js Blog Example with ", _lib_constants__WEBPACK_IMPORTED_MODULE_7__["CMS_NAME"])), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(_components_intro__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }), heroPost && __jsx(_components_hero_post__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: heroPost.title,
    coverImage: heroPost.coverImage,
    date: heroPost.date,
    author: heroPost.author,
    slug: heroPost.slug,
    excerpt: heroPost.excerpt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }), morePosts.length > 0 && __jsx(_components_more_stories__WEBPACK_IMPORTED_MODULE_2__["default"], {
    posts: morePosts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 36
    }
  })), data.contents[0].slug));
};

_s(Index, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c = Index;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSW5kZXgiLCJhbGxQb3N0cyIsImhlcm9Qb3N0IiwibW9yZVBvc3RzIiwic2xpY2UiLCJjbXN1cmwiLCJmZXRjaGVyIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJ1c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJDTVNfTkFNRSIsInRpdGxlIiwiY292ZXJJbWFnZSIsImRhdGUiLCJhdXRob3IiLCJzbHVnIiwiZXhjZXJwdCIsImxlbmd0aCIsImNvbnRlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQU1BLElBQU1BLEtBQXNCLEdBQUcsU0FBekJBLEtBQXlCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQy9DLE1BQU1DLFFBQVEsR0FBR0QsUUFBUSxDQUFDLENBQUQsQ0FBekI7QUFDQSxNQUFNRSxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csS0FBVCxDQUFlLENBQWYsQ0FBbEI7QUFFQSxNQUFNQyxNQUFNLEdBQUcsK0NBQWY7QUFFQTs7Ozs7Ozs7Ozs7O0FBMkJBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsV0FDZEMsS0FBSyxDQUFDRixNQUFELEVBQVM7QUFDWkcsWUFBTSxFQUFFLEtBREk7QUFFWkMsYUFBTyxFQUFFO0FBQ1AscUJBQWE7QUFETjtBQUZHLEtBQVQsQ0FBTCxDQUtHQyxJQUxILENBS1EsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsS0FMUixDQURjO0FBQUEsR0FBaEI7O0FBakMrQyxnQkF5Q3ZCQyxtREFBTSxDQUFhUixNQUFiLEVBQXFCQyxPQUFyQixDQXpDaUI7QUFBQSxNQXlDdkNRLElBekN1QyxXQXlDdkNBLElBekN1QztBQUFBLE1BeUNqQ0MsS0F6Q2lDLFdBeUNqQ0EsS0F6Q2lDO0FBMkMvQzs7Ozs7Ozs7QUFNQSxNQUFJQSxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDWCxNQUFJLENBQUNELElBQUwsRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFFWCxTQUNFLG1FQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBQWtDRSx1REFBbEMsQ0FERixDQURGLEVBSUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFR2QsUUFBUSxJQUNQLE1BQUMsNkRBQUQ7QUFDRSxTQUFLLEVBQUVBLFFBQVEsQ0FBQ2UsS0FEbEI7QUFFRSxjQUFVLEVBQUVmLFFBQVEsQ0FBQ2dCLFVBRnZCO0FBR0UsUUFBSSxFQUFFaEIsUUFBUSxDQUFDaUIsSUFIakI7QUFJRSxVQUFNLEVBQUVqQixRQUFRLENBQUNrQixNQUpuQjtBQUtFLFFBQUksRUFBRWxCLFFBQVEsQ0FBQ21CLElBTGpCO0FBTUUsV0FBTyxFQUFFbkIsUUFBUSxDQUFDb0IsT0FOcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBWUduQixTQUFTLENBQUNvQixNQUFWLEdBQW1CLENBQW5CLElBQXdCLE1BQUMsZ0VBQUQ7QUFBYSxTQUFLLEVBQUVwQixTQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWjNCLENBSkYsRUFrQkdXLElBQUksQ0FBQ1UsUUFBTCxDQUFjLENBQWQsRUFBaUJILElBbEJwQixDQURGLENBREY7QUF3QkQsQ0E1RUQ7O0dBQU1yQixLO1VBeUNvQmEsMkM7OztLQXpDcEJiLEs7O0FBOEVTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMDBkYTYyODExMmI0OTZlM2E0MzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGFpbmVyXCI7XG5pbXBvcnQgTW9yZVN0b3JpZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9yZS1zdG9yaWVzXCI7XG5pbXBvcnQgSGVyb1Bvc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVyby1wb3N0XCI7XG5pbXBvcnQgSW50cm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvaW50cm9cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBDTVNfTkFNRSB9IGZyb20gXCIuLi9saWIvY29uc3RhbnRzXCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi4vdHlwZXMvcG9zdFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFsbFBvc3RzOiBQb3N0W107XG59O1xuXG5jb25zdCBJbmRleDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgYWxsUG9zdHMgfSkgPT4ge1xuICBjb25zdCBoZXJvUG9zdCA9IGFsbFBvc3RzWzBdO1xuICBjb25zdCBtb3JlUG9zdHMgPSBhbGxQb3N0cy5zbGljZSgxKTtcblxuICBjb25zdCBjbXN1cmwgPSBcImh0dHBzOi8vbXlibG9nLW5leHRqcy5taWNyb2Ntcy5pby9hcGkvdjEvYmxvZ1wiO1xuXG4gIC8qICAgIGNvbnRlbnRzOiB7XG4gICAgICBpZDogc3RyaW5nLFxuICAgICAgY3JlYXRlZEF0OiBzdHJpbmcsXG4gICAgICB1cGRhdGVkQXQ6IHN0cmluZyxcbiAgICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgICBleGNlcnB0OiBzdHJpbmcsXG4gICAgICBkYXRlOiBzdHJpbmcsXG4gICAgICBzbHVnOiBzdHJpbmcsXG4gICAgICBibG9ndGV4dDogc3RyaW5nLFxuICAgIH1bXVxuICAgICovXG4gIHR5cGUgUmVzdWx0ID0ge1xuICAgIGNvbnRlbnRzOiB7XG4gICAgICBpZDogc3RyaW5nO1xuICAgICAgY3JlYXRlZEF0OiBzdHJpbmc7XG4gICAgICB1cGRhdGVkQXQ6IHN0cmluZztcbiAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICBleGNlcnB0OiBzdHJpbmc7XG4gICAgICBkYXRlOiBzdHJpbmc7XG4gICAgICBzbHVnOiBzdHJpbmc7XG4gICAgICBibG9ndGV4dDogc3RyaW5nO1xuICAgIH1bXTtcbiAgICB0b3RhbENvdW50OiBzdHJpbmc7XG4gICAgb2Zmc2V0OiBzdHJpbmc7XG4gICAgbGltaXQ6IHN0cmluZztcbiAgfTtcblxuICBjb25zdCBmZXRjaGVyID0gKCkgPT5cbiAgICBmZXRjaChjbXN1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJYLUFQSS1LRVlcIjogXCJjMmJmMzBkMy0xZGEyLTQ1YTMtODMyNy1iOTkyYjkwMDZhZjNcIixcbiAgICAgIH0sXG4gICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1I8UmVzdWx0LCB7fT4oY21zdXJsLCBmZXRjaGVyKTtcblxuICAvKlxuICBjb25zdCBmZXRjaGVyID0gKFxuICAgIHVybCA6IHN0cmluZ1xuICApID0+IGZldGNoKFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9mYWNlYm9vay9yZXBvc1wiKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbiAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZmFjZWJvb2svcmVwb3NcIiwgZmV0Y2hlcilcbiovXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZXJyb3I8L2Rpdj47XG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+TmV4dC5qcyBCbG9nIEV4YW1wbGUgd2l0aCB7Q01TX05BTUV9PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxJbnRybyAvPlxuICAgICAgICAgIHtoZXJvUG9zdCAmJiAoXG4gICAgICAgICAgICA8SGVyb1Bvc3RcbiAgICAgICAgICAgICAgdGl0bGU9e2hlcm9Qb3N0LnRpdGxlfVxuICAgICAgICAgICAgICBjb3ZlckltYWdlPXtoZXJvUG9zdC5jb3ZlckltYWdlfVxuICAgICAgICAgICAgICBkYXRlPXtoZXJvUG9zdC5kYXRlfVxuICAgICAgICAgICAgICBhdXRob3I9e2hlcm9Qb3N0LmF1dGhvcn1cbiAgICAgICAgICAgICAgc2x1Zz17aGVyb1Bvc3Quc2x1Z31cbiAgICAgICAgICAgICAgZXhjZXJwdD17aGVyb1Bvc3QuZXhjZXJwdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7bW9yZVBvc3RzLmxlbmd0aCA+IDAgJiYgPE1vcmVTdG9yaWVzIHBvc3RzPXttb3JlUG9zdHN9IC8+fVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAge2RhdGEuY29udGVudHNbMF0uc2x1Z31cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWxsUG9zdHMgPSBnZXRBbGxQb3N0cyhbXG4gICAgXCJ0aXRsZVwiLFxuICAgIFwiZGF0ZVwiLFxuICAgIFwic2x1Z1wiLFxuICAgIFwiYXV0aG9yXCIsXG4gICAgXCJjb3ZlckltYWdlXCIsXG4gICAgXCJleGNlcnB0XCIsXG4gIF0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYWxsUG9zdHMgfSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9