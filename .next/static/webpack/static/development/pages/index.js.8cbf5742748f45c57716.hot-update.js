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
      error = _useSWR.error; //  if (!data) return <div>loading...</div>


  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Next.js Blog Example with ", _lib_constants__WEBPACK_IMPORTED_MODULE_7__["CMS_NAME"])), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_components_intro__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
      lineNumber: 53,
      columnNumber: 13
    }
  }), morePosts.length > 0 && __jsx(_components_more_stories__WEBPACK_IMPORTED_MODULE_2__["default"], {
    posts: morePosts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSW5kZXgiLCJhbGxQb3N0cyIsImhlcm9Qb3N0IiwibW9yZVBvc3RzIiwic2xpY2UiLCJjbXN1cmwiLCJmZXRjaGVyIiwibWVzc2FnZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwidXNlU1dSIiwiZGF0YSIsImVycm9yIiwiQ01TX05BTUUiLCJ0aXRsZSIsImNvdmVySW1hZ2UiLCJkYXRlIiwiYXV0aG9yIiwic2x1ZyIsImV4Y2VycHQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBTUEsSUFBTUEsS0FBc0IsR0FBRyxTQUF6QkEsS0FBeUIsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDL0MsTUFBTUMsUUFBUSxHQUFHRCxRQUFRLENBQUMsQ0FBRCxDQUF6QjtBQUNBLE1BQU1FLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxLQUFULENBQWUsQ0FBZixDQUFsQjtBQUVBLE1BQU1DLE1BQU0sR0FBRywrQ0FBZjs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUNkQyxPQURjO0FBQUEsV0FVUEMsS0FBSyxDQUFDSCxNQUFELEVBQVM7QUFDbkJJLFlBQU0sRUFBRSxLQURXO0FBRW5CQyxhQUFPLEVBQUc7QUFDUixxQkFBWTtBQURKO0FBRlMsS0FBVCxDQUFMLENBS0pDLElBTEksQ0FLQyxVQUFBQyxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxLQUxKLENBVk87QUFBQSxHQUFoQjs7QUFOK0MsZ0JBdUJ6QkMsbURBQU0sQ0FBQ1QsTUFBRCxFQUFTQyxPQUFULENBdkJtQjtBQUFBLE1BdUJ4Q1MsSUF2QndDLFdBdUJ4Q0EsSUF2QndDO0FBQUEsTUF1QmxDQyxLQXZCa0MsV0F1QmxDQSxLQXZCa0MsRUF5QmpEOzs7QUFFRSxTQUNFLG1FQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBQWtDQyx1REFBbEMsQ0FERixDQURGLEVBSUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFR2YsUUFBUSxJQUNQLE1BQUMsNkRBQUQ7QUFDRSxTQUFLLEVBQUVBLFFBQVEsQ0FBQ2dCLEtBRGxCO0FBRUUsY0FBVSxFQUFFaEIsUUFBUSxDQUFDaUIsVUFGdkI7QUFHRSxRQUFJLEVBQUVqQixRQUFRLENBQUNrQixJQUhqQjtBQUlFLFVBQU0sRUFBRWxCLFFBQVEsQ0FBQ21CLE1BSm5CO0FBS0UsUUFBSSxFQUFFbkIsUUFBUSxDQUFDb0IsSUFMakI7QUFNRSxXQUFPLEVBQUVwQixRQUFRLENBQUNxQixPQU5wQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFZR3BCLFNBQVMsQ0FBQ3FCLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0IsTUFBQyxnRUFBRDtBQUFhLFNBQUssRUFBRXJCLFNBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaM0IsQ0FKRixFQWtCR1ksSUFsQkgsQ0FERixDQURGO0FBd0JELENBbkREOztHQUFNZixLO1VBdUJrQmMsMkM7OztLQXZCbEJkLEs7O0FBcURTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOGNiZjU3NDI3NDhmNDVjNTc3MTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgTW9yZVN0b3JpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9tb3JlLXN0b3JpZXMnXG5pbXBvcnQgSGVyb1Bvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9oZXJvLXBvc3QnXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gJy4uL2xpYi9hcGknXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBDTVNfTkFNRSB9IGZyb20gJy4uL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgUG9zdCBmcm9tICcuLi90eXBlcy9wb3N0J1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFsbFBvc3RzOiBQb3N0W11cbn1cblxuY29uc3QgSW5kZXg6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGFsbFBvc3RzIH0pID0+IHtcbiAgY29uc3QgaGVyb1Bvc3QgPSBhbGxQb3N0c1swXVxuICBjb25zdCBtb3JlUG9zdHMgPSBhbGxQb3N0cy5zbGljZSgxKVxuXG4gIGNvbnN0IGNtc3VybCA9ICdodHRwczovL215YmxvZy1uZXh0anMubWljcm9jbXMuaW8vYXBpL3YxL2Jsb2cnXG4gIFxuICBjb25zdCBmZXRjaGVyID0gKFxuICAgIG1lc3NhZ2U6IHtjb250ZW50czoge1xuICAgICAgaWQ6IHN0cmluZyxcbiAgICAgIGNyZWF0ZWRBdDogc3RyaW5nLFxuICAgICAgdXBkYXRlZEF0OiBzdHJpbmcsXG4gICAgICB0aXRsZTogc3RyaW5nLFxuICAgICAgZXhjZXJwdDogc3RyaW5nLFxuICAgICAgZGF0ZTogc3RyaW5nLFxuICAgICAgc2x1Zzogc3RyaW5nLFxuICAgICAgYmxvZ3RleHQ6IHN0cmluZyxcbiAgICB9fSkgPT4gZmV0Y2goY21zdXJsLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVycyA6IHtcbiAgICAgICAgJ1gtQVBJPUtFWSc6XCJjMmJmMzBkMy0xZGEyLTQ1YTMtODMyNy1iOTkyYjkwMDZhZjNcIlxuICAgICAgfVxuICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuXG4gIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoY21zdXJsLCBmZXRjaGVyKVxuXG4vLyAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPk5leHQuanMgQmxvZyBFeGFtcGxlIHdpdGgge0NNU19OQU1FfTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8SW50cm8gLz5cbiAgICAgICAgICB7aGVyb1Bvc3QgJiYgKFxuICAgICAgICAgICAgPEhlcm9Qb3N0XG4gICAgICAgICAgICAgIHRpdGxlPXtoZXJvUG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgY292ZXJJbWFnZT17aGVyb1Bvc3QuY292ZXJJbWFnZX1cbiAgICAgICAgICAgICAgZGF0ZT17aGVyb1Bvc3QuZGF0ZX1cbiAgICAgICAgICAgICAgYXV0aG9yPXtoZXJvUG9zdC5hdXRob3J9XG4gICAgICAgICAgICAgIHNsdWc9e2hlcm9Qb3N0LnNsdWd9XG4gICAgICAgICAgICAgIGV4Y2VycHQ9e2hlcm9Qb3N0LmV4Y2VycHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge21vcmVQb3N0cy5sZW5ndGggPiAwICYmIDxNb3JlU3RvcmllcyBwb3N0cz17bW9yZVBvc3RzfSAvPn1cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIHtkYXRhfVxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhbGxQb3N0cyA9IGdldEFsbFBvc3RzKFtcbiAgICAndGl0bGUnLFxuICAgICdkYXRlJyxcbiAgICAnc2x1ZycsXG4gICAgJ2F1dGhvcicsXG4gICAgJ2NvdmVySW1hZ2UnLFxuICAgICdleGNlcnB0JyxcbiAgXSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGFsbFBvc3RzIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=