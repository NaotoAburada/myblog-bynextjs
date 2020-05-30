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
  var cmsurl = 'https://myblog-nextjs.microcms.io/api/v1/blog';

  var fetcher = function fetcher(contents, totalCount, offset, limit) {
    return fetch(cmsurl, {
      method: 'GET',
      headers: {
        'X-API-KEY': 'c2bf30d3-1da2-45a3-8327-b992b9006af3'
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
      lineNumber: 62,
      columnNumber: 21
    }
  }, "error");
  if (!data) return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, "loading...");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, "Next.js Blog Example with ", _lib_constants__WEBPACK_IMPORTED_MODULE_7__["CMS_NAME"])), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(_components_intro__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
      lineNumber: 74,
      columnNumber: 13
    }
  }), morePosts.length > 0 && __jsx(_components_more_stories__WEBPACK_IMPORTED_MODULE_2__["default"], {
    posts: morePosts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 36
    }
  })), data.constants.slug[0]));
};

_s(Index, "PLUSh3GLacfZJClYQJks7Deieck=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSW5kZXgiLCJhbGxQb3N0cyIsImhlcm9Qb3N0IiwibW9yZVBvc3RzIiwic2xpY2UiLCJjbXN1cmwiLCJmZXRjaGVyIiwiY29udGVudHMiLCJ0b3RhbENvdW50Iiwib2Zmc2V0IiwibGltaXQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsInVzZVNXUiIsImRhdGEiLCJlcnJvciIsIkNNU19OQU1FIiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZGF0ZSIsImF1dGhvciIsInNsdWciLCJleGNlcnB0IiwibGVuZ3RoIiwiY29uc3RhbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQU1BLElBQU1BLEtBQXNCLEdBQUcsU0FBekJBLEtBQXlCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQy9DLE1BQU1DLFFBQVEsR0FBR0QsUUFBUSxDQUFDLENBQUQsQ0FBekI7QUFDQSxNQUFNRSxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csS0FBVCxDQUFlLENBQWYsQ0FBbEI7QUFFQSxNQUFNQyxNQUFNLEdBQUcsK0NBQWY7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FZZkMsUUFaZSxFQXNCZkMsVUF0QmUsRUF1QmZDLE1BdkJlLEVBd0JmQyxLQXhCZTtBQUFBLFdBd0JHQyxLQUFLLENBQUNOLE1BQUQsRUFBUztBQUMzQk8sWUFBTSxFQUFFLEtBRG1CO0FBRTNCQyxhQUFPLEVBQUU7QUFDUCxxQkFBYTtBQUROO0FBRmtCLEtBQVQsQ0FBTCxDQUtaQyxJQUxZLENBS1AsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsS0FMSSxDQXhCSDtBQUFBLEdBQWhCOztBQU4rQyxnQkFxQ3pCQyxtREFBTSxDQUFDWixNQUFELEVBQVNDLE9BQVQsQ0FyQ21CO0FBQUEsTUFxQ3hDWSxJQXJDd0MsV0FxQ3hDQSxJQXJDd0M7QUFBQSxNQXFDbENDLEtBckNrQyxXQXFDbENBLEtBckNrQztBQXVDakQ7Ozs7Ozs7O0FBTUUsTUFBSUEsS0FBSixFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ1gsTUFBSSxDQUFDRCxJQUFMLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBRVgsU0FDRSxtRUFDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUFrQ0UsdURBQWxDLENBREYsQ0FERixFQUlFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUdsQixRQUFRLElBQ1AsTUFBQyw2REFBRDtBQUNFLFNBQUssRUFBRUEsUUFBUSxDQUFDbUIsS0FEbEI7QUFFRSxjQUFVLEVBQUVuQixRQUFRLENBQUNvQixVQUZ2QjtBQUdFLFFBQUksRUFBRXBCLFFBQVEsQ0FBQ3FCLElBSGpCO0FBSUUsVUFBTSxFQUFFckIsUUFBUSxDQUFDc0IsTUFKbkI7QUFLRSxRQUFJLEVBQUV0QixRQUFRLENBQUN1QixJQUxqQjtBQU1FLFdBQU8sRUFBRXZCLFFBQVEsQ0FBQ3dCLE9BTnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQVlHdkIsU0FBUyxDQUFDd0IsTUFBVixHQUFtQixDQUFuQixJQUF3QixNQUFDLGdFQUFEO0FBQWEsU0FBSyxFQUFFeEIsU0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVozQixDQUpGLEVBa0JHZSxJQUFJLENBQUNVLFNBQUwsQ0FBZUgsSUFBZixDQUFvQixDQUFwQixDQWxCSCxDQURGLENBREY7QUF3QkQsQ0F4RUQ7O0dBQU16QixLO1VBcUNrQmlCLDJDOzs7S0FyQ2xCakIsSzs7QUEwRVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5iYzJlYTk1MzI0MmM1YWRjMmZkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCBNb3JlU3RvcmllcyBmcm9tICcuLi9jb21wb25lbnRzL21vcmUtc3RvcmllcydcbmltcG9ydCBIZXJvUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL2hlcm8tcG9zdCdcbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSAnLi4vbGliL2FwaSdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IENNU19OQU1FIH0gZnJvbSAnLi4vbGliL2NvbnN0YW50cydcbmltcG9ydCBQb3N0IGZyb20gJy4uL3R5cGVzL3Bvc3QnXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxudHlwZSBQcm9wcyA9IHtcbiAgYWxsUG9zdHM6IFBvc3RbXVxufVxuXG5jb25zdCBJbmRleDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgYWxsUG9zdHMgfSkgPT4ge1xuICBjb25zdCBoZXJvUG9zdCA9IGFsbFBvc3RzWzBdXG4gIGNvbnN0IG1vcmVQb3N0cyA9IGFsbFBvc3RzLnNsaWNlKDEpXG5cbiAgY29uc3QgY21zdXJsID0gJ2h0dHBzOi8vbXlibG9nLW5leHRqcy5taWNyb2Ntcy5pby9hcGkvdjEvYmxvZydcblxuICBjb25zdCBmZXRjaGVyID0gKFxuLyogICAgY29udGVudHM6IHtcbiAgICAgIGlkOiBzdHJpbmcsXG4gICAgICBjcmVhdGVkQXQ6IHN0cmluZyxcbiAgICAgIHVwZGF0ZWRBdDogc3RyaW5nLFxuICAgICAgdGl0bGU6IHN0cmluZyxcbiAgICAgIGV4Y2VycHQ6IHN0cmluZyxcbiAgICAgIGRhdGU6IHN0cmluZyxcbiAgICAgIHNsdWc6IHN0cmluZyxcbiAgICAgIGJsb2d0ZXh0OiBzdHJpbmcsXG4gICAgfVtdXG4gICAgKi9cbiAgIGNvbnRlbnRzOiB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBjcmVhdGVkQXQ6IHN0cmluZyxcbiAgICB1cGRhdGVkQXQ6IHN0cmluZyxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGV4Y2VycHQ6IHN0cmluZyxcbiAgICBkYXRlOiBzdHJpbmcsXG4gICAgc2x1Zzogc3RyaW5nLFxuICAgIGJsb2d0ZXh0OiBzdHJpbmcsXG4gICB9LFxuICAgdG90YWxDb3VudDogc3RyaW5nLFxuICAgb2Zmc2V0IDogc3RyaW5nLFxuICAgbGltaXQ6IHN0cmluZykgPT4gZmV0Y2goY21zdXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnWC1BUEktS0VZJzogJ2MyYmYzMGQzLTFkYTItNDVhMy04MzI3LWI5OTJiOTAwNmFmMydcbiAgICAgICAgfVxuICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG5cbiAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihjbXN1cmwsIGZldGNoZXIpXG5cbi8qXG4gIGNvbnN0IGZldGNoZXIgPSAoXG4gICAgdXJsIDogc3RyaW5nXG4gICkgPT4gZmV0Y2goXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2ZhY2Vib29rL3JlcG9zXCIpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9mYWNlYm9vay9yZXBvc1wiLCBmZXRjaGVyKVxuKi9cbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5lcnJvcjwvZGl2PlxuICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+TmV4dC5qcyBCbG9nIEV4YW1wbGUgd2l0aCB7Q01TX05BTUV9PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxJbnRybyAvPlxuICAgICAgICAgIHtoZXJvUG9zdCAmJiAoXG4gICAgICAgICAgICA8SGVyb1Bvc3RcbiAgICAgICAgICAgICAgdGl0bGU9e2hlcm9Qb3N0LnRpdGxlfVxuICAgICAgICAgICAgICBjb3ZlckltYWdlPXtoZXJvUG9zdC5jb3ZlckltYWdlfVxuICAgICAgICAgICAgICBkYXRlPXtoZXJvUG9zdC5kYXRlfVxuICAgICAgICAgICAgICBhdXRob3I9e2hlcm9Qb3N0LmF1dGhvcn1cbiAgICAgICAgICAgICAgc2x1Zz17aGVyb1Bvc3Quc2x1Z31cbiAgICAgICAgICAgICAgZXhjZXJwdD17aGVyb1Bvc3QuZXhjZXJwdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7bW9yZVBvc3RzLmxlbmd0aCA+IDAgJiYgPE1vcmVTdG9yaWVzIHBvc3RzPXttb3JlUG9zdHN9IC8+fVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAge2RhdGEuY29uc3RhbnRzLnNsdWdbMF19XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbFBvc3RzID0gZ2V0QWxsUG9zdHMoW1xuICAgICd0aXRsZScsXG4gICAgJ2RhdGUnLFxuICAgICdzbHVnJyxcbiAgICAnYXV0aG9yJyxcbiAgICAnY292ZXJJbWFnZScsXG4gICAgJ2V4Y2VycHQnLFxuICBdKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYWxsUG9zdHMgfSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==