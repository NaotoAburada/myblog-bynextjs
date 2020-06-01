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
    content: post.blogtext,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy8udHN4Il0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwibW9yZVBvc3RzIiwicHJldmlldyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJzbHVnIiwidGl0bGUiLCJkYXRlIiwiYmxvZ3RleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTs7QUFhQSxJQUFNQSxJQUFxQixHQUFHLFNBQXhCQSxJQUF3QixPQUFrQztBQUFBOztBQUFBLE1BQS9CQyxJQUErQixRQUEvQkEsSUFBK0I7QUFBQSxNQUF6QkMsU0FBeUIsUUFBekJBLFNBQXlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzlEO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFJLENBQUNELE1BQU0sQ0FBQ0UsVUFBUixJQUFzQixFQUFDTCxJQUFELGFBQUNBLElBQUQsdUJBQUNBLElBQUksQ0FBRU0sSUFBUCxDQUExQixFQUF1QztBQUNyQyxXQUFPLE1BQUMsaURBQUQ7QUFBVyxnQkFBVSxFQUFFLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNEO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxXQUFPLEVBQUVKLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLG1FQUNFO0FBQVMsYUFBUyxFQUFDLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFGLElBQUksQ0FBQ08sS0FBYixDQURGLENBREYsRUFJRSxNQUFDLCtEQUFEO0FBQVksU0FBSyxFQUFFUCxJQUFJLENBQUNPLEtBQXhCO0FBQStCLFFBQUksRUFBRVAsSUFBSSxDQUFDUSxJQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLDZEQUFEO0FBQVUsV0FBTyxFQUFFUixJQUFJLENBQUNTLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGLENBRkYsQ0FERixDQURGO0FBZ0JELENBeENEO0FBeUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBekNNVixJO1VBRVdLLHFEOzs7S0FGWEwsSTs7QUEwRFNBLG1FQUFmO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFGQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHNcXFtpZF0uanMuNTUzMjY1MTAxMWM0NDg4YWIxODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEVycm9yUGFnZSBmcm9tIFwibmV4dC9lcnJvclwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb250YWluZXJcIjtcbmltcG9ydCBQb3N0Qm9keSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3N0LWJvZHlcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgUG9zdEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3N0LWhlYWRlclwiO1xuaW1wb3J0IFByZXZpb3VzQXJ0aWNsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcmV2aW91cy1hcnRpY2xlXCI7XG5pbXBvcnQgQmFja0FydGljbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFjay1hcnRpY2xlXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgZ2V0UG9zdEJ5U2x1ZywgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiO1xuaW1wb3J0IFBvc3RUaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3N0LXRpdGxlXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBDTVNfTkFNRSB9IGZyb20gXCIuLi8uLi9saWIvY29uc3RhbnRzXCI7XG5pbXBvcnQgbWFya2Rvd25Ub0h0bWwgZnJvbSBcIi4uLy4uL2xpYi9tYXJrZG93blRvSHRtbFwiO1xuaW1wb3J0IFBvc3RUeXBlIGZyb20gXCIuLi8uLi90eXBlcy9wb3N0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBDTVMgZnJvbSBcIi4uLy4uL3R5cGVzL2Ntc1wiO1xuXG50eXBlIFByb3BzID0ge1xuICBwb3N0OiBQb3N0VHlwZTtcbiAgbW9yZVBvc3RzPzogUG9zdFR5cGVbXTtcbiAgcHJldmlldz86IGJvb2xlYW47XG59O1xuXG5jb25zdCBQb3N0OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBwb3N0LCBtb3JlUG9zdHMsIHByZXZpZXcgfSkgPT4ge1xuICAvL2NvbnN0IFBvc3Q6IE5leHRQYWdlPFByb3BzPiA9ICh7IHBvc3QsIG1vcmVQb3N0cywgcHJldmlldyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGlmICghcm91dGVyLmlzRmFsbGJhY2sgJiYgIXBvc3Q/LnNsdWcpIHtcbiAgICByZXR1cm4gPEVycm9yUGFnZSBzdGF0dXNDb2RlPXs0MDR9IC8+O1xuICB9XG4gIC8qXG4gIGxldCBsaW5rcG9zdHByZSA9IC0xO1xuICBsZXQgbGlua3Bvc3RiYWNrID0gbW9yZVBvc3RzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3JlUG9zdHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocG9zdD8uc2x1ZyA9PT0gbW9yZVBvc3RzW2ldLnNsdWcpIHtcbiAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgIGxpbmtwb3N0cHJlID0gaSAtIDE7XG4gICAgICB9XG4gICAgICBsaW5rcG9zdGJhY2sgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICB7cm91dGVyLmlzRmFsbGJhY2sgPyAoXG4gICAgICAgICAgPFBvc3RUaXRsZT5Mb2FkaW5n4oCmPC9Qb3N0VGl0bGU+XG4gICAgICAgICkgOiAoXG4gICAgICAgICl9XG4qL1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgcHJldmlldz17cHJldmlld30+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDw+XG4gICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWItMzJcIj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICA8dGl0bGU+e3Bvc3QudGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxQb3N0SGVhZGVyIHRpdGxlPXtwb3N0LnRpdGxlfSBkYXRlPXtwb3N0LmRhdGV9IC8+XG4gICAgICAgICAgICA8UG9zdEJvZHkgY29udGVudD17cG9zdC5ibG9ndGV4dH0gLz5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuLypcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAge2xpbmtwb3N0cHJlID09PSAtMSA/IChcbiAgICAgICAgICAgICAgICAgIDxQcmV2aW91c0FydGljbGVcbiAgICAgICAgICAgICAgICAgICAgcG9zdD17bW9yZVBvc3RzW2xpbmtwb3N0cHJlXX1cbiAgICAgICAgICAgICAgICAgICAgbGlua251bWJlcj17bGlua3Bvc3RwcmV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8UHJldmlvdXNBcnRpY2xlIHBvc3Q9e21vcmVQb3N0c1tsaW5rcG9zdHByZV19IC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7bGlua3Bvc3RiYWNrID09PSBtb3JlUG9zdHMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgPEJhY2tBcnRpY2xlIHBvc3Q9e21vcmVQb3N0c1tsaW5rcG9zdHByZV19IGxpbmtudW1iZXI9ezB9IC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxCYWNrQXJ0aWNsZSBwb3N0PXttb3JlUG9zdHNbbGlua3Bvc3RiYWNrXX0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiovXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuXG50eXBlIFBhcmFtcyA9IHtcbiAgcGFyYW1zOiB7XG4gICAgaWQ6IHN0cmluZztcbiAgfTtcbn07XG5cbi8qXG4gIGNvbnN0IGNtc3VybCA9IFwiaHR0cHM6Ly9teWJsb2ctbmV4dGpzLm1pY3JvY21zLmlvL2FwaS92MS9ibG9nXCI7XG5cbiAgY29uc3QgZmV0Y2hlciA9IGF3YWl0IGZldGNoKGNtc3VybCwge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlgtQVBJLUtFWVwiOiBcImMyYmYzMGQzLTFkYTItNDVhMy04MzI3LWI5OTJiOTAwNmFmM1wiLFxuICAgIH0sXG4gIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgLy8gU1dS44KS5L2/55So44GX44Gm44GuQVBJ5ZG844Gz5Ye644GXXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUjxDTVMsIHt9PihjbXN1cmwsIGZldGNoZXIpO1xuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZXJyb3I8L2Rpdj47XG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PjtcblxuICBjb25zdCBhcnRpY2xlTGlzdCA9IGRhdGEuY29udGVudHMucmV2ZXJzZSgpO1xuICBjb25zdCBwb3N0ID0gYXJ0aWNsZUxpc3RbMF07XG4gIGNvbnN0IGFsbFBvc3RzID0gYXJ0aWNsZUxpc3Quc2xpY2UoMSk7XG5cbiAgY29uc3QgY29udGVudCA9IGF3YWl0IG1hcmtkb3duVG9IdG1sKHBvc3QuYmxvZ3RleHQgfHwgXCJcIik7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdDoge1xuICAgICAgICAuLi5wb3N0LFxuICAgICAgICBjb250ZW50LFxuICAgICAgfSxcbiAgICAgIG1vcmVQb3N0czogYWxsUG9zdHMsXG4gICAgfSxcbiAgfTtcbiovXG4vKlxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0OiBwYXJhbXMucG9zdCxcbiAgICAgIG1vcmVQb3N0czogcGFyYW1zLm1vcmVQb3N0cyxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHBvc3QgPSBnZXRQb3N0QnlTbHVnKHBhcmFtcy5zbHVnLCBbXG4gICAgXCJ0aXRsZVwiLFxuICAgIFwiZGF0ZVwiLFxuICAgIFwic2x1Z1wiLFxuICAgIFwiYXV0aG9yXCIsXG4gICAgXCJjb250ZW50XCIsXG4gICAgXCJvZ0ltYWdlXCIsXG4gICAgXCJjb3ZlckltYWdlXCIsXG4gIF0pO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBtYXJrZG93blRvSHRtbChwb3N0LmNvbnRlbnQgfHwgXCJcIik7XG5cbiAgY29uc3QgYWxsUG9zdHMgPSBnZXRBbGxQb3N0cyhbXG4gICAgXCJ0aXRsZVwiLFxuICAgIFwiZGF0ZVwiLFxuICAgIFwic2x1Z1wiLFxuICAgIFwiYXV0aG9yXCIsXG4gICAgXCJjb3ZlckltYWdlXCIsXG4gICAgXCJleGNlcnB0XCIsXG4gIF0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IHtcbiAgICAgICAgLi4ucG9zdCxcbiAgICAgICAgY29udGVudCxcbiAgICAgIH0sXG4gICAgICBtb3JlUG9zdHM6IGFsbFBvc3RzLFxuICAgIH0sXG4gIH07XG4qL1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGNtc3VybCA9IFwiaHR0cHM6Ly9teWJsb2ctbmV4dGpzLm1pY3JvY21zLmlvL2FwaS92MS9ibG9nXCI7XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goY21zdXJsLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiWC1BUEktS0VZXCI6IFwiYzJiZjMwZDMtMWRhMi00NWEzLTgzMjctYjk5MmI5MDA2YWYzXCIsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zdCBhcnRpY2xlTGlzdCA9IHBvc3RzLmNvbnRlbnRzLnJldmVyc2UoKTtcblxuICBjb25zdCBwYXRocyA9IGFydGljbGVMaXN0Lm1hcCgoYXJ0aWNsZSkgPT4gYC9wb3N0cy8ke2FydGljbGUuaWQudG9TdHJpbmcoKX1gKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiB0cnVlLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfTogUGFyYW1zKSB7XG4gIGNvbnN0IGlkID0gcGFyYW1zLmlkO1xuXG4gIGNvbnN0IGNtc3VybCA9IGBodHRwczovL215YmxvZy1uZXh0anMubWljcm9jbXMuaW8vYXBpL3YxL2Jsb2cvJHtpZH1gO1xuICAvL2NvbnN0IGNtc3VybCA9IGBodHRwczovL215YmxvZy1uZXh0anMubWljcm9jbXMuaW8vYXBpL3YxL2Jsb2cvYDtcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChjbXN1cmwsIHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJYLUFQSS1LRVlcIjogXCJjMmJmMzBkMy0xZGEyLTQ1YTMtODMyNy1iOTkyYjkwMDZhZjNcIixcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpO1xuICAvLyAgY29uc3QgY29udGVudCA9IGF3YWl0IG1hcmtkb3duVG9IdG1sKHBvc3RzLmJsb2d0ZXh0IHx8IFwiXCIpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IHtcbiAgICAgICAgLi4ucG9zdHMsXG4gICAgICAgIC8vICAgICAgICBjb250ZW50LFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufVxuLypcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvcG9zdHNcIik7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zdCBwYXRocyA9IHBvc3RzLm1hcCgocG9zdCkgPT4gKHtcbiAgICBwYXJhbXM6IHsgaWQ6IHBvc3QuaWQgfSxcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xuXG5jb25zdCBwb3N0cyA9IGdldEFsbFBvc3RzKFtcInNsdWdcIl0pO1xuXG5yZXR1cm4ge1xuICBwYXRoczogYXJ0aWNsZUxpc3QubWFwKChhcnRpY2xlTGlzdCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2x1ZzogYXJ0aWNsZUxpc3QuaWQsXG4gICAgICB9LFxuICAgIH07XG4gIH0pLFxuICBmYWxsYmFjazogZmFsc2UsXG59O1xuKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=