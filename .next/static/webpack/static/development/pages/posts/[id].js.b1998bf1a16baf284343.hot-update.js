webpackHotUpdate("static\\development\\pages\\posts\\[id].js",{

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
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
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
var _this = undefined,
    _jsxFileName = "D:\\workspace_nextjs\\myblog-bynextjs\\pages\\posts\\[id].tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Post = function Post(_ref) {
  _s();

  var post = _ref.post,
      morePosts = _ref.morePosts,
      preview = _ref.preview;
  //const Post: NextPage<Props> = ({ post, morePosts, preview }) => {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  if (!router.isFallback && !(post === null || post === void 0 ? void 0 : post.slug)) {
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_2___default.a, {
      statusCode: 404,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 12
      }
    });
  }
  /*
  let linkpostpre = -1;
  let linkpostback = morePosts.length;
  for (let i = 0; i < morePosts.length; i++) {
    if (post?.slug === morePosts[i].slug) {
      if (i !== 0) {
        linkpostpre = i - 1;
      }
      linkpostback = i + 1;
    }
  }
   {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
        )}
  */


  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    preview: preview,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("article", {
    className: "mb-32",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, post.title)), __jsx(_components_post_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: post.title,
    date: post.date,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx(_components_post_body__WEBPACK_IMPORTED_MODULE_4__["default"], {
    content: post.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  })))));
};
/*
              <div className="flex">
                {linkpostpre === -1 ? (
                  <PreviousArticle
                    post={morePosts[linkpostpre]}
                    linknumber={linkpostpre}
                  />
                ) : (
                  <PreviousArticle post={morePosts[linkpostpre]} />
                )}
                {linkpostback === morePosts.length ? (
                  <BackArticle post={morePosts[linkpostpre]} linknumber={0} />
                ) : (
                  <BackArticle post={morePosts[linkpostback]} />
                )}
              </div>
*/


_s(Post, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Post;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Post);
/*
  const cmsurl = "https://myblog-nextjs.microcms.io/api/v1/blog";

  const fetcher = await fetch(cmsurl, {
    method: "GET",
    headers: {
      "X-API-KEY": "c2bf30d3-1da2-45a3-8327-b992b9006af3",
    },
  }).then((res) => res.json());

  // SWRを使用してのAPI呼び出し
  const { data, error } = useSWR<CMS, {}>(cmsurl, fetcher);

  if (error) return <div>error</div>;
  if (!data) return <div>loading...</div>;

  const articleList = data.contents.reverse();
  const post = articleList[0];
  const allPosts = articleList.slice(1);

  const content = await markdownToHtml(post.blogtext || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
      morePosts: allPosts,
    },
  };
*/

/*
  return {
    props: {
      post: params.post,
      morePosts: params.morePosts,
    },
  };

  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  const content = await markdownToHtml(post.content || "");

  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: {
      post: {
        ...post,
        content,
      },
      morePosts: allPosts,
    },
  };
*/

