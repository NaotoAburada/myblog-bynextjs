webpackHotUpdate("static\\development\\pages\\posts\\[slug].js",{

/***/ "./pages/posts/[slug].tsx":
/*!********************************!*\
  !*** ./pages/posts/[slug].tsx ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/container */ "./components/container.tsx");
/* harmony import */ var _components_post_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/post-body */ "./components/post-body.tsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/header */ "./components/header.tsx");
/* harmony import */ var _components_post_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/post-header */ "./components/post-header.tsx");
/* harmony import */ var _components_previous_article__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/previous-article */ "./components/previous-article.tsx");
/* harmony import */ var _components_back_article__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/back-article */ "./components/back-article.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_post_title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/post-title */ "./components/post-title.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib/constants */ "./lib/constants.ts");
var _this = undefined,
    _jsxFileName = "D:\\workspace_nextjs\\myblog-bynextjs\\pages\\posts\\[slug].tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














var Post = function Post(_ref) {
  _s();

  var post = _ref.post,
      morePosts = _ref.morePosts,
      preview = _ref.preview;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  if (!router.isFallback && !(post === null || post === void 0 ? void 0 : post.slug)) {
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_2___default.a, {
      statusCode: 404,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 12
      }
    });
  } //  let previousArticle = post


  var linkpostpre = -1;
  var linkpostback = morePosts.length;

  for (var i = 0; i < morePosts.length; i++) {
    if ((post === null || post === void 0 ? void 0 : post.slug) === morePosts[i].slug) {
      if (i !== 0) {
        linkpostpre = i - 1;
      }

      linkpostback = i + 1;
    }
  } //  previousArticle = morePosts[linkpostpre + 1]


  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    preview: preview,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), router.isFallback ? __jsx(_components_post_title__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Loading\u2026") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("article", {
    className: "mb-32",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, post.title, " | Next.js Blog Example with ", _lib_constants__WEBPACK_IMPORTED_MODULE_12__["CMS_NAME"]), __jsx("meta", {
    property: "og:image",
    content: post.ogImage.url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  })), __jsx(_components_post_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: post.title,
    coverImage: post.coverImage,
    date: post.date,
    author: post.author,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }), __jsx(_components_post_body__WEBPACK_IMPORTED_MODULE_4__["default"], {
    content: post.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "flex,textalign=center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, linkpostpre === -1 ? __jsx(_components_previous_article__WEBPACK_IMPORTED_MODULE_7__["default"], {
    post: morePosts[linkpostpre],
    linknumber: linkpostpre,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }) : __jsx(_components_previous_article__WEBPACK_IMPORTED_MODULE_7__["default"], {
    post: morePosts[linkpostpre],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }), linkpostback === morePosts.length ? __jsx(_components_back_article__WEBPACK_IMPORTED_MODULE_8__["default"], {
    post: morePosts[linkpostpre],
    linknumber: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }) : __jsx(_components_back_article__WEBPACK_IMPORTED_MODULE_8__["default"], {
    post: morePosts[linkpostback],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }))))));
};

