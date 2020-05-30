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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSW5kZXgiLCJhbGxQb3N0cyIsImhlcm9Qb3N0IiwibW9yZVBvc3RzIiwic2xpY2UiLCJjbXN1cmwiLCJmZXRjaGVyIiwiY29udGVudHMiLCJ0b3RhbENvdW50Iiwib2Zmc2V0IiwibGltaXQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsInVzZVNXUiIsImRhdGEiLCJlcnJvciIsIkNNU19OQU1FIiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZGF0ZSIsImF1dGhvciIsInNsdWciLCJleGNlcnB0IiwibGVuZ3RoIiwiY29uc3RhbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQU1BLElBQU1BLEtBQXNCLEdBQUcsU0FBekJBLEtBQXlCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQy9DLE1BQU1DLFFBQVEsR0FBR0QsUUFBUSxDQUFDLENBQUQsQ0FBekI7QUFDQSxNQUFNRSxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csS0FBVCxDQUFlLENBQWYsQ0FBbEI7QUFFQSxNQUFNQyxNQUFNLEdBQUcsK0NBQWY7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FZZkMsUUFaZSxFQXNCZkMsVUF0QmUsRUF1QmZDLE1BdkJlLEVBd0JmQyxLQXhCZTtBQUFBLFdBd0JHQyxLQUFLLENBQUNOLE1BQUQsRUFBUztBQUMzQk8sWUFBTSxFQUFFLEtBRG1CO0FBRTNCQyxhQUFPLEVBQUU7QUFDUCxxQkFBYTtBQUROO0FBRmtCLEtBQVQsQ0FBTCxDQUtaQyxJQUxZLENBS1AsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsS0FMSSxDQXhCSDtBQUFBLEdBQWhCOztBQU4rQyxnQkFxQ3pCQyxtREFBTSxDQUFDWixNQUFELEVBQVNDLE9BQVQsQ0FyQ21CO0FBQUEsTUFxQ3hDWSxJQXJDd0MsV0FxQ3hDQSxJQXJDd0M7QUFBQSxNQXFDbENDLEtBckNrQyxXQXFDbENBLEtBckNrQztBQXVDakQ7Ozs7Ozs7O0FBTUUsTUFBSUEsS0FBSixFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ1gsTUFBSSxDQUFDRCxJQUFMLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBRVgsU0FDRSxtRUFDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUFrQ0UsdURBQWxDLENBREYsQ0FERixFQUlFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUdsQixRQUFRLElBQ1AsTUFBQyw2REFBRDtBQUNFLFNBQUssRUFBRUEsUUFBUSxDQUFDbUIsS0FEbEI7QUFFRSxjQUFVLEVBQUVuQixRQUFRLENBQUNvQixVQUZ2QjtBQUdFLFFBQUksRUFBRXBCLFFBQVEsQ0FBQ3FCLElBSGpCO0FBSUUsVUFBTSxFQUFFckIsUUFBUSxDQUFDc0IsTUFKbkI7QUFLRSxRQUFJLEVBQUV0QixRQUFRLENBQUN1QixJQUxqQjtBQU1FLFdBQU8sRUFBRXZCLFFBQVEsQ0FBQ3dCLE9BTnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQVlHdkIsU0FBUyxDQUFDd0IsTUFBVixHQUFtQixDQUFuQixJQUF3QixNQUFDLGdFQUFEO0FBQWEsU0FBSyxFQUFFeEIsU0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVozQixDQUpGLEVBa0JHZSxJQUFJLENBQUNVLFNBQUwsQ0FBZUgsSUFBZixDQUFvQixDQUFwQixDQWxCSCxDQURGLENBREY7QUF3QkQsQ0F4RUQ7O0dBQU16QixLO1VBcUNrQmlCLDJDOzs7S0FyQ2xCakIsSzs7QUEwRVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lODM5YjRjZGRjMzAzMzhjODI1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCBNb3JlU3RvcmllcyBmcm9tICcuLi9jb21wb25lbnRzL21vcmUtc3RvcmllcydcbmltcG9ydCBIZXJvUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL2hlcm8tcG9zdCdcbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSAnLi4vbGliL2FwaSdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IENNU19OQU1FIH0gZnJvbSAnLi4vbGliL2NvbnN0YW50cydcbmltcG9ydCBQb3N0IGZyb20gJy4uL3R5cGVzL3Bvc3QnXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxudHlwZSBQcm9wcyA9IHtcbiAgYWxsUG9zdHM6IFBvc3RbXVxufVxuXG5jb25zdCBJbmRleDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgYWxsUG9zdHMgfSkgPT4ge1xuICBjb25zdCBoZXJvUG9zdCA9IGFsbFBvc3RzWzBdXG4gIGNvbnN0IG1vcmVQb3N0cyA9IGFsbFBvc3RzLnNsaWNlKDEpXG5cbiAgY29uc3QgY21zdXJsID0gJ2h0dHBzOi8vbXlibG9nLW5leHRqcy5taWNyb2Ntcy5pby9hcGkvdjEvYmxvZydcblxuICBjb25zdCBmZXRjaGVyID0gKFxuLyogICAgY29udGVudHM6IHtcbiAgICAgIGlkOiBzdHJpbmcsXG4gICAgICBjcmVhdGVkQXQ6IHN0cmluZyxcbiAgICAgIHVwZGF0ZWRBdDogc3RyaW5nLFxuICAgICAgdGl0bGU6IHN0cmluZyxcbiAgICAgIGV4Y2VycHQ6IHN0cmluZyxcbiAgICAgIGRhdGU6IHN0cmluZyxcbiAgICAgIHNsdWc6IHN0cmluZyxcbiAgICAgIGJsb2d0ZXh0OiBzdHJpbmcsXG4gICAgfVtdXG4gICAgKi9cbiAgIGNvbnRlbnRzOiBbe1xuICAgIGlkOiBzdHJpbmcsXG4gICAgY3JlYXRlZEF0OiBzdHJpbmcsXG4gICAgdXBkYXRlZEF0OiBzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBleGNlcnB0OiBzdHJpbmcsXG4gICAgZGF0ZTogc3RyaW5nLFxuICAgIHNsdWc6IHN0cmluZyxcbiAgICBibG9ndGV4dDogc3RyaW5nLFxuICAgfV0sXG4gICB0b3RhbENvdW50OiBzdHJpbmcsXG4gICBvZmZzZXQgOiBzdHJpbmcsXG4gICBsaW1pdDogc3RyaW5nKSA9PiBmZXRjaChjbXN1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdYLUFQSS1LRVknOiAnYzJiZjMwZDMtMWRhMi00NWEzLTgzMjctYjk5MmI5MDA2YWYzJ1xuICAgICAgICB9XG4gICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcblxuICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKGNtc3VybCwgZmV0Y2hlcilcblxuLypcbiAgY29uc3QgZmV0Y2hlciA9IChcbiAgICB1cmwgOiBzdHJpbmdcbiAgKSA9PiBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZmFjZWJvb2svcmVwb3NcIikudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG4gIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2ZhY2Vib29rL3JlcG9zXCIsIGZldGNoZXIpXG4qL1xuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmVycm9yPC9kaXY+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5OZXh0LmpzIEJsb2cgRXhhbXBsZSB3aXRoIHtDTVNfTkFNRX08L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEludHJvIC8+XG4gICAgICAgICAge2hlcm9Qb3N0ICYmIChcbiAgICAgICAgICAgIDxIZXJvUG9zdFxuICAgICAgICAgICAgICB0aXRsZT17aGVyb1Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgIGNvdmVySW1hZ2U9e2hlcm9Qb3N0LmNvdmVySW1hZ2V9XG4gICAgICAgICAgICAgIGRhdGU9e2hlcm9Qb3N0LmRhdGV9XG4gICAgICAgICAgICAgIGF1dGhvcj17aGVyb1Bvc3QuYXV0aG9yfVxuICAgICAgICAgICAgICBzbHVnPXtoZXJvUG9zdC5zbHVnfVxuICAgICAgICAgICAgICBleGNlcnB0PXtoZXJvUG9zdC5leGNlcnB0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHttb3JlUG9zdHMubGVuZ3RoID4gMCAmJiA8TW9yZVN0b3JpZXMgcG9zdHM9e21vcmVQb3N0c30gLz59XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICB7ZGF0YS5jb25zdGFudHMuc2x1Z1swXX1cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWxsUG9zdHMgPSBnZXRBbGxQb3N0cyhbXG4gICAgJ3RpdGxlJyxcbiAgICAnZGF0ZScsXG4gICAgJ3NsdWcnLFxuICAgICdhdXRob3InLFxuICAgICdjb3ZlckltYWdlJyxcbiAgICAnZXhjZXJwdCcsXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBhbGxQb3N0cyB9LFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9