/*
  const res = await fetch("/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false,
  };

const posts = getAllPosts(["slug"]);

return {
  paths: articleList.map((articleList) => {
    return {
      params: {
        slug: articleList.id,
      },
    };
  }),
  fallback: false,
};
*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy8udHN4Il0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwibW9yZVBvc3RzIiwicHJldmlldyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJzbHVnIiwidGl0bGUiLCJkYXRlIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBOztBQWFBLElBQU1BLElBQXFCLEdBQUcsU0FBeEJBLElBQXdCLE9BQWtDO0FBQUE7O0FBQUEsTUFBL0JDLElBQStCLFFBQS9CQSxJQUErQjtBQUFBLE1BQXpCQyxTQUF5QixRQUF6QkEsU0FBeUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDOUQ7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQUksQ0FBQ0QsTUFBTSxDQUFDRSxVQUFSLElBQXNCLEVBQUNMLElBQUQsYUFBQ0EsSUFBRCx1QkFBQ0EsSUFBSSxDQUFFTSxJQUFQLENBQTFCLEVBQXVDO0FBQ3JDLFdBQU8sTUFBQyxpREFBRDtBQUFXLGdCQUFVLEVBQUUsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0Q7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLFNBQ0UsTUFBQywwREFBRDtBQUFRLFdBQU8sRUFBRUosT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsbUVBQ0U7QUFBUyxhQUFTLEVBQUMsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUYsSUFBSSxDQUFDTyxLQUFiLENBREYsQ0FERixFQUlFLE1BQUMsK0RBQUQ7QUFBWSxTQUFLLEVBQUVQLElBQUksQ0FBQ08sS0FBeEI7QUFBK0IsUUFBSSxFQUFFUCxJQUFJLENBQUNRLElBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFLE1BQUMsNkRBQUQ7QUFBVSxXQUFPLEVBQUVSLElBQUksQ0FBQ1MsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBREYsQ0FGRixDQURGLENBREY7QUFnQkQsQ0F4Q0Q7QUF5Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F6Q01WLEk7VUFFV0sscUQ7OztLQUZYTCxJOztBQTBEU0EsbUVBQWY7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUZBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0c1xcW2lkXS5qcy5iMTk5OGJmMWExNmJhZjI4NDM0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gXCJuZXh0L2Vycm9yXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbnRhaW5lclwiO1xuaW1wb3J0IFBvc3RCb2R5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Bvc3QtYm9keVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCBQb3N0SGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Bvc3QtaGVhZGVyXCI7XG5pbXBvcnQgUHJldmlvdXNBcnRpY2xlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3ByZXZpb3VzLWFydGljbGVcIjtcbmltcG9ydCBCYWNrQXJ0aWNsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9iYWNrLWFydGljbGVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgeyBnZXRQb3N0QnlTbHVnLCBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XG5pbXBvcnQgUG9zdFRpdGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Bvc3QtdGl0bGVcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IENNU19OQU1FIH0gZnJvbSBcIi4uLy4uL2xpYi9jb25zdGFudHNcIjtcbmltcG9ydCBtYXJrZG93blRvSHRtbCBmcm9tIFwiLi4vLi4vbGliL21hcmtkb3duVG9IdG1sXCI7XG5pbXBvcnQgUG9zdFR5cGUgZnJvbSBcIi4uLy4uL3R5cGVzL3Bvc3RcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IENNUyBmcm9tIFwiLi4vLi4vdHlwZXMvY21zXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBvc3Q6IFBvc3RUeXBlO1xuICBtb3JlUG9zdHM/OiBQb3N0VHlwZVtdO1xuICBwcmV2aWV3PzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IFBvc3Q6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHBvc3QsIG1vcmVQb3N0cywgcHJldmlldyB9KSA9PiB7XG4gIC8vY29uc3QgUG9zdDogTmV4dFBhZ2U8UHJvcHM+ID0gKHsgcG9zdCwgbW9yZVBvc3RzLCBwcmV2aWV3IH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgaWYgKCFyb3V0ZXIuaXNGYWxsYmFjayAmJiAhcG9zdD8uc2x1Zykge1xuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz47XG4gIH1cbiAgLypcbiAgbGV0IGxpbmtwb3N0cHJlID0gLTE7XG4gIGxldCBsaW5rcG9zdGJhY2sgPSBtb3JlUG9zdHMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1vcmVQb3N0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwb3N0Py5zbHVnID09PSBtb3JlUG9zdHNbaV0uc2x1Zykge1xuICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgbGlua3Bvc3RwcmUgPSBpIC0gMTtcbiAgICAgIH1cbiAgICAgIGxpbmtwb3N0YmFjayA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIHtyb3V0ZXIuaXNGYWxsYmFjayA/IChcbiAgICAgICAgICA8UG9zdFRpdGxlPkxvYWRpbmfigKY8L1Bvc3RUaXRsZT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgKX1cbiovXG4gIHJldHVybiAoXG4gICAgPExheW91dCBwcmV2aWV3PXtwcmV2aWV3fT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtYi0zMlwiPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgIDx0aXRsZT57cG9zdC50aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPFBvc3RIZWFkZXIgdGl0bGU9e3Bvc3QudGl0bGV9IGRhdGU9e3Bvc3QuZGF0ZX0gLz5cbiAgICAgICAgICAgIDxQb3N0Qm9keSBjb250ZW50PXtwb3N0LmNvbnRlbnR9IC8+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8Lz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbi8qXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIHtsaW5rcG9zdHByZSA9PT0gLTEgPyAoXG4gICAgICAgICAgICAgICAgICA8UHJldmlvdXNBcnRpY2xlXG4gICAgICAgICAgICAgICAgICAgIHBvc3Q9e21vcmVQb3N0c1tsaW5rcG9zdHByZV19XG4gICAgICAgICAgICAgICAgICAgIGxpbmtudW1iZXI9e2xpbmtwb3N0cHJlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPFByZXZpb3VzQXJ0aWNsZSBwb3N0PXttb3JlUG9zdHNbbGlua3Bvc3RwcmVdfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2xpbmtwb3N0YmFjayA9PT0gbW9yZVBvc3RzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgIDxCYWNrQXJ0aWNsZSBwb3N0PXttb3JlUG9zdHNbbGlua3Bvc3RwcmVdfSBsaW5rbnVtYmVyPXswfSAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8QmFja0FydGljbGUgcG9zdD17bW9yZVBvc3RzW2xpbmtwb3N0YmFja119IC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4qL1xuZXhwb3J0IGRlZmF1bHQgUG9zdDtcblxudHlwZSBQYXJhbXMgPSB7XG4gIHBhcmFtczoge1xuICAgIGlkOiBzdHJpbmc7XG4gIH07XG59O1xuXG4vKlxuICBjb25zdCBjbXN1cmwgPSBcImh0dHBzOi8vbXlibG9nLW5leHRqcy5taWNyb2Ntcy5pby9hcGkvdjEvYmxvZ1wiO1xuXG4gIGNvbnN0IGZldGNoZXIgPSBhd2FpdCBmZXRjaChjbXN1cmwsIHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJYLUFQSS1LRVlcIjogXCJjMmJmMzBkMy0xZGEyLTQ1YTMtODMyNy1iOTkyYjkwMDZhZjNcIixcbiAgICB9LFxuICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIC8vIFNXUuOCkuS9v+eUqOOBl+OBpuOBrkFQSeWRvOOBs+WHuuOBl1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1I8Q01TLCB7fT4oY21zdXJsLCBmZXRjaGVyKTtcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmVycm9yPC9kaXY+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj47XG5cbiAgY29uc3QgYXJ0aWNsZUxpc3QgPSBkYXRhLmNvbnRlbnRzLnJldmVyc2UoKTtcbiAgY29uc3QgcG9zdCA9IGFydGljbGVMaXN0WzBdO1xuICBjb25zdCBhbGxQb3N0cyA9IGFydGljbGVMaXN0LnNsaWNlKDEpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBtYXJrZG93blRvSHRtbChwb3N0LmJsb2d0ZXh0IHx8IFwiXCIpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IHtcbiAgICAgICAgLi4ucG9zdCxcbiAgICAgICAgY29udGVudCxcbiAgICAgIH0sXG4gICAgICBtb3JlUG9zdHM6IGFsbFBvc3RzLFxuICAgIH0sXG4gIH07XG4qL1xuLypcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdDogcGFyYW1zLnBvc3QsXG4gICAgICBtb3JlUG9zdHM6IHBhcmFtcy5tb3JlUG9zdHMsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBwb3N0ID0gZ2V0UG9zdEJ5U2x1ZyhwYXJhbXMuc2x1ZywgW1xuICAgIFwidGl0bGVcIixcbiAgICBcImRhdGVcIixcbiAgICBcInNsdWdcIixcbiAgICBcImF1dGhvclwiLFxuICAgIFwiY29udGVudFwiLFxuICAgIFwib2dJbWFnZVwiLFxuICAgIFwiY292ZXJJbWFnZVwiLFxuICBdKTtcblxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgbWFya2Rvd25Ub0h0bWwocG9zdC5jb250ZW50IHx8IFwiXCIpO1xuXG4gIGNvbnN0IGFsbFBvc3RzID0gZ2V0QWxsUG9zdHMoW1xuICAgIFwidGl0bGVcIixcbiAgICBcImRhdGVcIixcbiAgICBcInNsdWdcIixcbiAgICBcImF1dGhvclwiLFxuICAgIFwiY292ZXJJbWFnZVwiLFxuICAgIFwiZXhjZXJwdFwiLFxuICBdKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0OiB7XG4gICAgICAgIC4uLnBvc3QsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICB9LFxuICAgICAgbW9yZVBvc3RzOiBhbGxQb3N0cyxcbiAgICB9LFxuICB9O1xuKi9cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBjbXN1cmwgPSBcImh0dHBzOi8vbXlibG9nLW5leHRqcy5taWNyb2Ntcy5pby9hcGkvdjEvYmxvZ1wiO1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGNtc3VybCwge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlgtQVBJLUtFWVwiOiBcImMyYmYzMGQzLTFkYTItNDVhMy04MzI3LWI5OTJiOTAwNmFmM1wiLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc3QgYXJ0aWNsZUxpc3QgPSBwb3N0cy5jb250ZW50cy5yZXZlcnNlKCk7XG5cbiAgY29uc3QgcGF0aHMgPSBhcnRpY2xlTGlzdC5tYXAoKGFydGljbGUpID0+IGAvcG9zdHMvJHthcnRpY2xlLmlkLnRvU3RyaW5nKCl9YCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH06IFBhcmFtcykge1xuICBjb25zdCBpZCA9IHBhcmFtcy5pZDtcblxuICBjb25zdCBjbXN1cmwgPSBgaHR0cHM6Ly9teWJsb2ctbmV4dGpzLm1pY3JvY21zLmlvL2FwaS92MS9ibG9nLyR7aWR9YDtcbiAgLy9jb25zdCBjbXN1cmwgPSBgaHR0cHM6Ly9teWJsb2ctbmV4dGpzLm1pY3JvY21zLmlvL2FwaS92MS9ibG9nL2A7XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goY21zdXJsLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiWC1BUEktS0VZXCI6IFwiYzJiZjMwZDMtMWRhMi00NWEzLTgzMjctYjk5MmI5MDA2YWYzXCIsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IG1hcmtkb3duVG9IdG1sKHBvc3RzLmJsb2d0ZXh0IHx8IFwiXCIpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IHtcbiAgICAgICAgLi4ucG9zdHMsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59XG4vKlxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9wb3N0c1wiKTtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0KSA9PiAoe1xuICAgIHBhcmFtczogeyBpZDogcG9zdC5pZCB9LFxuICB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG5cbmNvbnN0IHBvc3RzID0gZ2V0QWxsUG9zdHMoW1wic2x1Z1wiXSk7XG5cbnJldHVybiB7XG4gIHBhdGhzOiBhcnRpY2xlTGlzdC5tYXAoKGFydGljbGVMaXN0KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzbHVnOiBhcnRpY2xlTGlzdC5pZCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSksXG4gIGZhbGxiYWNrOiBmYWxzZSxcbn07XG4qL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==