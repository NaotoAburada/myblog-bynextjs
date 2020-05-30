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

  console.log(data);
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
  })), data.constants[0].slug));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSW5kZXgiLCJhbGxQb3N0cyIsImhlcm9Qb3N0IiwibW9yZVBvc3RzIiwic2xpY2UiLCJjbXN1cmwiLCJmZXRjaGVyIiwiY29udGVudHMiLCJ0b3RhbENvdW50Iiwib2Zmc2V0IiwibGltaXQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsInVzZVNXUiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJDTVNfTkFNRSIsInRpdGxlIiwiY292ZXJJbWFnZSIsImRhdGUiLCJhdXRob3IiLCJzbHVnIiwiZXhjZXJwdCIsImxlbmd0aCIsImNvbnN0YW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFNQSxJQUFNQSxLQUFzQixHQUFHLFNBQXpCQSxLQUF5QixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUMvQyxNQUFNQyxRQUFRLEdBQUdELFFBQVEsQ0FBQyxDQUFELENBQXpCO0FBQ0EsTUFBTUUsU0FBUyxHQUFHRixRQUFRLENBQUNHLEtBQVQsQ0FBZSxDQUFmLENBQWxCO0FBRUEsTUFBTUMsTUFBTSxHQUFHLCtDQUFmOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBWWZDLFFBWmUsRUFzQmZDLFVBdEJlLEVBdUJmQyxNQXZCZSxFQXdCZkMsS0F4QmU7QUFBQSxXQXdCR0MsS0FBSyxDQUFDTixNQUFELEVBQVM7QUFDM0JPLFlBQU0sRUFBRSxLQURtQjtBQUUzQkMsYUFBTyxFQUFFO0FBQ1AscUJBQWE7QUFETjtBQUZrQixLQUFULENBQUwsQ0FLWkMsSUFMWSxDQUtQLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEtBTEksQ0F4Qkg7QUFBQSxHQUFoQjs7QUFOK0MsZ0JBcUN6QkMsbURBQU0sQ0FBQ1osTUFBRCxFQUFTQyxPQUFULENBckNtQjtBQUFBLE1BcUN4Q1ksSUFyQ3dDLFdBcUN4Q0EsSUFyQ3dDO0FBQUEsTUFxQ2xDQyxLQXJDa0MsV0FxQ2xDQSxLQXJDa0M7O0FBc0MvQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDRjs7Ozs7OztBQU1FLE1BQUlDLEtBQUosRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNYLE1BQUksQ0FBQ0QsSUFBTCxFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUDtBQUVYLFNBQ0UsbUVBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FBa0NJLHVEQUFsQyxDQURGLENBREYsRUFJRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVHcEIsUUFBUSxJQUNQLE1BQUMsNkRBQUQ7QUFDRSxTQUFLLEVBQUVBLFFBQVEsQ0FBQ3FCLEtBRGxCO0FBRUUsY0FBVSxFQUFFckIsUUFBUSxDQUFDc0IsVUFGdkI7QUFHRSxRQUFJLEVBQUV0QixRQUFRLENBQUN1QixJQUhqQjtBQUlFLFVBQU0sRUFBRXZCLFFBQVEsQ0FBQ3dCLE1BSm5CO0FBS0UsUUFBSSxFQUFFeEIsUUFBUSxDQUFDeUIsSUFMakI7QUFNRSxXQUFPLEVBQUV6QixRQUFRLENBQUMwQixPQU5wQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFZR3pCLFNBQVMsQ0FBQzBCLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0IsTUFBQyxnRUFBRDtBQUFhLFNBQUssRUFBRTFCLFNBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaM0IsQ0FKRixFQWtCR2UsSUFBSSxDQUFDWSxTQUFMLENBQWUsQ0FBZixFQUFrQkgsSUFsQnJCLENBREYsQ0FERjtBQXdCRCxDQXhFRDs7R0FBTTNCLEs7VUFxQ2tCaUIsMkM7OztLQXJDbEJqQixLOztBQTBFU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjk5ZDQ3ZWY5NTY5YTBhMDFlNjFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IE1vcmVTdG9yaWVzIGZyb20gJy4uL2NvbXBvbmVudHMvbW9yZS1zdG9yaWVzJ1xuaW1wb3J0IEhlcm9Qb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvaGVyby1wb3N0J1xuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tICcuLi9saWIvYXBpJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQ01TX05BTUUgfSBmcm9tICcuLi9saWIvY29uc3RhbnRzJ1xuaW1wb3J0IFBvc3QgZnJvbSAnLi4vdHlwZXMvcG9zdCdcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuXG50eXBlIFByb3BzID0ge1xuICBhbGxQb3N0czogUG9zdFtdXG59XG5cbmNvbnN0IEluZGV4OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBhbGxQb3N0cyB9KSA9PiB7XG4gIGNvbnN0IGhlcm9Qb3N0ID0gYWxsUG9zdHNbMF1cbiAgY29uc3QgbW9yZVBvc3RzID0gYWxsUG9zdHMuc2xpY2UoMSlcblxuICBjb25zdCBjbXN1cmwgPSAnaHR0cHM6Ly9teWJsb2ctbmV4dGpzLm1pY3JvY21zLmlvL2FwaS92MS9ibG9nJ1xuXG4gIGNvbnN0IGZldGNoZXIgPSAoXG4vKiAgICBjb250ZW50czoge1xuICAgICAgaWQ6IHN0cmluZyxcbiAgICAgIGNyZWF0ZWRBdDogc3RyaW5nLFxuICAgICAgdXBkYXRlZEF0OiBzdHJpbmcsXG4gICAgICB0aXRsZTogc3RyaW5nLFxuICAgICAgZXhjZXJwdDogc3RyaW5nLFxuICAgICAgZGF0ZTogc3RyaW5nLFxuICAgICAgc2x1Zzogc3RyaW5nLFxuICAgICAgYmxvZ3RleHQ6IHN0cmluZyxcbiAgICB9W11cbiAgICAqL1xuICAgY29udGVudHM6IFt7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBjcmVhdGVkQXQ6IHN0cmluZyxcbiAgICB1cGRhdGVkQXQ6IHN0cmluZyxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGV4Y2VycHQ6IHN0cmluZyxcbiAgICBkYXRlOiBzdHJpbmcsXG4gICAgc2x1Zzogc3RyaW5nLFxuICAgIGJsb2d0ZXh0OiBzdHJpbmcsXG4gICB9XSxcbiAgIHRvdGFsQ291bnQ6IHN0cmluZyxcbiAgIG9mZnNldCA6IHN0cmluZyxcbiAgIGxpbWl0OiBzdHJpbmcpID0+IGZldGNoKGNtc3VybCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ1gtQVBJLUtFWSc6ICdjMmJmMzBkMy0xZGEyLTQ1YTMtODMyNy1iOTkyYjkwMDZhZjMnXG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuXG4gIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoY21zdXJsLCBmZXRjaGVyKVxuICBjb25zb2xlLmxvZyhkYXRhKVxuLypcbiAgY29uc3QgZmV0Y2hlciA9IChcbiAgICB1cmwgOiBzdHJpbmdcbiAgKSA9PiBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZmFjZWJvb2svcmVwb3NcIikudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG4gIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2ZhY2Vib29rL3JlcG9zXCIsIGZldGNoZXIpXG4qL1xuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmVycm9yPC9kaXY+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5OZXh0LmpzIEJsb2cgRXhhbXBsZSB3aXRoIHtDTVNfTkFNRX08L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEludHJvIC8+XG4gICAgICAgICAge2hlcm9Qb3N0ICYmIChcbiAgICAgICAgICAgIDxIZXJvUG9zdFxuICAgICAgICAgICAgICB0aXRsZT17aGVyb1Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgIGNvdmVySW1hZ2U9e2hlcm9Qb3N0LmNvdmVySW1hZ2V9XG4gICAgICAgICAgICAgIGRhdGU9e2hlcm9Qb3N0LmRhdGV9XG4gICAgICAgICAgICAgIGF1dGhvcj17aGVyb1Bvc3QuYXV0aG9yfVxuICAgICAgICAgICAgICBzbHVnPXtoZXJvUG9zdC5zbHVnfVxuICAgICAgICAgICAgICBleGNlcnB0PXtoZXJvUG9zdC5leGNlcnB0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHttb3JlUG9zdHMubGVuZ3RoID4gMCAmJiA8TW9yZVN0b3JpZXMgcG9zdHM9e21vcmVQb3N0c30gLz59XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICB7ZGF0YS5jb25zdGFudHNbMF0uc2x1Z31cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWxsUG9zdHMgPSBnZXRBbGxQb3N0cyhbXG4gICAgJ3RpdGxlJyxcbiAgICAnZGF0ZScsXG4gICAgJ3NsdWcnLFxuICAgICdhdXRob3InLFxuICAgICdjb3ZlckltYWdlJyxcbiAgICAnZXhjZXJwdCcsXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBhbGxQb3N0cyB9LFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9