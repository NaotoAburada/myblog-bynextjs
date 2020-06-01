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

  console.log("postdata " + post);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy8udHN4Il0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwibW9yZVBvc3RzIiwicHJldmlldyIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBd0JBLElBQU1BLElBQXFCLEdBQUcsU0FBeEJBLElBQXdCLE9BQWtDO0FBQUE7O0FBQUEsTUFBL0JDLElBQStCLFFBQS9CQSxJQUErQjtBQUFBLE1BQXpCQyxTQUF5QixRQUF6QkEsU0FBeUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDOUQ7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFjTixJQUExQjtBQUNBLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCRCxDQTdDRDtBQThDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTlDTUQsSTtVQUVXSyxxRDs7O0tBRlhMLEk7O0FBK0RTQSxtRUFBZjtBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1RkEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzXFxbaWRdLmpzLjhmZDg4ZTNkMWZiMTdlZjY5MGI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSBcIm5leHQvZXJyb3JcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVyXCI7XG5pbXBvcnQgUG9zdEJvZHkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdC1ib2R5XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IFBvc3RIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdC1oZWFkZXJcIjtcbmltcG9ydCBQcmV2aW91c0FydGljbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJldmlvdXMtYXJ0aWNsZVwiO1xuaW1wb3J0IEJhY2tBcnRpY2xlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2JhY2stYXJ0aWNsZVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB7IGdldFBvc3RCeVNsdWcsIGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcbmltcG9ydCBQb3N0VGl0bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdC10aXRsZVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgQ01TX05BTUUgfSBmcm9tIFwiLi4vLi4vbGliL2NvbnN0YW50c1wiO1xuaW1wb3J0IG1hcmtkb3duVG9IdG1sIGZyb20gXCIuLi8uLi9saWIvbWFya2Rvd25Ub0h0bWxcIjtcbmltcG9ydCBQb3N0VHlwZSBmcm9tIFwiLi4vLi4vdHlwZXMvcG9zdFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgQ01TIGZyb20gXCIuLi8uLi90eXBlcy9jbXNcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgcG9zdDogUG9zdFR5cGU7XG4gIG1vcmVQb3N0cz86IFBvc3RUeXBlW107XG4gIHByZXZpZXc/OiBib29sZWFuO1xufTtcblxuY29uc3QgUG9zdDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgcG9zdCwgbW9yZVBvc3RzLCBwcmV2aWV3IH0pID0+IHtcbiAgLy9jb25zdCBQb3N0OiBOZXh0UGFnZTxQcm9wcz4gPSAoeyBwb3N0LCBtb3JlUG9zdHMsIHByZXZpZXcgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAvKlxuICBpZiAoIXJvdXRlci5pc0ZhbGxiYWNrICYmICFwb3N0Py5zbHVnKSB7XG4gICAgcmV0dXJuIDxFcnJvclBhZ2Ugc3RhdHVzQ29kZT17NDA0fSAvPjtcbiAgfVxuXG4gIGxldCBsaW5rcG9zdHByZSA9IC0xO1xuICBsZXQgbGlua3Bvc3RiYWNrID0gbW9yZVBvc3RzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3JlUG9zdHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocG9zdD8uc2x1ZyA9PT0gbW9yZVBvc3RzW2ldLnNsdWcpIHtcbiAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgIGxpbmtwb3N0cHJlID0gaSAtIDE7XG4gICAgICB9XG4gICAgICBsaW5rcG9zdGJhY2sgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICB7cm91dGVyLmlzRmFsbGJhY2sgPyAoXG4gICAgICAgICAgPFBvc3RUaXRsZT5Mb2FkaW5n4oCmPC9Qb3N0VGl0bGU+XG4gICAgICAgICkgOiAoXG4gICAgICAgICl9XG4qL1xuICBjb25zb2xlLmxvZyhcInBvc3RkYXRhIFwiICsgcG9zdCk7XG4gIHJldHVybiA8ZGl2PmFhYWE8L2Rpdj47XG4gIC8qICBcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHByZXZpZXc9e3ByZXZpZXd9PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8PlxuICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1iLTMyXCI+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8UG9zdEhlYWRlciB0aXRsZT17cG9zdC50aXRsZX0gZGF0ZT17cG9zdC5kYXRlfSAvPlxuICAgICAgICAgICAgPFBvc3RCb2R5IGNvbnRlbnQ9e3Bvc3QuYmxvZ3RleHR9IC8+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8Lz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApO1xuKi9cbn07XG4vKlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICB7bGlua3Bvc3RwcmUgPT09IC0xID8gKFxuICAgICAgICAgICAgICAgICAgPFByZXZpb3VzQXJ0aWNsZVxuICAgICAgICAgICAgICAgICAgICBwb3N0PXttb3JlUG9zdHNbbGlua3Bvc3RwcmVdfVxuICAgICAgICAgICAgICAgICAgICBsaW5rbnVtYmVyPXtsaW5rcG9zdHByZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxQcmV2aW91c0FydGljbGUgcG9zdD17bW9yZVBvc3RzW2xpbmtwb3N0cHJlXX0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtsaW5rcG9zdGJhY2sgPT09IG1vcmVQb3N0cy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgICA8QmFja0FydGljbGUgcG9zdD17bW9yZVBvc3RzW2xpbmtwb3N0cHJlXX0gbGlua251bWJlcj17MH0gLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPEJhY2tBcnRpY2xlIHBvc3Q9e21vcmVQb3N0c1tsaW5rcG9zdGJhY2tdfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuKi9cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG5cbnR5cGUgUGFyYW1zID0ge1xuICBwYXJhbXM6IHtcbiAgICBpZDogc3RyaW5nO1xuICB9O1xufTtcblxuLypcbiAgY29uc3QgY21zdXJsID0gXCJodHRwczovL215YmxvZy1uZXh0anMubWljcm9jbXMuaW8vYXBpL3YxL2Jsb2dcIjtcblxuICBjb25zdCBmZXRjaGVyID0gYXdhaXQgZmV0Y2goY21zdXJsLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiWC1BUEktS0VZXCI6IFwiYzJiZjMwZDMtMWRhMi00NWEzLTgzMjctYjk5MmI5MDA2YWYzXCIsXG4gICAgfSxcbiAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICAvLyBTV1LjgpLkvb/nlKjjgZfjgabjga5BUEnlkbzjgbPlh7rjgZdcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSPENNUywge30+KGNtc3VybCwgZmV0Y2hlcik7XG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5lcnJvcjwvZGl2PjtcbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+O1xuXG4gIGNvbnN0IGFydGljbGVMaXN0ID0gZGF0YS5jb250ZW50cy5yZXZlcnNlKCk7XG4gIGNvbnN0IHBvc3QgPSBhcnRpY2xlTGlzdFswXTtcbiAgY29uc3QgYWxsUG9zdHMgPSBhcnRpY2xlTGlzdC5zbGljZSgxKTtcblxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgbWFya2Rvd25Ub0h0bWwocG9zdC5ibG9ndGV4dCB8fCBcIlwiKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0OiB7XG4gICAgICAgIC4uLnBvc3QsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICB9LFxuICAgICAgbW9yZVBvc3RzOiBhbGxQb3N0cyxcbiAgICB9LFxuICB9O1xuKi9cbi8qXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IHBhcmFtcy5wb3N0LFxuICAgICAgbW9yZVBvc3RzOiBwYXJhbXMubW9yZVBvc3RzLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgcG9zdCA9IGdldFBvc3RCeVNsdWcocGFyYW1zLnNsdWcsIFtcbiAgICBcInRpdGxlXCIsXG4gICAgXCJkYXRlXCIsXG4gICAgXCJzbHVnXCIsXG4gICAgXCJhdXRob3JcIixcbiAgICBcImNvbnRlbnRcIixcbiAgICBcIm9nSW1hZ2VcIixcbiAgICBcImNvdmVySW1hZ2VcIixcbiAgXSk7XG5cbiAgY29uc3QgY29udGVudCA9IGF3YWl0IG1hcmtkb3duVG9IdG1sKHBvc3QuY29udGVudCB8fCBcIlwiKTtcblxuICBjb25zdCBhbGxQb3N0cyA9IGdldEFsbFBvc3RzKFtcbiAgICBcInRpdGxlXCIsXG4gICAgXCJkYXRlXCIsXG4gICAgXCJzbHVnXCIsXG4gICAgXCJhdXRob3JcIixcbiAgICBcImNvdmVySW1hZ2VcIixcbiAgICBcImV4Y2VycHRcIixcbiAgXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdDoge1xuICAgICAgICAuLi5wb3N0LFxuICAgICAgICBjb250ZW50LFxuICAgICAgfSxcbiAgICAgIG1vcmVQb3N0czogYWxsUG9zdHMsXG4gICAgfSxcbiAgfTtcbiovXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgY21zdXJsID0gXCJodHRwczovL215YmxvZy1uZXh0anMubWljcm9jbXMuaW8vYXBpL3YxL2Jsb2dcIjtcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChjbXN1cmwsIHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJYLUFQSS1LRVlcIjogXCJjMmJmMzBkMy0xZGEyLTQ1YTMtODMyNy1iOTkyYjkwMDZhZjNcIixcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnN0IGFydGljbGVMaXN0ID0gcG9zdHMuY29udGVudHMucmV2ZXJzZSgpO1xuXG4gIGNvbnN0IHBhdGhzID0gYXJ0aWNsZUxpc3QubWFwKChhcnRpY2xlKSA9PiBgL3Bvc3RzLyR7YXJ0aWNsZS5pZC50b1N0cmluZygpfWApO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9OiBQYXJhbXMpIHtcbiAgY29uc3QgaWQgPSBwYXJhbXMuaWQ7XG5cbiAgY29uc3QgY21zdXJsID0gYGh0dHBzOi8vbXlibG9nLW5leHRqcy5taWNyb2Ntcy5pby9hcGkvdjEvYmxvZy8ke2lkfWA7XG4gIC8vY29uc3QgY21zdXJsID0gYGh0dHBzOi8vbXlibG9nLW5leHRqcy5taWNyb2Ntcy5pby9hcGkvdjEvYmxvZy9gO1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGNtc3VybCwge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlgtQVBJLUtFWVwiOiBcImMyYmYzMGQzLTFkYTItNDVhMy04MzI3LWI5OTJiOTAwNmFmM1wiLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnN0IGFydGljbGUgPSBwb3N0cy5jb250ZW50cztcblxuICAvLyAgY29uc3QgY29udGVudCA9IGF3YWl0IG1hcmtkb3duVG9IdG1sKGFydGljbGUuYmxvZ3RleHQgfHwgXCJcIik7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdDoge1xuICAgICAgICAuLi5hcnRpY2xlLFxuICAgICAgICBjbXN1cmwsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59XG4vKlxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9wb3N0c1wiKTtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0KSA9PiAoe1xuICAgIHBhcmFtczogeyBpZDogcG9zdC5pZCB9LFxuICB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG5cbmNvbnN0IHBvc3RzID0gZ2V0QWxsUG9zdHMoW1wic2x1Z1wiXSk7XG5cbnJldHVybiB7XG4gIHBhdGhzOiBhcnRpY2xlTGlzdC5tYXAoKGFydGljbGVMaXN0KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzbHVnOiBhcnRpY2xlTGlzdC5pZCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSksXG4gIGZhbGxiYWNrOiBmYWxzZSxcbn07XG4qL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==