_s(Post, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Post;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9bc2x1Z10udHN4Il0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwibW9yZVBvc3RzIiwicHJldmlldyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJzbHVnIiwibGlua3Bvc3RwcmUiLCJsaW5rcG9zdGJhY2siLCJsZW5ndGgiLCJpIiwidGl0bGUiLCJDTVNfTkFNRSIsIm9nSW1hZ2UiLCJ1cmwiLCJjb3ZlckltYWdlIiwiZGF0ZSIsImF1dGhvciIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFXQSxJQUFNQSxJQUFxQixHQUFHLFNBQXhCQSxJQUF3QixPQUFrQztBQUFBOztBQUFBLE1BQS9CQyxJQUErQixRQUEvQkEsSUFBK0I7QUFBQSxNQUF6QkMsU0FBeUIsUUFBekJBLFNBQXlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzlELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBSSxDQUFDRCxNQUFNLENBQUNFLFVBQVIsSUFBc0IsRUFBQ0wsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVNLElBQVAsQ0FBMUIsRUFBdUM7QUFDckMsV0FBTyxNQUFDLGlEQUFEO0FBQVcsZ0JBQVUsRUFBRSxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRCxHQUo2RCxDQU1oRTs7O0FBQ0UsTUFBSUMsV0FBVyxHQUFHLENBQUMsQ0FBbkI7QUFDQSxNQUFJQyxZQUFZLEdBQUdQLFNBQVMsQ0FBQ1EsTUFBN0I7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVCxTQUFTLENBQUNRLE1BQTlCLEVBQXNDQyxDQUFDLEVB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LjA4MGYwZDJiNWVjYjRhODJiM2JhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnbmV4dC9lcnJvcidcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgUG9zdEJvZHkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0LWJvZHknXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IFBvc3RIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0LWhlYWRlcidcbmltcG9ydCBQcmV2aW91c0FydGljbGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wcmV2aW91cy1hcnRpY2xlJ1xuaW1wb3J0IEJhY2tBcnRpY2xlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmFjay1hcnRpY2xlJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7IGdldFBvc3RCeVNsdWcsIGdldEFsbFBvc3RzIH0gZnJvbSAnLi4vLi4vbGliL2FwaSdcbmltcG9ydCBQb3N0VGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0LXRpdGxlJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQ01TX05BTUUgfSBmcm9tICcuLi8uLi9saWIvY29uc3RhbnRzJ1xuaW1wb3J0IG1hcmtkb3duVG9IdG1sIGZyb20gJy4uLy4uL2xpYi9tYXJrZG93blRvSHRtbCdcbmltcG9ydCBQb3N0VHlwZSBmcm9tICcuLi8uLi90eXBlcy9wb3N0J1xuaW1wb3J0IHsgQnJlYWRjcnVtYnMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBvc3Q6IFBvc3RUeXBlXG4gIG1vcmVQb3N0czogUG9zdFR5cGVbXVxuICBwcmV2aWV3PzogYm9vbGVhblxufVxuXG5jb25zdCBQb3N0OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBwb3N0LCBtb3JlUG9zdHMsIHByZXZpZXcgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBpZiAoIXJvdXRlci5pc0ZhbGxiYWNrICYmICFwb3N0Py5zbHVnKSB7XG4gICAgcmV0dXJuIDxFcnJvclBhZ2Ugc3RhdHVzQ29kZT17NDA0fSAvPlxuICB9XG5cbi8vICBsZXQgcHJldmlvdXNBcnRpY2xlID0gcG9zdFxuICBsZXQgbGlua3Bvc3RwcmUgPSAtMVxuICBsZXQgbGlua3Bvc3RiYWNrID0gbW9yZVBvc3RzLmxlbmd0aFxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1vcmVQb3N0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwb3N0Py5zbHVnID09PSBtb3JlUG9zdHNbaV0uc2x1Zykge1xuICAgICAgaWYoaSAhPT0gMCkge1xuICAgICAgICBsaW5rcG9zdHByZSA9IGkgLSAxXG4gICAgICB9XG4gICAgICBsaW5rcG9zdGJhY2sgPSBpICsgMVxuICAgIH1cbiAgfVxuXG4gIC8vICBwcmV2aW91c0FydGljbGUgPSBtb3JlUG9zdHNbbGlua3Bvc3RwcmUgKyAxXVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBwcmV2aWV3PXtwcmV2aWV3fT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAge3JvdXRlci5pc0ZhbGxiYWNrID8gKFxuICAgICAgICAgIDxQb3N0VGl0bGU+TG9hZGluZ+KApjwvUG9zdFRpdGxlPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtYi0zMlwiPlxuICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX0gfCBOZXh0LmpzIEJsb2cgRXhhbXBsZSB3aXRoIHtDTVNfTkFNRX1cbiAgICAgICAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtwb3N0Lm9nSW1hZ2UudXJsfSAvPlxuICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgIDxQb3N0SGVhZGVyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgY292ZXJJbWFnZT17cG9zdC5jb3ZlckltYWdlfVxuICAgICAgICAgICAgICAgIGRhdGU9e3Bvc3QuZGF0ZX1cbiAgICAgICAgICAgICAgICBhdXRob3I9e3Bvc3QuYXV0aG9yfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8UG9zdEJvZHkgY29udGVudD17cG9zdC5jb250ZW50fSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgsdGV4dGFsaWduPWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHtsaW5rcG9zdHByZSA9PT0gLTEgPyAoXG4gICAgICAgICAgICAgICAgICA8UHJldmlvdXNBcnRpY2xlXG4gICAgICAgICAgICAgICAgICAgIHBvc3Q9e21vcmVQb3N0c1tsaW5rcG9zdHByZV19IGxpbmtudW1iZXI9e2xpbmtwb3N0cHJlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPFByZXZpb3VzQXJ0aWNsZVxuICAgICAgICAgICAgICAgICAgICBwb3N0PXttb3JlUG9zdHNbbGlua3Bvc3RwcmVdfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtsaW5rcG9zdGJhY2sgPT09IG1vcmVQb3N0cy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgICA8QmFja0FydGljbGVcbiAgICAgICAgICAgICAgICAgICAgcG9zdD17bW9yZVBvc3RzW2xpbmtwb3N0cHJlXX0gbGlua251bWJlcj17MH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxCYWNrQXJ0aWNsZVxuICAgICAgICAgICAgICAgICAgICBwb3N0PXttb3JlUG9zdHNbbGlua3Bvc3RiYWNrXX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFxuXG50eXBlIFBhcmFtcyA9IHtcbiAgcGFyYW1zOiB7XG4gICAgc2x1Zzogc3RyaW5nXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH06IFBhcmFtcykge1xuICBjb25zdCBwb3N0ID0gZ2V0UG9zdEJ5U2x1ZyhwYXJhbXMuc2x1ZywgW1xuICAgICd0aXRsZScsXG4gICAgJ2RhdGUnLFxuICAgICdzbHVnJyxcbiAgICAnYXV0aG9yJyxcbiAgICAnY29udGVudCcsXG4gICAgJ29nSW1hZ2UnLFxuICAgICdjb3ZlckltYWdlJyxcbiAgXSlcblxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgbWFya2Rvd25Ub0h0bWwocG9zdC5jb250ZW50IHx8ICcnKVxuXG4gIGNvbnN0IGFsbFBvc3RzID0gZ2V0QWxsUG9zdHMoW1xuICAgICd0aXRsZScsXG4gICAgJ2RhdGUnLFxuICAgICdzbHVnJyxcbiAgICAnYXV0aG9yJyxcbiAgICAnY292ZXJJbWFnZScsXG4gICAgJ2V4Y2VycHQnLFxuICBdKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IHtcbiAgICAgICAgLi4ucG9zdCxcbiAgICAgICAgY29udGVudCxcbiAgICAgIH0sXG4gICAgICBtb3JlUG9zdHM6IGFsbFBvc3RzLCBcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcG9zdHMgPSBnZXRBbGxQb3N0cyhbJ3NsdWcnXSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwb3N0cy5tYXAoKHBvc3RzKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBzbHVnOiBwb3N0cy5zbHVnLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIH0pLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==