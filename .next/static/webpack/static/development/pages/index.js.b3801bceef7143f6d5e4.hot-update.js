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

  var fetcher = function fetcher(url) {
    return fetch(url).then(function (res) {
      return res.json();
    });
  };

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_8__["default"])(cmsurl, fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  if (!data) return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "loading...");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Next.js Blog Example with ", _lib_constants__WEBPACK_IMPORTED_MODULE_7__["CMS_NAME"])), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_components_intro__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 40,
      columnNumber: 13
    }
  }), morePosts.length > 0 && __jsx(_components_more_stories__WEBPACK_IMPORTED_MODULE_2__["default"], {
    posts: morePosts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 36
    }
  })), data));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSW5kZXgiLCJhbGxQb3N0cyIsImhlcm9Qb3N0IiwibW9yZVBvc3RzIiwic2xpY2UiLCJjbXN1cmwiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInVzZVNXUiIsImRhdGEiLCJlcnJvciIsIkNNU19OQU1FIiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZGF0ZSIsImF1dGhvciIsInNsdWciLCJleGNlcnB0IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQU1BLElBQU1BLEtBQXNCLEdBQUcsU0FBekJBLEtBQXlCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQy9DLE1BQU1DLFFBQVEsR0FBR0QsUUFBUSxDQUFDLENBQUQsQ0FBekI7QUFDQSxNQUFNRSxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csS0FBVCxDQUFlLENBQWYsQ0FBbEI7QUFFQSxNQUFNQyxNQUFNLEdBQUcsK0NBQWY7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FDZEMsR0FEYztBQUFBLFdBRVhDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0IsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsS0FBbkIsQ0FGVztBQUFBLEdBQWhCOztBQU4rQyxnQkFVekJDLG1EQUFNLENBQUNQLE1BQUQsRUFBU0MsT0FBVCxDQVZtQjtBQUFBLE1BVXhDTyxJQVZ3QyxXQVV4Q0EsSUFWd0M7QUFBQSxNQVVsQ0MsS0FWa0MsV0FVbENBLEtBVmtDOztBQVkvQyxNQUFJLENBQUNELElBQUwsRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFFWCxTQUNFLG1FQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBQWtDRSx1REFBbEMsQ0FERixDQURGLEVBSUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFR2IsUUFBUSxJQUNQLE1BQUMsNkRBQUQ7QUFDRSxTQUFLLEVBQUVBLFFBQVEsQ0FBQ2MsS0FEbEI7QUFFRSxjQUFVLEVBQUVkLFFBQVEsQ0FBQ2UsVUFGdkI7QUFHRSxRQUFJLEVBQUVmLFFBQVEsQ0FBQ2dCLElBSGpCO0FBSUUsVUFBTSxFQUFFaEIsUUFBUSxDQUFDaUIsTUFKbkI7QUFLRSxRQUFJLEVBQUVqQixRQUFRLENBQUNrQixJQUxqQjtBQU1FLFdBQU8sRUFBRWxCLFFBQVEsQ0FBQ21CLE9BTnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQVlHbEIsU0FBUyxDQUFDbUIsTUFBVixHQUFtQixDQUFuQixJQUF3QixNQUFDLGdFQUFEO0FBQWEsU0FBSyxFQUFFbkIsU0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVozQixDQUpGLEVBa0JHVSxJQWxCSCxDQURGLENBREY7QUF3QkQsQ0F0Q0Q7O0dBQU1iLEs7VUFVa0JZLDJDOzs7S0FWbEJaLEs7O0FBd0NTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYjM4MDFiY2VlZjcxNDNmNmQ1ZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgTW9yZVN0b3JpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9tb3JlLXN0b3JpZXMnXG5pbXBvcnQgSGVyb1Bvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9oZXJvLXBvc3QnXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gJy4uL2xpYi9hcGknXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBDTVNfTkFNRSB9IGZyb20gJy4uL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgUG9zdCBmcm9tICcuLi90eXBlcy9wb3N0J1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFsbFBvc3RzOiBQb3N0W11cbn1cblxuY29uc3QgSW5kZXg6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGFsbFBvc3RzIH0pID0+IHtcbiAgY29uc3QgaGVyb1Bvc3QgPSBhbGxQb3N0c1swXVxuICBjb25zdCBtb3JlUG9zdHMgPSBhbGxQb3N0cy5zbGljZSgxKVxuXG4gIGNvbnN0IGNtc3VybCA9ICdodHRwczovL215YmxvZy1uZXh0anMubWljcm9jbXMuaW8vYXBpL3YxL2Jsb2cnXG4gIFxuICBjb25zdCBmZXRjaGVyID0gKFxuICAgIHVybDogc3RyaW5nXG4gICkgPT4gZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcblxuICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKGNtc3VybCwgZmV0Y2hlcilcblxuICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+TmV4dC5qcyBCbG9nIEV4YW1wbGUgd2l0aCB7Q01TX05BTUV9PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxJbnRybyAvPlxuICAgICAgICAgIHtoZXJvUG9zdCAmJiAoXG4gICAgICAgICAgICA8SGVyb1Bvc3RcbiAgICAgICAgICAgICAgdGl0bGU9e2hlcm9Qb3N0LnRpdGxlfVxuICAgICAgICAgICAgICBjb3ZlckltYWdlPXtoZXJvUG9zdC5jb3ZlckltYWdlfVxuICAgICAgICAgICAgICBkYXRlPXtoZXJvUG9zdC5kYXRlfVxuICAgICAgICAgICAgICBhdXRob3I9e2hlcm9Qb3N0LmF1dGhvcn1cbiAgICAgICAgICAgICAgc2x1Zz17aGVyb1Bvc3Quc2x1Z31cbiAgICAgICAgICAgICAgZXhjZXJwdD17aGVyb1Bvc3QuZXhjZXJwdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7bW9yZVBvc3RzLmxlbmd0aCA+IDAgJiYgPE1vcmVTdG9yaWVzIHBvc3RzPXttb3JlUG9zdHN9IC8+fVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAge2RhdGF9XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbFBvc3RzID0gZ2V0QWxsUG9zdHMoW1xuICAgICd0aXRsZScsXG4gICAgJ2RhdGUnLFxuICAgICdzbHVnJyxcbiAgICAnYXV0aG9yJyxcbiAgICAnY292ZXJJbWFnZScsXG4gICAgJ2V4Y2VycHQnLFxuICBdKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYWxsUG9zdHMgfSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==