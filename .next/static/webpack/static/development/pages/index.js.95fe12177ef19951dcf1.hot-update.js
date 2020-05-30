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

  var fetcher = function fetcher(message) {
    return fetch(cmsurl, {
      method: 'GET',
      headers: {
        'X-API=KEY': "c2bf30d3-1da2-45a3-8327-b992b9006af3"
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
      lineNumber: 48,
      columnNumber: 21
    }
  }, "error");
  if (!data) return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, "loading...");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "Next.js Blog Example with ", _lib_constants__WEBPACK_IMPORTED_MODULE_7__["CMS_NAME"])), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(_components_intro__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 60,
      columnNumber: 13
    }
  }), morePosts.length > 0 && __jsx(_components_more_stories__WEBPACK_IMPORTED_MODULE_2__["default"], {
    posts: morePosts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 36
    }
  })), data.message.id));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSW5kZXgiLCJhbGxQb3N0cyIsImhlcm9Qb3N0IiwibW9yZVBvc3RzIiwic2xpY2UiLCJjbXN1cmwiLCJmZXRjaGVyIiwibWVzc2FnZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwidXNlU1dSIiwiZGF0YSIsImVycm9yIiwiQ01TX05BTUUiLCJ0aXRsZSIsImNvdmVySW1hZ2UiLCJkYXRlIiwiYXV0aG9yIiwic2x1ZyIsImV4Y2VycHQiLCJsZW5ndGgiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFNQSxJQUFNQSxLQUFzQixHQUFHLFNBQXpCQSxLQUF5QixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUMvQyxNQUFNQyxRQUFRLEdBQUdELFFBQVEsQ0FBQyxDQUFELENBQXpCO0FBQ0EsTUFBTUUsU0FBUyxHQUFHRixRQUFRLENBQUNHLEtBQVQsQ0FBZSxDQUFmLENBQWxCO0FBRUEsTUFBTUMsTUFBTSxHQUFHLCtDQUFmOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQ2RDLE9BRGM7QUFBQSxXQVVSQyxLQUFLLENBQUNILE1BQUQsRUFBUztBQUNoQkksWUFBTSxFQUFFLEtBRFE7QUFFaEJDLGFBQU8sRUFBRTtBQUNQLHFCQUFZO0FBREw7QUFGTyxLQUFULENBQUwsQ0FLREMsSUFMQyxDQUtJLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEtBTFAsQ0FWUTtBQUFBLEdBQWhCOztBQU4rQyxnQkF1QnpCQyxtREFBTSxDQUFDVCxNQUFELEVBQVNDLE9BQVQsQ0F2Qm1CO0FBQUEsTUF1QnhDUyxJQXZCd0MsV0F1QnhDQSxJQXZCd0M7QUFBQSxNQXVCbENDLEtBdkJrQyxXQXVCbENBLEtBdkJrQztBQXlCakQ7Ozs7Ozs7O0FBTUUsTUFBSUEsS0FBSixFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ1gsTUFBSSxDQUFDRCxJQUFMLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBRVgsU0FDRSxtRUFDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUFrQ0UsdURBQWxDLENBREYsQ0FERixFQUlFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUdmLFFBQVEsSUFDUCxNQUFDLDZEQUFEO0FBQ0UsU0FBSyxFQUFFQSxRQUFRLENBQUNnQixLQURsQjtBQUVFLGNBQVUsRUFBRWhCLFFBQVEsQ0FBQ2lCLFVBRnZCO0FBR0UsUUFBSSxFQUFFakIsUUFBUSxDQUFDa0IsSUFIakI7QUFJRSxVQUFNLEVBQUVsQixRQUFRLENBQUNtQixNQUpuQjtBQUtFLFFBQUksRUFBRW5CLFFBQVEsQ0FBQ29CLElBTGpCO0FBTUUsV0FBTyxFQUFFcEIsUUFBUSxDQUFDcUIsT0FOcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBWUdwQixTQUFTLENBQUNxQixNQUFWLEdBQW1CLENBQW5CLElBQXdCLE1BQUMsZ0VBQUQ7QUFBYSxTQUFLLEVBQUVyQixTQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWjNCLENBSkYsRUFrQkdZLElBQUksQ0FBQ1IsT0FBTCxDQUFha0IsRUFsQmhCLENBREYsQ0FERjtBQXdCRCxDQTFERDs7R0FBTXpCLEs7VUF1QmtCYywyQzs7O0tBdkJsQmQsSzs7QUE0RFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45NWZlMTIxNzdlZjE5OTUxZGNmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCBNb3JlU3RvcmllcyBmcm9tICcuLi9jb21wb25lbnRzL21vcmUtc3RvcmllcydcbmltcG9ydCBIZXJvUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL2hlcm8tcG9zdCdcbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSAnLi4vbGliL2FwaSdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IENNU19OQU1FIH0gZnJvbSAnLi4vbGliL2NvbnN0YW50cydcbmltcG9ydCBQb3N0IGZyb20gJy4uL3R5cGVzL3Bvc3QnXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxudHlwZSBQcm9wcyA9IHtcbiAgYWxsUG9zdHM6IFBvc3RbXVxufVxuXG5jb25zdCBJbmRleDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgYWxsUG9zdHMgfSkgPT4ge1xuICBjb25zdCBoZXJvUG9zdCA9IGFsbFBvc3RzWzBdXG4gIGNvbnN0IG1vcmVQb3N0cyA9IGFsbFBvc3RzLnNsaWNlKDEpXG5cbiAgY29uc3QgY21zdXJsID0gJ2h0dHBzOi8vbXlibG9nLW5leHRqcy5taWNyb2Ntcy5pby9hcGkvdjEvYmxvZydcblxuICBjb25zdCBmZXRjaGVyID0gKFxuICAgIG1lc3NhZ2U6IHtcbiAgICAgIGlkOiBzdHJpbmcsXG4gICAgICBjcmVhdGVkQXQ6IHN0cmluZyxcbiAgICAgIHVwZGF0ZWRBdDogc3RyaW5nLFxuICAgICAgdGl0bGU6IHN0cmluZyxcbiAgICAgIGV4Y2VycHQ6IHN0cmluZyxcbiAgICAgIGRhdGU6IHN0cmluZyxcbiAgICAgIHNsdWc6IHN0cmluZyxcbiAgICAgIGJsb2d0ZXh0OiBzdHJpbmcsXG4gICAgfSkgPT4gZmV0Y2goY21zdXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnWC1BUEk9S0VZJzpcImMyYmYzMGQzLTFkYTItNDVhMy04MzI3LWI5OTJiOTAwNmFmM1wiXG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuXG4gIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoY21zdXJsLCBmZXRjaGVyKVxuXG4vKlxuICBjb25zdCBmZXRjaGVyID0gKFxuICAgIHVybCA6IHN0cmluZ1xuICApID0+IGZldGNoKFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9mYWNlYm9vay9yZXBvc1wiKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbiAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZmFjZWJvb2svcmVwb3NcIiwgZmV0Y2hlcilcbiovXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZXJyb3I8L2Rpdj5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPk5leHQuanMgQmxvZyBFeGFtcGxlIHdpdGgge0NNU19OQU1FfTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8SW50cm8gLz5cbiAgICAgICAgICB7aGVyb1Bvc3QgJiYgKFxuICAgICAgICAgICAgPEhlcm9Qb3N0XG4gICAgICAgICAgICAgIHRpdGxlPXtoZXJvUG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgY292ZXJJbWFnZT17aGVyb1Bvc3QuY292ZXJJbWFnZX1cbiAgICAgICAgICAgICAgZGF0ZT17aGVyb1Bvc3QuZGF0ZX1cbiAgICAgICAgICAgICAgYXV0aG9yPXtoZXJvUG9zdC5hdXRob3J9XG4gICAgICAgICAgICAgIHNsdWc9e2hlcm9Qb3N0LnNsdWd9XG4gICAgICAgICAgICAgIGV4Y2VycHQ9e2hlcm9Qb3N0LmV4Y2VycHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge21vcmVQb3N0cy5sZW5ndGggPiAwICYmIDxNb3JlU3RvcmllcyBwb3N0cz17bW9yZVBvc3RzfSAvPn1cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIHtkYXRhLm1lc3NhZ2UuaWR9XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbFBvc3RzID0gZ2V0QWxsUG9zdHMoW1xuICAgICd0aXRsZScsXG4gICAgJ2RhdGUnLFxuICAgICdzbHVnJyxcbiAgICAnYXV0aG9yJyxcbiAgICAnY292ZXJJbWFnZScsXG4gICAgJ2V4Y2VycHQnLFxuICBdKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYWxsUG9zdHMgfSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==