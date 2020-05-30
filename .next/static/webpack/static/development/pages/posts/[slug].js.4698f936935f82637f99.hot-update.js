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
    className: "flex width: 50% margin: 10px padding: 10px",
    style: {
      textAlign: "center"
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9bc2x1Z10udHN4Il0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwibW9yZVBvc3RzIiwicHJldmlldyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJzbHVnIiwibGlua3Bvc3RwcmUiLCJsaW5rcG9zdGJhY2siLCJsZW5ndGgiLCJpIiwidGl0bGUiLCJDTVNfTkFNRSIsIm9nSW1hZ2UiLCJ1cmwiLCJjb3ZlckltYWdlIiwiZGF0ZSIsImF1dGhvciIsImNvbnRlbnQiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFXQSxJQUFNQSxJQUFxQixHQUFHLFNBQXhCQSxJQUF3QixPQUFrQztBQUFBOztBQUFBLE1BQS9CQyxJQUErQixRQUEvQkEsSUFBK0I7QUFBQSxNQUF6QkMsU0FBeUIsUUFBekJBLFNBQXlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzlELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBSSxDQUFDRCxNQUFNLENBQUNFLFVBQVIsSUFBc0IsRUFBQ0wsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVNLElBQVAsQ0FBMUIsRUFBdUM7QUFDckMsV0FBTyxNQUFDLGlEQUFEO0FBQVcsZ0JBQVUsRUFBRSxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRCxHQUo2RCxDQU1oRTs7O0FBQ0UsTUFBSUMsV0FBVyxHQUFHLENBQUMsQ0FBbkI7QUFDQSxNQUFJQyxZQUFZLEdBQUdQLFNBQVMsQ0FBQ1EsTUFBN0I7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVCxTQUFTLENBQUNRLE1BQTlCLEVB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aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHNcXFtzbHVnXS5qcy40Njk4ZjkzNjkzNWY4MjYzN2Y5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJ25leHQvZXJyb3InXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IFBvc3RCb2R5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC1ib2R5J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCBQb3N0SGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC1oZWFkZXInXG5pbXBvcnQgUHJldmlvdXNBcnRpY2xlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcHJldmlvdXMtYXJ0aWNsZSdcbmltcG9ydCBCYWNrQXJ0aWNsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2JhY2stYXJ0aWNsZSdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyBnZXRQb3N0QnlTbHVnLCBnZXRBbGxQb3N0cyB9IGZyb20gJy4uLy4uL2xpYi9hcGknXG5pbXBvcnQgUG9zdFRpdGxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC10aXRsZSdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IENNU19OQU1FIH0gZnJvbSAnLi4vLi4vbGliL2NvbnN0YW50cydcbmltcG9ydCBtYXJrZG93blRvSHRtbCBmcm9tICcuLi8uLi9saWIvbWFya2Rvd25Ub0h0bWwnXG5pbXBvcnQgUG9zdFR5cGUgZnJvbSAnLi4vLi4vdHlwZXMvcG9zdCdcbmltcG9ydCB7IEJyZWFkY3J1bWJzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG50eXBlIFByb3BzID0ge1xuICBwb3N0OiBQb3N0VHlwZVxuICBtb3JlUG9zdHM6IFBvc3RUeXBlW11cbiAgcHJldmlldz86IGJvb2xlYW5cbn1cblxuY29uc3QgUG9zdDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgcG9zdCwgbW9yZVBvc3RzLCBwcmV2aWV3IH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgaWYgKCFyb3V0ZXIuaXNGYWxsYmFjayAmJiAhcG9zdD8uc2x1Zykge1xuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz5cbiAgfVxuXG4vLyAgbGV0IHByZXZpb3VzQXJ0aWNsZSA9IHBvc3RcbiAgbGV0IGxpbmtwb3N0cHJlID0gLTFcbiAgbGV0IGxpbmtwb3N0YmFjayA9IG1vcmVQb3N0cy5sZW5ndGhcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3JlUG9zdHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocG9zdD8uc2x1ZyA9PT0gbW9yZVBvc3RzW2ldLnNsdWcpIHtcbiAgICAgIGlmKGkgIT09IDApIHtcbiAgICAgICAgbGlua3Bvc3RwcmUgPSBpIC0gMVxuICAgICAgfVxuICAgICAgbGlua3Bvc3RiYWNrID0gaSArIDFcbiAgICB9XG4gIH1cblxuICAvLyAgcHJldmlvdXNBcnRpY2xlID0gbW9yZVBvc3RzW2xpbmtwb3N0cHJlICsgMV1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgcHJldmlldz17cHJldmlld30+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIHtyb3V0ZXIuaXNGYWxsYmFjayA/IChcbiAgICAgICAgICA8UG9zdFRpdGxlPkxvYWRpbmfigKY8L1Bvc3RUaXRsZT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWItMzJcIj5cbiAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9IHwgTmV4dC5qcyBCbG9nIEV4YW1wbGUgd2l0aCB7Q01TX05BTUV9XG4gICAgICAgICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17cG9zdC5vZ0ltYWdlLnVybH0gLz5cbiAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICA8UG9zdEhlYWRlclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgIGNvdmVySW1hZ2U9e3Bvc3QuY292ZXJJbWFnZX1cbiAgICAgICAgICAgICAgICBkYXRlPXtwb3N0LmRhdGV9XG4gICAgICAgICAgICAgICAgYXV0aG9yPXtwb3N0LmF1dGhvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFBvc3RCb2R5IGNvbnRlbnQ9e3Bvc3QuY29udGVudH0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHdpZHRoOiA1MCUgbWFyZ2luOiAxMHB4IHBhZGRpbmc6IDEwcHhcIiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgIHtsaW5rcG9zdHByZSA9PT0gLTEgPyAoXG4gICAgICAgICAgICAgICAgICA8UHJldmlvdXNBcnRpY2xlXG4gICAgICAgICAgICAgICAgICAgIHBvc3Q9e21vcmVQb3N0c1tsaW5rcG9zdHByZV19IGxpbmtudW1iZXI9e2xpbmtwb3N0cHJlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPFByZXZpb3VzQXJ0aWNsZVxuICAgICAgICAgICAgICAgICAgICBwb3N0PXttb3JlUG9zdHNbbGlua3Bvc3RwcmVdfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtsaW5rcG9zdGJhY2sgPT09IG1vcmVQb3N0cy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgICA8QmFja0FydGljbGVcbiAgICAgICAgICAgICAgICAgICAgcG9zdD17bW9yZVBvc3RzW2xpbmtwb3N0cHJlXX0gbGlua251bWJlcj17MH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxCYWNrQXJ0aWNsZVxuICAgICAgICAgICAgICAgICAgICBwb3N0PXttb3JlUG9zdHNbbGlua3Bvc3RiYWNrXX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFxuXG50eXBlIFBhcmFtcyA9IHtcbiAgcGFyYW1zOiB7XG4gICAgc2x1Zzogc3RyaW5nXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH06IFBhcmFtcykge1xuICBjb25zdCBwb3N0ID0gZ2V0UG9zdEJ5U2x1ZyhwYXJhbXMuc2x1ZywgW1xuICAgICd0aXRsZScsXG4gICAgJ2RhdGUnLFxuICAgICdzbHVnJyxcbiAgICAnYXV0aG9yJyxcbiAgICAnY29udGVudCcsXG4gICAgJ29nSW1hZ2UnLFxuICAgICdjb3ZlckltYWdlJyxcbiAgXSlcblxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgbWFya2Rvd25Ub0h0bWwocG9zdC5jb250ZW50IHx8ICcnKVxuXG4gIGNvbnN0IGFsbFBvc3RzID0gZ2V0QWxsUG9zdHMoW1xuICAgICd0aXRsZScsXG4gICAgJ2RhdGUnLFxuICAgICdzbHVnJyxcbiAgICAnYXV0aG9yJyxcbiAgICAnY292ZXJJbWFnZScsXG4gICAgJ2V4Y2VycHQnLFxuICBdKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IHtcbiAgICAgICAgLi4ucG9zdCxcbiAgICAgICAgY29udGVudCxcbiAgICAgIH0sXG4gICAgICBtb3JlUG9zdHM6IGFsbFBvc3RzLCBcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcG9zdHMgPSBnZXRBbGxQb3N0cyhbJ3NsdWcnXSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwb3N0cy5tYXAoKHBvc3RzKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBzbHVnOiBwb3N0cy5zbHVnLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIH0pLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==