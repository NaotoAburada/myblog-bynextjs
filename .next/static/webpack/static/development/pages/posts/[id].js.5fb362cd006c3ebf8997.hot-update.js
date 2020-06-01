webpackHotUpdate("static\\development\\pages\\posts\\[id].js",{

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/error.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

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
  /*
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
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

  console.log("postdata " + post.id);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 10
    }
  }, "aaaa");
  /*  
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <>
          <article className="mb-32">
            <Head>
              <title>{post.title}</title>
            </Head>
            <PostHeader title={post.title} date={post.date} />
            <PostBody content={post.blogtext} />
          </article>
        </>
      </Container>
    </Layout>
  );
  */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy8udHN4Il0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwibW9yZVBvc3RzIiwicHJldmlldyIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUF3QkEsSUFBTUEsSUFBcUIsR0FBRyxTQUF4QkEsSUFBd0IsT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsSUFBK0IsUUFBL0JBLElBQStCO0FBQUEsTUFBekJDLFNBQXlCLFFBQXpCQSxTQUF5QjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUM5RDtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQWNOLElBQUksQ0FBQ08sRUFBL0I7QUFDQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkQsQ0E3Q0Q7QUE4Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E5Q01SLEk7VUFFV0sscUQ7OztLQUZYTCxJOztBQStEU0EsbUVBQWY7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0ZBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0c1xcW2lkXS5qcy41ZmIzNjJjZDAwNmMzZWJmODk5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gXCJuZXh0L2Vycm9yXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbnRhaW5lclwiO1xuaW1wb3J0IFBvc3RCb2R5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Bvc3QtYm9keVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCBQb3N0SGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Bvc3QtaGVhZGVyXCI7XG5pbXBvcnQgUHJldmlvdXNBcnRpY2xlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3ByZXZpb3VzLWFydGljbGVcIjtcbmltcG9ydCBCYWNrQXJ0aWNsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9iYWNrLWFydGljbGVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgeyBnZXRQb3N0QnlTbHVnLCBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XG5pbXBvcnQgUG9zdFRpdGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Bvc3QtdGl0bGVcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IENNU19OQU1FIH0gZnJvbSBcIi4uLy4uL2xpYi9jb25zdGFudHNcIjtcbmltcG9ydCBtYXJrZG93blRvSHRtbCBmcm9tIFwiLi4vLi4vbGliL21hcmtkb3duVG9IdG1sXCI7XG5pbXBvcnQgUG9zdFR5cGUgZnJvbSBcIi4uLy4uL3R5cGVzL3Bvc3RcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IENNUyBmcm9tIFwiLi4vLi4vdHlwZXMvY21zXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBvc3Q6IFBvc3RUeXBlO1xuICBtb3JlUG9zdHM/OiBQb3N0VHlwZVtdO1xuICBwcmV2aWV3PzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IFBvc3Q6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHBvc3QsIG1vcmVQb3N0cywgcHJldmlldyB9KSA9PiB7XG4gIC8vY29uc3QgUG9zdDogTmV4dFBhZ2U8UHJvcHM+ID0gKHsgcG9zdCwgbW9yZVBvc3RzLCBwcmV2aWV3IH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLypcbiAgaWYgKCFyb3V0ZXIuaXNGYWxsYmFjayAmJiAhcG9zdD8uc2x1Zykge1xuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz47XG4gIH1cblxuICBsZXQgbGlua3Bvc3RwcmUgPSAtMTtcbiAgbGV0IGxpbmtwb3N0YmFjayA9IG1vcmVQb3N0cy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbW9yZVBvc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBvc3Q/LnNsdWcgPT09IG1vcmVQb3N0c1tpXS5zbHVnKSB7XG4gICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICBsaW5rcG9zdHByZSA9IGkgLSAxO1xuICAgICAgfVxuICAgICAgbGlua3Bvc3RiYWNrID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAge3JvdXRlci5pc0ZhbGxiYWNrID8gKFxuICAgICAgICAgIDxQb3N0VGl0bGU+TG9hZGluZ+KApjwvUG9zdFRpdGxlPlxuICAgICAgICApIDogKFxuICAgICAgICApfVxuKi9cbiAgY29uc29sZS5sb2coXCJwb3N0ZGF0YSBcIiArIHBvc3QuaWQpO1xuICByZXR1cm4gPGRpdj5hYWFhPC9kaXY+O1xuICAvKiAgXG4gIHJldHVybiAoXG4gICAgPExheW91dCBwcmV2aWV3PXtwcmV2aWV3fT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtYi0zMlwiPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgIDx0aXRsZT57cG9zdC50aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPFBvc3RIZWFkZXIgdGl0bGU9e3Bvc3QudGl0bGV9IGRhdGU9e3Bvc3QuZGF0ZX0gLz5cbiAgICAgICAgICAgIDxQb3N0Qm9keSBjb250ZW50PXtwb3N0LmJsb2d0ZXh0fSAvPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0xheW91dD5cbiAgKTtcbiovXG59O1xuLypcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAge2xpbmtwb3N0cHJlID09PSAtMSA/IChcbiAgICAgICAgICAgICAgICAgIDxQcmV2aW91c0FydGljbGVcbiAgICAgICAgICAgICAgICAgICAgcG9zdD17bW9yZVBvc3RzW2xpbmtwb3N0cHJlXX1cbiAgICAgICAgICAgICAgICAgICAgbGlua251bWJlcj17bGlua3Bvc3RwcmV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8UHJldmlvdXNBcnRpY2xlIHBvc3Q9e21vcmVQb3N0c1tsaW5rcG9zdHByZV19IC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7bGlua3Bvc3RiYWNrID09PSBtb3JlUG9zdHMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgPEJhY2tBcnRpY2xlIHBvc3Q9e21vcmVQb3N0c1tsaW5rcG9zdHByZV19IGxpbmtudW1iZXI9ezB9IC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxCYWNrQXJ0aWNsZSBwb3N0PXttb3JlUG9zdHNbbGlua3Bvc3RiYWNrXX0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiovXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuXG50eXBlIFBhcmFtcyA9IHtcbiAgcGFyYW1zOiB7XG4gICAgaWQ6IHN0cmluZztcbiAgfTtcbn07XG5cbi8qXG4gIGNvbnN0IGNtc3VybCA9IFwiaHR0cHM6Ly9teWJsb2ctbmV4dGpzLm1pY3JvY21zLmlvL2FwaS92MS9ibG9nXCI7XG5cbiAgY29uc3QgZmV0Y2hlciA9IGF3YWl0IGZldGNoKGNtc3VybCwge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlgtQVBJLUtFWVwiOiBcImMyYmYzMGQzLTFkYTItNDVhMy04MzI3LWI5OTJiOTAwNmFmM1wiLFxuICAgIH0sXG4gIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgLy8gU1dS44KS5L2/55So44GX44Gm44GuQVBJ5ZG844Gz5Ye644GXXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUjxDTVMsIHt9PihjbXN1cmwsIGZldGNoZXIpO1xuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZXJyb3I8L2Rpdj47XG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PjtcblxuICBjb25zdCBhcnRpY2xlTGlzdCA9IGRhdGEuY29udGVudHMucmV2ZXJzZSgpO1xuICBjb25zdCBwb3N0ID0gYXJ0aWNsZUxpc3RbMF07XG4gIGNvbnN0IGFsbFBvc3RzID0gYXJ0aWNsZUxpc3Quc2xpY2UoMSk7XG5cbiAgY29uc3QgY29udGVudCA9IGF3YWl0IG1hcmtkb3duVG9IdG1sKHBvc3QuYmxvZ3RleHQgfHwgXCJcIik7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdDoge1xuICAgICAgICAuLi5wb3N0LFxuICAgICAgICBjb250ZW50LFxuICAgICAgfSxcbiAgICAgIG1vcmVQb3N0czogYWxsUG9zdHMsXG4gICAgfSxcbiAgfTtcbiovXG4vKlxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0OiBwYXJhbXMucG9zdCxcbiAgICAgIG1vcmVQb3N0czogcGFyYW1zLm1vcmVQb3N0cyxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHBvc3QgPSBnZXRQb3N0QnlTbHVnKHBhcmFtcy5zbHVnLCBbXG4gICAgXCJ0aXRsZVwiLFxuICAgIFwiZGF0ZVwiLFxuICAgIFwic2x1Z1wiLFxuICAgIFwiYXV0aG9yXCIsXG4gICAgXCJjb250ZW50XCIsXG4gICAgXCJvZ0ltYWdlXCIsXG4gICAgXCJjb3ZlckltYWdlXCIsXG4gIF0pO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBtYXJrZG93blRvSHRtbChwb3N0LmNvbnRlbnQgfHwgXCJcIik7XG5cbiAgY29uc3QgYWxsUG9zdHMgPSBnZXRBbGxQb3N0cyhbXG4gICAgXCJ0aXRsZVwiLFxuICAgIFwiZGF0ZVwiLFxuICAgIFwic2x1Z1wiLFxuICAgIFwiYXV0aG9yXCIsXG4gICAgXCJjb3ZlckltYWdlXCIsXG4gICAgXCJleGNlcnB0XCIsXG4gIF0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IHtcbiAgICAgICAgLi4ucG9zdCxcbiAgICAgICAgY29udGVudCxcbiAgICAgIH0sXG4gICAgICBtb3JlUG9zdHM6IGFsbFBvc3RzLFxuICAgIH0sXG4gIH07XG4qL1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGNtc3VybCA9IFwiaHR0cHM6Ly9teWJsb2ctbmV4dGpzLm1pY3JvY21zLmlvL2FwaS92MS9ibG9nXCI7XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goY21zdXJsLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiWC1BUEktS0VZXCI6IFwiYzJiZjMwZDMtMWRhMi00NWEzLTgzMjctYjk5MmI5MDA2YWYzXCIsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zdCBhcnRpY2xlTGlzdCA9IHBvc3RzLmNvbnRlbnRzLnJldmVyc2UoKTtcblxuICBjb25zdCBwYXRocyA9IGFydGljbGVMaXN0Lm1hcCgoYXJ0aWNsZSkgPT4gYC9wb3N0cy8ke2FydGljbGUuaWQudG9TdHJpbmcoKX1gKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiB0cnVlLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfTogUGFyYW1zKSB7XG4gIGNvbnN0IGlkID0gcGFyYW1zLmlkO1xuXG4gIGNvbnN0IGNtc3VybCA9IGBodHRwczovL215YmxvZy1uZXh0anMubWljcm9jbXMuaW8vYXBpL3YxL2Jsb2cvJHtpZH1gO1xuICAvL2NvbnN0IGNtc3VybCA9IGBodHRwczovL215YmxvZy1uZXh0anMubWljcm9jbXMuaW8vYXBpL3YxL2Jsb2cvYDtcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChjbXN1cmwsIHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJYLUFQSS1LRVlcIjogXCJjMmJmMzBkMy0xZGEyLTQ1YTMtODMyNy1iOTkyYjkwMDZhZjNcIixcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpO1xuICBjb25zdCBhcnRpY2xlID0gcG9zdHMuY29udGVudHM7XG5cbiAgLy8gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBtYXJrZG93blRvSHRtbChhcnRpY2xlLmJsb2d0ZXh0IHx8IFwiXCIpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IHtcbiAgICAgICAgLi4uYXJ0aWNsZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn1cbi8qXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL3Bvc3RzXCIpO1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHBvc3QpID0+ICh7XG4gICAgcGFyYW1zOiB7IGlkOiBwb3N0LmlkIH0sXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcblxuY29uc3QgcG9zdHMgPSBnZXRBbGxQb3N0cyhbXCJzbHVnXCJdKTtcblxucmV0dXJuIHtcbiAgcGF0aHM6IGFydGljbGVMaXN0Lm1hcCgoYXJ0aWNsZUxpc3QpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHNsdWc6IGFydGljbGVMaXN0LmlkLFxuICAgICAgfSxcbiAgICB9O1xuICB9KSxcbiAgZmFsbGJhY2s6IGZhbHNlLFxufTtcbiovXG4iXSwic291cmNlUm9vdCI6IiJ9